import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export default function MedicineCard({ medicine }) {
  const isGreen = medicine.classification.includes('Hijau') || medicine.classification.includes('Herbal') || medicine.classification.includes('Bebas');
  const isBlue = medicine.classification.includes('Biru');

  return (
    <div className="bg-white rounded-xl p-6 flex flex-col justify-between hover:bg-white/90 transition-colors">
      <div>
        {/* Classification Tag */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <span className="text-xs font-bold text-pine-900 bg-chalk-100 px-3 py-1 rounded">
            {medicine.badgeText}
          </span>

          <div className="flex items-center gap-2">
            <span
              className={`w-3 h-3 rounded-full shrink-0 ${
                isGreen ? 'bg-emerald-600' : isBlue ? 'bg-blue-600' : 'bg-teal-700'
              }`}
            />
            <span className="text-xs text-pine-700 font-semibold">
              {medicine.classification}
            </span>
          </div>
        </div>

        {/* Medicine Name & Generic */}
        <h3 className="font-display text-2xl font-black text-pine-900 uppercase tracking-tight">
          {medicine.name}
        </h3>
        <p className="text-sm text-pine-600 italic mt-0.5 mb-3 font-sans">
          {medicine.genericName}
        </p>

        {/* Indication / Khasiat */}
        <p className="text-sm text-pine-800 leading-relaxed mb-4">
          <strong className="text-pine-900 font-bold">Khasiat:</strong> {medicine.indication}
        </p>

        {/* Dosage & Packaging */}
        <div className="bg-chalk-100 rounded-lg p-3 text-xs text-pine-800 space-y-1 mb-5">
          <div><strong className="text-pine-900 font-semibold">Aturan Pakai:</strong> {medicine.dosage}</div>
          <div><strong className="text-pine-900 font-semibold">Kemasan:</strong> {medicine.packSize}</div>
        </div>
      </div>

      {/* Price & Availability */}
      <div className="pt-4 flex items-center justify-between">
        <div>
          <span className="text-xs text-pine-700 font-semibold block">
            Harga resmi unit
          </span>
          <span className="font-display text-2xl font-black text-signal-orange">
            Rp {medicine.price.toLocaleString('id-ID')}
          </span>
        </div>

        <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1.5 rounded">
          <span className="w-2 h-2 rounded-full bg-emerald-600 inline-block" />
          <span>Tersedia</span>
        </div>
      </div>
    </div>
  );
}
