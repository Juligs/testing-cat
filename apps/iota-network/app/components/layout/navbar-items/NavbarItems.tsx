'use client';

import clsx from 'clsx';
import Link from 'next/link';
import React from 'react';

import { CTASection, MenuRow, NavbarGroupItem, type VerticalSection } from '../layout.interfaces';
import { TextLink } from 'react-ui-kit';
import { isChildrenSection, isCTASection } from './MobileNavbarItems';
import { NavItem } from './NavItem';

interface DropdownMenuProps {
    item: NavbarGroupItem;
    isMobileNavOpen: boolean;
    onClose: () => void;
}

const MIN_COLS = 4;
const DEFAULT_COLS = 'grid-cols-4';
const LARGE_COLS = 'grid-cols-4 lg:grid-cols-5';

function getItemGridCols(item: NavbarGroupItem, row: MenuRow) {
    let gridCols = DEFAULT_COLS;

    if (row.isFooter) return gridCols;

    for (const row of item.menuRows) {
        if (row.isFooter) continue;
        if (row.sections.length > MIN_COLS) {
            gridCols = LARGE_COLS;
            break;
        }
    }

    return gridCols;
}

export function DropdownMenu({ item, onClose }: DropdownMenuProps) {
    const rows = item.menuRows ?? [];

    return (
        <div className={clsx('cursor-default divide-y divide-transparency-black-8 flex flex-col')}>
            {rows.map((row, rowIdx) => {
                const sections =
                    'isFooter' in row && row.isFooter ? row.desktopSections : row.sections;

                return (
                    <div
                        key={rowIdx}
                        className={clsx(
                            'grid items-start',
                            getItemGridCols(item, row),
                            row.isFooter && 'items-center',
                            'first:bg-white/30 first:bg-opacity-30 only:bg-transparency-white-8',
                        )}
                    >
                        {sections.map((section, sIdx) => {
                            const isLast = sIdx === sections.length - 1;
                            const notEnoughSections = sections.length < MIN_COLS;
                            return (
                                <div
                                    key={`${rowIdx}-${sIdx}`}
                                    className={clsx(
                                        'flex flex-col items-start pr-6 pl-12 gap-y-4',
                                        row.isFooter ? 'pt-4 pb-6' : 'pt-8 pb-12',
                                        'highlighted' in section &&
                                            section.highlighted &&
                                            'bg-white/30 rounded-xl gap-y-6',
                                        isLast && notEnoughSections && 'col-start-4',
                                    )}
                                >
                                    {!isCTASection(section) && (section.icon || section.title) && (
                                        <VerticalSectionHeader section={section} />
                                    )}

                                    {isCTASection(section) ? (
                                        <CTASectionView section={section} onClose={onClose} />
                                    ) : isChildrenSection(section) ? (
                                        <>
                                            <div
                                                className={clsx(
                                                    'flex flex-col gap-2 has-[img]:gap-y-6',
                                                )}
                                            >
                                                {section.children?.map((route, idx) => (
                                                    <NavItem
                                                        key={idx}
                                                        item={route}
                                                        onClose={onClose}
                                                    />
                                                ))}
                                            </div>
                                        </>
                                    ) : null}
                                </div>
                            );
                        })}
                    </div>
                );
            })}
        </div>
    );
}

interface VerticalSectionHeaderProps {
    section: VerticalSection;
}

function VerticalSectionHeader({ section }: VerticalSectionHeaderProps) {
    return (
        <div className={clsx('hidden sm:flex items-center gap-3 text-medium')}>
            {section.icon && <div className="[&_svg]:h-6 [&_svg]:w-6">{section.icon}</div>}
            {section.title && <p className="flex-1 text-label-sm uppercase">{section.title}</p>}
        </div>
    );
}

interface CTASectionViewProps {
    section: CTASection;
    onClose?: () => void;
}
function CTASectionView({ section, onClose }: CTASectionViewProps) {
    return (
        <div className="flex flex-col gap-2 py-2">
            <p className="text-label-md text-darkest">{section.overline}</p>
            <p className="text-title-md text-darkest">{section.title}</p>
            <Link href={section.cta.href} className="text-body-sm" onClick={onClose}>
                <TextLink text="Explore" showIcon />
            </Link>
        </div>
    );
}
