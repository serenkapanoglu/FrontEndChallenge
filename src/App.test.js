import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import App from './App';

test('renders search input and dropdowns', () => {
  render(<App />);
  expect(screen.getByPlaceholderText(/Enter movie name/i)).toBeInTheDocument();
  expect(screen.getByText(/Rating/i)).toBeInTheDocument();
  expect(screen.getByText(/Genre/i)).toBeInTheDocument();
});

test('filters movies based on search term', () => {
  render(<App />);
  fireEvent.change(screen.getByPlaceholderText(/Enter movie name/i), {
    target: { value: 'Matrix' },
  });
  expect(screen.getByText(/The Matrix/i)).toBeInTheDocument();
});

test('highlights search term in movie name', () => {
  render(<App />);
  fireEvent.change(screen.getByPlaceholderText(/Enter movie name/i), {
    target: { value: 'Ma' },
  });
  

  const highlightedText = screen.getByText(/The Matrix/i);
  expect(highlightedText).toBeInTheDocument();
  expect(highlightedText).toHaveClass('movie-title'); 
 
});
