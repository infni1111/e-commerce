"use client";

import { useState } from "react";

import { ErrorBoundary } from "react-error-boundary";


import Image from 'next/image'

function Entete(){

  return(

    <div className = "flex justify-between items-center p-5 rounded-lg">

      <div className = "flex-1 ">

        <Image src = "/infni.jpg" alt = "infni" width={50} height = {50} />

      </div>



        
    </div>


    )
}


export default function ChatBox() {

  const [count, setCount] = useState(0);

  return (
   <div>

     
       <Entete />

   </div>
  );
}



