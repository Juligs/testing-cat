import type { Meta, StoryObj } from '@storybook/react';
import { Hero, HeroBackground } from '@lib/server-components/organisms';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { Viewport } from 'src/storybook/enums';
import { Button, ButtonVariant } from '@lib/server-components';

const meta: Meta<typeof Hero> = {
    component: Hero,
    parameters: {
        viewport: {
            viewports: INITIAL_VIEWPORTS,
        },
    },
};

function HeroExample(args: Story['args']) {
    return (
        <section className="min-h-screen h-full flex flex-col">
            <Hero {...args}>
                <HeroBackground source="https://files.iota.org/media/binance_clubhouse_anaglyph.mp4" />
                <div className="flex flex-col justify-center items-center">
                    <h1 className="text-display-lg">Title</h1>
                    <p className=" text-headline-lg">Subtitle</p>
                    <div className="flex flex-row gap-x-2">
                        <Button>Button</Button>
                        <Button variant={ButtonVariant.Secondary}>Button</Button>
                    </div>
                </div>
            </Hero>
        </section>
    );
}

export default meta;
type Story = StoryObj<typeof Hero>;

export const DesktopScreen: Story = {
    parameters: {
        viewport: {
            viewports: { ...INITIAL_VIEWPORTS },
            defaultViewport: Viewport.Screen,
        },
        layout: 'fullscreen',
    },
    render: HeroExample,
};

export const MobileScreen: Story = {
    parameters: {
        viewport: {
            viewports: { ...INITIAL_VIEWPORTS },
            defaultViewport: 'iphone12promax',
        },
        layout: 'fullscreen',
    },
    render: HeroExample,
};
