import { getRequestConfig } from 'next-intl/server';
import { defaultLocale, isValidLocale } from './config';

export default getRequestConfig(async ({ requestLocale }) => {
    const requestedLocale = await requestLocale;
    const locale = requestedLocale && isValidLocale(requestedLocale) ? requestedLocale : defaultLocale;

    return {
        locale,
        messages: (await import(`../messages/${locale}.json`)).default,
    };
});
