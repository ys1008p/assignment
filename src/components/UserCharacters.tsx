import { useQuery } from "react-query";
import { getExcelClothData } from "@/api/excel";
import { useRouter } from "next/router";
import { CharacterDto, getUserCharacters } from "@/api/users";

type UserCharacterProps = {
  userCharacters: CharacterDto[] | undefined;
  handleSelectedCharacter: (id: BigInt) => void;
  selectedCharacter: BigInt;
}

export default function UserCharacters(
  {
    userCharacters,
    handleSelectedCharacter,
    selectedCharacter,
  }: UserCharacterProps,
) {
  console.log(userCharacters);
  return (
    <div>
      <div>유저 캐릭터 목록</div>
      <ul>
        {
          userCharacters?.map((item: CharacterDto) => {
            return (
              <li key={item.id}>
                <span
                  onClick={() => handleSelectedCharacter(BigInt(item.characterindex))}
                  className={selectedCharacter === BigInt(item.characterindex) ? `text-red-500` : `text-black`}>
                  {item.excelBaller.name}
                </span>
              </li>
            );
          })
        }
      </ul>
    </div>
  );
}