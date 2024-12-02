<?php
$email_regex = '/^([a-z0-9!#$%&\'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&\'*+\/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9]))$/i';

$errors = [];

function validatePhone($phone) {
    // Удаляем все нецифровые символы
    $cleanPhone = preg_replace('/[^0-9]/', '', $phone);

    // Проверяем длину (не менее 10 цифр)
    if (strlen($cleanPhone) < 10) {
        return false;
    }

    // Проверяем код оператора (не должен начинаться с 0, 1, 2, 5)
    if (in_array(substr($cleanPhone, 0, 1), ['0', '1', '2', '5'])) {
        return false;
    }

    return true;
}

$contentType = isset($_SERVER["CONTENT_TYPE"]) ? trim($_SERVER["CONTENT_TYPE"]) : '';
if (stripos($contentType, 'application/json') === false) {
    http_response_code(400);
    echo json_encode(['error' => 'Content-Type must be application/json']);
    exit;
}

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $body = file_get_contents('php://input');
    $data = json_decode($body, true);

    if (json_last_error() !== JSON_ERROR_NONE) {
        http_response_code(400);
        echo json_encode(['error' => 'Invalid JSON: ' . json_last_error_msg()]);
        exit;
    }

    $name = trim($data["name"] ?? "");
    $phone = trim($data["phone"] ?? "");
    $email = trim($data["email"] ?? "");
    $sopd = $data["sopd"] ?? "";

    if (empty($name)) {
        $errors[] = "ФИО обязательно для заполнения";
    }

    if (empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL) || !preg_match($email_regex, $email)) {
        $errors[] = "Пожалуйста, введите корректный email. Например pochta@email.com";
    }

    if (empty($phone) || !validatePhone($phone)) {
        $errors[] = "Пожалуйста, введите корректный номер телефона. Например +7 (912) 000-00-01";
    }

    if (empty($sopd)) {
        $errors[] = "Согласие на обработку персональных данных обязательно для заполнения";
    }

    if (empty($errors)) {
        $headers = 'From: send@moishtil18.ru' . "\r\n" . 'X-Mailer: PHP/' . phpversion();
        $emailBody = "Имя: $name\n";
        $emailBody .= "Телефон: $phone\n";
        $emailBody .= "Email: $email\n";

        mail('carwash@moishtil18.ru', 'Заявка на корпоративное обслуживание', $emailBody, $headers);
    } else {
        echo "<h2>Ошибки при заполнении формы:</h2>";
        echo "<ul>";
        foreach ($errors as $error) {
            echo "<li>" . htmlspecialchars($error) . "</li>";
        }
        echo "</ul>";
    }
} else {
    echo "<p>Ошибка: форма должна быть отправлена методом POST</p>";
}
?>