import { DetailsModal } from '@components/modal';
import { PastEventsData } from '@lib/utils';

interface PaperModalProps {
    paper: PastEventsData;
    onClose: () => void;
}

export function PaperModalBeyon({ paper, onClose }: PaperModalProps) {
    return (
        <DetailsModal
            onClose={onClose}
            title={paper.title}
            subInfo={paper.location}
            authors={paper.names}
            abstract={paper.abstract}
            abstractTitle={paper.abstract ? 'Abstract' : undefined}
            url={paper.linkToPaper}
        />
    );
}
