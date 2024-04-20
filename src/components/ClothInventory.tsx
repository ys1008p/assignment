import { ClothInventoryDto, deleteUserCloth } from "@/api/users";

type ClothInventoryProps = {
  clothInventory: ClothInventoryDto[] | undefined,
  handleClothInventoryToggle: ()=>void,
}

export default function ClothInventory({ clothInventory,handleClothInventoryToggle }: ClothInventoryProps) {
  const handleDeleteItem = async (clothId: bigint) => {
    await deleteUserCloth(clothId);
    handleClothInventoryToggle();
  };

  return (
    <div>
      <div>캐릭터 의상 목록</div>
      <ul>
        {clothInventory?.map(item => {
          return (
            <li key={item.id}>
              <span>{item.excelCloth?.name}</span>
              <button onClick={()=>handleDeleteItem(BigInt(item.id))}>삭제</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}