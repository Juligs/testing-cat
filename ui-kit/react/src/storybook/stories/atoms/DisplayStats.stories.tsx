import type { Meta, StoryObj } from '@storybook/react';
import {
    CardSize,
    DisplayStats as DisplayStatsComponent,
    ProgressCircleIcon,
    TextSize,
} from '@lib/server-components/atoms';
import { getStoryEnumOptions } from 'src/storybook/utils';
import { Placeholder } from '@repo/icons';

const meta: Meta<typeof DisplayStatsComponent> = {
    component: DisplayStatsComponent,
    title: 'Atoms/DisplayStats',
    argTypes: {
        textSize: getStoryEnumOptions(TextSize),
        size: getStoryEnumOptions(CardSize),
        icon: { control: 'boolean' },
    },
};

export default meta;
type Story = StoryObj<typeof DisplayStatsComponent>;

export const DisplayStats: Story = {
    render: (args) => (
        <div className="max-w-xs">
            <DisplayStatsComponent {...args} value="500" label="Label" />
        </div>
    ),
};

export const DisplayStatsDefaultWithIconProgress: Story = {
    render: (args) => (
        <div className="max-w-md">
            <DisplayStatsComponent
                {...args}
                value="500"
                label="Label"
                supportingText="Supp Text"
                size={CardSize.Default}
                icon={<ProgressCircleIcon progress={50} />}
            />
        </div>
    ),
};
export const DisplayStatsSmallWithIconProgress: Story = {
    render: (args) => (
        <div className="max-w-md">
            <DisplayStatsComponent
                {...args}
                value="500"
                label="Label"
                supportingText="Supp Text"
                size={CardSize.Small}
                icon={<ProgressCircleIcon progress={50} />}
            />
        </div>
    ),
};

export const DisplayStatsSmall: Story = {
    render: (args) => (
        <div className="max-w-xs">
            <DisplayStatsComponent
                {...args}
                value="500"
                label="Label"
                supportingText="Supp Text"
                size={CardSize.Small}
                icon={<Placeholder />}
            />
        </div>
    ),
};

export const DisplayStatsMultiline: Story = {
    render: (args) => (
        <div className="max-w-xs">
            <DisplayStatsComponent
                {...args}
                value="500"
                label="Label"
                supportingText="Supp Text"
                icon={<ProgressCircleIcon progress={50} />}
                size={CardSize.Small}
                isMultiLine
            />
        </div>
    ),
};
