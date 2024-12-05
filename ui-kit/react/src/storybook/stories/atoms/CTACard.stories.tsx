import type { Meta, StoryObj } from '@storybook/react';
import { CtaCard as CtaCardCardComponent, TextLink } from '@lib/server-components';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { Viewport } from 'src/storybook/enums';

const meta: Meta<typeof CtaCardCardComponent> = {
    component: CtaCardCardComponent,
    title: 'Molecules/CTACard',
    argTypes: {
        inverted: {
            control: 'boolean',
        },
        children: {
            control: 'boolean',
        },
    },
    parameters: {
        viewport: {
            viewports: INITIAL_VIEWPORTS,
        },
    },
};
export default meta;
type Story = StoryObj<typeof CtaCardCardComponent>;
export const CtaCardFullWidth: Story = {
    args: {},
    parameters: {
        viewport: {
            viewports: { ...INITIAL_VIEWPORTS },
            defaultViewport: Viewport.Screen,
        },
        layout: 'fullscreen',
    },
    render: (args) => (
        <div className="p-6">
            <CtaCardCardComponent
                {...args}
                image="https://files.iota.org/media/iotalabs/iotalabs_hero_poster.jpg"
                title="CTA Card Title"
                subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id diam vitae lectus lobortis vehicula eget nec neque."
            >
                <TextLink text="Learn More" showIcon />
                <TextLink text="Learn More" showIcon />
            </CtaCardCardComponent>
        </div>
    ),
};
export const CtaCardHalfWidthDesktop: Story = {
    args: {},
    parameters: {
        viewport: {
            defaultViewport: 'pixelxl',
        },
    },
    render: (args) => (
        <CtaCardCardComponent
            {...args}
            image="https://files.iota.org/media/iotalabs/iotalabs_hero_poster.jpg"
            title="CTA Card Title"
            subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id diam vitae lectus lobortis vehicula eget nec neque."
        >
            <TextLink text="Learn More" showIcon />
            <TextLink text="Learn More" showIcon />
        </CtaCardCardComponent>
    ),
};
export const CtaCardMobile: Story = {
    args: {},
    parameters: {
        viewport: {
            defaultViewport: 'iphone13',
        },
    },
    render: (args) => (
        <CtaCardCardComponent
            {...args}
            image="https://files.iota.org/media/iotalabs/iotalabs_hero_poster.jpg"
            title="CTA Card Title"
            subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id diam vitae lectus lobortis vehicula eget nec neque."
        />
    ),
};
