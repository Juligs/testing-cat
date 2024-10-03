import type { Meta, StoryObj } from '@storybook/react';
import { AnchorLink, AnchorLinkSize } from '@lib/server-components/atoms';
import { getStoryEnumOptions } from 'src/storybook/utils';

const meta: Meta<typeof AnchorLink> = {
    component: AnchorLink,
    title: 'Atoms/AnchorLink',
    argTypes: {
        size: getStoryEnumOptions(AnchorLinkSize),
        text: { control: 'text' },
        inverted: { control: 'boolean' },
        isExternal: { control: 'boolean' },
    },
};

export default meta;
type Story = StoryObj<typeof AnchorLink>;

export const Primary: Story = {
    args: {
        text: 'Anchor Link',
        size: AnchorLinkSize.Default,
        inverted: false,
        isExternal: false,
    },
    render: (args) => (
        <div className="sm:w-1/4">
            <AnchorLink {...args} />
        </div>
    ),
};
