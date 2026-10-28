import React from 'react';
import { ShieldCheck, Heart, AlertCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-pine-950 text-slate-300 pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-14">
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-signal-orange text-white rounded-lg flex items-center justify-center p-2 relative">
                <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="2.75" strokeLinecap="square">
                  <path d="M12 4v16M4 12h16" />
                </svg>
              </div>
              <span className="font-display text-3xl font-black text-white tracking-tight uppercase">
                BEROBAT
              </span>
            </div>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-md">
              Inovasi smart vending machine kesehatan di ruang publik Indonesia. Menyediakan akses instan, higienis, dan terpercaya untuk obat-obatan esensial dan pertolongan pertama selama 24 jam non-stop.
            </p>
            <div className="flex items-center gap-2 text-xs font-bold text-teal-300 bg-white/5 rounded-lg px-3.5 py-2.5 w-fit">
              <ShieldCheck className="w-4 h-4 text-teal-300 shrink-0" />
              <span>Semua produk berizin edar resmi BPOM RI</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-teal-400">Layanan</h4>
            <ul className="space-y-2.5 text-sm text-slate-300 font-medium">
              <li><a href="#katalog" className="hover:text-white transition-colors">Katalog Obat Bebas</a></li>
              <li><a href="#lokasi" className="hover:text-white transition-colors">Cari Mesin Terdekat</a></li>
              <li><a href="#fitur" className="hover:text-white transition-colors">Standar Suhu Farmasi</a></li>
              <li><a href="#cara-pakai" className="hover:text-white transition-colors">Panduan Transaksi QRIS</a></li>
            </ul>
          </div>

          {/* Legal & Emergency Support */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-teal-400">Bantuan & Regulasi</h4>
            <ul className="space-y-2.5 text-sm text-slate-300 font-medium">
              <li>Hotline: <span className="text-white font-bold">0800-1-BEROBAT</span></li>
              <li>Email: <span className="text-white font-bold">halo@berobat.id</span></li>
              <li>Layanan Pengaduan Konsumen BPOM</li>
            </ul>
          </div>
        </div>

        {/* Regulatory Disclaimer Box */}
        <div className="mt-10 p-5 rounded-2xl bg-white/5 flex items-start gap-4 max-w-4xl">
          <AlertCircle className="w-5 h-5 text-signal-orange shrink-0 mt-0.5" />
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-[70ch]">
            <strong className="text-white font-bold">Pemberitahuan Medis Resmi:</strong> Mesin pintar Berobat hanya mendistribusikan obat golongan Obat Bebas (lingkaran hijau) dan Obat Bebas Terbatas (lingkaran biru) serta perlengkapan P3K. Tidak melayani obat keras dengan resep dokter. Baca aturan pakai pada kemasan sebelum konsumsi. Apabila gejala sakit berlanjut lebih dari 3 hari atau kondisi memburuk, segera hubungi dokter atau instalasi gawat darurat (IGD) terdekat.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© 2026 Berobat Indonesia. Hak Cipta Dilindungi Undang-Undang.</p>
          <p className="flex items-center gap-1.5 text-slate-400">
            Dirancang untuk pertolongan kesehatan cepat di ruang publik <Heart className="w-3.5 h-3.5 text-signal-orange fill-signal-orange" />
          </p>
        </div>
      </div>
    </footer>
  );
}
