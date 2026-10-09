<?php
declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');

function sendContactJson(int $status, array $data): void
{
    http_response_code($status);
    echo json_encode($data, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    exit;
}

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    sendContactJson(405, ['message' => 'Méthode non autorisée.']);
}

if (!empty($_POST['website'])) {
    sendContactJson(200, ['message' => 'Message reçu.']);
}

$name = trim((string) ($_POST['name'] ?? ''));
$email = trim((string) ($_POST['email'] ?? ''));
$subject = trim((string) ($_POST['subject'] ?? ''));
$message = trim((string) ($_POST['message'] ?? ''));
$allowedSubjects = [
    'BI / Data Consulting',
    'Software Development',
    'Automation & AI',
    'IT Support / Security',
    'Other',
];

if ($name === '' || $email === '' || $subject === '' || $message === '') {
    sendContactJson(422, ['message' => 'Veuillez remplir tous les champs obligatoires.']);
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    sendContactJson(422, ['message' => 'Veuillez saisir une adresse courriel valide.']);
}

if (!in_array($subject, $allowedSubjects, true)) {
    sendContactJson(422, ['message' => 'Le sujet sélectionné est invalide.']);
}

if (strlen($name) > 200 || strlen($message) > 10000) {
    sendContactJson(422, ['message' => 'Certaines informations dépassent la longueur autorisée.']);
}

$recipient = 'finances@conceptinformatique.net';
$mailSubject = 'Message du site : ' . $subject;
$body = "Nouveau message reçu depuis le formulaire de contact.\n\n"
    . "Nom : {$name}\n"
    . "Courriel : {$email}\n"
    . "Sujet : {$subject}\n\n"
    . "Message :\n{$message}\n";

$boundary = '=_Contact_' . bin2hex(random_bytes(18));
$parts = [
    '--' . $boundary,
    'Content-Type: text/plain; charset=UTF-8',
    'Content-Transfer-Encoding: quoted-printable',
    '',
    quoted_printable_encode($body),
];

$attachments = [];
$totalAttachmentSize = 0;
$maxAttachmentSize = 10 * 1024 * 1024;
$uploadedFiles = $_FILES['attachment'] ?? null;
if ($uploadedFiles !== null) {
    if (!is_array($uploadedFiles)) {
        sendContactJson(422, ['message' => 'Le format des pièces jointes est invalide.']);
    }
    if (!is_array($uploadedFiles['name'] ?? null)) {
        foreach (['name', 'type', 'tmp_name', 'error', 'size'] as $field) {
            $uploadedFiles[$field] = isset($uploadedFiles[$field]) ? [$uploadedFiles[$field]] : [];
        }
    }
    if (!is_array($uploadedFiles['name'] ?? null) || count($uploadedFiles['name']) > 1) {
        sendContactJson(422, ['message' => 'Un seul fichier peut être joint au message.']);
    }

    $allowedTypes = [
        'pdf' => ['application/pdf'],
        'doc' => ['application/msword', 'application/x-ole-storage'],
        'docx' => [
            'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
            'application/zip',
        ],
    ];
    $fileInfo = new finfo(FILEINFO_MIME_TYPE);

    foreach ($uploadedFiles['name'] as $index => $uploadedName) {
        $uploadError = $uploadedFiles['error'][$index] ?? UPLOAD_ERR_NO_FILE;
        if ($uploadError === UPLOAD_ERR_NO_FILE) {
            continue;
        }
        if ($uploadError !== UPLOAD_ERR_OK) {
            sendContactJson(422, ['message' => 'Une pièce jointe n’a pas pu être téléversée.']);
        }

        $temporaryPath = $uploadedFiles['tmp_name'][$index] ?? '';
        $fileSize = (int) ($uploadedFiles['size'][$index] ?? 0);
        $totalAttachmentSize += $fileSize;
        if ($fileSize <= 0 || $totalAttachmentSize > $maxAttachmentSize || !is_uploaded_file($temporaryPath)) {
            sendContactJson(422, ['message' => 'La taille totale des pièces jointes ne doit pas dépasser 10 Mo.']);
        }

        $originalName = basename((string) $uploadedName);
        $extension = strtolower(pathinfo($originalName, PATHINFO_EXTENSION));
        $mimeType = $fileInfo->file($temporaryPath);
        if (!isset($allowedTypes[$extension]) || !in_array($mimeType, $allowedTypes[$extension], true)) {
            sendContactJson(422, ['message' => 'Seuls les fichiers PDF et Word (.doc, .docx) sont acceptés.']);
        }

        $fileContents = file_get_contents($temporaryPath);
        if ($fileContents === false) {
            sendContactJson(422, ['message' => 'Impossible de lire une pièce jointe.']);
        }

        $safeName = preg_replace('/[^A-Za-z0-9._-]/', '_', $originalName) ?: 'piece-jointe.' . $extension;
        $attachments[] = [
            'name' => $originalName,
            'safe_name' => $safeName,
            'mime_type' => $mimeType,
            'contents' => $fileContents,
        ];
    }
}

foreach ($attachments as $attachment) {
    $parts = array_merge($parts, [
        '--' . $boundary,
        'Content-Type: ' . $attachment['mime_type'] . '; name="' . $attachment['safe_name'] . '"',
        'Content-Transfer-Encoding: base64',
        'Content-Disposition: attachment; filename="' . $attachment['safe_name'] . '"; filename*=UTF-8\'\'' . rawurlencode($attachment['name']),
        '',
        chunk_split(base64_encode($attachment['contents'])),
    ]);
}

$parts[] = '--' . $boundary . '--';
$parts[] = '';
$encodedSubject = '=?UTF-8?B?' . base64_encode($mailSubject) . '?=';
$headers = [
    'From: =?UTF-8?B?' . base64_encode('Concept Informatique') . "?= <{$recipient}>",
    'Reply-To: ' . $email,
    'MIME-Version: 1.0',
    'Content-Type: multipart/mixed; boundary="' . $boundary . '"',
];

$sent = mail($recipient, $encodedSubject, implode("\r\n", $parts), implode("\r\n", $headers), '-f' . $recipient);
if (!$sent) {
    error_log('Contact form email could not be handed to the local mail transport.');
    sendContactJson(500, ['message' => 'Le serveur de messagerie n’a pas accepté le message. Veuillez réessayer.']);
}

sendContactJson(200, ['message' => 'Message envoyé.']);