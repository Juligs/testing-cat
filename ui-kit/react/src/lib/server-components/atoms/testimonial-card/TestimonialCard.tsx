import { Quotes } from '@repo/icons';
import {
    ICON_COLOR,
    ICON_COLOR_INVERTED,
    TEXT_COLOR_CONTENT,
    TEXT_COLOR_CONTENT_INVERTED,
    BG_COLOR_INVERTED,
    BG_COLOR_DEFAULT,
    TEXT_COLOR_SUPPORTING,
} from './testimonialCard.constants';
import clsx from 'clsx';

interface TestimonialCardProps {
    /**
     * The name of the person who gave the testimonial.
     */
    name: string;
    /**
     * Supporting text for the testimonial.
     */
    supportingText: string;
    /**
     * The testimonial content.
     */
    content: string;
    /**
     * The image of the person who gave the testimonial.
     */
    image?: string;
    /**
     * Are colors inverted
     */
    inverted?: boolean;
}

export function TestimonialCard({
    name,
    supportingText,
    content,
    image,
    inverted,
}: TestimonialCardProps) {
    const iconColor = inverted ? ICON_COLOR_INVERTED : ICON_COLOR;
    const textContentColor = inverted ? TEXT_COLOR_CONTENT_INVERTED : TEXT_COLOR_CONTENT;
    const bgColor = inverted ? BG_COLOR_INVERTED : BG_COLOR_DEFAULT;
    const textColorSupporting = inverted ? TEXT_COLOR_CONTENT_INVERTED : TEXT_COLOR_SUPPORTING;
    return (
        <div className={clsx('flex flex-col justify-between p-2 rounded-3xl shadow-lg', bgColor)}>
            <div className="flex flex-col items-start self-stretch pt-6 pr-6 pb-10 pl-8 gap-6">
                <Quotes className={clsx('h-12 w-12', iconColor)} />
                <p className={clsx('text-start text-title-sm', textContentColor)}>{content}</p>
                <div className="flex gap-6 items-start">
                    {image && (
                        <img
                            className="w-16 h-full aspect-square rounded-full object-cover"
                            src={image}
                            alt={name}
                        />
                    )}
                    <div
                        className={clsx(
                            'flex flex-col items-start py-2 w-full',
                            textColorSupporting,
                        )}
                    >
                        <p className="text-label-lg">{name}</p>
                        <p className="text-body-md">{supportingText}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
