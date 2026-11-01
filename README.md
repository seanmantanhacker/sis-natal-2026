# 🎬 The Unchosen Place — Christmas Short Film Production Deck

Website dokumen produksi, *storyline*, *master shot list* detik-ke-detik (`00:00 – 03:00`), serta *teleprompter* naskah *Voice Over (VO)* untuk proyek video Natal **The Unchosen Place**.

---

## ⚠️ PENTING: Jangan Upload File `.mp3` ke Repository Ini

> **PERhatian untuk Tim:**
> **DILARANG meng-upload file audio (`.mp3`, `.wav`, dll.) ke dalam repository GitHub ini** (termasuk file demo lagu seperti `Outliners_Theme_SOng_V1.mp3`).
>
> **Alasan:**
> 1. Menjaga ukuran repository tetap ringan dan cepat saat di-deploy ke **GitHub Pages**.
> 2. File `.mp3` hanya digunakan untuk kebutuhan lokal/internal tim.
> 3. File `.gitignore` sudah dikonfigurasi untuk mengabaikan seluruh file `*.mp3` secara otomatis.

Jika terlanjur menambahkan file `.mp3` ke Git staging lokal, jalankan perintah berikut sebelum *commit*:
```bash
git rm --cached *.mp3
```

---

## 📂 Struktur File Website (Yang Di-upload ke GitHub)

* `index.html` — Halaman utama *Director's Treatment*, monitor simulasi timeline, *shot list*, dan *teleprompter* VO.
* `styles.css` — Styling sinematik responsif (Desktop, Tablet, HP) & format cetak PDF.
* `app.js` — Data 18 *shot* (`00:00 – 03:00`), logika simulator *timecode*, filter babak, dan *checklist* progres syuting.
* `Video_natal_The_Unchosen_Place.MD` — Catatan draf ide awal cerita.
* `.nojekyll` — Konfigurasi agar GitHub Pages langsung menayangkan file statis.
* `.gitignore` — Mencegah file `*.mp3` ikut ter-upload ke GitHub.

---

## 🚀 Cara Deploy ke GitHub Pages

1. Inisialisasi Git dan commit file website (file `.mp3` otomatis diabaikan oleh `.gitignore`):
   ```bash
   git init
   git add .
   git status   # Pastikan TIDAK ada file .mp3 di daftar changes
   git commit -m "Initial commit: The Unchosen Place production website"
   ```
2. Hubungkan ke repository GitHub Anda dan *push*:
   ```bash
   git branch -M main
   git remote add origin https://github.com/USERNAME/NAMA-REPO.git
   git push -u origin main
   ```
3. Aktifkan **GitHub Pages**:
   * Buka repository di GitHub → klik tab **Settings** → pilih menu **Pages** di sebelah kiri.
   * Pada bagian **Build and deployment (Source)**, pilih **Deploy from a branch**.
   * Pilih branch **`main`** dan folder **`/ (root)`**, lalu klik **Save**.
   * Tunggu 1–2 menit, link website siap dibagikan ke seluruh tim produksi!

