import { render, screen, fireEvent } from '@testing-library/react';
import Navbar from '../Navbar';
import '@testing-library/jest-dom';

describe('Navbar', () => {
  it('toggles mobile menu when button clicked', () => {
    render(<Navbar />);

    const button = screen.getByRole('button', { name: /open main menu/i });

    // should have one About link from desktop menu
    expect(screen.getAllByText('About')).toHaveLength(1);

    // open menu
    fireEvent.click(button);
    expect(screen.getAllByText('About')).toHaveLength(2);

    // close menu
    fireEvent.click(button);
    expect(screen.getAllByText('About')).toHaveLength(1);
  });
});
