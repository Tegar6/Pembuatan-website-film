/* ==========================================
   STREAMVIBE — APPLICATION SCRIPT (script.js)
   Desktop & Mobile (iPhone 18 Pro Max) SPA Logic
   ========================================== */

// Urutan warna kartu persis referensi gambar desain
const cardColorClasses = [
  'thumb-red-bright',
  'thumb-grey-mid',
  'thumb-red-deep',
  'thumb-grey-dark',
  'thumb-red-crimson'
];

// Data "Lanjutkan Menonton" (Desktop 1 & Mobile Beranda)
const continueWatchingData = [
  {
    id: 'arcane-echoes',
    title: 'Arcane Echoes',
    subtitle: 'Eps 4 • 18m tersisa',
    colorClass: 'thumb-red-deep',
    genre: 'Fantasy',
    year: '2026',
    duration: '8 Eps',
    rating: '8.9',
    match: '96% Cocok',
    synopsis: 'Pertarungan klan sihir kuno di dunia steampunk yang berada di ambang kehancuran akibat artefak terlarang.'
  },
  {
    id: 'silent-orbit',
    title: 'Silent Orbit',
    subtitle: 'Eps 2 • 35m tersisa',
    colorClass: 'thumb-grey-mid',
    genre: 'Thriller',
    year: '2025',
    duration: '1j 52m',
    rating: '8.7',
    match: '95% Cocok',
    synopsis: 'Seorang teknisi stasiun luar angkasa terjebak sendirian ketika sinyal komunikasi dengan Bumi terputus secara misterius.'
  },
  {
    id: 'jakarta-2099',
    title: 'Jakarta 2099',
    subtitle: 'Eps 7 • 9m tersisa',
    colorClass: 'thumb-red-bright',
    genre: 'Cyberpunk',
    year: '2026',
    duration: '2j 08m',
    rating: '9.1',
    match: '94% Cocok',
    synopsis: 'Detektif siber menelusuri konspirasi sindikat AI bawah tanah di tengah gemerlap neon megapolitan Jakarta tahun 2099.'
  }
];

// Data "Dipilih Khusus Untukmu" di Beranda - Semua
const chosenForYouHome = [
  { id: 'neon-horizon', match: '98% Cocok', colorClass: 'thumb-red-bright' },
  { id: 'shadow-protocol', match: '95% Cocok', colorClass: 'thumb-grey-mid' },
  { id: 'jakarta-2099', match: '92% Cocok', colorClass: 'thumb-red-deep' },
  { id: 'solaris-drift', match: '89% Cocok', colorClass: 'thumb-grey-dark' }
];

// Katalog Film per Genre (Horror, Komedi, Action, Drama)
const genreCatalog = {
  Horror: [
    { id: 'heretic-2024', title: 'Kijsada Paradise (2026)', match: '98% Cocok', rating: '4.3', duration: '1j 54m', year: '2024', genre: 'Horror', image: 'images/horror1.jpg' },
    { id: 'longlegs-2024', title: 'Other Mommy (2026)', match: '95% Cocok', rating: '5.8', duration: '1j 48m', year: '2024', genre: 'Horror', image: 'images/horror2.png' },
    { id: 'backrooms-2026', title: 'New Group (2026)', match: '93% Cocok', rating: '6.5', duration: '2j 02m', year: '2026', genre: 'Horror', image: 'images/horror3.jpg' },
    { id: 'the-monkey-2025', title: 'Beware Boiúna (2026)', match: '91% Cocok', rating: '6.2', duration: '1j 41m', year: '2025', genre: 'Horror', image: 'images/horror4.jpg' },
    { id: 'talk-to-me-2024', title: 'Resident Evil (2026)', match: '90% Cocok', rating: '7.3', duration: '1j 50m', year: '2024', genre: 'Horror', image: 'images/horror5.jpg' },
    { id: 'ugly-stepsister-2025', title: 'The Cursed: Insatiable Desires', match: '89% Cocok', rating: '5.6', duration: '1j 38m', year: '2025', genre: 'Horror' },
    { id: 'companion-2025', title: 'The Red Shoes (2005)', match: '87% Cocok', rating: '6.0', duration: '1j 56m', year: '2025', genre: 'Horror' },
    { id: '28-years-later-2025', title: 'The Omen (1976)', match: '86% Cocok', rating: '7.4', duration: '1j 44m', year: '2025', genre: 'Horror' },
    { id: 'weapons-2025', title: 'Siccîn 9 (2026)', match: '84% Cocok', rating: '2.0', duration: '1j 35m', year: '2025', genre: 'Horror' },
    { id: 'sinners-2025', title: 'The Chosen: Forbidden Cave', match: '90% Cocok', rating: '5.9', duration: '1j 50m', year: '2025', genre: 'Horror' }
  ],
  Komedi: [
    { id: 'shaun-of-the-dead', title: 'Shaun of the Dead (2004)', match: '97% Cocok', rating: '9.1', duration: '1j 45m', year: '2004', genre: 'Komedi' },
    { id: 'the-hangover', title: 'The Hangover (2009)', match: '95% Cocok', rating: '8.8', duration: '1j 52m', year: '2009', genre: 'Komedi' },
    { id: 'a-real-pain', title: 'A Real Pain (2024/2025)', match: '92% Cocok', rating: '8.7', duration: '1j 39m', year: '2025', genre: 'Komedi' },
    { id: 'freakier-friday', title: 'Freakier Friday (2025)', match: '90% Cocok', rating: '8.6', duration: '1j 48m', year: '2025', genre: 'Komedi' },
    { id: 'the-bad-guys-2', title: 'The Bad Guys 2 (2025)', match: '89% Cocok', rating: '8.4', duration: '1j 34m', year: '2025', genre: 'Komedi' },
    { id: 'superbad-2007', title: 'Superbad (2007)', match: '88% Cocok', rating: '8.3', duration: '1j 40m', year: '2007', genre: 'Komedi' },
    { id: 'groundhog-day', title: 'Groundhog Day (1993)', match: '86% Cocok', rating: '8.2', duration: '1j 37m', year: '1993', genre: 'Komedi' },
    { id: 'the-truman-show', title: 'The Truman Show (1998)', match: '85% Cocok', rating: '8.0', duration: '1j 50m', year: '1998', genre: 'Komedi' },
    { id: 'airplane-1980', title: 'Airplane! (1980)', match: '83% Cocok', rating: '7.9', duration: '1j 42m', year: '1980', genre: 'Komedi' },
    { id: 'zootopia-2', title: 'Zootopia 2 (Akhir 2025)', match: '89% Cocok', rating: '8.4', duration: '1j 34m', year: '2025', genre: 'Komedi' }
  ],
  Action: [
    { id: 'neon-horizon', title: 'Neon Horizon', match: '99% Cocok', rating: '9.4', duration: '2j 14m', year: '2026', genre: 'Sci-Fi, Cyberpunk' },
    { id: 'shadow-protocol', title: 'Shadow Protocol', match: '96% Cocok', rating: '9.0', duration: '1j 58m', year: '2026', genre: 'Action' },
    { id: 'jakarta-2099', title: 'Jakarta 2099', match: '94% Cocok', rating: '9.1', duration: '2j 08m', year: '2026', genre: 'Cyberpunk' },
    { id: 'target-utama', title: 'Target Utama', match: '92% Cocok', rating: '8.8', duration: '1j 55m', year: '2025', genre: 'Action' },
    { id: 'operasi-senyap-1', title: 'Operasi Senyap', match: '90% Cocok', rating: '8.7', duration: '2j 04m', year: '2025', genre: 'Action' },
    { id: 'peluru-merah', title: 'Peluru Merah', match: '88% Cocok', rating: '8.5', duration: '1j 49m', year: '2025', genre: 'Action' },
    { id: 'batas-waktu', title: 'Batas Waktu', match: '87% Cocok', rating: '8.4', duration: '1j 52m', year: '2025', genre: 'Action' },
    { id: 'aksi-malam', title: 'Aksi Malam', match: '85% Cocok', rating: '8.2', duration: '1j 46m', year: '2024', genre: 'Action' },
    { id: 'kode-hitam', title: 'Kode Hitam', match: '84% Cocok', rating: '8.1', duration: '2j 01m', year: '2024', genre: 'Action' },
    { id: 'operasi-senyap-2', title: 'Operasi Senyap', match: '90% Cocok', rating: '8.7', duration: '2j 04m', year: '2025', genre: 'Action' }
  ],
  Drama: [
    { id: 'forrest-gump', title: 'Forrest Gump (1994)', match: '99% Cocok', rating: '9.4', duration: '2j 14m', year: '1994', genre: 'Drama' },
    { id: 'schindlers-list', title: "Schindler's List (1993)", match: '96% Cocok', rating: '9.0', duration: '1j 58m', year: '1993', genre: 'Drama' },
    { id: 'interstellar-2014', title: 'Interstellar (2014)', match: '94% Cocok', rating: '9.1', duration: '2j 08m', year: '2014', genre: 'Drama, Sci-Fi' },
    { id: 'good-will-hunting', title: 'Good Will Hunting (1997)', match: '92% Cocok', rating: '8.8', duration: '1j 55m', year: '1997', genre: 'Drama' },
    { id: 'dead-poets-society', title: 'Dead Poets Society (1989)', match: '90% Cocok', rating: '8.7', duration: '2j 04m', year: '1989', genre: 'Drama' },
    { id: 'a-beautiful-mind', title: 'A Beautiful Mind (2001)', match: '88% Cocok', rating: '8.5', duration: '1j 49m', year: '2001', genre: 'Drama' },
    { id: 'the-green-mile', title: 'The Green Mile (1999)', match: '87% Cocok', rating: '8.4', duration: '1j 52m', year: '1999', genre: 'Drama' },
    { id: 'little-women-2019', title: 'Little Women (2019)', match: '85% Cocok', rating: '8.2', duration: '1j 46m', year: '2019', genre: 'Drama' },
    { id: 'kode-hitam-drama', title: 'Kode Hitam', match: '84% Cocok', rating: '8.1', duration: '2j 01m', year: '2024', genre: 'Drama' },
    { id: 'operasi-senyap-drama', title: 'Operasi Senyap', match: '90% Cocok', rating: '8.7', duration: '2j 04m', year: '2025', genre: 'Drama' }
  ]
};

// Data "Populer Minggu Ini" di Halaman Explore (Desktop 4 & Mobile Explore)
const popularWeeklyData = [
  {
    id: 'neon-horizon',
    rank: '#1',
    title: 'NEON HORIZON',
    meta: 'Sci-Fi • 2j 14m • ★ 9.4',
    genre: 'Sci-Fi, Cyberpunk',
    duration: '2j 14m',
    rating: '9.4',
    year: '2026',
    colorClass: 'thumb-popular-maroon',
    synopsis: 'Di kota metropolitan neo-Jakarta tahun 2099, seorang kurir data menemukan chip memori terlarang yang mengancam kekuasaan korporasi raksasa dan memaksanya bertahan hidup.'
  },
  {
    id: 'shadow-protocol',
    rank: '#2',
    title: 'SHADOW PROTOCOL',
    meta: 'Action • 1j 58m • ★ 8.9',
    genre: 'Action, Espionage',
    duration: '1j 58m',
    rating: '8.9',
    year: '2026',
    colorClass: 'thumb-popular-maroon',
    synopsis: 'Agen rahasia elit harus membongkar operasi bayangan internasional sebelum sistem pertahanan satelit global diambil alih.'
  },
  {
    id: 'solaris-drift',
    rank: '#3',
    title: 'SOLARIS DRIFT',
    meta: 'Thriller • 2j 05m • ★ 8.7',
    genre: 'Thriller, Sci-Fi',
    duration: '2j 05m',
    rating: '8.7',
    year: '2025',
    colorClass: 'thumb-popular-maroon',
    synopsis: 'Ekspedisi menuju orbit matahari berubah menjadi perlombaan bertahan hidup ketika badai magnetik melumpuhkan kapal induk.'
  }
];

// Daftar Simpan Awal (Desktop 6 & Mobile Simpan)
let savedMoviesList = [
  {
    id: 'neon-horizon',
    title: 'NEON HORIZON',
    meta: 'Sci-Fi • 2j 14m • ★ 9.4',
    status: 'Tersimpan',
    colorClass: 'thumb-red-bright',
    year: '2026',
    genre: 'Sci-Fi, Cyberpunk',
    duration: '2j 14m',
    rating: '9.4'
  },
  {
    id: 'jakarta-2099',
    title: 'JAKARTA 2099',
    meta: 'Cyberpunk • 7 Eps • ★ 9.1',
    status: 'Offline 1.8 GB',
    colorClass: 'thumb-red-deep',
    year: '2026',
    genre: 'Cyberpunk',
    duration: '2j 08m',
    rating: '9.1'
  },
  {
    id: 'arcane-echoes',
    title: 'ARCANE ECHOES',
    meta: 'Fantasy • 8 Eps • ★ 8.9',
    status: 'Tersimpan',
    colorClass: 'thumb-grey-mid',
    year: '2026',
    genre: 'Fantasy',
    duration: '8 Eps',
    rating: '8.9'
  },
  {
    id: 'silent-orbit',
    title: 'SILENT ORBIT',
    meta: 'Thriller • 1j 52m • ★ 8.7',
    status: 'Offline 1.4 GB',
    colorClass: 'thumb-grey-dark',
    year: '2025',
    genre: 'Thriller',
    duration: '1j 52m',
    rating: '8.7'
  }
];

// State Aplikasi
let currentView = 'beranda';
let previousView = 'beranda';
let currentGenreTab = 'Semua';
let currentWatchMovieId = 'neon-horizon';
let isVideoPlaying = false;

// ==========================================
// HELPER PENCARIAN FILM BERDASARKAN ID
// ==========================================
function findMovieById(movieId) {
  if (movieId === 'neon-horizon') {
    return {
      id: 'neon-horizon',
      title: 'NEON HORIZON',
      year: '2026',
      genre: 'Sci-Fi, Cyberpunk',
      duration: '2j 14m',
      rating: '9.4',
      badge: '4K HDR',
      colorClass: 'thumb-red-bright',
      synopsis: 'Di kota metropolitan neo-Jakarta tahun 2099, seorang kurir data menemukan chip memori terlarang yang mengancam kekuasaan korporasi raksasa dan memaksanya bertahan hidup.'
    };
  }

  for (const item of popularWeeklyData) {
    if (item.id === movieId) {
      return {
        id: item.id,
        title: item.title,
        year: item.year || '2026',
        genre: item.genre,
        duration: item.duration,
        rating: item.rating,
        badge: '4K HDR',
        colorClass: item.colorClass,
        synopsis: item.synopsis
      };
    }
  }

  for (const item of continueWatchingData) {
    if (item.id === movieId) {
      return {
        id: item.id,
        title: item.title.toUpperCase(),
        year: item.year || '2026',
        genre: item.genre,
        duration: item.duration,
        rating: item.rating,
        badge: item.match || '4K HDR',
        colorClass: item.colorClass,
        synopsis: item.synopsis
      };
    }
  }

  for (const genreKey of Object.keys(genreCatalog)) {
    const found = genreCatalog[genreKey].find(m => m.id === movieId);
    if (found) {
      return {
        id: found.id,
        title: found.title.replace(/\s*\(.*?\)\s*/g, '').toUpperCase(),
        year: found.year || '2025',
        genre: found.genre,
        duration: found.duration,
        rating: found.rating,
        badge: found.match || '4K HDR',
        colorClass: 'thumb-red-bright',
        synopsis: `Kisah menegangkan dalam ${found.title} yang menghadirkan atmosfer mendalam, konflik tak terduga, dan sinematografi memukau sepanjang ${found.duration}.`
      };
    }
  }

  const saved = savedMoviesList.find(m => m.id === movieId);
  if (saved) {
    return {
      id: saved.id,
      title: saved.title,
      year: saved.year || '2026',
      genre: saved.genre || 'Sci-Fi',
      duration: saved.duration || '2j 05m',
      rating: saved.rating || '9.0',
      badge: '4K HDR',
      colorClass: saved.colorClass,
      synopsis: 'Di kota metropolitan neo-Jakarta tahun 2099, seorang kurir data menemukan chip memori terlarang yang mengancam kekuasaan korporasi raksasa dan memaksanya bertahan hidup.'
    };
  }

  return {
    id: movieId,
    title: 'NEON HORIZON',
    year: '2026',
    genre: 'Sci-Fi, Cyberpunk',
    duration: '2j 14m',
    rating: '9.4',
    badge: '4K HDR',
    colorClass: 'thumb-red-bright',
    synopsis: 'Di kota metropolitan neo-Jakarta tahun 2099, seorang kurir data menemukan chip memori terlarang yang mengancam kekuasaan korporasi raksasa dan memaksanya bertahan hidup.'
  };
}

// ==========================================
// RENDER & UI STATE FUNCTIONS
// ==========================================

function updateNavbarActiveState() {
  const navIds = ['beranda', 'explore', 'simpan'];
  const activeNav = currentView === 'watch' ? 'beranda' : currentView;

  // 1. Desktop Top Navbar
  navIds.forEach(id => {
    const btn = document.getElementById(`nav-${id}`);
    if (!btn) return;
    if (id === activeNav) {
      btn.className = 'px-5 py-1.5 rounded-full text-xs font-semibold transition bg-[#330E11] text-[#FF4D52] border border-[#E50914]/25';
    } else {
      btn.className = 'px-5 py-1.5 rounded-full text-xs font-medium transition text-[#A3A3A3] hover:text-white';
    }
  });

  // 2. Mobile Floating Bottom Navbar (3 Menus: Beranda, Explore, Simpan — all active in #E50914)
  const mBeranda = document.getElementById('mnav-beranda');
  const mExplore = document.getElementById('mnav-explore');
  const mSimpan = document.getElementById('mnav-simpan');

  if (mBeranda) mBeranda.className = `mobile-nav-item ${activeNav === 'beranda' ? 'active-mobile-nav' : ''}`;
  if (mExplore) mExplore.className = `mobile-nav-item ${activeNav === 'explore' ? 'active-mobile-nav' : ''}`;
  if (mSimpan) mSimpan.className = `mobile-nav-item ${activeNav === 'simpan' ? 'active-mobile-nav' : ''}`;
}

function updateGenrePillsUI() {
  const pills = document.querySelectorAll('.genre-pill');
  pills.forEach(pill => {
    const g = pill.getAttribute('data-genre');
    if (g === currentGenreTab) {
      pill.className = 'genre-pill px-5 py-1.5 rounded-full text-xs font-bold transition bg-[#E50914] text-white shadow-md shadow-[#E50914]/20';
    } else {
      pill.className = 'genre-pill px-5 py-1.5 rounded-full text-xs font-medium transition bg-[#121212] text-[#A3A3A3] hover:text-white border border-white/10';
    }
  });
}

function triggerFadeUpAnimation(el) {
  if (!el) return;
  el.classList.remove('animate-fade-up');
  void el.offsetWidth;
  el.classList.add('animate-fade-up');
}

function renderHomeSemua() {
  // 1. Lanjutkan Menonton (Kotak bersih tanpa progress bar, dengan Staggered Entrance)
  const continueGrid = document.getElementById('continue-watching-grid');
  continueGrid.innerHTML = continueWatchingData.map((item, idx) => `
    <div onclick="openWatchDetail('${item.id}')" class="cursor-pointer group min-w-0 stagger-item stagger-${(idx % 10) + 1}">
      <div class="${item.colorClass} card-border rounded-[14px] h-[132px] w-full poster-card relative overflow-hidden continue-watching-thumb"></div>
      <h3 class="text-xs font-bold text-white mt-2.5 truncate group-hover:text-[#FF5A5F] transition">${item.title}</h3>
      <p class="text-[11px] text-[#8E8E8E] mt-0.5 truncate">${item.subtitle}</p>
    </div>
  `).join('');

  // 2. Dipilih Khusus Untukmu (4 Kartu di Desktop, 2x2 di Mobile, dengan Staggered Entrance)
  const chosenGrid = document.getElementById('chosen-for-you-grid');
  chosenGrid.innerHTML = chosenForYouHome.map((item, idx) => `
    <div onclick="openWatchDetail('${item.id}')" class="${item.colorClass} card-border rounded-[14px] h-[155px] p-3.5 cursor-pointer poster-card relative overflow-hidden flex items-start justify-start chosen-card-box stagger-item stagger-${(idx % 10) + 4}">
      <span class="bg-[#180C0D]/90 border border-white/10 text-[#FF7A7E] text-[10px] font-bold px-3 py-1 rounded-full">
        ${item.match}
      </span>
    </div>
  `).join('');

  updateHeroSaveButtonUI();
}

function renderGenreTabContent(genre) {
  const titleEl = document.getElementById('genre-section-title');
  const gridEl = document.getElementById('genre-movies-grid');
  titleEl.textContent = `Dipilih Khusus Untukmu - ${genre}`;

  const list = genreCatalog[genre] || [];
  gridEl.innerHTML = list.map((movie, idx) => {
    const colorClass = cardColorClasses[idx % 5];
    let displayTitleHtml = movie.title;
    if (movie.italicPart) {
      displayTitleHtml = `Talk to Me (2024 - <span class="italic font-normal">Peluncuran/Ekspansi Global)</span>`;
    }
    const posterImgHtml = movie.image
      ? `<img src="${movie.image}" alt="${movie.title}" class="poster-card-img" />`
      : '';
    return `
      <div onclick="openWatchDetail('${movie.id}')" class="cursor-pointer group min-w-0 stagger-item stagger-${(idx % 10) + 1}">
        <div class="${colorClass} card-border rounded-[14px] h-[230px] p-3.5 poster-card relative overflow-hidden flex items-start genre-poster-box">
          ${posterImgHtml}
          <span class="poster-match-badge bg-[#180C0D]/90 border border-white/10 text-[#FF7A7E] text-[10px] font-bold px-3 py-1 rounded-full">
            ${movie.match}
          </span>
        </div>
        <h3 class="text-xs font-bold text-white mt-2.5 truncate group-hover:text-[#FF5A5F] transition" title="${movie.title}">
          ${displayTitleHtml}
        </h3>
        <p class="text-[11px] text-[#8E8E8E] mt-0.5">
          ★ ${movie.rating} &nbsp;•&nbsp; ${movie.duration}
        </p>
      </div>
    `;
  }).join('');
}

function renderExploreList(query = '') {
  const listEl = document.getElementById('explore-popular-list');
  const headingEl = document.getElementById('explore-list-heading');
  const q = query.trim().toLowerCase();

  let items = popularWeeklyData;

  if (q.length > 0) {
    headingEl.textContent = `Hasil Pencarian untuk "${query.trim()}"`;
    const searchable = [...popularWeeklyData];
    Object.keys(genreCatalog).forEach(g => {
      genreCatalog[g].forEach((m, idx) => {
        if (!searchable.some(existing => existing.title.toLowerCase() === m.title.toLowerCase())) {
          searchable.push({
            id: m.id,
            rank: `#${searchable.length + 1}`,
            title: m.title.toUpperCase(),
            meta: `${m.genre} • ${m.duration} • ★ ${m.rating}`,
            genre: m.genre,
            colorClass: cardColorClasses[idx % 5]
          });
        }
      });
    });

    items = searchable.filter(item =>
      item.title.toLowerCase().includes(q) ||
      item.meta.toLowerCase().includes(q) ||
      (item.genre && item.genre.toLowerCase().includes(q))
    );
  } else {
    headingEl.textContent = 'Populer Minggu Ini';
  }

  if (items.length === 0) {
    listEl.innerHTML = `
      <div class="bg-[#121212] card-border rounded-2xl p-8 text-center text-xs text-[#8E8E8E] animate-fade-up">
        Tidak ditemukan film yang cocok dengan pencarian "<span class="text-white font-semibold">${query}</span>".
      </div>
    `;
    return;
  }

  listEl.innerHTML = items.map((item, idx) => `
    <div onclick="openWatchDetail('${item.id}')" class="popular-item-card bg-[#121212] hover:bg-[#171717] card-border rounded-2xl p-4 flex items-center justify-between cursor-pointer transition group stagger-item stagger-${(idx % 10) + 1}">
      <div class="flex items-center gap-4 min-w-0">
        <div class="w-16 h-16 rounded-xl ${item.colorClass} flex-shrink-0"></div>
        <div class="min-w-0">
          <span class="text-[11px] font-bold text-[#E50914] block">${item.rank || '#' + (idx + 1)}</span>
          <h3 class="text-sm font-extrabold text-white uppercase tracking-tight mt-0.5 truncate group-hover:text-[#FF5A5F] transition">${item.title}</h3>
          <p class="text-xs text-[#8E8E8E] mt-0.5 truncate">${item.meta}</p>
        </div>
      </div>
      <button onclick="event.stopPropagation(); openWatchDetail('${item.id}')" class="btn-interactive w-9 h-9 rounded-full bg-[#E50914] group-hover:bg-[#f6121d] text-white text-xs font-bold flex items-center justify-center transition shadow-md shadow-[#E50914]/25 flex-shrink-0 ml-3">
        ▶
      </button>
    </div>
  `).join('');
}

function renderSimpanView() {
  const topCountEl = document.getElementById('simpan-top-count');
  const redBarEl = document.getElementById('simpan-red-bar');
  const gridEl = document.getElementById('simpan-cards-grid');

  const count = savedMoviesList.length;
  topCountEl.textContent = `${count} Film`;
  redBarEl.textContent = `Simpan(${count})`;

  if (count === 0) {
    gridEl.innerHTML = `
      <div class="col-span-full bg-[#121212] card-border rounded-2xl p-12 text-center animate-fade-up">
        <p class="text-sm font-bold text-white">Belum ada film yang disimpan</p>
        <p class="text-xs text-[#8E8E8E] mt-1 mb-5">Tambahkan film favoritmu dari halaman Beranda atau Explore.</p>
        <button onclick="navigateTo('beranda')" class="btn-interactive bg-[#E50914] hover:bg-[#f6121d] text-white text-xs font-semibold px-6 py-2.5 rounded-xl transition">
          Jelajahi Film
        </button>
      </div>
    `;
    return;
  }

  gridEl.innerHTML = savedMoviesList.map((item, idx) => `
    <div class="simpan-item-card bg-[#121212] card-border rounded-2xl p-5 flex items-center gap-5 stagger-item stagger-${(idx % 10) + 1}">
      <div onclick="openWatchDetail('${item.id}')" class="w-20 h-28 rounded-xl ${item.colorClass} flex-shrink-0 cursor-pointer hover:opacity-90 transition"></div>
      <div class="flex-1 min-w-0">
        <h3 onclick="openWatchDetail('${item.id}')" class="text-base font-extrabold text-white uppercase truncate cursor-pointer hover:text-[#FF5A5F] transition">
          ${item.title}
        </h3>
        <p class="text-xs text-[#8E8E8E] mt-1">${item.meta}</p>
        <p class="text-[11px] font-semibold text-[#E05257] mt-1.5">${item.status}</p>

        <div class="flex items-center gap-2.5 mt-3.5">
          <button onclick="openWatchDetail('${item.id}')" class="btn-interactive bg-[#E50914] hover:bg-[#f6121d] text-white text-xs font-bold px-7 py-2 rounded-lg transition">
            Tonton
          </button>
          <button onclick="removeSavedFilm('${item.id}')" class="btn-interactive bg-[#222222] hover:bg-[#2E2E2E] border border-white/10 text-[#D4D4D4] hover:text-white text-xs font-semibold px-5 py-2 rounded-lg transition">
            Hapus
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

// ==========================================
// NAVIGATION & INTERACTIONS
// ==========================================

function navigateTo(viewName, focusSearch = false) {
  if (currentView !== 'watch') {
    previousView = currentView;
  }
  currentView = viewName;
  document.body.setAttribute('data-view', viewName);

  const viewBeranda = document.getElementById('view-beranda');
  const viewWatch = document.getElementById('view-watch');
  const viewExplore = document.getElementById('view-explore');
  const viewSimpan = document.getElementById('view-simpan');

  viewBeranda.classList.toggle('hidden', viewName !== 'beranda');
  viewWatch.classList.toggle('hidden', viewName !== 'watch');
  viewExplore.classList.toggle('hidden', viewName !== 'explore');
  viewSimpan.classList.toggle('hidden', viewName !== 'simpan');

  updateNavbarActiveState();

  if (viewName === 'beranda') {
    renderHomeSemua();
    triggerFadeUpAnimation(viewBeranda);
  } else if (viewName === 'explore') {
    const searchInput = document.getElementById('explore-search-input');
    renderExploreList(searchInput ? searchInput.value : '');
    // Stagger "Jelajahi Genre" cards on Explore view entrance
    document.querySelectorAll('.explore-genre-card').forEach((card, idx) => {
      card.classList.remove('stagger-item', `stagger-${idx + 1}`);
      void card.offsetWidth;
      card.classList.add('stagger-item', `stagger-${idx + 1}`);
    });
    triggerFadeUpAnimation(viewExplore);
    if (focusSearch && searchInput) {
      setTimeout(() => searchInput.focus(), 50);
    }
  } else if (viewName === 'simpan') {
    renderSimpanView();
    triggerFadeUpAnimation(viewSimpan);
  } else if (viewName === 'watch') {
    triggerFadeUpAnimation(viewWatch);
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function selectGenreTab(genre) {
  currentGenreTab = genre;
  updateGenrePillsUI();

  const semuaEl = document.getElementById('beranda-semua-content');
  const genreEl = document.getElementById('beranda-genre-content');

  if (genre === 'Semua') {
    semuaEl.classList.remove('hidden');
    genreEl.classList.add('hidden');
    renderHomeSemua();
    triggerFadeUpAnimation(semuaEl);
  } else {
    semuaEl.classList.add('hidden');
    genreEl.classList.remove('hidden');
    renderGenreTabContent(genre);
    triggerFadeUpAnimation(genreEl);
  }
}

function jumpToGenreFromExplore(genre) {
  navigateTo('beranda');
  selectGenreTab(genre);
}

function handleExploreSearch(value) {
  renderExploreList(value);
}

// Watch & Detail Logic
function openWatchDetail(movieId) {
  if (currentView !== 'watch') {
    previousView = currentView;
  }
  currentWatchMovieId = movieId;
  const movie = findMovieById(movieId);

  document.getElementById('watch-title').textContent = movie.title;
  document.getElementById('watch-badge').textContent = movie.badge || '4K HDR';
  document.getElementById('watch-meta').innerHTML = `${movie.year} &nbsp;•&nbsp; ${movie.genre} &nbsp;•&nbsp; ${movie.duration} &nbsp;•&nbsp; 16+`;
  document.getElementById('watch-synopsis').textContent = movie.synopsis;
  document.getElementById('watch-rating-score').textContent = movie.rating;

  isVideoPlaying = false;
  document.getElementById('player-play-icon').textContent = '▶';

  updateWatchSaveButtonUI();

  // Update Share Modal info
  document.getElementById('share-modal-title').textContent = movie.title;
  document.getElementById('share-modal-meta').innerHTML = `${movie.year} &nbsp;•&nbsp; ${movie.genre.split(',')[0]} &nbsp;•&nbsp; ★ ${movie.rating}`;
  const slug = movie.id.toLowerCase().replace(/[^a-z0-9]+/g, '-');
  document.getElementById('share-url-input').value = `https://streamvibe.id/watch/${slug}`;

  navigateTo('watch');
}

function goBackFromWatch() {
  navigateTo(previousView || 'beranda');
}

function isFilmSaved(movieId) {
  return savedMoviesList.some(item => item.id === movieId);
}

function updateHeroSaveButtonUI() {
  const btn = document.getElementById('hero-save-btn');
  if (!btn) return;
  if (isFilmSaved('neon-horizon')) {
    btn.textContent = '✓';
    btn.classList.add('border-[#E50914]/50', 'text-[#FF6B6E]');
  } else {
    btn.textContent = '+';
    btn.classList.remove('border-[#E50914]/50', 'text-[#FF6B6E]');
  }
}

function updateWatchSaveButtonUI() {
  const btn = document.getElementById('watch-save-btn');
  if (!btn) return;
  if (isFilmSaved(currentWatchMovieId)) {
    btn.textContent = '✓ Tersimpan';
    btn.className = 'w-36 py-2.5 rounded-xl bg-[#1F1213] hover:bg-[#291618] border border-[#E50914]/40 text-white text-xs font-semibold transition watch-action-btn';
  } else {
    btn.textContent = 'Simpan';
    btn.className = 'w-36 py-2.5 rounded-xl bg-[#131313] hover:bg-[#1C1C1C] border border-white/10 text-white text-xs font-semibold transition watch-action-btn';
  }
}

function toggleSaveFilm(movieId) {
  const existingIdx = savedMoviesList.findIndex(item => item.id === movieId);
  if (existingIdx !== -1) {
    savedMoviesList.splice(existingIdx, 1);
  } else {
    const movie = findMovieById(movieId);
    savedMoviesList.unshift({
      id: movie.id,
      title: movie.title,
      meta: `${movie.genre.split(',')[0]} • ${movie.duration} • ★ ${movie.rating}`,
      status: 'Tersimpan',
      colorClass: movie.colorClass || 'thumb-red-bright',
      year: movie.year,
      genre: movie.genre,
      duration: movie.duration,
      rating: movie.rating
    });
  }
  updateHeroSaveButtonUI();
  updateWatchSaveButtonUI();
  if (currentView === 'simpan') {
    renderSimpanView();
  }
}

function toggleSaveCurrentWatchFilm() {
  toggleSaveFilm(currentWatchMovieId);
}

function removeSavedFilm(movieId) {
  savedMoviesList = savedMoviesList.filter(item => item.id !== movieId);
  renderSimpanView();
  updateHeroSaveButtonUI();
  updateWatchSaveButtonUI();
}

function handleWriteReviewClick() {
  const listEl = document.getElementById('watch-reviews-list');
  if (!listEl || document.getElementById('new-user-review')) return;

  const reviewCard = document.createElement('div');
  reviewCard.id = 'new-user-review';
  reviewCard.className = 'bg-[#121212] card-border rounded-xl p-3.5';
  reviewCard.innerHTML = `
    <div class="flex items-center justify-between">
      <div class="flex items-center gap-2.5">
        <div class="w-6 h-6 rounded-full bg-[#E50914] text-white text-[11px] font-bold flex items-center justify-center">
          A
        </div>
        <span class="text-xs font-bold text-white">Anda (StreamVibe User)</span>
      </div>
      <span class="text-xs font-bold text-[#FACC15]">★ 9.8</span>
    </div>
    <p class="text-xs text-[#A3A3A3] mt-2 leading-relaxed">
      Sinematografi dan atmosfer sci-fi yang luar biasa! Sangat direkomendasikan.
    </p>
  `;
  listEl.prepend(reviewCard);
}

// Video Player Interactive Controls
function toggleVideoPlay() {
  isVideoPlaying = !isVideoPlaying;
  const iconEl = document.getElementById('player-play-icon');
  iconEl.textContent = isVideoPlaying ? '||' : '▶';
}

function seekVideo(event) {
  const bar = event.currentTarget;
  const rect = bar.getBoundingClientRect();
  const clickX = event.clientX - rect.left;
  const pct = Math.max(5, Math.min(98, Math.round((clickX / rect.width) * 100)));
  document.getElementById('player-progress-bar').style.width = `${pct}%`;

  const totalMinutes = 134; // 2j 14m
  const currentMin = Math.floor((pct / 100) * totalMinutes);
  const hrs = Math.floor(currentMin / 60);
  const mins = String(currentMin % 60).padStart(2, '0');
  const timeStr = hrs > 0 ? `${hrs}:${mins}:15` : `${mins}:45`;
  document.getElementById('player-time-label').textContent = `${timeStr} / 2:14:00`;
}

function toggleSubtitles() {
  const btn = document.getElementById('cc-toggle-btn');
  btn.classList.toggle('bg-[#E50914]');
  btn.classList.toggle('bg-[#120A0B]/75');
}

function toggleFullscreenPlayer() {
  const playerBox = document.querySelector('#view-watch .player-gradient');
  if (!document.fullscreenElement && playerBox.requestFullscreen) {
    playerBox.requestFullscreen().catch(() => {});
  } else if (document.exitFullscreen) {
    document.exitFullscreen().catch(() => {});
  }
}

// Modal Bagikan Film Logic
function openShareModal() {
  const modal = document.getElementById('share-modal-backdrop');
  const feedback = document.getElementById('copy-feedback-label');
  feedback.classList.add('hidden');
  modal.classList.remove('hidden', 'modal-open');
  void modal.offsetWidth;
  modal.classList.add('flex', 'modal-open');
}

function closeShareModal() {
  const modal = document.getElementById('share-modal-backdrop');
  modal.classList.remove('flex', 'modal-open');
  modal.classList.add('hidden');
}

function closeShareModalOnBackdrop(event) {
  if (event.target.id === 'share-modal-backdrop') {
    closeShareModal();
  }
}

function copyShareLink() {
  const input = document.getElementById('share-url-input');
  const feedback = document.getElementById('copy-feedback-label');
  const btn = document.getElementById('copy-link-btn');

  input.select();
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(input.value).catch(() => {});
  } else {
    document.execCommand('copy');
  }

  feedback.classList.remove('hidden');
  btn.textContent = 'Tersalin';
  setTimeout(() => {
    btn.textContent = 'Salin';
  }, 1800);
}

// Initialize SPA on DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
  updateNavbarActiveState();
  updateGenrePillsUI();
  renderHomeSemua();
  renderExploreList();
  renderSimpanView();
  triggerFadeUpAnimation(document.getElementById('view-beranda'));
});
