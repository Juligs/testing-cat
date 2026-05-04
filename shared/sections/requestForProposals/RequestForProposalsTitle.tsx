import { VerticalTitle, TitleTextSize, Actions, Button } from 'react-ui-kit';
import { BaseSectionProps } from '../../interfaces';
import Link from 'next/link';
import Image from 'next/image';
import { ComponentProps } from 'react';
import { PROPOSAL_FORM_URL } from './constants';

type RequestForProposalsTitleProps = BaseSectionProps & {
    image: string;
    content: ComponentProps<typeof VerticalTitle>;
    isOpen?: boolean;
};

export function RequestForProposalsTitle({
    id,
    navbarColorScheme,
    image,
    content,
    isOpen,
}: RequestForProposalsTitleProps) {
    return (
        <section className="w-full" id={id} data-navbar-color-scheme={navbarColorScheme}>
            <div className="pb-12 flex justify-center text-center">
                <div className="flex flex-col gap-12 w-full items-center">
                    <Image
                        src={image}
                        alt="Engine Behind"
                        width={708}
                        height={0}
                        className="h-auto w-full rounded-4xl"
                    />
                    <VerticalTitle
                        overline="Request for Proposal"
                        {...content}
                        size={TitleTextSize.ExtraSmall}
                    >
                        {isOpen && (
                            <Actions>
                                <Link
                                    href={PROPOSAL_FORM_URL}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Button text="Apply now" icon />
                                </Link>
                            </Actions>
                        )}
                    </VerticalTitle>
                </div>
            </div>
        </section>
    );
}
