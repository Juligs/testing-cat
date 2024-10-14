import type { Meta, StoryObj } from '@storybook/react';
import { Chip as ChipComponent } from '@lib/server-components/atoms';
const meta: Meta<typeof ChipComponent> = {
    component: ChipComponent,
    title: 'Atoms/Chip',
};

export default meta;
type Story = StoryObj<typeof ChipComponent>;

export const Chip: Story = {
    render: (args) => <ChipComponent {...args} />,
};
