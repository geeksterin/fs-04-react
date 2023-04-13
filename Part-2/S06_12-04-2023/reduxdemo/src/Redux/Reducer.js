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
};
const basicReducer = (storedata = initialData, action) => {
  if (action.type === "name") {
    return {
      name: action.username,
    };
  }
  return storedata;
};

export default basicReducer;
