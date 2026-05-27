CREATE DATABASE IF NOT EXISTS db_ekstrakurikuler;
USE db_ekstrakurikuler;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nama VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    role ENUM('admin', 'pembina', 'siswa') NOT NULL,
    profile_photo LONGTEXT NULL,
    reset_token VARCHAR(128) NULL,
    reset_requested_at DATETIME NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE password_resets (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    token VARCHAR(128) NOT NULL UNIQUE,
    expires_at DATETIME NOT NULL,
    used_at DATETIME NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE siswa (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NULL,
    nama VARCHAR(100) NOT NULL,
    kelas VARCHAR(30) NOT NULL,
    nis VARCHAR(30) NULL,
    jenis_kelamin ENUM('L', 'P') NULL,
    alamat TEXT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE SET NULL
);

CREATE TABLE ekstrakurikuler (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nama VARCHAR(100) NOT NULL,
    deskripsi TEXT NULL
);

CREATE TABLE guru_ekstrakurikuler (
    id INT AUTO_INCREMENT PRIMARY KEY,
    guru_id INT NOT NULL,
    ekskul_id INT NOT NULL,
    UNIQUE KEY unique_guru_ekskul (guru_id, ekskul_id),
    FOREIGN KEY (guru_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (ekskul_id) REFERENCES ekstrakurikuler(id) ON DELETE CASCADE
);

CREATE TABLE pendaftaran (
    id INT AUTO_INCREMENT PRIMARY KEY,
    siswa_id INT NOT NULL,
    ekskul_id INT NOT NULL,
    tanggal_daftar DATE NOT NULL,
    UNIQUE KEY unique_pendaftaran (siswa_id, ekskul_id),
    FOREIGN KEY (siswa_id) REFERENCES siswa(id) ON DELETE CASCADE,
    FOREIGN KEY (ekskul_id) REFERENCES ekstrakurikuler(id) ON DELETE CASCADE
);

CREATE TABLE jadwal (
    id INT AUTO_INCREMENT PRIMARY KEY,
    ekskul_id INT NOT NULL,
    hari ENUM('Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu', 'Minggu') NOT NULL,
    jam TIME NOT NULL,
    tempat VARCHAR(100) NULL,
    FOREIGN KEY (ekskul_id) REFERENCES ekstrakurikuler(id) ON DELETE CASCADE
);

CREATE TABLE absensi (
    id INT AUTO_INCREMENT PRIMARY KEY,
    siswa_id INT NOT NULL,
    ekskul_id INT NOT NULL,
    tanggal DATE NOT NULL,
    status ENUM('Hadir', 'Izin', 'Sakit', 'Alpa') NOT NULL,
    UNIQUE KEY unique_absensi (siswa_id, ekskul_id, tanggal),
    FOREIGN KEY (siswa_id) REFERENCES siswa(id) ON DELETE CASCADE,
    FOREIGN KEY (ekskul_id) REFERENCES ekstrakurikuler(id) ON DELETE CASCADE
);

INSERT INTO users (id, nama, email, password, role, profile_photo) VALUES
(1, 'Administrator', 'admin@sekolah.id', 'admin123', 'admin', NULL),
(2, 'Pak Budi', 'budi@sekolah.id', 'pembina123', 'pembina', NULL),
(3, 'Andi Siswa', 'andi@gmail.com', 'siswa123', 'siswa', NULL),
(4, 'Bu Rina', 'rina@sekolah.id', 'pembina123', 'pembina', NULL),
(5, 'Pak Dimas', 'dimas@sekolah.id', 'pembina123', 'pembina', NULL),
(6, 'Bu Sari', 'sari@sekolah.id', 'pembina123', 'pembina', NULL),
(7, 'Pak Joko', 'joko@sekolah.id', 'pembina123', 'pembina', NULL),
(8, 'Bu Maya', 'maya@sekolah.id', 'pembina123', 'pembina', NULL);

INSERT INTO siswa (id, user_id, nama, kelas, nis, jenis_kelamin, alamat) VALUES
(1, 3, 'Andi Siswa', 'XI IPA 1', '2026001', 'L', 'Jl. Melati No. 1'),
(2, NULL, 'Siti Aminah', 'X IPS 2', '2026002', 'P', 'Jl. Kenanga No. 5'),
(3, NULL, 'Raka Pratama', 'XII IPA 2', '2026003', 'L', 'Jl. Anggrek No. 8');

INSERT INTO ekstrakurikuler (id, nama, deskripsi) VALUES
(1, 'Pramuka', 'Kegiatan kepramukaan dan kepemimpinan.'),
(2, 'Futsal', 'Latihan teknik dan kerja sama tim futsal.'),
(3, 'Paduan Suara', 'Latihan vokal dan penampilan musik sekolah.'),
(4, 'Basket', 'Latihan dasar basket, stamina, dan kompetisi antarkelas.'),
(5, 'PMR', 'Kegiatan kesehatan, pertolongan pertama, dan bakti sosial.'),
(6, 'Karya Ilmiah Remaja', 'Riset sederhana, eksperimen, dan penulisan ilmiah.'),
(7, 'Tari Tradisional', 'Latihan tari daerah dan persiapan pentas seni.'),
(8, 'English Club', 'Latihan speaking, debate, storytelling, dan vocabulary.'),
(9, 'Desain Grafis', 'Belajar poster, layout, warna, dan publikasi digital.'),
(10, 'Robotik', 'Dasar elektronika, pemrograman, dan proyek robot sederhana.');

INSERT INTO guru_ekstrakurikuler (guru_id, ekskul_id) VALUES
(2, 1),
(2, 2),
(4, 3),
(4, 7),
(5, 4),
(5, 10),
(6, 5),
(7, 6),
(8, 8),
(8, 9);

INSERT INTO pendaftaran (siswa_id, ekskul_id, tanggal_daftar) VALUES
(1, 1, CURDATE()),
(2, 2, CURDATE()),
(3, 1, CURDATE());

INSERT INTO jadwal (ekskul_id, hari, jam, tempat) VALUES
(1, 'Jumat', '15:00:00', 'Lapangan Sekolah'),
(2, 'Rabu', '15:30:00', 'GOR Sekolah'),
(3, 'Selasa', '14:30:00', 'Ruang Musik');

INSERT INTO absensi (siswa_id, ekskul_id, tanggal, status) VALUES
(1, 1, CURDATE(), 'Hadir'),
(3, 1, CURDATE(), 'Izin');
