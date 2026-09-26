import { Component } from '@angular/core';
import { CONTACT } from '../../content/contact';
import { LanguageSwitch } from '../language-switch/language-switch';

@Component({
  selector: 'app-site-header',
  imports: [LanguageSwitch],
  templateUrl: './site-header.html',
  styleUrl: './site-header.css',
})
export class SiteHeader {
  protected readonly contact = CONTACT;
}
