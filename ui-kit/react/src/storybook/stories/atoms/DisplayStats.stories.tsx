import type { Meta, StoryObj } from '@storybook/react';
import { DisplayStats as DisplayStatsComponent } from '@lib/server-components/atoms';
const meta: Meta<typeof DisplayStatsComponent> = {
    component: DisplayStatsComponent,
    title: 'Atoms/DisplayStats',
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof DisplayStatsComponent>;

export const DisplayStats: Story = {
    render: (args) => (
        <div className="max-w-xs">
            <DisplayStatsComponent
                {...args}
                value="500%"
                label="Score in Security Audits by Zokyo"
            />
        </div>
    ),
};
