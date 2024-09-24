import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@components/button';

const meta: Meta<typeof Button> = {
    component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const ButtonChildren: Story = {
    args: {
        children: 'Click me',
    },
};
