import zh from './zh.json';
import en from './en.json';
import ja from './ja.json';
import ko from './ko.json';

export const languages = {
  zh: '中文',
  en: 'English',
  ja: '日本語',
  ko: '한국어',
} as const;

export type Lang = keyof typeof languages;

const translations: Record<Lang, typeof zh> = { zh, en, ja, ko };

export function t(lang: Lang) {
  return translations[lang] || translations.zh;
}

export function getLangFromUrl(url: URL): Lang {
  const [, langSegment] = url.pathname.split('/');
  if (langSegment && langSegment in languages) {
    return langSegment as Lang;
  }
  return 'zh';
}

export function getLocalizedPath(path: string, lang: Lang): string {
  return `/${lang}${path}`;
}
