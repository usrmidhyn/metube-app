import { serverUrl } from "./serverUrl";
import { commonAPI } from "./commonAPI";

// 1. Add video details into the server
export const addVideoAPI = async (reqbody) => {
  return await commonAPI('post', `${serverUrl}/allvideos`, reqbody);
};

// 2. Get all Videos from the server
export const getVideoAPI = async () => {
  return await commonAPI('get', `${serverUrl}/allvideos`, "");
};

// 3. Delete a particular video from the server
export const deleteVideoAPI = async (videoId) => {
  return await commonAPI('delete', `${serverUrl}/allvideos/${videoId}`, {});
};

// 4. Add watch-history video details to the server
export const addToHistoryAPI = async (reqbody) => {
  return await commonAPI('post', `${serverUrl}/watch-history`, reqbody);
};

// 5. Get watch-history video details from the server
export const getHistoryAPI = async () => {
  return await commonAPI('get', `${serverUrl}/watch-history`, "");
};

// 6. Delete a watch-history entry
export const deleteHistoryAPI = async (historyId) => {
  return await commonAPI('delete', `${serverUrl}/watch-history/${historyId}`, {});
};

// // 7. Add category into the server
// export const addCategoryAPI = async (reqbody) => {
//   return await commonAPI('post', `${serverUrl}/categories`, reqbody);
// };

// // 8. Get all categories from the server
// export const getCategoriesAPI = async () => {
//   return await commonAPI('get', `${serverUrl}/categories`, "");
// };

// // 9. Delete a category from the server
// export const deleteCategoryAPI = async (categoryId) => {
//   return await commonAPI('delete', `${serverUrl}/categories/${categoryId}`, {});
// };

// 10. Get a particular video details from the server
export const getSingleVideoAPI = async (videoId) => {
  return await commonAPI('get', `${serverUrl}/allvideos/${videoId}`, "");
};

// 11. Update a particular video details from the server
export const updateVideoAPI = async (videoId, updatedData) => {
  return await commonAPI('put', `${serverUrl}/allvideos/${videoId}`, updatedData);
};
