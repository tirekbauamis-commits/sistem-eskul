# Sistem Informasi Ekstrakurikuler Berbasis Web

Aplikasi dashboard ekstrakurikuler sekolah yang bisa dijalankan lewat XAMPP/localhost tanpa MySQL. Data disimpan di browser menggunakan `localStorage`, jadi cukup jalankan Apache.

## Struktur Folder

```text
sistem-ekstrakurikuler/
|-- assets/
|   |-- css/
|   |   `-- style.css
|   `-- js/
|       `-- app.js
|-- config/
|   |-- auth.php
|   `-- database.php
|-- includes/
|   |-- footer.php
|   |-- header.php
|   `-- sidebar.php
|-- absensi.php
|-- buka-aplikasi.bat
|-- dashboard.php
|-- database.sql
|-- ekskul.php
|-- index.html
|-- index.php
|-- jadwal.php
|-- laporan.php
|-- login.php
|-- logout.php
|-- pendaftaran.php
`-- siswa.php
```

## Cara Menjalankan Lewat XAMPP/Localhost

1. Salin folder project ke `C:\xampp\htdocs\sistem-ekstrakurikuler`.
2. Buka XAMPP Control Panel.
3. Klik **Start** pada Apache saja.
4. Buka browser.
5. Akses `http://localhost/sistem-ekstrakurikuler/`.

Tidak perlu menjalankan MySQL dan tidak perlu import database untuk versi ini. File `database.sql` tetap disediakan sebagai rancangan database MySQL, termasuk tabel `password_resets` untuk alur lupa password.

## Akun Demo

| Role | Email | Password |
| --- | --- | --- |
| Admin | admin@sekolah.test | admin123 |
| Pembina | pembina@sekolah.test | pembina123 |
| Siswa | andi@gmail.com | siswa123 |

Pengguna baru bisa membuat akun melalui tombol **Daftar** di halaman login. Akun baru otomatis menjadi akun siswa.

Jika lupa password, klik **Lupa password?**, masukkan email akun, lalu sistem akan membuka form **Ganti Password**. Password baru langsung tersimpan di data browser aplikasi.

## Pembagian Fitur

- Admin: dashboard umum, data ekskul, data siswa, anggota, jadwal, absensi, dan laporan.
- Pembina: dashboard pembina, data ekskul, anggota, jadwal, absensi, dan laporan.
- Siswa: dashboard siswa, daftar ekskul, pendaftaran sendiri, jadwal ekskul yang diikuti, dan riwayat sendiri.

## Catatan

Jika data ingin dikembalikan ke awal, buka Developer Tools browser, hapus data `localStorage` untuk website ini, lalu refresh halaman.
