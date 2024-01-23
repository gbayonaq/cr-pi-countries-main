import React from 'react';
import {describe, it, expect, beforeEach, toBeInTheDocument} from "vitest";
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Landing from '../../src/views/Landing/Landing';

it("renders a p tag with class Title and the correct text", () => {
    render(<Landing />)
    expect(screen.getByText("Welcome to Countries of the World!")).toBeInTheDocument()
})


describe("Landing", () => {
    beforeEach(() => {
        render(
            <MemoryRouter>
                <Landing />
            </MemoryRouter>
        );
    });

   
    it("renders a p tag with class 'Title' and the correct text", () => {
        expect(screen.getByText("Welcome to Countries of the World!")).toBeInTheDocument();
    });

    it("renders a Link component with the correct 'to' prop", () => {
        expect(screen.getByRole("link").getAttribute("Link to")).toBe("/countries");
    });

    it("renders a button with class 'btnlandPage' and the correct text", () => {
        expect(screen.getByText("Hop on Board!")).toBeInTheDocument();
    });
});
