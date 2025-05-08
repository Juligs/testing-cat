import Link from 'next/link';
import { AnchorLink, HorizontalTitle, StackContainer } from 'react-ui-kit';

interface StackContainerProps extends React.ComponentProps<typeof StackContainer> {
    anchorLinks: (React.ComponentProps<typeof AnchorLink> & {
        link: string;
        isExternal?: boolean;
    })[];
}

interface StackContainerWithAnchorLinksProps {
    title: React.ComponentProps<typeof HorizontalTitle>;
    stacks: StackContainerProps[];
}

export function StackContainerWithAnchorLinks({
    title,
    stacks,
}: StackContainerWithAnchorLinksProps) {
    return (
        <div className="flex flex-col gap-12">
            <HorizontalTitle {...title} />

            <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-6 w-full">
                {stacks.map(({ anchorLinks, ...stackProps }, index) => (
                    <StackContainer key={index} {...stackProps} column={true} highlighted={true}>
                        {anchorLinks.map(({ link, isExternal, ...anchorProps }, index) => (
                            <Link
                                key={index}
                                href={link}
                                target={isExternal ? '_blank' : '_self'}
                                rel={isExternal ? 'noopener noreferrer' : undefined}
                                aria-label={`Link to ${anchorProps.text}`}
                            >
                                <AnchorLink {...anchorProps} />
                            </Link>
                        ))}
                    </StackContainer>
                ))}
            </div>
        </div>
    );
}
