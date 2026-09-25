import { TestBed } from '@angular/core/testing';
import { Home } from './home';

describe('Home', () => {
  it('renders the hero heading', async () => {
    const fixture = TestBed.createComponent(Home);
    await fixture.whenStable();

    const heading = (fixture.nativeElement as HTMLElement).querySelector('h1');
    expect(heading?.textContent).toContain('Custom monday.com apps, built for partner agencies.');
  });
});
