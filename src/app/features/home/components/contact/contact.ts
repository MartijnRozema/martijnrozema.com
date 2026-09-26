import { Component } from '@angular/core';
import { CONTACT } from '../../content/contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  protected readonly contact = CONTACT;
}
