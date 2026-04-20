import type { Meta, StoryObj } from '@storybook/react-vite';
import { TestimonialCard as TestimonialCardComponent } from '@lib/server-components';
const meta: Meta<typeof TestimonialCardComponent> = {
    component: TestimonialCardComponent,
    title: 'Atoms/TestimonialCard',
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof TestimonialCardComponent>;

export const TestimonialCard: Story = {
    render: (args) => (
        <div className="max-w-md">
            <TestimonialCardComponent
                {...args}
                name="Name"
                supportingText="Score in Security Audits by Zokyo"
                content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id diam vitae lectus lobortis vehicula eget nec neque. Nam nec ultricies neque, vel mattis diam. Integer commodo elit eu ornare tristique."
                image="https://res.cloudinary.com/ddtvll25c/image/upload/v1676989058/vr4m4gb88nrwcz0vpefv.jpg"
            />
        </div>
    ),
};
