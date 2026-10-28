# Berobat Landing Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Membangun landing page modern, responsif, dan interaktif untuk memperkenalkan produk smart vending machine "Berobat" ke masyarakat umum (B2C) dengan kanvas isometrik interaktif (`hairline-create`), katalog obat bebas BPOM, dan pencari titik mesin publik.

**Architecture:** Single-Page Application (SPA) berbasis komponen React yang cepat dan modular menggunakan Vite, Tailwind CSS untuk token warna dan hierarki visual (`oil-ui`), kanvas interaktif native 2D untuk figur isometrik garis mesin (`hairline`), serta pengelolaan state lokal untuk filter keluhan dan pencari lokasi mesin. Pengujian unit menggunakan Vitest dan React Testing Library.

**Tech Stack:** React 18/19, Vite, Tailwind CSS, Vitest, Testing Library, Lucide React (ikon modern)

**Spec:** `docs/superpowers/specs/2026-10-29-berobat-landing-page-design.md`

## Global Constraints

- Standar regulasi farmasi: Hanya menyajikan obat golongan Bebas (lingkaran hijau) dan Bebas Terbatas (lingkaran biru) resmi BPOM RI.
- Nada visual: Bersih, hangat, melegakan, dan berstandar farmasi (bukan steril dingin/menakutkan seperti RS konvensional).
- Mobile-first & Aksesibilitas: Memenuhi WCAG 2.1 AA (kontras warna teks minimal 4.5:1, navigasi keyboard penuh, target sentuh minimal 44x44px).
- Isolasi kanvas Hairline: Menggunakan requestAnimationFrame hemat daya dan fallback pointer event di mobile.

## Review Focus

1. Layar mobile kecil (360px): Teks dan kanvas isometrik tetap proporsional dan tidak terjadi layout shift horizontal.
2. Interaksi tanpa kursor (touch screen): Kanvas isometrik mesin memiliki rotasi default lembut (idle sway) saat pengguna tidak menyentuh layar.
3. Filter keluhan tidak menemukan obat: Menampilkan pesan penenang yang jelas serta kontak bantuan apoteker/hotline.
4. Pengguna mencari lokasi di luar kota yang belum terjangkau: Tampilan informasi ekspansi ramah dan ajakan pengajuan lokasi baru.
5. Mode reduced-motion: Menghormati preferensi aksesibilitas `prefers-reduced-motion` untuk semua animasi transisi dan kanvas.

---

### Task 1: Project Scaffolding & Testing Environment

**Files:**
- Create: `package.json`, `vite.config.js`, `tailwind.config.js`, `postcss.config.js`, `index.html`, `src/index.css`, `src/main.jsx`, `src/App.jsx`
- Test: `src/App.test.jsx`

**Interfaces:**
- Produces: Dasar aplikasi Vite React dengan Tailwind CSS dan lingkungan pengujian Vitest yang berjalan hijau.

- [ ] **Step 1: Write the failing smoke test in `src/App.test.jsx`**

```jsx
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from './App';

describe('App Smoke Test', () => {
  it('renders Berobat brand title', () => {
    render(<App />);
    expect(screen.getByText(/Berobat/i)).toBeInTheDocument();
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npx vitest run src/App.test.jsx`  
Expected: FAIL with missing module or dependencies.

- [ ] **Step 3: Setup project dependencies, configuration, and minimal App component**

Install dependencies (`react`, `react-dom`, `lucide-react`, dev: `vite`, `tailwindcss`, `postcss`, `autoprefixer`, `vitest`, `@testing-library/react`, `@testing-library/jest-dom`, `jsdom`), siapkan `vite.config.js`, `tailwind.config.js` dengan palet warna medis (`teal`, `emerald`, `slate`), dan buat `src/App.jsx` minimal.

- [ ] **Step 4: Run test to verify it passes**

Run: `npx vitest run src/App.test.jsx`  
Expected: PASS

- [ ] **Step 5: Commit**

```bash
git add package.json vite.config.js tailwind.config.js postcss.config.js index.html src/
git commit -m "chore: scaffold Vite React application with Tailwind and Vitest"
```

---

### Task 2: Accessible Navigation & Header Shell (`web-design-guidelines` & `oil-ui`)

**Files:**
- Create: `src/components/Header.jsx`
- Create: `src/components/Footer.jsx`
- Modify: `src/App.jsx`
- Test: `src/components/Header.test.jsx`

**Interfaces:**
- Produces: `<Header />` dengan navigasi cepat (Obat, Mesin, Lokasi, Cara Pakai) + CTA "Cari Mesin", dan `<Footer />` dengan disclaimer BPOM dan hak cipta.

- [ ] **Step 1: Write failing test in `src/components/Header.test.jsx`**

```jsx
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Header from './Header';

describe('Header Component', () => {
  it('renders navigation links and 24/7 indicator badge', () => {
    render(<Header />);
    expect(screen.getByRole('link', { name: /Katalog Obat/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Titik Mesin/i })).toBeInTheDocument();
    expect(screen.getByText(/24\/7 Siap Sedia/i)).toBeInTheDocument();
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npx vitest run src/components/Header.test.jsx`  
Expected: FAIL (Header not found)

- [ ] **Step 3: Implement Header and Footer components**

Buat `src/components/Header.jsx` dengan sticky blur effect, toggle menu mobile responsif, kontras warna yang lolos audit aksesibilitas, dan `src/components/Footer.jsx` dengan legal disclaimer farmasi. Pasang di `src/App.jsx`.

- [ ] **Step 4: Run test to verify it passes**

Run: `npx vitest run src/components/Header.test.jsx`  
Expected: PASS

- [ ] **Step 5: Commit**

```bash
git commit -m "feat: implement accessible header and footer with legal compliance"
```

---

### Task 3: Interactive Isometric Vending Machine Canvas (`hairline-create`)

**Files:**
- Create: `src/components/HairlineMachine.jsx`
- Test: `src/components/HairlineMachine.test.jsx`

**Interfaces:**
- Produces: `<HairlineMachine />` komponen kanvas HTML5 responsif yang menggambar unit mesin pintar "Berobat" dalam proyeksi isometrik garis presisi yang bereaksi terhadap pointer/mouse atau berotasi halus secara otomatis.

- [ ] **Step 1: Write test in `src/components/HairlineMachine.test.jsx`**

```jsx
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import HairlineMachine from './HairlineMachine';

describe('HairlineMachine Canvas', () => {
  it('renders an accessible canvas with descriptive aria-label', () => {
    render(<HairlineMachine />);
    const canvas = screen.getByLabelText(/Ilustrasi isometrik interaktif mesin pintar Berobat/i);
    expect(canvas).toBeInTheDocument();
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npx vitest run src/components/HairlineMachine.test.jsx`  
Expected: FAIL

- [ ] **Step 3: Implement `HairlineMachine.jsx`**

Mengadopsi engine garis isometrik dari skill `hairline-create`:
- Model geometri 3D isometrik bodi mesin vending (kabinet utama, etalase kaca display obat, layar sentuh antarmuka, slot dispenser obat higienis, dan indikator status LED).
- Pointer tracking untuk rotasi dinamis saat mouse hover.
- Idle animation (sway lembut 2-3 derajat) saat tidak ada sentuhan atau kursor.
- Dukungan `prefers-reduced-motion` untuk menghentikan animasi idle.

- [ ] **Step 4: Run test to verify it passes**

Run: `npx vitest run src/components/HairlineMachine.test.jsx`  
Expected: PASS

- [ ] **Step 5: Commit**

```bash
git commit -m "feat: add interactive isometric Hairline vending machine canvas component"
```

---

### Task 4: Hero Section & Core Value Proposition Pillars

**Files:**
- Create: `src/components/Hero.jsx`
- Create: `src/components/ValuePillars.jsx`
- Modify: `src/App.jsx`
- Test: `src/components/Hero.test.jsx`

**Interfaces:**
- Consumes: `<HairlineMachine />`
- Produces: `<Hero />` dan `<ValuePillars />` (Suhu Farmasi 20–25°C, 100% BPOM, Transaksi Kilat 30 Detik).

- [ ] **Step 1: Write test in `src/components/Hero.test.jsx`**

```jsx
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Hero from './Hero';

describe('Hero Section', () => {
  it('renders primary reassuring headline and CTA buttons', () => {
    render(<Hero />);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/Tiba-tiba Butuh Obat di Jalan\?/i);
    expect(screen.getByRole('button', { name: /Temukan Mesin Terdekat/i })).toBeInTheDocument();
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npx vitest run src/components/Hero.test.jsx`  
Expected: FAIL

- [ ] **Step 3: Implement Hero and ValuePillars**

Buat tata letak split 2 kolom: teks persuasi melegakan di kiri dan kanvas isometrik di kanan. Buat 3 pilar nilai dengan ikon, metrik suhu 20–25°C, sertifikasi BPOM, dan QRIS checkout.

- [ ] **Step 4: Run test to verify it passes**

Run: `npx vitest run src/components/Hero.test.jsx`  
Expected: PASS

- [ ] **Step 5: Commit**

```bash
git commit -m "feat: implement hero section and core value proposition pillars"
```

---

### Task 5: Symptoms Filter & Essential Medicine Catalog Showcase

**Files:**
- Create: `src/data/medicines.js`
- Create: `src/components/MedicineCatalog.jsx`
- Create: `src/components/MedicineCard.jsx`
- Modify: `src/App.jsx`
- Test: `src/components/MedicineCatalog.test.jsx`

**Interfaces:**
- Produces: Katalog obat bebas interaktif dengan tab filter keluhan (Semua, Nyeri & Demam, Maag & Perut, Diare, Luka & P3K, Flu, Mata & Segar, Darurat).

- [ ] **Step 1: Write test in `src/components/MedicineCatalog.test.jsx`**

```jsx
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import MedicineCatalog from './MedicineCatalog';

describe('MedicineCatalog Component', () => {
  it('filters medicines when a category tab is clicked', () => {
    render(<MedicineCatalog />);
    const maagTab = screen.getByRole('tab', { name: /Maag & Lambung/i });
    fireEvent.click(maagTab);
    expect(screen.getByText(/Antasida Doen/i)).toBeInTheDocument();
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npx vitest run src/components/MedicineCatalog.test.jsx`  
Expected: FAIL

- [ ] **Step 3: Implement dataset and catalog component**

Buat `src/data/medicines.js` berisi daftar obat bebas (Paracetamol 500mg, Antasida Doen, Diapet, Plester Hansaplast, Betadine Antiseptik, Insto Tetes Mata, Minyak Kayu Putih, Pembalut Darurat Laurier) dengan indikasi keluhan, aturan pakai ringkas, tanda hijau/biru BPOM, dan estimasi harga wajar. Buat kartu obat dengan layout bersih.

- [ ] **Step 4: Run test to verify it passes**

Run: `npx vitest run src/components/MedicineCatalog.test.jsx`  
Expected: PASS

- [ ] **Step 5: Commit**

```bash
git commit -m "feat: add symptoms filter and essential medicine catalog showcase"
```

---

### Task 6: Public Transit & Location Finder with Live Stock Simulation

**Files:**
- Create: `src/data/locations.js`
- Create: `src/components/LocationFinder.jsx`
- Modify: `src/App.jsx`
- Test: `src/components/LocationFinder.test.jsx`

**Interfaces:**
- Produces: `<LocationFinder />` komponen pencari titik mesin Berobat di area transit/publik dengan status ketersediaan stok live (Tersedia / Siap 24 Jam), jam operasional, dan peta skematik modern.

- [ ] **Step 1: Write test in `src/components/LocationFinder.test.jsx`**

```jsx
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import LocationFinder from './LocationFinder';

describe('LocationFinder Component', () => {
  it('displays public transit locations and filters by search query', () => {
    render(<LocationFinder />);
    expect(screen.getByText(/Stasiun MRT Bundaran HI/i)).toBeInTheDocument();
    
    const searchInput = screen.getByPlaceholderText(/Cari stasiun, mall, atau kampus/i);
    fireEvent.change(searchInput, { target: { value: 'Sudirman' } });
    expect(screen.getByText(/Stasiun KRL Sudirman/i)).toBeInTheDocument();
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npx vitest run src/components/LocationFinder.test.jsx`  
Expected: FAIL

- [ ] **Step 3: Implement LocationFinder and transit schematic**

Buat data 5 titik strategis (Stasiun MRT Bundaran HI, Stasiun KRL Sudirman, Mall Kota Kasablanka, Kampus UI Salemba, Bandara Soetta T3). Tampilkan kartu lokasi dengan badge status operasional 24 jam, detail posisi spesifik (misal: "Lantai Concourse Pintu B"), dan peta rute visual skematik modern yang mudah dipahami.

- [ ] **Step 4: Run test to verify it passes**

Run: `npx vitest run src/components/LocationFinder.test.jsx`  
Expected: PASS

- [ ] **Step 5: Commit**

```bash
git commit -m "feat: add public transit location finder and live availability status"
```

---

### Task 7: How-It-Works Guide & Interactive QRIS Purchase Simulation Modal

**Files:**
- Create: `src/components/HowItWorks.jsx`
- Create: `src/components/VendingModalSimulation.jsx`
- Modify: `src/App.jsx`
- Test: `src/components/HowItWorks.test.jsx`

**Interfaces:**
- Produces: Panduan 3 langkah transaksi cepat (Pilih di Layar -> Scan QRIS -> Ambil Obat) dan modal simulasi interaktif layar mesin vending untuk memberikan gambaran nyata kepada publik cara membeli obat di mesin Berobat.

- [ ] **Step 1: Write test in `src/components/HowItWorks.test.jsx`**

```jsx
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import HowItWorks from './HowItWorks';

describe('HowItWorks Component', () => {
  it('renders 3 steps and opens interactive simulation modal', () => {
    render(<HowItWorks />);
    expect(screen.getByText(/1. Pilih Obat di Layar/i)).toBeInTheDocument();
    expect(screen.getByText(/2. Scan QRIS/i)).toBeInTheDocument();
    expect(screen.getByText(/3. Ambil Obat Higienis/i)).toBeInTheDocument();
    
    const tryButton = screen.getByRole('button', { name: /Coba Simulasi Beli/i });
    fireEvent.click(tryButton);
    expect(screen.getByText(/Simulasi Layar Mesin Berobat/i)).toBeInTheDocument();
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npx vitest run src/components/HowItWorks.test.jsx`  
Expected: FAIL

- [ ] **Step 3: Implement HowItWorks and VendingModalSimulation**

Tampilkan 3 langkah transaksi yang jelas dengan ikon ilustratif dan durasi "Hanya 30 Detik". Tambahkan tombol "Coba Simulasi Beli" yang membuka modal visual layar sentuh mesin Berobat (memilih obat -> simulasi scan QRIS -> animasi obat keluar dari kompartemen).

- [ ] **Step 4: Run test to verify it passes**

Run: `npx vitest run src/components/HowItWorks.test.jsx`  
Expected: PASS

- [ ] **Step 5: Commit**

```bash
git commit -m "feat: add how it works guide and interactive vending machine simulator"
```

---

### Task 8: Design Guidelines & Accessibility Audit (`web-design-guidelines`)

**Files:**
- Modify: `src/components/*`
- Test: `src/App.test.jsx`

**Interfaces:**
- Produces: Landing page yang sepenuhnya lulus audit WCAG 2.1 AA, responsif dari layar 360px hingga 4K, dan build lolos verifikasi produksi.

- [ ] **Step 1: Write end-to-end integration test verifying full landing page sections**

Pastikan semua section (Header, Hero, Value Pillars, Catalog, Location, How it Works, Footer) ter-render harmonis dengan aria-roles yang lengkap.

- [ ] **Step 2: Run test suite to verify full suite passes**

Run: `npx vitest run`  
Expected: All tests PASS.

- [ ] **Step 3: Run production build check**

Run: `npm run build`  
Expected: Build sukses menghasilkan bundle di `dist/` tanpa warning atau error.

- [ ] **Step 4: Commit**

```bash
git commit -m "chore: complete accessibility audit and production build validation"
```

