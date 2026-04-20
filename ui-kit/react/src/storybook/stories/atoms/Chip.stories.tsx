import type { Meta, StoryObj } from '@storybook/react-vite';
import { Chip as ChipComponent, ChipSize } from '@lib/server-components/atoms';
import { getStoryEnumOptions } from 'src/storybook/utils';
const meta: Meta<typeof ChipComponent> = {
    component: ChipComponent,
    title: 'Atoms/Chip',
    argTypes: {
        size: getStoryEnumOptions(ChipSize),
    },
};

export default meta;
type Story = StoryObj<typeof ChipComponent>;

export const Chip: Story = {
    render: (args) => <ChipComponent {...args} />,
};
