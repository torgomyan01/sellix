import axios from "axios";

export const CreateCategory = ({
  name,
  parent_id,
  icon_name,
  icon_code,
}: ICreateCategory) => {
  return axios.post(`/api/category/create`, {
    name,
    parent_id,
    icon_name,
    icon_code,
  });
};

export const GetAllCategory = () => {
  return axios.get(`/api/category/get-all`);
};

export const GetSubCategory = (id: number | string) => {
  return axios.get(`/api/category/get-sub?id=${id}`);
};

export const RemoveCategory = (id: number) => {
  return axios.post(`/api/category/remove`, {
    id,
  });
};
