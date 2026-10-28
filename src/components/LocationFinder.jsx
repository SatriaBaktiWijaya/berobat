import React, { useState } from 'react';
import { MapPin, Search, Navigation, Thermometer, CheckCircle2, Train, Building2, GraduationCap, Plane, AlertCircle } from 'lucide-react';
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
    <section id="lokasi" className="py-20 bg-white overflow-x-clip">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mb-12">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-pine-900 tracking-tight leading-tight uppercase">
            Temukan Smart Vending Machine Berobat Terdekat
          </h2>
          <p className="mt-4 text-base sm:text-lg text-pine-700 leading-relaxed max-w-[60ch]">
            Ditempatkan di titik mobilitas tinggi: stasiun MRT/KRL, bandara, mall, dan universitas dengan pemantauan suhu dan stok farmasi otomatis.
          </p>

          {/* Search bar */}
          <div className="mt-8 max-w-xl relative">
            <Search className="w-5 h-5 text-pine-600 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari stasiun, mall, atau kampus..."
              className="w-full pl-12 pr-4 py-3.5 bg-chalk-100 focus:bg-white rounded-lg border-2 border-pine-900 text-sm text-pine-900 placeholder:text-pine-600 font-medium focus:outline-none focus:ring-2 focus:ring-signal-orange transition-colors"
              aria-label="Cari titik mesin Berobat"
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

        {/* Filter Categories */}
        <div className="flex flex-wrap gap-2.5 mb-10">
          {LOCATION_CATEGORIES.map((cat) => {
            const isSelected = selectedType === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedType(cat.id)}
                className={`px-4 py-2.5 rounded-lg text-sm font-bold transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-pine-900 ${
                  isSelected
                    ? 'bg-pine-900 text-white shadow-none'
                    : 'bg-chalk-100 text-pine-900 hover:bg-chalk-200'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Public Transit Network Schematic Visualization */}
        <div className="mb-10 p-6 sm:p-8 rounded-2xl bg-pine-900 text-white">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 gap-3">
            <div>
              <span className="text-xs font-semibold text-teal-300 block mb-1">
                Skematik jalur transit publik
              </span>
              <h3 className="text-lg font-bold text-white">
                Konektivitas Jaringan Vending Machine di Area Transit Publik
              </h3>
            </div>
            <div className="flex items-center gap-4 text-xs text-slate-300">
              <span className="flex items-center gap-2"><span className="w-2.5 h-2.5 rounded-full bg-emerald-400" /> Unit Online</span>
              <span className="flex items-center gap-2"><span className="w-2.5 h-2.5 rounded-full bg-teal-300" /> Suhu 20–25°C</span>
            </div>
          </div>

          {/* Interactive Route Nodes - CSS Grid for zero horizontal overflow at any width */}
          <div className="py-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 relative">
            {LOCATIONS_DATA.map((loc) => {
              const isSelected = selectedLocationId === loc.id;
              const Icon = getTypeIcon(loc.type);
              return (
                <button
                  key={loc.id}
                  onClick={() => setSelectedLocationId(loc.id)}
                  className={`relative z-10 flex flex-col items-center text-center p-3 rounded-xl transition-all ${
                    isSelected ? 'bg-white/20 border-2 border-signal-orange' : 'hover:bg-white/10'
                  }`}
                >
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${
                    isSelected ? 'bg-signal-orange text-white' : 'bg-pine-800 text-teal-200'
                  }`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-bold text-white line-clamp-1">{loc.name}</span>
                  <span className="text-xs text-teal-200 mt-0.5">{loc.temperature} • 24 Jam</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Location Cards Grid */}
        {filteredLocations.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredLocations.map((loc) => {
              const isSelected = selectedLocationId === loc.id;
              return (
                <div
                  key={loc.id}
                  role="button"
                  tabIndex={0}
                  aria-label={`Pilih lokasi ${loc.name}`}
                  aria-pressed={isSelected}
                  onClick={() => setSelectedLocationId(loc.id)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setSelectedLocationId(loc.id);
                    }
                  }}
                  className={`cursor-pointer rounded-2xl p-7 transition-all flex flex-col justify-between motion-reveal focus:outline-none focus-visible:border-2 focus-visible:border-pine-900 ${
                    isSelected
                      ? 'bg-white border-2 border-pine-900'
                      : 'bg-chalk-100 hover:bg-chalk-200/70'
                  }`}
                >
                  <div>
                    {/* Header with Type & Status */}
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <span className="text-xs font-bold text-pine-900 bg-white px-3 py-1 rounded">
                        {loc.categoryLabel}
                      </span>
                      <span className="flex items-center gap-1.5 text-xs font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                        {loc.operationalHours}
                      </span>
                    </div>

                    {/* Venue Name */}
                    <h3 className="font-display text-2xl font-black text-pine-900 uppercase tracking-tight mb-1">
                      {loc.name}
                    </h3>
                    <p className="text-xs text-pine-600 font-semibold mb-4">
                      {loc.transitLine}
                    </p>

                    {/* Exact Spot */}
                    <div className="p-3.5 bg-white rounded-xl mb-5 text-xs text-pine-800">
                      <strong className="text-pine-900 block font-bold mb-0.5">Posisi Mesin di Lokasi:</strong>
                      <span className="leading-relaxed">{loc.exactSpot}</span>
                    </div>
                  </div>

                  {/* Telemetry Footer */}
                  <div className="pt-4 flex items-center justify-between text-xs text-pine-800">
                    <div className="text-pine-900 font-bold">
                      Suhu: <span className="font-extrabold text-pine-900">{loc.temperature}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-emerald-800 font-bold">
                      <span className="w-2 h-2 rounded-full bg-emerald-600 inline-block" />
                      <span>Stok {loc.stockLevel}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="bg-chalk-100 rounded-2xl border-2 border-pine-900 p-10 text-center max-w-md mx-auto space-y-3">
            <AlertCircle className="w-8 h-8 text-pine-600 mx-auto" />
            <h3 className="font-display text-xl font-black text-pine-900 uppercase">
              Lokasi Belum Terdaftar
            </h3>
            <p className="text-sm text-pine-700">
              Saat ini Berobat aktif di Jabodetabek dan terus berekspansi ke kota-kota besar lainnya. Punya usulan titik penempatan mesin di gedung atau kampus Anda?
            </p>
            <a
              href="mailto:kemitraan@berobat.id?subject=Usulan%20Titik%20Mesin%20Berobat"
              className="inline-block text-xs font-bold text-signal-orange hover:underline pt-2 font-medium"
            >
              Ajukan Penempatan Unit Baru &rarr;
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
