"use client";
import {useState, useEffect} from 'react'
import { useSession, signOut } from "next-auth/react";
import { redirect } from "next/navigation";

import Confetti from 'react-confetti'



const page = () => {
  const { status } = useSession();
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }, []);

  if (status === "authenticated") {
    return (
      <div className='h-screen'>
        <Confetti
          width={width}
          height={height}
          className='hidden md:block'
        />
        <main className="h-full flex flex-col justify-center items-center gap-10" >
          <h1 className="text-2xl md:text-6xl">Thank you for sign up!</h1>
          <p className="text-xl md:text-3xl px-4 text-center">soon, you'll be able to see your favorite 💩 here.</p>
          <button onClick={() => signOut()} className='bg-[#8B4513]/75 text-white hover:bg-white/75 hover:text-[#8B4513] px-2 py-1 rounded-md'>Sign Out</button>
        </main>
      </div>
    );
  }

  if (status === "unauthenticated") redirect("/");
};

export default page;
