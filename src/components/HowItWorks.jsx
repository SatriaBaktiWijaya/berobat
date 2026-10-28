import React, { useState } from 'react';
import { Touchpad, QrCode, PackageCheck, Play } from 'lucide-react';
import VendingModalSimulation from './VendingModalSimulation';

export default function HowItWorks() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const steps = [
    {
      title: '1. Pilih Obat di Layar',
      desc: 'Sentuh layar interaktif mesin. Pilih berdasarkan gejala keluhan sakit yang sedang dialami atau cari langsung merek obat bebas yang biasa Anda gunakan.',
      badge: 'Layar Sentuh HD',
    },
    {
      title: '2. Scan QRIS',
      desc: 'Kode QRIS dinamis akan muncul seketika di layar. Buka aplikasi e-wallet atau mobile banking apa saja, arahkan kamera, dan selesaikan pembayaran.',
      badge: 'Semua E-Wallet',
    },
    {
      title: '3. Ambil Obat Higienis',
      desc: 'Sistem kompartemen internal mengantarkan obat ke baki bawah yang terjaga kebersihannya. Dorong penutup lembut dan obat siap Anda konsumsi.',
      badge: 'Selesai 30 Detik',
    },
  ];

  return (
    <section id="cara-pakai" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-pine-900 tracking-tight leading-tight uppercase">
            Cara Praktis Membeli Obat di Mesin Berobat
          </h2>
          <p className="mt-4 text-base sm:text-lg text-pine-700 leading-relaxed max-w-[60ch]">
            Didesain khusus untuk situasi mendesak. Seluruh proses transaksi berlangsung cepat hanya dalam 3 langkah sederhana di bawah 30 detik.
          </p>
        </div>

        {/* 3 Steps Editorial Columns without generic icon-card toppers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">
          {steps.map((s, idx) => (
            <div
              key={idx}
              className="bg-chalk-100 rounded-2xl p-8 flex flex-col justify-between motion-reveal"
            >
              <div>
                <h3 className="font-display text-2xl sm:text-3xl font-black text-pine-900 uppercase tracking-tight mb-3">
                  {s.title}
                </h3>
                <p className="text-base text-pine-700 leading-relaxed mb-4">
                  {s.desc}
                </p>
                <span className="text-xs font-semibold text-pine-600 block">
                  {s.badge}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Simulation Banner CTA */}
        <div className="bg-pine-900 rounded-3xl p-8 sm:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8 motion-reveal">
          <div className="space-y-3 text-center md:text-left max-w-xl">
            <h3 className="font-display text-3xl sm:text-4xl font-black text-white uppercase tracking-tight leading-tight">
              Simulasi Belanja di Mesin
            </h3>
            <p className="text-base text-slate-300 leading-relaxed">
              Rasakan pengalaman sentuh layar, simulasi pembayaran QRIS, dan pengambilan obat langsung di browser Anda sekarang.
            </p>
          </div>

          <button
            type="button"
            onClick={() => setIsModalOpen(true)}
            className="shrink-0 inline-flex items-center gap-3 px-8 py-4 rounded-xl text-base font-bold bg-signal-orange text-white hover:bg-signal-hover active:bg-signal-hover transition-transform hover:-translate-y-0.5"
          >
            <Play className="w-5 h-5 fill-current" />
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
