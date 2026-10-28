import React from 'react';
import { MapPin, Search, Thermometer, ShieldCheck, Zap } from 'lucide-react';
import HairlineMachine from './HairlineMachine';

export default function Hero() {
  return (
    <section className="relative pt-12 pb-16 lg:pt-16 lg:pb-24 bg-[#FAFAF9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Monumental Hero Headline (Full Width - Exactly 2 lines at all desktop and mobile viewports) */}
        <div className="mb-10 lg:mb-12">
          <h1 className="font-display text-[26px] sm:text-5xl lg:text-7xl xl:text-8xl font-black text-pine-900 tracking-tight leading-[0.88] uppercase motion-reveal">
            <span className="block">Tiba-tiba Butuh Obat di Jalan?</span>
            <span className="block text-signal-orange">Berobat Siap 24 Jam.</span>
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Narrative & Action (Spans 7 cols) */}
          <div className="lg:col-span-7 space-y-8 text-left">
            {/* Disciplined Lead Copy */}
            <p className="text-lg sm:text-xl text-pine-700 leading-relaxed max-w-[54ch] motion-reveal">
              Pusing mendadak di kantor, maag perih di stasiun transit, atau butuh plester luka? Dapatkan obat bebas berizin resmi BPOM langsung dari unit smart vending machine Berobat dalam 30 detik tanpa antre.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2 motion-reveal">
              <a
                href="#lokasi"
                className="inline-flex items-center justify-center gap-3 px-7 py-4 text-base font-bold text-white bg-signal-orange hover:bg-signal-hover active:bg-signal-hover rounded-lg transition-transform hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-signal-orange"
              >
                <MapPin className="w-5 h-5 text-white" />
                <span>Temukan Mesin Terdekat</span>
              </a>

              <a
                href="#katalog"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 text-base font-bold text-pine-900 bg-white hover:bg-chalk-100 border-2 border-pine-900 rounded-lg transition-transform hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-pine-800"
              >
                <Search className="w-4 h-4 text-pine-800" />
                <span>Koleksi Obat Bebas</span>
              </a>
            </div>

            {/* Core Verification Facts */}
            <div className="pt-6 grid grid-cols-3 gap-6">
              <div className="motion-reveal">
                <span className="font-display text-2xl sm:text-3xl font-black text-pine-900 block leading-none">
                  20°–25°C
                </span>
                <span className="text-xs sm:text-sm text-pine-700 font-medium mt-1 block">
                  Suhu Farmasi Terjaga
                </span>
              </div>
              <div className="motion-reveal">
                <span className="font-display text-2xl sm:text-3xl font-black text-pine-900 block leading-none">
                  100%
                </span>
                <span className="text-xs sm:text-sm text-pine-700 font-medium mt-1 block">
                  Obat Resmi BPOM
                </span>
              </div>
              <div className="motion-reveal">
                <span className="font-display text-2xl sm:text-3xl font-black text-pine-900 block leading-none">
                  30 DETIK
                </span>
                <span className="text-xs sm:text-sm text-pine-700 font-medium mt-1 block">
                  Selesai Scan QRIS
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Physical Vending Machine Canvas (Spans 5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="w-full bg-white rounded-2xl p-6 border-2 border-pine-900 relative motion-reveal">
              <div className="flex items-center justify-between pb-4 text-xs font-bold text-pine-800">
                <span className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 motion-pulse" />
                  Unit Cerdas Berobat #01
                </span>
                <span className="text-pine-600 font-semibold text-xs">
                  Model interaktif 3D
                </span>
              </div>
              <HairlineMachine />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
