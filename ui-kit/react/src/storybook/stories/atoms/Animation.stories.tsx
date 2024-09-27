import type { Meta, StoryObj } from '@storybook/react';
import { RendererType, Animation as AnimationComponent } from '@lib/client-components/atoms';

const meta: Meta<typeof AnimationComponent> = {
    component: AnimationComponent,
    title: 'Atoms/Animation',
    argTypes: {
        src: { control: 'text' },
        autoplay: { control: 'boolean' },
        loop: { control: 'boolean' },
        renderer: {
            control: { type: 'select' },
            options: Object.values(RendererType),
        },
        pointerEventsNone: {
            control: 'boolean',
        },
        bgColor: {
            control: 'color',
        },
        speed: {
            control: 'number',
        },
        direction: {
            control: { type: 'select' },
            options: [1, -1],
        },
    },
};

export default meta;
type Story = StoryObj<typeof AnimationComponent>;

export const Animation: Story = {
    args: {
        src: 'https://lottie.host/0676c6d9-61f5-4621-b76b-1f43e07e7263/bgUElK17Hc.json',
    },
    render: (args) => (
        <div className="flex items-center aspect-video">
            <AnimationComponent {...args} />
        </div>
    ),
};
