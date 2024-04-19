import { useQuery } from "react-query";
import { getExcelClothData } from "@/api/excel";
import { useRouter } from "next/router";
import { CharacterDto, getUserCharacters } from "@/api/users";

export default function UserCharacters() {
  const router = useRouter();
  const  {id} = router.query
  const { data: userCharacters } = useQuery({
    queryKey: ["userCharacters"],
    queryFn: () => getUserCharacters(Number(id)),
  });

  return (
    <div>
      <div>유저 캐릭터 목록</div>
      <ul>
        {
          userCharacters?.map((item: CharacterDto) => {
            return (
              <li key={item.id}>
                <span>{item.excelBaller.name}</span>
              </li>
            );
          })
        }
      </ul>
    </div>
  );
}