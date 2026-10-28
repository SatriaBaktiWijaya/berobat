import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Hero from './Hero';

describe('Hero Section', () => {
  it('renders primary reassuring headline and CTA buttons', () => {
    render(<Hero />);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/Tiba-tiba Butuh Obat di Jalan\?/i);
    expect(screen.getByRole('link', { name: /Temukan Mesin Terdekat/i })).toBeInTheDocument();
  });
});
