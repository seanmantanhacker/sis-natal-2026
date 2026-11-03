# 🎬 The Unchosen Place — Christmas Short Film Production Deck

Website dokumen produksi, *storyline* 7 Scene, *master shot list* komprehensif (`00:00 – 04:40`), rincian lokasi syuting, checklist produksi, serta *teleprompter* naskah *Voice Over (VO)* untuk proyek video Natal **The Unchosen Place (Refleksi Lukas 2:1–7)**.

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

* `index.html` — Halaman utama *Director's Treatment*, *Storyline* 7 Scene, *Shot List* (Shot 01–20), *Teleprompter* VO, dan Checklist Produksi.
* `styles.css` — Styling sinematik responsif (Desktop, Tablet, HP) & format cetak PDF.
* `app.js` — Data 20 *shot* (`00:00 – 04:40`), filter scene, pencarian teks/lokasi, dan *checklist* progres syuting.
* `The Unchosen Place_script (1).pdf` — Naskah resmi *Revised Full Script*.
* `Video_natal_The_Unchosen_Place.MD` — Naskah rujukan dan panduan produksi lengkap (*Production Bible*).
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

