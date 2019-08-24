import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
  <footer class="footer">
    <div class="container">
      <div class="rect"></div>
    </div>
  </footer>`,
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  constructor() { }
}
