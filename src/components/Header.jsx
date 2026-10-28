import React, { useState } from 'react';
import { Menu, X, MapPin, Pill, ShieldCheck } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo & Status Badge */}
          <div className="flex items-center gap-3">
            <a 
              href="#" 
              className="flex items-center gap-2.5 text-brand-800 font-extrabold text-xl tracking-tight focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 rounded-lg p-1"
              aria-label="Berobat Beranda"
            >
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-brand-700 to-brand-500 text-white flex items-center justify-center shadow-sm shadow-brand-500/20">
                <Pill className="w-5 h-5 -rotate-45" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-brand-800 to-brand-600 bg-clip-text text-transparent">
                Berobat
              </span>
            </a>

            {/* 24/7 Live Status Indicator */}
            <div className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" aria-hidden="true" />
              <span>24/7 Siap Sedia</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Navigasi Utama">
            <a 
              href="#katalog" 
              className="text-sm font-medium text-slate-600 hover:text-brand-700 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 rounded px-1 py-1"
            >
              Katalog Obat
            </a>
            <a 
              href="#fitur" 
              className="text-sm font-medium text-slate-600 hover:text-brand-700 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 rounded px-1 py-1"
            >
              Standar Mutu
            </a>
            <a 
              href="#lokasi" 
              className="text-sm font-medium text-slate-600 hover:text-brand-700 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 rounded px-1 py-1"
            >
              Titik Mesin
            </a>
            <a 
              href="#cara-pakai" 
              className="text-sm font-medium text-slate-600 hover:text-brand-700 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 rounded px-1 py-1"
            >
              Cara Beli
            </a>
          </nav>

          {/* Right Action CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#lokasi"
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-white bg-brand-700 hover:bg-brand-800 active:bg-brand-900 rounded-xl shadow-sm shadow-brand-700/20 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand-600"
            >
              <MapPin className="w-4 h-4" />
              <span>Cari Mesin Terdekat</span>
            </a>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex md:hidden items-center gap-2">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? "Tutup menu" : "Buka menu navigasi"}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-100 space-y-2 animate-in fade-in slide-in-from-top-2 duration-150">
            <div className="px-3 pb-2 flex items-center gap-1.5 text-xs font-semibold text-emerald-700">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>24/7 Siap Sedia di Ruang Publik</span>
            </div>
            <a
              href="#katalog"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-brand-700"
            >
              Katalog Obat
            </a>
            <a
              href="#fitur"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-brand-700"
            >
              Standar Mutu
            </a>
            <a
              href="#lokasi"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-brand-700"
            >
              Titik Mesin
            </a>
            <a
              href="#cara-pakai"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-brand-700"
            >
              Cara Beli
            </a>
            <div className="pt-2 px-3">
              <a
                href="#lokasi"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-white bg-brand-700 hover:bg-brand-800 rounded-xl shadow-sm"
              >
                <MapPin className="w-4 h-4" />
                <span>Cari Mesin Terdekat</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

