import React from 'react';
import { ShieldCheck, Info, CheckCircle2 } from 'lucide-react';

export default function MedicineCard({ medicine, onSelect }) {
  const isGreen = medicine.classification.includes('Hijau') || medicine.classification.includes('Herbal') || medicine.classification.includes('Bebas');
  const isBlue = medicine.classification.includes('Biru');

  return (
    <div className="bg-white rounded-2xl border border-slate-200/90 hover:border-brand-300 p-5 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">
      <div>
        {/* Top Badges */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="text-[11px] font-semibold text-brand-700 bg-brand-50 border border-brand-200 px-2.5 py-0.5 rounded-full">
            {medicine.badgeText}
          </span>

          {/* BPOM Symbol dot */}
          <div className="flex items-center gap-1.5" title={medicine.classification}>
            <span
              className={`w-3.5 h-3.5 rounded-full border border-white shadow-sm flex items-center justify-center text-[8px] font-bold text-white ${
                isGreen ? 'bg-emerald-600' : isBlue ? 'bg-blue-600' : 'bg-teal-600'
              }`}
            >
              •
            </span>
            <span className="text-[11px] text-slate-500 font-medium">
              {medicine.classification}
            </span>
          </div>
        </div>

        {/* Medicine Name & Generic */}
        <h3 className="text-base font-bold text-slate-900 group-hover:text-brand-700 transition-colors">
          {medicine.name}
        </h3>
        <p className="text-xs text-slate-500 italic mt-0.5 mb-3 font-mono">
          {medicine.genericName}
        </p>

        {/* Indication / Keluhan */}
        <p className="text-xs text-slate-600 leading-relaxed mb-3">
          <strong className="text-slate-800 font-semibold">Khasiat:</strong> {medicine.indication}
        </p>

        {/* Dosage / Aturan Pakai */}
        <div className="bg-slate-50 rounded-lg p-2.5 border border-slate-100 text-[11px] text-slate-600 space-y-1 mb-4">
          <div><strong className="text-slate-700">Dosis Singkat:</strong> {medicine.dosage}</div>
          <div><strong className="text-slate-700">Kemasan Mesin:</strong> {medicine.packSize}</div>
        </div>
      </div>

      {/* Bottom Price & Vending Availability */}
      <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
        <div>
          <span className="text-[10px] text-slate-400 uppercase font-semibold block">Harga di Mesin</span>
          <span className="text-base font-extrabold text-brand-700">
            Rp {medicine.price.toLocaleString('id-ID')}
          </span>
        </div>

        <div className="flex items-center gap-1 text-[11px] font-semibold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-md">
          <CheckCircle2 className="w-3.5 h-3.5" />
          <span>Stok Tersedia</span>
        </div>
      </div>
    </div>
  );
}

