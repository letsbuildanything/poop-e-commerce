"use client";
import { useSession, signIn } from "next-auth/react";
import { redirect } from "next/navigation";
import Link from "next/link";

export default function Home() {
  const { status } = useSession();

  if (status === "authenticated") redirect("/dashboard");

  if (status === "unauthenticated") {
    return (
      <div className="relative">
        <div className='w-full absolute top-7 md:top-5'>
          <nav className="flex justify-between rounded-full px-6 md:px-12 py-3 md:py-4 mx-auto bg-[#8B4513] w-4/5 md:w-2/3">
            <Link href="/dashboard" className='hover:bg-white/75 hover:text-[#8B4513] px-2 py-1 rounded-md'>Dashboard</Link>
            <button onClick={() => signIn("")} className='hover:bg-white/75 hover:text-[#8B4513] px-2 py-1 rounded-md'>Sign in</button>
          </nav>
        </div>

        <main className="h-screen flex flex-col justify-center items-center gap-10">
          <h1 className="text-2xl md:text-6xl">Welcome to the world of 💩!</h1>
          <p className="text-xl md:text-3xl">Hold on! we are Coming.. 🚧</p>
        </main>
      </div>
    );
  }
}
