import type { Meta, StoryObj } from '@storybook/react';
import { Button, ButtonSize, ButtonVariant } from '@components/atoms';
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

export const Primary: Story = {
    args: {},
    render: (args) => (
        <Button {...args}>
            Button
            <ArrowTopRight className="h-[20px] w-[20px]" />
        </Button>
    ),
};
