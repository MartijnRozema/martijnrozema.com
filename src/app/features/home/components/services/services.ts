import { Component } from '@angular/core';

interface Service {
  title: string;
  description: string;
}

@Component({
  selector: 'app-services',
  templateUrl: './services.html',
  styleUrl: './services.css',
})
export class Services {
  protected readonly services: Service[] = [
    {
      title: 'Custom monday apps',
      description:
        'Board and item views, widgets, integration recipes and automations built on the monday apps framework. OAuth, the GraphQL API, webhooks, and the rate limits that come with them.',
    },
    {
      title: 'Integrations and data work',
      description:
        'Connecting monday to the systems your client already runs: CRMs, internal APIs, file stores. Two-way sync, migrations, and the error handling that keeps it running after go-live.',
    },
    {
      title: 'Marketplace-ready delivery',
      description:
        "I've been through the submission requirements once, so I know what review asks for before you start building: scoped OAuth permissions, the security questionnaire, versioning, monitoring.",
    },
  ];
}
