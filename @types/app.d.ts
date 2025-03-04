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

declare interface IServicesType {
  "Վաճառում եմ": string;
  "Տալիս եմ վարձով": string;
  "Ծառայություն եմ մատուծում": string;
}

declare interface ICatalog {
  catalogSite: {
    status: boolean;
  };
}
