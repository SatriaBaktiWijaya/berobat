import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import MedicineCatalog from './components/MedicineCatalog';
import LocationFinder from './components/LocationFinder';
import VendingModalSimulation from './components/VendingModalSimulation';
import HairlineMachine from './components/HairlineMachine';

describe('Important Review Fixes Verification', () => {
  it('displays hotline and pharmacist contact assistance when search yields no results', () => {
    render(<MedicineCatalog />);
    const searchInput = screen.getByLabelText(/Cari obat atau keluhan/i);
    fireEvent.change(searchInput, { target: { value: 'ObatTidakAda123' } });

    expect(screen.getByText(/0800-1-BEROBAT/i)).toBeInTheDocument();
    expect(screen.getByText(/Chat Apoteker/i)).toBeInTheDocument();
  });

  it('allows keyboard navigation and selection on location cards', () => {
    render(<LocationFinder />);
    const cards = screen.getAllByRole('button', { name: /Pilih lokasi/i });
    expect(cards.length).toBeGreaterThanOrEqual(1);

    // Trigger Enter key on second card
    fireEvent.keyDown(cards[1], { key: 'Enter', code: 'Enter' });
    expect(cards[1]).toHaveAttribute('aria-pressed', 'true');
  });

  it('closes simulation modal when Escape key is pressed', () => {
    let closed = false;
    render(<VendingModalSimulation isOpen={true} onClose={() => { closed = true; }} />);

    fireEvent.keyDown(window, { key: 'Escape', code: 'Escape' });
    expect(closed).toBe(true);
  });
});
