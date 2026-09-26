import { Component } from '@angular/core';
import { CONTACT } from '../../content/contact';

@Component({
  selector: 'app-site-footer',
  templateUrl: './site-footer.html',
  styleUrl: './site-footer.css',
})
export class SiteFooter {
  protected readonly contact = CONTACT;
}
