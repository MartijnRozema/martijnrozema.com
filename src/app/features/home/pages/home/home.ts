import { Component } from '@angular/core';
import { Hero } from '../../components/hero/hero';
import { SiteHeader } from '../../components/site-header/site-header';

@Component({
  selector: 'app-home',
  imports: [SiteHeader, Hero],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
