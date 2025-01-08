import Link from 'next/link';
import { CtaCard, TextLink } from 'react-ui-kit';

export function BuildingCTA() {
    return (
        <CtaCard
            image="/shared/building-iota.svg"
            title="Are you building on IOTA?"
            subtitle="Register your application and get featured on the on iotalabs and the official website"
            inverted
        >
            <Link
                href="https://airtable.com/appQqzg74YoTqK3Ht/pagAntotjuYq5XNlT/form"
                target="_blank"
                rel="noopener noreferrer"
            >
                <TextLink text="Register now" showIcon inverted />
            </Link>
        </CtaCard>
    );
}
