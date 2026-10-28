import React from 'react';
import { Thermometer, ShieldCheck, Zap } from 'lucide-react';

export default function ValuePillars() {
  return (
    <section id="fitur" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-14">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-pine-900 tracking-tight leading-tight uppercase">
            Standar Keselamatan Farmasi di Ruang Publik
          </h2>
          <p className="mt-4 text-base sm:text-lg text-pine-700 leading-relaxed max-w-[60ch]">
            Kami menerapkan kontrol ketat pada setiap unit agar obat yang Anda dapatkan tetap segar, higienis, dan berkhasiat maksimal sebagaimana standar apotek konvensional.
          </p>
        </div>

        {/* Asymmetrical Editorial Specimen Layout without generic icon-card toppers */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Main Hero Specimen: Temperature Control (Spans 6 cols) */}
          <div className="lg:col-span-6 bg-pine-900 text-white rounded-2xl p-8 sm:p-10 flex flex-col justify-between motion-reveal">
            <div>
              <span className="font-display text-5xl sm:text-7xl font-black text-white tracking-tight block leading-none mb-6">
                20°C – 25°C
              </span>
              <h3 className="text-2xl font-bold text-white mb-3">
                Suhu Farmasi Presisi (20–25°C)
              </h3>
              <p className="text-base text-slate-300 leading-relaxed max-w-[50ch]">
                Udara tropis yang panas dapat merusak komposisi zat aktif obat. Setiap vending machine Berobat dilengkapi pendingin presisi dengan isolasi termal ganda yang memantau suhu internal 24 jam sehari.
              </p>
            </div>
            <div className="pt-6 mt-8 text-sm text-slate-300">
              Kestabilan zat aktif paracetamol, antasida, dan cairan steril selalu terjamin.
            </div>
          </div>

          {/* Secondary Stack: BPOM & 30-Second QRIS (Spans 6 cols) */}
          <div className="lg:col-span-6 flex flex-col gap-6 justify-between">
            {/* Box 1: BPOM Compliance */}
            <div className="bg-chalk-100 rounded-2xl p-8 flex-1 flex flex-col justify-center motion-reveal">
              <span className="font-display text-4xl sm:text-5xl font-black text-emerald-800 tracking-tight block leading-none mb-2">
                100% RESMI
              </span>
              <h3 className="text-xl font-bold text-pine-900 mb-2">
                100% Obat Bebas Resmi BPOM
              </h3>
              <p className="text-base text-pine-700 leading-relaxed max-w-[50ch]">
                Kami hanya mendistribusikan obat resmi bertanda lingkaran hijau (Obat Bebas) dan lingkaran biru (Obat Bebas Terbatas) langsung dari pabrikan farmasi terdaftar di Indonesia.
              </p>
            </div>

            {/* Box 2: 30-Second QRIS */}
            <div className="bg-chalk-100 rounded-2xl p-8 flex-1 flex flex-col justify-center motion-reveal">
              <span className="font-display text-4xl sm:text-5xl font-black text-pine-900 tracking-tight block leading-none mb-2">
                30 DETIK
              </span>
              <h3 className="text-xl font-bold text-pine-900 mb-2">
                Transaksi Kilat 30 Detik Tanpa Antre
              </h3>
              <p className="text-base text-pine-700 leading-relaxed max-w-[50ch]">
                Sentuh layar sentuh HD, pilih obat, pindai barcode QRIS melalui GoPay, OVO, Dana, ShopeePay, atau mobile banking apa saja. Obat langsung keluar di baki sanitasi otomatis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
