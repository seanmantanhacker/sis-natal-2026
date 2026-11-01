const SHOTS_DATA = [
  // BAGIAN 1: THE CHOSEN STAGE (00:00 - 00:30)
  {
    id: 1,
    code: "SHOT 01",
    act: 1,
    actName: "Bagian 1 — Panggung Pilihan (The Chosen Stage)",
    startSec: 0,
    endSec: 8,
    duration: 8,
    timeLabel: "00:00 – 00:08",
    title: "Montase Layar Menyala & Tren Sosial Media",
    camera: "ECU Layar HP + Fast-Cut Montage (0.8 dtk/klip)",
    lensAndMove: "35mm f/1.8 • Whip Pan & Match Cut",
    visualIcon: "📱✨",
    bgGradient: "linear-gradient(135deg, #500724 0%, #831843 50%, #311042 100%)",
    action: "Dari ruang gelap, layar HP menyala terang. Fast-cut video TikTok / Instagram Reels remaja sedang dance tren, nongkrong di kafe estetik, dan tiup lilin ulang tahun bersama teman-teman.",
    lighting: "High-key, saturasi tinggi, pantulan cahaya layar neon hangat di kegelapan.",
    sfx: "SFX bunyi 'Pop!' notifikasi Instagram Like bertubi-tubi + Musik Pop-Dance Upbeat masuk penuh energi.",
    vo: "Kalau hidup itu soal pilihan... ini adalah tempat-tempat yang pasti ingin kita pilih. Tempat yang terang, berisik, seru, dan bikin kita kelihatan bahagia.",
    voNote: "Nada suara ceria di awal namun terdengar sedikit ironis/menerawang."
  },
  {
    id: 2,
    code: "SHOT 02",
    act: 1,
    actName: "Bagian 1 — Panggung Pilihan (The Chosen Stage)",
    startSec: 8,
    endSec: 18,
    duration: 10,
    timeLabel: "00:08 – 00:18",
    title: "Senyum Helen di Balik Layar",
    camera: "Close-Up (CU) Wajah Helen",
    lensAndMove: "50mm f/1.4 • Slow Push-In (Dolly In tipis)",
    visualIcon: "😊📲",
    bgGradient: "linear-gradient(135deg, #4a044e 0%, #701a75 60%, #1e1b4b 100%)",
    action: "Kamera fokus ke wajah Helen yang sedang memegang HP. Ia tersenyum puas memperhatikan jumlah likes dan komentar yang terus bertambah di layarnya.",
    lighting: "Key light lembut dari arah layar HP menerangi wajah Helen; background kamar masih samar.",
    sfx: "Musik Pop-Upbeat tetap berjalan + SFX suara scroll layar & chime notifikasi.",
    vo: "Di layar enam inci ini, kita bebas memilih panggung terbaik kita.",
    voNote: "Penekanan pada kata 'enam inci' dan 'panggung terbaik'."
  },
  {
    id: 3,
    code: "SHOT 03",
    act: 1,
    actName: "Bagian 1 — Panggung Pilihan (The Chosen Stage)",
    startSec: 18,
    endSec: 30,
    duration: 12,
    timeLabel: "00:18 – 00:30",
    title: "Unggah Caption 'Best Life with Best People'",
    camera: "Over-The-Shoulder (OTS) ke Insert Layar HP",
    lensAndMove: "50mm Macro / Close Focus • Handheld halus",
    visualIcon: "📸💬",
    bgGradient: "linear-gradient(135deg, #701a75 0%, #3b0764 70%, #090b10 100%)",
    action: "Helen mengunggah foto terbaiknya ke Instagram dan mengetik caption: 'Best life with best people ✨' lalu menekan tombol Share.",
    lighting: "Cahaya layar HP mendominasi frame, kontras mulai menajam.",
    sfx: "SFX ketikan keyboard HP cepat, bunyi 'Whoosh' saat post terkirim.",
    vo: "Semuanya harus terlihat sempurna... enggak boleh ada celah.",
    voNote: "Kalimat 'enggak boleh ada celah' diucapkan melambat sebelum musik terputus."
  },

  // BAGIAN 2: THE BROKEN ONE REVEALS (00:30 - 01:12)
  {
    id: 4,
    code: "SHOT 04",
    act: 2,
    actName: "Bagian 2 — Topeng yang Runtuh (The Broken One Reveals)",
    startSec: 30,
    endSec: 40,
    duration: 10,
    timeLabel: "00:30 – 00:40",
    title: "Senyum Memudar & HP Dibanting ke Kasur",
    camera: "Medium Close-Up (MCU) Helen",
    lensAndMove: "50mm • Static Tripod (Kaku & Dingin)",
    visualIcon: "🥀📴",
    bgGradient: "linear-gradient(135deg, #090b10 0%, #0f172a 60%, #1e293b 100%)",
    action: "Helen masih tersenyum menatap HP, namun perlahan senyumnya luntur menjadi tatapan lelah dan kosong. Ia mengunci layar HP (layar gelap) lalu membanting/melempar HP-nya ke kasur.",
    lighting: "Saat layar HP dikunci, cahaya hangat hilang seketika—menyisakan cahaya biru dingin (4200K) dari celah jendela.",
    sfx: "MUSIK BERHENTI MENDADAK (Hard Cut). Terdengar jelas bunyi 'KLIK' kunci HP, 'BUGH' HP jatuh ke kasur, dengung ruangan sunyi, dan helaan napas berat Helen.",
    vo: "[Jeda Hening 3 Detik — Biarkan suara napas berat terdengar] ...Tapi ini adalah tempat yang tidak pernah kita pilih.",
    voNote: "Transisi emosi paling krusial: suara VO berubah menjadi lirih, jujur, dan dekat di telinga (intimate)."
  },
  {
    id: 5,
    code: "SHOT 05",
    act: 2,
    actName: "Bagian 2 — Topeng yang Runtuh (The Broken One Reveals)",
    startSec: 40,
    endSec: 50,
    duration: 10,
    timeLabel: "00:40 – 00:50",
    title: "Zoom Out Kamar yang Gelap & Dingin",
    camera: "Medium Shot ke Wide Shot (Slow Zoom Out)",
    lensAndMove: "24mm Wide • Slow Dolly Out / Zoom Out",
    visualIcon: "🛏️🌑",
    bgGradient: "linear-gradient(135deg, #020617 0%, #0f172a 65%, #172554 100%)",
    action: "Kamera perlahan bergerak mundur (zoom out), memperlihatkan Helen duduk meringkuk di sudut kasur di tengah kamar yang gelap, dingin, dan terasa sangat sepi.",
    lighting: "Low-key cold blue & desaturated grey (saturasi diturunkan -35%).",
    sfx: "Suara detak jam dinding samar + nada tunggal Cello/Piano minor yang sangat tipis.",
    vo: "Kamar yang dingin, rumah yang kehilangan hangatnya, rasa gagal, dan insecure.",
    voNote: "Tempo lambat, berikan jeda singkat di antara frasa."
  },
  {
    id: 6,
    code: "SHOT 06",
    act: 2,
    actName: "Bagian 2 — Topeng yang Runtuh (The Broken One Reveals)",
    startSec: 50,
    endSec: 58,
    duration: 8,
    timeLabel: "00:50 – 00:58",
    title: "Melamun Menatap Jendela Bus",
    camera: "Side Profile / Reflection Shot dari Luar/Dalam Bus",
    lensAndMove: "50mm f/1.4 • Bokeh lampu jalanan di kaca",
    visualIcon: "🚌🌧️",
    bgGradient: "linear-gradient(135deg, #0c192c 0%, #1e293b 60%, #090b10 100%)",
    action: "Helen duduk sendirian di kursi bus, menyandarkan kepala ke kaca jendela sambil melamun menatap jalanan luar yang dingin.",
    lighting: "Cahaya lampu jalanan kota yang lewat menerangi wajahnya secara bergantian.",
    sfx: "Ambience deru mesin bus yang rendah dan teredam (muffled city traffic).",
    vo: "Enggak ada satu pun dari kita yang mau ada di sini. Gelap... dan sepi.",
    voNote: "Suara terdengar lelah dan hampa."
  },
  {
    id: 7,
    code: "SHOT 07",
    act: 2,
    actName: "Bagian 2 — Topeng yang Runtuh (The Broken One Reveals)",
    startSec: 58,
    endSec: 66,
    duration: 8,
    timeLabel: "00:58 – 01:06",
    title: "Pesan Grup KakaoTalk yang Dihapus Kembali",
    camera: "Extreme Close-Up (ECU) Layar HP",
    lensAndMove: "Macro / 50mm Close-Up • Fokus tajam pada teks",
    visualIcon: "💬⌫",
    bgGradient: "linear-gradient(135deg, #111827 0%, #1f2937 60%, #090b10 100%)",
    action: "Jari Helen mengetik di grup KakaoTalk: 'Guys gw lagi sedih banget, gw butuh cerita'. Ibu jarinya berhenti di atas tombol kirim, ragu, lalu menekan tombol hapus (backspace) sampai kolom chat kembali kosong.",
    lighting: "Cahaya layar KakaoTalk menerangi ujung jari Helen di ruang remang.",
    sfx: "SFX bunyi ketikan layar, lalu bunyi klik penghapusan cepat (backspace) hingga hening.",
    vo: "[Tanpa VO di 4 detik pertama agar penonton membaca teks KakaoTalk] ...Dan sering kali kita pikir,",
    voNote: "Beri ruang 4 detik tanpa suara agar penonton sempat membaca teks pesan yang dihapus."
  },
  {
    id: 8,
    code: "SHOT 08",
    act: 2,
    actName: "Bagian 2 — Topeng yang Runtuh (The Broken One Reveals)",
    startSec: 66,
    endSec: 72,
    duration: 6,
    timeLabel: "01:06 – 01:12",
    title: "Menatap Cermin dengan Perasaan Hampa",
    camera: "Over-The-Shoulder Mirror Shot",
    lensAndMove: "50mm • Fokus pada pantulan mata Helen di cermin",
    visualIcon: "🪞😔",
    bgGradient: "linear-gradient(135deg, #090b10 0%, #1e1b4b 60%, #020617 100%)",
    action: "Helen berdiri di depan cermin wastafel/kamar, menatap pantulan dirinya sendiri dengan pandangan hampa dan mata berkaca-kaca.",
    lighting: "Sidelight redup, bayangan tegas di separuh wajah (Chiaroscuro).",
    sfx: "Nada piano rendah menggantung + helaan napas lirih.",
    vo: "Tuhan pasti jijik melihat tempat sekotor dan sehancur ini.",
    voNote: "Titik emosi terendah dalam film."
  },

  // BAGIAN 3: THE UNCHOSEN MANGER & INVITATION (01:12 - 02:10)
  {
    id: 9,
    code: "SHOT 09",
    act: 3,
    actName: "Bagian 3 — Panggilan & Palungan (Invitation & The Manger)",
    startSec: 72,
    endSec: 80,
    duration: 8,
    timeLabel: "01:12 – 01:20",
    title: "Berbaring Menatap Langit-Langit Kamar",
    camera: "High-Angle / Bird's-Eye View (Top-Down)",
    lensAndMove: "24mm • Kamera tepat di atas Helen, perlahan berputar halus",
    visualIcon: "🛌💭",
    bgGradient: "linear-gradient(135deg, #17153b 0%, #2e236c 60%, #090b10 100%)",
    action: "Helen berbaring telentang di atas kasur, menatap langit-langit kamar. Di sebelahnya tergeletak HP dalam keadaan layar mati.",
    lighting: "Nuansa biru malam mulai bercampur sedikit cahaya hangat dari luar.",
    sfx: "Hening sejenak sebelum notifikasi masuk.",
    vo: "[Jeda reflektif — transisi menuju secercah harapan]",
    voNote: "Biarkan visual berbicara sebelum bunyi notifikasi KakaoTalk memecah keheningan."
  },
  {
    id: 10,
    code: "SHOT 10",
    act: 3,
    actName: "Bagian 3 — Panggilan & Palungan (Invitation & The Manger)",
    startSec: 80,
    endSec: 88,
    duration: 8,
    timeLabel: "01:20 – 01:28",
    title: "Notifikasi KakaoTalk: Undangan Ibadah Natal",
    camera: "Insert Close-Up Layar HP -> Rack Focus ke Mata Helen",
    lensAndMove: "50mm • Rack Focus dari layar HP ke wajah Helen yang menoleh",
    visualIcon: "💛🎄",
    bgGradient: "linear-gradient(135deg, #2e1065 0%, #4c1d95 55%, #78350f 100%)",
    action: "Layar HP di atas bantal tiba-tiba menyala. Muncul pop-up pesan KakaoTalk dari seorang teman: 'Helen, besok dateng ibadah Natal ga?? 🎄'. Helen menoleh dan membaca pesan itu.",
    lighting: "Cahaya kuning hangat khas KakaoTalk memantul lembut di pipi Helen.",
    sfx: "SFX bunyi khas 'Katalk!' yang jernih + denting pertama Piano Akustik hangat mulai masuk.",
    vo: "Awalnya aku ragu... buat apa bawa hidup yang berantakan ini ke dalam kehidupan Tuhan?",
    voNote: "Nada suara mulai jujur dan bertanya-tanya."
  },
  {
    id: 11,
    code: "SHOT 11",
    act: 3,
    actName: "Bagian 3 — Panggilan & Palungan (Invitation & The Manger)",
    startSec: 88,
    endSec: 100,
    duration: 12,
    timeLabel: "01:28 – 01:40",
    title: "Montase Keseharian & Pekerjaan Orang-Orang Lain",
    camera: "3 Klip Medium Shot (@ 4 detik) — Kehidupan Pekerja/Pemuda",
    lensAndMove: "35mm Documentary Style • Handheld natural",
    visualIcon: "💼🏭",
    bgGradient: "linear-gradient(135deg, #1e1b4b 0%, #312e81 55%, #4338ca 100%)",
    action: "Potongan adegan kehidupan nyata orang-orang lain di kesehariannya (5–12 detik): (1) Seorang pemuda lelah bekerja di depan laptop/meja kerja, (2) Pekerja merapikan barang/aktivitas fisik di tempat kerja, (3) Seseorang menghela napas di sela jam kerja—menunjukkan semua orang punya beban hidupnya masing-masing.",
    lighting: "Natural indoor/workplace lighting, terasa nyata dan membumi (grounded).",
    sfx: "Ambience tipis suara tempat kerja yang menyatu dengan melodi piano yang mulai mengalir.",
    vo: "[Musik instrumental piano & strings lembut mengiringi montase keseharian]",
    voNote: "Memberi pesan visual bahwa Helen tidak sendirian dalam kelelahan hidup."
  },
  {
    id: 12,
    code: "SHOT 12",
    act: 3,
    actName: "Bagian 3 — Panggilan & Palungan (Invitation & The Manger)",
    startSec: 100,
    endSec: 115,
    duration: 15,
    timeLabel: "01:40 – 01:55",
    title: "Duduk Ragu di Kursi Paling Belakang Gereja",
    camera: "Wide OTS dari Belakang Helen -> Medium Shot Helen",
    lensAndMove: "50mm f/1.8 • Depth of Field dangkal (jemaat di depan bokeh hangat)",
    visualIcon: "⛪🙏",
    bgGradient: "linear-gradient(135deg, #311042 0%, #581c87 50%, #78350f 100%)",
    action: "Helen hadir di ibadah Natal namun masih ragu dan menjaga jarak. Ia duduk sendirian di kursi barisan paling belakang. Di depannya, teman-teman dan jemaat lain sedang khusyuk menyembah Tuhan.",
    lighting: "Warm tungsten (3200K) lampu gereja dan dekorasi lampu Natal di latar depan yang bokeh.",
    sfx: "Suara pujian jemaat samar-samar (warm ambient worship) berpadu dengan musik latar.",
    vo: "Tapi hari itu, di tengah pujian dan firman yang disampaikan, aku sadar satu hal...",
    voNote: "Mulai membangun emosi menuju klimaks pesan Natal."
  },
  {
    id: 13,
    code: "SHOT 13",
    act: 3,
    actName: "Bagian 3 — Panggilan & Palungan (Invitation & The Manger)",
    startSec: 115,
    endSec: 130,
    duration: 15,
    timeLabel: "01:55 – 02:10",
    title: "Rangkulan Hangat Teman di Kursi Belakang",
    camera: "Medium Two-Shot (Slow Motion 60fps diperlambat ke 24fps)",
    lensAndMove: "50mm • Handheld intim, menangkap ekspresi terkejut lalu haru",
    visualIcon: "🫂💛",
    bgGradient: "linear-gradient(135deg, #4c1d95 0%, #92400e 60%, #b45309 100%)",
    action: "Tiba-tiba seorang teman datang menghampiri kursi belakang, merangkul bahu Helen dengan hangat dan tulus, lalu mengajaknya mengobrol sambil tersenyum. Dinding keraguan Helen runtuh.",
    lighting: "Cahaya keemasan hangat menyinari wajah Helen dan temannya.",
    sfx: "Musik Strings & Piano naik (Crescendo emosional yang menyentuh hati).",
    vo: "Dua ribu tahun lalu, Raja segala raja enggak memilih lahir di istana yang megah dan bersih. Dia memilih lahir di tempat yang hina... untuk menjumpai aku.",
    voNote: "Puncak pesan teologis film: menghubungkan palungan Natal dengan hati Helen."
  },

  // BAGIAN 4: RESTORATION & EPILOGUE (02:10 - 03:00)
  {
    id: 14,
    code: "SHOT 14",
    act: 4,
    actName: "Bagian 4 — Pemulihan & Keluarga Baru (Restoration)",
    startSec: 130,
    endSec: 144,
    duration: 14,
    timeLabel: "02:10 – 02:24",
    title: "Helen Aktif Melayani di Gereja",
    camera: "Medium Tracking Shot (Mengikuti langkah Helen)",
    lensAndMove: "35mm Gimbal Smooth • Gerakan kamera dinamis dan hidup",
    visualIcon: "🙌✨",
    bgGradient: "linear-gradient(135deg, #78350f 0%, #b45309 55%, #d97706 100%)",
    action: "Helen kini terlihat aktif di gereja: menyambut jemaat yang datang, merapikan pelayanan bersama rekan-rekan dengan wajah yang berseri-seri.",
    lighting: "Terang, hangat, warna kulit natural bercahaya (Golden Warmth).",
    sfx: "Musik uplifting penuh harapan (Piano, Acoustic Guitar, & Warm Strings).",
    vo: "Oh, ternyata lingkungan yang tadinya kukira menyeramkan, Tuhan bisa pakai menjadi ladang untuk melayani sesama. Dia mengampuniku, Dia memulihkanku,",
    voNote: "Suara penuh syukur, hangat, dan bersemangat."
  },
  {
    id: 15,
    code: "SHOT 15",
    act: 4,
    actName: "Bagian 4 — Pemulihan & Keluarga Baru (Restoration)",
    startSec: 144,
    endSec: 158,
    duration: 14,
    timeLabel: "02:24 – 02:38",
    title: "Makan Bersama & Tawa Tulus Keluarga Baru",
    camera: "Wide to Medium Group Shot mengelilingi meja makan",
    lensAndMove: "35mm • Panning lembut menangkap tawa seluruh teman",
    visualIcon: "🍲😄",
    bgGradient: "linear-gradient(135deg, #92400e 0%, #d97706 60%, #f59e0b 100%)",
    action: "Helen makan bersama teman-teman gereja, saling berbagi makanan, mengobrol, dan tertawa lepas tanpa perlu berpura-pura di depan kamera HP.",
    lighting: "Warm cozy dining light, penuh keakraban kekeluargaan.",
    sfx: "Suara tawa samar yang hangat di balik alunan musik klimaks.",
    vo: "dan memberikanku keluarga baru. Tempat yang tadinya enggak aku pilih, justru jadi tempat di mana aku merasakan kasih.",
    voNote: "Tekankan kalimat 'tempat yang tadinya enggak aku pilih, justru jadi tempat merasakan kasih'."
  },
  {
    id: 16,
    code: "SHOT 16",
    act: 4,
    actName: "Bagian 4 — Pemulihan & Keluarga Baru (Restoration)",
    startSec: 158,
    endSec: 166,
    duration: 8,
    timeLabel: "02:38 – 02:46",
    title: "Senyum Damai Helen & Pesan untuk Jemaat",
    camera: "Medium Close-Up (MCU) Helen di tengah keramaian hangat",
    lensAndMove: "50mm f/1.4 • Slow Motion, Fade Out ke Layar Gelap di detik 02:45",
    visualIcon: "🕯️🤍",
    bgGradient: "linear-gradient(135deg, #78350f 0%, #451a03 65%, #090b10 100%)",
    action: "Di tengah suasana hangat persekutuan, Helen tersenyum tenang dan penuh damai. Gambar perlahan memudar menjadi gelap (Fade to Black).",
    lighting: "Bokeh lampu pohon Natal berkelap-kelip lembut di belakang Helen.",
    sfx: "Musik perlahan melambat menjadi dentingan piano lembut.",
    vo: "Jadi buat kamu yang hari ini datang dengan hati yang capek... tenang aja. Tuhan ada di sini. Kamu enggak sendirian.",
    voNote: "Sapaan personal langsung kepada jemaat yang baru selesai mendengar kotbah Natal."
  },
  {
    id: 17,
    code: "SHOT 17",
    act: 4,
    actName: "Bagian 4 — Pemulihan & Keluarga Baru (Restoration)",
    startSec: 166,
    endSec: 174,
    duration: 8,
    timeLabel: "02:46 – 02:54",
    title: "Title Card Utama: Pesan Inti Natal",
    camera: "On-Screen Typography di atas Layar Hitam",
    lensAndMove: "Text Fade-In (Serif putih keemasan di tengah layar)",
    visualIcon: "✨📜",
    bgGradient: "linear-gradient(135deg, #090b10 0%, #1c1917 50%, #090b10 100%)",
    action: "Layar gelap. Muncul teks utama dengan animasi fade-in halus: “Allah memilih tempat yang tidak kita pilih, dan mengubahnya menjadi sukacita.”",
    lighting: "Pure Black Background (#090b10) dengan teks putih-emas bersih.",
    sfx: "Chime hangat & akor panjang strings yang syahdu.",
    vo: "[Teks di Layar]: “Allah memilih tempat yang tidak kita pilih, dan mengubahnya menjadi sukacita.”",
    voNote: "Tanpa suara VO agar jemaat membaca dan merenungkan kalimat inti di layar."
  },
  {
    id: 18,
    code: "SHOT 18",
    act: 4,
    actName: "Bagian 4 — Pemulihan & Keluarga Baru (Restoration)",
    startSec: 174,
    endSec: 180,
    duration: 6,
    timeLabel: "02:54 – 03:00",
    title: "Closing Card: Ucapan Selamat Natal Keluarga Gereja",
    camera: "Sub-Typography Card & Final Fade Out",
    lensAndMove: "Text Fade-In di bawah teks utama -> Hold -> Fade to Black",
    visualIcon: "🎄🏠",
    bgGradient: "linear-gradient(135deg, #090b10 0%, #291d0e 50%, #090b10 100%)",
    action: "Muncul teks kecil tambahan di bawahnya: “Terima kasih sudah menjadi bagian dari keluarga ini... Selamat Natal !!”",
    lighting: "Cahaya partikel emas tipis memudar perlahan.",
    sfx: "Nada terakhir piano menggema lembut (Reverb Tail) hingga hening di 03:00.",
    vo: "[Teks Tambahan di Layar]: “Terima kasih sudah menjadi bagian dari keluarga ini.. Selamat Natal !!”",
    voNote: "Lampu gereja mulai dinyalakan kembali secara perlahan saat video selesai."
  }
];

// State Management
let currentSecond = 0;
let isPlaying = false;
let playbackSpeed = 1;
let timerInterval = null;
let activeActFilter = "all";
let searchQuery = "";
let completedShots = JSON.parse(localStorage.getItem("unchosen_completed_shots") || "[]");

// Format seconds to MM:SS
function formatTime(sec) {
  const s = Math.max(0, Math.min(180, Math.floor(sec)));
  const mins = String(Math.floor(s / 60)).padStart(2, "0");
  const secs = String(s % 60).padStart(2, "0");
  return `${mins}:${secs}`;
}

// Find active shot for a given second
function getShotAtSecond(sec) {
  return (
    SHOTS_DATA.find((shot) => sec >= shot.startSec && sec < shot.endSec) ||
    SHOTS_DATA[SHOTS_DATA.length - 1]
  );
}

// Update the Interactive Cinema Simulator
function updateSimulatorUI(sec) {
  const shot = getShotAtSecond(sec);
  const screen = document.getElementById("cinemaScreen");
  const hudShotCode = document.getElementById("hudShotCode");
  const hudActName = document.getElementById("hudActName");
  const hudCamera = document.getElementById("hudCamera");
  const hudSfx = document.getElementById("hudSfx");
  const stageIcon = document.getElementById("stageIcon");
  const stageTitle = document.getElementById("stageTitle");
  const stageAction = document.getElementById("stageAction");
  const stageVo = document.getElementById("stageVo");
  const timecodeDisplay = document.getElementById("timecodeDisplay");
  const timelineSlider = document.getElementById("timelineSlider");

  if (screen) screen.style.background = shot.bgGradient;
  if (hudShotCode) hudShotCode.textContent = `${shot.code} (${shot.timeLabel})`;
  if (hudActName) hudActName.textContent = shot.actName;
  if (hudCamera) hudCamera.textContent = `🎥 ${shot.camera}`;
  if (hudSfx) hudSfx.textContent = `🔊 ${shot.sfx}`;
  if (stageIcon) stageIcon.textContent = shot.visualIcon;
  if (stageTitle) stageTitle.textContent = `${shot.code}: ${shot.title}`;
  if (stageAction) stageAction.textContent = shot.action;
  if (stageVo) stageVo.textContent = `🎙️ VO: "${shot.vo}"`;
  if (timecodeDisplay) timecodeDisplay.textContent = `${formatTime(sec)} / 03:00`;
  if (timelineSlider && Number(timelineSlider.value) !== Math.floor(sec)) {
    timelineSlider.value = Math.floor(sec);
  }

  // Highlight active card in the shot list
  document.querySelectorAll(".shot-card").forEach((card) => {
    const id = Number(card.dataset.shotId);
    if (id === shot.id) {
      card.classList.add("playing-now");
    } else {
      card.classList.remove("playing-now");
    }
  });
}

// Toggle Play / Pause on Simulator
function togglePlayback() {
  const playBtn = document.getElementById("playSimBtn");
  if (isPlaying) {
    clearInterval(timerInterval);
    isPlaying = false;
    if (playBtn) playBtn.innerHTML = "▶ Putar Simulasi Timeline";
  } else {
    if (currentSecond >= 180) currentSecond = 0;
    isPlaying = true;
    if (playBtn) playBtn.innerHTML = "⏸ Jeda Simulasi";
    timerInterval = setInterval(() => {
      currentSecond += 0.25 * playbackSpeed;
      if (currentSecond >= 180) {
        currentSecond = 180;
        updateSimulatorUI(currentSecond);
        togglePlayback();
        return;
      }
      updateSimulatorUI(currentSecond);
    }, 250);
  }
}

// Jump to a specific shot or second
function jumpToSecond(sec, scrollToSimulator = false) {
  currentSecond = sec;
  updateSimulatorUI(currentSecond);
  if (scrollToSimulator) {
    document.getElementById("simulator")?.scrollIntoView({ behavior: "smooth", block: "center" });
  }
}

// Toggle shot completion status in localStorage
function toggleShotCompleted(shotId) {
  const idx = completedShots.indexOf(shotId);
  if (idx === -1) {
    completedShots.push(shotId);
  } else {
    completedShots.splice(idx, 1);
  }
  localStorage.setItem("unchosen_completed_shots", JSON.stringify(completedShots));
  renderShotsList();
  updateProgressCounter();
}

function updateProgressCounter() {
  const el = document.getElementById("shootProgressText");
  if (el) {
    el.textContent = `${completedShots.length} / ${SHOTS_DATA.length} Shot Selesai Take`;
  }
}

// Render Master Shot List
function renderShotsList() {
  const container = document.getElementById("shotsContainer");
  if (!container) return;

  const filtered = SHOTS_DATA.filter((shot) => {
    const matchesAct = activeActFilter === "all" || shot.act === Number(activeActFilter);
    const q = searchQuery.trim().toLowerCase();
    const matchesSearch =
      !q ||
      shot.title.toLowerCase().includes(q) ||
      shot.action.toLowerCase().includes(q) ||
      shot.vo.toLowerCase().includes(q) ||
      shot.camera.toLowerCase().includes(q) ||
      shot.code.toLowerCase().includes(q);
    return matchesAct && matchesSearch;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="text-align:center; padding: 2.5rem; background: var(--bg-card); border-radius: 12px; color: var(--text-secondary);">
        Tidak ada shot yang cocok dengan pencarian Anda.
      </div>
    `;
    return;
  }

  const activeShot = getShotAtSecond(currentSecond);

  container.innerHTML = filtered
    .map((shot) => {
      const isDone = completedShots.includes(shot.id);
      const isPlayingNow = activeShot && activeShot.id === shot.id;
      const actBadgeColors = {
        1: "background: rgba(236,72,153,0.15); color: #f472b6;",
        2: "background: rgba(56,189,248,0.15); color: #7dd3fc;",
        3: "background: rgba(168,85,247,0.15); color: #c084fc;",
        4: "background: rgba(245,158,11,0.15); color: #fcd34d;"
      };

      return `
        <article class="shot-card ${isPlayingNow ? "playing-now" : ""} ${isDone ? "shot-done" : ""}" data-shot-id="${shot.id}">
          <!-- Kolom Kiri: Detik & Kamera -->
          <div class="shot-time-col">
            <div class="shot-num-row">
              <span class="shot-number">${shot.code}</span>
              <span class="shot-duration-pill">⏱ ${shot.duration} Detik</span>
            </div>
            <div class="shot-timestamp">${shot.timeLabel}</div>
            <div class="shot-camera-type">🎥 ${shot.camera}</div>
            <button type="button" class="btn shot-play-btn" onclick="jumpToSecond(${shot.startSec}, true)">
              ▶ Lihat di Monitor (${formatTime(shot.startSec)})
            </button>
            <label class="shot-check-label">
              <input type="checkbox" ${isDone ? "checked" : ""} onchange="toggleShotCompleted(${shot.id})" />
              <span>Sudah Take / Selesai</span>
            </label>
          </div>

          <!-- Kolom Tengah: Aksi Visual, Blocking & Lighting -->
          <div class="shot-visual-col">
            <h4>
              <span>${shot.visualIcon} ${shot.title}</span>
              <span style="font-size:0.7rem; padding:0.2rem 0.55rem; border-radius:99px; font-family:var(--font-mono); ${actBadgeColors[shot.act]}">
                Bagian ${shot.act}
              </span>
            </h4>
            <p class="shot-action-text">${shot.action}</p>
            <div class="shot-tech-tags">
              <span class="tech-tag"><strong>Lensa & Gerakan:</strong> ${shot.lensAndMove}</span>
              <span class="tech-tag"><strong>Lighting & Mood:</strong> ${shot.lighting}</span>
            </div>
          </div>

          <!-- Kolom Kanan: Voice Over & Audio Cue -->
          <div class="shot-audio-col">
            <div class="vo-box">
              <div class="vo-label">🎙️ Voice Over (${shot.timeLabel})</div>
              <div class="vo-quote">"${shot.vo}"</div>
              <div style="font-size:0.73rem; color:var(--text-muted); margin-top:0.3rem;">
                💡 <em>Intonasi: ${shot.voNote}</em>
              </div>
            </div>
            <div class="sfx-row">
              <strong>🔊 Audio / SFX:</strong> ${shot.sfx}
            </div>
          </div>
        </article>
      `;
    })
    .join("");
}

// Initialize Event Listeners
document.addEventListener("DOMContentLoaded", () => {
  renderShotsList();
  updateSimulatorUI(0);
  updateProgressCounter();

  const playBtn = document.getElementById("playSimBtn");
  if (playBtn) playBtn.addEventListener("click", togglePlayback);

  const resetBtn = document.getElementById("resetSimBtn");
  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      if (isPlaying) togglePlayback();
      jumpToSecond(0);
    });
  }

  const speedBtn = document.getElementById("speedSimBtn");
  if (speedBtn) {
    speedBtn.addEventListener("click", () => {
      const speeds = [1, 2, 4];
      const nextIdx = (speeds.indexOf(playbackSpeed) + 1) % speeds.length;
      playbackSpeed = speeds[nextIdx];
      speedBtn.textContent = `⚡ Kecepatan: ${playbackSpeed}x`;
    });
  }

  const slider = document.getElementById("timelineSlider");
  if (slider) {
    slider.addEventListener("input", (e) => {
      currentSecond = Number(e.target.value);
      updateSimulatorUI(currentSecond);
    });
  }

  // Filter Tabs
  document.querySelectorAll(".filter-tab").forEach((tab) => {
    tab.addEventListener("click", () => {
      document.querySelectorAll(".filter-tab").forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");
      activeActFilter = tab.dataset.act;
      renderShotsList();
    });
  });

  // Search Input
  const searchInput = document.getElementById("shotSearchInput");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value;
      renderShotsList();
    });
  }

  // Teleprompter Modal Controls
  const openTpBtn = document.getElementById("openTeleprompterBtn");
  const closeTpBtn = document.getElementById("closeTeleprompterBtn");
  const tpModal = document.getElementById("teleprompterModal");

  if (openTpBtn && tpModal) {
    openTpBtn.addEventListener("click", () => {
      tpModal.classList.add("open");
    });
  }
  if (closeTpBtn && tpModal) {
    closeTpBtn.addEventListener("click", () => {
      tpModal.classList.remove("open");
    });
  }
});

