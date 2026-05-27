<?php
require_once __DIR__ . '/../config/auth.php';
$currentPage = basename($_SERVER['PHP_SELF']);
?>
<!doctype html>
<html lang="id">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title><?= $title ?? 'Sistem Informasi Ekstrakurikuler'; ?></title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="assets/css/style.css">
</head>
<body>
<div class="app">
    <?php include __DIR__ . '/sidebar.php'; ?>
    <main class="main-content">
        <nav class="topbar">
            <div>
                <h1><?= $pageTitle ?? 'Dashboard'; ?></h1>
                <p>Sistem Informasi Ekstrakurikuler Berbasis Web</p>
            </div>
            <div class="user-pill">
                <span><?= htmlspecialchars(user()['nama'] ?? 'User'); ?></span>
                <small><?= htmlspecialchars(ucfirst(user()['role'] ?? '')); ?></small>
            </div>
        </nav>
        <section class="content">
