import { Component } from '@angular/core';
import { WeekStrip } from '../week-strip/week-strip';

interface Principle {
  title: string;
  description: string;
}

@Component({
  selector: 'app-how-i-work',
  imports: [WeekStrip],
  templateUrl: './how-i-work.html',
  styleUrl: './how-i-work.css',
})
export class HowIWork {
  protected readonly principles: Principle[] = [
    {
      title: $localize`:@@howIWork.whiteLabel.title:White-label by default`,
      description: $localize`:@@howIWork.whiteLabel.description:Your client sees your agency. I don't approach your clients, and I'm happy to work inside your repos, your tooling and your process.`,
    },
    {
      title: $localize`:@@howIWork.fixedScope.title:Fixed scope, fixed dates`,
      description: $localize`:@@howIWork.fixedScope.description:I work in defined deliverables with a date attached, not open-ended hours. You know what you're getting and when you can plan the demo.`,
    },
    {
      title: $localize`:@@howIWork.oneProject.title:One project at a time`,
      description: $localize`:@@howIWork.oneProject.description:Around 16 hours a week, with Friday as my project day: calls, reviews, releases. I run this alongside a permanent role, so I take on one project at a time, and what I commit to gets finished. That suits build work with clear boundaries; it does not suit daily standups, and I'll say so up front rather than let you find out.`,
    },
    {
      title: $localize`:@@howIWork.relationship.title:You keep the relationship`,
      description: $localize`:@@howIWork.relationship.description:Scoping, invoicing and account management stay with you. I build.`,
    },
  ];
}
