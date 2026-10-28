import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from './App';

describe('Berobat Landing Page Integration & Accessibility', () => {
  it('renders all 7 key sections with appropriate landmarks and headings', () => {
    render(<App />);

    // 1. Header with branding and status
    expect(screen.getByRole('link', { name: /Berobat Beranda/i })).toBeInTheDocument();
    expect(screen.getByText(/24\/7 Siap Sedia/i)).toBeInTheDocument();

    // 2. Hero Section
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/Tiba-tiba Butuh Obat di Jalan\?/i);
    expect(screen.getByRole('img', { name: /Ilustrasi isometrik interaktif mesin pintar Berobat/i })).toBeInTheDocument();

    // 3. Value Pillars
    expect(screen.getByText(/Suhu Farmasi Presisi \(20–25°C\)/i)).toBeInTheDocument();
    expect(screen.getByText(/100% Obat Bebas Resmi BPOM/i)).toBeInTheDocument();
    expect(screen.getByText(/Transaksi Kilat 30 Detik/i)).toBeInTheDocument();

    // 4. Medicine Catalog Showcase
    expect(screen.getByText(/Obat Bebas & Pertolongan Pertama di Mesin Berobat/i)).toBeInTheDocument();
    expect(screen.getByText(/Paracetamol 500 mg/i)).toBeInTheDocument();

    // 5. Public Transit Location Finder
    expect(screen.getByText(/Temukan Smart Vending Machine Berobat Terdekat/i)).toBeInTheDocument();
    expect(screen.getAllByText(/Stasiun MRT Bundaran HI/i).length).toBeGreaterThanOrEqual(1);

    // 6. How It Works & Simulation CTA
    expect(screen.getByText(/Cara Praktis Membeli Obat di Mesin Berobat/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Coba Simulasi Beli Sekarang/i })).toBeInTheDocument();

    // 7. Footer & Legal Compliance
    expect(screen.getByText(/Pemberitahuan Medis Resmi/i)).toBeInTheDocument();
    expect(screen.getByText(/© 2026 Berobat Indonesia/i)).toBeInTheDocument();
  });

  it('allows end-to-end user interaction: filter medicine, search location, and run simulation modal', () => {
    render(<App />);

    // Test filter in catalog
    const p3kTab = screen.getByRole('tab', { name: /Luka & P3K/i });
    fireEvent.click(p3kTab);
    expect(screen.getByText(/Hansaplast Plester Elastis/i)).toBeInTheDocument();

    // Test search in location finder
    const searchInput = screen.getByPlaceholderText(/Cari stasiun, mall, atau kampus/i);
    fireEvent.change(searchInput, { target: { value: 'Bandara' } });
    expect(screen.getAllByText(/Bandara Soekarno-Hatta Terminal 3/i).length).toBeGreaterThanOrEqual(1);

    // Test simulation modal opening and completing
    const simButton = screen.getByRole('button', { name: /Coba Simulasi Beli Sekarang/i });
    fireEvent.click(simButton);
    expect(screen.getByText(/Simulasi Layar Mesin Berobat/i)).toBeInTheDocument();

    // Proceed to Step 2 in simulation
    const payButton = screen.getByRole('button', { name: /Lanjut ke Pembayaran QRIS/i });
    fireEvent.click(payButton);
    expect(screen.getByText(/Scan dengan Semua Aplikasi Pembayaran/i)).toBeInTheDocument();

    // Proceed to Step 3 in simulation
    const finishScan = screen.getByRole('button', { name: /Simulasikan Berhasil Scan QRIS/i });
    fireEvent.click(finishScan);
    expect(screen.getByText(/Pembayaran Sukses!/i)).toBeInTheDocument();
    expect(screen.getByText(/Obat berhasil dikeluarkan ke baki sanitasi/i)).toBeInTheDocument();

    // Close modal
    const closeBtn = screen.getByRole('button', { name: 'Tutup' });
    fireEvent.click(closeBtn);
    expect(screen.queryByText(/Simulasi Layar Mesin Berobat/i)).not.toBeInTheDocument();
  });
});
