import { Component } from '@angular/core';



@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  template: `
    <h4> Welcome to {{appName}} </h4>
  `,
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  appName = 'My Notes';
}
