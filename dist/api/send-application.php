<?php
declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');

function sendJsonResponse(int $status, array $data): void
{
    http_response_code($status);
    echo json_encode($data, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    exit;
}

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    sendJsonResponse(405, ['message' => 'Méthode non autorisée.']);
}

if (!empty($_POST['website'])) {
    sendJsonResponse(200, ['message' => 'Candidature reçue.']);
}

$name = trim((string) ($_POST['name'] ?? ''));
$email = trim((string) ($_POST['email'] ?? ''));
$phone = trim((string) ($_POST['phone'] ?? ''));
$position = preg_replace('/[\x00-\x1F\x7F]+/', ' ', trim((string) ($_POST['position'] ?? ''))) ?? '';
$message = trim((string) ($_POST['message'] ?? ''));
$linkedin = trim((string) ($_POST['linkedin_url'] ?? ''));
$cvUrl = trim((string) ($_POST['cv_url'] ?? ''));

if ($name === '' || $email === '' || $phone === '' || $position === '' || $message === '') {
    sendJsonResponse(422, ['message' => 'Veuillez remplir tous les champs obligatoires.']);
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    sendJsonResponse(422, ['message' => 'Veuillez saisir une adresse courriel valide.']);
}

if (strlen($name) > 200 || strlen($phone) > 60 || strlen($position) > 200 || strlen($message) > 10000) {
    sendJsonResponse(422, ['message' => 'Certaines informations dépassent la longueur autorisée.']);
}

$recipient = 'finances@conceptinformatique.net';
$subject = $position === 'Candidature spontanée'
    ? 'Candidature spontanée'
    : 'Candidature - ' . $position;
$body = "Nouvelle candidature reçue depuis le site web.\n\n"
    . "Nom et prénom : {$name}\n"
    . "Courriel : {$email}\n"
    . "Téléphone : {$phone}\n"
    . "Poste visé : {$position}\n"
    . ($linkedin !== '' ? "Profil LinkedIn : {$linkedin}\n" : '')
    . ($cvUrl !== '' ? "Lien vers le CV : {$cvUrl}\n" : '')
    . "\nMessage :\n{$message}\n";

$boundary = '=_Application_' . bin2hex(random_bytes(18));
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
        sendJsonResponse(422, ['message' => 'Le format des pièces jointes est invalide.']);
    }
    if (!is_array($uploadedFiles['name'] ?? null)) {
        foreach (['name', 'type', 'tmp_name', 'error', 'size'] as $field) {
            $uploadedFiles[$field] = isset($uploadedFiles[$field]) ? [$uploadedFiles[$field]] : [];
        }
    }
    if (!is_array($uploadedFiles['name'] ?? null) || count($uploadedFiles['name']) > 1) {
        sendJsonResponse(422, ['message' => 'Un seul fichier peut être joint à la candidature.']);
    }

    $allowedTypes = [
        'pdf' => ['application/pdf'],
        'doc' => ['application/msword', 'application/x-ole-storage'],
        'docx' => ['application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/zip'],
    ];
    $fileInfo = new finfo(FILEINFO_MIME_TYPE);

    foreach ($uploadedFiles['name'] as $index => $uploadedName) {
        $uploadError = $uploadedFiles['error'][$index] ?? UPLOAD_ERR_NO_FILE;
        if ($uploadError === UPLOAD_ERR_NO_FILE) {
            continue;
        }
        if ($uploadError !== UPLOAD_ERR_OK) {
            sendJsonResponse(422, ['message' => 'Une pièce jointe n’a pas pu être téléversée.']);
        }

        $temporaryPath = $uploadedFiles['tmp_name'][$index] ?? '';
        $fileSize = (int) ($uploadedFiles['size'][$index] ?? 0);
        $totalAttachmentSize += $fileSize;
        if ($fileSize <= 0 || $totalAttachmentSize > $maxAttachmentSize || !is_uploaded_file($temporaryPath)) {
            sendJsonResponse(422, ['message' => 'La taille totale des pièces jointes ne doit pas dépasser 10 Mo.']);
        }

        $originalName = basename((string) $uploadedName);
        $extension = strtolower(pathinfo($originalName, PATHINFO_EXTENSION));
        $mimeType = $fileInfo->file($temporaryPath);
        if (!isset($allowedTypes[$extension]) || !in_array($mimeType, $allowedTypes[$extension], true)) {
            sendJsonResponse(422, ['message' => 'Seuls les fichiers PDF et Word sont acceptés.']);
        }

        $fileContents = file_get_contents($temporaryPath);
        if ($fileContents === false) {
            sendJsonResponse(422, ['message' => 'Impossible de lire une pièce jointe.']);
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
$encodedSubject = '=?UTF-8?B?' . base64_encode($subject) . '?=';
$headers = [
    'From: =?UTF-8?B?' . base64_encode('Concept Informatique') . "?= <{$recipient}>",
    'Reply-To: ' . $email,
    'MIME-Version: 1.0',
    'Content-Type: multipart/mixed; boundary="' . $boundary . '"',
];

$sent = mail($recipient, $encodedSubject, implode("\r\n", $parts), implode("\r\n", $headers), '-f' . $recipient);
if (!$sent) {
    error_log('Career application email could not be handed to the local mail transport.');
    sendJsonResponse(500, ['message' => 'Le serveur de messagerie n’a pas accepté la candidature. Veuillez réessayer.']);
}

sendJsonResponse(200, ['message' => 'Candidature envoyée.']);