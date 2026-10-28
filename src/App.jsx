import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800">
      <Header />
      <main className="flex-1">
        <section className="py-20 text-center max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Berobat - Akses Cepat Obat Bebas di Ruang Publik
          </h2>
          <p className="mt-4 text-slate-600">
            Pertolongan pertama dan obat esensial 24 jam dengan suhu terjaga standar farmasi.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}
