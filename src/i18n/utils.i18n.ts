import { LANGUAGES, type Lang } from "./config.i18n";
import globalContent from "../data/site-global-content.json";

const defaultLang: Lang = 'es';

export interface NavItem {
    id: string;
    label: string;
    path: string;
    href: string;
    children?: NavItem[];
}

export function getLangFromUrl(url: URL): Lang {
    const [, lang] = url.pathname.split('/');
    if (lang in LANGUAGES) return lang as Lang;
    return defaultLang;
}

const buildHref = (lang: Lang, path: string) => {
    if (path.startsWith('#')) return `/${lang}${path}`;
    if (path === "") return `/${lang}/`;
    return `/${lang}/${path}`;
};

export const useTranslations = (lang: Lang) => {
    const content = globalContent[lang] ?? globalContent[defaultLang];

    const navLinks: NavItem[] = content.nav.map((item: any) => {
        // Tolerancia a erratas comunes de tipado (children vs chilndren)
        const rawChildren = item.children || item.chilndren;

        const children = rawChildren?.map((child: any) => ({
            ...child,
            href: buildHref(lang, child.path)
        }));

        return {
            ...item,
            href: buildHref(lang, item.path),
            ...(children ? { children } : {})
        };
    });

    return {
        ...content,
        navLinks
    };
};