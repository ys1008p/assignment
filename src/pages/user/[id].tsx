import ClothsProvider from "@/components/ClothsProvider";
import { useRouter } from "next/router";
import ClothManager from "@/components/ClothManager";

export default function User() {
  const router = useRouter();
  const { id } = router.query;

  if (typeof id === "string") {
    return (
      <ClothManager id={id} />
    );
  }

  return null;
}