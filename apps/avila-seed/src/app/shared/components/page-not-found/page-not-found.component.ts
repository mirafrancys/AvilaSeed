import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'page-404',
  imports: [RouterModule],
  template: `<div class="center-container">
  <div class='center'>
    <h1>This page does not exist!</h1>
    <a routerLink="/home" class="btn">
    Back to home
    </a>
  </div>
  </div>
  `,
  styles: `
  h1{
    margin: 2rem 0;
  }
  .center-container{
    margin-top: 5rem;
  }
  `,
  standalone: true
})
export class PageNotFoundComponent {

}
