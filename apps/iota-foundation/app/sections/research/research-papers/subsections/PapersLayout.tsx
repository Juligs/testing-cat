'use client';

import { PaperData } from '@lib/utils';
import { useEffect, useState } from 'react';
import {
    Badge,
    Button,
    ButtonVariant,
    ImageCard,
    TitleTextSize,
    VerticalTitle,
} from 'react-ui-kit';
import { PaperModal } from '../components';

interface PapersLayoutProps {
    data: PaperData[];
}
const MAX_PAPERS_PER_PAGE = 12;

export function PapersLayout({ data }: PapersLayoutProps) {
    const [selectedPaper, setSelectedPaper] = useState<PaperData | null>(null);
    const [visibleCount, setVisibleCount] = useState(MAX_PAPERS_PER_PAGE);

    const bestPapers = data.filter((paper) => paper.award?.trim().toLowerCase() === 'yes');
    const otherPapers = data.filter((paper) => paper.award?.trim().toLowerCase() !== 'yes');
    const visiblePapers = otherPapers.slice(0, visibleCount);

    const handleLoadMore = () =>
        setVisibleCount((prev) => Math.min(prev + MAX_PAPERS_PER_PAGE, otherPapers.length));

    const handleOpen = (paper: PaperData) => {
        if (selectedPaper?.title !== paper.title) {
            setSelectedPaper(paper);
        }
    };

    const handleClose = () => setSelectedPaper(null);

    useEffect(() => {
        document.body.classList.toggle('overflow-hidden', !!selectedPaper);
    }, [selectedPaper]);

    const renderPaperCard = (paper: PaperData, index: number) => (
        <div
            key={index}
            className="cursor-pointer !h-full block [&>div]:h-full select-none"
            onClick={() => handleOpen(paper)}
        >
            <ImageCard title={paper.title} overline={paper.publicationInfo} body={paper.authors}>
                {paper.award?.trim().toLowerCase() === 'nomination' && <Badge label="Nominated" />}
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
                        1 – {visibleCount}
                    </span>{' '}
                    of{' '}
                    <span className="underline underline-offset-4 decoration-transparency-black-16">
                        {otherPapers.length}
                    </span>
                </p>

                {visibleCount < otherPapers.length && (
                    <Button
                        text="Load more"
                        onClick={handleLoadMore}
                        variant={ButtonVariant.Secondary}
                    />
                )}
            </div>

            {bestPapers.length > 0 && (
                <div className="flex flex-col gap-12">
                    <VerticalTitle
                        title="Best Paper Awards"
                        isCentered
                        size={TitleTextSize.Small}
                    />
                    <div className="grid grid-cols-1 xs:grid-cols-3 gap-6">
                        {bestPapers.map(renderPaperCard)}
                    </div>
                </div>
            )}

            {selectedPaper && <PaperModal paper={selectedPaper} onClose={handleClose} />}
        </div>
    );
}
