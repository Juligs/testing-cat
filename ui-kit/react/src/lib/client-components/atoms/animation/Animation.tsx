import React, { useEffect, useRef, useState } from 'react';
import Lottie, { AnimationDirection, AnimationItem } from 'lottie-web';
import { RendererType } from './animation.enums';
import clsx from 'clsx';

interface AnimationProps {
    src: string;
    autoplay?: boolean;
    renderer?: RendererType;
    loop?: boolean;
    pointerEventsNone?: boolean;
    bgColor?: string;
    speed?: number;
    direction?: AnimationDirection;
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
}: AnimationProps) {
    const playerRef = useRef<HTMLDivElement>(null);
    const [animation, setAnimation] = useState<AnimationItem | null>(null);

    useEffect(() => {
        if (playerRef.current) {
            // If there is an animation, destroy it
            if (animation) {
                animation.destroy();
            }

            const anim = Lottie.loadAnimation({
                renderer,
                container: playerRef.current,
                loop,
                autoplay,
                path: src,
            });
            setAnimation(anim);
        }

        return () => {
            if (animation) {
                animation.destroy();
            }
        };
    }, [src, renderer, loop, autoplay]);

    useEffect(() => {
        if (animation) {
            animation.setSpeed(speed);
            animation.setDirection(direction);
        }
    }, [speed, direction, animation]);

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
