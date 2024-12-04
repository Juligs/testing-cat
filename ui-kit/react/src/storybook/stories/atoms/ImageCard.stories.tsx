import type { Meta, StoryObj } from '@storybook/react';
import { ImageCard, TextLink } from '@lib/server-components/atoms';
import { getStoryEnumOptions } from 'src/storybook/utils';
import { ImageCardSize } from '@lib/server-components/atoms/image-card/imageCard.enums';

const meta: Meta<typeof ImageCard> = {
    component: ImageCard,
    title: 'Atoms/ImageCard',
    argTypes: {
        size: getStoryEnumOptions(ImageCardSize),
        children: {
            control: { type: 'boolean' },
        },
        image: {
            control: { type: 'boolean' },
        },
    },
};
export default meta;
type Story = StoryObj<typeof ImageCard>;

export const ImageCardComplete: Story = {
    args: {},
    render: (args) => (
        <div className="max-w-lg">
            <ImageCard
                {...args}
                image="https://res.cloudinary.com/dntpphebk/image/upload/v1732711830/Media_Element_jtfuq0.png"
                overline="Overline"
                title="Title"
                subtitle="Subtitle"
                body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id diam vitae lectus lobortis vehicula eget nec neque. Nam nec ultricies neque, vel mattis diam. Integer commodo elit eu ornare tristique."
            />
        </div>
    ),
};

export const ImageCardMultiLink: Story = {
    args: {},
    render: (args) => (
        <div className="max-w-lg">
            <ImageCard
                {...args}
                image="https://res.cloudinary.com/dntpphebk/image/upload/v1732711830/Media_Element_jtfuq0.png"
                overline="Overline"
                title="Title"
                body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id diam vitae lectus lobortis vehicula eget nec neque. Nam nec ultricies neque, vel mattis diam. Integer commodo elit eu ornare tristique."
            >
                <TextLink text="Learn More" showIcon />
                <TextLink text="Learn More" showIcon />
            </ImageCard>
        </div>
    ),
};
