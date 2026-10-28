import React from 'react';
import { MapPin, Search, ShieldCheck, Thermometer, Zap, Sparkles } from 'lucide-react';
import HairlineMachine from './HairlineMachine';

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-16 lg:pb-24 bg-gradient-to-b from-white via-brand-50/30 to-slate-50 border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Reassuring Hero Copy */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-brand-100/80 text-brand-800 border border-brand-200">
              <Sparkles className="w-3.5 h-3.5 text-brand-600" />
              <span>Inovasi Kesehatan Cerdas Pertama di Ruang Publik</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-[1.15]">
              Tiba-tiba Butuh Obat di Jalan?{' '}
              <span className="bg-gradient-to-r from-brand-700 via-brand-600 to-teal-600 bg-clip-text text-transparent">
                Berobat Hadir 24 Jam di Ruang Publik
              </span>
            </h1>

            {/* Reassuring Empathic Description */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Kepala mendadak berdenyut saat jam kerja, maag kambuh di stasiun transit, atau perlu plester luka kecil? Jangan panik saat apotek jauh atau tutup. Dapatkan obat esensial dan P3K berstandar BPOM secara higienis dalam 30 detik melalui smart vending machine Berobat.
            </p>

            {/* Action CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#lokasi"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-base font-bold text-white bg-brand-700 hover:bg-brand-800 active:bg-brand-900 rounded-xl shadow-md shadow-brand-700/25 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand-600"
              >
                <MapPin className="w-5 h-5 text-white" />
                <span>Temukan Mesin Terdekat</span>
              </a>

              <a
                href="#katalog"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold text-slate-700 bg-white hover:bg-slate-50 hover:text-slate-900 border border-slate-300 rounded-xl shadow-sm transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
              >
                <Search className="w-4 h-4 text-slate-500" />
                <span>Lihat Koleksi Obat Bebas</span>
              </a>
            </div>

            {/* Micro Highlights */}
            <div className="pt-4 grid grid-cols-3 gap-3 border-t border-slate-200/80 max-w-lg mx-auto lg:mx-0 text-left">
              <div className="flex items-center gap-2">
                <Thermometer className="w-4 h-4 text-brand-600 shrink-0" />
                <span className="text-xs font-semibold text-slate-700">Suhu 20–25°C</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="text-xs font-semibold text-slate-700">100% BPOM</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-amber-500 shrink-0" />
                <span className="text-xs font-semibold text-slate-700">QRIS 30 Detik</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hairline Interactive Isometric Vending Machine */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
            <div className="w-full max-w-md bg-gradient-to-b from-white to-slate-100/80 rounded-2xl p-4 border border-slate-200/90 shadow-xl shadow-slate-200/50">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100 text-xs text-slate-500 font-medium">
                <span className="flex items-center gap-1.5 text-brand-700 font-bold">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  Unit Cerdas Berobat #01
                </span>
                <span className="bg-slate-100 text-slate-600 px-2 py-0.5 rounded font-mono">ISOMETRIC 3D</span>
              </div>
              <HairlineMachine />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

