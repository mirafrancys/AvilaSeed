import { Component, OnInit } from '@angular/core';
import { ILanguages } from './core/models/iLanguages';
import { LayoutComponent } from './layout/layout.component';

@Component({
  selector: 'app-root',
  imports: [LayoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'avila-seed';

  languages: ILanguages[] = 
  [
    {"key": "en", "label": "English"},
    {"key": "fr", "label": "Français"},
    {"key": "sp", "label": "Español"}
  ];  

  constructor( ) {}

  ngOnInit(): void {
    let storedLang: string | null = null;
    if (typeof localStorage !== 'undefined') {
      storedLang = localStorage.getItem('prefered_language');
    } else if (typeof sessionStorage !== 'undefined') {
      // Fallback to sessionStorage if localStorage is not supported
      storedLang = sessionStorage.getItem('prefered_language');
    }
    //const storedLang = localStorage.getItem('prefered_language');
  }
}
