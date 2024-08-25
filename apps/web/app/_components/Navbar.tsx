"use client";
import { signIn } from "@/auth";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex h-[4rem] items-center justify-around border-b border-slate-300">
      <Link href={"/"}>
        <Image
          src="/logo.png"
          alt="Dkode logo"
          width={210}
          height={50}
          priority={true}
        />
      </Link>
      {/* <form
        onSubmit={async (e) => {
          // "use server";
          e.preventDefault();
          await signIn("credentials", { redirectTo: "/dashboard" });
        }}
      > */}
      <button
        className="btn"
        onClick={() => signIn("credentials", { redirectTo: "/dashboard" })}
      >
        Login
      </button>
      {/* </form> */}
    </nav>
  );
}
