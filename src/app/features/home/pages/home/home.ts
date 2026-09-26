import { Component } from '@angular/core';
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
export class Home {}
