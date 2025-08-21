'use client';

import { PaperData } from '@lib/utils';
import { ArrowTopRight, Close } from '@repo/icons';
import { Button } from 'react-ui-kit';
import Link from 'next/link';

interface PaperModalProps {
    paper: PaperData;
    onClose: () => void;
}

export function PaperModal({ paper, onClose }: PaperModalProps) {
    return (
        <div
            className="fixed inset-0 z-50 bg-transparency-black-32 flex items-center justify-center p-4"
            onClick={(e) => {
                if (e.target !== e.currentTarget) return;
                onClose();
            }}
        >
            <div
                className="relative bg-foundation-primary-100 max-w-[852px] max-h-[80vh] w-full rounded-2xl p-2 xs:p-6"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="overflow-y-auto max-h-[calc(80vh-3rem)] p-2">
                    <div className="flex flex-col gap-4">
                        <div className="flex justify-between items-center text-darkest">
                            <p className="text-title-md">Paper</p>
                            <div
                                className="[&_svg]:h-6 [&_svg]:w-6 cursor-pointer"
                                onClick={onClose}
                            >
                                <Close />
                            </div>
                        </div>

                        <div className="w-full h-[1px] bg-transparency-black-16" />
                        <h2 className="text-title-md text-darkest">{paper.title}</h2>
                        {paper.publicationInfo && (
                            <p className="text-label-md text-medium max-w-[430px]">
                                {paper.publicationInfo}
                            </p>
                        )}
                        {paper.authors && (
                            <p className="text-body-md text-medium">{paper.authors}</p>
                        )}

                        <div className="w-full h-[1px] bg-transparency-black-16" />
                        {paper.abstract && (
                            <>
                                <h3 className="text-title-sm text-darkest">Abstract</h3>
                                <p className="text-body-lg text-medium xs:pr-20">
                                    {paper.abstract}
                                </p>
                            </>
                        )}
                    </div>

                    {(paper.linkPeerReviewed || paper.linkOpenAccess) && (
                        <Link
                            href={paper.linkOpenAccess || paper.linkPeerReviewed || ''}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center mt-10"
                        >
                            <Button text="View Paper" icon={<ArrowTopRight />} />
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
}
