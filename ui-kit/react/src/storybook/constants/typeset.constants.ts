import { SANITIZED_CUSTOM_TEXT_CLASSES } from '@lib/tailwind/constants';
import { TypeSetProps } from '../blocks/TypeSet';
import { ThemeConfig } from 'tailwindcss/types/config';

export type TailwindCustomFonts = ThemeConfig['fontSize'];

export const TYPESETS: TypeSetProps[] = [
    {
        label: 'Label',
        fontFamily: 'Inter',
        typeset: SANITIZED_CUSTOM_TEXT_CLASSES.label,
        fontWeight: 500,
    },
    {
        label: 'Body',
        fontFamily: 'Inter',
        typeset: SANITIZED_CUSTOM_TEXT_CLASSES.body,
        fontWeight: 400,
    },
    {
        label: 'Title',
        fontFamily: 'AllianceNo2',
        typeset: SANITIZED_CUSTOM_TEXT_CLASSES.title,
        fontWeight: 500,
    },
    {
        label: 'Headline',
        fontFamily: 'AllianceNo2',
        typeset: SANITIZED_CUSTOM_TEXT_CLASSES.headline,
        fontWeight: 400,
    },
    {
        label: 'Display',
        fontFamily: 'AllianceNo2',
        typeset: SANITIZED_CUSTOM_TEXT_CLASSES.display,
        fontWeight: 400,
    },
];
