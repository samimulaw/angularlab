import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <p>
      app Works!
    </p>
    <products-list></products-list>
  `,
  styles: []
})
export class AppComponent {
  title = 'app';
}
