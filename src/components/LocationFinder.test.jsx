import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import LocationFinder from './LocationFinder';

describe('LocationFinder Component', () => {
  it('displays public transit locations and filters by search query', () => {
    render(<LocationFinder />);
    expect(screen.getAllByText(/Stasiun MRT Bundaran HI/i).length).toBeGreaterThanOrEqual(1);
    
    const searchInput = screen.getByPlaceholderText(/Cari stasiun, mall, atau kampus/i);
    fireEvent.change(searchInput, { target: { value: 'Sudirman' } });
    expect(screen.getAllByText(/Stasiun KRL Sudirman/i).length).toBeGreaterThanOrEqual(1);
  });
});
