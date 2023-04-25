// const basicReducer = (
//   storedata = {
//     name: "Kabir",
//   },
//   action
// ) => {
//   return storedata;
// };
var initialData = {
  name: "kabir",
  products: [],
};
const basicReducer = (storedata = initialData, action) => {
  if (action.type === "name") {
    return {
      ...storedata,
      name: action.username,
    };
  } else if (action.type === "products") {
    return {
      ...storedata,
      products: action.payload,
    };
  }
  return storedata;
};

export default basicReducer;
