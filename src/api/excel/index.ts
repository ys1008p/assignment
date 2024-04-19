import { API_ROUTES } from "@/constant/ROUTES";
import axios from "axios";

export interface ExcelClothDto {
  index: bigint;
  createat: Date;
  updateat: Date;
  name: string;
  textid: string;
  use: number;
  underware: number;
  default: number;
  startercloth: number;
  ablecharacter: number;
  cansell: number;
  channel: number;
  slotcode: string;
}

export const getExcelClothData = async () => {
  const response = await axios.get(API_ROUTES.EXCEL_CLOTH);
  return response.data as ExcelClothDto[];
};