import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import BackButton from './BackButton';

describe('BackButton Component', () => {
    test('is disabled when canGoBack is false', () => {
        render(<BackButton canGoBack={false} />);
        const buttonElement = screen.getByTitle('button_with_image');
        expect(buttonElement).toBeDisabled();
    });

    test('renders without crashing', () => {
        render(<BackButton />);
        const buttonElement = screen.getByTitle('button_with_image');
        expect(buttonElement).toBeInTheDocument();
    });

    test('calls handleClickBackwards on click', () => {
        const handleClickBackwardsMock = jest.fn();
        render(<BackButton handleClickBackwards={handleClickBackwardsMock} />);
        const buttonElement = screen.getByTitle('button_with_image');
        fireEvent.click(buttonElement);
        expect(handleClickBackwardsMock).toHaveBeenCalledTimes(1);
    });
});