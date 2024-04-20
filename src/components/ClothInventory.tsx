import { ClothInventoryDto, deleteUserCloth, UpdateClothDto, updateUserCloth } from "@/api/users";
import Image from "next/image";
import lockImage from "@/images/lock.png";
import openImage from "@/images/free.png";

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
    <div className="w-[200px]">
      <div className="font-bold py-3 text-center">유저 전체 의상 목록</div>
      <ul className="flex flex-col gap-1">
        {clothInventory?.map(item => {
          return (
            <li className="flex justify-end gap-3" key={item.id}>
              <span>{item.excelCloth?.name}</span>
              <button className="hover:text-red-300 disabled:text-gray-100" disabled={item.islock} onClick={() => handleDeleteItem(BigInt(item.id))}>삭제</button>
              <button onClick={() => handleLockItem(BigInt(item.id), { islock: !item.islock })}>
                <Image src={item.islock? lockImage : openImage } alt={""} width="20" />
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}