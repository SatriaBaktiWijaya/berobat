import React from 'react';
import { Thermometer, ShieldCheck, Zap, Sparkles } from 'lucide-react';

export default function ValuePillars() {
  const pillars = [
    {
      icon: Thermometer,
      iconBg: 'bg-teal-50 text-teal-700 border-teal-200',
      title: 'Suhu Farmasi Presisi (20–25°C)',
      description: 'Dilengkapi pendingin aktif otomatis dan insulasi termal ganda yang memantau suhu 24 jam non-stop agar zat aktif obat tidak rusak oleh panas cuaca tropis.',
      badge: 'Standar CPOB',
    },
    {
      icon: ShieldCheck,
      iconBg: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      title: '100% Obat Bebas Resmi BPOM',
      description: 'Hanya menyediakan obat golongan Bebas (lingkaran hijau) dan Bebas Terbatas (lingkaran biru) langsung dari distributor farmasi bersertifikasi resmi.',
      badge: 'Izin Edar Resmi',
    },
    {
      icon: Zap,
      iconBg: 'bg-amber-50 text-amber-700 border-amber-200',
      title: 'Transaksi Kilat 30 Detik',
      description: 'Cukup sentuh layar untuk memilih obat, scan barcode QRIS menggunakan e-wallet atau mobile banking apa saja, dan obat keluar secara higienis tanpa antre.',
      badge: 'Cashless & QRIS',
    },
  ];

  return (
    <section id="fitur" className="py-16 sm:py-20 bg-white border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-brand-50 text-brand-700 border border-brand-200 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-brand-600" />
            <span>Kualitas Terjamin</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Mengapa Vending Machine Berobat Aman & Terpercaya?
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            Kami menerapkan standar keselamatan farmasi ketat agar Anda selalu mendapatkan obat yang segar, aman, dan berkhasiat optimal kapan pun dibutuhkan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <div
                key={index}
                className="relative bg-slate-50/70 hover:bg-white rounded-2xl p-7 border border-slate-200 hover:border-brand-200 hover:shadow-lg hover:shadow-brand-500/5 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className={`w-12 h-12 rounded-xl border flex items-center justify-center ${pillar.iconBg}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 bg-white px-2.5 py-1 rounded-md border border-slate-200">
                      {pillar.badge}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2.5">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

