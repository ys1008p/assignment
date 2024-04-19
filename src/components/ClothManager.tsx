import ClothsProvider from "@/components/ClothsProvider";
import UserCharacters from "@/components/UserCharacters";
import { useQuery } from "react-query";
import { getClothInventory, getUserCharacters } from "@/api/users";
import ClothInventory from "@/components/ClothInventory";
import { getExcelClothData } from "@/api/excel";

type ClothManagerProps = {
  id: string;
}

export default function ClothManager({ id }: ClothManagerProps) {

  const { data: userCharacters } = useQuery({
    queryKey: ["userCharacters"],
    queryFn: () => getUserCharacters(Number(id)),
  });

  const { data: excelCloth } = useQuery({
    queryKey: ["excelCloth"],
    queryFn: () => getExcelClothData(),
  });

  const { data: clothInventory } = useQuery({
    queryKey: ["clothInventory"],
    queryFn: () => getClothInventory(Number(id)),
  });

console.log(clothInventory);
  return (
    <div className="flex justify-around">
      <UserCharacters />
      <ClothsProvider />
      <ClothInventory />
    </div>
  );
}