import { TestBed } from '@angular/core/testing';
import { Meta, Title } from '@angular/platform-browser';
import { Home } from './home';

describe('Home', () => {
  it('renders the hero heading', async () => {
    const fixture = TestBed.createComponent(Home);
    await fixture.whenStable();

    const heading = (fixture.nativeElement as HTMLElement).querySelector('h1');
    expect(heading?.textContent).toContain('Custom monday.com apps, built for partner agencies.');
  });

  it('sets the page title and description', () => {
    TestBed.createComponent(Home);

    expect(TestBed.inject(Title).getTitle()).toBe('Martijn Rozema · monday.com app development');
    expect(TestBed.inject(Meta).getTag('name="description"')?.content).toContain(
      'Custom monday.com apps and integrations',
    );
  });
});
