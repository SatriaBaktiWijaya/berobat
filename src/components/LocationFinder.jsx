import React, { useState } from 'react';
import { MapPin, Search, Navigation, Thermometer, CheckCircle2, Clock, Train, Building2, GraduationCap, Plane, AlertCircle } from 'lucide-react';
import { LOCATIONS_DATA, LOCATION_CATEGORIES } from '../data/locations';

export default function LocationFinder() {
  const [selectedType, setSelectedType] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLocationId, setSelectedLocationId] = useState(LOCATIONS_DATA[0].id);

  const filteredLocations = LOCATIONS_DATA.filter((loc) => {
    const matchesType = selectedType === 'all' || loc.type === selectedType;
    const matchesSearch =
      loc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      loc.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
      loc.exactSpot.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesType && matchesSearch;
  });

  const getTypeIcon = (type) => {
    switch (type) {
      case 'transit':
        return Train;
      case 'mall':
        return Building2;
      case 'campus':
        return GraduationCap;
      case 'airport':
        return Plane;
      default:
        return MapPin;
    }
  };

  return (
    <section id="lokasi" className="py-16 sm:py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200 mb-3">
            <MapPin className="w-3.5 h-3.5 text-emerald-600" />
            <span>Jaringan Titik Mesin Publik</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Temukan Smart Vending Machine Berobat Terdekat
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Ditempatkan di titik mobilitas tinggi: stasiun MRT/KRL, bandara, mall, dan kampus. Semua unit terhubung online dengan pemantauan suhu dan stok farmasi otomatis.
          </p>

          {/* Search bar */}
          <div className="mt-6 max-w-lg mx-auto relative">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari stasiun, mall, atau kampus..."
              className="w-full pl-11 pr-4 py-3 bg-slate-50 hover:bg-white focus:bg-white rounded-xl border border-slate-200 text-sm placeholder:text-slate-400 text-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 shadow-sm transition-all"
              aria-label="Cari titik mesin Berobat"
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

        {/* Filter Categories */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {LOCATION_CATEGORIES.map((cat) => {
            const isSelected = selectedType === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedType(cat.id)}
                className={`whitespace-nowrap px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 ${
                  isSelected
                    ? 'bg-brand-700 text-white shadow-sm shadow-brand-700/20'
                    : 'bg-slate-50 text-slate-600 hover:bg-slate-100 hover:text-slate-900 border border-slate-200/80'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Public Transit Network Schematic Visualization */}
        <div className="mb-10 p-5 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-800 to-teal-950 text-white shadow-md">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-700/80 gap-3">
            <div>
              <span className="text-xs font-semibold text-brand-400 uppercase tracking-wider block">Skematik Jalur Transit</span>
              <h3 className="text-base font-bold text-white">Konektivitas Jaringan Vending Machine di Area Transit Publik</h3>
            </div>
            <div className="flex items-center gap-3 text-xs text-slate-300">
              <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-emerald-400" /> Unit Online</span>
              <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-teal-400" /> Suhu Terjaga 20-25°C</span>
            </div>
          </div>

          {/* Interactive Route Nodes */}
          <div className="py-6 flex items-center justify-between overflow-x-auto gap-4 relative">
            <div className="absolute top-1/2 left-8 right-8 h-1 bg-gradient-to-r from-teal-500 via-emerald-400 to-sky-400 -translate-y-1/2 z-0 hidden md:block" />
            {LOCATIONS_DATA.map((loc) => {
              const isSelected = selectedLocationId === loc.id;
              const Icon = getTypeIcon(loc.type);
              return (
                <button
                  key={loc.id}
                  onClick={() => setSelectedLocationId(loc.id)}
                  className={`relative z-10 flex flex-col items-center text-center p-3 rounded-xl transition-all min-w-[150px] shrink-0 ${
                    isSelected ? 'bg-white/15 ring-2 ring-brand-400' : 'hover:bg-white/10'
                  }`}
                >
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 shadow-sm ${
                    isSelected ? 'bg-brand-500 text-white' : 'bg-slate-700 text-slate-300'
                  }`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-bold text-white line-clamp-1">{loc.name}</span>
                  <span className="text-[10px] text-teal-300 mt-0.5">{loc.temperature} • 24 Jam</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Location Cards Grid */}
        {filteredLocations.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredLocations.map((loc) => {
              const Icon = getTypeIcon(loc.type);
              const isSelected = selectedLocationId === loc.id;
              return (
                <div
                  key={loc.id}
                  onClick={() => setSelectedLocationId(loc.id)}
                  className={`cursor-pointer rounded-2xl p-6 border transition-all flex flex-col justify-between ${
                    isSelected
                      ? 'bg-teal-50/40 border-brand-500 shadow-md ring-1 ring-brand-500'
                      : 'bg-white border-slate-200 hover:border-slate-300 shadow-sm'
                  }`}
                >
                  <div>
                    {/* Header with Type & Status */}
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <div className="flex items-center gap-1.5 text-xs font-semibold text-brand-700 bg-brand-50 px-2.5 py-1 rounded-md">
                        <Icon className="w-3.5 h-3.5" />
                        <span>{loc.categoryLabel}</span>
                      </div>
                      <span className="flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                        {loc.operationalHours}
                      </span>
                    </div>

                    {/* Venue Name */}
                    <h3 className="text-lg font-bold text-slate-900 mb-1">
                      {loc.name}
                    </h3>
                    <p className="text-xs text-slate-500 font-medium mb-3">
                      {loc.transitLine}
                    </p>

                    {/* Exact Spot */}
                    <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 mb-4 text-xs text-slate-700 flex items-start gap-2">
                      <Navigation className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-slate-900 block font-semibold">Posisi Mesin di Lokasi:</strong>
                        <span>{loc.exactSpot}</span>
                      </div>
                    </div>
                  </div>

                  {/* Telemetry Footer */}
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-600">
                    <div className="flex items-center gap-1 text-teal-700 font-semibold">
                      <Thermometer className="w-3.5 h-3.5" />
                      <span>{loc.temperature}</span>
                    </div>
                    <div className="flex items-center gap-1 text-emerald-600 font-semibold">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Stok {loc.stockLevel}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="bg-slate-50 rounded-2xl border border-slate-200 p-8 text-center max-w-md mx-auto space-y-3">
            <AlertCircle className="w-8 h-8 text-slate-400 mx-auto" />
            <h3 className="text-sm font-bold text-slate-800">
              Lokasi Belum Terdaftar
            </h3>
            <p className="text-xs text-slate-500">
              Saat ini Berobat aktif di Jabodetabek dan terus berekspansi ke kota-kota besar lainnya. Punya usulan titik penempatan mesin di gedung atau kampus Anda?
            </p>
            <a
              href="mailto:kemitraan@berobat.id?subject=Usulan%20Titik%20Mesin%20Berobat"
              className="inline-block text-xs font-semibold text-brand-700 hover:underline pt-1"
            >
              Ajukan Penempatan Unit Baru &rarr;
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
