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
      title: $localize`:@@services.apps.title:Custom monday apps`,
      description: $localize`:@@services.apps.description:Board and item views, widgets, integration recipes and automations built on the monday apps framework. OAuth, the GraphQL API, webhooks, and the rate limits that come with them.`,
    },
    {
      title: $localize`:@@services.integrations.title:Integrations and data work`,
      description: $localize`:@@services.integrations.description:Connecting monday to the systems your client already runs: CRMs, internal APIs, file stores. Two-way sync, migrations, and the error handling that keeps it running after go-live.`,
    },
    {
      title: $localize`:@@services.marketplace.title:Marketplace-ready delivery`,
      description: $localize`:@@services.marketplace.description:I've been through the submission requirements once, so I know what review asks for before you start building: scoped OAuth permissions, the security questionnaire, versioning, monitoring.`,
    },
  ];
}
