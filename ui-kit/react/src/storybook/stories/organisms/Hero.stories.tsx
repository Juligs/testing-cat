import type { Meta, StoryObj } from '@storybook/react';
import {
    Hero,
    HeroBackgroundVideo,
    HeroSize,
    HeroBackgroundImage,
} from '@lib/server-components/organisms';
import { ScreenSize } from '@lib/server';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { Viewport } from 'src/storybook/enums';
import { Button, ButtonVariant } from '@lib/server-components';
import { getStoryEnumOptions } from 'src/storybook/utils';

const meta: Meta<typeof Hero> = {
    component: Hero,
    parameters: {
        viewport: {
            viewports: INITIAL_VIEWPORTS,
        },
    },
    argTypes: {
        size: getStoryEnumOptions(HeroSize),
    },
};

function HeroMediaImage(args: Story['args']) {
    return (
        <section className="min-h-screen h-full flex flex-col">
            <Hero {...args}>
                <HeroBackgroundImage
                    sources={{
                        [ScreenSize.Xs]: {
                            src: 'https://fakeimg.pl/360x500?font=bebas&font_size=12',
                        },
                        [ScreenSize.Md]: {
                            src: 'https://placehold.co/1200x1200',
                        },
                    }}
                    className="rounded-lg shadow-lg"
                    alt="Responsive Hero Background"
                />
                <div className="flex flex-col justify-center items-center">
                    <h1 className="text-display-lg">Title</h1>
                    <p className=" text-headline-lg">Subtitle</p>
                    <div className="flex flex-row gap-x-2">
                        <Button text="Button" />
                        <Button variant={ButtonVariant.Secondary} text="Button" />
                    </div>
                </div>
            </Hero>
        </section>
    );
}
function HeroVideo(args: Story['args']) {
    return (
        <section className="min-h-screen h-full flex flex-col">
            <Hero {...args}>
                <HeroBackgroundVideo
                    sourceSet={{
                        [ScreenSize.Xs]: {
                            src: 'https://files.iota.org/media/binance_clubhouse_anaglyph.mp4',
                        },
                        [ScreenSize.Lg]: {
                            src: 'https://files.iota.org/media/iotalabs/iotalabs_hero.mp4',
                        },
                    }}
                ></HeroBackgroundVideo>
                <div className="flex flex-col justify-center items-center">
                    <h1 className="text-display-lg">Title</h1>
                    <p className=" text-headline-lg">Subtitle</p>
                    <div className="flex flex-row gap-x-2">
                        <Button text="Button" />
                        <Button variant={ButtonVariant.Secondary} text="Button" />
                    </div>
                </div>
            </Hero>
        </section>
    );
}

function HeroNoMedia(args: Story['args']) {
    return (
        <section className="min-h-screen h-full flex flex-col">
            <Hero {...args} hasGradientBackground>
                <div className="flex flex-col justify-center items-center">
                    <h1 className="text-display-lg">Title</h1>
                    <p className=" text-headline-lg">Subtitle</p>
                    <div className="flex flex-row gap-x-2">
                        <Button text="Button" />
                        <Button variant={ButtonVariant.Secondary} text="Button" />
                    </div>
                </div>
            </Hero>
        </section>
    );
}

export default meta;
type Story = StoryObj<typeof Hero>;

export const HeroWithImage: Story = {
    parameters: {
        viewport: {
            viewports: { ...INITIAL_VIEWPORTS },
            defaultViewport: Viewport.Screen,
        },
        layout: 'fullscreen',
    },
    render: HeroMediaImage,
};

export const MobileScreenImage: Story = {
    parameters: {
        viewport: {
            viewports: { ...INITIAL_VIEWPORTS },
            defaultViewport: 'iphone12promax',
        },
        layout: 'fullscreen',
    },
    render: HeroMediaImage,
};

export const HeroNoMediaExample: Story = {
    parameters: {
        viewport: {
            viewports: { ...INITIAL_VIEWPORTS },
            defaultViewport: Viewport.Screen,
        },
        layout: 'fullscreen',
    },
    render: HeroNoMedia,
};

export const DesktopScreen: Story = {
    parameters: {
        viewport: {
            viewports: { ...INITIAL_VIEWPORTS },
            defaultViewport: Viewport.Screen,
        },
        layout: 'fullscreen',
    },
    render: HeroVideo,
};

export const MobileScreen: Story = {
    parameters: {
        viewport: {
            viewports: { ...INITIAL_VIEWPORTS },
            defaultViewport: 'iphone12promax',
        },
        layout: 'fullscreen',
    },
    render: HeroVideo,
};
