import { Component, Input, Renderer2 } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { transition, trigger, useAnimation } from '@angular/animations';

import { transitionAnimationOpacity } from '../shared/animations';
import { FooterComponent } from './footer/footer.component';
import { MenubarComponent } from './menubar/menubar.component';
import { TopbarComponent } from './topbar/topbar.component';
import { ILanguages } from '../core/models/iLanguages';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  imports: [TopbarComponent, MenubarComponent, RouterOutlet, FooterComponent],
  animations: [
      trigger('inOutAnimation', [
          transition(':enter', useAnimation(transitionAnimationOpacity, {
              params: {
                  opacityStart: 0,
                  opacityEnd: 1,
                  time: '1s 1s ease-out'
              }
          })),
          transition(':leave', useAnimation(transitionAnimationOpacity, {
              params: {
                  opacityStart: 1,
                  opacityEnd: 0,
                  time: '1s ease-in'
              }
          }))
      ])
  ]
})
export class LayoutComponent {
  @Input() languages: ILanguages[] | undefined = undefined;
  languageCode: string | undefined;

  constructor(
    private render: Renderer2
  ) {
    this.languageCode = 'fr';
  }

  getPrivacyPolicy() {
    const fileName = 'fr.json';
    const link: HTMLElement = this.render.createElement('a');
    this.render.setAttribute(link, 'target', '_blank');
    this.render.setAttribute(link, 'href', `../assets/${fileName}`)
    link.click();
    this.render.destroy();
  }
}
