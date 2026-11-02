const SHOTS_DATA = [
  // BAGIAN 1: THE CHOSEN STAGE (00:00 - 00:30)
  {
    id: 1,
    code: "SHOT 01",
    act: 1,
    actName: "Bagian 1 — Panggung Pilihan & Ilusi Korea (00:00 – 00:30)",
    startSec: 0,
    endSec: 8,
    duration: 8,
    timeLabel: "00:00 – 00:08",
    title: "Montase Layar Menyala & Ekspektasi Gemerlap Korea",
    camera: "ECU Layar HP + Fast-Cut Montage (0.8 dtk/klip)",
    lensAndMove: "35mm f/1.8 • Whip Pan & Match Cut",
    visualIcon: "📱✨",
    bgGradient: "linear-gradient(135deg, #500724 0%, #831843 50%, #311042 100%)",
    action: "Dari kegelapan, layar HP menyala terang. Fast-cut video estetik tentang Korea di media sosial: gemerlap lampu Seoul di malam hari, kafe estetik Hongdae, dan indahnya pohon musim gugur / salju pertama.",
    lighting: "High-key, saturasi tinggi, pantulan cahaya layar neon hangat di kegelapan.",
    sfx: "SFX bunyi 'Pop!' notifikasi Instagram Likes beruntun + Musik Pop-Upbeat ceria mengalun.",
    vo: "Kalau hidup itu soal pilihan... kita pasti selalu memilih panggung yang seru, tempat yang gemerlap, dan bikin orang lain kagum.",
    voNote: "Nada suara ceria dan percaya diri, mencerminkan ilusi kehidupan luar negeri yang sempurna."
  },
  {
    id: 2,
    code: "SHOT 02",
    act: 1,
    actName: "Bagian 1 — Panggung Pilihan & Ilusi Korea (00:00 – 00:30)",
    startSec: 8,
    endSec: 18,
    duration: 10,
    timeLabel: "00:08 – 00:18",
    title: "Senyum Puas Helen di Balik Layar 6 Inci",
    camera: "Close-Up (CU) Wajah Helen",
    lensAndMove: "50mm f/1.4 • Slow Push-In tipis",
    visualIcon: "😊📲",
    bgGradient: "linear-gradient(135deg, #4a044e 0%, #701a75 60%, #1e1b4b 100%)",
    action: "Kamera fokus ke wajah Helen yang sedang tersenyum menatap HP, melihat respons teman-teman di Indonesia yang memuji kehidupannya yang terlihat keren di Korea.",
    lighting: "Key light lembut dari arah layar HP menerangi wajah Helen.",
    sfx: "Musik Pop-Upbeat berlanjut + SFX suara scroll layar HP yang halus.",
    vo: "Di layar enam inci ini, kita bebas memamerkan tempat terbaik kita.",
    voNote: "Penekanan pada kata 'layar enam inci' dan 'tempat terbaik'."
  },
  {
    id: 3,
    code: "SHOT 03",
    act: 1,
    actName: "Bagian 1 — Panggung Pilihan & Ilusi Korea (00:00 – 00:30)",
    startSec: 18,
    endSec: 30,
    duration: 12,
    timeLabel: "00:18 – 00:30",
    title: "Unggah Feeds: 'Living My Dream in South Korea'",
    camera: "Over-The-Shoulder (OTS) ke Insert Layar HP",
    lensAndMove: "50mm Macro / Close Focus • Handheld halus",
    visualIcon: "📸🇰🇷",
    bgGradient: "linear-gradient(135deg, #701a75 0%, #3b0764 70%, #090b10 100%)",
    action: "Helen mengunggah foto berlatar pemandangan kota Seoul dengan caption: 'Living my dream in South Korea ✨' lalu menekan tombol Share.",
    lighting: "Cahaya layar HP mendominasi frame, kontras mulai menajam.",
    sfx: "SFX ketikan keyboard cepat, bunyi 'Whoosh' upload terkirim.",
    vo: "Semuanya harus terlihat sempurna... seolah kita sedang menjalani mimpi semua orang.",
    voNote: "Kalimat melambat menjelang akhir detik 30 sebelum musik terputus mendadak."
  },

  // BAGIAN 2: THE COLD REALITY & "WHY KOREA?" (00:30 - 01:12)
  {
    id: 4,
    code: "SHOT 04",
    act: 2,
    actName: "Bagian 2 — Dinginnya Rantau: 'Kenapa Korea?' (00:30 – 01:12)",
    startSec: 30,
    endSec: 40,
    duration: 10,
    timeLabel: "00:30 – 00:40",
    title: "Senyum Luntur & HP Dilempar ke Kasur One-Room",
    camera: "Medium Close-Up (MCU) Helen di Kamar One-Room",
    lensAndMove: "50mm • Static Tripod (Dingin & Statis)",
    visualIcon: "🥀📴",
    bgGradient: "linear-gradient(135deg, #090b10 0%, #0f172a 60%, #1e293b 100%)",
    action: "Senyum Helen perlahan luntur menjadi tatapan kosong dan sangat letih. Ia mengunci layar HP (layar mati seketika) lalu melempar HP-nya ke kasur kamar one-room / gosiwon Korea yang sempit.",
    lighting: "Saat layar HP mati, cahaya hangat lenyap—hanya tersisa cahaya biru dingin jendela malam (4200K).",
    sfx: "MUSIK BERHENTI TOTAL (Hard Cut). Terdengar 'KLIK' tombol lock, kasur berderit pelan, dan helaan napas berat Helen.",
    vo: "[Jeda hening 3 detik... hembusan napas lelah] Tapi begitu layar itu mati... kenyataannya tak sehangat di foto.",
    voNote: "Transisi emosional tajam: suara VO berubah lirih, dekat di telinga, jujur, dan rapuh."
  },
  {
    id: 5,
    code: "SHOT 05",
    act: 2,
    actName: "Bagian 2 — Dinginnya Rantau: 'Kenapa Korea?' (00:30 – 01:12)",
    startSec: 40,
    endSec: 50,
    duration: 10,
    timeLabel: "00:40 – 00:50",
    title: "Jalan Pulang Menembus Angin Musim Dingin Korea",
    camera: "Tracking Wide Shot — Jalanan Malam Kota Korea",
    lensAndMove: "35mm • Dolly Track mengikuti punggung Helen berbalut long padding",
    visualIcon: "❄️🚶‍♀️",
    bgGradient: "linear-gradient(135deg, #020617 0%, #0f172a 65%, #172554 100%)",
    action: "Helen berjalan sendirian pulang dari kampus/lab/kerja di malam hari. Memakai mantel tebal (long padding), napas berasap di udara dingin bersalju, menatap plang toko bertuliskan huruf Hangul yang asing.",
    lighting: "Low-key cold blue, lampu jalan merkuri dingin, salju samar turun di aspal.",
    sfx: "Suara deru angin musim dingin Korea berhembus kencang + langkah sepatu di jalanan dingin.",
    vo: "Musim dingin yang menusuk, bahasa yang asing, dan jarak ribuan kilometer dari rumah.",
    voNote: "Tempo lambat, beri ruang penonton merasakan rasa terasing seorang perantau."
  },
  {
    id: 6,
    code: "SHOT 06",
    act: 2,
    actName: "Bagian 2 — Dinginnya Rantau: 'Kenapa Korea?' (00:30 – 01:12)",
    startSec: 50,
    endSec: 58,
    duration: 8,
    timeLabel: "00:50 – 00:58",
    title: "Melamun Menatap Jendela Bus Kota Korea",
    camera: "Side Profile / Reflection Shot dari Dalam Bus",
    lensAndMove: "50mm f/1.4 • Bokeh lampu jalanan kota Seoul di kaca bus",
    visualIcon: "🚌🇰🇷",
    bgGradient: "linear-gradient(135deg, #0c192c 0%, #1e293b 60%, #090b10 100%)",
    action: "Helen duduk menyandarkan kepalanya ke kaca jendela bus kota Korea. Menatap deretan gedung apartemen tinggi tanpa ada satu pun orang yang ia kenal.",
    lighting: "Lampu neon jalanan yang melintas memantul samar di wajah Helen.",
    sfx: "Suara mesin bus kota yang teredam + pengumuman halte dalam bahasa Korea samar di latar belakang.",
    vo: "Enggak ada satu pun dari kita yang mau ada di tempat seberat dan sesepi ini.",
    voNote: "Suara lelah dan hampa."
  },
  {
    id: 7,
    code: "SHOT 07",
    act: 2,
    actName: "Bagian 2 — Dinginnya Rantau: 'Kenapa Korea?' (00:30 – 01:12)",
    startSec: 58,
    endSec: 66,
    duration: 8,
    timeLabel: "00:58 – 01:06",
    title: "Pesan Curhat KakaoTalk Dihapus: 'Jujur Gue Capek di Korea'",
    camera: "Extreme Close-Up (ECU) Layar HP",
    lensAndMove: "Macro / 50mm Close-Up • Fokus tajam pada ketikan teks",
    visualIcon: "💬⌫",
    bgGradient: "linear-gradient(135deg, #111827 0%, #1f2937 60%, #090b10 100%)",
    action: "Jari Helen mengetik di grup chat: 'Guys, jujur gue capek bgt di Korea... ngerasa salah tempat dan pengen pulang'. Ia terdiam beberapa detik, ragu, lalu menekan backspace menghapus semua teks hingga bersih.",
    lighting: "Cahaya layar HP menerangi jemari Helen di kamar remang.",
    sfx: "SFX ketikan cepat, bunyi backspace terus-menerus hingga sunyi.",
    vo: "[Biarkan 4 detik hening agar penonton membaca teks pesan] Dan sering kali kita bertanya dalam hati...",
    voNote: "Jeda tanpa kata agar pesan 'pengen pulang' terserap kuat oleh penonton."
  },
  {
    id: 8,
    code: "SHOT 08",
    act: 2,
    actName: "Bagian 2 — Dinginnya Rantau: 'Kenapa Korea?' (00:30 – 01:12)",
    startSec: 66,
    endSec: 72,
    duration: 6,
    timeLabel: "01:06 – 01:12",
    title: "Menatap Cermin: 'Tuhan, Kenapa Harus Korea?'",
    camera: "Over-The-Shoulder Mirror Shot",
    lensAndMove: "50mm • Fokus pada mata Helen yang berkaca-kaca di cermin",
    visualIcon: "🪞😢",
    bgGradient: "linear-gradient(135deg, #090b10 0%, #1e1b4b 60%, #020617 100%)",
    action: "Helen menatap pantulan dirinya di cermin wastafel sempit. Matanya memerah menahan tangis dan kebingungan arah hidup.",
    lighting: "Sidelight remang, kontras bayangan tajam di wajah Helen.",
    sfx: "Nada piano minor rendah yang menggantung sendu.",
    vo: "Tuhan... kenapa harus Korea? Kenapa aku harus ada di tempat yang bukan keinginanku ini?",
    voNote: "Pertanyaan inti eksistensial film. Ucapkan dengan rasa kepedihan yang tulus."
  },

  // BAGIAN 3: THE BETHLEHEM PARADIGM & LUKAS 2:1-7 (01:12 - 02:10)
  {
    id: 9,
    code: "SHOT 09",
    act: 3,
    actName: "Bagian 3 — Palungan Betlehem & Refleksi Lukas 2:1–7 (01:12 – 02:10)",
    startSec: 72,
    endSec: 80,
    duration: 8,
    timeLabel: "01:12 – 01:20",
    title: "Berbaring Menatap Langit-Langit di Malam Dingin",
    camera: "High-Angle / Bird's-Eye View (Top-Down)",
    lensAndMove: "24mm Wide • Kamera tepat di atas kasur, perlahan bergerak halus",
    visualIcon: "🛌💭",
    bgGradient: "linear-gradient(135deg, #17153b 0%, #2e236c 60%, #090b10 100%)",
    action: "Helen terbaring menatap langit-langit kamarnya yang sunyi. Di samping bantal, HP tergeletak pasif.",
    lighting: "Nuansa biru malam musim dingin mulai disusupi cahaya hangat tipis.",
    sfx: "Hening sejenak sebelum nada notifikasi KakaoTalk terdengar.",
    vo: "[Jeda reflektif — masa transisi dari keputusasaan menuju harapan]",
    voNote: "Biarkan jeda 8 detik ini menjadi ruang bernapas sebelum notifikasi masuk."
  },
  {
    id: 10,
    code: "SHOT 10",
    act: 3,
    actName: "Bagian 3 — Palungan Betlehem & Refleksi Lukas 2:1–7 (01:12 – 02:10)",
    startSec: 80,
    endSec: 88,
    duration: 8,
    timeLabel: "01:20 – 01:28",
    title: "Undangan Natal Komunitas Diaspora: 'Ada Masakan Indonesia'",
    camera: "Insert Close-Up Layar HP -> Rack Focus ke Mata Helen",
    lensAndMove: "50mm • Rack focus dari notifikasi HP ke ekspresi wajah Helen",
    visualIcon: "💛🎄",
    bgGradient: "linear-gradient(135deg, #2e1065 0%, #4c1d95 55%, #78350f 100%)",
    action: "Layar HP menyala dengan pop-up pesan KakaoTalk dari teman persekutuan: 'Helen, besok dateng ibadah Natal ya? Nanti ada masakan Indonesia juga 🎄'. Helen menoleh dan menatap pesan itu.",
    lighting: "Cahaya kuning keemasan dari layar HP memantul hangat di pipi Helen.",
    sfx: "SFX bunyi 'Katalk!' yang jernih + denting nada pertama Piano Akustik hangat mulai masuk.",
    vo: "Awalnya aku ragu... buat apa bawa hati yang lelah dan penuh tanda tanya ini ke hadapan Tuhan?",
    voNote: "Intonasi mulai berubah dari keputusasaan menuju keraguan yang mulai melunak."
  },
  {
    id: 11,
    code: "SHOT 11",
    act: 3,
    actName: "Bagian 3 — Palungan Betlehem & Refleksi Lukas 2:1–7 (01:12 – 02:10)",
    startSec: 88,
    endSec: 101,
    duration: 13,
    timeLabel: "01:28 – 01:41",
    title: "Duduk Ragu di Barisan Paling Belakang Gereja",
    camera: "Wide OTS dari Belakang Helen -> Medium Shot Helen",
    lensAndMove: "50mm f/1.8 • Depth of field dangkal, jemaat di depan berlatar hangat",
    visualIcon: "⛪🙏",
    bgGradient: "linear-gradient(135deg, #311042 0%, #581c87 50%, #78350f 100%)",
    action: "Keesokan harinya, Helen melangkah masuk ibadah Natal persekutuan Indonesia di Korea dengan ragu. Ia duduk sendirian di barisan paling belakang, memandangi jemaat di depannya yang sedang memuji Tuhan.",
    lighting: "Warm tungsten lampu gereja berpadu hiasan lampu Natal yang bokeh lembut.",
    sfx: "Suara nyanyian jemaat menyanyikan lagu Natal berbahasa Indonesia samar-samar menyatu dengan piano pengiring.",
    vo: "Tapi hari itu, di tengah firman yang disampaikan, aku diingatkan pada kisah Natal pertama... Dua ribu tahun lalu, Maria dan Yusuf pun tidak pernah memilih harus menempuh perjalanan berat ke Betlehem.",
    voNote: "Mulai masuk ke teologi Lukas 2:1-7. Sebut nama Maria, Yusuf, dan Betlehem dengan penuh perenungan."
  },
  {
    id: 12,
    code: "SHOT 12",
    act: 3,
    actName: "Bagian 3 — Palungan Betlehem & Refleksi Lukas 2:1–7 (01:12 – 02:10)",
    startSec: 101,
    endSec: 115,
    duration: 14,
    timeLabel: "01:41 – 01:55",
    title: "Rangkulan Hangat Sesama Perantau & Makna Palungan",
    camera: "Medium Two-Shot (Slow Motion 60fps ke 24fps)",
    lensAndMove: "50mm • Handheld intim menangkap kehangatan senyum teman menyapa",
    visualIcon: "🫂💛",
    bgGradient: "linear-gradient(135deg, #4c1d95 0%, #92400e 60%, #b45309 100%)",
    action: "Seorang teman menghampiri kursi belakang, merangkul bahu Helen dengan senyum tulus, dan menyapa ramah dalam bahasa Indonesia. Helen tertegun, dinding pertahanan hatinya runtuh.",
    lighting: "Cahaya keemasan lembut menyinari Helen dan temannya.",
    sfx: "Musik Strings & Piano membubung hangat (Crescendo emosional).",
    vo: "Di sana, tidak ada tempat bagi mereka di penginapan. Namun di palungan yang hina—tempat yang tidak seorang pun manusia ingin pilih—Allah justru memilih menyatakan rencana keselamatan-Nya.",
    voNote: "Klimaks teologis Lukas 2:7: menghubungkan palungan yang tak dipilih dengan situasi Helen."
  },
  {
    id: 13,
    code: "SHOT 13",
    act: 3,
    actName: "Bagian 3 — Palungan Betlehem & Refleksi Lukas 2:1–7 (01:12 – 02:10)",
    startSec: 115,
    endSec: 130,
    duration: 15,
    timeLabel: "01:55 – 02:10",
    title: "Montase Kesibukan Mahasiswa & Pekerja Indonesia di Korea",
    camera: "3 Klip Medium Shot (@ 4 dtk) — Realita Diaspora di Korea",
    lensAndMove: "35mm Documentary Style • Handheld dinamis dan membumi",
    visualIcon: "🔬💼🏭",
    bgGradient: "linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #78350f 100%)",
    action: "Montase kehidupan nyata orang-orang Indonesia di Korea: (1) Mahasiswa lelah berkutat di laboratorium/tugas kampus larut malam, (2) Pekerja pabrik/lapangan menatap dinginnya mesin dengan tekun, (3) Pemuda menghela napas di sela kerja part-time namun tersenyum melihat foto keluarga.",
    lighting: "Natural workplace lighting dengan nuansa hangat yang mulai tumbuh.",
    sfx: "Ambience suara keyboard lab, mesin kerja berpadu indah dengan strings musik orkestra.",
    vo: "Kita semua ditempatkan di lingkungan dan kesibukan masing-masing di negeri ini. Tempat yang awalnya kita rasa asing dan bukan keinginan kita... ternyata menyimpan rencana Allah yang sedang bekerja.",
    voNote: "Visual montase para pekerja/mahasiswa kini terhubung sempurna dengan pesan penempatan Tuhan."
  },

  // BAGIAN 4: GOD'S CHOSEN GROUND & RESTORATION (02:10 - 03:00)
  {
    id: 14,
    code: "SHOT 14",
    act: 4,
    actName: "Bagian 4 — Tempat Terbaik yang Disiapkan Allah (02:10 – 03:00)",
    startSec: 130,
    endSec: 143,
    duration: 13,
    timeLabel: "02:10 – 02:23",
    title: "Helen & Teman-Teman Aktif Melayani Bersama di Gereja",
    camera: "Medium Tracking Shot mengikuti aktivitas Helen",
    lensAndMove: "35mm Gimbal Smooth • Gerakan dinamis, penuh energi positif",
    visualIcon: "🙌✨",
    bgGradient: "linear-gradient(135deg, #78350f 0%, #b45309 55%, #d97706 100%)",
    action: "Helen kini tersenyum lepas, aktif melayani menyambut sesama perantau yang baru pertama kali datang ke gereja, membagikan buku warta dengan sukacita bersama rekan-rekannya.",
    lighting: "Terang, hangat, penuh pendar cahaya keemasan Natal.",
    sfx: "Musik pujian Natal instrumental bernada sukacita dan penuh harapan.",
    vo: "Dia memulihkanku, menguatkan langkahku, dan memberikan keluarga baru di tanah perantauan ini.",
    voNote: "Suara hangat, berseri-seri, penuh rasa syukur."
  },
  {
    id: 15,
    code: "SHOT 15",
    act: 4,
    actName: "Bagian 4 — Tempat Terbaik yang Disiapkan Allah (02:10 – 03:00)",
    startSec: 143,
    endSec: 155,
    duration: 12,
    timeLabel: "02:23 – 02:35",
    title: "Makan Bersama Makanan Rumah: Rumah Kedua di Korea",
    camera: "Wide to Medium Group Shot mengelilingi meja persekutuan",
    lensAndMove: "35mm • Panning hangat menangkap gelak tawa dan kehangatan makan bersama",
    visualIcon: "🍲😄",
    bgGradient: "linear-gradient(135deg, #92400e 0%, #d97706 60%, #f59e0b 100%)",
    action: "Helen dan teman-teman berkumpul mengelilingi meja makan yang menyajikan masakan Indonesia hangat. Mereka saling menyuap, tertawa lepas, dan merasakan kehangatan rumah di tengah dinginnya Korea.",
    lighting: "Cozy warm indoor dining light.",
    sfx: "Suara riuh tawa bahagia samar-samar mengiringi alunan musik orkestra.",
    vo: "Sekarang aku mengerti... berada di Korea mungkin bukan rencana awal yang kuinginkan. Tapi bagi Allah, ini bukan kebetulan. Ini adalah tempat terbaik yang sudah Dia siapkan untuk membentukku.",
    voNote: "Penegasan tema utama: Korea bukan kebetulan, melainkan tempat terbaik yang disiapkan Allah."
  },
  {
    id: 16,
    code: "SHOT 16",
    act: 4,
    actName: "Bagian 4 — Tempat Terbaik yang Disiapkan Allah (02:10 – 03:00)",
    startSec: 155,
    endSec: 166,
    duration: 11,
    timeLabel: "02:35 – 02:46",
    title: "Senyum Damai Helen & Pesan Penguatan untuk Perantau",
    camera: "Medium Close-Up (MCU) Helen di Dekat Jendela Bersalju",
    lensAndMove: "50mm f/1.4 • Slow motion lembut, fade to black di akhir detik 165",
    visualIcon: "🕯️🤍",
    bgGradient: "linear-gradient(135deg, #78350f 0%, #451a03 65%, #090b10 100%)",
    action: "Helen menatap ke luar jendela yang dihiasi butiran salju musim dingin Korea. Ia tersenyum damai dengan hati yang penuh kepastian. Layar perlahan memudar ke gelap (Fade to Black).",
    lighting: "Bokeh lampu Natal berkelap-kelip lembut memantul di kaca jendela.",
    sfx: "Musik perlahan melembut menjadi petikan nada piano akustik yang syahdu.",
    vo: "Jadi, buat kamu yang hari ini berada di tempat yang bukan keinginanmu dan datang dengan hati yang capek... tenang aja. Allah yang memelihara Maria dan Yusuf ada di sini bersamamu. Kamu tidak sendirian.",
    voNote: "Sapaan personal penutup langsung ke hati jemaat perantau yang sedang mendengar."
  },
  {
    id: 17,
    code: "SHOT 17",
    act: 4,
    actName: "Bagian 4 — Tempat Terbaik yang Disiapkan Allah (02:10 – 03:00)",
    startSec: 166,
    endSec: 174,
    duration: 8,
    timeLabel: "02:46 – 02:54",
    title: "Title Card Utama: Refleksi Teologis Lukas 2:1–7",
    camera: "On-Screen Typography di atas Layar Hitam",
    lensAndMove: "Text Fade-In elegan di tengah layar",
    visualIcon: "✨📜",
    bgGradient: "linear-gradient(135deg, #090b10 0%, #1c1917 50%, #090b10 100%)",
    action: "Layar hitam pekat. Muncul tipografi emas-putih elegan: “Allah memilih tempat yang tidak kita pilih, untuk menggenapi rencana-Nya yang terbaik.” (Refleksi Lukas 2:1–7)",
    lighting: "Pure Black Background (#090b10) dengan teks emas bersinar lembut.",
    sfx: "Chime hangat & akor string orkestra panjang yang menenangkan.",
    vo: "[Teks di Layar]: “Allah memilih tempat yang tidak kita pilih, untuk menggenapi rencana-Nya yang terbaik.” (Lukas 2:1–7)",
    voNote: "Hening tanpa VO agar jemaat merenungkan ayat dan teks penutup."
  },
  {
    id: 18,
    code: "SHOT 18",
    act: 4,
    actName: "Bagian 4 — Tempat Terbaik yang Disiapkan Allah (02:10 – 03:00)",
    startSec: 174,
    endSec: 180,
    duration: 6,
    timeLabel: "02:54 – 03:00",
    title: "Closing Card: Salam Hangat untuk Keluarga Perantau",
    camera: "Sub-Typography Card & Final Fade Out",
    lensAndMove: "Fade-in teks kedua di bawah teks utama -> Fade to Black",
    visualIcon: "🎄🇰🇷",
    bgGradient: "linear-gradient(135deg, #090b10 0%, #291d0e 50%, #090b10 100%)",
    action: "Muncul tulisan penutup di bawahnya: “Terima kasih sudah menjadi bagian dari keluarga ini... Selamat Hari Natal untuk seluruh perantau di Korea.”",
    lighting: "Pendaran emas memudar perlahan ke hitam pekat sempurna.",
    sfx: "Dentingan nada terakhir piano menggema lembut (Reverb Tail) hingga hening di 03:00.",
    vo: "[Teks di Layar]: “Selamat Hari Natal untuk seluruh perantau di Korea.”",
    voNote: "Lampu ruang ibadah gereja mulai dinyalakan perlahan saat video selesai."
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
