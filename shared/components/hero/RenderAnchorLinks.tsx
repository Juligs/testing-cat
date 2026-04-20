import { AnchorLink } from 'react-ui-kit';
import { LinkProps } from './RenderButtons';

interface AnchorLinks {
    text: string;
    link?: string;
    onClick?: () => void;
}

interface RenderAnchorLinksProps {
    anchorLinks: AnchorLinks[];
    Link: (props: React.PropsWithChildren<LinkProps>) => React.ReactNode;
    inverted?: boolean;
    className?: string;
}

export const RenderAnchorLinks: React.FC<RenderAnchorLinksProps> = ({
    anchorLinks,
    Link,
    inverted = false,
    className = '',
}) => (
    <div className={`flex gap-6 justify-center ${className}`}>
        {anchorLinks.map((link, index) => (
            <div key={index} className="w-full md:w-[464px]">
                {link.link ? (
                    <Link
                        href={link.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full"
                        aria-label={`Link to ${link.text}`}
                    >
                        <AnchorLink text={link.text} inverted={inverted} />
                    </Link>
                ) : (
                    <AnchorLink text={link.text} onClick={link.onClick} inverted={inverted} />
                )}
            </div>
        ))}
    </div>
);
