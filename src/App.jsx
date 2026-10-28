import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ValuePillars from './components/ValuePillars';
import MedicineCatalog from './components/MedicineCatalog';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800">
      <Header />
      <main className="flex-1">
        <Hero />
        <ValuePillars />
        <MedicineCatalog />
      </main>
      <Footer />
    </div>
  );
}
