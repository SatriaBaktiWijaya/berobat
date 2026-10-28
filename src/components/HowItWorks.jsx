import React, { useState } from 'react';
import { Touchpad, QrCode, PackageCheck, Play, ArrowRight, Sparkles } from 'lucide-react';
import VendingModalSimulation from './VendingModalSimulation';

export default function HowItWorks() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const steps = [
    {
      number: '01',
      title: '1. Pilih Obat di Layar',
      desc: 'Sentuh layar interaktif mesin. Pilih berdasarkan gejala keluhan sakit yang sedang dialami atau langsung cari merek obat esensial yang biasa Anda gunakan.',
      icon: Touchpad,
      badge: 'Layar Sentuh HD',
    },
    {
      number: '02',
      title: '2. Scan QRIS',
      desc: 'Kode QRIS dinamis akan muncul seketika di layar. Buka aplikasi e-wallet atau mobile banking favorit Anda, arahkan kamera, dan selesaikan pembayaran.',
      icon: QrCode,
      badge: 'Semua E-Wallet',
    },
    {
      number: '03',
      title: '3. Ambil Obat Higienis',
      desc: 'Sistem kompartemen otomatis akan mengantarkan obat ke baki bawah yang terjaga kebersihannya. Dorong penutup lembut dan obat siap Anda konsumsi.',
      icon: PackageCheck,
      badge: 'Selesai 30 Detik',
    },
  ];

  return (
    <section id="cara-pakai" className="py-16 sm:py-24 bg-gradient-to-b from-white via-brand-50/20 to-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-brand-100/70 text-brand-800 border border-brand-200 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-brand-600" />
            <span>Mudah & Tanpa Antre</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Cara Praktis Membeli Obat di Mesin Berobat
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Didesain khusus untuk situasi mendesak. Seluruh proses transaksi berlangsung cepat hanya dalam 3 langkah sederhana di bawah 30 detik.
          </p>
        </div>

        {/* 3 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 relative">
          {steps.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-8 border border-slate-200/90 shadow-sm hover:shadow-md hover:border-brand-300 transition-all flex flex-col justify-between relative group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-black text-brand-200 group-hover:text-brand-300 font-mono transition-colors">
                      {s.number}
                    </span>
                    <span className="text-[11px] font-bold text-brand-700 bg-brand-50 border border-brand-200 px-2.5 py-1 rounded-full">
                      {s.badge}
                    </span>
                  </div>

                  <div className="w-12 h-12 rounded-xl bg-brand-50 text-brand-700 flex items-center justify-center mb-5 group-hover:bg-brand-600 group-hover:text-white transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {s.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Simulation Banner CTA */}
        <div className="bg-gradient-to-r from-brand-900 via-teal-900 to-slate-900 rounded-3xl p-8 sm:p-10 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs font-mono font-bold text-teal-300 uppercase tracking-wider block">
              Simulasi Interaktif
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Penasaran Bagaimana Rasanya Belanja di Mesin Berobat?
            </h3>
            <p className="text-sm text-slate-300 max-w-xl">
              Coba langsung simulasi layar sentuh mesin Berobat di layar browser Anda sekarang. Tanpa perlu uang sungguhan.
            </p>
          </div>

          <button
            type="button"
            onClick={() => setIsModalOpen(true)}
            className="shrink-0 inline-flex items-center gap-2.5 px-6 py-4 rounded-xl text-sm font-bold bg-white text-slate-900 hover:bg-teal-50 active:scale-95 shadow-lg transition-all"
          >
            <Play className="w-4 h-4 text-brand-700 fill-brand-700" />
            <span>Coba Simulasi Beli Sekarang</span>
          </button>
        </div>
      </div>

      {/* Vending Modal Component */}
      <VendingModalSimulation
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
}
