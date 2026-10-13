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
      description: $localize`:@@howIWork.whiteLabel.description:Your client sees your agency. I don't approach your clients. I build it as a separate project and deliver it under your name.`,
    },
    {
      title: $localize`:@@howIWork.fixedScope.title:Fixed scope, fixed delivery date`,
      description: $localize`:@@howIWork.fixedScope.description:I work in defined deliverables with a fixed date, not hours billed after the fact. You know what you're getting and when you can plan the demo.`,
    },
    {
      title: $localize`:@@howIWork.oneProject.title:One project at a time`,
      description: $localize`:@@howIWork.oneProject.description:Around 16 hours a week, with Friday as my project day: calls, reviews, releases. I run this alongside a permanent role, so I take on one project at a time, and what I commit to gets finished. That works well for projects with a clear scope. It doesn't work if you expect daily standups, and I'd rather say so up front than have you find out later.`,
    },
    {
      title: $localize`:@@howIWork.relationship.title:You keep the client relationship`,
      description: $localize`:@@howIWork.relationship.description:Scoping, invoicing and account management stay with you. I build.`,
    },
  ];
}
