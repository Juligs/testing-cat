import type { Meta, StoryObj } from '@storybook/react';
import { HighlightCard as HighlightCardComponent } from '@lib/server-components/atoms';

const meta: Meta<typeof HighlightCardComponent> = {
    component: HighlightCardComponent,
    title: 'Atoms/HighlightCard',
};
export default meta;

type Story = StoryObj<typeof HighlightCardComponent>;

export const HighlightCard: Story = {
    args: {
        title: 'Title',
        overline: 'Overline',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id diam vitae lectus lobortis vehicula eget nec neque. Nam nec ultricies neque, vel mattis diam.',
    },
    render: (args) => (
        <div className="max-w-[480px]">
            <HighlightCardComponent {...args} />
        </div>
    ),
};

export const HighlightCardWithBackgroundImage: Story = {
    args: {
        title: 'Title',
        overline: 'Overline',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id diam vitae lectus lobortis vehicula eget nec neque. Nam nec ultricies neque, vel mattis diam.',
        backgroundImage:
            'https://res.cloudinary.com/ddtvll25c/image/upload/v1764845793/card_media_4_3_w1te0k.png',
    },
    render: (args) => (
        <div className="max-w-[480px]">
            <HighlightCardComponent {...args} />
        </div>
    ),
};
