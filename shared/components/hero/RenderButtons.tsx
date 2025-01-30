import type { LinkProps as NextLinkProps } from 'next/link';
import { Actions, Button } from 'react-ui-kit';

export interface LinkProps extends NextLinkProps {
    target?: string;
    rel?: string;
    className?: string;
    isExternal?: boolean;
}

interface RenderButtonsProps {
    buttons: (React.ComponentProps<typeof Button> & { link: string; isExternal?: boolean })[];
    Link: (props: React.PropsWithChildren<LinkProps>) => React.ReactNode;
}

export const RenderButtons: React.FC<RenderButtonsProps> = ({ buttons, Link }) => (
    <Actions>
        {buttons.map(({ link, isExternal, ...button }, index) => (
            <Link
                key={index}
                href={link}
                target={isExternal ? '_blank' : undefined}
                rel={isExternal ? 'noopener noreferrer' : undefined}
                isExternal={isExternal}
            >
                <Button {...button} />
            </Link>
        ))}
    </Actions>
);
