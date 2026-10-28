import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Header from './Header';

describe('Header Component', () => {
  it('renders navigation links and 24/7 indicator badge', () => {
    render(<Header />);
    expect(screen.getByRole('link', { name: /Katalog Obat/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Titik Mesin/i })).toBeInTheDocument();
    expect(screen.getByText(/24\/7 Siap Sedia/i)).toBeInTheDocument();
  });
});

