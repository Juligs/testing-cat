import type { Meta, StoryObj } from '@storybook/react';
import { Button, ButtonRadius, ButtonSize, ButtonVariant } from '@lib/server-components/atoms';
import { ArrowTopRight } from '@repo/icons';
import { getStoryEnumOptions } from 'src/storybook/utils';

const meta: Meta<typeof Button> = {
    component: Button,
    title: 'Atoms/Button',
    argTypes: {
        variant: getStoryEnumOptions(ButtonVariant),
        size: getStoryEnumOptions(ButtonSize),
        type: {
            control: { type: 'select' },
            options: ['button', 'submit', 'reset'],
        },
        disabled: {
            control: 'boolean',
        },
        fullWidth: {
            control: 'boolean',
        },
    },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const ButtonWithText: Story = {
    args: {},
    render: (args) => <Button {...args} text="Button" />,
};

export const ButtonWithTextAndIcon: Story = {
    args: {},
    render: (args) => <Button {...args} text="Button" icon={<ArrowTopRight />} />,
};

export const ButtonWithIcon: Story = {
    args: {},
    render: (args) => <Button {...args} icon={<ArrowTopRight />} />,
};
export const ButtonFullRounded: Story = {
    args: {},
    render: (args) => <Button {...args} text="Button" buttonBorderRadius={ButtonRadius.Rounded} />,
};
