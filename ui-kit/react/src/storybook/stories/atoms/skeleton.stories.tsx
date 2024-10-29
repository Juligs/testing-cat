import type { Meta, StoryObj } from '@storybook/react';
import { Skeleton as SkeletonComponent } from '@lib/server-components/atoms';

const meta: Meta<typeof SkeletonComponent> = {
    component: SkeletonComponent,
    title: 'Atoms/Skeleton',
    argTypes: {},
};
export default meta;
type Story = StoryObj<typeof SkeletonComponent>;

export const Skeleton: Story = {
    render: (args) => <SkeletonComponent {...args} />,
};
