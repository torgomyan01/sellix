declare interface ICreateCategory {
  name: string;
  parent_id: number;
  icon_name: string;
  icon_code: string;
}

declare interface ICategory {
  id: 1;
  name: string;
  parent_id: number;
  icon_name: string;
  icon_code: string;
}

type IUpdateCategoryType = "category" | "subcategory" | "subsubcategory";

declare interface IAutocompleteResult {
  allCats: ICategory[] | undefined;
  cat: ICategory | null;
  subCat: ICategory | null;
  subSubCat: ICategory | null;
}

declare interface ICatalog {
  catalogSite: {
    status: boolean;
  };
}
