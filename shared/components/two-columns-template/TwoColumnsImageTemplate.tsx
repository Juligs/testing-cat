import React from 'react';
import clsx from 'clsx';
import type { ImageProps } from 'next/image';

interface TwoColumnsImageTemplateProps {
    reverse?: boolean;
    image: string;
    imageComponent?: (props: ImageProps) => React.ReactNode;
}

export function TwoColumnsImageTemplate({
    reverse = false,
    image,
    children,
    imageComponent,
}: React.PropsWithChildren<TwoColumnsImageTemplateProps>) {
    const REVERSED_CLASS = reverse
        ? 'flex-col-reverse xs:flex-row-reverse'
        : 'flex-col-reverse xs:flex-row';
    const Image = imageComponent || 'img';
    return (
        <div
            className={clsx(
                'flex gap-10 xs:gap-6 w-full items-center justify-between',
                REVERSED_CLASS,
            )}
        >
            <div className="w-full xs:w-1/2">{children}</div>
            <div className="w-full xs:w-1/2 aspect-[4/3] items-center flex">
                <Image src={image} alt="Image" width={708} height={531} />
            </div>
        </div>
    );
}
