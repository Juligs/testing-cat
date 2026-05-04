'use client';

import { useEffect, useState } from 'react';

export function useModal<T>(lockBodyScroll = true) {
    const [item, setItem] = useState<T | null>(null);

    const open = (value: T) => setItem(value);
    const close = () => setItem(null);

    useEffect(() => {
        if (!lockBodyScroll) return;
        document.body.classList.toggle('overflow-hidden', !!item);
        return () => document.body.classList.remove('overflow-hidden');
    }, [item, lockBodyScroll]);

    return { item, open, close, isOpen: !!item };
}
