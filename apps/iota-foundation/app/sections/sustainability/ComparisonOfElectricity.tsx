import { BaseSectionProps } from '@repo/shared/interfaces';
import { TitleTextSize, VerticalTitle } from 'react-ui-kit';
import { EnergyComparisonChart } from './subsections/ComparisonOfElectricityChart';

export async function ComparisonOfElectricity({ id, navbarColorScheme }: BaseSectionProps) {
    return (
        <section className="w-full" id={id} data-navbar-color-scheme={navbarColorScheme}>
            <div className="container justify-center items-center py-14 xs:py-20 lg:py-30">
                <div className="flex flex-col gap-12 w-full justify-center items-center">
                    <div className="flex  max-w-[708px] text-center">
                        <VerticalTitle
                            title="Comparison of Electricity Consumption"
                            size={TitleTextSize.Small}
                            isCentered
                        />
                    </div>
                    <EnergyComparisonChart />
                </div>
            </div>
        </section>
    );
}
