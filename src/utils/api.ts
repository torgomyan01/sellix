import axios from "axios";

export const CreateCategory = ({
  nameCategory,
  icon_name,
  icon_code,
}: ICreateCategory) => {
  return axios.post(`/api/create-category`, {
    nameCategory,
    icon_name,
    icon_code,
  });
};

export const GetAllCategory = () => {
  return axios.get(`/api/get-all-category`);
};

export const RemoveCategory = (id: number) => {
  return axios.post(`/api/remove-category`, {
    id,
  });
};
