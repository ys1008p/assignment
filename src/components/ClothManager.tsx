import ClothsProvider from "@/components/ClothsProvider";
import UserCharacters from "@/components/UserCharacters";
import { useQuery } from "react-query";
import { getClothInventory, getUserCharacters } from "@/api/users";
import ClothInventory from "@/components/ClothInventory";
import { getExcelClothData } from "@/api/excel";
import { useEffect, useState } from "react";

type ClothManagerProps = {
  id: string;
}

export default function ClothManager({ id }: ClothManagerProps) {
  const [selectedCharacter, setSelectedCharacter] = useState<BigInt>(BigInt(0));
  const [clothInventoryToggle, setClothInventoryToggle] = useState(false);

  const handleSelectedCharacter = (id: BigInt) => {
    setSelectedCharacter(id);
  };

  const handleClothInventoryToggle = () => {
    setClothInventoryToggle(!clothInventoryToggle);
  };

  const { data: userCharacters, isLoading: isLoadingUserCharacters } = useQuery({
    queryKey: ["userCharacters"],
    queryFn: () => getUserCharacters(Number(id)),
  });

  const { data: excelCloth, isLoading: isLoadingExcelCloth } = useQuery({
    queryKey: ["excelCloth"],
    queryFn: () => getExcelClothData(),
  });

  const { data: clothInventory, isLoading: isLoadingClothInventory, refetch: refetchClothInventory } = useQuery({
    queryKey: ["clothInventory"],
    queryFn: () => getClothInventory(Number(id)),
  });

  useEffect(() => {
    refetchClothInventory();
  }, [clothInventoryToggle]);

  return (
    <div className="py-8 m-auto rounded-2xl w-[800px] flex justify-around mt-[100px] border-2">
      <UserCharacters userCharacters={userCharacters} handleSelectedCharacter={handleSelectedCharacter}
                      selectedCharacter={selectedCharacter} />
      <ClothsProvider excelCloth={excelCloth} selectedCharacter={selectedCharacter} id={id}
                      handleClothInventoryToggle={handleClothInventoryToggle} />
      <ClothInventory clothInventory={clothInventory} handleClothInventoryToggle={handleClothInventoryToggle} />
    </div>
  );
}