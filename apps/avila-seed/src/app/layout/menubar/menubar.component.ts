import { Component, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ICategoryTypeDto } from '../../core/models/iCategoryType';
import { ProductGateway } from '../../core/gateways/product.gateway';
import { ICategoryDto } from '../../core/models/iCategory';


@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.scss'],
  imports: [RouterModule]
})
export class MenubarComponent implements OnInit {
  @Input() languageCode: string | undefined;
  categoryTypes: ICategoryTypeDto[] = [];
  categories: ICategoryDto[] = [];
  //categoryType$: Observable<ICategoryTypeDto[]> | null = null;
  //category$: Observable<ICategoryDto[]> | null = null;

  constructor(
    private productGateway: ProductGateway
  ){}

  ngOnInit(): void {
    console.log('Language dans menubar est: ', this.languageCode);
    //this.categoryType$ = this.productGateway.getCategoryTypes(this.languageCode!);
    //this.category$ = this.product
    this.productGateway.getCategoryTypes(this.languageCode!).subscribe(res => this.categoryTypes = res);
    this.productGateway.getCategoryByLanguageCode(this.languageCode!).subscribe(res => this.categories = res);
  }

  getCategories(categoryTypeId: number): ICategoryDto[] {
    return this.categories.filter(x => x.categoryTypeId === categoryTypeId);
  }

  SelectCategoryType(categoryTypeId: number){
    return this.categories.filter(x => x.categoryTypeId === categoryTypeId);
  }
}
