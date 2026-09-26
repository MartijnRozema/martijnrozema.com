import { Component } from '@angular/core';
import { CONTACT } from '../../content/contact';

@Component({
  selector: 'app-about',
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  protected readonly contact = CONTACT;
}
