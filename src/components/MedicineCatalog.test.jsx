import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import MedicineCatalog from './MedicineCatalog';

describe('MedicineCatalog Component', () => {
  it('filters medicines when a category tab is clicked', () => {
    render(<MedicineCatalog />);
    const maagTab = screen.getByRole('tab', { name: /Maag & Lambung/i });
    fireEvent.click(maagTab);
    expect(screen.getByText(/Antasida Doen/i)).toBeInTheDocument();
  });
});
