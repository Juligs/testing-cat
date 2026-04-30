'use client';

import { useLayoutEffect } from 'react';
export function ScrollRevealProvider() {
    useLayoutEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        observer.unobserve(entry.target);
                    }
                });
            },
            { rootMargin: '-25% 0px', threshold: 0 },
        );

        const seen = new WeakSet<Element>();

        function isInitiallyVisible(element: HTMLElement) {
            const rect = element.getBoundingClientRect();
            return rect.bottom > 0 && rect.top < window.innerHeight;
        }

        function observeSections() {
            const sections = Array.from(document.querySelectorAll<HTMLElement>('section'));

            sections.forEach((el, index) => {
                if (seen.has(el)) return;
                seen.add(el);

                if (index === 0) return;
                if (el.querySelector('.reveal-stagger, .reveal, .reveal-fade')) return;

                if (isInitiallyVisible(el)) {
                    el.classList.add('is-visible');
                    el.classList.remove('will-animate');
                    return;
                }

                el.classList.add('will-animate');
                observer.observe(el);
            });
        }

        observeSections();

        const mutation = new MutationObserver(observeSections);
        mutation.observe(document.body, { childList: true, subtree: true });

        return () => {
            observer.disconnect();
            mutation.disconnect();
        };
    }, []);

    return null;
}
