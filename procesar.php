<?php

if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    $nombre = isset($_POST['nombre']) ? trim($_POST['nombre']) : '';
    $edad = isset($_POST['edad']) ? (int) $_POST['edad'] : 0;

    if (empty($nombre)) {
        echo "El nombre es obligatorio.";
        exit;
    }

    if ($edad <= 0) {
        echo "La edad debe ser mayor que 0.";
        exit;
    }

    $nombre = htmlspecialchars($nombre, ENT_QUOTES, 'UTF-8');

    echo "Hola, $nombre. Tienes $edad años.";

} else {
    echo "Acceso no permitido.";
}
?>