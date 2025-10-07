export interface FooterRoute {
    title: string;
    path: string;
    isExternal?: boolean;
    hideFromFooter?: boolean;
    children?: FooterRoute[];
}

export type NavbarGroupItem = {
    title: string;
    path: string;
    link?: string;
    active?: boolean;
    menuRows: MenuRow[];
};

export type MenuRow =
    | {
          isFooter?: false | never;
          sections: MenuRowSection[];
      }
    | {
          isFooter: true;
          mobileSections: MenuRowSection[];
          desktopSections: MenuRowSection[];
      };

export type MenuRowSection = VerticalSection | CTASection;

export type VerticalSection = {
    children?: MenuRoute[];
    highlighted?: boolean;
    title?: string;
    icon?: React.ReactNode;
};

export type CTASection = {
    overline: string;
    title: string;
    cta: CTA;
};

export type CTA = {
    href: string;
    text: string;
};

export type MenuRoute = {
    title: string;
    href: string;
    isExternal?: boolean;
    image?: string;
    description?: string;
};
