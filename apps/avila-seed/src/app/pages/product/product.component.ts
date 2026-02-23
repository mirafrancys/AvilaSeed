import { isPlatformBrowser } from '@angular/common';
import { Component, inject, Input, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {

  private readonly platformId = inject(PLATFORM_ID);
  languageCode: string = '';
  productId: number = 0;

  @Input({alias: 'id', required: true}) set setProductId(value: number){
    this.productId = value;
    if(isPlatformBrowser(this.platformId)){
      const lang = localStorage.getItem('prefered_language');
      if (lang){
        this.languageCode = lang;
      }
    }

  }
}
