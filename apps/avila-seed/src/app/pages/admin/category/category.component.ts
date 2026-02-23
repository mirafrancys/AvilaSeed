import { Component, inject, Inject, OnInit, ViewChild } from '@angular/core';
import { forkJoin, Subscription } from 'rxjs';
import { ProductGateway } from '../../../core/gateways/product.gateway';
import { ICategory, ICategoryDescDto, ICategoryDto } from '../../../core/models/iCategory';
import { ICategoryTypeDto } from '../../../core/models/iCategoryType';
import { ILanguageDto } from '../../../core/models/iLanguageDto';
import { CommonModule, DOCUMENT } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-category',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './category.component.html',
  styleUrl: './category.component.scss'
})
export class CategoryComponent implements OnInit {

  subscriptions: Subscription = new Subscription();
  languages: ILanguageDto[] = [];
  categoryTypes: ICategoryTypeDto[] = [];
  categories: ICategory[] = [];
  categoryDto: ICategoryDescDto[] = [];
  selectExpand: boolean = false;
  filterForm: FormGroup;

  constructor(
    private productGateway: ProductGateway,
    @Inject(DOCUMENT) private document: Document,
    private fb: FormBuilder
  ) {
    this.filterForm = this.fb.group({
      selectcategory: [''],
      searchcategory: ['']
    });
    
    this.subscriptions.add(
      forkJoin({
        language: this.productGateway.getLanguages(),
        categoryType: this.productGateway.getCategoryTypes('fr'),
        category: this.productGateway.getCategories()
      }).subscribe(res => {
        this.languages = res.language;
        this.categoryTypes = res.categoryType.sort((a, b) => a.categoryTypeDesc > b.categoryTypeDesc ? 1 : -1);
        this.categories = res.category;
        res.category.forEach(cat => {
          const newCat: ICategoryDescDto = {
            categoryId: cat.id,
            categoryTypeId: cat.categoryTypeId,
            categoryName: cat.categoryLanguage.find(x => x.languageId === 1)?.categoryName ?? '',
            categoryDesc: "",
            categoryActive: cat.active
          };
          this.categoryDto.push(newCat);
        });

      })
    );
  }

  ngOnInit(): void {
    /*
    this.document.addEventListener("DOMContentLoaded", () => {
      const customSelects = this.document.querySelectorAll(".select-box");
      customSelects.forEach((customSelect) => {
        const selectButton = customSelect.querySelector(".select-button");
        const dropdown = customSelect.querySelector(".select-dropdown");
        const toggleDropdown = (expand = null) => {
          const isOpen = expand !== null ? expand : dropdown?.classList.contains("hidden");
          dropdown?.classList.toggle("hidden", !isOpen);
          selectButton?.setAttribute("aria-expanded", isOpen);
        };
        selectButton?.addEventListener("click", () => {
          toggleDropdown();
        });
      });
    });
    this.document.addEventListener("DOMContentLoaded", () => {
      const customSelects = this.document.querySelectorAll(".select-box");
      customSelects.forEach((customSelect) => {
        const selectButton = customSelect.querySelector(".select-button");
        const dropdown = customSelect.querySelector(".select-dropdown");
        const options = dropdown?.querySelectorAll("li");
        const selectedValue = selectButton?.querySelector(".selected-value");
        // ...
        const handleOptionSelect = (option) => {
          options?.forEach((opt) => opt.classList.remove("selected"));
          option.classList.add("selected");
          selectedValue.textContent = option.textContent.trim(); // Update selected value
        };
        options?.forEach((option) => {
          option.addEventListener("click", () => {
            handleOptionSelect(option);
            toggleDropdown(false);
          });
        });
        // ...
      });
    });
    */
  }

  selectButton(){}

  getCategoryName(element: ICategory) {
    const categoryName = element.categoryLanguage.find(x => x.languageId === 1)?.categoryName ?? '';
    return categoryName;
  }

  getCategoryTypeDesc(categoryTypeId: number): string {
    const categoryType = this.categoryTypes.find(x => x.categoryTypeId === categoryTypeId);
    if (categoryType){
      return categoryType.categoryTypeDesc;
    } else {
      return "";
    }
  }

  edit(item: ICategory){

  }
}
