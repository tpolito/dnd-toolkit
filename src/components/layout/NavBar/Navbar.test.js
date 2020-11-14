import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react';
import Navbar from './Navbar';

const { getByText } = screen
const { click } = fireEvent

describe('Navbar Tests', () => {
    test('navbar renders', () => {
        render(
            <Navbar />
        )
    })

    test('loads and display navbar items', () => {
        render(
            <Navbar />
        )
        expect(getByText('About'))
        expect(getByText('Tools'))
        expect(getByText('References'))
    })

    test('user can click on navbar dropdowns and dropdown options render', () => {
        render(
            <Navbar />
        )
        click(getByText('Tools'))
        click(getByText('References'))
        expect(getByText('Initiative Tracker'))
        expect(getByText('NPC Generator'))
        expect(getByText('Spells'))
        expect(getByText('Weapons List'))
    })
})