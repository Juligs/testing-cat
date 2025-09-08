import { ExchangesCards } from '@lib/utils';
import Link from 'next/link';
import { ImageCard, ImageCardSize } from 'react-ui-kit';

interface ExchangesProps {
    data: ExchangesCards[];
}

export function ExchangesData({ data }: ExchangesProps) {
    return (
        <div className="grid grid-cols-1 xs:grid-cols-3 gap-6">
            {data.map((card) => (
                <Link
                    key={card.title}
                    className="!h-full block [&>div]:h-full"
                    href={card.link}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <ImageCard title={card.title} image={card.image} size={ImageCardSize.Small} />
                </Link>
            ))}
        </div>
    );
}
