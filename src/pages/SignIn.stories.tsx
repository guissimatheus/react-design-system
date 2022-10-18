import { Meta, StoryObj } from '@storybook/react';
import { within, userEvent, waitFor } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

import { SignIn } from "./Signin";

export default {
    title: 'Pages/SignIn',
    component: SignIn,
    args: {},
    argTypes: {}
} as Meta

export const Default: StoryObj = {
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);

        userEvent.type(canvas.getByPlaceholderText('Digite seu e-mail'), 'um_email_valido@email.teste.com');
        userEvent.type(canvas.getByPlaceholderText('Digite sua senha'), '12345678');

        // Como só tem um button na tela, pode ser utilizado dessa forma
        userEvent.click(canvas.getByRole('button'));

        await waitFor(() => {
            expect(canvas.getByText('Login Realizado com Sucesso!')).toBeInTheDocument();
        })
    }
}