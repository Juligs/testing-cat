'use client';

import { useEffect, useRef } from 'react';

interface UseScrollRevealOptions {
    rootMargin?: string;
    threshold?: number;
    once?: boolean;
}

export function useScrollReveal<T extends HTMLElement = HTMLElement>(
    options: UseScrollRevealOptions = {},
) {
    const { rootMargin = '0px', threshold = 0.1, once = true } = options;
    const ref = useRef<T>(null);

    useEffect(() => {
        const container = ref.current;
        if (!container) return;

        const REVEAL_CLASSES = ['.reveal', '.reveal-stagger', '.reveal-fade'];
        const selector = REVEAL_CLASSES.join(', ');

        const targets: HTMLElement[] = [];
        if (container.matches(selector)) targets.push(container);
        targets.push(...Array.from(container.querySelectorAll<HTMLElement>(selector)));

        if (targets.length === 0) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        if (once) observer.unobserve(entry.target);
                    } else if (!once) {
                        entry.target.classList.remove('is-visible');
                    }
                });
            },
            { rootMargin, threshold },
        );

        targets.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, [rootMargin, threshold, once]);

    return ref;
}
