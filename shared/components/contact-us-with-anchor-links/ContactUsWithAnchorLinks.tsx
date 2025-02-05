import { Actions, AnchorLink, Button, CtaCard, TitleTextSize, VerticalTitle } from 'react-ui-kit';
import {
    CONTACT_US_BUTTON,
    CONTACT_US_TITLE_CONTENT,
} from './contactUsWithAnchorLinksContent.constants';
import Link from 'next/link';

interface ContactUsProps {
    anchorLinks?: {
        text: string;
        url: string;
        isExternal?: boolean;
        leadingIcon?: React.ReactNode;
    }[];
}

export function ContactUsWithAnchorLinks({ anchorLinks }: ContactUsProps) {
    return (
        <div className="flex flex-col sm:flex-row w-full overflow-hidden rounded-4xl items-center text-center bg-color-gradient p-10 sm:p-14 lg:p-20 gap-10 sm:gap-20">
            <div className="sm:w-1/2">
                <VerticalTitle
                    title={CONTACT_US_TITLE_CONTENT.title}
                    size={TitleTextSize.Small}
                    body={CONTACT_US_TITLE_CONTENT.body}
                >
                    <Actions>
                        <Link href={CONTACT_US_BUTTON.link} aria-label="Link to Contact Us">
                            <Button
                                text={CONTACT_US_BUTTON.text}
                                variant={CONTACT_US_BUTTON.variant}
                                icon={CONTACT_US_BUTTON.icon}
                            />
                        </Link>
                    </Actions>
                </VerticalTitle>
            </div>
            <div className="w-full sm:w-1/2 flex flex-col gap-6">
                {anchorLinks?.map((link, index) => (
                    <Link
                        key={index}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full bg-white rounded-2xl"
                        aria-label={`Link to ${link.text}`}
                    >
                        <AnchorLink
                            text={link.text}
                            leadingIcon={link.leadingIcon}
                            isExternal={link.isExternal}
                        />
                    </Link>
                ))}
            </div>
        </div>
    );
}
