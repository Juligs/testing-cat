import type { Meta, StoryObj } from '@storybook/react-vite';
import { TextLink as TextLinkComponent, TextLinkSize } from '@lib/server-components/atoms';
import { Placeholder, Right } from '@repo/icons';
import { getStoryEnumOptions } from 'src/storybook/utils';

const meta: Meta<typeof TextLinkComponent> = {
    component: TextLinkComponent,
    title: 'Atoms/TextLink',
    argTypes: {
        size: getStoryEnumOptions(TextLinkSize),
        icon: {
            control: { type: 'boolean' },
        },
    },
};

export default meta;
type Story = StoryObj<typeof TextLinkComponent>;

export const TextLinkText: Story = {
    args: {
        underline: false,
        highlighted: true,
    },
    render: (args) => <TextLinkComponent {...args} text="Learn more" />,
};

export const TextLinkUnderline: Story = {
    args: {
        underline: true,
    },
    render: (args) => <TextLinkComponent {...args} text="Learn more" />,
};

export const TextLinkWithDefaultIcon: Story = {
    args: { showIcon: true },
    render: (args) => <TextLinkComponent {...args} text="Learn more" />,
};

export const TextLinkWithCustomIcon: Story = {
    args: {},
    render: (args) => <TextLinkComponent {...args} text="Learn more" icon={<Right />} />,
};
export const TextLinkWithIconLeft: Story = {
    args: {
        icon: <Placeholder />,
        iconPosition: 'left',
    },
    render: (args) => <TextLinkComponent {...args} text="Learn more" />,
};
