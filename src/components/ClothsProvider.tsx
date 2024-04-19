import { useQuery } from "react-query";
import { getExcelClothData } from "@/api/excel";

export default function ClothsProvider() {
  const { data: excelCloth } = useQuery({
    queryKey: ["excelCloth"],
    queryFn: () => getExcelClothData(),
  });

  return (
    <div>
      <div>의상 지급기</div>
      <ul>
        {
          excelCloth?.map((item) => {
            return (
              <li key={item.index}>
                <span>{item.name}</span>
              </li>
            );
          })
        }
      </ul>
    </div>
  );
}