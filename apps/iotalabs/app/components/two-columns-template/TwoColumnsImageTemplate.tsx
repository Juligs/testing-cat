import React from 'react';
import Image from 'next/image';
import clsx from 'clsx';
interface TwoColumnsImageTemplateProps {
    reverse?: boolean;
    image: string;
}

export function TwoColumnsImageTemplate({
    reverse = false,
    image,
    children,
}: React.PropsWithChildren<TwoColumnsImageTemplateProps>) {
    const REVERSED_CLASS = reverse
        ? 'flex-col-reverse md:flex-row-reverse'
        : 'flex-col md:flex-row';
    return (
        <div className={clsx('flex gap-6 w-full items-center justify-between', REVERSED_CLASS)}>
            <div className="w-full md:w-1/2">{children}</div>
            <div className="w-full md:w-1/2">
                <Image src={image} alt="Image" width={708} height={531} />
            </div>
        </div>
    );
}
