import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import HowItWorks from './HowItWorks';

describe('HowItWorks Component', () => {
  it('renders 3 steps and opens interactive simulation modal', () => {
    render(<HowItWorks />);
    expect(screen.getByText(/1. Pilih Obat di Layar/i)).toBeInTheDocument();
    expect(screen.getByText(/2. Scan QRIS/i)).toBeInTheDocument();
    expect(screen.getByText(/3. Ambil Obat Higienis/i)).toBeInTheDocument();
    
    const tryButton = screen.getByRole('button', { name: /Coba Simulasi Beli/i });
    fireEvent.click(tryButton);
    expect(screen.getByText(/Simulasi Layar Mesin Berobat/i)).toBeInTheDocument();
  });
});
