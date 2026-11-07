# Mise en ligne automatique sur cPanel

Chaque envoi sur la branche `main` de GitHub met le site en ligne tout seul :
GitHub construit le site (`npm run build`), puis copie le dossier `dist/` dans le dossier du site sur cPanel,
en FTP sécurisé. Il n'y a plus d'archive à envoyer ni à décompresser.

Le fichier qui fait ce travail : `.github/workflows/deploy-cpanel.yml`.

## Mise en place (une seule fois, environ 10 minutes)

### 1. Créer un compte FTP réservé au déploiement (dans cPanel)

1. cPanel → **Comptes FTP** (FTP Accounts).
2. Nom d'utilisateur : par exemple `deploiement` ; domaine : `conceptinformatique.net`.
3. Mot de passe : utilisez le générateur de cPanel, et gardez-le pour l'étape 2.
4. **Répertoire** : le dossier où se trouve le site (souvent `public_html`).
   Le compte ne verra alors que ce dossier : c'est plus sûr.
5. Créez le compte. Dans la liste, cliquez sur **Configurer le client FTP** : notez le
   **serveur FTP** indiqué (ex. `ftp.conceptinformatique.net`).

### 2. Ajouter les secrets dans GitHub

Sur https://github.com/mteingueng-dot/conceptinformatique :
**Settings → Secrets and variables → Actions → New repository secret**, puis créez :

| Nom du secret    | Valeur                                                                 |
|------------------|------------------------------------------------------------------------|
| `FTP_SERVER`     | le serveur FTP noté à l'étape 1 (ex. `ftp.conceptinformatique.net`)    |
| `FTP_USERNAME`   | le nom complet du compte (ex. `deploiement@conceptinformatique.net`)   |
| `FTP_PASSWORD`   | le mot de passe du compte FTP                                          |
| `FTP_SERVER_DIR` | `./` si le compte s'ouvre directement sur le dossier du site, sinon `public_html/` |

Les secrets sont chiffrés par GitHub et ne sont jamais visibles dans le code ni dans les journaux.
Le dépôt est public : **ne mettez jamais de mot de passe dans un fichier du projet.**

### 3. Lancer une première mise en ligne

GitHub → onglet **Actions** → **Mise en ligne cPanel** → **Run workflow**.
La première fois, tous les fichiers sont envoyés (1 à 3 minutes) ; ensuite, seulement ceux qui ont changé.

## Au quotidien

- Modifier le site, puis envoyer sur `main` : la mise en ligne suit automatiquement.
- Suivre le résultat dans l'onglet **Actions** (coche verte = en ligne, croix rouge = erreur, avec le détail).
- Si la compilation échoue, rien n'est envoyé : le site en ligne reste intact.

## En cas de problème

- **« 530 Login authentication failed »** : nom d'utilisateur ou mot de passe incorrect dans les secrets.
- **Erreur de certificat / FTPS** : certains hébergeurs n'acceptent pas FTPS sur le nom `ftp.` ; essayez
  le nom du serveur cPanel (affiché dans « Configurer le client FTP ») comme `FTP_SERVER`.
- **Les fichiers arrivent dans le mauvais dossier** : corrigez `FTP_SERVER_DIR`.
- Les archives `.zip` restent possibles en secours (envoi manuel dans le gestionnaire de fichiers).
