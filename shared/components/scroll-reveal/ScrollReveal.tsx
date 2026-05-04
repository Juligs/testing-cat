'use client';

import { ElementType, ComponentPropsWithoutRef } from 'react';
import { useScrollReveal } from '../../hooks';

type ScrollRevealVariant = 'reveal' | 'reveal-stagger' | 'reveal-fade';

type ScrollRevealProps<T extends ElementType = 'div'> = {
    as?: T;
    variant?: ScrollRevealVariant;
    delay?: number;
    rootMargin?: string;
} & Omit<ComponentPropsWithoutRef<T>, 'as'>;

export function ScrollReveal<T extends ElementType = 'div'>({
    as,
    variant = 'reveal',
    delay,
    rootMargin,
    className,
    style,
    children,
    ...rest
}: ScrollRevealProps<T>) {
    const Tag = (as ?? 'div') as ElementType;
    const ref = useScrollReveal({ rootMargin });

    const delayStyle = delay !== undefined ? ({ '--i': delay } as React.CSSProperties) : undefined;

    return (
        <Tag
            ref={ref}
            className={[variant, className].filter(Boolean).join(' ')}
            style={{ ...delayStyle, ...style }}
            {...rest}
        >
            {children}
        </Tag>
    );
}
