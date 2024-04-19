import { API_ROUTES } from "@/constant/routes";
import axios from "axios";

interface UserData {
  id: number;
  createat: string;
  updateat: string;
  uuid: string;
  userid: string;
}

export const getUserData = async (userId: string) => {
  const response = await axios.get(API_ROUTES.USER_BY_ID(userId));
  return response.data as UserData;
};