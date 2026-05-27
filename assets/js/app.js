const STORAGE_KEY = 'ekskulAppV2';
const THEME_KEY = 'ekskulThemeMode';
const MAX_TEACHERS = 6;

function today() {
    return new Date().toISOString().slice(0, 10);
}

const defaultData = {
    currentUser: null,
    users: [
        { id: 1, nama: 'Administrator', email: 'admin@sekolah.id', password: 'admin123', role: 'admin', siswaId: null, ekskulDiampu: 'Semua Ekstrakurikuler' },
        { id: 2, nama: 'Pak Budi', email: 'budi@sekolah.id', password: 'pembina123', role: 'pembina', siswaId: null, ekskulDiampu: 'Pramuka, Futsal', ekskulDiampuIds: [1, 2] },
        { id: 3, nama: 'Andi ', email: 'andi@gmail.com', password: 'siswa123', role: 'siswa', siswaId: 1 },
        { id: 4, nama: 'Bu Rina', email: 'rina@sekolah.id', password: 'pembina123', role: 'pembina', siswaId: null, ekskulDiampu: 'Paduan Suara, Tari Tradisional', ekskulDiampuIds: [3, 7] },
        { id: 5, nama: 'Pak Dimas', email: 'dimas@sekolah.id', password: 'pembina123', role: 'pembina', siswaId: null, ekskulDiampu: 'Basket, Robotik', ekskulDiampuIds: [4, 10] },
        { id: 6, nama: 'Bu Sari', email: 'sari@sekolah.id', password: 'pembina123', role: 'pembina', siswaId: null, ekskulDiampu: 'PMR', ekskulDiampuIds: [5] },
        { id: 7, nama: 'Pak Joko', email: 'joko@sekolah.id', password: 'pembina123', role: 'pembina', siswaId: null, ekskulDiampu: 'Karya Ilmiah Remaja', ekskulDiampuIds: [6] },
        { id: 8, nama: 'Bu Maya', email: 'maya@sekolah.id', password: 'pembina123', role: 'pembina', siswaId: null, ekskulDiampu: 'English Club, Desain Grafis', ekskulDiampuIds: [8, 9] }
    ],
    siswa: [
        { id: 1, nama: 'Andi Siswa', kelas: 'XI IPA 1', nis: '2026001', jenisKelamin: 'L', alamat: 'Jl. Melati No. 1', pencapaian: 'Juara 2 LKBB Kecamatan' },
        { id: 2, nama: 'Siti Aminah', kelas: 'X IPS 2', nis: '2026002', jenisKelamin: 'P', alamat: 'Jl. Kenanga No. 5', pencapaian: 'Top scorer turnamen mini' },
        { id: 3, nama: 'Raka Pratama', kelas: 'XII IPA 2', nis: '2026003', jenisKelamin: 'L', alamat: 'Jl. Anggrek No. 8', pencapaian: 'Petugas upacara teladan' },
        { id: 4, nama: 'Nadia Putri', kelas: 'XI IPS 1', nis: '2026004', jenisKelamin: 'P', alamat: 'Jl. Mawar No. 12', pencapaian: 'Relawan kesehatan sekolah' },
        { id: 5, nama: 'Dimas Saputra', kelas: 'X IPA 3', nis: '2026005', jenisKelamin: 'L', alamat: 'Jl. Cempaka No. 7', pencapaian: 'MVP basket antarkelas' },
        { id: 6, nama: 'Farah Lestari', kelas: 'XII IPS 1', nis: '2026006', jenisKelamin: 'P', alamat: 'Jl. Dahlia No. 9', pencapaian: 'Finalis storytelling' },
        { id: 7, nama: 'Bagas Nugroho', kelas: 'XI IPA 2', nis: '2026007', jenisKelamin: 'L', alamat: 'Jl. Flamboyan No. 4', pencapaian: 'Robot line follower terbaik' },
        { id: 8, nama: 'Maya Kirana', kelas: 'X Bahasa', nis: '2026008', jenisKelamin: 'P', alamat: 'Jl. Teratai No. 6', pencapaian: 'Penari utama pentas seni' }
    ],
    ekskul: [
        { id: 1, nama: 'Pramuka', deskripsi: 'Kegiatan kepramukaan, kedisiplinan, dan kepemimpinan.' },
        { id: 2, nama: 'Futsal', deskripsi: 'Latihan teknik futsal, strategi, dan kerja sama tim.' },
        { id: 3, nama: 'Paduan Suara', deskripsi: 'Latihan vokal, harmoni, dan penampilan musik sekolah.' },
        { id: 4, nama: 'Basket', deskripsi: 'Latihan dasar basket, stamina, dan kompetisi antarkelas.' },
        { id: 5, nama: 'PMR', deskripsi: 'Kegiatan kesehatan, pertolongan pertama, dan bakti sosial.' },
        { id: 6, nama: 'Karya Ilmiah Remaja', deskripsi: 'Riset sederhana, eksperimen, dan penulisan ilmiah.' },
        { id: 7, nama: 'Tari Tradisional', deskripsi: 'Latihan tari daerah dan persiapan pentas seni.' },
        { id: 8, nama: 'English Club', deskripsi: 'Latihan speaking, debate, storytelling, dan vocabulary.' },
        { id: 9, nama: 'Desain Grafis', deskripsi: 'Belajar poster, layout, warna, dan publikasi digital.' },
        { id: 10, nama: 'Robotik', deskripsi: 'Dasar elektronika, pemrograman, dan proyek robot sederhana.' }
    ],
    pendaftaran: [
        { id: 1, siswaId: 1, ekskulId: 1, tanggal: today() },
        { id: 2, siswaId: 2, ekskulId: 2, tanggal: today() },
        { id: 3, siswaId: 3, ekskulId: 1, tanggal: today() },
        { id: 4, siswaId: 4, ekskulId: 5, tanggal: today() },
        { id: 5, siswaId: 5, ekskulId: 4, tanggal: today() },
        { id: 6, siswaId: 6, ekskulId: 8, tanggal: today() },
        { id: 7, siswaId: 7, ekskulId: 10, tanggal: today() },
        { id: 8, siswaId: 8, ekskulId: 7, tanggal: today() }
    ],
    jadwal: [
        { id: 1, ekskulId: 1, tanggal: today(), hari: 'Jumat', jam: '15:00', tempat: 'Lapangan Sekolah' },
        { id: 2, ekskulId: 2, tanggal: today(), hari: 'Rabu', jam: '15:30', tempat: 'GOR Sekolah' },
        { id: 3, ekskulId: 3, tanggal: today(), hari: 'Selasa', jam: '14:30', tempat: 'Ruang Musik' },
        { id: 4, ekskulId: 4, tanggal: today(), hari: 'Kamis', jam: '15:30', tempat: 'Lapangan Basket' },
        { id: 5, ekskulId: 5, tanggal: today(), hari: 'Senin', jam: '14:30', tempat: 'UKS' },
        { id: 6, ekskulId: 6, tanggal: today(), hari: 'Rabu', jam: '14:00', tempat: 'Laboratorium IPA' },
        { id: 7, ekskulId: 7, tanggal: today(), hari: 'Sabtu', jam: '09:00', tempat: 'Aula Sekolah' },
        { id: 8, ekskulId: 8, tanggal: today(), hari: 'Selasa', jam: '15:00', tempat: 'Ruang Bahasa' },
        { id: 9, ekskulId: 9, tanggal: today(), hari: 'Kamis', jam: '14:30', tempat: 'Lab Komputer' },
        { id: 10, ekskulId: 10, tanggal: today(), hari: 'Sabtu', jam: '10:30', tempat: 'Lab Robotik' }
    ],
    absensi: [
        { id: 1, siswaId: 1, ekskulId: 1, tanggal: today(), status: 'Hadir' },
        { id: 2, siswaId: 3, ekskulId: 1, tanggal: today(), status: 'Izin' },
        { id: 3, siswaId: 2, ekskulId: 2, tanggal: today(), status: 'Hadir' },
        { id: 4, siswaId: 4, ekskulId: 5, tanggal: today(), status: 'Sakit' },
        { id: 5, siswaId: 5, ekskulId: 4, tanggal: today(), status: 'Hadir' }
    ],
    arsipAbsensi: [],
    passwordResets: []
};

let state = loadState();
let page = 'dashboard';

function themeMode() {
    return localStorage.getItem(THEME_KEY) === 'morning' ? 'morning' : 'night';
}

function applyTheme() {
    document.body.classList.toggle('theme-morning', themeMode() === 'morning');
    document.body.classList.toggle('theme-night', themeMode() !== 'morning');
}

function themeToggle() {
    const isMorning = themeMode() === 'morning';
    return `
        <button class="theme-toggle" type="button" data-theme-toggle aria-label="Ganti mode pagi malam">
            <span class="theme-icon">${isMorning ? '☀' : '☾'}</span>
            <span>${isMorning ? 'Pagi' : 'Malam'}</span>
        </button>
    `;
}

function loginHeroCopy(description = 'Portal pengelolaan kegiatan ekstrakurikuler sekolah untuk admin, pembina, dan siswa. Data anggota, jadwal, absensi, pendaftaran, dan laporan dirapikan dalam satu dashboard.') {
    return `
        <header class="login-hero-copy">
            <h1>Sistem Ekstrakurikuler</h1>
            <p>${text(description)}</p>
        </header>
    `;
}

function loginTopNav() {
    return `
        <nav class="login-top-nav" aria-label="Menu halaman login">
            <a class="login-brand-link" href="#top">Sistem Ekstrakurikuler</a>
            <a href="#tentang-web">Tentang Web</a>
            <a href="#daftar-ekskul">Daftar Ekskul</a>
        </nav>
    `;
}

function loginRoleTabs(activeRole = 'siswa') {
    return `
        <div class="login-role-tabs" aria-label="Pilihan login">
            ${[
                ['siswa', 'Siswa'],
                ['pembina', 'Guru'],
                ['admin', 'Admin']
            ].map(([role, label]) => `<button class="${activeRole === role ? 'active' : ''}" type="button" data-login-role="${role}">${label}</button>`).join('')}
        </div>
    `;
}

function registerRoleTabs(activeRole = 'siswa') {
    return `
        <div class="login-role-tabs" aria-label="Pilihan daftar akun">
            ${[
                ['siswa', 'Siswa'],
                ['pembina', 'Guru'],
                ['admin', 'Admin']
            ].map(([role, label]) => `<button class="${activeRole === role ? 'active' : ''}" type="button" data-register-role="${role}">${label}</button>`).join('')}
        </div>
    `;
}

function ekskulImageQuery(name) {
    const images = {
        'Pramuka': 'pramuka',
        'Futsal': 'futsal',
        'Paduan Suara': 'paduan-suara',
        'Basket': 'basket',
        'PMR': 'pmr',
        'Karya Ilmiah Remaja': 'kir',
        'Tari Tradisional': 'tari-tradisional',
        'English Club': 'english-club',
        'Desain Grafis': 'desain-grafis',
        'Robotik': 'robotik'
    };
    return `assets/img/ekskul/${images[name] || 'default'}.svg`;
}

function ekskulLongDescription(item) {
    const details = {
        'Pramuka': 'Pramuka melatih kedisiplinan, tanggung jawab, kerja sama, kepemimpinan, dan kecakapan hidup. Kegiatannya dapat berupa latihan baris-berbaris, tali-temali, sandi, jelajah, kemah, bakti sosial, serta permainan kelompok yang membentuk karakter siswa.',
        'Futsal': 'Futsal berfokus pada teknik dasar sepak bola dalam ruang yang lebih cepat dan intens. Siswa berlatih passing, dribbling, shooting, strategi bertahan, rotasi posisi, komunikasi tim, dan sportivitas saat bertanding.',
        'Paduan Suara': 'Paduan Suara mengembangkan kemampuan vokal, kepekaan nada, harmoni, ekspresi panggung, dan kepercayaan diri. Siswa belajar pemanasan suara, pembagian suara, artikulasi, dinamika lagu, serta persiapan tampil di acara sekolah.',
        'Basket': 'Basket melatih stamina, koordinasi, kelincahan, dan strategi permainan. Kegiatan mencakup dribble, passing, shooting, lay-up, defense, rebound, simulasi pertandingan, serta pembentukan kerja sama dan mental kompetitif yang sehat.',
        'PMR': 'PMR membekali siswa dengan pengetahuan pertolongan pertama, kesehatan remaja, kepedulian sosial, dan kesiapsiagaan. Kegiatan dapat berupa latihan P3K, simulasi evakuasi, kampanye hidup sehat, dan pelayanan kegiatan sekolah.',
        'Karya Ilmiah Remaja': 'Karya Ilmiah Remaja membantu siswa belajar berpikir kritis, meneliti, menulis, dan mempresentasikan ide. Kegiatan meliputi observasi masalah, eksperimen sederhana, pengumpulan data, analisis, penyusunan laporan, dan presentasi karya.',
        'Tari Tradisional': 'Tari Tradisional mengenalkan budaya daerah melalui gerak, irama, kostum, dan ekspresi. Siswa berlatih teknik dasar tari, kekompakan formasi, penghayatan, disiplin latihan, serta persiapan tampil dalam pentas seni sekolah.',
        'English Club': 'English Club melatih keberanian berkomunikasi dalam bahasa Inggris. Kegiatannya meliputi speaking practice, storytelling, debate, vocabulary games, role play, presentasi, dan diskusi ringan agar siswa terbiasa memakai bahasa Inggris.',
        'Desain Grafis': 'Desain Grafis mengajarkan dasar visual, warna, tipografi, layout, poster, dan publikasi digital. Siswa belajar membuat karya promosi kegiatan sekolah, desain media sosial, serta memahami proses kreatif dari ide sampai hasil akhir.',
        'Robotik': 'Robotik memperkenalkan elektronika, logika pemrograman, sensor, aktuator, dan perakitan proyek. Siswa belajar membuat robot sederhana, menguji solusi, memperbaiki kesalahan, dan bekerja dalam tim untuk menyelesaikan tantangan teknologi.'
    };
    return details[item.nama] || item.deskripsi;
}

function renderEkskulDetail(item, compact = false) {
    const slides = compact ? ekskulDetailSlides(item).slice(0, 1) : ekskulDetailSlides(item);
    return `
        <div class="ekskul-detail-backdrop" data-detail-backdrop>
            <article class="ekskul-detail-sheet">
                <button class="detail-close" type="button" data-close-detail>Tutup</button>
                <img src="${ekskulImageQuery(item.nama)}" alt="${text(item.nama)}">
                <div class="detail-body">
                    <span>Pilihan Ekskul</span>
                    <h2>${text(item.nama)}</h2>
                    <div class="detail-slider" data-detail-slider>
                        ${slides.map((slide, index) => `
                            <section class="detail-slide ${index === 0 ? 'active' : ''}" data-detail-slide="${index}">
                                <strong>${text(slide.title)}</strong>
                                <p>${text(slide.body)}</p>
                            </section>
                        `).join('')}
                    </div>
                    ${compact ? '' : `<div class="detail-slide-controls" aria-label="Slide penjelasan">
                        ${slides.map((_, index) => `<button class="${index === 0 ? 'active' : ''}" type="button" data-detail-slide-btn="${index}">${index + 1}</button>`).join('')}
                    </div>`}
                </div>
            </article>
        </div>
    `;
}

function ekskulDetailSlides(item) {
    return [
        {
            title: 'Gambaran kegiatan',
            body: ekskulLongDescription(item)
        },
        {
            title: 'Latihan dan kemampuan',
            body: `${item.nama} membantu siswa membangun kebiasaan latihan yang teratur, memahami dasar kegiatan, mencoba peran baru, dan belajar menyelesaikan tantangan bersama teman. Setiap pertemuan dirancang agar siswa tidak hanya hadir, tetapi benar-benar berkembang dari sisi keterampilan, disiplin, keberanian, dan tanggung jawab.`
        },
        {
            title: 'Manfaat untuk siswa',
            body: `Dengan mengikuti ${item.nama}, siswa punya ruang untuk menambah pengalaman, memperluas pertemanan, menyiapkan diri untuk lomba atau penampilan sekolah, serta mengumpulkan pencapaian yang bisa dicatat dalam profil. Kegiatan ini cocok untuk siswa yang ingin belajar lebih aktif di luar kelas dan menemukan minat yang paling nyaman untuk dikembangkan.`
        }
    ];
}

function openEkskulDetail(id) {
    const item = byId(state.ekskul, id);
    if (!item) return;
    const existing = document.querySelector('[data-detail-backdrop]');
    if (existing) existing.remove();
    const isLoginPage = Boolean(document.querySelector('.login-page'));
    (document.querySelector('.login-page') || document.querySelector('.app') || document.body).insertAdjacentHTML('beforeend', renderEkskulDetail(item, isLoginPage));
    const backdrop = document.querySelector('[data-detail-backdrop]');
    requestAnimationFrame(() => backdrop.classList.add('show'));
    backdrop.addEventListener('click', event => {
        if (event.target.matches('[data-detail-backdrop], [data-close-detail]')) closeEkskulDetail();
    });
    backdrop.querySelectorAll('[data-detail-slide-btn]').forEach(button => {
        button.addEventListener('click', () => showEkskulDetailSlide(Number(button.dataset.detailSlideBtn)));
    });
}

function showEkskulDetailSlide(index) {
    document.querySelectorAll('[data-detail-slide]').forEach(slide => {
        slide.classList.toggle('active', Number(slide.dataset.detailSlide) === index);
    });
    document.querySelectorAll('[data-detail-slide-btn]').forEach(button => {
        button.classList.toggle('active', Number(button.dataset.detailSlideBtn) === index);
    });
}

function closeEkskulDetail() {
    const backdrop = document.querySelector('[data-detail-backdrop]');
    if (!backdrop) return;
    backdrop.classList.remove('show');
    window.setTimeout(() => backdrop.remove(), 1450);
}

function renderLoginLandingSections() {
    return `
        <section class="landing-section about-section" id="tentang-web">
            <div class="section-kicker">Tentang Web</div>
            <div class="about-layout paper-reveal" data-reveal>
                <div>
                    <h2>Satu tempat untuk mengatur kegiatan ekstrakurikuler sekolah.</h2>
                    <p>Sistem ini membantu admin, pembina, dan siswa melihat data kegiatan, jadwal, anggota, absensi, dan laporan tanpa berpindah-pindah halaman. Semua informasi dibuat ringkas, mudah dipindai, dan siap dipakai untuk kegiatan harian sekolah.</p>
                </div>
            </div>
        </section>
        <section class="landing-section ekskul-showcase" id="daftar-ekskul">
            <div class="showcase-head paper-reveal" data-reveal>
                <div class="section-kicker">Daftar Ekskul</div>
                <h2>Daftar Pilihan Ekskul</h2>
            </div>
            <div class="landing-ekskul-grid">
                ${state.ekskul.slice(0, 10).map((item, index) => `
                    <article class="landing-ekskul-card paper-reveal" data-reveal style="--delay:${index * 0.08}s">
                        <button class="landing-card-hit" type="button" data-ekskul-detail="${item.id}" aria-label="Lihat detail ${text(item.nama)}"></button>
                        <img src="${ekskulImageQuery(item.nama)}" alt="${text(item.nama)}">
                        <div>
                            <span>${String(index + 1).padStart(2, '0')}</span>
                            <h3>${text(item.nama)}</h3>
                            <p>${text(item.deskripsi)}</p>
                        </div>
                    </article>
                `).join('')}
            </div>
        </section>
    `;
}

function initThemeToggle() {
    applyTheme();
    document.querySelectorAll('[data-theme-toggle]').forEach(button => {
        button.addEventListener('click', () => {
            localStorage.setItem(THEME_KEY, themeMode() === 'morning' ? 'night' : 'morning');
            applyTheme();
            const isMorning = themeMode() === 'morning';
            document.querySelectorAll('[data-theme-toggle]').forEach(item => {
                item.innerHTML = `<span class="theme-icon">${isMorning ? '☀' : '☾'}</span><span>${isMorning ? 'Pagi' : 'Malam'}</span>`;
            });
        });
    });
}

function loadState() {
    const saved = localStorage.getItem(STORAGE_KEY);
    return migrateState(saved ? JSON.parse(saved) : structuredClone(defaultData));
}

function migrateState(data) {
    const migrated = { ...structuredClone(defaultData), ...data };
    migrated.users = data.users || structuredClone(defaultData.users);
    migrated.users.forEach(user => {
        if (user.role === 'siswa' && user.email === 'siswa@sekolah.test') user.email = 'andi@gmail.com';
        if (['admin', 'pembina'].includes(user.role) && String(user.email).endsWith('@sekolah.test')) {
            user.email = String(user.email).replace('@sekolah.test', '@sekolah.id');
        }
    });
    const legacyBudi = migrated.users.find(user => user.role === 'pembina' && user.email === 'pembina@sekolah.id');
    if (legacyBudi && !migrated.users.some(user => user.email === 'budi@sekolah.id')) {
        legacyBudi.email = 'budi@sekolah.id';
        legacyBudi.nama = legacyBudi.nama || 'Pak Budi';
        legacyBudi.ekskulDiampuIds = [1, 2];
        legacyBudi.ekskulDiampu = 'Pramuka, Futsal';
    } else if (legacyBudi) {
        migrated.users = migrated.users.filter(user => user !== legacyBudi);
    }
    defaultData.users.forEach(user => {
        const existing = migrated.users.find(item => item.email === user.email);
        if (existing) {
            if (['admin', 'pembina'].includes(user.role)) {
                existing.role = existing.role || user.role;
                existing.siswaId = existing.siswaId ?? user.siswaId;
                existing.ekskulDiampu = user.ekskulDiampu;
                existing.ekskulDiampuIds = user.ekskulDiampuIds;
            }
        } else {
            migrated.users.push({ ...structuredClone(user), id: nextId(migrated.users) });
        }
    });
    syncDefaultTeacherAssignments(migrated);
    migrated.jadwal = (migrated.jadwal || []).map(item => ({ tanggal: today(), ...item }));
    migrated.absensi = migrated.absensi || [];
    migrated.arsipAbsensi = migrated.arsipAbsensi || [];
    migrated.passwordResets = migrated.passwordResets || [];
    migrated.pendaftaran = migrated.pendaftaran || [];
    migrated.ekskul = migrated.ekskul || structuredClone(defaultData.ekskul);
    migrated.siswa = migrated.siswa || structuredClone(defaultData.siswa);
    migrated.users.forEach(user => {
        user.profilePhoto = user.profilePhoto || '';
    });
    if (migrated.currentUser) {
        const user = migrated.users.find(item => Number(item.id) === Number(migrated.currentUser.id));
        migrated.currentUser = user
            ? {
                id: user.id,
                nama: user.nama,
                email: user.email,
                role: user.role,
                siswaId: user.siswaId,
                ekskulDiampu: user.ekskulDiampu,
                ekskulDiampuIds: user.ekskulDiampuIds,
                profilePhoto: user.profilePhoto || migrated.currentUser.profilePhoto || ''
            }
            : null;
    }
    return migrated;
}

function syncDefaultTeacherAssignments(data) {
    defaultData.users
        .filter(user => user.role === 'pembina')
        .forEach(defaultTeacher => {
            const teacher = data.users.find(user =>
                user.role === 'pembina'
                && (user.email === defaultTeacher.email || user.nama === defaultTeacher.nama)
            );
            if (!teacher) return;
            teacher.nama = defaultTeacher.nama;
            teacher.email = defaultTeacher.email;
            teacher.password = teacher.password || defaultTeacher.password;
            teacher.siswaId = null;
            teacher.ekskulDiampuIds = [...defaultTeacher.ekskulDiampuIds];
            teacher.ekskulDiampu = defaultTeacher.ekskulDiampu;
        });
}

function saveState() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function isSchoolEmail(email) {
    const value = String(email || '').trim().toLowerCase();
    return value.endsWith('@sekolah.id');
}

function nextId(items) {
    return items.length ? Math.max(...items.map(item => Number(item.id))) + 1 : 1;
}

function byId(items, id) {
    return items.find(item => Number(item.id) === Number(id));
}

function text(value) {
    return String(value ?? '').replace(/[&<>"']/g, char => ({
        '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;'
    }[char]));
}

function currentRole() {
    return state.currentUser?.role || '';
}

function loginSpaceDecor() {
    const stars = Array.from({ length: 80 }, (_, index) => {
        const style = `--x:${(index * 37) % 100}%;--y:${(index * 61) % 100}%;--delay:${(index % 12) * -0.35}s;--size:${2 + (index % 4)}px;`;
        return `<span class="space-star" style="${style}"></span>`;
    }).join('');
    const galaxies = Array.from({ length: 7 }, (_, index) => {
        const positions = [
            ['8%', '18%'], ['82%', '14%'], ['68%', '78%'], ['18%', '82%'], ['50%', '8%'], ['92%', '54%'], ['34%', '46%']
        ];
        const [x, y] = positions[index];
        return `<span class="space-galaxy g-${index + 1}" style="--x:${x};--y:${y};--delay:${index * -0.8}s;"></span>`;
    }).join('');
    const planets = `
        <span class="space-planet planet-a"></span>
        <span class="space-planet planet-b"></span>
        <span class="space-planet planet-c"></span>
    `;
    const rockets = `
        <span class="space-rocket rocket-a" aria-hidden="true"></span>
        <span class="space-rocket rocket-b" aria-hidden="true"></span>
        <span class="space-rocket rocket-c" aria-hidden="true"></span>
    `;
    return `<div class="space-decor" aria-hidden="true">${stars}${galaxies}${planets}${rockets}</div>`;
}

function managedEkskulIds(role = currentRole()) {
    if (role === 'admin') return state.ekskul.map(item => Number(item.id));
    if (role !== 'pembina') return state.ekskul.map(item => Number(item.id));

    const user = byId(state.users, state.currentUser?.id) || state.currentUser || {};
    return pembinaEkskulIds(user);
}

function pembinaEkskulIds(user = {}) {
    if (Array.isArray(user.ekskulDiampuIds) && user.ekskulDiampuIds.length) {
        return user.ekskulDiampuIds.map(Number);
    }

    const names = String(user.ekskulDiampu || '').split(',').map(item => item.trim().toLowerCase()).filter(Boolean);
    return state.ekskul.filter(item => names.includes(item.nama.toLowerCase())).map(item => Number(item.id));
}

function canAccessEkskul(ekskulId) {
    return managedEkskulIds().includes(Number(ekskulId));
}

function visibleEkskul() {
    const ids = managedEkskulIds();
    return state.ekskul.filter(item => ids.includes(Number(item.id)));
}

function visiblePendaftaran() {
    if (currentRole() === 'siswa') return state.pendaftaran.filter(item => Number(item.siswaId) === Number(state.currentUser.siswaId));
    const ids = managedEkskulIds();
    return state.pendaftaran.filter(item => ids.includes(Number(item.ekskulId)));
}

function alamatSiswaUntukPendaftaran(siswa) {
    if (currentRole() !== 'siswa') return '';
    if (page !== 'pendaftaran') return '';
    return siswa?.alamat || '';
}

function visibleJadwal() {
    if (currentRole() === 'siswa') {
        return state.jadwal.filter(item => state.pendaftaran.some(reg => Number(reg.siswaId) === Number(state.currentUser.siswaId) && Number(reg.ekskulId) === Number(item.ekskulId)));
    }
    const ids = managedEkskulIds();
    return state.jadwal.filter(item => ids.includes(Number(item.ekskulId)));
}

function visibleAbsensi() {
    if (currentRole() === 'siswa') return state.absensi.filter(item => Number(item.siswaId) === Number(state.currentUser.siswaId));
    const ids = managedEkskulIds();
    return state.absensi.filter(item => ids.includes(Number(item.ekskulId)));
}

function visibleArsipAbsensi() {
    if (currentRole() === 'siswa') return [];
    const ids = managedEkskulIds();
    return (state.arsipAbsensi || [])
        .filter(item => ids.includes(Number(item.ekskulId)))
        .sort((a, b) => String(b.dibuatPada || '').localeCompare(String(a.dibuatPada || '')));
}

function profileInitial(name) {
    return text((name || 'U').trim().slice(0, 1).toUpperCase());
}

function teacherCount() {
    return state.users.filter(user => user.role === 'pembina').length;
}

function init() {
    applyTheme();
    state.currentUser ? renderApp() : renderLogin();
}

function renderLogin(message = '', type = 'danger', selectedRole = 'siswa') {
    document.body.innerHTML = `
        <main class="login-page" id="top">
            <div class="neon-cursor-bg" id="loginNeonBg"></div>
            ${loginSpaceDecor()}
            ${loginTopNav()}
            ${themeToggle()}
            <div class="login-shell">
                ${loginHeroCopy()}
                <div class="login-card">
                    <h2>Login Akun</h2>
                    ${loginRoleTabs(selectedRole)}
                    ${message ? `<div class="alert alert-${type}">${text(message)}</div>` : ''}
                    <form id="loginForm">
                        <input type="hidden" name="role" value="${text(selectedRole)}">
                        <div class="mb-3">
                            <label class="form-label">Email</label>
                            <input type="email" name="email" class="form-control" required placeholder="${selectedRole === 'admin' ? 'admin@sekolah.id' : selectedRole === 'pembina' ? 'guru@sekolah.id' : 'andi@gmail.com'}">
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Password</label>
                            <input type="password" name="password" class="form-control" required>
                        </div>
                        ${selectedRole === 'pembina' ? `
                        <div class="mb-3">
                            <label class="form-label">Ekskul yang Diampu</label>
                            <div class="teacher-login-ekskul" id="loginEkskulList">Ekskul muncul otomatis setelah akun cocok.</div>
                            <small class="form-hint">Isi email dan password guru, lalu ekskul akan terisi otomatis.</small>
                        </div>` : ''}
                        <button class="btn btn-primary w-100" type="submit">Masuk</button>
                    </form>
                    <div class="login-switch"><button id="showForgot" type="button">Lupa password?</button><br>Belum memiliki akun? <button id="showRegister" type="button">Daftar</button></div>
                </div>
            </div>
            ${renderLoginLandingSections()}
        </main>
    `;

    document.getElementById('loginForm').addEventListener('submit', event => {
        event.preventDefault();
        const form = new FormData(event.target);
        const email = String(form.get('email')).trim().toLowerCase();
        const role = String(form.get('role') || 'siswa');
        const user = state.users.find(item => item.email.toLowerCase() === email && item.password === form.get('password'));

        if (!user) {
            renderLogin('Email atau password salah.', 'danger', role);
            return;
        }

        if (user.role !== role) {
            renderLogin(`Akun ini bukan akun ${role === 'pembina' ? 'guru' : role}. Pilih jenis login yang sesuai.`, 'danger', role);
            return;
        }

        if (['admin', 'pembina'].includes(user.role) && !isSchoolEmail(user.email)) {
            renderLogin('Akun admin dan guru wajib menggunakan email sekolah.id.', 'danger', role);
            return;
        }

        if (user.role === 'siswa' && isSchoolEmail(user.email)) {
            renderLogin('Akun siswa wajib menggunakan email biasa, bukan email sekolah.id.', 'danger', role);
            return;
        }

        if (user.role === 'pembina') {
            const assignedIds = pembinaEkskulIds(user);
            if (!assignedIds.length) {
                renderLogin('Akun guru belum memiliki data ekskul yang diampu.', 'danger', role);
                return;
            }
            user.ekskulDiampuIds = assignedIds;
            user.ekskulDiampu = ekskulNamesFromIds(assignedIds);
        }

        state.currentUser = { id: user.id, nama: user.nama, email: user.email, role: user.role, siswaId: user.siswaId, ekskulDiampu: user.ekskulDiampu, ekskulDiampuIds: user.ekskulDiampuIds, profilePhoto: user.profilePhoto || '' };
        page = 'dashboard';
        saveState();
        startDashboardEntry();
    });
    initTeacherLoginEkskulAutoFill();

    document.getElementById('showRegister').addEventListener('click', () => renderRegister());
    document.getElementById('showForgot').addEventListener('click', () => renderForgotPassword());
    document.querySelectorAll('[data-login-role]').forEach(button => {
        button.addEventListener('click', () => renderLogin('', 'danger', button.dataset.loginRole));
    });
    document.querySelectorAll('[data-ekskul-detail]').forEach(button => {
        button.addEventListener('click', () => openEkskulDetail(Number(button.dataset.ekskulDetail)));
    });
    initThemeToggle();
    initScrollReveal();
    initNeonLoginBackground();
}

function initTeacherLoginEkskulAutoFill() {
    const form = document.getElementById('loginForm');
    if (!form || String(new FormData(form).get('role')) !== 'pembina') return;

    const emailInput = form.querySelector('[name="email"]');
    const passwordInput = form.querySelector('[name="password"]');
    const ekskulList = document.getElementById('loginEkskulList');
    if (!emailInput || !passwordInput || !ekskulList) return;

    const setEkskulList = (items, placeholder) => {
        ekskulList.innerHTML = items.length
            ? items.map(item => `<span>${text(item.nama)}</span>`).join('')
            : text(placeholder);
        ekskulList.classList.toggle('is-filled', items.length > 0);
    };

    const update = () => {
        const email = String(emailInput.value || '').trim().toLowerCase();
        const password = String(passwordInput.value || '');
        const user = state.users.find(item => item.role === 'pembina' && item.email.toLowerCase() === email && item.password === password);
        if (!user) {
            setEkskulList([], 'Ekskul muncul otomatis setelah akun cocok.');
            return;
        }

        const ids = pembinaEkskulIds(user);
        const items = ids.map(id => byId(state.ekskul, id)).filter(Boolean);
        setEkskulList(items, 'Belum ada ekskul pengampu.');
    };

    setEkskulList([], 'Ekskul muncul otomatis setelah akun cocok.');
    emailInput.addEventListener('input', update);
    passwordInput.addEventListener('input', update);
    emailInput.addEventListener('change', update);
    passwordInput.addEventListener('change', update);
}

function renderForgotPassword(message = '', type = 'danger') {
    document.body.innerHTML = `
        <main class="login-page" id="top">
            <div class="neon-cursor-bg" id="loginNeonBg"></div>
            ${loginSpaceDecor()}
            ${loginTopNav()}
            ${themeToggle()}
            <div class="login-shell">
                ${loginHeroCopy('Masukkan email yang sudah terdaftar. Setelah akun ditemukan, halaman ganti password akan dibuka untuk membuat akses baru.')}
                <div class="login-card">
                    <h2>Lupa Password</h2>
                    ${message ? `<div class="alert alert-${type}">${text(message)}</div>` : ''}
                    <form id="forgotForm">
                        <div class="mb-3">
                            <label class="form-label">Email Akun</label>
                            <input type="email" name="email" class="form-control" required>
                        </div>
                        <button class="btn btn-primary w-100" type="submit">Cari Akun</button>
                    </form>
                    <div class="login-switch">Ingat password? <button id="backToLogin" type="button">Masuk</button></div>
                </div>
            </div>
        </main>
    `;

    document.getElementById('forgotForm').addEventListener('submit', event => {
        event.preventDefault();
        const email = String(new FormData(event.target).get('email')).trim().toLowerCase();
        const user = state.users.find(item => item.email.toLowerCase() === email);

        if (!user) {
            renderForgotPassword('Email tidak ditemukan. Pastikan email sudah terdaftar.');
            return;
        }

        const token = `RST-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
        state.passwordResets.push({
            id: nextId(state.passwordResets),
            userId: user.id,
            token,
            requestedAt: new Date().toISOString(),
            usedAt: null
        });
        saveState();
        renderResetPassword(user.id, token, 'Akun ditemukan. Silakan buat password baru.', 'success');
    });

    document.getElementById('backToLogin').addEventListener('click', () => renderLogin());
    initThemeToggle();
    initNeonLoginBackground();
}

function renderResetPassword(userId, token, message = '', type = 'danger') {
    const user = byId(state.users, userId);
    const reset = state.passwordResets.find(item => item.token === token && Number(item.userId) === Number(userId) && !item.usedAt);

    if (!user || !reset) {
        renderForgotPassword('Sesi ganti password tidak valid. Masukkan email lagi.');
        return;
    }

    document.body.innerHTML = `
        <main class="login-page" id="top">
            <div class="neon-cursor-bg" id="loginNeonBg"></div>
            ${loginSpaceDecor()}
            ${loginTopNav()}
            ${themeToggle()}
            <div class="login-shell">
                ${loginHeroCopy(`Akun: ${user.email}. Gunakan password baru yang mudah kamu ingat dan minimal 6 karakter.`)}
                <div class="login-card">
                    <h2>Ganti Password</h2>
                    ${message ? `<div class="alert alert-${type}">${text(message)}</div>` : ''}
                    <form id="resetPasswordForm">
                        <div class="mb-3">
                            <label class="form-label">Password Baru</label>
                            <input type="password" name="password" class="form-control" required minlength="6">
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Konfirmasi Password</label>
                            <input type="password" name="confirmPassword" class="form-control" required minlength="6">
                        </div>
                        <button class="btn btn-primary w-100" type="submit">Simpan Password</button>
                    </form>
                    <div class="login-switch">Batal? <button id="cancelReset" type="button">Kembali login</button></div>
                </div>
            </div>
        </main>
    `;

    document.getElementById('resetPasswordForm').addEventListener('submit', event => {
        event.preventDefault();
        const form = new FormData(event.target);
        const password = String(form.get('password'));
        const confirmPassword = String(form.get('confirmPassword'));

        if (password.length < 6) {
            renderResetPassword(userId, token, 'Password baru minimal 6 karakter.');
            return;
        }

        if (password !== confirmPassword) {
            renderResetPassword(userId, token, 'Konfirmasi password tidak sama.');
            return;
        }

        user.password = password;
        reset.usedAt = new Date().toISOString();
        saveState();
        renderLogin('Password berhasil diganti. Silakan masuk dengan password baru.', 'success');
    });

    document.getElementById('cancelReset').addEventListener('click', () => renderLogin());
    initThemeToggle();
    initNeonLoginBackground();
}

function renderRegister(message = '', selectedRole = 'siswa') {
    const roleLabelText = selectedRole === 'pembina' ? 'Guru' : selectedRole === 'admin' ? 'Admin' : 'Siswa';
    const registerDescription = selectedRole === 'siswa'
        ? 'Daftar sebagai siswa untuk memilih ekstrakurikuler, melihat jadwal, dan mengikuti riwayat kehadiran secara mandiri.'
        : `Daftar sebagai ${roleLabelText.toLowerCase()} menggunakan email resmi sekolah.id untuk mengelola data ekstrakurikuler sesuai akses yang diberikan.`;
    document.body.innerHTML = `
        <main class="login-page" id="top">
            <div class="neon-cursor-bg" id="loginNeonBg"></div>
            ${loginSpaceDecor()}
            ${loginTopNav()}
            ${themeToggle()}
            <div class="login-shell">
                ${loginHeroCopy(registerDescription)}
                <div class="login-card">
                    <h2>Daftar Akun ${roleLabelText}</h2>
                    ${registerRoleTabs(selectedRole)}
                    ${message ? `<div class="alert alert-warning">${text(message)}</div>` : ''}
                    <form id="registerForm">
                        <input type="hidden" name="role" value="${text(selectedRole)}">
                        <div class="mb-3"><label class="form-label">Nama Lengkap</label><input name="nama" class="form-control" required></div>
                        <div class="mb-3"><label class="form-label">Email</label><input type="email" name="email" class="form-control" required placeholder="${selectedRole === 'siswa' ? 'nama@gmail.com' : `nama@sekolah.id`}"></div>
                        ${selectedRole === 'siswa' ? `<div class="mb-3"><label class="form-label">Kelas</label><input name="kelas" class="form-control" required placeholder="Contoh XI IPA 1"></div>` : ''}
                        ${selectedRole === 'pembina' ? `<div class="mb-3">${teacherEkskulChecks('ekskulDiampuIds')}</div>` : ''}
                        <div class="mb-3"><label class="form-label">Password</label><input type="password" name="password" class="form-control" required minlength="4"></div>
                        <button class="btn btn-primary w-100" type="submit">Daftar</button>
                    </form>
                    <div class="login-switch">Sudah punya akun? <button id="showLogin" type="button">Masuk</button></div>
                </div>
            </div>
        </main>
    `;

    document.getElementById('registerForm').addEventListener('submit', event => {
        event.preventDefault();
        const form = new FormData(event.target);
        const email = String(form.get('email')).trim().toLowerCase();
        const role = String(form.get('role') || 'siswa');
        const isStaff = ['pembina', 'admin'].includes(role);

        if (state.users.some(item => item.email.toLowerCase() === email)) {
            renderRegister('Email sudah terdaftar.', role);
            return;
        }

        if (isStaff && !isSchoolEmail(email)) {
            renderRegister('Guru dan admin wajib menggunakan email resmi sekolah.id.', role);
            return;
        }

        if (role === 'siswa' && isSchoolEmail(email)) {
            renderRegister('Email sekolah hanya untuk guru dan admin. Siswa gunakan email pribadi.', role);
            return;
        }

        if (role === 'pembina' && teacherCount() >= MAX_TEACHERS) {
            renderRegister(`Jumlah guru sudah ${MAX_TEACHERS}. Gunakan akun guru yang sudah tersedia.`, role);
            return;
        }

        const selectedTeacherEkskulIds = role === 'pembina' ? selectedEkskulIds(form) : [];
        if (role === 'pembina' && !selectedTeacherEkskulIds.length) {
            renderRegister('Pilih minimal satu ekskul yang diampu guru.', role);
            return;
        }

        const userId = nextId(state.users);
        let siswaId = null;
        let siswa = null;
        if (role === 'siswa') {
            siswaId = nextId(state.siswa);
            siswa = {
                id: siswaId,
                nama: form.get('nama'),
                kelas: String(form.get('kelas') || '').trim() || 'Belum diisi',
                nis: `REG-${String(siswaId).padStart(4, '0')}`,
                jenisKelamin: '-',
                alamat: '',
                pencapaian: 'Mulai perjalanan ekskul'
            };
        }
        const user = {
            id: userId,
            nama: form.get('nama'),
            email,
            password: form.get('password'),
            role,
            siswaId,
            ekskulDiampu: role === 'pembina' ? ekskulNamesFromIds(selectedTeacherEkskulIds) : role === 'admin' ? 'Semua Ekstrakurikuler' : undefined,
            ekskulDiampuIds: role === 'pembina' ? selectedTeacherEkskulIds : undefined,
            profilePhoto: ''
        };

        if (siswa) state.siswa.push(siswa);
        state.users.push(user);
        if (role === 'pembina') {
            state.currentUser = { id: user.id, nama: user.nama, email: user.email, role: user.role, siswaId: user.siswaId, ekskulDiampu: user.ekskulDiampu, ekskulDiampuIds: user.ekskulDiampuIds, profilePhoto: user.profilePhoto || '' };
            page = 'dashboard';
            saveState();
            startDashboardEntry();
            return;
        }
        state.currentUser = { id: user.id, nama: user.nama, email: user.email, role: user.role, siswaId: user.siswaId, ekskulDiampu: user.ekskulDiampu, ekskulDiampuIds: user.ekskulDiampuIds, profilePhoto: user.profilePhoto || '' };
        page = 'dashboard';
        saveState();
        startDashboardEntry();
    });

    document.getElementById('showLogin').addEventListener('click', () => renderLogin());
    document.querySelectorAll('[data-register-role]').forEach(button => {
        button.addEventListener('click', () => renderRegister('', button.dataset.registerRole));
    });
    initThemeToggle();
    initNeonLoginBackground();
}

function initNeonLoginBackground() {
    const bg = document.getElementById('loginNeonBg');
    if (!bg) return;

    document.querySelector('.login-page').addEventListener('pointermove', event => {
        const x = `${event.clientX}px`;
        const y = `${event.clientY}px`;
        bg.style.setProperty('--cursor-x', x);
        bg.style.setProperty('--cursor-y', y);
    });
}

function initScrollReveal() {
    const items = document.querySelectorAll('[data-reveal]');
    if (!items.length) return;
    const scrollRoot = document.querySelector('.login-page');
    if (!scrollRoot) return;

    const updateReveal = () => {
        const rootRect = { top: 0, bottom: window.innerHeight };
        items.forEach(item => {
            const rect = item.getBoundingClientRect();
            const visibleHeight = Math.min(rect.bottom, rootRect.bottom) - Math.max(rect.top, rootRect.top);
            const isVisible = visibleHeight > Math.min(rect.height * 0.22, 150);
            item.classList.toggle('is-visible', isVisible);
        });
    };

    let ticking = false;
    window.addEventListener('scroll', () => {
        if (ticking) return;
        ticking = true;
        requestAnimationFrame(() => {
            updateReveal();
            ticking = false;
        });
    });
    window.addEventListener('resize', updateReveal);
    updateReveal();
}

function startDashboardEntry() {
    const user = syncCurrentUserName();
    document.body.innerHTML = `
        <main class="entry-stage">
            <div class="entry-rings" id="entryRings"></div>
            <div class="entry-copy">
                <span>Memuat sistem</span>
                <strong>Selamat datang, ${text(user?.nama || 'Pengguna')}</strong>
            </div>
        </main>
    `;

    initMagicRings(document.getElementById('entryRings'), {
        color: '#f8d66d',
        colorTwo: '#ffffff',
        ringCount: 7,
        speed: 1.12,
        attenuation: 9,
        lineThickness: 2.2,
        baseRadius: 0.16,
        radiusStep: 0.08,
        scaleRate: 0.18,
        opacity: 1,
        noiseAmount: 0.04,
        ringGap: 1.45,
        followMouse: false
    });

    window.setTimeout(renderApp, 1750);
}

function initMagicRings(mount, options = {}) {
    if (!mount) return;

    const settings = {
        color: '#fc42ff',
        colorTwo: '#42fcff',
        speed: 1,
        ringCount: 6,
        attenuation: 10,
        lineThickness: 2,
        baseRadius: 0.35,
        radiusStep: 0.1,
        scaleRate: 0.1,
        opacity: 1,
        noiseAmount: 0.1,
        rotation: 0,
        ringGap: 1.5,
        fadeIn: 0.7,
        fadeOut: 0.5,
        followMouse: false,
        mouseInfluence: 0.2,
        hoverScale: 1.2,
        parallax: 0.05,
        clickBurst: false,
        ...options
    };

    const canvas = document.createElement('canvas');
    canvas.className = 'magic-rings-container';
    mount.appendChild(canvas);
    const gl = canvas.getContext('webgl', { alpha: true, antialias: true });
    if (!gl) return;

    const vertexShader = `
        attribute vec2 aPosition;
        void main() { gl_Position = vec4(aPosition, 0.0, 1.0); }
    `;
    const fragmentShader = `
        precision highp float;
        uniform float uTime, uAttenuation, uLineThickness, uBaseRadius, uRadiusStep, uScaleRate;
        uniform float uOpacity, uNoiseAmount, uRotation, uRingGap, uFadeIn, uFadeOut;
        uniform vec2 uResolution;
        uniform vec3 uColor, uColorTwo;
        uniform int uRingCount;
        const float HP = 1.5707963;
        const float CYCLE = 3.45;
        float fade(float t) {
            return t < uFadeIn ? smoothstep(0.0, uFadeIn, t) : 1.0 - smoothstep(uFadeOut, CYCLE - 0.2, t);
        }
        float ring(vec2 p, float ri, float cut, float t0, float px) {
            float t = mod(uTime + t0, CYCLE);
            float r = ri + t / CYCLE * uScaleRate;
            float d = abs(length(p) - r);
            float a = atan(abs(p.y), abs(p.x)) / HP;
            float th = max(1.0 - a, 0.5) * px * uLineThickness;
            float h = (1.0 - smoothstep(th, th * 1.5, d)) + 1.0;
            d += pow(cut * a, 3.0) * r;
            return h * exp(-uAttenuation * d) * fade(t);
        }
        void main() {
            float px = 1.0 / min(uResolution.x, uResolution.y);
            vec2 p = (gl_FragCoord.xy - 0.5 * uResolution.xy) * px;
            float cr = cos(uRotation), sr = sin(uRotation);
            p = mat2(cr, -sr, sr, cr) * p;
            vec3 c = vec3(0.0);
            float rcf = max(float(uRingCount) - 1.0, 1.0);
            for (int i = 0; i < 10; i++) {
                if (i >= uRingCount) break;
                float fi = float(i);
                vec3 rc = mix(uColor, uColorTwo, fi / rcf);
                c = mix(c, rc, vec3(ring(p - fi * 0.002, uBaseRadius + fi * uRadiusStep, pow(uRingGap, fi), i == 0 ? 0.0 : 2.95 * fi, px)));
            }
            float n = fract(sin(dot(gl_FragCoord.xy + uTime * 100.0, vec2(12.9898, 78.233))) * 43758.5453);
            c += (n - 0.5) * uNoiseAmount;
            gl_FragColor = vec4(c, max(c.r, max(c.g, c.b)) * uOpacity);
        }
    `;

    const compile = (type, source) => {
        const shader = gl.createShader(type);
        gl.shaderSource(shader, source);
        gl.compileShader(shader);
        return shader;
    };
    const program = gl.createProgram();
    gl.attachShader(program, compile(gl.VERTEX_SHADER, vertexShader));
    gl.attachShader(program, compile(gl.FRAGMENT_SHADER, fragmentShader));
    gl.linkProgram(program);
    gl.useProgram(program);

    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);
    const position = gl.getAttribLocation(program, 'aPosition');
    gl.enableVertexAttribArray(position);
    gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);

    const hexToRgb = value => {
        const hex = value.replace('#', '');
        const full = hex.length === 3 ? hex.split('').map(char => char + char).join('') : hex;
        return [0, 2, 4].map(index => parseInt(full.slice(index, index + 2), 16) / 255);
    };
    const loc = name => gl.getUniformLocation(program, name);
    const uniforms = {
        uTime: loc('uTime'), uAttenuation: loc('uAttenuation'), uLineThickness: loc('uLineThickness'),
        uBaseRadius: loc('uBaseRadius'), uRadiusStep: loc('uRadiusStep'), uScaleRate: loc('uScaleRate'),
        uOpacity: loc('uOpacity'), uNoiseAmount: loc('uNoiseAmount'), uRotation: loc('uRotation'),
        uRingGap: loc('uRingGap'), uFadeIn: loc('uFadeIn'), uFadeOut: loc('uFadeOut'),
        uResolution: loc('uResolution'), uColor: loc('uColor'), uColorTwo: loc('uColorTwo'), uRingCount: loc('uRingCount')
    };

    const resize = () => {
        const dpr = Math.min(window.devicePixelRatio || 1, 2);
        canvas.width = Math.max(1, Math.floor(mount.clientWidth * dpr));
        canvas.height = Math.max(1, Math.floor(mount.clientHeight * dpr));
        gl.viewport(0, 0, canvas.width, canvas.height);
        gl.uniform2f(uniforms.uResolution, canvas.width, canvas.height);
    };
    resize();
    window.addEventListener('resize', resize);

    const color = hexToRgb(settings.color);
    const colorTwo = hexToRgb(settings.colorTwo);
    gl.uniform1f(uniforms.uAttenuation, settings.attenuation);
    gl.uniform1f(uniforms.uLineThickness, settings.lineThickness);
    gl.uniform1f(uniforms.uBaseRadius, settings.baseRadius);
    gl.uniform1f(uniforms.uRadiusStep, settings.radiusStep);
    gl.uniform1f(uniforms.uScaleRate, settings.scaleRate);
    gl.uniform1f(uniforms.uOpacity, settings.opacity);
    gl.uniform1f(uniforms.uNoiseAmount, settings.noiseAmount);
    gl.uniform1f(uniforms.uRotation, (settings.rotation * Math.PI) / 180);
    gl.uniform1f(uniforms.uRingGap, settings.ringGap);
    gl.uniform1f(uniforms.uFadeIn, settings.fadeIn);
    gl.uniform1f(uniforms.uFadeOut, settings.fadeOut);
    gl.uniform3f(uniforms.uColor, color[0], color[1], color[2]);
    gl.uniform3f(uniforms.uColorTwo, colorTwo[0], colorTwo[1], colorTwo[2]);
    gl.uniform1i(uniforms.uRingCount, settings.ringCount);

    const render = time => {
        if (!document.body.contains(canvas)) return;
        gl.uniform1f(uniforms.uTime, time * 0.001 * settings.speed);
        gl.clearColor(0, 0, 0, 0);
        gl.clear(gl.COLOR_BUFFER_BIT);
        gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
        requestAnimationFrame(render);
    };
    requestAnimationFrame(render);
}

function renderApp() {
    const user = syncCurrentUserName();
    document.body.innerHTML = `
        <div class="app app-enter">
            <aside class="sidebar">
                <nav class="menu">${menuForRole(user.role).map(item => navLink(item.page, item.label)).join('')}</nav>
                <button class="logout" id="logoutBtn">Logout</button>
            </aside>
            <main class="main-content">
                <nav class="topbar">
                    <div>
                        <h1 id="pageTitle">Dashboard</h1>
                        <p>hi, ${text(user.nama)}. ${subtitleForRole(user.role)}</p>
                    </div>
                    ${themeToggle()}
                </nav>
                <section class="content" id="content"></section>
            </main>
        </div>
    `;

    document.querySelectorAll('[data-page]').forEach(link => {
        link.addEventListener('click', event => {
            event.preventDefault();
            page = event.currentTarget.dataset.page;
            renderPage();
        });
    });

    document.getElementById('logoutBtn').addEventListener('click', openLogoutConfirm);

    initAuraTracking();
    initThemeToggle();
    renderPage();
}

function openLogoutConfirm() {
    const existing = document.querySelector('[data-logout-modal]');
    if (existing) existing.remove();
    document.querySelector('.app').insertAdjacentHTML('beforeend', `
        <div class="logout-modal-backdrop" data-logout-modal>
            <section class="logout-modal">
                <div class="logout-orbit" aria-hidden="true">
                    <span></span><span></span><span></span>
                </div>
                <h2>Keluar dari sistem?</h2>
                <p>Sesi kamu akan ditutup dan halaman akan kembali ke login.</p>
                <div class="logout-modal-actions">
                    <button class="btn btn-outline-primary" type="button" data-cancel-logout>Batal</button>
                    <button class="btn btn-primary" type="button" data-confirm-logout>Logout</button>
                </div>
            </section>
        </div>
    `);
    const modal = document.querySelector('[data-logout-modal]');
    requestAnimationFrame(() => modal.classList.add('show'));
    modal.addEventListener('click', event => {
        if (event.target.matches('[data-logout-modal], [data-cancel-logout]')) closeLogoutConfirm();
        if (event.target.matches('[data-confirm-logout]')) {
            state.currentUser = null;
            closeLogoutConfirm();
            saveState();
            window.setTimeout(() => renderLogin(), 420);
        }
    });
}

function closeLogoutConfirm() {
    const modal = document.querySelector('[data-logout-modal]');
    if (!modal) return;
    modal.classList.remove('show');
    window.setTimeout(() => modal.remove(), 420);
}

function syncCurrentUserName() {
    const current = state.currentUser;
    if (!current) return null;
    const user = byId(state.users, current.id);
    const siswa = current.role === 'siswa' ? byId(state.siswa, current.siswaId) : null;
    const freshName = siswa?.nama || user?.nama || current.nama;

    state.currentUser = {
        ...current,
        nama: freshName,
        email: user?.email || current.email,
        role: user?.role || current.role,
        siswaId: user?.siswaId ?? current.siswaId,
        ekskulDiampu: user?.ekskulDiampu || current.ekskulDiampu,
        ekskulDiampuIds: user?.ekskulDiampuIds || current.ekskulDiampuIds,
        profilePhoto: user?.profilePhoto || current.profilePhoto || ''
    };
    saveState();
    return state.currentUser;
}

function initAuraTracking() {
    document.querySelector('.app').addEventListener('pointermove', event => {
        const target = event.target.closest('.menu a, .mini-card, .panel, .stat-card');
        if (!target) return;
        const rect = target.getBoundingClientRect();
        target.style.setProperty('--aura-x', `${event.clientX - rect.left}px`);
        target.style.setProperty('--aura-y', `${event.clientY - rect.top}px`);
    });
}

function menuForRole(role) {
    if (role === 'admin') {
        return [
            { page: 'dashboard', label: 'Dashboard' },
            { page: 'ekskul', label: 'Data Ekskul' },
            { page: 'siswa', label: 'Data Siswa' },
            { page: 'pendaftaran', label: 'Anggota' },
            { page: 'pencapaian', label: 'Pencapaian' },
            { page: 'jadwal', label: 'Jadwal' },
            { page: 'laporan', label: 'Laporan' },
            { page: 'profile', label: 'Profil' }
        ];
    }

    if (role === 'pembina') {
        return [
            { page: 'dashboard', label: 'Dashboard' },
            { page: 'ekskul', label: 'Data Ekskul' },
            { page: 'pendaftaran', label: 'Anggota' },
            { page: 'jadwal', label: 'Jadwal' },
            { page: 'absensi', label: 'Absensi' },
            { page: 'laporan', label: 'Laporan' },
            { page: 'profile', label: 'Profil' }
        ];
    }

    return [
        { page: 'dashboard', label: 'Dashboard' },
        { page: 'ekskul', label: 'Daftar Ekskul' },
        { page: 'pendaftaran', label: 'Pendaftaran Saya' },
        { page: 'jadwal', label: 'Jadwal' },
        { page: 'absensi', label: 'Absensi Saya' },
        { page: 'laporan', label: 'Riwayat Saya' },
        { page: 'profile', label: 'Profil' }
    ];
}

function navLink(target, label) {
    return `<a href="#" data-page="${target}" class="${page === target ? 'active' : ''}">${label}</a>`;
}

function roleLabel(role) {
    return { admin: 'Admin', pembina: 'Pembina', siswa: 'Siswa' }[role] || role;
}

function genderLabel(value) {
    return { L: 'Laki-laki', P: 'Perempuan' }[value] || value || '-';
}

function subtitleForRole(role) {
    if (role === 'admin') return 'Kelola data sekolah, ekstrakurikuler, jadwal, dan laporan.';
    if (role === 'pembina') return 'Pantau anggota, jadwal kegiatan, dan absensi siswa.';
    return 'Lihat pilihan ekskul, daftar kegiatan, jadwal, dan riwayat kehadiran.';
}

function setPageTitle(title) {
    document.getElementById('pageTitle').textContent = title;
    document.querySelectorAll('[data-page]').forEach(link => {
        link.classList.toggle('active', link.dataset.page === page);
    });
}

function renderPage() {
    const allowed = menuForRole(currentRole()).some(item => item.page === page);
    if (!allowed) page = 'dashboard';

    const pages = {
        dashboard: renderDashboard,
        ekskul: renderEkskul,
        siswa: renderSiswa,
        pendaftaran: renderPendaftaran,
        pencapaian: renderPencapaian,
        jadwal: renderJadwal,
        absensi: renderAbsensi,
        laporan: renderLaporan,
        profile: renderProfile
    };
    pages[page]();
}

function renderDashboard() {
    setPageTitle(`Dashboard ${roleLabel(currentRole())}`);
    if (currentRole() === 'siswa') return renderSiswaDashboard();

    const content = document.getElementById('content');
    const ekskulScope = visibleEkskul();
    const pendaftaranScope = visiblePendaftaran();
    const jadwalScope = visibleJadwal();
    const absensiScope = visibleAbsensi();
    const siswaScope = state.siswa.filter(siswa => pendaftaranScope.some(reg => reg.siswaId === siswa.id));
    const hadir = absensiScope.filter(item => item.status === 'Hadir').length;
    content.innerHTML = `
        <div class="stat-grid">
            <div class="stat-card stat-green"><span>Jumlah Siswa</span><strong>${currentRole() === 'admin' ? state.siswa.length : siswaScope.length}</strong></div>
            <div class="stat-card stat-orange"><span>Ekstrakurikuler</span><strong>${ekskulScope.length}</strong></div>
            <div class="stat-card stat-purple"><span>Jadwal Aktif</span><strong>${jadwalScope.length}</strong></div>
            <div class="stat-card stat-red"><span>Absensi Hadir</span><strong>${hadir}</strong></div>
        </div>
        <div class="dashboard-grid">
            <div class="panel">
                <div class="panel-title"><h2>Jadwal Kegiatan</h2></div>
                ${table(['Ekskul', 'Guru Pengampu', 'Tanggal', 'Hari', 'Jam', 'Tempat'], jadwalScope.slice(0, 8).map(item => [
                    ekskulName(item.ekskulId), pembinaNameForEkskul(item.ekskulId), scheduleDate(item), item.hari, item.jam, item.tempat
                ]))}
            </div>
            <div class="panel">
                <div class="panel-title"><h2>Anggota Terbaru</h2></div>
                ${table(['Siswa', 'Kelas', 'Ekskul'], pendaftaranScope.slice(-7).reverse().map(item => {
                    const siswa = byId(state.siswa, item.siswaId) || {};
                    return [siswa.nama, siswa.kelas, ekskulName(item.ekskulId)];
                }))}
            </div>
        </div>
    `;
}

function renderSiswaDashboard() {
    const content = document.getElementById('content');
    const siswaId = state.currentUser.siswaId;
    const myReg = state.pendaftaran.filter(item => item.siswaId === siswaId);
    const myAbs = state.absensi.filter(item => item.siswaId === siswaId);
    const mySchedules = state.jadwal.filter(item => myReg.some(reg => reg.ekskulId === item.ekskulId));

    content.innerHTML = `
        <div class="stat-grid">
            <div class="stat-card stat-green"><span>Ekskul Diikuti</span><strong>${myReg.length}</strong></div>
            <div class="stat-card stat-orange"><span>Pilihan Ekskul</span><strong>${state.ekskul.length}</strong></div>
            <div class="stat-card stat-purple"><span>Jadwal Saya</span><strong>${mySchedules.length}</strong></div>
            <div class="stat-card stat-red"><span>Riwayat Absensi</span><strong>${myAbs.length}</strong></div>
        </div>
        <div class="panel">
            <div class="panel-title"><h2>Ekskul Saya</h2></div>
            ${table(['Ekskul', 'Guru Pengampu', 'Tanggal', 'Hari', 'Jam', 'Tempat'], mySchedules.map(item => [
                ekskulName(item.ekskulId), pembinaNameForEkskul(item.ekskulId), scheduleDate(item), item.hari, item.jam, item.tempat
            ]))}
        </div>
        <div class="panel">
            <div class="panel-title"><h2>Rekomendasi Ekskul</h2></div>
            ${cardGrid(state.ekskul.slice(0, 6))}
        </div>
    `;
    initEkskulChoiceCards();
}

function renderEkskul() {
    setPageTitle(currentRole() === 'siswa' ? 'Daftar Ekstrakurikuler' : 'Data Ekstrakurikuler');
    const canEdit = currentRole() === 'admin';
    const ekskulRows = currentRole() === 'siswa' ? state.ekskul : visibleEkskul();
    const ekskulCards = currentRole() === 'siswa' ? state.ekskul : visibleEkskul();
    document.getElementById('content').innerHTML = `
        ${canEdit ? `
        <div class="panel">
            <div class="panel-title"><h2>Tambah Ekskul</h2></div>
            <form id="ekskulForm" class="row g-3">
                <div class="col-md-4"><label class="form-label">Nama Ekskul</label><input name="nama" class="form-control" required></div>
                <div class="col-md-6"><label class="form-label">Deskripsi</label><input name="deskripsi" class="form-control" required></div>
                <div class="col-md-2 d-flex align-items-end"><button class="btn btn-primary w-100">Simpan</button></div>
            </form>
        </div>` : `
        <div class="panel">
            <div class="panel-title"><h2>Pilihan Ekstrakurikuler</h2></div>
            ${cardGrid(ekskulCards)}
        </div>`}
        ${canEdit ? `<div class="panel">
            <div class="panel-title"><h2>Daftar Ekskul</h2></div>
            ${table(['No', 'Nama', 'Guru Pengampu', 'Deskripsi', canEdit ? 'Aksi' : ''], ekskulRows.map((item, index) => [
                index + 1, item.nama, pembinaNameForEkskul(item.id), item.deskripsi, canEdit ? actionButtons('ekskul', item.id) : ''
            ]))}
        </div>` : ''}
    `;

    if (canEdit) {
        document.getElementById('ekskulForm').addEventListener('submit', event => {
            event.preventDefault();
            const form = new FormData(event.target);
            const ekskulId = nextId(state.ekskul);
            state.ekskul.push({ id: ekskulId, nama: form.get('nama'), deskripsi: form.get('deskripsi') });
            if (currentRole() === 'pembina') assignEkskulToCurrentPembina(ekskulId);
            saveState();
            renderEkskul();
        });
    }
    initEkskulChoiceCards();
}

function renderSiswa() {
    if (currentRole() !== 'admin') {
        page = 'dashboard';
        renderDashboard();
        return;
    }

    setPageTitle('Data Siswa');
    const guruRows = state.users.filter(user => user.role === 'pembina');
    document.getElementById('content').innerHTML = `
        <div class="panel">
            <div class="panel-title"><h2>Tambah Siswa</h2></div>
            <form id="siswaForm" class="row g-3">
                <div class="col-md-3"><label class="form-label">Nama</label><input name="nama" class="form-control" required></div>
                <div class="col-md-2"><label class="form-label">Kelas</label><input name="kelas" class="form-control" required></div>
                <div class="col-md-2"><label class="form-label">NIS</label><input name="nis" class="form-control" required></div>
                <div class="col-md-2">${selectOnly('jenisKelamin', 'Jenis Kelamin', [['L', 'Laki-laki'], ['P', 'Perempuan']])}</div>
                <div class="col-md-3"><label class="form-label">Alamat</label><input name="alamat" class="form-control"></div>
                <div class="col-12"><button class="btn btn-primary">Simpan</button></div>
            </form>
        </div>
        <div class="panel">
            <div class="panel-title"><h2>Daftar Siswa</h2></div>
            ${table(['No', 'NIS', 'Nama', 'Kelas', 'JK', 'Alamat', 'Aksi'], state.siswa.map((item, index) => [
                index + 1, item.nis, item.nama, item.kelas, item.jenisKelamin, item.alamat, actionButtons('siswa', item.id)
            ]))}
        </div>
        ${guruRows.length < MAX_TEACHERS ? `<div class="panel">
            <div class="panel-title"><h2>Tambah Guru</h2></div>
            <form id="guruForm" class="row g-3">
                <div class="col-md-3"><label class="form-label">Nama Guru</label><input name="nama" class="form-control" required></div>
                <div class="col-md-3"><label class="form-label">Email Sekolah</label><input type="email" name="email" class="form-control" placeholder="guru@sekolah.id" required></div>
                <div class="col-md-2"><label class="form-label">Password</label><input name="password" class="form-control" required></div>
                <div class="col-md-4">${teacherEkskulChecks('ekskulDiampuIds')}</div>
                <div class="col-12"><button class="btn btn-primary">Simpan Guru</button></div>
            </form>
        </div>` : `
        <div class="panel">
            <div class="panel-title"><h2>Tambah Guru</h2></div>
            <p class="text-muted mb-0">Jumlah guru sudah ${MAX_TEACHERS}. Edit data guru yang tersedia jika ada perubahan pengampu.</p>
        </div>`}
        <div class="panel">
            <div class="panel-title"><h2>Data Guru</h2></div>
            ${table(['No', 'Nama Guru', 'Email', 'Ekskul yang Diampu', 'Aksi'], guruRows.map((item, index) => [
                index + 1, item.nama, item.email, teacherEkskulText(item), actionButtons('guru', item.id)
            ]))}
        </div>
    `;

    document.getElementById('siswaForm').addEventListener('submit', event => {
        event.preventDefault();
        const form = new FormData(event.target);
        state.siswa.push({
            id: nextId(state.siswa),
            nama: form.get('nama'),
            kelas: form.get('kelas'),
            nis: form.get('nis'),
            jenisKelamin: form.get('jenisKelamin'),
            alamat: form.get('alamat')
        });
        saveState();
        renderSiswa();
    });

    document.getElementById('guruForm')?.addEventListener('submit', event => {
        event.preventDefault();
        const form = new FormData(event.target);
        if (teacherCount() >= MAX_TEACHERS) {
            showAppMessage('Data Guru', `Jumlah guru sudah ${MAX_TEACHERS}.`);
            return;
        }
        const email = String(form.get('email') || '').trim().toLowerCase();
        if (!isSchoolEmail(email)) {
            showAppMessage('Data Guru', 'Guru wajib menggunakan email sekolah.id.');
            return;
        }
        if (state.users.some(user => String(user.email).toLowerCase() === email)) {
            showAppMessage('Data Guru', 'Email guru sudah terdaftar.');
            return;
        }
        const user = {
            id: nextId(state.users),
            nama: String(form.get('nama') || '').trim(),
            email,
            password: String(form.get('password') || '').trim(),
            role: 'pembina',
            siswaId: null,
            ekskulDiampuIds: selectedEkskulIds(form),
            profilePhoto: ''
        };
        user.ekskulDiampu = ekskulNamesFromIds(user.ekskulDiampuIds) || 'Belum diatur';
        state.users.push(user);
        saveState();
        renderSiswa();
    });
}

function teacherEkskulChecks(name, selectedIds = []) {
    const selected = selectedIds.map(Number);
    return `
        <label class="form-label">Pengampu Ekskul</label>
        <div class="check-grid">
            ${state.ekskul.map(item => `
                <label class="check-pill">
                    <input type="checkbox" name="${text(name)}" value="${item.id}" ${selected.includes(Number(item.id)) ? 'checked' : ''}>
                    <span>${text(item.nama)}</span>
                </label>
            `).join('')}
        </div>
    `;
}

function selectedEkskulIds(form) {
    return form.getAll('ekskulDiampuIds').map(Number).filter(id => byId(state.ekskul, id));
}

function ekskulNamesFromIds(ids) {
    return (ids || []).map(id => ekskulName(id)).filter(Boolean).join(', ');
}

function teacherEkskulText(user) {
    if (Array.isArray(user.ekskulDiampuIds) && user.ekskulDiampuIds.length) return ekskulNamesFromIds(user.ekskulDiampuIds);
    return user.ekskulDiampu || 'Belum diatur';
}

function renderPendaftaran() {
    const role = currentRole();
    setPageTitle(role === 'siswa' ? 'Pendaftaran Saya' : 'Anggota & Pendaftaran');
    const canPickSiswa = role !== 'siswa';
    const currentSiswa = role === 'siswa' ? byId(state.siswa, state.currentUser.siswaId) : null;
    const ekskulOptions = canPickSiswa ? visibleEkskul() : state.ekskul;
    const visibleRows = visiblePendaftaran();

    document.getElementById('content').innerHTML = `
        <div class="panel">
            <div class="panel-title"><h2>${role === 'siswa' ? 'Daftar Ekskul Online' : 'Tambah Anggota'}</h2></div>
            <form id="daftarForm" class="row g-3">
                ${canPickSiswa ? `
                    ${selectField('siswaId', 'Siswa Terdaftar', state.siswa.map(item => [item.id, `${item.nama} - ${item.kelas}`]), 'col-md-3', false)}
                    <div class="col-md-3"><label class="form-label">Nama Manual</label><input name="namaManual" class="form-control" placeholder="Ketik nama siswa"></div>
                    <div class="col-md-2"><label class="form-label">Kelas Manual</label><input name="kelasManual" class="form-control" placeholder="Contoh XI IPA 1"></div>
                ` : ''}
                ${!canPickSiswa ? `
                    <div class="col-12 form-section-label">Data Diri Siswa</div>
                    <div class="col-md-3"><label class="form-label">Nama Siswa</label><input name="namaSiswa" class="form-control" value="${text(currentSiswa?.nama || state.currentUser.nama || '')}" placeholder="Nama lengkap siswa" required></div>
                    <div class="col-md-3"><label class="form-label">Kelas</label><input name="kelasSiswa" class="form-control" value="${text(currentSiswa?.kelas && currentSiswa.kelas !== 'Belum diisi' ? currentSiswa.kelas : '')}" placeholder="Contoh XI IPA 1" required></div>
                    <div class="col-md-3"><label class="form-label">NIS</label><input name="nisSiswa" class="form-control" value="${text(currentSiswa?.nis || '')}" placeholder="Nomor induk siswa" required></div>
                    <div class="col-md-3">${selectOnly('jenisKelaminSiswa', 'Jenis Kelamin', [['L', 'Laki-laki'], ['P', 'Perempuan']], true, currentSiswa?.jenisKelamin || '')}</div>
                    <div class="col-md-6"><label class="form-label">Alamat Rumah</label><input name="alamatSiswa" class="form-control" value="${text(alamatSiswaUntukPendaftaran(currentSiswa))}" placeholder="Alamat rumah lengkap" required></div>
                    <div class="col-12 form-section-label">Pilihan Ekstrakurikuler</div>
                ` : ''}
                ${selectField('ekskulId', 'Ekstrakurikuler', ekskulOptions.map(item => [item.id, item.nama]), canPickSiswa ? 'col-md-2' : 'col-md-5')}
                <div class="col-md-2 d-flex align-items-end"><button class="btn btn-primary w-100">Daftar</button></div>
            </form>
        </div>
        <div class="panel">
            <div class="panel-title"><h2>${role === 'siswa' ? 'Ekskul yang Saya Ikuti' : 'Data Anggota'}</h2></div>
            ${table(pendaftaranHeaders(role), visibleRows.map((item, index) => {
                const siswa = byId(state.siswa, item.siswaId) || {};
                return pendaftaranRow(role, item, siswa, index);
            }))}
        </div>
    `;

    document.getElementById('daftarForm').addEventListener('submit', event => {
        event.preventDefault();
        const form = new FormData(event.target);
        if (!canPickSiswa) {
            handleStudentEkskulSubmit(event, renderPendaftaran);
            return;
        }

        const siswaId = resolveAnggotaSiswaId(form);
        const ekskulId = Number(form.get('ekskulId'));
        if (canPickSiswa && !canAccessEkskul(ekskulId)) {
            showAppMessage('Akses Ditolak', 'Pembina hanya bisa menambah anggota pada ekskul yang diampu.');
            return;
        }
        const exists = state.pendaftaran.some(item => item.siswaId === siswaId && item.ekskulId === ekskulId);

        if (!siswaId || !ekskulId || exists) {
            showAppMessage('Pendaftaran', exists ? 'Siswa sudah terdaftar pada ekskul ini.' : 'Data belum lengkap.');
            return;
        }

        addPendaftaran(siswaId, ekskulId);
        saveState();
        renderPendaftaran();
    });
}

function renderPencapaian() {
    if (currentRole() !== 'admin') {
        page = 'dashboard';
        renderDashboard();
        return;
    }

    setPageTitle('Pencapaian Ekskul Siswa');
    document.getElementById('content').innerHTML = `
        <div class="panel">
            <div class="panel-title"><h2>Tambah Pencapaian Siswa</h2></div>
            <form id="pencapaianForm" class="row g-3">
                <div class="col-md-4">${selectOnly('siswaId', 'Nama Siswa', state.siswa.map(item => [item.id, `${item.nama} - ${item.kelas}`]))}</div>
                <div class="col-md-3"><label class="form-label">Kelas</label><input name="kelas" class="form-control" readonly></div>
                <div class="col-md-3">${selectOnly('ekskulId', 'Ekskul', state.ekskul.map(item => [item.id, item.nama]))}</div>
                <div class="col-md-2 d-flex align-items-end"><button class="btn btn-primary w-100">Simpan</button></div>
                <div class="col-12"><label class="form-label">Pencapaian yang Diraih</label><input name="pencapaian" class="form-control" placeholder="Contoh: Juara 1 lomba poster tingkat kota" required></div>
            </form>
        </div>
        <div class="panel">
            <div class="panel-title"><h2>Daftar Pencapaian</h2></div>
            ${table(['No', 'Nama Siswa', 'Kelas', 'Ekskul', 'Pencapaian', 'Aksi'], state.siswa.map((item, index) => [
                index + 1,
                item.nama,
                item.kelas,
                item.pencapaianEkskul ? ekskulName(item.pencapaianEkskul) : '-',
                item.pencapaian || 'Belum ada pencapaian',
                actionButtons('pencapaian', item.id)
            ]))}
        </div>
    `;

    const form = document.getElementById('pencapaianForm');
    const syncClass = () => {
        const siswa = byId(state.siswa, Number(form.siswaId.value));
        form.kelas.value = siswa?.kelas || '';
    };
    form.siswaId.addEventListener('change', syncClass);
    syncClass();
    form.addEventListener('submit', event => {
        event.preventDefault();
        const data = new FormData(event.target);
        const siswa = byId(state.siswa, Number(data.get('siswaId')));
        if (!siswa) {
            showAppMessage('Pencapaian', 'Pilih siswa terlebih dahulu.');
            return;
        }
        siswa.kelas = String(data.get('kelas') || '').trim() || siswa.kelas;
        siswa.pencapaianEkskul = Number(data.get('ekskulId')) || siswa.pencapaianEkskul;
        siswa.pencapaian = String(data.get('pencapaian') || '').trim() || siswa.pencapaian;
        saveState();
        renderPencapaian();
    });
}

function handleStudentEkskulSubmit(event, rerender) {
    event.preventDefault();
    const form = new FormData(event.target);
    const siswaId = Number(state.currentUser.siswaId);
    const ekskulId = Number(form.get('ekskulId'));
    updateCurrentSiswaRegistrationInfo(form);

    const exists = state.pendaftaran.some(item => item.siswaId === siswaId && item.ekskulId === ekskulId);
    if (!siswaId || !ekskulId || exists) {
        showAppMessage('Pendaftaran', exists ? 'Kamu sudah terdaftar pada ekskul ini.' : 'Data pendaftaran belum lengkap.');
        return;
    }

    addPendaftaran(siswaId, ekskulId);
    saveState();
    rerender();
}

function updateCurrentSiswaClass(kelas) {
    const siswa = byId(state.siswa, state.currentUser.siswaId);
    const cleanClass = String(kelas || '').trim();
    if (siswa && cleanClass) siswa.kelas = cleanClass;
}

function updateCurrentSiswaRegistrationInfo(form) {
    const siswa = byId(state.siswa, state.currentUser.siswaId);
    if (!siswa) return;

    const cleanName = String(form.get('namaSiswa') || '').trim();
    if (cleanName) {
        siswa.nama = cleanName;
        const user = byId(state.users, state.currentUser.id);
        if (user) user.nama = cleanName;
        state.currentUser.nama = cleanName;
    }
    siswa.kelas = String(form.get('kelasSiswa') || '').trim() || siswa.kelas;
    siswa.nis = String(form.get('nisSiswa') || '').trim() || siswa.nis;
    siswa.jenisKelamin = String(form.get('jenisKelaminSiswa') || '').trim() || siswa.jenisKelamin;
    siswa.alamat = String(form.get('alamatSiswa') || '').trim() || siswa.alamat;
}

function pendaftaranHeaders(role) {
    if (role === 'admin') return ['No', 'Siswa', 'Kelas', 'NIS', 'Jenis Kelamin', 'Alamat Rumah', 'Ekskul', 'Tanggal', 'Aksi'];
    if (role === 'pembina') return ['No', 'Siswa', 'Kelas', 'NIS', 'Ekskul', 'Tanggal', 'Aksi'];
    return ['No', 'Siswa', 'Kelas', 'Ekskul', 'Tanggal', role === 'siswa' ? '' : 'Aksi'];
}

function pendaftaranRow(role, item, siswa, index) {
    if (role === 'admin') {
        return [
            index + 1,
            siswa.nama,
            siswa.kelas,
            siswa.nis,
            genderLabel(siswa.jenisKelamin),
            siswa.alamat,
            ekskulName(item.ekskulId),
            item.tanggal,
            actionButtons('pendaftaran', item.id)
        ];
    }

    if (role === 'pembina') {
        return [
            index + 1,
            siswa.nama,
            siswa.kelas,
            siswa.nis,
            ekskulName(item.ekskulId),
            item.tanggal,
            actionButtons('pendaftaran', item.id)
        ];
    }

    return [
        index + 1,
        siswa.nama,
        siswa.kelas,
        ekskulName(item.ekskulId),
        item.tanggal,
        role === 'siswa' ? '' : actionButtons('pendaftaran', item.id)
    ];
}

function laporanAnggotaHeaders(role) {
    if (role === 'admin') {
        return ['No', 'Ekskul', 'Guru Pengampu', 'Siswa', 'Kelas', 'NIS', 'Jenis Kelamin', 'Alamat Rumah', 'Tanggal', 'Aksi'];
    }
    if (role === 'pembina') {
        return ['No', 'Ekskul', 'Guru Pengampu', 'Siswa', 'Kelas', 'NIS', 'Tanggal', 'Aksi'];
    }
    return ['No', 'Ekskul', 'Guru Pengampu', 'Siswa', 'Kelas', 'Tanggal', role === 'siswa' ? '' : 'Aksi'];
}

function laporanAnggotaRow(role, item, siswa, index) {
    if (role === 'admin') {
        return [
            index + 1,
            ekskulName(item.ekskulId),
            pembinaNameForEkskul(item.ekskulId),
            siswa.nama,
            siswa.kelas,
            siswa.nis,
            genderLabel(siswa.jenisKelamin),
            siswa.alamat,
            item.tanggal,
            actionButtons('pendaftaran', item.id)
        ];
    }

    if (role === 'pembina') {
        return [
            index + 1,
            ekskulName(item.ekskulId),
            pembinaNameForEkskul(item.ekskulId),
            siswa.nama,
            siswa.kelas,
            siswa.nis,
            item.tanggal,
            actionButtons('pendaftaran', item.id)
        ];
    }

    return [
        index + 1,
        ekskulName(item.ekskulId),
        pembinaNameForEkskul(item.ekskulId),
        siswa.nama,
        siswa.kelas,
        item.tanggal,
        role === 'siswa' ? '' : actionButtons('pendaftaran', item.id)
    ];
}

function resolveAnggotaSiswaId(form) {
    const manualName = String(form.get('namaManual') || '').trim();
    if (!manualName) return Number(form.get('siswaId'));

    const manualClass = String(form.get('kelasManual') || '').trim() || 'Belum diisi';
    const existing = state.siswa.find(item => item.nama.toLowerCase() === manualName.toLowerCase() && item.kelas.toLowerCase() === manualClass.toLowerCase());
    if (existing) return existing.id;

    const siswaId = nextId(state.siswa);
    state.siswa.push({
        id: siswaId,
        nama: manualName,
        kelas: manualClass,
        nis: `MAN-${String(siswaId).padStart(4, '0')}`,
        jenisKelamin: '-',
        alamat: '',
        pencapaian: 'Belum ada pencapaian'
    });
    return siswaId;
}

function addPendaftaran(siswaId, ekskulId) {
    state.pendaftaran.push({
        id: nextId(state.pendaftaran),
        siswaId: Number(siswaId),
        ekskulId: Number(ekskulId),
        tanggal: today()
    });
    ensureRegistrationConnected(ekskulId);
}

function ensureRegistrationConnected(ekskulId) {
    ensureEkskulHasPembina(ekskulId);
    ensureEkskulHasSchedule(ekskulId);
}

function renderJadwal() {
    setPageTitle('Jadwal Kegiatan');
    const canEdit = ['admin', 'pembina'].includes(currentRole());
    const schedules = visibleJadwal();
    const ekskulOptions = canEdit ? visibleEkskul() : state.ekskul;

    document.getElementById('content').innerHTML = `
        ${canEdit ? `
        <div class="panel">
            <div class="panel-title"><h2>Tambah Jadwal</h2></div>
            <form id="jadwalForm" class="row g-3">
                ${selectField('ekskulId', 'Ekskul', ekskulOptions.map(item => [item.id, item.nama]), 'col-md-3')}
                <div class="col-md-2"><label class="form-label">Tanggal</label><input type="date" name="tanggal" class="form-control" value="${today()}" required></div>
                ${selectField('hari', 'Hari', ['Senin','Selasa','Rabu','Kamis','Jumat','Sabtu','Minggu'].map(item => [item, item]), 'col-md-2')}
                <div class="col-md-2"><label class="form-label">Jam</label><input type="time" name="jam" class="form-control" required></div>
                <div class="col-md-2"><label class="form-label">Tempat</label><input name="tempat" class="form-control" required></div>
                <div class="col-md-1 d-flex align-items-end"><button class="btn btn-primary w-100">OK</button></div>
            </form>
        </div>` : ''}
        <div class="panel">
            <div class="panel-title"><h2>${currentRole() === 'siswa' ? 'Jadwal Ekskul Saya' : 'Daftar Jadwal'}</h2></div>
            ${table(['No', 'Ekskul', 'Guru Pengampu', 'Tanggal', 'Hari', 'Jam', 'Tempat', canEdit ? 'Aksi' : ''], schedules.map((item, index) => [
                index + 1, ekskulName(item.ekskulId), pembinaNameForEkskul(item.ekskulId), scheduleDate(item), item.hari, item.jam, item.tempat, canEdit ? actionButtons('jadwal', item.id) : ''
            ]))}
        </div>
    `;

    if (canEdit) {
        document.getElementById('jadwalForm').addEventListener('submit', event => {
            event.preventDefault();
            const form = new FormData(event.target);
            const ekskulId = Number(form.get('ekskulId'));
            if (!canAccessEkskul(ekskulId)) {
                showAppMessage('Akses Ditolak', 'Pembina hanya bisa membuat jadwal untuk ekskul yang diampu.');
                return;
            }
            state.jadwal.push({
                id: nextId(state.jadwal),
                ekskulId,
                tanggal: form.get('tanggal'),
                hari: form.get('hari'),
                jam: form.get('jam'),
                tempat: form.get('tempat')
            });
            saveState();
            renderJadwal();
        });
    }
}

function renderAbsensi() {
    if (currentRole() === 'siswa') return renderAbsensiSiswa();

    setPageTitle('Absensi');
    const ekskulOptions = visibleEkskul();
    document.getElementById('content').innerHTML = `
        <div class="panel">
            <div class="panel-title"><h2>Catat Kehadiran</h2></div>
            <form id="absensiForm" class="row g-3">
                ${selectField('ekskulId', 'Ekskul', ekskulOptions.map(item => [item.id, item.nama]), 'col-md-5')}
                <div class="col-md-3"><label class="form-label">Tanggal</label><input type="date" name="tanggal" class="form-control" value="${today()}" required></div>
                <div class="col-md-2 d-flex align-items-end"><button class="btn btn-primary w-100">Tampilkan</button></div>
            </form>
        </div>
        <div id="absensiList"></div>
    `;

    document.getElementById('absensiForm').addEventListener('submit', event => {
        event.preventDefault();
        const form = new FormData(event.target);
        if (!canAccessEkskul(Number(form.get('ekskulId')))) {
            showAppMessage('Akses Ditolak', 'Pembina hanya bisa melihat absensi ekskul yang diampu.');
            return;
        }
        showAbsensi(Number(form.get('ekskulId')), form.get('tanggal'));
    });
}

function renderAbsensiSiswa() {
    setPageTitle('Absensi Saya');
    const siswaId = Number(state.currentUser.siswaId);
    const siswa = byId(state.siswa, siswaId) || {};
    const pilihanEkskul = state.ekskul.map(item => [item.id, item.nama]);
    const absensiSaya = state.absensi.filter(item => item.siswaId === siswaId);

    document.getElementById('content').innerHTML = `
        <div class="panel">
            <div class="panel-title"><h2>Isi Absensi Ekskul</h2></div>
            <form id="absensiSiswaForm" class="row g-3">
                ${selectField('ekskulId', 'Ekstrakurikuler', pilihanEkskul, 'col-md-4')}
                <div class="col-md-3"><label class="form-label">Tanggal</label><input type="date" name="tanggal" class="form-control" value="${today()}" required></div>
                <div class="col-md-3">${selectOnly('status', 'Keterangan', [['Hadir', 'Hadir'], ['Izin', 'Izin'], ['Sakit', 'Sakit']])}</div>
                <div class="col-md-2 d-flex align-items-end"><button class="btn btn-primary w-100">Simpan</button></div>
            </form>
        </div>
        <div class="panel">
            <div class="panel-title"><h2>Riwayat Absensi Saya</h2></div>
            ${table(['No', 'Siswa', 'Kelas', 'Tanggal', 'Ekskul', 'Keterangan'], absensiSaya.map((item, index) => [
                index + 1,
                siswa.nama,
                siswa.kelas,
                item.tanggal,
                ekskulName(item.ekskulId),
                `<span class="badge-role status-${item.status.toLowerCase()}">${text(item.keterangan || item.status)}</span>`
            ]))}
        </div>
    `;

    document.getElementById('absensiSiswaForm').addEventListener('submit', event => {
        event.preventDefault();
        const form = new FormData(event.target);
        const ekskulId = Number(form.get('ekskulId'));
        const tanggal = form.get('tanggal');
        const status = form.get('status');

        if (!ekskulId || !tanggal || !status) {
            showAppMessage('Absensi', 'Lengkapi data absensi.');
            return;
        }

        ensureSiswaRegisteredToEkskul(siswaId, ekskulId);
        const existing = state.absensi.find(item => item.siswaId === siswaId && item.ekskulId === ekskulId && item.tanggal === tanggal);
        if (existing) {
            existing.status = status;
            existing.keterangan = status;
        } else {
            state.absensi.push({ id: nextId(state.absensi), siswaId, ekskulId, tanggal, status, keterangan: status });
        }

        saveState();
        renderAbsensiSiswa();
    });
}

function ensureSiswaRegisteredToEkskul(siswaId, ekskulId) {
    const exists = state.pendaftaran.some(item => item.siswaId === siswaId && item.ekskulId === ekskulId);
    if (!exists) {
        addPendaftaran(siswaId, ekskulId);
    } else {
        ensureRegistrationConnected(ekskulId);
    }
}

function showAbsensi(ekskulId, tanggal) {
    const anggota = state.pendaftaran
        .filter(item => item.ekskulId === ekskulId)
        .map(item => byId(state.siswa, item.siswaId))
        .filter(Boolean);
    const absensiEkskul = state.absensi.filter(item => Number(item.ekskulId) === Number(ekskulId) && item.tanggal === tanggal);
    const anggotaIds = anggota.map(item => Number(item.id));
    const siswaAbsensiMandiri = absensiEkskul
        .filter(item => !anggotaIds.includes(Number(item.siswaId)))
        .map(item => byId(state.siswa, item.siswaId))
        .filter(Boolean);
    const rows = [...anggota, ...siswaAbsensiMandiri];

    document.getElementById('absensiList').innerHTML = `
        <div class="panel">
            <div class="panel-title"><h2>Anggota ${text(ekskulName(ekskulId))}</h2></div>
            <form id="saveAbsensiForm">
                ${table(['No', 'Nama', 'Kelas', 'Status'], rows.map((siswa, index) => {
                    const absen = state.absensi.find(item => item.siswaId === siswa.id && item.ekskulId === ekskulId && item.tanggal === tanggal);
                    return [index + 1, siswa.nama, siswa.kelas, statusSelect(siswa.id, absen?.status || 'Hadir')];
                }))}
                <button class="btn btn-primary mt-3">Simpan Absensi</button>
            </form>
        </div>
    `;

    document.getElementById('saveAbsensiForm').addEventListener('submit', event => {
        event.preventDefault();
        rows.forEach(siswa => {
            const status = document.querySelector(`[name="status-${siswa.id}"]`).value;
            const existing = state.absensi.find(item => item.siswaId === siswa.id && item.ekskulId === ekskulId && item.tanggal === tanggal);
            if (existing) {
                existing.status = status;
                existing.keterangan = status;
            } else {
                state.absensi.push({ id: nextId(state.absensi), siswaId: siswa.id, ekskulId, tanggal, status, keterangan: status });
            }
        });
        archiveAbsensi(ekskulId, tanggal, rows);
        saveState();
        showAppMessage('Absensi', 'Absensi berhasil disimpan dan masuk arsip laporan.');
        showAbsensi(ekskulId, tanggal);
    });
}

function archiveAbsensi(ekskulId, tanggal, rows) {
    const user = state.currentUser || {};
    const archiveRows = rows.map(siswa => {
        const absen = state.absensi.find(item => Number(item.siswaId) === Number(siswa.id) && Number(item.ekskulId) === Number(ekskulId) && item.tanggal === tanggal);
        return {
            siswaId: Number(siswa.id),
            nama: siswa.nama,
            kelas: siswa.kelas,
            status: absen?.status || 'Hadir'
        };
    });
    const existing = (state.arsipAbsensi || []).find(item =>
        Number(item.ekskulId) === Number(ekskulId) &&
        item.tanggal === tanggal &&
        Number(item.pembinaId || 0) === Number(user.id || 0)
    );
    const payload = {
        ekskulId: Number(ekskulId),
        tanggal,
        pembinaId: user.id || null,
        pembinaNama: user.nama || roleLabel(user.role),
        dibuatPada: new Date().toISOString(),
        rows: archiveRows
    };

    if (existing) Object.assign(existing, payload);
    else state.arsipAbsensi.push({ id: nextId(state.arsipAbsensi || []), ...payload });
}

function renderLaporan() {
    const role = currentRole();
    setPageTitle(role === 'siswa' ? 'Riwayat Saya' : 'Laporan');
    const anggota = visiblePendaftaran();
    const absensi = visibleAbsensi();
    const arsip = visibleArsipAbsensi();

    document.getElementById('content').innerHTML = `
        <div class="panel">
            <div class="panel-title"><h2>${role === 'siswa' ? 'Ekskul Saya' : 'Laporan Data Anggota'}</h2><button class="btn btn-sm btn-outline-primary" onclick="window.print()">Cetak</button></div>
            ${table(laporanAnggotaHeaders(role), anggota.map((item, index) => {
                const siswa = byId(state.siswa, item.siswaId) || {};
                return laporanAnggotaRow(role, item, siswa, index);
            }))}
        </div>
        <div class="panel">
            <div class="panel-title"><h2>${role === 'siswa' ? 'Riwayat Absensi Saya' : 'Laporan Data Absensi'}</h2></div>
            ${table(['No', 'Tanggal', 'Ekskul', 'Guru Pengampu', 'Siswa', 'Kelas', 'Keterangan', role === 'siswa' ? '' : 'Aksi'], absensi.map((item, index) => {
                const siswa = byId(state.siswa, item.siswaId) || {};
                const keterangan = item.keterangan || item.status;
                return [
                    index + 1,
                    item.tanggal,
                    ekskulName(item.ekskulId),
                    pembinaNameForEkskul(item.ekskulId),
                    siswa.nama,
                    siswa.kelas,
                    `<span class="badge-role status-${item.status.toLowerCase()}">${text(keterangan)}</span>`,
                    role === 'siswa' ? '' : actionButtons('absensi', item.id)
                ];
            }))}
        </div>
        ${role === 'siswa' ? '' : `
        <div class="panel">
            <div class="panel-title"><h2>Arsip Absensi</h2></div>
            ${renderArsipAbsensi(arsip)}
        </div>`}
    `;
}

function renderArsipAbsensi(items) {
    if (!items.length) {
        return `<div class="archive-empty">Belum ada arsip absensi. Simpan absensi anggota terlebih dahulu.</div>`;
    }

    return `<div class="archive-list">${items.map(item => `
        <section class="archive-block">
            <div class="archive-head">
                <div>
                    <strong>${text(ekskulName(item.ekskulId))}</strong>
                    <span>${text(item.tanggal)} - Disimpan oleh ${text(item.pembinaNama || '-')}</span>
                </div>
                ${currentRole() === 'admin' ? `<div class="archive-actions">${actionButtons('arsipAbsensi', item.id)}</div>` : ''}
            </div>
            ${table(['No', 'Siswa', 'Kelas', 'Status'], (item.rows || []).map((row, index) => [
                index + 1,
                row.nama,
                row.kelas,
                `<span class="badge-role status-${String(row.status).toLowerCase()}">${text(row.status)}</span>`
            ]))}
        </section>
    `).join('')}</div>`;
}

function renderProfile() {
    const role = currentRole();
    const user = syncCurrentUserName();
    setPageTitle('Profil');
    let markup;

    if (role === 'siswa') {
        const siswa = byId(state.siswa, user.siswaId) || {};
        const myReg = state.pendaftaran.filter(item => item.siswaId === user.siswaId);
        const ekskulList = myReg.map(item => ekskulName(item.ekskulId)).join(', ') || 'Belum mendaftar ekskul';
        markup = profileLayout({
            name: siswa.nama || user.nama,
            role: roleLabel(role),
            details: [
                ['Nama', siswa.nama || user.nama],
                ['Kelas', siswa.kelas || 'Belum diisi'],
                ['Eskul', ekskulList],
                ['Pencapaian Eskul', siswa.pencapaian || 'Belum ada pencapaian']
            ]
        });
    } else {
        markup = profileLayout({
            name: user.nama,
            role: roleLabel(role),
            details: [
                ['Nama', user.nama],
                ['Eskul yang Diampu', user.ekskulDiampu || (role === 'admin' ? 'Semua Ekstrakurikuler' : 'Belum diatur')]
            ]
        });
    }

    document.getElementById('content').innerHTML = markup;
    initProfilePhotoUpload();
    initLanyardDrag();
}

function profileLayout(profile) {
    const photo = profilePhotoSrc();
    return `
        <div class="profile-page">
            <div class="profile-lanyard">
                <div class="lanyard-wrapper">
                    <div class="lanyard-cord"></div>
                    <div class="lanyard-card">
                        <div class="lanyard-photo">${photo ? `<img src="${photo}" alt="Foto profil ${text(profile.name)}">` : profileInitial(profile.name)}</div>
                        <strong>${text(profile.name)}</strong>
                        <span>${text(profile.role)}</span>
                        <button class="profile-upload" type="button" id="profilePhotoButton">${photo ? 'Ganti Foto Profil' : 'Unggah Foto Profil'}</button>
                    </div>
                </div>
            </div>
            <div class="panel profile-panel">
                <div class="panel-title"><h2>Kartu Profil</h2></div>
                <div class="profile-detail-grid">
                    ${profile.details.map(([label, value]) => `
                        <div class="profile-detail">
                            <span>${text(label)}</span>
                            <strong>${text(value)}</strong>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `;
}

function profilePhotoSrc() {
    const user = byId(state.users, state.currentUser?.id);
    return user?.profilePhoto || state.currentUser?.profilePhoto || '';
}

function initProfilePhotoUpload() {
    document.getElementById('profilePhotoButton')?.addEventListener('pointerdown', event => event.stopPropagation());
    document.getElementById('profilePhotoButton')?.addEventListener('click', event => {
        event.stopPropagation();
        openProfilePhotoModal();
    });
}

function openProfilePhotoModal() {
    const currentPhoto = profilePhotoSrc();
    document.querySelector('[data-photo-modal]')?.remove();
    document.body.insertAdjacentHTML('beforeend', `
        <div class="edit-modal-backdrop" data-photo-modal>
            <section class="edit-modal photo-modal">
                <div class="panel-title">
                    <h2>Ubah Foto Profil</h2>
                    <button class="btn btn-sm btn-outline-primary" type="button" data-close-photo>Tutup</button>
                </div>
                <div class="photo-modal-body">
                    <div class="photo-preview" id="profilePhotoPreview">${currentPhoto ? `<img src="${currentPhoto}" alt="Preview foto profil">` : profileInitial(state.currentUser?.nama || 'U')}</div>
                    <button class="profile-upload photo-picker" type="button" id="chooseProfilePhoto">Pilih Foto</button>
                    <input class="photo-file-input" type="file" id="profilePhotoInput" accept="image/*">
                    <div class="modal-inline-message" id="photoModalMessage" hidden></div>
                </div>
                <div class="edit-modal-actions">
                    <button class="btn btn-outline-primary" type="button" data-close-photo>Batal</button>
                    <button class="btn btn-primary" type="button" id="saveProfilePhoto" disabled>Simpan Foto</button>
                </div>
            </section>
        </div>
    `);

    const modal = document.querySelector('[data-photo-modal]');
    const input = document.getElementById('profilePhotoInput');
    const preview = document.getElementById('profilePhotoPreview');
    const saveButton = document.getElementById('saveProfilePhoto');
    const message = document.getElementById('photoModalMessage');
    let pendingPhoto = '';
    const close = () => modal.remove();

    modal.addEventListener('click', event => {
        if (event.target.matches('[data-photo-modal], [data-close-photo]')) close();
    });
    document.getElementById('chooseProfilePhoto')?.addEventListener('click', event => {
        event.stopPropagation();
        input.value = '';
        input.click();
    });

    input.addEventListener('change', event => {
        const file = event.target.files?.[0];
        if (!file) return;
        if (!file.type.startsWith('image/')) {
            message.textContent = 'File harus berupa gambar.';
            message.hidden = false;
            return;
        }
        resizeProfilePhoto(file).then(dataUrl => {
            pendingPhoto = dataUrl;
            preview.innerHTML = `<img src="${dataUrl}" alt="Preview foto profil baru">`;
            saveButton.disabled = false;
            message.hidden = true;
        }).catch(() => {
            message.textContent = 'Foto tidak bisa dibaca. Coba pilih gambar lain.';
            message.hidden = false;
        });
    });

    saveButton.addEventListener('click', () => {
        if (!pendingPhoto) return;
        const user = byId(state.users, state.currentUser.id);
        if (user) user.profilePhoto = pendingPhoto;
        state.currentUser.profilePhoto = pendingPhoto;
        saveState();
        close();
        renderProfile();
    });
}

function resizeProfilePhoto(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => {
            const img = new Image();
            img.onload = () => {
                const size = 420;
                const canvas = document.createElement('canvas');
                canvas.width = size;
                canvas.height = size;
                const ctx = canvas.getContext('2d');
                ctx.fillStyle = '#ffffff';
                ctx.fillRect(0, 0, size, size);
                const scale = Math.min(size / img.width, size / img.height);
                const width = img.width * scale;
                const height = img.height * scale;
                ctx.drawImage(img, (size - width) / 2, (size - height) / 2, width, height);
                resolve(canvas.toDataURL('image/jpeg', 0.82));
            };
            img.onerror = reject;
            img.src = reader.result;
        };
        reader.onerror = reject;
        reader.readAsDataURL(file);
    });
}

function initLanyardDrag() {
    const wrapper = document.querySelector('.lanyard-wrapper');
    const card = document.querySelector('.lanyard-card');
    if (!wrapper || !card) return;

    let active = false;
    const move = event => {
        const rect = wrapper.getBoundingClientRect();
        const x = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
        const y = ((event.clientY - rect.top) / rect.height - 0.5) * 2;
        wrapper.style.setProperty('--tilt-x', `${(-y * 10).toFixed(2)}deg`);
        wrapper.style.setProperty('--tilt-y', `${(x * 14).toFixed(2)}deg`);
        wrapper.style.setProperty('--drag-x', `${(x * 24).toFixed(2)}px`);
        wrapper.style.setProperty('--drag-y', `${(y * 18).toFixed(2)}px`);
    };

    wrapper.addEventListener('pointermove', event => {
        move(event);
        if (active) card.classList.add('is-dragged');
    });
    wrapper.addEventListener('pointerdown', event => {
        active = true;
        card.setPointerCapture(event.pointerId);
        card.classList.add('is-dragged');
        move(event);
    });
    wrapper.addEventListener('pointerup', event => {
        active = false;
        card.releasePointerCapture?.(event.pointerId);
        card.classList.remove('is-dragged');
    });
    wrapper.addEventListener('pointerleave', () => {
        active = false;
        card.classList.remove('is-dragged');
        wrapper.style.setProperty('--tilt-x', '0deg');
        wrapper.style.setProperty('--tilt-y', '0deg');
        wrapper.style.setProperty('--drag-x', '0px');
        wrapper.style.setProperty('--drag-y', '0px');
    });
}

function table(headers, rows) {
    const visible = headers.map((header, index) => ({ header, index })).filter(item => item.header);
    return `
        <div class="table-responsive">
            <table class="table table-striped align-middle">
                <thead><tr>${visible.map(item => `<th>${text(item.header)}</th>`).join('')}</tr></thead>
                <tbody>
                    ${rows.length
                        ? rows.map(row => `<tr>${visible.map(item => `<td>${isHtml(row[item.index]) ? row[item.index] : text(row[item.index])}</td>`).join('')}</tr>`).join('')
                        : `<tr><td colspan="${visible.length}" class="text-center text-muted">Belum ada data.</td></tr>`}
                </tbody>
            </table>
        </div>
    `;
}

function isHtml(value) {
    return typeof value === 'string' && /<(button|span|select|div)/.test(value);
}

function cardGrid(items) {
    return `<div class="card-grid">${items.map(item => `
        <button class="mini-card mini-card-button" type="button" data-ekskul-detail="${item.id}">
            <strong>${text(item.nama)}</strong>
            <p>Pilihan ekskul</p>
        </button>
    `).join('')}</div>`;
}

function initEkskulChoiceCards() {
    document.querySelectorAll('.mini-card-button[data-ekskul-detail]').forEach(button => {
        button.addEventListener('click', () => openEkskulDetail(Number(button.dataset.ekskulDetail)));
    });
}

function selectField(name, label, options, colClass, required = true, selected = '') {
    return `
        <div class="${colClass}">
            ${selectOnly(name, label, options, required, selected)}
        </div>
    `;
}

function selectOnly(name, label, options, required = true, selected = '') {
    return `
        <label class="form-label">${text(label)}</label>
        <select name="${text(name)}" class="form-select" ${required ? 'required' : ''}>
            <option value="">Pilih ${text(label).toLowerCase()}</option>
            ${options.map(([value, labelText]) => `<option value="${text(value)}" ${String(selected) === String(value) ? 'selected' : ''}>${text(labelText)}</option>`).join('')}
        </select>
    `;
}

function statusSelect(siswaId, selected) {
    return `
        <select name="status-${siswaId}" class="form-select">
            ${['Hadir', 'Izin', 'Sakit', 'Alpa'].map(status => `<option value="${status}" ${selected === status ? 'selected' : ''}>${status}</option>`).join('')}
        </select>
    `;
}

function actionButtons(collection, id) {
    const canEdit = ['ekskul', 'siswa', 'guru', 'jadwal', 'pendaftaran', 'absensi', 'arsipAbsensi', 'pencapaian'].includes(collection);
    return `
        ${canEdit ? `<button type="button" class="btn btn-sm btn-warning me-1" onclick="editItem('${collection}', ${id})">Edit</button>` : ''}
        <button type="button" class="btn btn-sm btn-danger" onclick="removeItem('${collection}', ${id})">Hapus</button>
    `;
}

function openEditModal(title, body, onSubmit) {
    document.querySelector('[data-edit-modal]')?.remove();
    document.body.insertAdjacentHTML('beforeend', `
        <div class="edit-modal-backdrop" data-edit-modal>
            <section class="edit-modal">
                <div class="panel-title">
                    <h2>${text(title)}</h2>
                    <button class="btn btn-sm btn-outline-primary" type="button" data-close-edit>Tutup</button>
                </div>
                <form id="editModalForm" class="row g-3">
                    <div class="col-12 modal-inline-message" id="editModalMessage" hidden></div>
                    ${body}
                    <div class="col-12 edit-modal-actions">
                        <button class="btn btn-outline-primary" type="button" data-close-edit>Batal</button>
                        <button class="btn btn-primary" type="submit">Simpan Perubahan</button>
                    </div>
                </form>
            </section>
        </div>
    `);
    const modal = document.querySelector('[data-edit-modal]');
    const close = () => modal.remove();
    modal.addEventListener('click', event => {
        if (event.target.matches('[data-edit-modal], [data-close-edit]')) close();
    });
    document.getElementById('editModalForm').addEventListener('submit', event => {
        event.preventDefault();
        const result = onSubmit(new FormData(event.target));
        if (result === false) return;
        close();
        saveState();
        renderPage();
    });
}

function setEditModalMessage(message) {
    const target = document.getElementById('editModalMessage');
    if (!target) return;
    target.textContent = message;
    target.hidden = false;
}

function openActionModal(title, message, confirmText, onConfirm) {
    document.querySelector('[data-action-modal]')?.remove();
    document.body.insertAdjacentHTML('beforeend', `
        <div class="edit-modal-backdrop" data-action-modal>
            <section class="edit-modal action-modal">
                <div class="panel-title"><h2>${text(title)}</h2></div>
                <p class="action-modal-copy">${text(message)}</p>
                <div class="edit-modal-actions">
                    <button class="btn btn-outline-primary" type="button" data-cancel-action>Batal</button>
                    <button class="btn btn-danger" type="button" data-confirm-action>${text(confirmText)}</button>
                </div>
            </section>
        </div>
    `);
    const modal = document.querySelector('[data-action-modal]');
    const close = () => modal.remove();
    modal.addEventListener('click', event => {
        if (event.target.matches('[data-action-modal], [data-cancel-action]')) close();
        if (event.target.matches('[data-confirm-action]')) {
            onConfirm();
            close();
        }
    });
}

function showAppMessage(title, message) {
    openActionModal(title, message, 'Tutup', () => {});
    document.querySelector('[data-action-modal] [data-cancel-action]')?.remove();
    document.querySelector('[data-action-modal] [data-confirm-action]')?.classList.replace('btn-danger', 'btn-primary');
}

function editSiswaModal(id) {
    const item = byId(state.siswa, id);
    if (!item) return;
    openEditModal('Edit Data Siswa', `
        <div class="col-md-6"><label class="form-label">Nama Siswa</label><input name="nama" class="form-control" value="${text(item.nama)}" required></div>
        <div class="col-md-3"><label class="form-label">Kelas</label><input name="kelas" class="form-control" value="${text(item.kelas)}" required></div>
        <div class="col-md-3"><label class="form-label">NIS</label><input name="nis" class="form-control" value="${text(item.nis)}" required></div>
        <div class="col-md-4">${selectOnly('jenisKelamin', 'Jenis Kelamin', [['L', 'Laki-laki'], ['P', 'Perempuan'], ['-', 'Belum diisi']], true, item.jenisKelamin)}</div>
        <div class="col-md-8"><label class="form-label">Alamat</label><input name="alamat" class="form-control" value="${text(item.alamat || '')}"></div>
    `, form => {
        item.nama = String(form.get('nama') || '').trim() || item.nama;
        item.kelas = String(form.get('kelas') || '').trim() || item.kelas;
        item.nis = String(form.get('nis') || '').trim() || item.nis;
        item.jenisKelamin = String(form.get('jenisKelamin') || '').trim() || item.jenisKelamin;
        item.alamat = String(form.get('alamat') || '').trim();
    });
}

function editGuruModal(id) {
    const user = byId(state.users, id);
    if (!user || user.role !== 'pembina') return;
    openEditModal('Edit Data Guru', `
        <div class="col-md-4"><label class="form-label">Nama Guru</label><input name="nama" class="form-control" value="${text(user.nama)}" required></div>
        <div class="col-md-4"><label class="form-label">Email Sekolah</label><input type="email" name="email" class="form-control" value="${text(user.email)}" required></div>
        <div class="col-md-4"><label class="form-label">Password</label><input name="password" class="form-control" value="${text(user.password || '')}" required></div>
        <div class="col-12">${teacherEkskulChecks('ekskulDiampuIds', user.ekskulDiampuIds || [])}</div>
    `, form => {
        const email = String(form.get('email') || '').trim().toLowerCase();
        if (!isSchoolEmail(email)) {
            setEditModalMessage('Guru wajib menggunakan email sekolah.id.');
            return false;
        } else if (state.users.some(item => item.id !== user.id && String(item.email).toLowerCase() === email)) {
            setEditModalMessage('Email guru sudah digunakan.');
            return false;
        } else {
            user.email = email;
        }
        user.nama = String(form.get('nama') || '').trim() || user.nama;
        user.password = String(form.get('password') || '').trim() || user.password;
        user.ekskulDiampuIds = selectedEkskulIds(form);
        user.ekskulDiampu = ekskulNamesFromIds(user.ekskulDiampuIds) || 'Belum diatur';
        if (state.currentUser?.id === user.id) {
            state.currentUser.nama = user.nama;
            state.currentUser.email = user.email;
            state.currentUser.ekskulDiampuIds = user.ekskulDiampuIds;
            state.currentUser.ekskulDiampu = user.ekskulDiampu;
        }
    });
}

function editPendaftaranModal(id) {
    const item = byId(state.pendaftaran, id);
    const siswa = byId(state.siswa, item?.siswaId);
    if (!item || !siswa) return;
    openEditModal('Edit Data Anggota', `
        <div class="col-md-6"><label class="form-label">Nama Siswa</label><input name="nama" class="form-control" value="${text(siswa.nama || '')}" required></div>
        <div class="col-md-3"><label class="form-label">Kelas</label><input name="kelas" class="form-control" value="${text(siswa.kelas || '')}" required></div>
        <div class="col-md-3"><label class="form-label">NIS</label><input name="nis" class="form-control" value="${text(siswa.nis || '')}"></div>
        <div class="col-md-4">${selectOnly('jenisKelamin', 'Jenis Kelamin', [['L', 'Laki-laki'], ['P', 'Perempuan'], ['-', 'Belum diisi']], false, siswa.jenisKelamin || '')}</div>
        <div class="col-md-8"><label class="form-label">Alamat</label><input name="alamat" class="form-control" value="${text(siswa.alamat || '')}"></div>
        <div class="col-md-6">${selectOnly('ekskulId', 'Ekskul', visibleEkskul().map(data => [data.id, data.nama]), true, item.ekskulId)}</div>
        <div class="col-md-6"><label class="form-label">Tanggal Daftar</label><input type="date" name="tanggal" class="form-control" value="${text(item.tanggal || today())}" required></div>
    `, form => {
        const ekskulId = Number(form.get('ekskulId'));
        if (!canAccessEkskul(ekskulId)) {
            setEditModalMessage('Ekskul tidak sesuai akses akun ini.');
            return false;
        }
        siswa.nama = String(form.get('nama') || '').trim() || siswa.nama;
        siswa.kelas = String(form.get('kelas') || '').trim() || siswa.kelas;
        siswa.nis = String(form.get('nis') || '').trim() || siswa.nis;
        siswa.jenisKelamin = String(form.get('jenisKelamin') || '').trim() || siswa.jenisKelamin;
        siswa.alamat = String(form.get('alamat') || '').trim();
        item.ekskulId = ekskulId || item.ekskulId;
        item.tanggal = String(form.get('tanggal') || '').trim() || item.tanggal;
    });
}

function editAbsensiModal(id) {
    const item = byId(state.absensi, id);
    const siswa = byId(state.siswa, item?.siswaId);
    if (!item || !siswa) return;
    openEditModal('Edit Data Absensi Siswa', `
        <div class="col-md-6"><label class="form-label">Nama Siswa</label><input name="nama" class="form-control" value="${text(siswa.nama || '')}" required></div>
        <div class="col-md-3"><label class="form-label">Kelas</label><input name="kelas" class="form-control" value="${text(siswa.kelas || '')}" required></div>
        <div class="col-md-3"><label class="form-label">NIS</label><input name="nis" class="form-control" value="${text(siswa.nis || '')}"></div>
        <div class="col-md-6">${selectOnly('ekskulId', 'Ekskul', visibleEkskul().map(data => [data.id, data.nama]), true, item.ekskulId)}</div>
        <div class="col-md-3"><label class="form-label">Tanggal</label><input type="date" name="tanggal" class="form-control" value="${text(item.tanggal || today())}" required></div>
        <div class="col-md-3">${selectOnly('status', 'Keterangan', [['Hadir', 'Hadir'], ['Izin', 'Izin'], ['Sakit', 'Sakit'], ['Alpa', 'Alpa']], true, item.keterangan || item.status)}</div>
    `, form => {
        const ekskulId = Number(form.get('ekskulId'));
        if (!canAccessEkskul(ekskulId)) {
            setEditModalMessage('Ekskul tidak sesuai akses akun ini.');
            return false;
        }
        siswa.nama = String(form.get('nama') || '').trim() || siswa.nama;
        siswa.kelas = String(form.get('kelas') || '').trim() || siswa.kelas;
        siswa.nis = String(form.get('nis') || '').trim() || siswa.nis;
        item.ekskulId = ekskulId || item.ekskulId;
        item.tanggal = String(form.get('tanggal') || '').trim() || item.tanggal;
        const status = String(form.get('status') || '').trim();
        if (['Hadir', 'Izin', 'Sakit', 'Alpa'].includes(status)) {
            item.status = status;
            item.keterangan = status;
        }
    });
}

function editEkskulModal(id) {
    const item = byId(state.ekskul, id);
    if (!item) return;
    openEditModal('Edit Data Ekskul', `
        <div class="col-md-5"><label class="form-label">Nama Ekskul</label><input name="nama" class="form-control" value="${text(item.nama)}" required></div>
        <div class="col-md-7"><label class="form-label">Deskripsi</label><input name="deskripsi" class="form-control" value="${text(item.deskripsi || '')}" required></div>
    `, form => {
        item.nama = String(form.get('nama') || '').trim() || item.nama;
        item.deskripsi = String(form.get('deskripsi') || '').trim() || item.deskripsi;
    });
}

function editJadwalModal(id) {
    const item = byId(state.jadwal, id);
    if (!item) return;
    openEditModal('Edit Data Jadwal', `
        <div class="col-md-4">${selectOnly('ekskulId', 'Ekskul', visibleEkskul().map(data => [data.id, data.nama]), true, item.ekskulId)}</div>
        <div class="col-md-3"><label class="form-label">Tanggal Jadwal</label><input type="date" name="tanggal" class="form-control" value="${text(scheduleDate(item))}" required></div>
        <div class="col-md-3">${selectOnly('hari', 'Hari', ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu', 'Minggu'].map(day => [day, day]), true, item.hari)}</div>
        <div class="col-md-2"><label class="form-label">Jam</label><input type="time" name="jam" class="form-control" value="${text(item.jam || '')}" required></div>
        <div class="col-12"><label class="form-label">Tempat</label><input name="tempat" class="form-control" value="${text(item.tempat || '')}" required></div>
    `, form => {
        const ekskulId = Number(form.get('ekskulId'));
        if (!canAccessEkskul(ekskulId)) {
            setEditModalMessage('Ekskul tidak sesuai akses akun ini.');
            return false;
        }
        item.ekskulId = ekskulId || item.ekskulId;
        item.tanggal = String(form.get('tanggal') || '').trim() || item.tanggal;
        item.hari = String(form.get('hari') || '').trim() || item.hari;
        item.jam = String(form.get('jam') || '').trim() || item.jam;
        item.tempat = String(form.get('tempat') || '').trim() || item.tempat;
    });
}

function editArsipAbsensiModal(id) {
    const item = byId(state.arsipAbsensi, id);
    if (!item) return;
    openEditModal('Edit Arsip Absensi', `
        <div class="col-md-4">${selectOnly('ekskulId', 'Ekskul', visibleEkskul().map(data => [data.id, data.nama]), true, item.ekskulId)}</div>
        <div class="col-md-4"><label class="form-label">Tanggal Arsip</label><input type="date" name="tanggal" class="form-control" value="${text(item.tanggal || today())}" required></div>
        <div class="col-md-4"><label class="form-label">Nama Penyimpan</label><input name="pembinaNama" class="form-control" value="${text(item.pembinaNama || '')}" required></div>
        <div class="col-12 form-section-label">Status Siswa</div>
        ${(item.rows || []).map((row, index) => `
            <div class="col-md-8"><label class="form-label">${text(row.nama)} - ${text(row.kelas)}</label></div>
            <div class="col-md-4">${selectOnly(`status-${index}`, 'Status', [['Hadir', 'Hadir'], ['Izin', 'Izin'], ['Sakit', 'Sakit'], ['Alpa', 'Alpa']], true, row.status)}</div>
        `).join('')}
    `, form => {
        const ekskulId = Number(form.get('ekskulId'));
        if (!canAccessEkskul(ekskulId)) {
            setEditModalMessage('Ekskul tidak sesuai akses akun ini.');
            return false;
        }
        item.ekskulId = ekskulId || item.ekskulId;
        item.tanggal = String(form.get('tanggal') || '').trim() || item.tanggal;
        item.pembinaNama = String(form.get('pembinaNama') || '').trim() || item.pembinaNama;
        item.rows = (item.rows || []).map((row, index) => ({
            ...row,
            status: String(form.get(`status-${index}`) || '').trim() || row.status
        }));
        item.dibuatPada = new Date().toISOString();
    });
}

function editPencapaianModal(id) {
    const siswa = byId(state.siswa, id);
    if (!siswa) return;
    openEditModal('Edit Pencapaian Siswa', `
        <div class="col-md-4"><label class="form-label">Nama Siswa</label><input name="nama" class="form-control" value="${text(siswa.nama || '')}" required></div>
        <div class="col-md-3"><label class="form-label">Kelas</label><input name="kelas" class="form-control" value="${text(siswa.kelas || '')}" required></div>
        <div class="col-md-5">${selectOnly('ekskulId', 'Ekskul', state.ekskul.map(item => [item.id, item.nama]), true, siswa.pencapaianEkskul || '')}</div>
        <div class="col-12"><label class="form-label">Pencapaian yang Diraih</label><input name="pencapaian" class="form-control" value="${text(siswa.pencapaian || '')}" required></div>
    `, form => {
        siswa.nama = String(form.get('nama') || '').trim() || siswa.nama;
        siswa.kelas = String(form.get('kelas') || '').trim() || siswa.kelas;
        siswa.pencapaianEkskul = Number(form.get('ekskulId')) || siswa.pencapaianEkskul;
        siswa.pencapaian = String(form.get('pencapaian') || '').trim() || siswa.pencapaian;
    });
}

function editItem(collection, id) {
    if (!canModifyCollectionItem(collection, id)) {
        showAppMessage('Akses Ditolak', 'Pembina hanya bisa mengubah data pada ekskul yang diampu.');
        return;
    }

    if (collection === 'ekskul') {
        editEkskulModal(id);
        return;
    }

    if (collection === 'siswa') {
        editSiswaModal(id);
        return;
    }

    if (collection === 'guru') {
        editGuruModal(id);
        return;
    }

    if (collection === 'pendaftaran') {
        editPendaftaranModal(id);
        return;
    }

    if (collection === 'absensi') {
        editAbsensiModal(id);
        return;
    }

    if (collection === 'jadwal') {
        editJadwalModal(id);
        return;
    }

    if (collection === 'arsipAbsensi') {
        editArsipAbsensiModal(id);
        return;
    }

    if (collection === 'pencapaian') {
        editPencapaianModal(id);
        return;
    }
}

function removeItem(collection, id) {
    if (!canModifyCollectionItem(collection, id)) {
        showAppMessage('Akses Ditolak', 'Pembina hanya bisa menghapus data pada ekskul yang diampu.');
        return;
    }

    openActionModal('Hapus Data', 'Data ini akan dihapus dari sistem. Lanjutkan?', 'Hapus', () => deleteItem(collection, id));
}

function deleteItem(collection, id) {
    if (collection === 'guru') {
        state.users = state.users.filter(user => !(user.id === id && user.role === 'pembina'));
        saveState();
        renderPage();
        return;
    }

    if (collection === 'pencapaian') {
        const siswa = byId(state.siswa, id);
        if (siswa) {
            siswa.pencapaian = '';
            siswa.pencapaianEkskul = null;
        }
        saveState();
        renderPage();
        return;
    }

    const keyMap = { ekskul: 'ekskul', siswa: 'siswa', pendaftaran: 'pendaftaran', jadwal: 'jadwal', absensi: 'absensi', arsipAbsensi: 'arsipAbsensi' };
    const key = keyMap[collection];
    state[key] = state[key].filter(item => item.id !== id);

    if (collection === 'siswa') {
        state.pendaftaran = state.pendaftaran.filter(item => item.siswaId !== id);
        state.absensi = state.absensi.filter(item => item.siswaId !== id);
    }

    if (collection === 'ekskul') {
        state.pendaftaran = state.pendaftaran.filter(item => item.ekskulId !== id);
        state.jadwal = state.jadwal.filter(item => item.ekskulId !== id);
        state.absensi = state.absensi.filter(item => item.ekskulId !== id);
    }

    saveState();
    renderPage();
}

function canModifyCollectionItem(collection, id) {
    if (currentRole() !== 'pembina') return true;
    if (collection === 'siswa') return true;

    const keyMap = { ekskul: 'ekskul', pendaftaran: 'pendaftaran', jadwal: 'jadwal', absensi: 'absensi', arsipAbsensi: 'arsipAbsensi' };
    const item = byId(state[keyMap[collection]] || [], id);
    if (!item) return false;
    const ekskulId = collection === 'ekskul' ? item.id : item.ekskulId;
    return canAccessEkskul(ekskulId);
}

function ekskulName(id) {
    return byId(state.ekskul, id)?.nama || '-';
}

function pembinaForEkskul(ekskulId) {
    return state.users.find(user => user.role === 'pembina' && Array.isArray(user.ekskulDiampuIds) && user.ekskulDiampuIds.map(Number).includes(Number(ekskulId)));
}

function pembinaNameForEkskul(ekskulId) {
    return pembinaForEkskul(ekskulId)?.nama || 'Belum diampu';
}

function ensureEkskulHasPembina(ekskulId) {
    if (pembinaForEkskul(ekskulId)) return;
    const pembina = state.users
        .filter(user => user.role === 'pembina')
        .sort((a, b) => (a.ekskulDiampuIds || []).length - (b.ekskulDiampuIds || []).length)[0];
    if (!pembina) return;

    pembina.ekskulDiampuIds = Array.from(new Set([...(pembina.ekskulDiampuIds || []), Number(ekskulId)]));
    pembina.ekskulDiampu = state.ekskul
        .filter(item => pembina.ekskulDiampuIds.includes(Number(item.id)))
        .map(item => item.nama)
        .join(', ');
}

function assignEkskulToCurrentPembina(ekskulId) {
    const user = byId(state.users, state.currentUser?.id);
    if (!user || user.role !== 'pembina') return;
    user.ekskulDiampuIds = Array.from(new Set([...(user.ekskulDiampuIds || []), Number(ekskulId)]));
    user.ekskulDiampu = state.ekskul.filter(item => user.ekskulDiampuIds.includes(Number(item.id))).map(item => item.nama).join(', ');
    state.currentUser.ekskulDiampuIds = user.ekskulDiampuIds;
    state.currentUser.ekskulDiampu = user.ekskulDiampu;
}

function scheduleDate(item) {
    return item.tanggal || today();
}

function ensureEkskulHasSchedule(ekskulId) {
    const id = Number(ekskulId);
    if (state.jadwal.some(item => Number(item.ekskulId) === id)) return;

    const ekskul = byId(state.ekskul, id);
    state.jadwal.push({
        id: nextId(state.jadwal),
        ekskulId: id,
        tanggal: today(),
        hari: dayNameFromDate(today()),
        jam: '15:00',
        tempat: `Ruang Kegiatan ${ekskul?.nama || 'Ekskul'}`
    });
}

function dayNameFromDate(dateValue) {
    const names = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
    const date = new Date(`${dateValue}T00:00:00`);
    return names[date.getDay()] || '-';
}

function resetDemoData() {
    openActionModal('Reset Data Demo', 'Semua data demo akan dikembalikan ke kondisi awal. Lanjutkan?', 'Reset', () => {
        state = structuredClone(defaultData);
        saveState();
        renderLogin();
    });
}

window.editItem = editItem;
window.removeItem = removeItem;
window.resetDemoData = resetDemoData;
init();
