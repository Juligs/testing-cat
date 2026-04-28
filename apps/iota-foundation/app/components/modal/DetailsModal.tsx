'use client';

import Link from 'next/link';
import { Button } from 'react-ui-kit';
import { ArrowTopRight, Close } from '@repo/icons';

interface DetailsModalProps {
    onClose: () => void;
    title: string;
    subInfo?: string;
    authors?: string;
    abstract?: string;
    abstractTitle?: string;
    url?: string;
}

export function DetailsModal({
    onClose,
    title,
    subInfo,
    authors,
    abstract,
    abstractTitle = 'Abstracts',
    url,
}: DetailsModalProps) {
    return (
        <div
            role="dialog"
            aria-modal="true"
            className="fixed inset-0 z-50 bg-transparency-black-32 flex items-center justify-center p-4"
            onClick={(e) => {
                if (e.target !== e.currentTarget) return;
                onClose();
            }}
        >
            <div
                className="relative bg-foundation-primary-100 max-w-[852px] max-h-[80vh] w-full rounded-2xl p-2 xs:p-6 select-none"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="overflow-y-auto max-h-[calc(80vh-3rem)]">
                    <div className="flex flex-col gap-4">
                        <div className="flex justify-between items-center text-darkest">
                            <p className="text-title-md">Paper</p>
                            <button
                                type="button"
                                aria-label="Close"
                                className="[&_svg]:h-6 [&_svg]:w-6 cursor-pointer"
                                onClick={onClose}
                            >
                                <Close />
                            </button>
                        </div>
                        <div className="w-full h-[1px] bg-transparency-black-16" />

                        <h2 className="text-title-md text-darkest">{title}</h2>
                        {subInfo ? (
                            <p className="text-label-md text-medium max-w-[430px]">{subInfo}</p>
                        ) : null}
                        {authors ? <p className="text-body-md text-medium">{authors}</p> : null}
                        {abstract ? (
                            <div className="w-full h-[1px] bg-transparency-black-16" />
                        ) : null}
                        {abstract ? (
                            <>
                                {abstractTitle ? (
                                    <h3 className="text-title-sm text-darkest">{abstractTitle}</h3>
                                ) : null}
                                <div className="text-body-lg text-medium xs:pr-20">{abstract}</div>
                            </>
                        ) : null}
                    </div>

                    {url ? (
                        <Link
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center mt-10"
                        >
                            <Button text="View Paper" icon={<ArrowTopRight />} />
                        </Link>
                    ) : null}
                </div>
            </div>
        </div>
    );
}
