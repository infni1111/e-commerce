"use client";

import { useRouter } from "next/navigation";

export default function Home() {

  const router = useRouter();

  const goToChatBox = () => {

    alert("oui")
   
  };

  return (

    <div>
      <h1>ia</h1>
      <div
        onClick={goToChatBox}
        className="mx-40 my-50 bg-yellow-500 text-white rounded"
      >
        virus
      </div>
    </div>
  );
}
