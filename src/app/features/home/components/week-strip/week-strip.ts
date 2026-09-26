import { Component } from '@angular/core';

interface WeekDay {
  label: string;
  name: string;
  isProjectDay: boolean;
}

@Component({
  selector: 'app-week-strip',
  templateUrl: './week-strip.html',
  styleUrl: './week-strip.css',
})
export class WeekStrip {
  protected readonly days: WeekDay[] = [
    { label: 'Mon', name: 'Monday', isProjectDay: false },
    { label: 'Tue', name: 'Tuesday', isProjectDay: false },
    { label: 'Wed', name: 'Wednesday', isProjectDay: false },
    { label: 'Thu', name: 'Thursday', isProjectDay: false },
    { label: 'Fri', name: 'Friday', isProjectDay: true },
  ];

  protected readonly buildTimeLabel = 'Async build time';
  protected readonly projectDayLabel = 'Project day: calls, reviews, releases';
}
