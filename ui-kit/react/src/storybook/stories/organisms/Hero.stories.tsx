import type { Meta, StoryObj } from '@storybook/react-vite';
import { HeroLayout, HeroType, HeroBackground } from '@lib/server-components/organisms';
import { ScreenSize } from '@lib/server';
import { INITIAL_VIEWPORTS } from 'storybook/viewport';
import { Viewport } from 'src/storybook/enums';
import { Button, ButtonVariant } from '@lib/server-components';
import { getStoryEnumOptions } from 'src/storybook/utils';

const meta: Meta<typeof HeroLayout> = {
    component: HeroLayout,
    parameters: {
        viewport: {
            viewports: INITIAL_VIEWPORTS,
        },
    },
    argTypes: {
        type: getStoryEnumOptions(HeroType),
    },
};

function HeroMediaImage(args: Story['args']) {
    return (
        <section className="min-h-screen h-full flex flex-col">
            <HeroLayout {...args}>
                <HeroBackground
                    mediaType="image"
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
            </HeroLayout>
        </section>
    );
}
function HeroVideo(args: Story['args']) {
    return (
        <section className="min-h-screen h-full flex flex-col">
            <HeroLayout {...args}>
                <HeroBackground
                    mediaType="video"
                    sourceSet={{
                        [ScreenSize.Xs]: {
                            sources: [
                                {
                                    src: 'https://files.iota.org/media/iota-network/homepage_hero_mobile.mp4',
                                    type: 'video/mp4',
                                },
                                {
                                    src: 'https://files.iota.org/media/iota-network/homepage_hero_mobile.webm',
                                    type: 'video/webm',
                                },
                            ],
                        },
                        [ScreenSize.Md]: {
                            sources: [
                                {
                                    src: 'https://files.iota.org/media/iota-network/homepage_hero.mp4',
                                    type: 'video/mp4',
                                },
                                {
                                    src: 'https://files.iota.org/media/iota-network/homepage_hero.webm',
                                    type: 'video/webm',
                                },
                            ],
                        },
                    }}
                    videoProps={{
                        poster: 'https://files.iota.org/media/iota-network/homepage_hero_poster.jpg',
                    }}
                    className="rounded-lg shadow-lg"
                />
                <div className="flex flex-col justify-center items-center">
                    <h1 className="text-display-lg">Title</h1>
                    <p className=" text-headline-lg">Subtitle</p>
                    <div className="flex flex-row gap-x-2">
                        <Button text="Button" />
                        <Button variant={ButtonVariant.Secondary} text="Button" />
                    </div>
                </div>
            </HeroLayout>
        </section>
    );
}

function HeroNoMedia(args: Story['args']) {
    return (
        <section className="min-h-screen h-full flex flex-col">
            <HeroLayout {...args} hasGradientBackground>
                <div className="flex flex-col justify-center items-center">
                    <h1 className="text-display-lg">Title</h1>
                    <p className=" text-headline-lg">Subtitle</p>
                    <div className="flex flex-row gap-x-2">
                        <Button text="Button" />
                        <Button variant={ButtonVariant.Secondary} text="Button" />
                    </div>
                </div>
            </HeroLayout>
        </section>
    );
}

export default meta;
type Story = StoryObj<typeof HeroLayout>;

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
