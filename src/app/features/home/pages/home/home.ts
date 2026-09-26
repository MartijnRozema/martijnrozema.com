import { Component } from '@angular/core';
import { CaseStudy } from '../../components/case-study/case-study';
import { Hero } from '../../components/hero/hero';
import { HowIWork } from '../../components/how-i-work/how-i-work';
import { Services } from '../../components/services/services';
import { SiteHeader } from '../../components/site-header/site-header';

@Component({
  selector: 'app-home',
  imports: [SiteHeader, Hero, Services, HowIWork, CaseStudy],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
