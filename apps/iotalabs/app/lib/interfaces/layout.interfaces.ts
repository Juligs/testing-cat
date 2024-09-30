export interface Route {
    title: string;
    path: string;
    isExternal?: boolean;
    hideFromNavbar?: boolean;
}

export interface PageMetadata {
    description?: string;
    keywords?: string;
    imageUrl?: string;
}
