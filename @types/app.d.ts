declare interface ICreateCategory {
  name: string;
  parent_id: number;
  icon_name: string;
  icon_code: string;
}

declare interface IDBUser {
  name: string;
  phone_number: string;
  email: string;
  password: string;
  image_path: string;
  its_company: string;
  whats_app: string;
  telegram: string;
  viber: string;
  fb_link: string;
  insta_link: string;
  linkedin_link: string;
  createdAt: string;
  updatedAt: string;
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


declare interface IUserLogin { password: string; phone_number: string }
