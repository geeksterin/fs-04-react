import { product } from "./ActionTypes";
export const productActionCreator = (data) => {
  return {
    type: product,
    payload: data,
  };
};
