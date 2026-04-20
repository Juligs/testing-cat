import React, { useEffect, useRef, useState } from 'react';
import Lottie, { AnimationDirection, AnimationItem } from 'lottie-web';
import { RendererType } from './animation.enums';
import { clsx } from 'clsx';

interface AnimationProps {
    src: string;
    autoplay?: boolean;
    renderer?: RendererType;
    loop?: boolean;
    pointerEventsNone?: boolean;
    bgColor?: string;
    speed?: number;
    direction?: AnimationDirection;
    keepAspectRatio?: boolean;
}

export function Animation({
    src,
    autoplay = true,
    renderer = RendererType.Svg,
    loop = true,
    pointerEventsNone = false,
    bgColor = 'bg-transparent',
    speed = 1,
    direction = 1,
    keepAspectRatio,
}: AnimationProps) {
    const [isMobile, setIsMobile] = useState(checkWindowWidth());
    const playerRef = useRef<HTMLDivElement>(null);
    const animationRef = useRef<AnimationItem | null>(null);

    function checkWindowWidth() {
        if (typeof window === 'undefined') return false;
        return window.innerWidth < 712;
    }

    useEffect(() => {
        const animation = animationRef.current;

        if (playerRef.current) {
            // If there is an animation, destroy it
            if (animation) {
                animation.destroy();
            }

            // preserveAspectRatio is a Lottie property that controls how the animation maintains its aspect ratio.
            // "xMidYMid" centers it, while "slice" is applied to containers that need to be covered.
            // The `keepAspectRatio` prop applies "slice" where required, and it's always used on mobile.

            const preserveAspectRatio = keepAspectRatio || isMobile ? 'xMidYMid slice' : 'xMidYMid';

            const anim = Lottie.loadAnimation({
                renderer,
                container: playerRef.current,
                loop,
                autoplay,
                path: src,
                rendererSettings: {
                    preserveAspectRatio,
                },
            });

            animationRef.current = anim;
        }

        return () => {
            if (animation) {
                animation.destroy();
            }
        };
    }, [src, renderer, loop, autoplay, isMobile, keepAspectRatio]);

    useEffect(() => {
        const onResize = () => {
            const isWindowMobile = checkWindowWidth();
            if (isWindowMobile !== isMobile) {
                setIsMobile(isWindowMobile);
            }
        };
        window.addEventListener('resize', onResize);

        return () => {
            window.removeEventListener('resize', onResize);
        };
    }, [animationRef.current, isMobile, setIsMobile]);

    useEffect(() => {
        const animation = animationRef.current;
        if (animation) {
            animation.setSpeed(speed);
            animation.setDirection(direction);
        }
    }, [speed, direction, animationRef.current]);

    return (
        <div
            ref={playerRef}
            className={clsx(bgColor, {
                'pointer-events-none': pointerEventsNone,
            })}
            role="img"
        />
    );
}
