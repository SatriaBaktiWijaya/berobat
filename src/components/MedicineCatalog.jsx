import React, { useState } from 'react';
import { Search, AlertCircle, RefreshCw } from 'lucide-react';
import { MEDICINES_DATA, MEDICINE_CATEGORIES } from '../data/medicines';
import MedicineCard from './MedicineCard';

export default function MedicineCatalog() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredMedicines = MEDICINES_DATA.filter((med) => {
    const matchesCategory = selectedCategory === 'all' || med.category === selectedCategory;
    const matchesSearch =
      med.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      med.genericName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      med.indication.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="katalog" className="py-20 bg-chalk-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-pine-900 tracking-tight leading-tight uppercase">
            Obat Bebas & Pertolongan Pertama di Mesin Berobat
          </h2>
          <p className="mt-4 text-base sm:text-lg text-pine-700 leading-relaxed max-w-[60ch]">
            Pilihan obat umum resmi bersertifikasi BPOM untuk penanganan kilat saat bepergian atau beraktivitas di ruang publik.
          </p>

          {/* Search Bar */}
          <div className="mt-8 max-w-xl relative">
            <Search className="w-5 h-5 text-pine-600 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari keluhan (pusing, maag, diare, luka) atau nama obat..."
              className="w-full pl-12 pr-4 py-3.5 bg-white rounded-lg border-2 border-pine-900 text-sm text-pine-900 placeholder:text-pine-600 font-medium focus:outline-none focus:ring-2 focus:ring-signal-orange"
              aria-label="Cari obat atau keluhan"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-pine-700 hover:text-pine-950 px-2 py-1"
              >
                Hapus
              </button>
            )}
          </div>
        </div>

        {/* Symptoms Category Tabs */}
        <div 
          role="tablist" 
          aria-label="Kategori Keluhan Obat"
          className="flex flex-wrap gap-2.5 mb-10"
        >
          {MEDICINE_CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                role="tab"
                aria-selected={isSelected}
                aria-label={cat.label}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2.5 rounded-lg text-sm font-bold transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-pine-900 ${
                  isSelected
                    ? 'bg-pine-900 text-white shadow-none'
                    : 'bg-white text-pine-900 hover:bg-chalk-200'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Medicines Grid or Empty State */}
        {filteredMedicines.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMedicines.map((med) => (
              <MedicineCard key={med.id} medicine={med} />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-2xl border-2 border-pine-900 p-8 sm:p-12 text-center max-w-lg mx-auto space-y-4">
            <div className="w-12 h-12 bg-amber-100 text-amber-800 rounded-lg flex items-center justify-center mx-auto">
              <AlertCircle className="w-6 h-6" />
            </div>
            <h3 className="font-display text-2xl font-black text-pine-900 uppercase">
              Obat Belum Tersedia di Mesin
            </h3>
            <p className="text-sm text-pine-700 leading-relaxed">
              Mesin Berobat berfokus pada pertolongan pertama & obat bebas darurat. Untuk arahan medis atau obat khusus lainnya, silakan hubungi layanan siaga kami:
            </p>

            {/* Pharmacist & Hotline assistance */}
            <div className="bg-chalk-100 rounded-xl p-4 border border-chalk-200 flex flex-col sm:flex-row items-center justify-around gap-3 text-xs text-left">
              <div>
                <span className="font-bold text-pine-800 block text-xs">Hotline Siaga 24 Jam:</span>
                <span className="font-display text-lg text-signal-orange font-black">0800-1-BEROBAT</span>
              </div>
              <div className="sm:border-l sm:border-chalk-300 sm:pl-4">
                <span className="font-bold text-pine-800 block text-xs">Apoteker Siaga (WhatsApp):</span>
                <a
                  href="https://wa.me/6281200001111?text=Halo%20Apoteker%20Berobat,%20saya%20butuh%20bantuan%20obat"
                  target="_blank"
                  rel="noreferrer"
                  className="text-emerald-800 font-bold hover:underline inline-flex items-center gap-1 mt-0.5 text-sm"
                >
                  <span>Chat Apoteker</span>
                  <span>&rarr;</span>
                </a>
              </div>
            </div>

            <button
              type="button"
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-bold text-white bg-pine-900 hover:bg-pine-800 transition-colors"
            >
              <RefreshCw className="w-4 h-4" />
              <span>Reset Pencarian</span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
