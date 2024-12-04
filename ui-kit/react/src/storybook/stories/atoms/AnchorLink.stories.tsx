import type { Meta, StoryObj } from '@storybook/react';
import { AnchorLink, AnchorLinkSize } from '@lib/server-components/atoms';
import { getStoryEnumOptions } from 'src/storybook/utils';
import { Placeholder } from '@repo/icons';

const meta: Meta<typeof AnchorLink> = {
    component: AnchorLink,
    title: 'Atoms/AnchorLink',
    argTypes: {
        size: getStoryEnumOptions(AnchorLinkSize),
        text: { control: 'text' },
        inverted: { control: 'boolean' },
        isExternal: { control: 'boolean' },
        leadingIcon: { control: 'boolean' },
    },
};

export default meta;
type Story = StoryObj<typeof AnchorLink>;

export const AnchorLinkDefault: Story = {
    args: { size: AnchorLinkSize.Default },
    render: (args) => (
        <div className="max-w-xs">
            <AnchorLink {...args} text="Button" />
        </div>
    ),
};
export const AnchorLinkIconSmall: Story = {
    args: { size: AnchorLinkSize.Small },
    render: (args) => (
        <div className="max-w-xs">
            <AnchorLink {...args} text="Button" leadingIcon={<Placeholder />} />
        </div>
    ),
};
export const AnchorLinkIconSmallInverted: Story = {
    args: { size: AnchorLinkSize.Small },
    render: (args) => (
        <div className="max-w-xs">
            <AnchorLink {...args} text="Button" leadingIcon={<Placeholder />} inverted />
        </div>
    ),
};

export const AnchorLinkIconDefault: Story = {
    args: { size: AnchorLinkSize.Default },
    render: (args) => (
        <div className="max-w-xs">
            <AnchorLink {...args} text="Button" leadingIcon={<Placeholder />} />
        </div>
    ),
};
export const AnchorLinkIconDefaultInverted: Story = {
    args: { size: AnchorLinkSize.Default },
    render: (args) => (
        <div className="max-w-xs">
            <AnchorLink {...args} text="Button" leadingIcon={<Placeholder />} inverted />
        </div>
    ),
};
