import { PastEventsData, useModal } from '@lib/utils';
import { ImageCard } from 'react-ui-kit';
import { PaperModalBeyon } from './PaperModalBeyond';

interface PapersLayoutProps {
    data: PastEventsData[];
}

export function BeyondTheChainPapers({ data }: PapersLayoutProps) {
    const { item: selectedPaper, open, close } = useModal<PastEventsData>();

    const renderPaperCard = (paper: PastEventsData, index: number) => (
        <button
            key={index}
            type="button"
            className="block w-full text-left cursor-pointer !h-full [&>div]:h-full select-none bg-transparent border-none p-0"
            onClick={() => open(paper)}
        >
            <ImageCard title={paper.title} body={paper.names} />
        </button>
    );

    if (!data?.length) return null;

    return (
        <div className="relative flex flex-col gap-30">
            <div className="grid grid-cols-1 xs:grid-cols-3 gap-6">{data.map(renderPaperCard)}</div>
            {selectedPaper && <PaperModalBeyon paper={selectedPaper} onClose={close} />}
        </div>
    );
}
