import { getRequestConfig } from 'next-intl/server';
import enMessages from '../messages/en.json';
import { defaultLocale, isValidLocale } from './config';

export default getRequestConfig(async ({ requestLocale }) => {
    const requestedLocale = await requestLocale;
    const locale = requestedLocale && isValidLocale(requestedLocale) ? requestedLocale : defaultLocale;
    const localeMessages = (await import(`../messages/${locale}.json`)).default;

    return {
        locale,
        messages: {
            ...enMessages,
            ...localeMessages,
            TwinPage: {
                ...enMessages.TwinPage,
                ...localeMessages.TwinPage,
                languages: {
                    ...enMessages.TwinPage.languages,
                    ...localeMessages.TwinPage.languages,
                },
                regions: {
                    ...enMessages.TwinPage.regions,
                    ...localeMessages.TwinPage.regions,
                },
                signals: {
                    ...enMessages.TwinPage.signals,
                    ...localeMessages.TwinPage.signals,
                },
                pilots: {
                    ...enMessages.TwinPage.pilots,
                    ...localeMessages.TwinPage.pilots,
                    items: {
                        ...enMessages.TwinPage.pilots.items,
                        ...localeMessages.TwinPage.pilots.items,
                    },
                },
                adaptation: {
                    ...enMessages.TwinPage.adaptation,
                    ...localeMessages.TwinPage.adaptation,
                    points: {
                        ...enMessages.TwinPage.adaptation.points,
                        ...localeMessages.TwinPage.adaptation.points,
                    },
                },
                crowdin: {
                    ...enMessages.TwinPage.crowdin,
                    ...localeMessages.TwinPage.crowdin,
                },
            },
        },
    };
});
