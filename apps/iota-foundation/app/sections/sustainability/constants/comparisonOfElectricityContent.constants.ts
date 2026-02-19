import { EnergyItem } from '../subsections/ComparisonOfElectricityChart';

export const COMPARISON_ELECTRICITY_DATA: EnergyItem[] = [
    {
        label: '1 IOTA TX',
        value: 0.00008322,
        unit: 'kWh',
        source_name: 'CCRI',
        source_link: 'https://indices.carbon-ratings.com/',
    },
    {
        label: '1 Google search',
        value: 0.0003,
        unit: 'kWh',
        source_name: 'CHIPKIN',
        source_link:
            'https://store.chipkin.com/articles/did-you-know-it-takes-00003-kwh-per-google-search-and-more',
    },
    {
        label: '1 hour of using an LED lightbulb',
        value: 0.01,
        unit: 'kWh',
        source_name: 'CNET',
        source_link:
            'https://www.cnet.com/home/kitchen-and-household/watts-vs-lumens-how-to-choose-the-right-led-light-bulb/',
    },
    {
        label: 'Fully charging iPhone 13 battery',
        value: 0.0124,
        unit: 'kWh',
        source_name: 'BGR',
        source_link: 'http://bgr.com/tech/iphone-13-battery-size-data-revealed-for-all-four-models',
    },
    {
        label: '1 hour of working on a computer / monitor',
        value: 0.158,
        unit: 'kWh',
        source_name: 'HES documentation',
        source_link:
            'https://hes-documentation.lbl.gov/calculation-methodology/data-analysis-sources',
    },
    {
        label: 'Average US household (per hour)',
        value: 1.2232,
        unit: 'kWh',
        source_name: 'EIA',
        source_link: 'https://www.eia.gov/consumption/residential/',
    },
    {
        label: 'Central air conditioning (per hour)',
        value: 3.5,
        unit: 'kWh',
        source_name: 'Global Cool Air',
        source_link:
            'https://globalcoolair.com.au/news/how-much-electricity-does-an-air-conditioner-use/',
    },
    {
        label: 'One gallon of gasoline',
        value: 33.7,
        unit: 'kWh',
        source_name: 'JD Power',
        source_link: 'http://jdpower.com/cars/shopping-guides/what-is-kwh-per-100-miles',
    },
    {
        label: '1 Bitcoin transaction (avg of 2024)',
        value: 60.4,
        unit: 'kWh',
        source_name: 'CCRI',
        source_link: 'https://docs.api.carbon-ratings.com/v2/#/',
    },
];

export const BREAKPOINTS_CHART = {
    tablet: 712,
} as const;

export const TOOLTIP_OFFSET = 14;
export const EDGE_MARGIN = 12;
export const ICON_SIZE = 16;
export const ICON_GAP = 6;
export const RIGHT_PADDING = 64;
export const MAX_CHARS_PER_LINE_DESKTOP = 40;
export const MAX_CHARS_PER_LINE_TABLET = 19;
export const MAX_LINES = 3;
