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
    if(data) {
      router.push(`/user/${data.id}`)
    } else {
      alert("아이디를 확인하세요.");
    }

  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label className="text-7xl">아이디 입력</label>
        <input onChange={handleIdChange} className="" />
        <button>확인</button>
      </form>
    </>

  );
}
