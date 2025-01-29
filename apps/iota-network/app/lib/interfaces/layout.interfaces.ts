export interface Route {
    title: string;
    description?: string;
    path: string;
    isExternal?: boolean;
    hideFromNavbar?: boolean;
    hideFromFooter?: boolean;
    children?: Route[];
    navbarSections?: NavbarSection[];
    image?: string;
}

export interface NavbarSection {
    title?: string;
    icon?: React.ReactNode;
    children: Route[];
}
