import { Component, inject, Inject, Input, OnInit, PLATFORM_ID } from '@angular/core';
import { ProductGateway } from '../../core/gateways/product.gateway';
import { IProductDto } from '../../core/models/iProductDto';
import { ICategoryDescDto, ICategoryDto } from '../../core/models/iCategory';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  imports: [CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent implements OnInit {

  private readonly platformId = inject(PLATFORM_ID);
  //productGateway = Inject(ProductGateway);
  products!: IProductDto[];
  languageCode: string = '';
  categoryId: number = 0;
  categoryName!: string;
  categoryDesc!: string;

  @Input({alias: 'id', required: true}) set setCategoryId(value: number){
    console.log('Input categoryId: ', value);
    this.categoryId = value;
    if(isPlatformBrowser(this.platformId)){
      const lang = localStorage.getItem('prefered_language');
      if (lang){
        this.languageCode = lang;
      }
    }
    this.productGateway.getProductByCategoryId(value, this.languageCode).subscribe((res: IProductDto[]) => {
      this.products = res;
      console.table(res);
    });
    this.productGateway.getCategoryById(value, this.languageCode).subscribe((res: ICategoryDescDto) => {
      if (res){
        console.log('categoryName: ', res.categoryName);
        this.categoryName = res.categoryName;
        this.categoryDesc = res.categoryDesc;
      }
    });
  };

  constructor(
    private productGateway: ProductGateway,
    private route: Router
  ){
    console.log('constructor')
  }

  ngOnInit(): void {
      
  }

  viewProduct(productId: number){
    console.log('ViewProduct Id: ', productId);
    this.route.navigateByUrl(`/product/${this.categoryName}/${productId}`);
  }
}
