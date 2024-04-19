import { ClothInventoryDto, deleteUserCloth } from "@/api/users";

type ClothInventoryProps = {
  clothInventory: ClothInventoryDto[] | undefined
}

export default function ClothInventory({ clothInventory }: ClothInventoryProps) {
  const handleDeleteItem = (clothId: bigint) => {
    deleteUserCloth(clothId);
  };

  return (
    <div>
      <div>캐릭터 의상 목록</div>
      <ul>
        {clothInventory?.map(item => {
          return (
            <li key={item.id}>
              <span>{item.excelCloth?.name}</span>
              <button onClick={()=>deleteUserCloth(BigInt(item.id))}>삭제</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}