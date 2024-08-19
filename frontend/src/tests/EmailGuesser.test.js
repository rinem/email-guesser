import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import EmailGuesser from '../components/EmailGuesser';
import emailService from '../services/emailService';

jest.mock('../services/emailService');

describe('EmailGuesser', () => {
    test('renders form and handles successful email guess', async () => {
        emailService.deriveEmail.mockResolvedValue({ email: 'jdoe@babbel.com' });

        render(<EmailGuesser />);
        fireEvent.change(screen.getByLabelText(/Full Name/i), { target: { value: 'John Doe' } });
        fireEvent.change(screen.getByLabelText(/Company Domain/i), { target: { value: 'babbel.com' } });
        fireEvent.click(screen.getByText(/Guess Email/i));

        await waitFor(() => expect(screen.getByText('Derived Email:')).toBeInTheDocument());
        expect(screen.getByText('jdoe@babbel.com')).toBeInTheDocument();
    });

    test('renders error message when email cannot be derived', async () => {
        emailService.deriveEmail.mockResolvedValue(null);

        render(<EmailGuesser />);
        fireEvent.change(screen.getByLabelText(/Full Name/i), { target: { value: 'John Doe' } });
        fireEvent.change(screen.getByLabelText(/Company Domain/i), { target: { value: 'babbel.com' } });
        fireEvent.click(screen.getByText(/Guess Email/i));

        await waitFor(() => expect(screen.getByText('Unable to derive email, no data present')).toBeInTheDocument());
    });
});

