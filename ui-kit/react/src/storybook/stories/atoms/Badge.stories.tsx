import type { Meta, StoryObj } from '@storybook/react-vite';
import { Badge as BadgeComponent } from '@lib/server-components/atoms';
const meta: Meta<typeof BadgeComponent> = {
    component: BadgeComponent,
    title: 'Atoms/Badge',
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof BadgeComponent>;

export const Badge: Story = {
    render: (args) => <BadgeComponent {...args} />,
};
