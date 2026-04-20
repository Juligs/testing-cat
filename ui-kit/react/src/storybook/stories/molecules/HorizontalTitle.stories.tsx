import { getStoryEnumOptions } from 'src/storybook/utils';
import {
    Button,
    ButtonVariant,
    TitleTextSize,
    HorizontalTitle,
    Actions,
    TextLink,
} from '@lib/server-components';
import type { Meta, StoryObj } from '@storybook/react-vite';

const meta: Meta<typeof HorizontalTitle> = {
    component: HorizontalTitle,
    argTypes: {
        size: getStoryEnumOptions(TitleTextSize),
    },
};

export default meta;
type Story = StoryObj<typeof HorizontalTitle>;
const DEFAULT_ARGS = {
    inverted: false,
    title: 'Title',
    subtitle: 'Subtitle text',
    body: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id diam vitae lectus lobortis vehicula eget nec neque. Nam nec ultricies neque, vel mattis diam. Integer commodo elit eu ornare tristique. Aenean mollis est lectus, eget tempus neque semper vel. Praesent sodales lectus quis rutrum rutrum.',
};

export const ExtraSmallTitle: Story = {
    args: DEFAULT_ARGS,

    render: (args) => (
        <div className="max-w-7xl">
            <HorizontalTitle {...args} size={TitleTextSize.ExtraSmall}>
                <Actions>
                    <TextLink text="Learn More" showIcon />
                </Actions>
            </HorizontalTitle>
        </div>
    ),
};
export const SmallTitle: Story = {
    args: DEFAULT_ARGS,

    render: (args) => (
        <div className="max-w-7xl">
            <HorizontalTitle {...args} size={TitleTextSize.Small}>
                <Actions>
                    <Button variant={ButtonVariant.Primary} text="Primary" />
                    <Button variant={ButtonVariant.Secondary} text="Secondary" />
                </Actions>
            </HorizontalTitle>
        </div>
    ),
};
export const MediumTitle: Story = {
    args: DEFAULT_ARGS,

    render: (args) => (
        <div className="max-w-7xl">
            <HorizontalTitle {...args} size={TitleTextSize.Medium}>
                <Actions>
                    <Button variant={ButtonVariant.Primary} text="Primary" />
                    <Button variant={ButtonVariant.Secondary} text="Secondary" />
                </Actions>
            </HorizontalTitle>
        </div>
    ),
};
export const LargeTitle: Story = {
    args: DEFAULT_ARGS,

    render: (args) => (
        <div className="max-w-7xl">
            <HorizontalTitle {...args} size={TitleTextSize.Large}>
                <Actions>
                    <Button variant={ButtonVariant.Primary} text="Primary" />
                    <Button variant={ButtonVariant.Secondary} text="Secondary" />
                </Actions>
            </HorizontalTitle>
        </div>
    ),
};
