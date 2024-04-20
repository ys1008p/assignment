import { ClothInventoryDto, deleteUserCloth, UpdateClothDto, updateUserCloth } from "@/api/users";

type ClothInventoryProps = {
  clothInventory: ClothInventoryDto[] | undefined,
  handleClothInventoryToggle: () => void,
}

export default function ClothInventory({ clothInventory, handleClothInventoryToggle }: ClothInventoryProps) {
  const handleDeleteItem = async (clothId: bigint) => {
    await deleteUserCloth(clothId);
    handleClothInventoryToggle();
  };

  const handleLockItem = async (clothId: bigint, { islock }: UpdateClothDto) => {
    await updateUserCloth(clothId, { islock });
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
              <button disabled={item.islock} onClick={() => handleDeleteItem(BigInt(item.id))}>삭제</button>
              <button onClick={() => handleLockItem(BigInt(item.id), { islock: !item.islock })}>잠금</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}