import { getUserData } from "@/api/users";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const [id, setId] = useState("");

  const handleIdChange = (e: ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value);
  }

  const handleSubmit = async(e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = await getUserData(id);
    if(data.id) {
      router.push(`/user/${data.id}`)
    } else {
      alert("아이디를 확인하세요.");
    }

  }

  return (
    <>
      <form className="w-[400px] m-auto h-[100px] flex justify-around items-center border-2 rounded-2xl mt-20" onSubmit={handleSubmit}>
        <label className="text-2xl font-bold">아이디 입력</label>
        <input className="border-2" onChange={handleIdChange} placeholder="woore-test-1" />
        <button className="hover:text-red-300">확인</button>
      </form>
    </>

  );
}
