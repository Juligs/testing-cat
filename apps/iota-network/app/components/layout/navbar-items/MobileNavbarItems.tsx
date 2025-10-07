import { Down, LineArrowSmall } from '@repo/icons';
import clsx from 'clsx';
import Link from 'next/link';
import { CTASection, MenuRowSection, NavbarGroupItem, VerticalSection } from '../layout.interfaces';

import { Button, ButtonSize, ButtonVariant } from 'react-ui-kit';
import { useState } from 'react';
import { NavItem } from './NavItem';

export const isCTASection = (s: MenuRowSection): s is CTASection => 'cta' in s;
export const isChildrenSection = (s: MenuRowSection): s is Exclude<MenuRowSection, CTASection> =>
    'children' in s;

const ROW_TOGGLE_CLS =
    'group flex w-full cursor-pointer items-center justify-between py-4 text-darkest hover:text-network-primary-40';

interface MobileNavbarItemProps {
    item: NavbarGroupItem;
    isOpen?: boolean;
    onItemClick?: () => void;
    onClose?: () => void;
}

export function MobileNavbarItem({ item, isOpen, onItemClick, onClose }: MobileNavbarItemProps) {
    return (
        <div className="flex flex-col">
            {!item.link ? (
                <button
                    type="button"
                    className={ROW_TOGGLE_CLS}
                    onClick={onItemClick}
                    aria-expanded={!!isOpen}
                >
                    <span className="block text-label-lg">{item.title}</span>
                    <Down
                        className={clsx('h-6 w-6 transition-transform', isOpen && 'rotate-180')}
                    />
                </button>
            ) : (
                <Link href={item.link} className={ROW_TOGGLE_CLS}>
                    <span className="block text-label-lg">{item.title}</span>
                </Link>
            )}

            {!item.link && (
                <div
                    className={clsx(
                        'grid transition-[grid-template-rows] duration-300',
                        isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
                    )}
                >
                    <div className="overflow-hidden">
                        <div className="flex flex-col gap-4">
                            {item.menuRows?.map((row, rowIdx) => {
                                const sections =
                                    'isFooter' in row && row.isFooter
                                        ? row.mobileSections
                                        : row.sections;

                                const cta = sections.find(isCTASection);
                                return cta ? (
                                    <MobileRowWithCTA
                                        key={rowIdx}
                                        row={sections}
                                        section={cta}
                                        onClose={onClose}
                                    />
                                ) : (
                                    <div key={rowIdx} className="flex flex-col">
                                        {sections.map((section, sIdx) => (
                                            <MobileSection
                                                key={sIdx}
                                                section={section}
                                                onClose={onClose}
                                            />
                                        ))}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

interface MobileRowWithCTAProps {
    row: MenuRowSection[];
    section: CTASection;
    onClose?: () => void;
}
function MobileRowWithCTA({ row, section, onClose }: MobileRowWithCTAProps) {
    const [open, setOpen] = useState(false);
    return (
        <div className="w-full overflow-hidden rounded-2xl border border-transparency-black-16">
            <button
                type="button"
                onClick={() => setOpen((prev) => !prev)}
                aria-expanded={open}
                className="flex w-full items-center justify-between px-4 py-4"
            >
                <div className="flex flex-col text-start">
                    <p className="text-label-lg text-darkest">{section.title}</p>
                    {section.overline && (
                        <p className="text-overline text-iota-neutral-30">{section.overline}</p>
                    )}
                </div>
                <Down className={clsx('h-6 w-6 transition-transform', open && 'rotate-180')} />
            </button>

            <div
                className={clsx(
                    'grid transition-[grid-template-rows] duration-300',
                    open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
                )}
            >
                <div className="overflow-hidden">
                    <div className="px-4 pb-4">
                        <Link
                            href={section.cta.href}
                            className="inline-block"
                            onClick={() => onClose?.()}
                        >
                            <Button
                                text={section.cta.text}
                                icon={<LineArrowSmall />}
                                variant={ButtonVariant.Secondary}
                                size={ButtonSize.Small}
                            />
                        </Link>
                        <div className="mt-4 flex flex-col">
                            {row.map((section, idx) =>
                                isCTASection(section) ? null : (
                                    <MobileSection key={idx} section={section} onClose={onClose} />
                                ),
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function MobileSection({ section, onClose }: { section: VerticalSection; onClose?: () => void }) {
    const hasChildren = section.children && section.children.length > 0;
    return (
        <div
            className={clsx(
                'flex flex-col items-start gap-y-4',
                hasChildren ? (section.highlighted ? 'py-6' : 'py-4') : 'py-0',
            )}
        >
            {(section.icon || section.title) && (
                <div className="flex items-center gap-2 text-medium">
                    {section.icon && <div className="[&_svg]:h-6 [&_svg]:w-6">{section.icon}</div>}
                    {section.title && <p className="text-label-sm uppercase">{section.title}</p>}
                </div>
            )}
            {section.children?.length && (
                <div
                    className={clsx(
                        'flex flex-col',
                        section.children.some((child) => child.image) ? 'gap-4' : 'gap-2',
                    )}
                >
                    {section.children.map((route, idx) => (
                        <NavItem key={idx} item={route} onClose={onClose} />
                    ))}
                </div>
            )}
        </div>
    );
}
