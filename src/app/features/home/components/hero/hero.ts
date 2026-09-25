import { Component } from '@angular/core';
import { CONTACT } from '../../content/contact';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {
  protected readonly contact = CONTACT;
}
