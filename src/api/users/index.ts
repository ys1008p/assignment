import { API_ROUTES } from "@/constant/routes";
import axios from "axios";

interface UserData {
  id: number;
  createat: string; // 혹은 Date 타입 등
  updateat: string; // 혹은 Date 타입 등
  uuid: string;
  userid: string;
}

export const getUserData = async (userId: string) => {
  const response = await axios.get(API_ROUTES.USER_BY_ID(userId));
  return response.data;
};