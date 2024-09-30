import type { Meta, StoryObj } from '@storybook/react';
import { NavbarItem } from '@lib/server-components/atoms';
import { Navbar, NavbarItems } from '@lib/server-components/molecules';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { Viewport } from 'src/storybook/enums';
import { IotaLogo } from '@repo/icons';
import { useState } from 'react';

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

function IotaLogoMock() {
    return (
        <span className="flex items-center gap-x-2 text-body-md font-medium text-[inherit]">
            <IotaLogo className="h-8 w-8" />
            IOTA
        </span>
    );
}

function NavbarMock(args?: Story['args']) {
    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

    const NAVBAR_ITEMS = [
        { label: 'Docs', active: true },
        { label: 'Blog' },
        { label: 'Community' },
        { label: 'Contact' },
    ];
    return (
        <Navbar {...args}>
            <NavbarItems
                logo={<IotaLogoMock />}
                isMobileNavOpen={isMobileNavOpen}
                onMobileNavToggle={() => setIsMobileNavOpen((isOpen) => !isOpen)}
            >
                {NAVBAR_ITEMS.map((item, index) => (
                    <NavbarItem key={index} active={item.active ?? false} inverted={args?.inverted}>
                        {item.label}
                    </NavbarItem>
                ))}
            </NavbarItems>
        </Navbar>
    );
}

export const DesktopDefault: Story = {
    parameters: {
        viewport: {
            viewports: { ...INITIAL_VIEWPORTS },
            defaultViewport: Viewport.Screen,
        },
    },
    render: () => <NavbarMock />,
};

export const MobileDefault: Story = {
    parameters: {
        viewport: {
            viewports: { ...INITIAL_VIEWPORTS },
            defaultViewport: 'iphone12promax',
        },
    },
    render: () => <NavbarMock />,
};
