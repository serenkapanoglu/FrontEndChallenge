import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Dropdown from './components/Dropdown'

const renderDropdown = (props) => {
  const defaultProps = {
    title: 'Test',
    isOpen: true,
    toggle: jest.fn(),
    options: [1, 2, 3],
    selectedOptions: [],
    handleOptionChange: jest.fn(),
    renderOption: (option) => option,
  };
  return render(<Dropdown {...defaultProps} {...props} />);
};

test('renders dropdown with title', () => {
    renderDropdown();
    const dropdownTitles = screen.getAllByText(/Test/i);
    expect(dropdownTitles.length).toBeGreaterThan(0);
    expect(dropdownTitles[0]).toBeInTheDocument();
  });
  

test('calls toggle function when dropdown button is clicked', () => {
  const toggle = jest.fn();
  renderDropdown({ toggle, isOpen: false });
  fireEvent.click(screen.getByText(/Test/i));
  expect(toggle).toHaveBeenCalled();
});

test('renders options correctly', () => {
  renderDropdown();
  expect(screen.getByText(/1/i)).toBeInTheDocument();
  expect(screen.getByText(/2/i)).toBeInTheDocument();
  expect(screen.getByText(/3/i)).toBeInTheDocument();
});

test('calls handleOptionChange when an option is selected', () => {
  const handleOptionChange = jest.fn();
  renderDropdown({ handleOptionChange });
  fireEvent.click(screen.getByLabelText('1'));
  expect(handleOptionChange).toHaveBeenCalledWith(1);
});
