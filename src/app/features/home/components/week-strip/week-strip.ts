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
    {
      label: $localize`:@@week.mon.label:Mon`,
      name: $localize`:@@week.mon.name:Monday`,
      isProjectDay: false,
    },
    {
      label: $localize`:@@week.tue.label:Tue`,
      name: $localize`:@@week.tue.name:Tuesday`,
      isProjectDay: false,
    },
    {
      label: $localize`:@@week.wed.label:Wed`,
      name: $localize`:@@week.wed.name:Wednesday`,
      isProjectDay: false,
    },
    {
      label: $localize`:@@week.thu.label:Thu`,
      name: $localize`:@@week.thu.name:Thursday`,
      isProjectDay: false,
    },
    {
      label: $localize`:@@week.fri.label:Fri`,
      name: $localize`:@@week.fri.name:Friday`,
      isProjectDay: true,
    },
  ];

  protected readonly buildTimeLabel = $localize`:@@week.buildTime:Async build time`;
  protected readonly projectDayLabel = $localize`:@@week.projectDay:Project day: calls, reviews, releases`;
}
