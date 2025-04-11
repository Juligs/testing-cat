import { ALL_SHOWCASES_ITEM, SHOWCASES_LIST } from '@lib/constants';
import { usePathname } from 'next/navigation';

export interface Showcase {
    title: string;
    subtitle: string;
    link: string;
}

export function useNextShowcase(): Showcase[] {
    const pathname = usePathname();
    const index = SHOWCASES_LIST.findIndex((s) => pathname.startsWith(s.link));
    const next = index !== -1 ? SHOWCASES_LIST[(index + 1) % SHOWCASES_LIST.length] : null;

    const content = [ALL_SHOWCASES_ITEM, ...(next ? [next] : [])];

    return content;
}
