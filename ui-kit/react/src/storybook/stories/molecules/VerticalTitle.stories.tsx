import {
    Actions,
    Button,
    ButtonVariant,
    VerticalTitle,
    VerticalTitleTextSize,
} from '@lib/components';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof VerticalTitle> = {
    component: VerticalTitle,
};

export default meta;
type Story = StoryObj<typeof VerticalTitle>;

const DEFAULT_ARGS = {
    isCentered: false,
    inverted: false,
    title: 'Title',
    subtitle: 'Subtitle text',
    overline: 'Overline',
    body: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id diam vitae lectus lobortis vehicula eget nec neque. Nam nec ultricies neque, vel mattis diam. Integer commodo elit eu ornare tristique. Aenean mollis est lectus, eget tempus neque semper vel. Praesent sodales lectus quis rutrum rutrum.',
};

export const SmallTitle: Story = {
    args: DEFAULT_ARGS,
    argTypes: {
        isCentered: {
            control: 'boolean',
        },
    },
    render: (args) => (
        <VerticalTitle {...args} size={VerticalTitleTextSize.Small}>
            <Actions>
                <Button variant={ButtonVariant.Primary}>Primary</Button>
                <Button variant={ButtonVariant.Secondary}>Secondary</Button>
            </Actions>
        </VerticalTitle>
    ),
};

export const MediumTitle: Story = {
    args: DEFAULT_ARGS,
    argTypes: {
        isCentered: {
            control: 'boolean',
        },
    },
    render: (args) => (
        <VerticalTitle {...args} size={VerticalTitleTextSize.Medium}>
            <Actions>
                <Button variant={ButtonVariant.Primary}>Primary</Button>
                <Button variant={ButtonVariant.Secondary}>Secondary</Button>
            </Actions>
        </VerticalTitle>
    ),
};

export const LargeTitle: Story = {
    args: DEFAULT_ARGS,
    argTypes: {
        isCentered: {
            control: 'boolean',
        },
    },
    render: (args) => (
        <VerticalTitle {...args} size={VerticalTitleTextSize.Large}>
            <Actions>
                <Button variant={ButtonVariant.Primary}>Primary</Button>
                <Button variant={ButtonVariant.Secondary}>Secondary</Button>
            </Actions>
        </VerticalTitle>
    ),
};
