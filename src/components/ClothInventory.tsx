import { ClothInventoryDto } from "@/api/users";

type ClothInventoryProps = {
  clothInventory:ClothInventoryDto[] | undefined
}

export default function ClothInventory({clothInventory}:ClothInventoryProps) {
  console.log(clothInventory)
  return (
    <div>
      <div>캐릭터 의상 목록</div>
      <ul>
        {clothInventory?.map(item => {
          return (
            <li key={item.id}>
              <span>{item.excelCloth?.name}</span>
            </li>
          );
        })}
      </ul>
    </div>
  )
}