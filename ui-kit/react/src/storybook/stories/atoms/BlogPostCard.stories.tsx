import type { Meta, StoryObj } from '@storybook/react';
import { BlogPostCard as BlogPostCardComponent, Badge } from '@lib/server-components/atoms';

const meta: Meta<typeof BlogPostCardComponent> = {
    component: BlogPostCardComponent,
    title: 'Atoms/BlogPostCard',
    argTypes: {
        inverted: {
            control: 'boolean',
        },
    },
};
export default meta;
type Story = StoryObj<typeof BlogPostCardComponent>;
export const BlogPostCardExample: Story = {
    args: {},
    render: (args) => (
        <div className="max-w-md">
            <BlogPostCardComponent
                {...args}
                image="https://res.cloudinary.com/dntpphebk/image/upload/v1732711830/Media_Element_jtfuq0.png"
                title="Title"
                description="5th July"
            >
                <Badge label="Badge" />
            </BlogPostCardComponent>
        </div>
    ),
};
