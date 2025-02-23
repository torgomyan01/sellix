import axios from "axios";

export const CreateCategory = ({
  name,
  parent_id,
  icon_name,
  icon_code,
}: ICreateCategory) => {
  return axios.post(`/api/admin/category/create`, {
    name,
    parent_id,
    icon_name,
    icon_code,
  });
};

export const GetAllCategory = () => {
  return axios.get(`/api/admin/category/get-all`);
};

export const GetSubCategory = (id: number | string) => {
  return axios.get(`/api/admin/category/get-sub?id=${id}`);
};

export const RemoveCategory = (id: number) => {
  return axios.post(`/api/admin/category/remove`, {
    id,
  });
};

export const GetAllCategoryHome = () => {
  return axios.get(`/api/main/get-all-categories`);
};
