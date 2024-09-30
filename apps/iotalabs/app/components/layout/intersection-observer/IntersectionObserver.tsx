'use client';

import { useEffect } from 'react';

interface SectionObserverProps {
    onSectionChange: (activeSectionId: string | null) => void;
}

export function SectionObserver({
    children,
    onSectionChange,
}: React.PropsWithChildren<SectionObserverProps>) {
    useEffect(() => {
        const container = document.querySelector('body');
        const visible: string[] = [];
        const sectionElements = Array.from(
            container?.querySelectorAll('section') || [],
        ) as HTMLElement[];
        const sections = sectionElements.map((s) => s.id);

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const id = entry.target.id;
                    if (entry.isIntersecting) {
                        if (visible[0] && sections.indexOf(id) < sections.indexOf(visible[0])) {
                            visible.unshift(id);
                        } else {
                            visible.push(id);
                        }
                    } else {
                        const visiblePosition = visible.indexOf(id);
                        if (visiblePosition > -1) visible.splice(visiblePosition, 1);
                    }
                });
                onSectionChange(visible[0] || null);
            },
            { threshold: [0] },
        );

        sectionElements.forEach((el) => observer.observe(el));

        return () => {
            observer.disconnect();
            onSectionChange(null);
        };
    }, [onSectionChange]);

    return null;
}
