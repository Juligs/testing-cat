import { ExchangesCards } from '@lib/utils';
import Link from 'next/link';
import { AnchorLink } from 'react-ui-kit';

interface ExchangesProps {
    data: ExchangesCards[];
}

export function ExchangesDataGetStarted({ data }: ExchangesProps) {
    return (
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-4 gap-6">
            {data.map((data) => (
                <Link
                    key={data.title}
                    className="!h-full block [&>div]:h-full"
                    href={data.link}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <AnchorLink text={data.title} leadingIcon />
                </Link>
            ))}
        </div>
    );
}
