'use client';

import { ComplianceData } from '@lib/utils/sanitizeComplianceSheetsData';
import Link from 'next/link';
import { useState } from 'react';
import { Actions, Button, ButtonVariant, ImageCard, TextLink } from 'react-ui-kit';

interface CompliancePapersProps {
    data: ComplianceData[];
}
const MAX_PAPERS_PER_PAGE = 9;

export function CompliancePapers({ data }: CompliancePapersProps) {
    const [visibleCount, setVisibleCount] = useState(MAX_PAPERS_PER_PAGE);
    const visiblePapers = data.slice(0, visibleCount);

    const handleLoadMore = () =>
        setVisibleCount((prev) => Math.min(prev + MAX_PAPERS_PER_PAGE, data.length));

    const renderPaperCard = (paper: ComplianceData, index: number) => (
        <div key={index} className="cursor-pointer !h-full block [&>div]:h-full select-none">
            <ImageCard
                title={paper.title}
                overline={paper.date}
                body={paper.description}
                subtitle={paper.subline}
                isHoverable={false}
            >
                {paper.url && (
                    <Actions>
                        <Link href={paper.url} target="_blank" rel="noopener noreferrer">
                            <TextLink text={paper.cta} showIcon />
                        </Link>
                    </Actions>
                )}
            </ImageCard>
        </div>
    );

    if (!data?.length) return null;

    return (
        <div className="relative flex flex-col gap-30">
            <div className="grid grid-cols-1 xs:grid-cols-3 gap-6">
                {visiblePapers.map(renderPaperCard)}
            </div>

            <div className="flex items-center justify-center gap-6">
                <p className="text-label-md text-medium">
                    Papers{' '}
                    <span className="underline underline-offset-4 decoration-transparency-black-16">
                        1 – {visiblePapers.length}
                    </span>{' '}
                    of{' '}
                    <span className="underline underline-offset-4 decoration-transparency-black-16">
                        {data.length}
                    </span>
                </p>

                {visibleCount < data.length && (
                    <Button
                        text="Load more"
                        onClick={handleLoadMore}
                        variant={ButtonVariant.Secondary}
                    />
                )}
            </div>
        </div>
    );
}
