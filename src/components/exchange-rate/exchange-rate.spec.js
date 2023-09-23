import React from 'react';
import { render, screen } from '@testing-library/react';
import {ExchangeRate} from "./exchange-rate";


describe('Exchange rate component' , () => {
    test('renders header text', () => {
        render(<ExchangeRate />);
        expect(screen.getByText('Header')).toBeInTheDocument();
    });

    test('renders content text', () => {
        render(<ExchangeRate />);
        expect(screen.getByText('Content')).toBeInTheDocument();
    });
});
