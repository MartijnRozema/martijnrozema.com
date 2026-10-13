import { TestBed } from '@angular/core/testing';
import { WeekStrip } from './week-strip';

describe('WeekStrip', () => {
  async function render() {
    const fixture = TestBed.createComponent(WeekStrip);
    await fixture.whenStable();
    return fixture.nativeElement as HTMLElement;
  }

  it('highlights only Friday as the project day', async () => {
    const element = await render();

    const highlighted = element.querySelectorAll('.day--project');
    expect(highlighted.length).toBe(1);
    expect(highlighted[0].textContent).toContain('Fri');
  });

  it('describes each day in text, not only by colour', async () => {
    const element = await render();

    const descriptions = [...element.querySelectorAll('.day .visually-hidden')].map((node) =>
      node.textContent?.replace(/\s+/g, ' ').trim(),
    );
    expect(descriptions).toEqual([
      'Monday: Build time, no meetings',
      'Tuesday: Build time, no meetings',
      'Wednesday: Build time, no meetings',
      'Thursday: Build time, no meetings',
      'Friday: Project day: calls, reviews, releases',
    ]);
  });
});
