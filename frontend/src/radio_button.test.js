import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import EmpireRadioButton from './radio_button';

describe('EmpireRadioButton', () => {

    test('renders the radio button component', () => {
        render(<EmpireRadioButton />);
        const radioButtonElement = screen.getByTestId('empire-radio-button');
        expect(radioButtonElement).toBeInTheDocument();
    });

    test('renders correctly when isSelected is true', () => {
        const onClickMock = jest.fn();
        render(<EmpireRadioButton isSelected={true} onClick={onClickMock} />);

        const radioButton = screen.getByTestId('empire-radio-button');
        expect(radioButton).toBeInTheDocument();

        // Check if the inner element is present
        const innerElement = screen.queryByTestId('empire-radio-button-inner');
        expect(innerElement).toBeInTheDocument();
    });

    test('renders nothing when isSelected is false', () => {
        const onClickMock = jest.fn();
        render(<EmpireRadioButton isSelected={false} onClick={onClickMock} />);

        const radioButton = screen.getByTestId('empire-radio-button');
        expect(radioButton).toBeInTheDocument();

        // Check that the inner element is not present
        const innerElement = screen.queryByTestId('empire-radio-button-inner');
        expect(innerElement).not.toBeInTheDocument();
    });

    test('onClick is called when clicked', () => {
        const onClickMock = jest.fn();
        render(<EmpireRadioButton isSelected={true} onClick={onClickMock} />);

        // Simulate a click on the radio button
        const radioButton = screen.getByTestId('empire-radio-button');
        fireEvent.click(radioButton);

        // Check if onClick function was called once
        expect(onClickMock).toHaveBeenCalledTimes(1);
    });
});