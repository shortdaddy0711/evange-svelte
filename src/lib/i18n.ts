/**
 * Lightweight i18n helper.
 *
 * Usage:
 *   import { t, setLocale, locale } from '$lib/i18n'
 *   $t('slide3_title')  // reactive translation
 *
 * To add a new language:
 *   1. Add src/messages/<lang>.json
 *   2. Add to LOCALES and messages map below
 *
 * When ready to migrate to Paraglide:
 *   - Replace this file with @inlang/paraglide-sveltekit
 *   - Message key naming is already compatible
 */

import { writable, derived } from 'svelte/store';
import en from '../messages/en.json';
import ko from '../messages/ko.json';

export const LOCALES = ['en', 'ko'] as const;
export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = 'en';

const messages: Record<Locale, Record<string, string>> = {
  en,
  ko: ko as Record<string, string>,
};

/** Current active locale */
export const locale = writable<Locale>(DEFAULT_LOCALE);

/** Reactive translation function */
export const t = derived(locale, ($locale) => {
  const dict = messages[$locale] ?? messages[DEFAULT_LOCALE];
  return (key: string, fallback?: string): string =>
    dict[key] ?? fallback ?? `[${key}]`;
});

/** Change locale */
export function setLocale(lang: Locale) {
  locale.set(lang);
}

/** Get locale from URL path segment e.g. '/ko/slide/3' → 'ko' */
export function localeFromPath(pathname: string): Locale {
  const segment = pathname.split('/')[1] as Locale;
  return LOCALES.includes(segment) ? segment : DEFAULT_LOCALE;
}
