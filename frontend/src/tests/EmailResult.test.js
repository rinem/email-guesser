import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import EmailResult from '../components/EmailResult';

test('renders email when provided', () => {
    render(<EmailResult email="jdoe@babbel.com" />);
    expect(screen.getByText('Derived Email:')).toBeInTheDocument();
    expect(screen.getByText('jdoe@babbel.com')).toBeInTheDocument();
});

