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
        $localize`:@@caseStudy.problem.text:Teams running international operations on monday.com had no way to collect form submissions in multiple languages without duplicating the entire form and board per language, which fragmented their data and broke every report that assumed a single dataset. monday's own native form builder only offers AI-translation with no manual control. It also doesn't handle translated dropdown or status values at all.`,
      ],
    },
    {
      label: $localize`:@@caseStudy.built.label:What I built`,
      paragraphs: [
        $localize`:@@caseStudy.built.text:An app that turns one monday board into a form available in as many languages as the team needs. An admin connects a board, and the app generates a draft form matching its columns; from there they translate labels, help text, and dropdown/status option values per language, by hand or with AI assistance, while the original language stays visible as a reference. Respondents fill in the form in their own language; every submission lands as a single item on the same board, with a column recording which language was used, so reporting never fragments across languages.`,
      ],
    },
    {
      label: $localize`:@@caseStudy.notes.label:Technical notes`,
      paragraphs: [
        $localize`:@@caseStudy.notes.optionIds:monday's dropdown and status options are keyed by a stable numeric ID, never by their label. I found that by reproducing it against a live board rather than trusting the docs. Mapping by label or position silently corrupts the moment a board admin renames or reorders an option. Every option mapping in the app is now built around the ID as the only source of truth.`,
        $localize`:@@caseStudy.notes.reconciliation:monday has no webhook for a column being renamed, retyped, or deleted, only for a column being created. The app runs a periodic reconciliation job that detects drift between what the form expects and what's actually on the board, and surfaces it to the admin instead of silently submitting against a column that no longer matches.`,
        $localize`:@@caseStudy.notes.failedSubmissions:A submission that failed to reach the board used to disappear without a trace once its retries ran out. It's now tracked with an attempt count and the actual error message, and shown to the admin with a manual retry, so a failure is something they can see and act on, not silent data loss.`,
      ],
    },
  ];
}
