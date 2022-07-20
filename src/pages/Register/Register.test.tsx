import React from 'react';
import { render, screen } from '@testing-library/react';
import Register from './index';

test('Renders the login page', () => {
  render(<Register />);
  const headerElement = screen.getByText(/Register/);
  expect(headerElement).toBeInTheDocument();
});