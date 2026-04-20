import type { Meta, StoryObj } from '@storybook/react-vite';
import { ExploreCard as ExploreCardComponent, ExploreCardSize } from '@lib/server-components/atoms';
import { getStoryEnumOptions } from 'src/storybook/utils';

const meta: Meta<typeof ExploreCardComponent> = {
    component: ExploreCardComponent,
    title: 'Atoms/ExploreCard',
    argTypes: {
        size: getStoryEnumOptions(ExploreCardSize),
    },
};

export default meta;
type Story = StoryObj<typeof ExploreCardComponent>;

export const ExploreCardSmall: Story = {
    render: (args) => (
        <div className="max-w-xl">
            <ExploreCardComponent
                {...args}
                title="Title"
                subtitle="Subtitle"
                size={ExploreCardSize.Small}
            />
        </div>
    ),
};

export const ExploreCardSmallWithoutSubtitle: Story = {
    render: (args) => (
        <div className="max-w-xl">
            <ExploreCardComponent {...args} title="Title" size={ExploreCardSize.Small} />
        </div>
    ),
};

export const ExploreCardLarge: Story = {
    render: (args) => (
        <div className="max-w-xl">
            <ExploreCardComponent
                {...args}
                title="Title"
                subtitle="Subtitle"
                size={ExploreCardSize.Large}
            />
        </div>
    ),
};
