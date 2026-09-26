import { LOCALE_ID } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { LanguageSwitch } from './language-switch';

describe('LanguageSwitch', () => {
  async function render(locale: string) {
    TestBed.configureTestingModule({ providers: [{ provide: LOCALE_ID, useValue: locale }] });
    const fixture = TestBed.createComponent(LanguageSwitch);
    await fixture.whenStable();
    return fixture.nativeElement as HTMLElement;
  }

  it('links to the root of each locale build', async () => {
    const element = await render('en');

    const hrefs = [...element.querySelectorAll('a')].map((link) => link.getAttribute('href'));
    expect(hrefs).toEqual(['/', '/nl/']);
  });

  it('marks the language of the current build', async () => {
    const element = await render('nl');

    const current = element.querySelectorAll('[aria-current="page"]');
    expect(current.length).toBe(1);
    expect(current[0].textContent?.trim()).toBe('NL');
  });
});
