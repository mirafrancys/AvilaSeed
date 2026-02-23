export interface ICategoryDto{
  categoryId: number;
  categoryTypeId: number;
  categoryName: string;
}

export interface ICategoryDescDto{
  categoryId: number;
  categoryTypeId: number;
  categoryName: string;
  categoryDesc: string;
  categoryActive: boolean;
}

export interface ICategory {
  id: number;
  categoryTypeId: number;
  slug: string;
  active: boolean;
  createdAt: string;
  updatedAt: string;
  categoryLanguage: ICategoryLanguage[];
}

export interface ICategoryLanguage {
  categoryId: number;
  languageId: number;
  categoryName: string;
  categoryDesc: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreateCategory {
  categoryTypeId: number;
  slug: string;
  active: boolean;
  languageDetail: CategoryLanguage[]
}

export interface CategoryLanguage {
  languageId: number;
  categoryName: string;
  categoryDesc: string;
}