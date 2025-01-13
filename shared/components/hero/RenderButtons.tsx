import type { LinkProps as NextLinkProps } from 'next/link';
import { Actions, Button } from 'react-ui-kit';

export interface LinkProps extends NextLinkProps {
    target?: string;
    rel?: string;
    className?: string;
}

interface RenderButtonsProps {
    buttons: (React.ComponentProps<typeof Button> & { link: string })[];
    Link: (props: React.PropsWithChildren<LinkProps>) => React.ReactNode;
}

export const RenderButtons: React.FC<RenderButtonsProps> = ({ buttons, Link }) => (
    <Actions>
        {buttons.map(({ link, ...button }, index) => (
            <Link key={index} href={link} target="_blank" rel="noopener noreferrer">
                <Button {...button} />
            </Link>
        ))}
    </Actions>
);
