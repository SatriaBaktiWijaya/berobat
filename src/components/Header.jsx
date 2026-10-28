import React, { useState } from 'react';
import { Menu, X, MapPin } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#FAFAF9]/95 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Brand Identity */}
          <div className="flex items-center gap-4">
            <a 
              href="#" 
              className="flex items-center gap-3 text-pine-900 group focus:outline-none focus-visible:ring-2 focus-visible:ring-pine-800 rounded-lg p-1"
              aria-label="Berobat Beranda"
            >
              {/* Bespoke Geometric Medical Cross Emblem */}
              <div className="w-10 h-10 bg-pine-900 text-white rounded-lg flex items-center justify-center p-2 relative">
                <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth="2.75" strokeLinecap="square">
                  <path d="M12 4v16M4 12h16" />
                </svg>
                <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-signal-orange rounded-full border-2 border-white" />
              </div>
              <div className="flex flex-col">
                <span className="font-display text-3xl font-black tracking-tight text-pine-900 leading-none">
                  BEROBAT
                </span>
                <span className="text-xs font-medium text-pine-700 font-sans mt-0.5">
                  Smart Medical Station
                </span>
              </div>
            </a>

            {/* 24/7 Status Badge */}
            <div className="hidden lg:flex items-center gap-2 pl-4 text-xs font-semibold text-pine-800">
              <span className="w-2 h-2 rounded-full bg-emerald-600" />
              <span>24/7 Siap Sedia di Ruang Publik</span>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Navigasi Utama">
            <a 
              href="#katalog" 
              className="text-base font-semibold text-pine-900 hover:text-signal-orange transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-pine-800 rounded py-1"
            >
              Katalog Obat
            </a>
            <a 
              href="#fitur" 
              className="text-base font-semibold text-pine-900 hover:text-signal-orange transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-pine-800 rounded py-1"
            >
              Standar Mutu
            </a>
            <a 
              href="#lokasi" 
              className="text-base font-semibold text-pine-900 hover:text-signal-orange transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-pine-800 rounded py-1"
            >
              Titik Mesin
            </a>
            <a 
              href="#cara-pakai" 
              className="text-base font-semibold text-pine-900 hover:text-signal-orange transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-pine-800 rounded py-1"
            >
              Cara Beli
            </a>
          </nav>

          {/* Right Action Button */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#lokasi"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-bold text-white bg-pine-900 hover:bg-pine-800 active:bg-pine-950 rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-pine-800"
            >
              <MapPin className="w-4 h-4 text-signal-orange" />
              <span>Temukan Mesin</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-lg text-pine-900 hover:bg-chalk-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-pine-800"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? "Tutup menu" : "Buka menu navigasi"}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-chalk-200 space-y-2">
            <div className="px-3 pb-2 text-xs font-semibold text-pine-700 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-600" />
              <span>24/7 Siap Sedia di Ruang Publik</span>
            </div>
            <a
              href="#katalog"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-base font-semibold text-pine-900 hover:bg-chalk-100"
            >
              Katalog Obat
            </a>
            <a
              href="#fitur"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-base font-semibold text-pine-900 hover:bg-chalk-100"
            >
              Standar Mutu
            </a>
            <a
              href="#lokasi"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-base font-semibold text-pine-900 hover:bg-chalk-100"
            >
              Titik Mesin
            </a>
            <a
              href="#cara-pakai"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-base font-semibold text-pine-900 hover:bg-chalk-100"
            >
              Cara Beli
            </a>
            <div className="pt-2 px-3">
              <a
                href="#lokasi"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 text-sm font-bold text-white bg-pine-900 hover:bg-pine-800 rounded-lg"
              >
                <MapPin className="w-4 h-4 text-signal-orange" />
                <span>Temukan Mesin Terdekat</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
