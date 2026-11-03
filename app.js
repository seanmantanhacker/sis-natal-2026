// MASTER SHOT LIST & PRODUCTION DECK DATA
// Based on: "THE UNCHOSEN PLACE — Cinematic Christmas Short Film (Revised Full Script)"
// Theme: Placed with Purpose, Held by Grace • Reflection: Lukas 2:1-7
// Total Runtime: 04:40 (280 Detik) • 7 Scenes + Closing • 20 Detailed Shots

const SHOTS_DATA = [
  // ==========================================
  // SCENE 1 — A NEW BEGINNING (00:00 – 00:20 | 20 dtk)
  // ==========================================
  {
    id: 1,
    code: "SHOT 01",
    sceneNum: 1,
    sceneName: "Scene 1 — A New Beginning (Kedatangan di Korea)",
    startSec: 0,
    endSec: 8,
    duration: 8,
    timeLabel: "00:00 – 00:08",
    title: "Kedatangan di Bandara Incheon & Foto Kabar Keluarga",
    location: "Bandara Internasional Incheon (Terminal 1 / 2 — Gate Kedatangan Internasional)",
    camera: "Medium Shot (MS) -> Close-Up (CU) HP",
    lensAndMove: "35mm f/2.0 • Gimbal Tracking Mundur mengikuti langkah Helen",
    visualIcon: "✈️🇰🇷",
    bgGradient: "linear-gradient(135deg, #064e3b 0%, #047857 50%, #0f172a 100%)",
    action: "Layar hitam sejenak dengan pengumuman bandara. Helen berjalan keluar dari gate kedatangan Bandara Incheon menarik koper. Wajahnya berseri-seri penuh antusiasme. Ia berhenti, mengeluarkan HP, mengambil foto selfie dengan latar plang Incheon Airport, lalu mengirim pesan ke grup keluarga: 'Finally made it to Korea!! 🥹🇰🇷'.",
    propsWardrobe: "Koper pakaian, ransel, paspor/boarding pass di saku, HP dengan wallpaper Indonesia, jaket kasual bandara.",
    lighting: "Clean High-Key Airport Daylight (5600K), pendar neon terang dan modern.",
    dialogue: "Airport PA System (Korea): '승객 여러분, 인천국제공항에 도착하였습니다.' (Para penumpang, kita telah tiba di Bandara Internasional Incheon).",
    sfx: "Ambience dengung bandara internasional, gesekan roda koper di lantai marmer, SFX notifikasi terkirim 'Whoosh'. Musik Pop ceria bersemangat mulai masuk pelan.",
    vo: "[Tanpa VO — Biarkan suara pengumuman bandara dan visual antusiasme Helen membangun eksposisi awal]",
    voNote: "Fokus pada senyum tulus Helen dan rasa lega telah menginjakkan kaki di negara impian."
  },
  {
    id: 2,
    code: "SHOT 02",
    sceneNum: 1,
    sceneName: "Scene 1 — A New Beginning (Kedatangan di Korea)",
    startSec: 8,
    endSec: 14,
    duration: 6,
    timeLabel: "00:08 – 00:14",
    title: "Montase Cepat Pengalaman Menyenangkan di Korea",
    location: "Area Publik Seoul: Trotoar Hongdae, Kafe Estetik, & Gerai Street Food Myeongdong",
    camera: "Fast-Cut Montase (4 Klip @ 1.5 dtk) • Whip Pan & Match Cut",
    lensAndMove: "24mm & 50mm f/1.8 • Handheld Dinamis & Enerjik",
    visualIcon: "☕🍜✨",
    bgGradient: "linear-gradient(135deg, #0284c7 0%, #0369a1 50%, #1e1b4b 100%)",
    action: "Fast-cut montase singkat pengalaman manis Helen di awal tinggal di Korea: (1) Jalan-jalan di trotoar Hongdae penuh tawa, (2) Mengunjungi kafe estetik Seoul sambil mencicipi dessert, (3) Makan tteokbokki/ramyeon hangat bersama teman, (4) Berpose ceria di depan landmark Korea dengan lampu malam.",
    propsWardrobe: "Pakaian kasual stylish anak muda, cup kopi kafe Korea, street food Korea, kamera/HP berfoto.",
    lighting: "Golden Hour hangat & saturasi warna pop cerah, mencerminkan euforia fase honeymoon di Korea.",
    dialogue: "Tidak ada dialog (hanya gelak tawa riang bersama teman-teman yang samar).",
    sfx: "Musik Pop Upbeat semakin naik penuh energi + SFX shutter kamera 'cekrek' dan tawa ceria.",
    vo: "[Tanpa VO — Transisi visual cepat menegaskan ekspektasi hidup yang indah dan menyenangkan]",
    voNote: "Menampilkan kontras tajam sebelum realita keras masuk di Scene 2."
  },
  {
    id: 3,
    code: "SHOT 03",
    sceneNum: 1,
    sceneName: "Scene 1 — A New Beginning (Kedatangan di Korea)",
    startSec: 14,
    endSec: 20,
    duration: 6,
    timeLabel: "00:14 – 00:20",
    title: "Menulis Impian di Kamar Baru: 'MY KOREA GOALS'",
    location: "Kamar Baru Helen (Kamar One-Room / Gosiwon Mahasiswa Baru di Korea)",
    camera: "Over-the-Shoulder (OTS) -> Insert Close-Up Buku Catatan",
    lensAndMove: "50mm Macro f/2.8 • Tilt Down lembut ke tulisan tangan",
    visualIcon: "📖✍️",
    bgGradient: "linear-gradient(135deg, #1e1b4b 0%, #312e81 60%, #4338ca 100%)",
    action: "Helen duduk di meja kamar barunya, membuka notebook baru yang bersih. Dengan pulpen warna, ia menuliskan daftar impiannya: 'MY KOREA GOALS ✨' dengan checkbox: [ ] Graduate, [ ] Find a good job, [ ] Become independent, [ ] Build my future here. Helen tersenyum bangga, menambahkan catatan bawah: 'A new chapter. I can do this!', lalu menutup notebook dengan mantap.",
    propsWardrobe: "Buku catatan aesthetic, pulpen gel, kamar rapi dengan kardus pindahan yang baru dibuka.",
    lighting: "Warm desk lamp (3200K) menerangi buku catatan, menyiratkan kehangatan mimpi masa depan.",
    dialogue: "Helen (bergumam pelan sambil tersenyum): 'A new chapter. I can do this!'",
    sfx: "Goresan pulpen di atas kertas kertas tebal, bunyi 'tap' mantap saat notebook ditutup. Musik ceria mulai memelan.",
    vo: "[Tanpa VO — Karakter menunjukkan tekad kuat dan harapan tinggi atas masa depannya di Korea]",
    voNote: "Buku catatan ini adalah prop kunci yang akan kembali muncul di Scene 3."
  },

  // ==========================================
  // SCENE 2 — WHEN REALITY HITS (00:20 – 01:15 | 55 dtk)
  // ==========================================
  {
    id: 4,
    code: "SHOT 04",
    sceneNum: 2,
    sceneName: "Scene 2 — When Reality Hits (Realita Keras Menghantam)",
    startSec: 20,
    endSec: 29,
    duration: 9,
    timeLabel: "00:20 – 00:29",
    title: "Montage Kuliah: Dinding Bahasa & Begadang Tugas 02:15",
    location: "Ruang Kelas Universitas Korea & Meja Belajar Kamar Helen (Tengah Malam)",
    camera: "Medium Shot Kelas -> Insert Jam Digital & CU Wajah Letih",
    lensAndMove: "50mm f/1.8 • Static Tripod (Tegang dan Membeku)",
    visualIcon: "📚⏱️",
    bgGradient: "linear-gradient(135deg, #0f172a 0%, #1e293b 60%, #334155 100%)",
    action: "Musik ceria perlahan lenyap, digantikan suara dering alarm dan ketukan keyboard cepat. Helen duduk di ruang kelas kampus Korea, berusaha mencerna slide presentasi bahasa Korea yang rumit dengan kening berkerut. Cut to: malam hari di kamar, jam dinding/laptop menunjukkan angka '02:15'. Helen mengusap wajahnya yang lelah luar biasa, menghela napas, lalu kembali mengetik laporan tugas.",
    propsWardrobe: "Kacamata baca, binder tebal berbahasa Korea, laptop dengan tab materi Hangul, mug kopi kosong.",
    lighting: "Fluorescent ruang kelas dingin (4500K) -> Cahaya layar laptop dingin di kamar gelap.",
    dialogue: "Suara dosen Korea mengajar di latar belakang: '다음 주까지 이 리포트를 반드시 제출해야 합니다...' (Laporan ini wajib dikumpulkan minggu depan...).",
    sfx: "Dengung kelas, desah napas letih, ketikan keyboard mekanik monoton.",
    vo: "[Tanpa VO — Realitas beban akademik mahasiswa asing di Korea tersampaikan secara visual murni]",
    voNote: "Tampilkan rasa overwhelmed (kewalahan) dari sorot mata Helen."
  },
  {
    id: 5,
    code: "SHOT 05",
    sceneNum: 2,
    sceneName: "Scene 2 — When Reality Hits (Realita Keras Menghantam)",
    startSec: 29,
    endSec: 38,
    duration: 9,
    timeLabel: "00:29 – 00:38",
    title: "Montage Part-Time: Tekanan Kerja & '헬렌 씨, 빨리!'",
    location: "Restoran / Kafe Korea Tempat Kerja Part-Time (Area Meja Tamu & Trotoar Luar Toko)",
    camera: "Handheld Medium Shot di Tempat Kerja Part-Time",
    lensAndMove: "35mm f/2.0 • Gerakan kamera cepat mengikuti ritme kerja",
    visualIcon: "🛎️🏃‍♀️",
    bgGradient: "linear-gradient(135deg, #18181b 0%, #27272a 60%, #3f3f46 100%)",
    action: "Helen memakai celemek kerja part-time di restoran/kafe Korea, sibuk bolak-balik mengantar piring dan membersihkan meja pelanggan. Atasannya memanggil dengan nada tegas dan terburu-buru. Helen menunduk patuh, menjawab cepat, lalu berlari kecil menyelesaikan pesanan. Cut to: Helen berjalan keluar toko malam hari menenteng tas ransel dengan bahu merosot kelelahan.",
    propsWardrobe: "Celemek kerja hitam, name tag bertuliskan '헬렌' (Helen), nampan pesanan, lap meja.",
    lighting: "Lampu dapur restoran terang benderang yang bising dan menekan.",
    dialogue: "Atasan (tegas): '헬렌 씨, 이것도 빨리 부탁해요!' (Helen, tolong yang ini juga cepat ya!)\nHelen (tergesa-gesa): '아, 네! 바로 하겠습니다!' (Ah, ya! Segera saya kerjakan!)",
    sfx: "Dentang piring/gelas restoran, bel pintu masuk 'cling', langkah tergesa-gesa.",
    vo: "[Tanpa VO — Menunjukkan perjuangan fisik mencari nafkah di sela padatnya kuliah]",
    voNote: "Kontras antara wajah tersenyum ke pelanggan dan ekspresi layu saat atasan membelakanginya."
  },
  {
    id: 6,
    code: "SHOT 06",
    sceneNum: 2,
    sceneName: "Scene 2 — When Reality Hits (Realita Keras Menghantam)",
    startSec: 38,
    endSec: 46,
    duration: 8,
    timeLabel: "00:38 – 00:46",
    title: "Montage Keuangan: Cek Rekening & Pembatalan Pembelian",
    location: "Kamar One-Room Helen (Area Meja Belajar & Kasur Sempit)",
    camera: "Extreme Close-Up (ECU) Layar HP -> MCU Helen Termenung",
    lensAndMove: "50mm Macro f/2.8 • Slow Rack Focus ke wajah Helen",
    visualIcon: "💳📉",
    bgGradient: "linear-gradient(135deg, #1c1917 0%, #292524 60%, #44403c 100%)",
    action: "Helen membuka aplikasi mobile banking di HP dan buku catatan pengeluaran bulanan. Jemarinya menelusuri angka biaya sewa kamar (월세), tagihan pemanas (난방비), makan, dan transportasi yang membengkak. Ia melihat keranjang belanja online barang yang ia idamkan, ragu sejenak, lalu menekan tombol 'Cancel / Batal'. Helen meletakkan kalkulator dengan wajah cemas.",
    propsWardrobe: "Buku catatan pengeluaran, struk belanja mart Korea, kalkulator kecil, baju rumah santai.",
    lighting: "Low-key kamar malam, dominasi cahaya putih kebiruan layar HP ke wajah.",
    dialogue: "Tidak ada dialog (hanya desah napas tertahan).",
    sfx: "SFX ketukan tombol HP kalkulator, bunyi 'click' pembatalan transaksi, hening berat.",
    vo: "[Tanpa VO — Tekanan finansial perantau di negeri orang tanpa sokongan penuh]",
    voNote: "Ekspresi realistis tentang perhitungan hidup yang menuntut pengorbanan."
  },
  {
    id: 7,
    code: "SHOT 07",
    sceneNum: 2,
    sceneName: "Scene 2 — When Reality Hits (Realita Keras Menghantam)",
    startSec: 46,
    endSec: 55,
    duration: 9,
    timeLabel: "00:46 – 00:55",
    title: "Montage Masa Depan: Email Penolakan 'Thank You For Your Interest'",
    location: "Kamar One-Room Helen (Meja Belajar / Depan Layar Laptop)",
    camera: "OTS Layar Laptop -> Close-Up Mata Helen",
    lensAndMove: "50mm f/1.8 • Static Hold fokus pada baris teks email",
    visualIcon: "📧❌",
    bgGradient: "linear-gradient(135deg, #1e1b4b 0%, #0f172a 60%, #020617 100%)",
    action: "Helen membuka portal pencarian kerja di Korea, menatap deretan persyaratan visa dan bahasa yang berat. Notifikasi email baru masuk. Helen mengkliknya penuh harap. Di layar muncul kalimat pembuka: 'Thank you for your interest in our company. Unfortunately, at this time...'. Helen terdiam membeku. Tangannya perlahan menurunkan layar laptop hingga tertutup rapat.",
    propsWardrobe: "Laptop dengan stiker kampus, dokumen CV/resume dalam map di samping meja.",
    lighting: "Cahaya dingin layar laptop perlahan meredup saat ditutup, menyisakan kegelapan kamar.",
    dialogue: "Teks di Layar: 'Thank you for your interest in our company. Unfortunately, we have decided to move forward with other candidates...'",
    sfx: "Bunyi klik mouse pelan, bunyi 'thud' halus saat laptop ditutup rapat.",
    vo: "[Tanpa VO — Realitas penolakan dan keraguan masa depan karir di negeri orang]",
    voNote: "Kekecewaan yang tertahan tanpa tangisan dramatis, justru lebih menyayat hati."
  },
  {
    id: 8,
    code: "SHOT 08",
    sceneNum: 2,
    sceneName: "Scene 2 — When Reality Hits (Realita Keras Menghantam)",
    startSec: 55,
    endSec: 67,
    duration: 12,
    timeLabel: "00:55 – 01:07",
    title: "Montage Pertemanan Gereja: Miskomunikasi & Chat Dihapus",
    location: "Gedung Gereja (Hall Persiapan / Panggung) & Kamar One-Room Helen (Malam)",
    camera: "Medium Shot Ruang Gereja -> ECU Layar Chat KakaoTalk",
    lensAndMove: "35mm & 50mm f/1.8 • Cut to Insert HP di malam hari",
    visualIcon: "⛪💬⌫",
    bgGradient: "linear-gradient(135deg, #3b0764 0%, #2e1065 60%, #090b10 100%)",
    action: "Helen sedang membantu persiapan kegiatan di ruang gereja bersama rekan pelayanan. Terjadi kesalahpahaman tugas. Teman gereja: 'Kak, bukannya bagian ini tadi kakak yang handle?'. Helen (tertekan): 'Iya, tapi aku belum sempat. Tadi ada urusan kuliah sama kerjaan juga...'. Teman: 'Oh... kirain udah selesai.' Teman pergi. Helen terdiam kaku. Cut to malam hari di kamar: Helen mengetik chat: 'Maaf ya tadi, aku sebenarnya...', ragu, lalu menekan backspace menghapus pesannya.",
    propsWardrobe: "Peralatan dekorasi gereja, kabel proyektor / backdrop, HP dengan layar KakaoTalk.",
    lighting: "Lampu ruangan gereja semi-redup -> Cahaya layar HP di kamar gelap.",
    dialogue: "Teman Gereja: 'Kak, bukannya bagian ini tadi kakak yang handle?'\nHelen: 'Iya, tapi aku belum sempat. Tadi ada urusan kuliah sama kerjaan juga...'\nTeman Gereja: 'Oh... kirain udah selesai.'",
    sfx: "Langkah kaki menjauh di lantai ubin gereja, SFX ketikan cepat dan bunyi tombol backspace beruntun.",
    vo: "[Tanpa VO — Menunjukkan konflik relasional di lingkungan yang harusnya jadi tempat aman]",
    voNote: "Rasa bersalah bercampur lelah karena merasa gagal memenuhi ekspektasi semua orang."
  },
  {
    id: 9,
    code: "SHOT 09",
    sceneNum: 2,
    sceneName: "Scene 2 — When Reality Hits (Realita Keras Menghantam)",
    startSec: 67,
    endSec: 75,
    duration: 8,
    timeLabel: "01:07 – 01:15",
    title: "Montage Kesepian: Video Call Keluarga & Senyum Topeng",
    location: "Kamar One-Room Helen (Sudut Kasur / Kamar Redup)",
    camera: "Close-Up Wajah Helen menatap layar Video Call HP",
    lensAndMove: "50mm f/1.4 • Slow Push-In tipis ke tatapan mata",
    visualIcon: "📱🏡",
    bgGradient: "linear-gradient(135deg, #090b10 0%, #0c192c 60%, #020617 100%)",
    action: "Helen sedang melakukan video call bersama keluarganya di Indonesia. Di layar kecil tampak wajah ibu/keluarga yang tersenyum hangat bertanya: 'Gimana di Korea? Baik-baik aja?'. Helen memaksakan senyum paling manisnya: 'Iya, baik kok!'. Panggilan berakhir (bunyi nada 'tut-tut-tut'). Senyum Helen langsung luntur total. Kamera mundur perlahan memperlihatkan Helen duduk sendirian di sudut kamar yang dingin dan sunyi.",
    propsWardrobe: "HP dengan tampilan video call keluarga di Indonesia, jaket tebal di kasur kamar sempit.",
    lighting: "Cahaya hangat dari layar panggilan video mendadak padam menjadi temaram biru gelap (4000K).",
    dialogue: "Suara Ibu di HP: 'Gimana di Korea? Baik-baik aja, Nak?'\nHelen (tersenyum tegar): 'Iya, baik kok!'",
    sfx: "SFX nada panggilan video terputus 'hang-up', helaan napas berat dalam keheningan total. Musik instrumental cello/piano minor mulai mengalir berat.",
    vo: "[Tanpa VO — Rasa kesepian paling intim seorang anak rantau yang menelan kepedihannya sendiri]",
    voNote: "Titik balik emosional terendah sebelum masuk ke monolog pergumulan di Scene 3."
  },

  // ==========================================
  // SCENE 3 — THE QUESTION (01:15 – 01:45 | 30 dtk)
  // ==========================================
  {
    id: 10,
    code: "SHOT 10",
    sceneNum: 3,
    sceneName: "Scene 3 — The Question (Pertanyaan Eksistensial)",
    startSec: 75,
    endSec: 85,
    duration: 10,
    timeLabel: "01:15 – 01:25",
    title: "Jalan Pulang Malam Hari & Kilasan Flashback Kafe",
    location: "Trotoar Jalanan Malam Kota Korea & Luar Kafe Berpintu Kaca Hangat",
    camera: "Tracking Shot Helen di Trotoar -> Flashback CU (2 dtk) -> Kembali ke Realita",
    lensAndMove: "35mm f/1.8 • Handheld Halus -> Match Cut Flashback Warm -> Cold Winter",
    visualIcon: "🚶‍♀️❄️💭",
    bgGradient: "linear-gradient(135deg, #020617 0%, #0f172a 60%, #1e1b4b 100%)",
    action: "Helen berjalan pulang sendirian pada malam hari menembus dinginnya kota Korea. Langkahnya melambat saat melewati sebuah kafe estetik dengan lampu kaca hangat yang dulu sering ia kunjungi bersama teman-temannya. FLASHBACK (2 dtk): Helen tertawa lepas bersama teman-temannya di dalam kafe hangat. BACK TO PRESENT: Helen tersadar, menatap pantulan dirinya di kaca kafe, lalu menghela napas panjang dan melanjutkan langkahnya di trotoar yang dingin.",
    propsWardrobe: "Long padding hitam tebal, syal leher, tas ransel kuliah, uap napas di udara dingin malam.",
    lighting: "Kontras antara lampu kuning hangat (3000K) dari dalam kafe dan trotoar biru malam (4500K).",
    dialogue: "Tidak ada dialog lisan.",
    sfx: "Deru angin malam musim dingin berhembus, suara samar tawa masa lalu yang memudar menjadi keheningan jalanan kota.",
    vo: "[Tanpa VO — Jembatan visual kontras antara ekspektasi masa lalu dengan kesunyian saat ini]",
    voNote: "Helen tampak kedinginan lahir dan batin."
  },
  {
    id: 11,
    code: "SHOT 11",
    sceneNum: 3,
    sceneName: "Scene 3 — The Question (Pertanyaan Eksistensial)",
    startSec: 85,
    endSec: 105,
    duration: 20,
    timeLabel: "01:25 – 01:45",
    title: "Notebook 'What's Next?' & Pertanyaan: 'Tuhan, Buat Apa Aku di Sini?'",
    location: "Kamar One-Room Helen (Meja Belajar dengan Lampu Meja Temaram)",
    camera: "MCU Helen di Meja Belajar -> Insert Buku Catatan -> CU Wajah",
    lensAndMove: "50mm f/1.4 • Slow Push-In Sangat Halus ke Mata Helen",
    visualIcon: "📖❓🥺",
    bgGradient: "linear-gradient(135deg, #090b10 0%, #17153b 60%, #2e236c 100%)",
    action: "Helen tiba di kamar, membuka notebook lamanya di halaman 'MY KOREA GOALS'. Beberapa impian tercapai, namun banyak yang macet. Helen membalik ke halaman kosong baru. Ia menulis dengan tangan bergetar pelan: 'What's next?'. Helen berhenti menulis, menatap foto-foto kenangan di galeri HP-nya. Kamera perlahan mendekat ke wajah Helen yang gamang dan terluka.",
    propsWardrobe: "Buku catatan 'MY KOREA GOALS', pulpen, HP dengan galeri foto kenangan masa awal tiba di Korea.",
    lighting: "Single keylight temaram dari lampu meja, separuh wajah dalam bayangan (Chiaroscuro).",
    dialogue: "Teks di Notebook: 'What's next?'",
    sfx: "Dentingan nada piano tunggal yang menggantung sendu, hening di antara jeda kalimat.",
    vo: "Dulu aku pikir... aku tahu apa yang aku mau. [Jeda 2 dtk sambil melihat HP] Tapi sekarang... aku malah makin bingung. [Jeda hening 3 dtk] Tuhan... sebenarnya Engkau tempatkan aku di sini buat apa?",
    voNote: "VO PERTAMA DALAM FILM! Dibacakan dengan intonasi pelan, rapuh, jujur dari lubuk hati terdalam, tanpa dibuat-buat."
  },

  // ==========================================
  // SCENE 4 — THE CHRISTMAS PREPARATION (01:45 – 02:15 | 30 dtk)
  // ==========================================
  {
    id: 12,
    code: "SHOT 12",
    sceneNum: 4,
    sceneName: "Scene 4 — The Christmas Preparation (Persiapan Natal)",
    startSec: 105,
    endSec: 115,
    duration: 10,
    timeLabel: "01:45 – 01:55",
    title: "Pesan Grup Pelayanan Natal & Langkah Menuju Gereja",
    location: "Kamar One-Room Helen (Pintu Keluar) & Trotoar Jalan Menuju Gereja",
    camera: "Insert Layar HP -> Helen Bersiap Berangkat",
    lensAndMove: "50mm Macro f/2.0 • Cut to Medium Tracking Shot Helen melangkah",
    visualIcon: "📲🎄⛪",
    bgGradient: "linear-gradient(135deg, #2e1065 0%, #3b0764 50%, #78350f 100%)",
    action: "Layar HP di atas meja menyala dengan nada khas notifikasi KakaoTalk. Muncul pop-up pesan dari grup pelayanan gereja: 'Guys, jangan lupa hari ini persiapan Natal yaa! 🎄'. Helen menatap layar itu beberapa detik, menghela napas, lalu bangkit mengambil mantelnya dan melangkah keluar kamar menuju gereja.",
    propsWardrobe: "HP dengan notifikasi KakaoTalk grup pelayanan, mantel musim dingin, sepatu kets.",
    lighting: "Cahaya pagi/siang lembut menembus jendela kamar, menandai dimulainya harapan baru.",
    dialogue: "Pesan KakaoTalk: 'Guys, jangan lupa hari ini persiapan Natal yaa! 🎄'",
    sfx: "SFX bunyi 'Katalk!' yang cerah + melodi piano akustik mulai mengalun hangat.",
    vo: "[Tanpa VO — Menunjukkan keputusan Helen untuk tidak mengisolasi diri dan tetap melangkah]",
    voNote: "Langkah kaki Helen masih ragu namun ada kerinduan untuk hadir."
  },
  {
    id: 13,
    code: "SHOT 13",
    sceneNum: 4,
    sceneName: "Scene 4 — The Christmas Preparation (Persiapan Natal)",
    startSec: 115,
    endSec: 135,
    duration: 20,
    timeLabel: "01:55 – 02:15",
    title: "Gotong Royong Dekorasi & Rekonsiliasi Tulus Sesama Pelayan",
    location: "Ruang Ibadah Gereja (Area Dekorasi Pohon Natal & Panggung)",
    camera: "Medium Group Shot -> Two-Shot Intim Helen & Teman Gereja",
    lensAndMove: "35mm & 50mm f/1.8 • Handheld Halus dan Hangat",
    visualIcon: "🤝✨🎀",
    bgGradient: "linear-gradient(135deg, #78350f 0%, #92400e 50%, #b45309 100%)",
    action: "Di gereja, suasana hidup: teman-teman pelayanan menata kursi, memasang pita dan hiasan Natal. Seorang teman memanggil: 'Kak Helen, bantuin yang ini dong!'. Helen tersenyum: 'Iyaa, sini!'. Saat membantu, Helen melihat teman gereja yang tempo hari sempat berselisih dengannya sedang kesulitan memasang ornamen tinggi. Helen ragu sejenak, lalu mendekat: 'Eh, sini aku bantu'. Teman itu menoleh: 'Oh, boleh kak. Makasih ya... Kak, soal kemarin... maaf ya'. Helen membalas tulus: 'Enggak apa-apa. Aku juga minta maaf'. Keduanya tersenyum dan melanjutkan dekorasi bersama.",
    propsWardrobe: "Ornamen pohon Natal, pita emas, tangga lipat, kardus dekorasi, lampu tumbler.",
    lighting: "Warm Indoor Light (3200K) menyinari ruangan, bayangan lampu-lampu pohon Natal berkelap-kelip.",
    dialogue: "Teman 1: 'Kak Helen, bantuin yang ini dong!'\nHelen: 'Iyaa, sini!'\nHelen (ke teman berselisih): 'Eh, sini aku bantu.'\nTeman Gereja: 'Oh, boleh kak. Makasih ya... Kak, soal kemarin... maaf ya.'\nHelen: 'Enggak apa-apa. Aku juga minta maaf.'",
    sfx: "Suara riuh tawa teman-teman gereja di latar belakang, gemerincing bola hiasan Natal, alunan musik Strings lembut mengiringi rekonsiliasi.",
    vo: "[Tanpa VO — Pemulihan relasi nyata melalui kerendahan hati dan tindakan saling memaafkan]",
    voNote: "Senyum keduanya tulus dan melepaskan beban yang selama ini mengganjal di hati."
  },

  // ==========================================
  // SCENE 5 — THE FIRST CHRISTMAS (02:15 – 03:20 | 65 dtk)
  // ==========================================
  {
    id: 14,
    code: "SHOT 14",
    sceneNum: 5,
    sceneName: "Scene 5 — The First Christmas (Ibadah Natal & Makna Palungan)",
    startSec: 135,
    endSec: 155,
    duration: 20,
    timeLabel: "02:15 – 02:35",
    title: "Menyambut Jemaat Baru yang Sendirian di Hari Natal",
    location: "Gedung Gereja (Area Foyer Penyambutan & Barisan Kursi Paling Belakang)",
    camera: "Medium Shot Menyambut -> Two-Shot Hangat",
    lensAndMove: "35mm f/1.8 • Panning Halus mengikuti langkah Helen",
    visualIcon: "👋🫂🎄",
    bgGradient: "linear-gradient(135deg, #92400e 0%, #b45309 50%, #d97706 100%)",
    action: "Hari Natal tiba. Helen datang lebih awal membantu pelayanan: menata warta jemaat, membagikan konsumsi/snack Natal, dan menyambut jemaat yang berdatangan. Pandangan Helen tertuju pada seorang jemaat baru yang datang sendirian dan duduk canggung di kursi baris belakang. Helen menghampirinya dengan senyum ramah: 'Halo! Baru pertama kali ke sini ya? Yuk, gabung sama kita di depan!'. Jemaat itu tersenyum lega: 'Iya, Kak. Makasih ya...'. Helen merangkul lengannya dan membimbingnya bergabung bersama yang lain.",
    propsWardrobe: "Baju rapi bertema Natal (merah/hijau/putih), name tag usher, kantong snack Natal.",
    lighting: "Golden Warmth (3200K) gereja yang penuh sukacita dan kehangatan keluarga.",
    dialogue: "Helen: 'Halo! Baru pertama kali ke sini ya? Yuk, gabung sama kita!'\nJemaat Baru: 'Iya, Kak. Makasih ya...'",
    sfx: "Suara riuh ramah jemaat saling menyapa 'Selamat Natal', alunan musik pengantar ibadah yang syahdu.",
    vo: "[Tanpa VO — Transformasi Helen dari orang yang merasa terasing menjadi orang yang merangkul sesama]",
    voNote: "Helen mempraktikkan kasih yang dulu ia rindukan kepada orang lain."
  },
  {
    id: 15,
    code: "SHOT 15",
    sceneNum: 5,
    sceneName: "Scene 5 — The First Christmas (Ibadah Natal & Makna Palungan)",
    startSec: 155,
    endSec: 175,
    duration: 20,
    timeLabel: "02:35 – 02:55",
    title: "Pembacaan Lukas 2:1–7 & Visualisasi Palungan Betlehem",
    location: "Ruang Ibadah Gereja (Bangku Jemaat) & Set Palungan Betlehem (Studio / Reka Simbolis)",
    camera: "CU Helen Mendengar Firman -> Cinematic Reenactment Maria & Yusuf -> CU Palungan",
    lensAndMove: "50mm f/1.4 -> 24mm Cinematic Wide -> Macro Palungan",
    visualIcon: "📖✨👶",
    bgGradient: "linear-gradient(135deg, #1e1b4b 0%, #4c1d95 50%, #78350f 100%)",
    action: "CUT TO: Ibadah Natal dimulai. Helen duduk di antara jemaat mendengarkan firman. Terdengar suara narator membacakan Lukas 2:1–7. VISUAL: Transisi sinematik ke suasana Betlehem malam hari — Maria dan Yusuf menempuh perjalanan jauh berdebu. Yusuf memegang tali keledai, Maria yang sedang mengandung tampak lelah menatap pintu-pintu penginapan yang tertutup. Tibalah di sebuah kandang sederhana. Maria membaringkan bayi Yesus yang berbalut kain lampin ke dalam sebuah palungan kayu kasar. Kamera mengunci fokus pada palungan yang diterangi seberkas cahaya lembut.",
    propsWardrobe: "Busana Alkitabiah sederhana: jubah Yusuf, kerudung Maria, kain lampin putih, palungan kayu berisi jerami.",
    lighting: "Sinematik Chiaroscuro kuno: cahaya obor hangat dan seberkas sinar lembut dari atas menyinari palungan di tengah kegelapan kandang.",
    dialogue: "Suara Pembacaan Firman (Narasi Lukas 2:1–7): 'Pada waktu itu, Kaisar Agustus mengeluarkan perintah untuk mengadakan sensus... Yusuf pergi dari Nazaret menuju Betlehem bersama Maria yang sedang mengandung. Ketika mereka di sana, tibalah waktunya bagi Maria untuk melahirkan. Ia melahirkan Yesus, membungkus-Nya dengan kain lampin, dan membaringkan-Nya di dalam palungan, karena tidak ada tempat bagi mereka di penginapan.'",
    sfx: "Musik orkestra Strings lembut dan sakral berpadu dengan suara angin malam padang gurun.",
    vo: "[Narasi Firman Alkitab Lukas 2:1–7 yang dibacakan secara berwibawa dan penuh penghayatan]",
    voNote: "Jantung teologis film: Tuhan memilih palungan hina, tempat yang tidak seorang pun pilih."
  },
  {
    id: 16,
    code: "SHOT 16",
    sceneNum: 5,
    sceneName: "Scene 5 — The First Christmas (Ibadah Natal & Makna Palungan)",
    startSec: 175,
    endSec: 200,
    duration: 25,
    timeLabel: "02:55 – 03:20",
    title: "VO Refleksi Helen, Flashback Pembentukan & Doa Penyerahan Diri",
    location: "Ruang Ibadah Gereja (Bangku Jemaat di Tengah Ibadah & Pendar Lilin Natal)",
    camera: "Macro Palungan -> CU Helen Menatap Khusyuk -> Fast Flashback -> MCU Helen Berdoa",
    lensAndMove: "50mm f/1.4 • Slow Zoom In ke Mata Helen yang Berkaca-kaca Haru",
    visualIcon: "🕯️🙏🥺",
    bgGradient: "linear-gradient(135deg, #78350f 0%, #451a03 50%, #090b10 100%)",
    action: "Visual kembali dari palungan ke wajah Helen yang duduk di bangku gereja. Matanya basah penuh perenungan. Saat VO Helen berbicara, muncul KILASAN CEPAT FLASHBACK: (1) Helen lelah setelah kerja part-time, (2) Helen membaca email penolakan kerja, (3) Miskomunikasi dengan teman gereja, (4) Helen duduk sendiri di kamar. BACK TO PRESENT: Helen menatap jemaat di sekelilingnya yang sedang khusyuk menyembah dan saling melayani. Helen tersenyum haru, menundukkan kepala, melipat tangan, dan berdoa dengan sungguh-sungguh.",
    propsWardrobe: "Lilin Natal kecil di tangan jemaat, alkitab di pangkuan Helen.",
    lighting: "Bokeh lilin-lilin Natal keemasan berkilau di latar belakang wajah Helen.",
    dialogue: "Tidak ada dialog (hanya alunan pujian jemaat di latar belakang).",
    sfx: "Musik Strings & Piano membubung naik (Crescendo emosional yang menyentuh hati jemaat).",
    vo: "Sang Juru Selamat dunia datang bukan dalam kemegahan... tapi dalam keadaan yang begitu sederhana. [Jeda singkat] Dan justru di sanalah, rencana keselamatan Allah dinyatakan. [Insert Palungan] Aku jadi sadar... mungkin selama ini aku terlalu fokus sama keadaan yang nggak sesuai harapanku. [Flashback proses berat] Padahal, lewat semua proses itu, Tuhan juga bisa membentuk hatiku... untuk belajar lebih sabar, lebih mengasihi, dan lebih peduli sama orang lain.",
    voNote: "Klimaks penyerahan diri Helen: suara bergetar haru namun penuh kedamaian dan kelegaan iman."
  },

  // ==========================================
  // SCENE 6 — THE SAME PLACE, A DIFFERENT HEART (03:20 – 03:40 | 20 dtk)
  // ==========================================
  {
    id: 17,
    code: "SHOT 17",
    sceneNum: 6,
    sceneName: "Scene 6 — The Same Place, A Different Heart (Tempat yang Sama, Hati Berbeda)",
    startSec: 200,
    endSec: 220,
    duration: 20,
    timeLabel: "03:20 – 03:40",
    title: "Rutinitas yang Sama: Berdoa Sebelum Melangkah & Menyapa Sesama",
    location: "Kamar One-Room Helen (Depan Pintu) & Trotoar Pagi Kota Korea (Depan Toko)",
    camera: "Medium Shot Pintu Kamar -> Tracking Shot Trotoar Korea",
    lensAndMove: "35mm f/2.0 • Gimbal Smooth Mengikuti Langkah Helen yang Mantap",
    visualIcon: "🚪🚶‍♀️☀️",
    bgGradient: "linear-gradient(135deg, #047857 0%, #065f46 50%, #064e3b 100%)",
    action: "Hari berikutnya. Keadaan hidup tidak langsung berubah secara ajaib: Helen tetap harus kuliah, bekerja part-time, dan menyelesaikan tugas-tugas beratnya. Namun ada yang berubah di dalam dirinya: sebelum memutar gagang pintu kamar untuk berangkat, Helen berhenti sejenak, menutup mata, dan berdoa menyerahkan harinya kepada Tuhan. Cut to: Helen berjalan di trotoar kota Korea di bawah sinar matahari pagi. Ia tersenyum ramah menyapa kasir toko yang ia lewati, dan membukakan pintu bagi seseorang yang membawa barang berat.",
    propsWardrobe: "Pakaian kuliah musim dingin rapi, tas ransel, buku di pelukan, ekspresi wajah cerah dan damai.",
    lighting: "Morning Golden Sunlight (5000K) yang jernih dan segar, menyiratkan pengharapan baru.",
    dialogue: "Helen (menyapa kasir sambil tersenyum): '안녕하세요!' (Halo! / Selamat pagi!)",
    sfx: "Langkah kaki yang mantap dan berenergi di trotoar, denting bel toko, musik akustik mengalir optimis.",
    vo: "Aku mungkin belum tahu semua jawaban tentang masa depanku. [Helen melangkah mantap di trotoar] Tapi aku percaya, Tuhan tetap menyertai setiap langkahku. [Fade to Black]",
    voNote: "Intonasi penuh ketenangan, kepastian iman, dan kedewasaan rohani."
  },

  // ==========================================
  // SCENE 7 — THIS IS OUR PLACE (03:40 – 04:30 | 50 dtk)
  // SURPRISE ENDING — MONTAGE JEMAAT
  // ==========================================
  {
    id: 18,
    code: "SHOT 18",
    sceneNum: 7,
    sceneName: "Scene 7 — This Is Our Place (Surprise Ending: Montase Jemaat)",
    startSec: 220,
    endSec: 245,
    duration: 25,
    timeLabel: "03:40 – 04:05",
    title: "Footage Nyata Jemaat di Korea & Pertanyaan: 'Untuk Apa Aku di Sini?'",
    location: "Lokasi Nyata Aktivitas Jemaat: Laboratorium Kampus Korea, Pabrik Industri, & Apartemen",
    camera: "Dokumenter Asli Multi-Angle (Footage Nyata Jemaat/Diaspora Indonesia di Korea)",
    lensAndMove: "35mm / 50mm Natural Documentary Style • Video Asli Keseharian Jemaat",
    visualIcon: "🏭🔬👨‍👩‍👧‍👦",
    bgGradient: "linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #312e81 100%)",
    action: "Layar hitam selama 2 detik. Musik instrumental perlahan meningkat. Perlahan muncul footage asli jemaat 1 yang sedang bekerja di pabrik/lapangan di Korea. Cut ke footage jemaat 2 di laboratorium penelitian kampus larut malam. Cut ke footage jemaat 3 yang sedang merawat anak/keluarga di apartemen Korea. Semakin banyak wajah jemaat Indonesia di Korea yang muncul dengan ragam profesi: mahasiswa, pekerja manufaktur, wirausaha, profesional. Pergantian footage melambat, menatap kamera dengan sorot mata yang penuh arti.",
    propsWardrobe: "Pakaian kerja nyata jemaat: seragam pabrik, jas lab universitas, celemek toko, pakaian kasual harian.",
    lighting: "Pencahayaan natural lingkungan kerja masing-masing (pabrik, lab kampus, rumah).",
    dialogue: "Tidak ada dialog lisan (fokus pada narasi VO dan tatapan wajah asli jemaat).",
    sfx: "Ambience suara mesin pabrik samar, derik keyboard lab berpadu indah dengan Strings orkestra yang mulai menanjak.",
    vo: "Dan mungkin... cerita ini bukan cuma tentang aku. [Footage jemaat berganti] Kita semua punya perjalanan yang berbeda. Dan untuk sampai di titik ini, mungkin sudah banyak hal yang kita lewati. [Wajah jemaat terlihat lebih jelas] Ada pergumulan, rencana yang nggak berjalan sesuai harapan, bahkan pertanyaan... 'Tuhan, sebenarnya untuk apa aku ada di sini?'",
    voNote: "VO menyapa seluruh audiens di ruangan gereja. Setiap jemaat akan merasa video ini sedang menceritakan hidup mereka sendiri."
  },
  {
    id: 19,
    code: "SHOT 19",
    sceneNum: 7,
    sceneName: "Scene 7 — This Is Our Place (Surprise Ending: Montase Jemaat)",
    startSec: 245,
    endSec: 270,
    duration: 25,
    timeLabel: "04:05 – 04:30",
    title: "Klimaks: Menjalani Penempatan Tuhan dengan Setia & Kebersamaan Gereja",
    location: "Lingkungan Kerja Jemaat & Hall Gereja (Meja Makan Persekutuan / Fellowship)",
    camera: "Dokumenter Jemaat Tersenyum -> Montase Pelayanan & Persekutuan Gereja",
    lensAndMove: "Dynamic Cut • Gerakan kamera merangkum pelukan, senyum, dan pelayanan bersama",
    visualIcon: "🙌🍲❤️",
    bgGradient: "linear-gradient(135deg, #78350f 0%, #b45309 50%, #f59e0b 100%)",
    action: "Footage jemaat yang sedang menjalani tugas dan tanggung jawabnya kini menampilkan senyum tulus dan kebanggaan akan penempatan mereka. Transisi berpindah ke video-video kebersamaan gereja Indonesia di Korea: makan bersama masakan nusantara, tertawa lepas mengelilingi meja, berdoa saling menopang, dan melayani jemaat lain dengan sukacita. Puncak persekutuan yang utuh di tanah perantauan.",
    propsWardrobe: "Dokumentasi riil kegiatan gereja, baju batik, t-shirt persekutuan, makanan khas Indonesia.",
    lighting: "Warm Golden Glow memuncak di seluruh frame.",
    dialogue: "Tidak ada dialog lisan (paduan suara dan tawa jemaat di latar belakang).",
    sfx: "Musik orkestra mencapai klimaks emosional paling megah dan penuh ucapan syukur.",
    vo: "[Jeda singkat] Mungkin sampai hari ini pun kita belum punya semua jawabannya. [Musik meningkat menuju klimaks] Tapi kita bisa percaya, Tuhan tetap bekerja dan membentuk kita melalui setiap proses. Jadi, di mana pun Tuhan menempatkan kita saat ini, mari jalani apa yang Dia percayakan dengan setia. [Visual tawa kebersamaan gereja] Teruslah mengasihi, melayani, dan menjadi berkat. Biarlah melalui hidup kita, nama Tuhan dimuliakan. [Fade to Black]",
    voNote: "Klimaks khidmat dan membakar semangat iman seluruh jemaat perantau yang hadir."
  },

  // ==========================================
  // CLOSING — PLACED WITH PURPOSE, HELD BY GRACE (04:30 – 04:40 | 10 dtk)
  // ==========================================
  {
    id: 20,
    code: "SHOT 20",
    sceneNum: 8,
    sceneName: "Closing — Placed with Purpose, Held by Grace (Epilog & Judul)",
    startSec: 270,
    endSec: 280,
    duration: 10,
    timeLabel: "04:30 – 04:40",
    title: "Title Card Utama: Ayat Kunci, Tema & Selamat Natal",
    location: "Post-Production / Studio Grafis (On-Screen Digital Typography Card)",
    camera: "On-Screen Typography di atas Layar Hitam Pekat",
    lensAndMove: "Slow Text Fade-In Emas & Putih Elegan -> Final Fade Out",
    visualIcon: "✨📜🎄",
    bgGradient: "linear-gradient(135deg, #090b10 0%, #1c1917 50%, #090b10 100%)",
    action: "Layar hitam pekat. Perlahan muncul tipografi emas-putih elegan dengan tata letak serif bernilai sinematik:\n\n“WHEREVER GOD PLACES US, MAY WE LIVE FOR HIS GLORY.”\n(Di mana pun Tuhan menempatkan kita, kiranya hidup kita memuliakan-Nya.)\n\nKemudian berganti ke:\n\nTHE UNCHOSEN PLACE\nPlaced with Purpose. Held by Grace.\nRefleksi Lukas 2:1–7\nMERRY CHRISTMAS 🎄\n— END —",
    propsWardrobe: "None (Digital Typography Card).",
    lighting: "Pure Black Background (#090b10) dengan pendar teks emas lembut.",
    dialogue: "Teks di Layar: 'WHEREVER GOD PLACES US, MAY WE LIVE FOR HIS GLORY.'\n'THE UNCHOSEN PLACE — Placed with Purpose. Held by Grace. Refleksi Lukas 2:1–7 — MERRY CHRISTMAS 🎄'",
    sfx: "Akor strings orkestra panjang yang menenangkan, dentingan piano terakhir bergema lembut (reverb tail) hingga hening sempurna di detik 280 (04:40).",
    vo: "[Hening total tanpa suara VO — Memberikan ruang refleksi hening bagi jemaat membaca kalimat penutup]",
    voNote: "Lampu ruang ibadah gereja mulai dinyalakan perlahan (dimmer up) saat teks memudar."
  }
];

// State Management
let currentSecond = 0;
let isPlaying = false;
let playbackSpeed = 1;
let timerInterval = null;
let activeSceneFilter = "all";
let searchQuery = "";
let completedShots = JSON.parse(localStorage.getItem("unchosen_completed_shots_v2") || "[]");

const TOTAL_DURATION_SEC = 280; // 04:40

// Format seconds to MM:SS
function formatTime(sec) {
  const s = Math.max(0, Math.min(TOTAL_DURATION_SEC, Math.floor(sec)));
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
  const hudLocation = document.getElementById("hudLocation");
  const hudSfx = document.getElementById("hudSfx");
  const stageIcon = document.getElementById("stageIcon");
  const stageTitle = document.getElementById("stageTitle");
  const stageAction = document.getElementById("stageAction");
  const stageVo = document.getElementById("stageVo");
  const timecodeDisplay = document.getElementById("timecodeDisplay");
  const timelineSlider = document.getElementById("timelineSlider");

  if (screen) screen.style.background = shot.bgGradient;
  if (hudShotCode) hudShotCode.textContent = `${shot.code} (${shot.timeLabel})`;
  if (hudActName) hudActName.textContent = shot.sceneName;
  if (hudCamera) hudCamera.textContent = `🎥 ${shot.camera}`;
  if (hudLocation) hudLocation.textContent = `📍 ${shot.location}`;
  if (hudSfx) hudSfx.textContent = `🔊 ${shot.sfx.slice(0, 60)}...`;
  if (stageIcon) stageIcon.textContent = shot.visualIcon;
  if (stageTitle) stageTitle.textContent = `${shot.code}: ${shot.title}`;
  if (stageAction) stageAction.textContent = shot.action;
  if (stageVo) {
    if (shot.vo.startsWith("[Tanpa VO")) {
      stageVo.textContent = `🎙️ ${shot.vo}`;
      stageVo.style.color = "var(--text-muted)";
      stageVo.style.borderColor = "var(--text-muted)";
    } else {
      stageVo.textContent = `🎙️ VO: "${shot.vo}"`;
      stageVo.style.color = "#fef08a";
      stageVo.style.borderColor = "var(--gold)";
    }
  }
  if (timecodeDisplay) timecodeDisplay.textContent = `${formatTime(sec)} / 04:40`;
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
    if (currentSecond >= TOTAL_DURATION_SEC) currentSecond = 0;
    isPlaying = true;
    if (playBtn) playBtn.innerHTML = "⏸ Jeda Simulasi";
    timerInterval = setInterval(() => {
      currentSecond += 0.25 * playbackSpeed;
      if (currentSecond >= TOTAL_DURATION_SEC) {
        currentSecond = TOTAL_DURATION_SEC;
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
  localStorage.setItem("unchosen_completed_shots_v2", JSON.stringify(completedShots));
  renderShotsList();
  updateProgressCounter();
}

function updateProgressCounter() {
  const el = document.getElementById("shootProgressText");
  if (el) {
    el.textContent = `${completedShots.length} / ${SHOTS_DATA.length} Shot Selesai Take`;
  }
}

// Render Master Shot List with Full Production Support Details
function renderShotsList() {
  const container = document.getElementById("shotsContainer");
  if (!container) return;

  const filtered = SHOTS_DATA.filter((shot) => {
    const matchesScene = activeSceneFilter === "all" || shot.sceneNum === Number(activeSceneFilter);
    const q = searchQuery.trim().toLowerCase();
    const matchesSearch =
      !q ||
      shot.title.toLowerCase().includes(q) ||
      shot.action.toLowerCase().includes(q) ||
      shot.vo.toLowerCase().includes(q) ||
      shot.camera.toLowerCase().includes(q) ||
      shot.code.toLowerCase().includes(q) ||
      (shot.location && shot.location.toLowerCase().includes(q)) ||
      (shot.dialogue && shot.dialogue.toLowerCase().includes(q)) ||
      (shot.propsWardrobe && shot.propsWardrobe.toLowerCase().includes(q));
    return matchesScene && matchesSearch;
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

      const sceneBadgeColors = {
        1: "background: rgba(16,185,129,0.15); color: #34d399;",
        2: "background: rgba(56,189,248,0.15); color: #7dd3fc;",
        3: "background: rgba(168,85,247,0.15); color: #c084fc;",
        4: "background: rgba(245,158,11,0.15); color: #fcd34d;",
        5: "background: rgba(239,68,68,0.15); color: #f87171;",
        6: "background: rgba(52,211,153,0.15); color: #6ee7b7;",
        7: "background: rgba(245,158,11,0.15); color: #fbbf24;",
        8: "background: rgba(255,255,255,0.15); color: #f8fafc;"
      };

      const hasVO = !shot.vo.startsWith("[Tanpa VO");
      const hasDialogue = shot.dialogue && shot.dialogue.trim() !== "Tidak ada dialog lisan." && !shot.dialogue.startsWith("Tidak ada dialog");

      return `
        <article class="shot-card ${isPlayingNow ? "playing-now" : ""} ${isDone ? "shot-done" : ""}" data-shot-id="${shot.id}">
          <!-- Kolom 1: Detik, Kamera & Lokasi Syuting -->
          <div class="shot-time-col">
            <div class="shot-num-row">
              <span class="shot-number">${shot.code}</span>
              <span class="shot-duration-pill">⏱ ${shot.duration} Detik</span>
            </div>
            <div class="shot-timestamp">${shot.timeLabel}</div>
            <div class="shot-camera-type">🎥 ${shot.camera}</div>
            <div class="shot-location-badge">📍 ${shot.location}</div>
            <button type="button" class="btn shot-play-btn" onclick="jumpToSecond(${shot.startSec}, true)">
              ▶ Monitor (${formatTime(shot.startSec)})
            </button>
            <label class="shot-check-label">
              <input type="checkbox" ${isDone ? "checked" : ""} onchange="toggleShotCompleted(${shot.id})" />
              <span>Sudah Take / Selesai</span>
            </label>
          </div>

          <!-- Kolom 2: Aksi Visual, Blocking, Lighting, Lokasi, Props & Wardrobe -->
          <div class="shot-visual-col">
            <h4>
              <span>${shot.visualIcon} ${shot.title}</span>
              <span style="font-size:0.7rem; padding:0.2rem 0.55rem; border-radius:99px; font-family:var(--font-mono); ${sceneBadgeColors[shot.sceneNum] || ""}">
                ${shot.sceneName.split("—")[0].trim()}
              </span>
            </h4>
            <p class="shot-action-text">${shot.action}</p>

            <div class="shot-tech-tags">
              <span class="tech-tag tech-location-tag"><strong>📍 Lokasi Syuting:</strong> ${shot.location}</span>
              <span class="tech-tag"><strong>Lensa & Gerakan:</strong> ${shot.lensAndMove}</span>
              <span class="tech-tag"><strong>Lighting:</strong> ${shot.lighting}</span>
              <span class="tech-tag" style="border-color: rgba(245,158,11,0.3); background: rgba(245,158,11,0.06);">
                <strong>🎒 Properti & Wardrobe:</strong> ${shot.propsWardrobe}
              </span>
            </div>
          </div>

          <!-- Kolom 3: Dialog Karakter, Voice Over & Audio -->
          <div class="shot-audio-col">
            ${
              hasDialogue
                ? `
                <div style="background: rgba(255,255,255,0.04); border-radius: 6px; padding: 0.55rem 0.75rem; border-left: 3px solid #38bdf8;">
                  <div style="font-family: var(--font-mono); font-size: 0.65rem; color: #7dd3fc; text-transform: uppercase; font-weight: 700; margin-bottom: 0.2rem;">
                    💬 Dialog di Set:
                  </div>
                  <div style="font-size: 0.8rem; color: #e2e8f0; white-space: pre-line; line-height: 1.45;">
                    ${shot.dialogue}
                  </div>
                </div>
              `
                : ""
            }

            <div class="vo-box" style="${hasVO ? "border-left-color: var(--gold);" : "border-left-color: var(--text-muted); opacity: 0.85;"}">
              <div class="vo-label">${hasVO ? `🎙️ Voice Over (${shot.timeLabel})` : "🎙️ Voice Over"}</div>
              <div class="vo-quote" style="${hasVO ? "color: #fef9c3;" : "color: var(--text-muted); font-size: 0.8rem;"}">
                ${hasVO ? `"${shot.vo}"` : shot.vo}
              </div>
              <div style="font-size:0.72rem; color:var(--text-muted); margin-top:0.3rem;">
                💡 <em>Catatan Director: ${shot.voNote}</em>
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
      activeSceneFilter = tab.dataset.scene || tab.dataset.act || "all";
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
