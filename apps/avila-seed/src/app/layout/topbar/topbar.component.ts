import { Component, EventEmitter, inject, Input, OnInit, Output, PLATFORM_ID } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { OverlayModule } from '@angular/cdk/overlay';
import { CdkMenuModule } from '@angular/cdk/menu';

import { ILanguages } from '../../core/models/iLanguages';
import { AuthGateway } from '../../core/gateways/auth.gateway';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss'],
  imports: [CdkMenuModule, OverlayModule]
})
export class TopbarComponent implements OnInit {
  @Input() languages: ILanguages[] | undefined = undefined;
  @Output() languageChange: EventEmitter<string> = new EventEmitter();

  private readonly platformId = inject(PLATFORM_ID);
  selectedLanguage: ILanguages = {
    key: '',
    label: ''
  };

  currentLang$!: Observable<string>;

  constructor(
    public auth: AuthGateway,
    private router: Router
  ){}

  ngOnInit(): void {
    this.selectLanguage('fr');
  }

  switchLang(event: Event) {
    let lang = (event.target as HTMLSelectElement).value;
    this.languageChange.emit(lang);
    if(isPlatformBrowser(this.platformId)){
      localStorage.setItem('prefered_language', lang);
    }
  }

  selectLanguage(lang: string){
    if(isPlatformBrowser(this.platformId)){
      localStorage.setItem('prefered_language', lang);
    }
    this.selectedLanguage.key = lang;
    this.selectedLanguage.label = this.languages?.find(x => x.key === lang)?.label ?? '';
  }

  logout() {
    this.auth.logout().subscribe(() => this.router.navigate(['login']));
  }

  login() {
    this.router.navigate(['login']);
  }

  viewCart(){}
}

