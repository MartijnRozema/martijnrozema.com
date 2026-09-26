import { Component } from '@angular/core';
import { Hero } from '../../components/hero/hero';
import { HowIWork } from '../../components/how-i-work/how-i-work';
import { Services } from '../../components/services/services';
import { SiteHeader } from '../../components/site-header/site-header';

@Component({
  selector: 'app-home',
  imports: [SiteHeader, Hero, Services, HowIWork],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
