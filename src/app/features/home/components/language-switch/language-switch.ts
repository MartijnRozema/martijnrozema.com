import { Component, inject, LOCALE_ID } from '@angular/core';

interface LanguageOption {
  locale: string;
  label: string;
  href: string;
  current: boolean;
}

// Each locale is a separate build (see i18n in angular.json), so switching is a full page load.
const LANGUAGES = [
  { locale: 'en', label: 'EN', href: '/' },
  { locale: 'nl', label: 'NL', href: '/nl/' },
];

@Component({
  selector: 'app-language-switch',
  templateUrl: './language-switch.html',
  styleUrl: './language-switch.css',
})
export class LanguageSwitch {
  private readonly locale = inject(LOCALE_ID);

  protected readonly options: LanguageOption[] = LANGUAGES.map((language) => ({
    ...language,
    current: language.locale === this.locale,
  }));
}
