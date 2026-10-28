import React, { useState, useEffect } from 'react';
import { X, QrCode, CheckCircle2, PackageCheck, Sparkles, ArrowRight, RefreshCw, Smartphone } from 'lucide-react';

export default function VendingModalSimulation({ isOpen, onClose }) {
  const [step, setStep] = useState(1); // 1: Choose, 2: Scan QRIS, 3: Dispense
  const [selectedItem, setSelectedItem] = useState({
    name: 'Paracetamol 500 mg',
    price: 4500,
    pack: 'Strip isi 4 tablet',
  });

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const mockItems = [
    { name: 'Paracetamol 500 mg', price: 4500, pack: 'Strip isi 4 tablet' },
    { name: 'Antasida Doen Kunyah', price: 5000, pack: 'Strip isi 4 tablet' },
    { name: 'Hansaplast Plester', price: 8000, pack: 'Amplop isi 10 strip' },
  ];

  const handleSimulatePayment = () => {
    setStep(3);
  };

  const handleReset = () => {
    setStep(1);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="sim-title"
    >
      <div className="relative w-full max-w-lg bg-slate-900 rounded-3xl border-4 border-slate-700 shadow-2xl overflow-hidden flex flex-col">
        {/* Vending Top Frame Bar */}
        <div className="px-5 py-3 bg-slate-800 border-b border-slate-700 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <span id="sim-title" className="text-xs font-mono font-bold tracking-wider text-teal-400 uppercase">
              Simulasi Layar Mesin Berobat
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
            aria-label="Tutup simulasi"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Machine Screen Body */}
        <div className="p-6 bg-slate-950 text-white min-h-[380px] flex flex-col justify-between">
          {step === 1 && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-base font-bold text-white">Sentuh untuk Memilih Obat</h4>
                  <p className="text-xs text-slate-400">Pilih salah satu produk untuk simulasi:</p>
                </div>
                <span className="text-[11px] font-mono bg-brand-950 text-brand-400 border border-brand-800 px-2 py-0.5 rounded">
                  Langkah 1/3
                </span>
              </div>

              <div className="space-y-2.5">
                {mockItems.map((item, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setSelectedItem(item)}
                    className={`w-full p-3.5 rounded-xl border text-left transition-all flex items-center justify-between ${
                      selectedItem.name === item.name
                        ? 'bg-brand-950/80 border-brand-500 ring-1 ring-brand-500'
                        : 'bg-slate-900 border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    <div>
                      <div className="font-bold text-sm text-white">{item.name}</div>
                      <div className="text-xs text-slate-400">{item.pack}</div>
                    </div>
                    <div className="text-sm font-extrabold text-teal-400 font-mono">
                      Rp {item.price.toLocaleString('id-ID')}
                    </div>
                  </button>
                ))}
              </div>

              <button
                type="button"
                onClick={() => setStep(2)}
                className="w-full mt-4 py-3 bg-brand-600 hover:bg-brand-500 text-white font-bold rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-brand-600/30 transition-all text-sm"
              >
                <span>Lanjut ke Pembayaran QRIS</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}

          {step === 2 && (
            <div className="text-center space-y-4">
              <div className="flex items-center justify-between text-xs text-slate-400 pb-2 border-b border-slate-800">
                <span>Total: <strong className="text-teal-400 text-sm">Rp {selectedItem.price.toLocaleString('id-ID')}</strong></span>
                <span className="font-mono text-brand-400">Langkah 2/3</span>
              </div>

              <div className="p-4 bg-white rounded-2xl w-fit mx-auto shadow-inner">
                {/* Mock QR Code Pattern */}
                <div className="w-36 h-36 bg-slate-900 rounded-lg p-2 flex flex-col items-center justify-center relative">
                  <QrCode className="w-28 h-28 text-white" />
                  <span className="absolute text-[8px] font-bold text-slate-900 bg-teal-300 px-1.5 py-0.5 rounded">
                    QRIS RESMI
                  </span>
                </div>
              </div>

              <div>
                <h4 className="text-sm font-bold text-white">Scan dengan Semua Aplikasi Pembayaran</h4>
                <p className="text-xs text-slate-400 mt-1">
                  Mendukung GoPay, OVO, Dana, ShopeePay, BCA, Mandiri, BRI, Livin, dll.
                </p>
              </div>

              <button
                type="button"
                onClick={handleSimulatePayment}
                className="w-full py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/30 transition-all text-sm"
              >
                <Smartphone className="w-4 h-4" />
                <span>Simulasikan Berhasil Scan QRIS</span>
              </button>
            </div>
          )}

          {step === 3 && (
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto border border-emerald-500/40">
                <PackageCheck className="w-8 h-8 animate-bounce" />
              </div>

              <div>
                <h4 className="text-lg font-black text-white">Pembayaran Sukses!</h4>
                <p className="text-xs text-emerald-300 font-semibold mt-1">
                  Obat berhasil dikeluarkan ke baki sanitasi di bagian bawah mesin.
                </p>
              </div>

              <div className="p-4 bg-slate-900 rounded-xl border border-slate-800 text-xs text-slate-300 max-w-xs mx-auto">
                <div className="font-bold text-white mb-1">{selectedItem.name}</div>
                <div>Status: <span className="text-emerald-400 font-semibold">Telah Dikeluarkan</span></div>
                <div className="text-[11px] text-slate-500 mt-1">Silakan dorong penutup baki untuk mengambil produk.</div>
              </div>

              <div className="pt-2 flex gap-3">
                <button
                  type="button"
                  onClick={handleReset}
                  className="flex-1 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold rounded-xl text-xs flex items-center justify-center gap-1.5"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>Ulangi Simulasi</span>
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className="flex-1 py-2.5 bg-brand-600 hover:bg-brand-500 text-white font-bold rounded-xl text-xs"
                >
                  Tutup
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Machine Physical Dispensing Bay Mimic */}
        <div className="px-6 py-4 bg-slate-800/90 border-t border-slate-700 flex items-center justify-between text-xs text-slate-400 font-mono">
          <span>KOMPARTEMEN AMBIL OBAT HIGIENIS</span>
          <span className="text-emerald-400">● LAMPU LED AKTIF</span>
        </div>
      </div>
    </div>
  );
}

