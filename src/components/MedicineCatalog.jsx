import React, { useState } from 'react';
import { Search, Pill, Sparkles, AlertCircle, RefreshCw } from 'lucide-react';
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
    <section id="katalog" className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-brand-100/70 text-brand-800 border border-brand-200 mb-3">
            <Pill className="w-3.5 h-3.5 text-brand-600" />
            <span>Katalog Resmi Vending Machine</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Obat Bebas & Pertolongan Pertama di Mesin Berobat
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Dikelompokkan berdasarkan keluhan yang sering terjadi saat beraktivitas di ruang publik. Semua obat bersertifikasi BPOM dengan tanggal kedaluwarsa yang dipantau real-time.
          </p>

          {/* Search Input Bar */}
          <div className="mt-6 max-w-lg mx-auto relative">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari keluhan (pusing, maag, diare, luka) atau nama obat..."
              className="w-full pl-11 pr-4 py-3 bg-white rounded-xl border border-slate-200 text-sm placeholder:text-slate-400 text-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 shadow-sm"
              aria-label="Cari obat atau keluhan"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-medium text-slate-400 hover:text-slate-600 px-2 py-1"
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
          className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar scroll-smooth"
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
                className={`whitespace-nowrap px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 ${
                  isSelected
                    ? 'bg-brand-700 text-white shadow-sm shadow-brand-700/20'
                    : 'bg-white text-slate-600 hover:bg-slate-100 hover:text-slate-900 border border-slate-200/80'
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
          <div className="bg-white rounded-2xl border border-slate-200 p-10 text-center max-w-md mx-auto space-y-3">
            <div className="w-12 h-12 bg-amber-50 text-amber-600 rounded-full flex items-center justify-center mx-auto">
              <AlertCircle className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-slate-800">
              Obat atau Keluhan Tidak Ditemukan
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Mesin Berobat hanya mendistribusikan obat bebas resmi untuk keluhan umum darurat. Untuk keluhan spesifik atau obat resep, silakan konsultasikan ke dokter atau apotek terdekat.
            </p>
            <button
              type="button"
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold text-brand-700 bg-brand-50 hover:bg-brand-100 transition-colors"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Reset Pencarian</span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
