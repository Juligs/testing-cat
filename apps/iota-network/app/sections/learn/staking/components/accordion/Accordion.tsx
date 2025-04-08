'use client';
import { useState } from 'react';
import clsx from 'clsx';
import { Dash, Add } from '@repo/icons';

interface AccordionItemProps extends React.PropsWithChildren {
    title: string;
}

export function Accordion({ title, children }: AccordionItemProps) {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };
    return (
        <button className="mb-3 w-full" onClick={toggleAccordion} aria-expanded={isOpen}>
            <div className="flex flex-col bg-iota-neutral-96 rounded-xl cursor-pointer">
                <div className="flex items-center py-4 cursor-pointer p-3">
                    <div className="mr-2 text-network-primary-30 shrink-0 [&_svg]:w-6 [&_svg]:h-6">
                        {isOpen ? <Dash /> : <Add />}
                    </div>

                    <p className="text-darkest text-title-sm !font-bold text-start">{title}</p>
                </div>

                <div
                    className={clsx(
                        'px-12 text-medium text-body-lg overflow-hidden text-start transition-all duration-100 ease-in-out transform origin-top',
                        isOpen
                            ? 'pb-[30px] scale-y-100 max-h-ful opacity-100'
                            : 'scale-y-0 max-h-0 opacity-0',
                    )}
                >
                    {children}
                </div>
            </div>
        </button>
    );
}
