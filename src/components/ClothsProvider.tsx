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
    await postUserCloth({ characteruid, employerid, clothno, channel });
    handleClothInventoryToggle();
  };

  return (
    <div>
      <div>의상 지급기</div>
      <ul>
        {filteredCloths?.map(item => {
          return (
            <li key={item.index}>
              <span onClick={() => handlePostCloth({
                characteruid: Number(selectedCharacter),
                employerid: +id,
                clothno: Number(item.index),
                channel: item.channel,
              })}>{item.name}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}