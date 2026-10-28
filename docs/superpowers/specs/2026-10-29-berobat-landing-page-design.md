# Design Document: Landing Page & Konsep Vending Machine "Berobat"

**Tanggal:** 2026-10-29  
**Status:** Draf untuk Tinjauan Persetujuan  
**Target Platform:** Web (Vite + React + Tailwind CSS)  
**Skill Integrasi:** `hairline-create`, `oil-ui`, `web-design-guidelines`, `brainstorming`

---

## 1. Intent & The Why

### Mengapa Proyek Ini Dibuat?
Di ruang publik yang padat (seperti stasiun transit, pusat perkantoran, universitas, pusat perbelanjaan, dan bandara), orang sering kali mendadak mengalami keluhan kesehatan ringan—seperti sakit kepala berdenyut, maag perih karena telat makan, diare, lecet/luka kecil akibat sepatu atau aktivitas fisik, mata merah terkena debu, atau kebutuhan darurat lainnya. Sering kali mereka lupa membawa obat pribadi, sedangkan apotek terdekat berada jauh, harus antre panjang, atau sudah tutup di luar jam operasional.

### Solusi
**Berobat** menghadirkan unit *smart vending machine* obat-obatan esensial dan pertolongan pertama (P3K) yang beroperasi 24 jam non-stop di titik-titik publik strategis. Website ini berfungsi sebagai **landing page pengenalan produk ke masyarakat umum (B2C)** yang membangun rasa tenang, mengedukasi kemudahan akses, menampilkan jaminan mutu/higienitas obat berstandar BPOM, serta membantu masyarakat melacak lokasi mesin terdekat.

---

## 2. Goals, Non-Goals, & Anti-Goals

### Goals
1. **Pengenalan Produk yang Terpercaya & Ramah**: Menampilkan konsep mesin *Berobat* dengan estetika teknologi medis yang bersih, modern, dan memberikan rasa aman.
2. **Hero Interaktif Isometrik (`hairline-create`)**: Mengintegrasikan kanvas figur isometrik garis dari mesin Berobat yang merespons pergerakan kursor/pointer pengguna secara dinamis.
3. **Katalog Obat & Kategori Keluhan Sehari-hari**: Menampilkan daftar obat bebas esensial (Paracetamol, Antasida/obat maag lambung, Oralit/obat diare, Plester luka & antiseptik, Obat flu/batuk, Tetes mata, Minyak angin/balsam, serta pembalut darurat) yang dikelompokkan berdasarkan keluhan yang mudah dipahami orang awam.
4. **Pencari Lokasi Mesin & Simulasi Ketersediaan Stok**: Komponen interaktif untuk mencari dan melihat lokasi mesin *Berobat* di tempat umum (misal: Stasiun MRT Sudirman, Halte TransJakarta Bundaran HI, Stasiun Gambir, Kampus UI Salemba, Mall Kota Kasablanka) lengkap dengan status operasional 24 jam dan ketersediaan stok.
5. **Standar Kualitas & Desain Kelas Atas**:
   - Menerapkan ritme visual, kontras, dan hierarki desain modern (`oil-ui`).
   - Memenuhi pedoman aksesibilitas web (WCAG 2.1 AA, keyboard navigasi, teks alternatif, responsivitas mobile ergonomis) sesuai `web-design-guidelines`.

### Non-Goals
1. **Bukan Toko Online E-Commerce Antar ke Rumah**: Transaksi fisik dilakukan langsung pada mesin vending di lokasi. Website ini mengedukasi dan mengarahkan ke mesin fisik terdekat.
2. **Bukan Telemedicine Konsultasi Resep Dokter**: Layanan ini murni menyediakan obat-obatan golongan Obat Bebas (lingkaran hijau) dan Obat Bebas Terbatas (lingkaran biru) serta alat kesehatan P3K. Tidak melayani obat keras dengan resep dokter (lingkaran merah).

### Anti-Goals
1. **Tidak Menakut-nakuti atau Terkesan Dingin**: Menghindari visual rumah sakit steril yang kaku dan suram. Nada visual harus hangat, menenangkan, melegakan, dan modern.
2. **Tidak Mengorbankan Performa Demi Animasi**: Animasi isometrik kanvas Hairline harus ringan, efisien, dan tetap lancar di perangkat mobile tanpa membebani baterai atau konsumsi data pengguna.

---

## 3. Constraints & Regulations

- **Regulasi Farmasi Indonesia**: Obat yang dipajang dan didistribusikan wajib merupakan obat bebas resmi berizin edar BPOM RI.
- **Penyimpanan Obat**: Mesin dilengkapi pendingin suhu konstan berstandar farmasi (20°C–25°C) dengan kelembapan terkontrol untuk menjaga kestabilan zat aktif obat.
- **Teknologi**: Menggunakan Node.js / Vite, React, dan Tailwind CSS. Kanvas Hairline dioperasikan secara native di client-side.

---

## 4. Approaches Considered

### Opsi 1: Vite + React + Tailwind CSS *(Terpilih)*
- **Alasan Pemilihan**: Arsitektur komponen modular memudahkan isolasi elemen interaktif (Hairline Canvas Hero, Filter Keluhan Obat, Pencari Lokasi Mesin). Styling via Tailwind CSS memungkinkan integrasi instan dengan pedoman visual `oil-ui` dan `web-design-guidelines`.
- **Trade-off**: Memerlukan langkah instalasi npm/vite awal, tetapi memberikan fondasi kode yang rapi dan mudah dikembangkan.

### Opsi 2: Vanilla Web (HTML5/CSS/JS)
- **Kelebihan**: Tanpa dependency build step, sangat portabel.
- **Alasan Dieliminasi**: Kurang scalable untuk interaktivitas dinamis (filter gejala, pencarian lokasi mesin reaktif) dan menyulitkan pemeliharaan komponen mandiri.

### Opsi 3: Next.js (App Router)
- **Kelebihan**: Server-side rendering dan endpoint API langsung.
- **Alasan Dieliminasi**: Terlalu berat (*overkill*) untuk kebutuhan landing page interaktif tahap pengenalan ini dan memperpanjang waktu build.

---

## 5. Detailed Architecture & User Journey

### A. Struktur Halaman Landing Page
1. **Header & Sticky Navigation**:
   - Logo *Berobat* dengan indikator status "Solusi 24/7 di Sekitarmu".
   - Tautan navigasi cepat: `Koleksi Obat`, `Fitur Mesin`, `Cari Lokasi`, `Cara Pakai`.
   - Tombol aksi utama (CTA): "Temukan Mesin Terdekat".

2. **Hero Section (Fitur Unggulan `hairline-create`)**:
   - Kolom Kiri: Headline melegakan (*"Tiba-tiba Butuh Obat di Jalan? Berobat Hadir 24 Jam di Ruang Publik"*), subheadline penenang, tombol aksi cepat, dan badge ringkas (*"100% Berizin BPOM • Suhu Terjaga • Pembayaran QRIS"*).
   - Kolom Kanan: **Interactive Isometric Vending Machine** bertenaga kanvas `hairline-create`. Menampilkan siluet dan detail garis 3D mesin pintar *Berobat* yang bergerak halus mengikuti kursor mouse / sentuhan jari, lengkap dengan kompartemen obat dan layar sentuh transaksi.

3. **Value Proposition (3 Pilar Utama)**:
   - ❄️ **Suhu Farmasi Presisi (20–25°C)**: Obat tersimpan higienis dengan suhu dan kelembapan stabil, menjamin kualitas zat aktif tetap optimal.
   - 🛡️ **100% Obat Bebas Resmi BPOM**: Hanya menyediakan obat bertanda lingkaran hijau & biru dari produsen farmasi terpercaya.
   - ⚡ **Transaksi Kilat 30 Detik Tanpa Antre**: Cukup pilih di layar sentuh, scan QRIS (GoPay, OVO, Dana, BCA, Livin, dll.), dan obat langsung keluar higienis.

4. **Kategori Keluhan & Showcase Obat Bebas**:
   - Tab interaktif berdasarkan keluhan sehari-hari:
     - 🤕 *Demam & Nyeri Kepala* (Paracetamol 500mg, Ibuprofen)
     - 🤢 *Maag & Perut Begah* (Antasida Doen, Polysilane)
     - 🚾 *Diare & Dehidrasi* (Attapulgite/Diapet, Oralit)
     - 🩹 *Luka Ringan & P3K* (Plester elastis Hansaplast, Antiseptik Betadine, Kasa steril)
     - 🤧 *Flu & Batuk* (Tablet dekongestan & ekspektoran bebas)
     - 👁️ *Iritasi Mata & Segar* (Tetes mata steril Insto/Braito, Minyak angin aromaterapi)
     - 🌸 *Kebutuhan Darurat Khusus* (Pembalut wanita darurat, Masker medis 3-ply)
   - Setiap kartu obat menampilkan foto/ilustrasi bersih, indikasi umum, dosis anjuran ringkas, dan harga transparan yang terjangkau.

5. **Pencari Lokasi Mesin Interaktif**:
   - Peta visual / kartu daftar titik lokasi strategis:
     - Stasiun MRT Bundaran HI (Dekat Pintu B)
     - Stasiun KRL Sudirman (Area Concourse)
     - Kampus UI Depok / Salemba (Gedung Perpustakaan Pusat)
     - Mall Kota Kasablanka (Lantai LG dekat Parkir)
     - Bandara Soekarno-Hatta Terminal 3 (Area Keberangkatan)
   - Status live: "Buka 24 Jam • Stok Lengkap • QRIS Aktif".

6. **Langkah Mudah Bertransaksi (How it Works)**:
   - 1. **Pilih di Layar**: Cari berdasarkan nama obat atau keluhan gejala.
   - 2. **Scan QRIS**: Bayar secara nirkontak menggunakan aplikasi e-wallet atau mobile banking apa saja.
   - 3. **Ambil Obat**: Ambil produk dari kompartemen sanitasi otomatis.

7. **Footer & Compliance**:
   - Catatan regulasi: "Hanya melayani obat golongan bebas dan bebas terbatas berizin BPOM. Untuk keluhan berat atau darurat, segera kunjungi fasilitas kesehatan terdekat."
   - Bantuan pelanggan (Customer Care WhatsApp/Hotline).
   - Hak Cipta © 2026 Berobat Indonesia.

---

## 6. What's Left to the Builder & Architectural Decisions (Builder Calls)

### Keputusan Mandiri Pengembang (Builder Calls)
1. **Peta Skematik Transit Interaktif**: Bagian pencari lokasi akan memadukan peta visual skematik jalur transit publik (MRT/KRL/Mall) bergaya modern dengan kartu lokasi interaktif, memudahkan pengguna mengenali titik mesin secara visual.
2. **Navigasi & Smooth Scroll**: Tombol CTA utama "Temukan Mesin Terdekat" akan melakukan *smooth scroll* langsung ke bagian lokasi, dengan opsi deteksi geolokasi browser untuk menyorot titik mesin terdekat dari posisi pengguna.
3. **Optimasi Kanvas Hairline**: Komponen figur isometrik garis `hairline-create` akan diisolasi dalam React Hook dengan *requestAnimationFrame* dan *pointer event fallback* agar tetap hemat daya di perangkat mobile.

### Tanggung Jawab Implementasi
- Implementasi script kanvas gambar garis isometrik `hairline-create` untuk unit mesin Berobat.
- Penataan token warna (Emerald/Teal Medis, Slate, Pure White) dan tipografi modern melalui Tailwind CSS.
- Pembuatan dataset mock lokasi mesin dan obat-obatan.
- Verifikasi aksesibilitas dengan pedoman `web-design-guidelines`.

