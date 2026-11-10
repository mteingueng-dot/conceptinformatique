"""Vidéo de présentation Concept Informatique (1920x1080, 30 i/s, ~32 s), versions fr et en.

Rendu image par image avec Pillow, encodage H.264 avec le ffmpeg fourni par imageio-ffmpeg.
Usage : python make_video.py <dossier_du_site> <dossier_de_sortie> [fr|en|all] [--preview]
"""
import math
import subprocess
import sys
from pathlib import Path

import imageio_ffmpeg
from PIL import Image, ImageDraw, ImageFilter, ImageFont

SITE = Path(sys.argv[1])
OUT = Path(sys.argv[2])
WHICH = sys.argv[3] if len(sys.argv) > 3 else 'all'
PREVIEW = '--preview' in sys.argv

W, H, FPS = 1920, 1080, 30
DURATION = 32.0

NAVY = (11, 31, 58)
BLUE = (21, 89, 209)
BLUE5 = (31, 111, 235)
GREEN = (22, 179, 100)
GREEN6 = (10, 122, 67)
SLATE = (71, 85, 105)
WHITE = (255, 255, 255)

FONTS = Path('C:/Windows/Fonts')
def font(name, size):
    return ImageFont.truetype(str(FONTS / name), size)
F_BLACK = lambda s: font('seguibl.ttf', s)
F_BOLD = lambda s: font('segoeuib.ttf', s)
F_SEMI = lambda s: font('seguisb.ttf', s)
F_REG = lambda s: font('segoeui.ttf', s)

TEXT = {
    'fr': {
        'tagline': 'Services informatiques à Sherbrooke et en Estrie',
        'h1': ['Vos données.', 'Vos logiciels.', 'Votre croissance.'],
        'h1sub': 'Le partenaire TI des organisations de l’Estrie',
        'svcTag': 'CE QUE NOUS FAISONS',
        'services': [
            ('Logiciels sur mesure', 'Applications web et mobiles'),
            ('Intelligence d’affaires', 'Tableaux de bord Power BI'),
            ('Ingénierie de données', 'Pipelines et Microsoft Fabric'),
            ('Support TI & sécurité', 'Soutien et cybersécurité'),
            ('Automatisation IA', 'Agents et modèles en production'),
            ('Architecture infonuagique', 'Azure et services infonuagiques'),
        ],
        'workTag': 'NOS RÉALISATIONS',
        'workTitle': 'Marché Mvog-Mbi',
        'workText': ['Site web de l’épicerie Marché Mvog-Mbi à Sherbrooke :', 'catalogue de plus de 2 000 produits, recherche,', 'rayons, recettes et livraison.'],
        'workBy': 'Conçu et développé par Concept Informatique',
        'whyTag': 'POURQUOI NOUS CHOISIR',
        'why': [('Sur mesure', 'Des solutions bâties pour vos besoins'), ('Technologies modernes', 'Données, infonuagique et IA'), ('Équipe locale', 'À Sherbrooke, en français et en anglais')],
        'cta': 'Parlons de votre projet',
        'ctaSub': 'Consultation sans engagement',
    },
    'en': {
        'tagline': 'IT services in Sherbrooke and the Eastern Townships',
        'h1': ['Your data.', 'Your software.', 'Your growth.'],
        'h1sub': 'The IT partner of Eastern Townships organizations',
        'svcTag': 'WHAT WE DO',
        'services': [
            ('Custom software', 'Web and mobile applications'),
            ('Business intelligence', 'Power BI dashboards'),
            ('Data engineering', 'Pipelines and Microsoft Fabric'),
            ('IT support & security', 'Support and cybersecurity'),
            ('AI automation', 'Agents and models in production'),
            ('Cloud architecture', 'Azure and cloud services'),
        ],
        'workTag': 'OUR WORK',
        'workTitle': 'Marché Mvog-Mbi',
        'workText': ['Website for the Marché Mvog-Mbi grocery store in Sherbrooke:', 'a catalogue of over 2,000 products, search,', 'aisles, recipes and delivery.'],
        'workBy': 'Designed and developed by Concept Informatique',
        'whyTag': 'WHY CHOOSE US',
        'why': [('Tailor-made', 'Solutions built for your needs'), ('Modern technology', 'Data, cloud and AI'), ('Local team', 'In Sherbrooke, in French and English')],
        'cta': "Let's talk about your project",
        'ctaSub': 'No-obligation consultation',
    },
}

# ---------- outils ----------
def fit(maker, txt, size, maxw):
    while maker(size).getlength(txt) > maxw and size > 12:
        size -= 1
    return maker(size)

def ease(x):
    x = max(0.0, min(1.0, x))
    return 1 - (1 - x) ** 3

def ease_io(x):
    x = max(0.0, min(1.0, x))
    return x * x * (3 - 2 * x)

def text_img(txt, f, fill, pad=8):
    l, t, r, b = f.getbbox(txt)
    im = Image.new('RGBA', (r - l + pad * 2, b - t + pad * 2), (0, 0, 0, 0))
    ImageDraw.Draw(im).text((pad - l, pad - t), txt, font=f, fill=fill)
    return im

def gradient_text_img(txt, f, c1, c2, pad=8):
    mask = text_img(txt, f, WHITE, pad).getchannel('A')
    w, h = mask.size
    grad = Image.new('RGBA', (w, h))
    px = grad.load()
    for x in range(w):
        k = x / max(1, w - 1)
        c = tuple(int(c1[i] + (c2[i] - c1[i]) * k) for i in range(3))
        for y in range(h):
            px[x, y] = c + (255,)
    grad.putalpha(mask)
    return grad

def rounded(w, h, r, fill, outline=None, shadow=True):
    s = 40 if shadow else 0
    im = Image.new('RGBA', (w + s * 2, h + s * 2), (0, 0, 0, 0))
    if shadow:
        sh = Image.new('RGBA', im.size, (0, 0, 0, 0))
        ImageDraw.Draw(sh).rounded_rectangle((s, s + 18, s + w, s + h + 18), r, fill=(11, 31, 58, 45))
        im = Image.alpha_composite(im, sh.filter(ImageFilter.GaussianBlur(22)))
    d = ImageDraw.Draw(im)
    d.rounded_rectangle((s, s, s + w, s + h), r, fill=fill, outline=outline, width=2 if outline else 0)
    return im, s

def with_alpha(im, a):
    if a >= 0.999:
        return im
    im = im.copy()
    im.putalpha(im.getchannel('A').point(lambda v: int(v * a)))
    return im

def load_logo(path, height):
    im = Image.open(path).convert('RGBA')
    bbox = im.getbbox()
    im = im.crop(bbox)
    w = round(im.width * height / im.height)
    return im.resize((w, height), Image.LANCZOS)

# ---------- fond ----------
def make_background():
    bg = Image.new('RGB', (W, H))
    top, bottom = (244, 248, 255), (226, 237, 255)
    d = ImageDraw.Draw(bg)
    for y in range(H):
        k = y / H
        d.line([(0, y), (W, y)], fill=tuple(int(top[i] + (bottom[i] - top[i]) * k) for i in range(3)))
    bg = bg.convert('RGBA')
    grid = Image.new('RGBA', (W, H), (0, 0, 0, 0))
    g = ImageDraw.Draw(grid)
    for x in range(0, W, 80):
        g.line([(x, 0), (x, H)], fill=(31, 111, 235, 14))
    for y in range(0, H, 80):
        g.line([(0, y), (W, y)], fill=(31, 111, 235, 14))
    bg = Image.alpha_composite(bg, grid)
    glow = Image.new('RGBA', (W, H), (0, 0, 0, 0))
    gd = ImageDraw.Draw(glow)
    gd.ellipse((W - 760, -340, W + 260, 640), fill=(31, 111, 235, 40))
    gd.ellipse((-360, H - 520, 520, H + 360), fill=(22, 179, 100, 34))
    return Image.alpha_composite(bg, glow.filter(ImageFilter.GaussianBlur(120)))

PARTICLES = [((i * 7919) % W, (i * 104729) % H, 2 + (i % 4), 0.2 + (i % 7) / 10, (i % 3)) for i in range(36)]

def particles(frame, t):
    d = ImageDraw.Draw(frame)
    for x0, y0, r, sp, c in PARTICLES:
        x = (x0 + t * 22 * sp) % W
        y = (y0 + math.sin(t * sp + x0) * 18) % H
        col = (31, 111, 235, 45) if c else (22, 179, 100, 55)
        d.ellipse((x - r, y - r, x + r, y + r), fill=col)

# ---------- éléments animés ----------
class El:
    def __init__(self, im, x, y, t_in, t_out, dy=40, dx=0, dur=0.7, anchor='lt'):
        self.im, self.t_in, self.t_out, self.dy, self.dx, self.dur = im, t_in, t_out, dy, dx, dur
        if anchor == 'mt':
            x -= im.width // 2
        self.x, self.y = x, y

    def draw(self, frame, t):
        if t < self.t_in or t > self.t_out:
            return
        a_in = ease((t - self.t_in) / self.dur)
        a_out = 1 - ease_io((t - (self.t_out - 0.45)) / 0.45)
        a = min(a_in, a_out)
        if a <= 0.01:
            return
        off = (1 - a_in) * self.dy
        offx = (1 - a_in) * self.dx
        frame.alpha_composite(with_alpha(self.im, a), (int(self.x + offx), int(self.y + off)))

def build(lang):
    T = TEXT[lang]
    els = []
    logo_big = load_logo(SITE / 'public/logo-concept-informatique.png', 520)
    logo_small = load_logo(SITE / 'public/logo-concept-informatique.png', 300)

    # Scène 1 : logo (0 – 4,6 s)
    S1 = (0.0, 4.6)
    els.append(('logo', logo_big, S1))
    tag = text_img(T['tagline'], F_SEMI(46), NAVY)
    els.append(El(tag, W // 2, 760, 1.4, S1[1], anchor='mt'))
    bar = Image.new('RGBA', (220, 6), GREEN + (255,))
    els.append(El(bar, W // 2, 850, 1.8, S1[1], dy=0, anchor='mt'))

    # Scène 2 : accroche (4,6 – 9,8 s)
    S2 = (4.6, 9.8)
    y = 260
    for i, line in enumerate(T['h1']):
        im = gradient_text_img(line, F_BLACK(118), BLUE, GREEN) if i == 2 else text_img(line, F_BLACK(118), NAVY)
        els.append(El(im, 180, y, S2[0] + 0.15 + i * 0.55, S2[1], dx=-60, dy=0))
        y += 150
    els.append(El(text_img(T['h1sub'], F_REG(44), SLATE), 186, y + 40, S2[0] + 2.0, S2[1]))

    # Scène 3 : services (9,8 – 18,4 s)
    S3 = (9.8, 18.4)
    els.append(El(text_img(T['svcTag'], F_BOLD(30), GREEN6), W // 2, 120, S3[0], S3[1], anchor='mt'))
    cw, ch, gap = 500, 250, 50
    x0 = (W - (cw * 3 + gap * 2)) // 2
    for i, (title, sub) in enumerate(T['services']):
        card, s = rounded(cw, ch, 32, WHITE + (255,), outline=(226, 232, 240))
        d = ImageDraw.Draw(card)
        col = GREEN if i == 4 else BLUE5
        d.rounded_rectangle((s + 36, s + 36, s + 100, s + 100), 18, fill=col)
        num = f'{i + 1:02d}'
        nf = F_BOLD(28)
        l, tt, r, b = nf.getbbox(num)
        d.text((s + 68 - (r - l) / 2 - l, s + 68 - (b - tt) / 2 - tt), num, font=nf, fill=WHITE)
        d.text((s + 36, s + 130), title, font=fit(F_BOLD, title, 40, cw - 72), fill=NAVY)
        d.text((s + 36, s + 188), sub, font=fit(F_REG, sub, 30, cw - 72), fill=SLATE)
        cx = x0 + (i % 3) * (cw + gap) - s
        cy = 230 + (i // 3) * (ch + gap) - s
        els.append(El(card, cx, cy, S3[0] + 0.5 + i * 0.35, S3[1], dy=60))
    tagline2 = text_img('conceptinformatique.net/services', F_SEMI(32), BLUE)
    els.append(El(tagline2, W // 2, 880, S3[0] + 3.0, S3[1], anchor='mt'))

    # Scène 4 : réalisations (18,4 – 24,2 s)
    S4 = (18.4, 24.2)
    panel, s = rounded(620, 640, 40, (13, 59, 32, 255))
    pd = ImageDraw.Draw(panel)
    for yy in range(640):
        k = yy / 640
        c = tuple(int((31, 107, 58)[j] + ((13, 59, 32)[j] - (31, 107, 58)[j]) * k) for j in range(3))
        pd.line([(s + 1, s + yy), (s + 619, s + yy)], fill=c)
    mask = Image.new('L', panel.size, 0)
    ImageDraw.Draw(mask).rounded_rectangle((s, s, s + 620, s + 640), 40, fill=255)
    inner = panel.copy()
    panel = rounded(620, 640, 40, (13, 59, 32, 255))[0]
    panel.paste(inner, (0, 0), mask)
    mv = load_logo(SITE / 'public/realisations/marche-mvog-mbi-logo.webp', 420)
    tile = Image.new('RGBA', (mv.width + 56, mv.height + 56), (0, 0, 0, 0))
    ImageDraw.Draw(tile).rounded_rectangle((0, 0, tile.width - 1, tile.height - 1), 36, fill=WHITE)
    tile.alpha_composite(mv, (28, 28))
    panel.alpha_composite(tile, (s + (620 - tile.width) // 2, s + (640 - tile.height) // 2))
    els.append(El(panel, 160 - s, 220 - s, S4[0] + 0.1, S4[1], dx=-80, dy=0))
    tx = 900
    els.append(El(text_img(T['workTag'], F_BOLD(30), GREEN6), tx, 250, S4[0] + 0.3, S4[1]))
    els.append(El(text_img(T['workTitle'], F_BLACK(96), NAVY), tx, 300, S4[0] + 0.55, S4[1]))
    for i, line in enumerate(T['workText']):
        els.append(El(text_img(line, fit(F_REG, max(T['workText'], key=len), 40, W - tx - 120), SLATE), tx, 450 + i * 58, S4[0] + 0.9 + i * 0.12, S4[1]))
    pf = F_SEMI(34)
    pill, ps = rounded(int(pf.getlength(T['workBy'])) + 80, 86, 43, NAVY + (255,), shadow=False)
    ImageDraw.Draw(pill).text((ps + 40, ps + 18), T['workBy'], font=pf, fill=WHITE)
    els.append(El(pill, tx, 660, S4[0] + 1.6, S4[1]))
    els.append(El(text_img('marchemvogmbi.com', F_SEMI(36), GREEN6), tx + 4, 780, S4[0] + 2.0, S4[1]))

    # Scène 5 : pourquoi nous (24,2 – 28,4 s)
    S5 = (24.2, 28.4)
    els.append(El(text_img(T['whyTag'], F_BOLD(30), GREEN6), W // 2, 200, S5[0], S5[1], anchor='mt'))
    colw = 520
    xs = (W - colw * 3) // 2
    for i, (title, sub) in enumerate(T['why']):
        card, s = rounded(colw - 40, 380, 36, WHITE + (255,), outline=(226, 232, 240))
        d = ImageDraw.Draw(card)
        d.ellipse((s + 40, s + 44, s + 120, s + 124), fill=GREEN if i == 1 else BLUE5)
        d.line([(s + 60, s + 86), (s + 76, s + 102), (s + 102, s + 68)], fill=WHITE, width=9, joint='curve')
        d.text((s + 40, s + 170), title, font=fit(F_BOLD, title, 46, colw - 120), fill=NAVY)
        words, lines, cur = sub.split(), [], ''
        for wd in words:
            test = (cur + ' ' + wd).strip()
            if F_REG(32).getlength(test) > colw - 120:
                lines.append(cur)
                cur = wd
            else:
                cur = test
        lines.append(cur)
        for j, ln in enumerate(lines):
            d.text((s + 40, s + 245 + j * 44), ln, font=F_REG(32), fill=SLATE)
        els.append(El(card, xs + i * colw + 20 - s, 300 - s, S5[0] + 0.3 + i * 0.3, S5[1], dy=70))

    # Scène 6 : appel à l'action (28,4 – 32 s)
    S6 = (28.4, DURATION + 1)
    els.append(El(logo_small, W // 2, 110, S6[0], S6[1], anchor='mt', dy=20))
    els.append(El(text_img(T['cta'], F_BLACK(96), NAVY), W // 2, 450, S6[0] + 0.3, S6[1], anchor='mt'))
    btn, bs = rounded(820, 110, 55, BLUE + (255,))
    bf = F_BOLD(50)
    url = 'conceptinformatique.net'
    ImageDraw.Draw(btn).text((bs + (820 - bf.getlength(url)) / 2, bs + 18), url, font=bf, fill=WHITE)
    els.append(El(btn, W // 2, 600 - bs, S6[0] + 0.7, S6[1], anchor='mt'))
    els.append(El(text_img('514 712-0371  ·  Sherbrooke, QC', F_SEMI(42), NAVY), W // 2, 770, S6[0] + 1.0, S6[1], anchor='mt'))
    els.append(El(text_img(T['ctaSub'], F_REG(36), SLATE), W // 2, 840, S6[0] + 1.2, S6[1], anchor='mt'))
    return els, logo_big, S1

def render(lang):
    els, logo_big, S1 = build(lang)
    bg = make_background()
    n = int(DURATION * FPS)
    out = OUT / f'concept-informatique-presentation-{lang}.mp4'
    cmd = [imageio_ffmpeg.get_ffmpeg_exe(), '-y', '-loglevel', 'error', '-f', 'rawvideo', '-pix_fmt', 'rgb24',
           '-s', f'{W}x{H}', '-r', str(FPS), '-i', '-', '-c:v', 'libx264', '-preset', 'slow', '-crf', '20',
           '-pix_fmt', 'yuv420p', '-movflags', '+faststart', str(out)]
    proc = None if PREVIEW else subprocess.Popen(cmd, stdin=subprocess.PIPE)
    shots = {int(x * FPS) for x in (3.5, 8.5, 16.5, 22.5, 27.0, 31.0)}
    for f in range(n):
        if PREVIEW and f not in shots:
            continue
        t = f / FPS
        frame = bg.copy()
        particles(frame, t)
        for e in els:
            if isinstance(e, tuple):
                _, im, (a, b) = e
                if t > b:
                    continue
                k = ease((t - 0.2) / 1.1)
                fade = 1 - ease_io((t - (b - 0.45)) / 0.45)
                if k <= 0.01:
                    continue
                sc = 0.82 + 0.18 * k
                im2 = im.resize((int(im.width * sc), int(im.height * sc)), Image.BILINEAR)
                frame.alpha_composite(with_alpha(im2, min(k, fade)), (W // 2 - im2.width // 2, 400 - im2.height // 2))
            else:
                e.draw(frame, t)
        # fondu au début et à la fin
        if t < 0.3 or t > DURATION - 0.6:
            k = min(1.0, t / 0.3) if t < 0.3 else max(0.0, (DURATION - t) / 0.6)
            frame = Image.blend(Image.new('RGBA', (W, H), (244, 248, 255, 255)), frame, k)
        rgb = frame.convert('RGB')
        if PREVIEW:
            rgb.resize((960, 540)).save(OUT / f'apercu-{lang}-{t:05.1f}.png')
        else:
            proc.stdin.write(rgb.tobytes())
    if proc:
        proc.stdin.close()
        proc.wait()
        print('écrit', out)

OUT.mkdir(parents=True, exist_ok=True)
for lang in (['fr', 'en'] if WHICH == 'all' else [WHICH]):
    render(lang)
