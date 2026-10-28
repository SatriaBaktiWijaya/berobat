import React from 'react';
import { Pill, ShieldCheck, Heart, AlertCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5 text-white font-extrabold text-xl">
              <div className="w-8 h-8 rounded-lg bg-brand-500 text-white flex items-center justify-center">
                <Pill className="w-5 h-5 -rotate-45" />
              </div>
              <span className="text-2xl font-bold tracking-tight">Berobat</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-md">
              Inovasi smart vending machine kesehatan di ruang publik Indonesia. Menyediakan akses instan, higienis, dan terpercaya untuk obat-obatan esensial dan pertolongan pertama selama 24 jam non-stop.
            </p>
            <div className="flex items-center gap-2 text-xs font-medium text-emerald-400 bg-emerald-950/60 border border-emerald-800/80 rounded-lg px-3 py-2 w-fit">
              <ShieldCheck className="w-4 h-4" />
              <span>Semua produk berizin edar resmi BPOM RI</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">Layanan</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#katalog" className="hover:text-brand-400 transition-colors">Katalog Obat Bebas</a></li>
              <li><a href="#lokasi" className="hover:text-brand-400 transition-colors">Cari Mesin Terdekat</a></li>
              <li><a href="#fitur" className="hover:text-brand-400 transition-colors">Standar Suhu Farmasi</a></li>
              <li><a href="#cara-pakai" className="hover:text-brand-400 transition-colors">Panduan Transaksi QRIS</a></li>
            </ul>
          </div>

          {/* Legal & Emergency Support */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">Bantuan & Regulasi</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>Hotline: <span className="text-white font-medium">0800-1-BEROBAT</span></li>
              <li>Email: <span className="text-white font-medium">halo@berobat.id</span></li>
              <li>Layanan Pengaduan Konsumen BPOM</li>
            </ul>
          </div>
        </div>

        {/* Regulatory Disclaimer Box */}
        <div className="mt-8 p-4 rounded-xl bg-slate-800/70 border border-slate-700/80 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
          <p className="text-xs text-slate-300 leading-relaxed">
            <strong className="text-amber-300 font-semibold">Pemberitahuan Medis Resmi:</strong> Mesin pintar Berobat hanya mendistribusikan obat golongan Obat Bebas (lingkaran hijau) dan Obat Bebas Terbatas (lingkaran biru) serta perlengkapan P3K. Tidak melayani obat keras dengan resep dokter. Baca aturan pakai pada kemasan sebelum konsumsi. Apabila gejala sakit berlanjut lebih dari 3 hari atau kondisi memburuk, segera hubungi dokter atau instalasi gawat darurat (IGD) terdekat.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© 2026 Berobat Indonesia. Hak Cipta Dilindungi Undang-Undang.</p>
          <p className="flex items-center gap-1">
            Dirancang untuk pertolongan kesehatan cepat di ruang publik <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
          </p>
        </div>
      </div>
    </footer>
  );
}

