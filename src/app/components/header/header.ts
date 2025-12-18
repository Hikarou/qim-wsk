import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  protected readonly title = signal('Welcome to QIM WSK Workshop!');

  constructor() {
    console.log('App component instantiated.');

    setTimeout(() => {
      this.title.set('QIM WSK Workshop - Let\'s get started!');
    }, 3000);
  }
}
