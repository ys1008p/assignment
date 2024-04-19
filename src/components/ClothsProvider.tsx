import { ExcelClothDto } from "@/api/excel";
import { CreateClothDto, postUserCloth } from "@/api/users";

type ClothsProviderProps = {
  excelCloth: ExcelClothDto[] | undefined,
  selectedCharacter: BigInt,
  id: string
}

export default function ClothsProvider({ excelCloth, selectedCharacter, id }: ClothsProviderProps) {
  const filteredCloths = excelCloth?.filter(
    item => BigInt(item.ablecharacter) === selectedCharacter,
  );

  const handlePostCloth = ({ characteruid, employerid, clothno, channel }: CreateClothDto) => {
    postUserCloth({ characteruid, employerid, clothno, channel });
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