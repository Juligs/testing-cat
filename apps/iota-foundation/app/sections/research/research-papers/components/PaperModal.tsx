import { DetailsModal } from '@components/modal';
import { PaperData } from '@lib/utils';

interface PaperModalProps {
    paper: PaperData;
    onClose: () => void;
}

export function PaperModal({ paper, onClose }: PaperModalProps) {
    const paperUrl = paper.linkOpenAccess || paper.linkPeerReviewed || undefined;

    return (
        <DetailsModal
            onClose={onClose}
            title={paper.title}
            subInfo={paper.publicationInfo}
            authors={paper.authors}
            abstract={paper.abstract}
            abstractTitle={paper.abstract ? 'Abstract' : undefined}
            url={paperUrl}
        />
    );
}
