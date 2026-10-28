import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import HairlineMachine from './HairlineMachine';

describe('HairlineMachine Canvas', () => {
  it('renders an accessible canvas with descriptive aria-label', () => {
    render(<HairlineMachine />);
    const canvas = screen.getByLabelText(/Ilustrasi isometrik interaktif mesin pintar Berobat/i);
    expect(canvas).toBeInTheDocument();
  });
});

