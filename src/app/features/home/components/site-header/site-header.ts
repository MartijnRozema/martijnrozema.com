import { Component } from '@angular/core';
import { CONTACT } from '../../content/contact';

@Component({
  selector: 'app-site-header',
  templateUrl: './site-header.html',
  styleUrl: './site-header.css',
})
export class SiteHeader {
  protected readonly contact = CONTACT;
}
