<?php
if (session_status() === PHP_SESSION_NONE) {
    session_start();
}

function isLogin()
{
    return isset($_SESSION['user']);
}

function user()
{
    return $_SESSION['user'] ?? null;
}

function requireLogin()
{
    if (!isLogin()) {
        header('Location: login.php');
        exit;
    }
}

function requireRole($roles)
{
    requireLogin();
    $roles = is_array($roles) ? $roles : [$roles];

    if (!in_array(user()['role'], $roles)) {
        header('Location: dashboard.php');
        exit;
    }
}

function canManage()
{
    return isLogin() && in_array(user()['role'], ['admin', 'pembina']);
}
?>
