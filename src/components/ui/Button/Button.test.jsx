import React from 'react';
import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import '@testing-library/jest-dom';

import {Button} from "./Button";

describe('testing Button', () => {
    it('render component button', () => {
        render(<Button>Change name</Button>);
    })

    it('render with snapshot', () => {
        const {asFragment} = render(<Button>Change name</Button>);
        expect(asFragment()).toMatchSnapshot();
    })

    it('render component with text name', () => {
        render(<Button>Change name</Button>);
        expect(screen.getByText(/Change name/)).toBeInTheDocument();
    })

    it('render multiply component', () => {
        render(
            <>
                <Button>Edit</Button>
                <Button>Delete</Button>
            </>
        )
        expect(screen.queryAllByRole('button').length).toBe(2);
    })

    it('button is disabled', () => {
        render(<Button disabled>Delete</Button>);
        expect(screen.getByText(/Delete/)).toBeDisabled();
    })

    it('button have specific style', () => {
        render(<Button>Delete</Button>);
        expect(screen.getByText(/Delete/)).toHaveStyle({color: 'white'});
    })

    it('click with user event', async () => {
        const mockHandler = jest.fn();

        render(<Button onClick={mockHandler}>Delete</Button>);
        await userEvent.click(screen.getByText(/Delete/));
        expect(mockHandler).toHaveBeenCalledTimes(1);
    })

    it('test example', async () => {
        const onChange = jest.fn();
        render(<input type={"checkbox"} onChange={onChange} />);

        const checkBox = screen.getByRole('checkbox');
        await userEvent.dblClick(checkBox);
        expect(onChange).toHaveBeenCalledTimes(2);
        expect(checkBox).not.toBeChecked();
    })
})