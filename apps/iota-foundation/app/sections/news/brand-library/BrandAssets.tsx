import { TwoColumnsImageTemplate } from '@repo/shared/components';
import { BaseSectionProps } from '@repo/shared/interfaces';
import { Actions, Button, VerticalTitle } from 'react-ui-kit';
import { BRAND_ASSETS_TITLE_CONTENT, BRAND_ASSETS_BUTTONS } from './constants';
import Link from 'next/link';

export function BrandAssets({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section id={id} data-navbar-color-scheme={navbarColorScheme}>
            <div className="container py-14 xs:py-20 lg:py-30">
                <TwoColumnsImageTemplate image="/news/brand-library/brand_assets.png">
                    <div className="sm:pr-[92px] lg:pr-[102px] text-center">
                        <VerticalTitle {...BRAND_ASSETS_TITLE_CONTENT}>
                            <div className="flex gap-4">
                                {BRAND_ASSETS_BUTTONS.map((button, index) => (
                                    <Actions key={index}>
                                        <Link
                                            href={button.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <Button {...button} />
                                        </Link>
                                    </Actions>
                                ))}
                            </div>
                        </VerticalTitle>
                    </div>
                </TwoColumnsImageTemplate>
            </div>
        </section>
    );
}
