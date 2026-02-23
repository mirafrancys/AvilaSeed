import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environments/environment";
import { Observable, of } from "rxjs";
import { ICategory, ICategoryDescDto, ICategoryDto } from "../models/iCategory";
import { ICategoryTypeDto } from "../models/iCategoryType";
//import { CategoryTypes } from "../stores/categoryType-data";
//import { Categories } from "../stores/category-data";
//import { CategoriesDesc } from "../stores/categoryDesc-data";
import { IEventDto } from "../models/iEventDto";
import { Events } from "../stores/event-data";
import { IProductDto } from "../models/iProductDto";
import { Products } from "../stores/product-data";
import { ILanguageDto } from "../models/iLanguageDto";

@Injectable({
  providedIn: 'root'
})
export class ProductGateway {
  endpointUrl = `${environment.apiProductUrl}/v1/`;

  constructor(
    private httpClient: HttpClient
  ) {}

  //* Category
  getCategoryByLanguageCode(languageCode: string): Observable<ICategoryDto[]>{
    const url =  `${this.endpointUrl}categories/GetByLanguageCode/${languageCode}`;

    return this.httpClient.get<ICategoryDto[]>(url);
    //return of(Categories.filter(x => x.languageCode === languageCode));
  }

  getCategoryByCategoryTypeId(categoryTypeId: number, languageCode: string): Observable<ICategoryDto[]>{
    const url =  `${this.endpointUrl}categories/GetByTypeLanguageCode/${categoryTypeId}/${languageCode}`;

    return this.httpClient.get<ICategoryDto[]>(url);
    //return of(Categories.filter(x => x.categoryTypeId === categoryTypeId && x.languageCode === languageCode));
  }

  getCategoryById(id: number, languageCode: string): Observable<ICategoryDescDto>{
    const url =  `${this.endpointUrl}categories/${id}/${languageCode}`;

    return this.httpClient.get<ICategoryDescDto>(url);
    /*
    let data!: ICategoryDescDto;
    data = CategoriesDesc[id-1];
    if (data){
      return of(data);
    }
    return of()
    */
  }

  getCategories(): Observable<ICategory[]> {
    const url =  `${this.endpointUrl}categories`;

    return this.httpClient.get<ICategory[]>(url);
  }

  //* CategoryType
  getCategoryTypes(languageCode: string): Observable<ICategoryTypeDto[]>{
    const url = `${this.endpointUrl}category-types/GetByLanguageCode/${languageCode}`;

    return this.httpClient.get<ICategoryTypeDto[]>(url);
    //return of(CategoryTypes.filter(x => x.languageCode === languageCode));
  }

  //* Event
  getEvents(languageCode: string): Observable<IEventDto[]>{
    const url =  `${this.endpointUrl}Event/GetEvents/${languageCode}`;

    //return this.httpClient.get<IEventDto[]>(url);
    return of(Events);
  }

  //* Invoice

  //* Language
  getLanguages(): Observable<ILanguageDto[]> {
    const url = `${this.endpointUrl}languages`;

    return this.httpClient.get<ILanguageDto[]>(url);
  }

  //* Product
  getProductById(id: number, languageCode: string): Observable<IProductDto>{
    const url = `${this.endpointUrl}Product/GetProductById/{id}/{languageCode}`;

    //return this.httpClient.get<ICategoryTypeDto[]>(url);
    const data = Products.find(x => x.productId === id);
    if (data){
      return of(data);
    }
    return of()
  }

  getProductByCategoryId(categoryId: number, languageCode: string): Observable<IProductDto[]>{
    const url = `${this.endpointUrl}Product/GetProductByCategoryId/{categoryId}/{languageCode}`;

    console.log('getProductByCategoryId ', categoryId);
    //return this.httpClient.get<ICategoryTypeDto[]>(url);
    //console.log('Product total: ', Products.length);
    //console.table(Products);
    //const data = Products.filter(x => x.categoryId === categoryId);
    //console.log('Product count: ', data.length);
    return of(Products)
  }
}