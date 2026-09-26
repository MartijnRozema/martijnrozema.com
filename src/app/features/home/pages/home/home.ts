import { Component, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { About } from '../../components/about/about';
import { CaseStudy } from '../../components/case-study/case-study';
import { Contact } from '../../components/contact/contact';
import { Hero } from '../../components/hero/hero';
import { HowIWork } from '../../components/how-i-work/how-i-work';
import { Services } from '../../components/services/services';
import { SiteFooter } from '../../components/site-footer/site-footer';
import { SiteHeader } from '../../components/site-header/site-header';

@Component({
  selector: 'app-home',
  imports: [SiteHeader, Hero, Services, HowIWork, CaseStudy, About, Contact, SiteFooter],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);

  constructor() {
    const title = $localize`:@@meta.title:Martijn Rozema · monday.com app development`;
    const description = $localize`:@@meta.description:Custom monday.com apps and integrations, built as a white-label subcontractor for partner agencies.`;

    this.title.setTitle(title);
    this.meta.updateTag({ name: 'description', content: description });
    this.meta.updateTag({ property: 'og:title', content: title });
    this.meta.updateTag({ property: 'og:description', content: description });
  }
}
