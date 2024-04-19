export const API_ROUTES = {
  EXCEL_CLOTH: "api/excel/cloth",
  USER_BY_ID: (id: string) => `api/users/${id}`,
  USER_CHARACTER_BY_ID: (employerId: number) => `api/users/${employerId}/characters`,

  USER_CLOTHS_BY_ID: (employerId: number) => `api/users/${employerId}/cloths`,
  CREATE_USER_CLOTH:`api/users/cloths`,
  DELETE_USER_CLOTH: (clothId: number) => `api/users/cloths/${clothId}`,
};