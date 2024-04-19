export const API_ROUTES = {
  BASE_URL: "https://assignment-be-phi.vercel.app/api",
  EXCEL_CLOTH: "api/excel/cloth",
  USER_BY_ID: (id: string) => `api/users/${id}`,
  USER_CHARACTER_BY_ID: (id: string) => `api/users/${id}/character`,

  USER_CLOTHS_BY_ID: (id: string) => `api/users/${id}/cloths`,
  CREATE_USER_CLOTH:`api/user/cloths`,
  DELETE_USER_CLOTH: (clothId: number) => `api/users/cloths/${clothId}`,
};