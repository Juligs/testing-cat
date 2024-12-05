import type { Meta, StoryObj } from '@storybook/react';
import { IconContent as IconContentComponent, TextLink } from '@lib/server-components';
import { Placeholder } from '@repo/icons';
const meta: Meta<typeof IconContentComponent> = {
    component: IconContentComponent,
    title: 'Molecules/IconContent',
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof IconContentComponent>;

export const IconContentDefault: Story = {
    render: (args) => (
        <div className="max-w-xs">
            <IconContentComponent
                {...args}
                icon={<Placeholder />}
                title="Title"
                body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id diam vitae lectus lobortis vehicula eget nec neque. Nam nec ultricies neque, vel mattis diam. Integer commodo elit eu ornare tristique."
            >
                <TextLink text="Learn more" showIcon />
            </IconContentComponent>
        </div>
    ),
};

export const IconContentFilled: Story = {
    render: (args) => (
        <div className="max-w-xs">
            <IconContentComponent
                {...args}
                icon={<Placeholder />}
                title="Title"
                body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id diam vitae lectus lobortis vehicula eget nec neque. Nam nec ultricies neque, vel mattis diam. Integer commodo elit eu ornare tristique."
                filled
            >
                <TextLink text="Learn more" showIcon />
            </IconContentComponent>
        </div>
    ),
};
