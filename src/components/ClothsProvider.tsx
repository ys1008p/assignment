import { ExcelClothDto } from "@/api/excel";
import { CreateClothDto, postUserCloth } from "@/api/users";

type ClothsProviderProps = {
  excelCloth: ExcelClothDto[] | undefined,
  selectedCharacter: BigInt,
  id: string,
  handleClothInventoryToggle: () => void
}

export default function ClothsProvider(
  {
    excelCloth,
    selectedCharacter,
    id,
    handleClothInventoryToggle,
  }: ClothsProviderProps) {
  const filteredCloths = excelCloth?.filter(
    item => BigInt(item.ablecharacter) === selectedCharacter,
  );

  const handlePostCloth = async ({ characteruid, employerid, clothno, channel }: CreateClothDto) => {
    await   postUserCloth({ characteruid, employerid, clothno, channel });
    handleClothInventoryToggle();
  };

  return (
    <div className="w-[200px] text-center">
      <div className="font-bold py-3">의상 지급기</div>
      <ul className="flex flex-col gap-1">
        {
          selectedCharacter ?
          filteredCloths?.map(item => {
          return (
            <li key={item.index}>
              <span onClick={() => handlePostCloth({
                characteruid: Number(selectedCharacter),
                employerid: +id,
                clothno: Number(item.index),
                channel: item.channel,
              })} className="cursor-pointer hover:text-red-300">{item.name}</span>
            </li>
          );
        }): "캐릭터를 선택해 주세요."}
      </ul>
    </div>
  );
}