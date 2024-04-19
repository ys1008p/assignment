import ClothsProvider from "@/components/ClothsProvider";

export default function User() {
  return (
    <>
      <div className="flex justify-around  ">
        <ClothsProvider />
        <div>유저 캐릭터 목록</div>
        <div>유저 의상 목록</div>
      </div>
    </>
  );
}