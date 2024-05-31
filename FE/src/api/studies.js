import instance from "./axiosInstance";

export const getStudies = async ({
  search = "",
  offset = 0,
  limit = 6,
  view = "newest",
}) => {
  return await instance.get(
    `/studies?search=${search}&limit=${limit}&offset=${offset}&view=${view}`
  );
};

export const postStudies = async ({
  name,
  description,
  nickName,
  password,
  background,
}) => {
  return await instance.post("/studies", {
    name,
    description,
    nickName,
    password,
    background,
  });
};
