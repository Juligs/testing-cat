import { useEffect, useRef, useState } from 'react';

export function useDelayedUnmount(isOpen: boolean, duration = 200) {
    const [isMounted, setIsMounted] = useState(isOpen);
    const [isClosing, setIsClosing] = useState(false);
    const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    useEffect(() => {
        if (isOpen) {
            if (timerRef.current) clearTimeout(timerRef.current);
            setIsClosing(false);
            setIsMounted(true);
        } else if (isMounted) {
            setIsClosing(true);
            timerRef.current = setTimeout(() => {
                setIsMounted(false);
                setIsClosing(false);
            }, duration);
        }

        return () => {
            if (timerRef.current) clearTimeout(timerRef.current);
        };
    }, [isOpen, duration, isMounted]);

    return { isMounted, isClosing };
}
