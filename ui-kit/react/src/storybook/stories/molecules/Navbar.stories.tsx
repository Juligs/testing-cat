import type { Meta, StoryObj } from '@storybook/react';
import { NavbarItem } from '@components/atoms';
import { Navbar, NavbarItemList } from '@components/molecules';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { Viewport } from 'src/storybook/enums';
import { IotaLogo } from '@repo/icons';

const meta: Meta<typeof Navbar> = {
    title: 'Molecules/Navbar',
    component: Navbar,
    parameters: {
        viewport: {
            viewports: INITIAL_VIEWPORTS,
        },
    },
};

export default meta;
type Story = StoryObj<typeof Navbar>;

const IotaLogoMock = () => {
    return (
        <span className="flex items-center gap-x-2 text-body-md font-medium text-[inherit]">
            <IotaLogo className="h-8 w-8" />
            IOTA
        </span>
    );
};

const NAVBAR_ITEMS = [
    { label: 'Docs', active: true },
    { label: 'Blog' },
    { label: 'Community' },
    { label: 'Contact' },
];

export const DesktopDefault: Story = {
    parameters: {
        viewport: {
            viewports: { ...INITIAL_VIEWPORTS },
            defaultViewport: Viewport.Screen,
        },
    },
    render: (args) => (
        <Navbar {...args}>
            <IotaLogoMock />
            <NavbarItemList>
                {NAVBAR_ITEMS.map((item, index) => (
                    <NavbarItem key={index} active={item.active} inverted={args.inverted}>
                        {item.label}
                    </NavbarItem>
                ))}
            </NavbarItemList>
        </Navbar>
    ),
};

export const MobileDefault: Story = {
    parameters: {
        viewport: {
            viewports: { ...INITIAL_VIEWPORTS },
            defaultViewport: 'iphone12promax',
        },
    },
    render: (args) => (
        <Navbar {...args}>
            <IotaLogoMock />
            <NavbarItemList>
                {NAVBAR_ITEMS.map((item, index) => (
                    <NavbarItem key={index} active={item.active} inverted={args.inverted}>
                        {item.label}
                    </NavbarItem>
                ))}
            </NavbarItemList>
        </Navbar>
    ),
};
