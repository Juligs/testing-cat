import type { Meta, StoryObj } from '@storybook/react';
import { TextInput, TextInputSize } from '@lib/client-components/atoms';
import { getStoryEnumOptions } from 'src/storybook/utils';

const meta: Meta<typeof TextInput> = {
    component: TextInput,
    title: 'Atoms/TextInput',
    argTypes: {
        size: getStoryEnumOptions(TextInputSize),
        inverted: { control: 'boolean' },
        trailingIcon: { control: 'boolean' },
        disabled: { control: 'boolean' },
        error: { control: 'boolean' },
        placeholder: { control: 'text' },
    },
};

export default meta;
type Story = StoryObj<typeof TextInput>;

export const TextInputDefault: Story = {
    args: { size: TextInputSize.Default },
    render: (args) => (
        <div className="max-w-xs">
            <TextInput {...args} label="Label" caption="Caption" />
        </div>
    ),
};
export const TextInputLarge: Story = {
    args: { size: TextInputSize.Large },
    render: (args) => (
        <div className="max-w-xs">
            <TextInput {...args} label="Label" caption="Caption" />
        </div>
    ),
};
export const TextInputLargeWithPlaceholder: Story = {
    args: { size: TextInputSize.Large },
    render: (args) => (
        <div className="max-w-xs">
            <TextInput {...args} label="Label" caption="Caption" placeholder="placeholder" />
        </div>
    ),
};
export const TextInputError: Story = {
    args: { size: TextInputSize.Large },
    render: (args) => (
        <div className="max-w-sm">
            <TextInput {...args} label="Label" caption="label" value="Helloo" error />
        </div>
    ),
};

export const TextInputDisabled: Story = {
    args: { size: TextInputSize.Default },
    render: (args) => (
        <div className="max-w-sm">
            <TextInput {...args} label="Label" caption="label" value="Helloo" disabled />
        </div>
    ),
};
