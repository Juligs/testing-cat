import type { Meta, StoryObj } from '@storybook/react-vite';
import { StackContainer as StackContainerComponent } from '@lib/server-components/molecules';
import { TextLink } from '@lib/server-components';
import { Placeholder } from '@repo/icons';
const meta: Meta<typeof StackContainerComponent> = {
    component: StackContainerComponent,
    title: 'Molecules/StackContainer',
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof StackContainerComponent>;

export const StackContainerExample: Story = {
    render: (args) => (
        <div className="max-w-xs">
            <StackContainerComponent {...args} text="Title" icon={<Placeholder />}>
                <TextLink text="Learn more" showIcon />
                <TextLink text="Learn more" showIcon />
                <TextLink text="Learn more" showIcon />
                <TextLink text="Learn more" showIcon />
                <TextLink text="Learn more" showIcon />
                <TextLink text="Learn more" showIcon />
            </StackContainerComponent>
        </div>
    ),
};
