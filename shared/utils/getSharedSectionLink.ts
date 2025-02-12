import { Theme } from 'react-ui-kit';

interface ThemeConfig {
    basePath: string;
}
const sharedSectionPaths: Partial<Record<Theme, ThemeConfig>> = {
    [Theme.Network]: { basePath: '/learn' },
    [Theme.Foundation]: { basePath: '/our-work' },
};

export function getSharedSectionLink(path: string, theme: Theme | undefined) {
    const config = theme ? sharedSectionPaths[theme] : undefined;
    return config ? `${config.basePath}${path}` : path;
}
