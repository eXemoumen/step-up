"use client";
/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/8Lf0SRDgWbP
 */
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import Walk from "../images/walk.png";
import Cion from "../images/dollar.png";

export function Login() {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center bg-black">
      <div className="mb-8">
        <UserIcon  />
      </div>
      <form className="w-full h-auto max-w-xs space-y-4 ">
        <div>
          <label className="sr-only" htmlFor="username">
            Username
          </label>
          <Input
            className="w-full  rounded-md border-2 border-gray-700 bg-gray-900 px-4 py-2 text-white placeholder-gray-500 focus:border-[#FFA500] focus:ring-[#FFA500]"
            id="username"
            placeholder="Username"
            type="text"
          />
        </div>
        <div className="">
          <label className="sr-only" htmlFor="password">
            Password
          </label>
          <Input
            className="w-full  rounded-md border-2 border-gray-700 bg-gray-900 px-4 py-2 text-white placeholder-gray-500 focus:border-[#FFA500] focus:ring-[#FFA500]"
            id="password"
            placeholder="Password"
            type="password"
          />
        </div>
        <Link href="/home">
          <Button className="w-full rounded-md bg-[#FFA500] py-2   text-black hover:bg-[#e69500]">
            Log in
          </Button>
        </Link>
      </form>
    </div>
  );
}

function UserIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-16 w-16 text-[#FFA500]"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}
