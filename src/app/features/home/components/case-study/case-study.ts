import { Component } from '@angular/core';

interface CaseStudySection {
  label: string;
  paragraphs: string[];
}

@Component({
  selector: 'app-case-study',
  templateUrl: './case-study.html',
  styleUrl: './case-study.css',
})
export class CaseStudy {
  protected readonly sections: CaseStudySection[] = [
    {
      label: $localize`:@@caseStudy.problem.label:The problem`,
      paragraphs: [
        $localize`:@@caseStudy.problem.text:Teams on monday.com that wanted a form in several languages had to build a copy of the form for each language and keep every copy in sync by hand. monday's own form builder only offers AI translation with no manual control, and it doesn't translate dropdown or status options at all.`,
      ],
    },
    {
      label: $localize`:@@caseStudy.built.label:What I built`,
      paragraphs: [
        $localize`:@@caseStudy.built.text:An app that turns one monday board into a form available in as many languages as the team needs. An admin connects a board, and the app generates a draft form matching its columns; from there they translate labels, help text and the dropdown and status options per language, by hand or with AI assistance, while the original language stays visible as a reference. Respondents fill in the form in their own language; every submission lands as a single item on the same board, with a column recording which language was used.`,
      ],
    },
    {
      label: $localize`:@@caseStudy.notes.label:Technical notes`,
      paragraphs: [
        $localize`:@@caseStudy.notes.optionIds:In monday, every dropdown and status option has a fixed ID that never changes, even when someone edits the label. I tested that myself on a live board instead of blindly trusting the docs. Linking options by name or position quietly breaks as soon as an admin renames or moves one. The app therefore always links options by that fixed ID.`,
        $localize`:@@caseStudy.notes.reconciliation:monday notifies apps when a column is added, but not when one is renamed, changes type or is deleted. So the app regularly checks whether the form still matches the board. If something no longer lines up, the admin sees it, instead of answers quietly ending up in the wrong column.`,
        $localize`:@@caseStudy.notes.failedSubmissions:Sometimes a submission can't reach the board, for example when monday is briefly unavailable. The app retries a few times. If it still fails, the submission is kept with the error message, and the admin can resend it. Nothing gets lost silently.`,
      ],
    },
  ];
}
