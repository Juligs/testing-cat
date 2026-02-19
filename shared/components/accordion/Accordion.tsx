'use client';
import { useState } from 'react';
import clsx from 'clsx';
import { Dash, Add } from '@repo/icons';

interface AccordionItemProps extends React.PropsWithChildren {
    title: string;
    defaultOpen?: boolean;
}
const TEXT_COLOR_ICON = 'color-button-accordion';

export function Accordion({ title, children, defaultOpen = false }: AccordionItemProps) {
    const [isOpen, setIsOpen] = useState<boolean>(defaultOpen);
    const toggleAccordion = () => {
        setIsOpen((prev) => !prev);
    };
    const iconColor = TEXT_COLOR_ICON;

    return (
        <button
            type="button"
            className="mb-3 w-full"
            onClick={toggleAccordion}
            aria-expanded={isOpen}
        >
            <div className="flex flex-col bg-iota-neutral-96 rounded-xl">
                <div className="flex items-center py-4 p-3">
                    <div
                        className={clsx(
                            'mr-2  shrink-0 [&_svg]:w-6 [&_svg]:h-6 foundation:text-foundation-primary-30 network:text-network-primary-30 labs:text-labs-primary-30',
                        )}
                    >
                        {isOpen ? <Dash className={clsx(iconColor)} /> : <Add />}
                    </div>

                    <p className="text-darkest text-title-sm !font-bold text-start">{title}</p>
                </div>

                <div
                    className={clsx(
                        'px-12 text-medium text-body-lg overflow-hidden text-start transition-all duration-150 ease-in-out origin-top',
                        isOpen
                            ? 'pb-[30px] scale-y-100 max-h-full opacity-100'
                            : 'scale-y-0 max-h-0 opacity-0',
                    )}
                >
                    {children}
                </div>
            </div>
        </button>
    );
}
