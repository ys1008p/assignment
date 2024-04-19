import ClothsProvider from "@/components/ClothsProvider";
import UserCharacters from "@/components/UserCharacters";
import { useQuery } from "react-query";
import { getClothInventory, getUserCharacters } from "@/api/users";
import ClothInventory from "@/components/ClothInventory";
import { getExcelClothData } from "@/api/excel";
import { useState } from "react";

type ClothManagerProps = {
  id: string;
}

export default function ClothManager({ id }: ClothManagerProps) {
  const [selectedCharacter, setSelectedCharacter] = useState<BigInt>(BigInt(0));
  const handleSelectedCharacter = (id: BigInt) => {
    setSelectedCharacter(id);
  };

  const { data: userCharacters, isLoading: isLoadingUserCharacters } = useQuery({
    queryKey: ["userCharacters"],
    queryFn: () => getUserCharacters(Number(id)),
  });

  const { data: excelCloth, isLoading: isLoadingExcelCloth } = useQuery({
    queryKey: ["excelCloth"],
    queryFn: () => getExcelClothData(),
  });

  const { data: clothInventory, isLoading: isLoadingClothInventory } = useQuery({
    queryKey: ["clothInventory"],
    queryFn: () => getClothInventory(Number(id)),
  });

  const isLoading = isLoadingClothInventory && isLoadingExcelCloth && isLoadingUserCharacters;

  return (
    isLoading ? null :
      <div className="flex justify-around">
        <UserCharacters userCharacters={userCharacters} handleSelectedCharacter={handleSelectedCharacter} selectedCharacter={selectedCharacter} />
        <ClothsProvider excelCloth={excelCloth} selectedCharacter={selectedCharacter} id={id} />
        <ClothInventory clothInventory={clothInventory} />
      </div>
  );
}