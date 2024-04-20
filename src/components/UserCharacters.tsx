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
  return (
    <div className="w-[200px] text-center">
      <div className="font-bold py-3">유저 캐릭터 목록</div>
      <ul className="flex flex-col gap-1">
        {
          userCharacters?.map((item: CharacterDto) => {
            return (
              <li key={item.id}>
                <span
                  onClick={() => handleSelectedCharacter(BigInt(item.characterindex))}
                  className={selectedCharacter === BigInt(item.characterindex) ? `text-red-500 cursor-pointer hover:text-red-300` : `text-black cursor-pointer hover:text-red-300`}>
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