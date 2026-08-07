import { LANGUAGES } from '../../i18n/config.i18n';


const BASE_URL = 'https://autroui.com';
const langs = Object.keys(LANGUAGES);

/**
 * Generate Example URLs for all languages
 */
const getExcampleUrls = (): string[] => {
    return []
};


/**
 * Combine all URLs for the Astro sitemap configuration.
 */
export const getAllSitemapUrls = (): string[] => {
    return [
        ...getExcampleUrls()
    ];
};
