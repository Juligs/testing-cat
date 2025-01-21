'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

interface SectionObserverProps {
    onSectionChange: (sectionId: string | null, theme: string | null) => void;
}

export function SectionObserver({ onSectionChange }: SectionObserverProps) {
    const currentPath = usePathname();

    useEffect(() => {
        const container = document.querySelector('body');
        const visible: string[] = [];
        const sectionElements = Array.from(
            container?.querySelectorAll('section') || [],
        ) as HTMLElement[];
        const sections = sectionElements.map((s) => s.id);

        const updateActiveSection = (activeSection: string | null) => {
            if (activeSection) {
                const activeElement = sectionElements.find(
                    (section) => section.id === activeSection,
                );
                const theme = activeElement?.getAttribute('data-theme') || null;
                onSectionChange(activeSection, theme);
            } else {
                onSectionChange(null, null);
            }
        };

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

                updateActiveSection(visible[0] || null);
            },
            { threshold: [0] },
        );

        sectionElements.forEach((el) => observer.observe(el));

        return () => {
            observer.disconnect();
            onSectionChange(null, null);
        };
    }, [onSectionChange, currentPath]); // Reobserve on path change

    return null;
}
