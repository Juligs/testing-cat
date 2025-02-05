import {
    COLOR_DESCRIPTION,
    COLOR_DESCRIPTION_INVERTED,
    COLOR_TITLE,
    COLOR_TITLE_INVERTED,
} from './BlogPostCard.constants';
import clsx from 'clsx';
interface BlogPostCardProps {
    /**
     * post title
     */
    title: string;
    /**
     * post text
     */
    description: string;
    /**
     * image url
     */
    image: string;
    /**
     * inverted
     */
    inverted?: boolean;
}

export function BlogPostCard({
    title = 'Title',
    description,
    image,
    inverted,
    children,
}: React.PropsWithChildren<BlogPostCardProps>): JSX.Element {
    const descriptionColor = inverted ? COLOR_DESCRIPTION_INVERTED : COLOR_DESCRIPTION;
    const titleColor = inverted ? COLOR_TITLE_INVERTED : COLOR_TITLE;
    return (
        <div
            className={clsx(
                'blogpost-card w-full flex flex-col items-center card-border-radius cursor-pointer group',
            )}
        >
            <div className="w-full overflow-hidden rounded-2xl">
                <img
                    src={image}
                    alt={image}
                    className={clsx(
                        'w-full h-auto object-cover aspect-video transform transition-transform ease-out duration-500 group-hover:scale-110',
                    )}
                />
            </div>
            <div className="flex flex-col items-start pt-6 pb-4 gap-3 w-full">
                {children}
                <p className={clsx('text-title-md', titleColor)}>{title}</p>
                <p className={clsx('text-label-sm', descriptionColor)}>{description}</p>
            </div>
        </div>
    );
}
