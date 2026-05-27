<?php $role = user()['role'] ?? ''; ?>
<aside class="sidebar">
    <div class="brand">
        <div class="brand-icon">E</div>
        <div>
            <strong>Ekskul Web</strong>
            <span>Admin Sekolah</span>
        </div>
    </div>
    <nav class="menu">
        <a class="<?= $currentPage == 'dashboard.php' ? 'active' : ''; ?>" href="dashboard.php">Dashboard</a>
        <a class="<?= $currentPage == 'ekskul.php' ? 'active' : ''; ?>" href="ekskul.php">Data Ekskul</a>
        <?php if ($role == 'admin'): ?>
            <a class="<?= $currentPage == 'siswa.php' ? 'active' : ''; ?>" href="siswa.php">Data Siswa</a>
        <?php endif; ?>
        <a class="<?= $currentPage == 'pendaftaran.php' ? 'active' : ''; ?>" href="pendaftaran.php">Anggota</a>
        <a class="<?= $currentPage == 'jadwal.php' ? 'active' : ''; ?>" href="jadwal.php">Jadwal</a>
        <a class="<?= $currentPage == 'absensi.php' ? 'active' : ''; ?>" href="absensi.php">Absensi</a>
        <a class="<?= $currentPage == 'laporan.php' ? 'active' : ''; ?>" href="laporan.php">Laporan</a>
    </nav>
    <a class="logout" href="logout.php">Logout</a>
</aside>
