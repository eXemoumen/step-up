"use client";
/**
 * v0 by Vercel.
 * @see https://v0.dev/t/z0S4u2A2uR2
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import BG from "./home-bg.jpg";
import { useRef, useState } from "react";

export default function Component() {
  const [stat, setstat] = useState(false);
  const [counter, setCounter] = useState(6000); // Initial counter value
  const statRef = useRef<HTMLButtonElement>(null);

  function clickHandler() {
    setstat(!stat); // Toggle the state
    setCounter(0); // Reset the counter when toggled
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-4xl rounded-lg shadow-md overflow-hidden">
        <div className="flex items-center justify-center gap-7">
          {" "}
          <Link href="/home">
            <div className="flex flex-col items-center opacity-50">
              <HomeIcon className="h-8 w-8" />

              <span className="mt-2 text-sm">Home</span>
            </div>
          </Link>
          <Link href="/market">
            <div className="flex flex-col items-center opacity-50">
              <BarChartIcon className="h-8 w-8" />

              <span className="mt-2 text-sm">Market</span>
            </div>
          </Link>
          <Link href="/profile">
            <div className="flex flex-col items-center opacity-50">
              <UserIcon className="h-8 w-8" />

              <span className="mt-2 text-sm">Profile</span>
            </div>
          </Link>
        </div>

        <div className="relative">
          <Image
            alt="Background"
            className="w-full h-60 object-cover"
            height="400"
            src={BG}
            style={{
              aspectRatio: "400/400",
              objectFit: "cover",
            }}
            width="400"
          />
          <div className="absolute inset-0 bg-[#00000040]" />
          <div className="absolute top-0 left-0 right-0 flex justify-center mt-16">
            <PersonStandingIcon className="text-white h-16 w-16" />
          </div>
          <div className="absolute bottom-0 left-0 right-0 flex justify-center mb-6">
            <Button
              className={
                stat ? "bg-red-500 text-white" : "bg-green-500 text-white"
              } // Dynamically change color
              ref={statRef}
              onClick={clickHandler}
            >
              {stat ? "OFF" : "ON"}
            </Button>
          </div>
        </div>
        <div className="flex justify-center py-6">
          <span className="text-2xl font-semibold">{counter} m</span>
        </div>
        <div className="grid grid-cols-3 gap-4 p-4">
          <div className="flex flex-col items-center">
            <FootprintsIcon className="h-8 w-8" />
            <span className="mt-2 text-sm">walk</span>
          </div>
          <div className="flex flex-col items-center">
            <HeartIcon className="h-8 w-8" />
            <span className="mt-2 text-sm">health</span>
          </div>
          <div className="flex flex-col items-center">
            <MenuIcon className="h-8 w-8" />
            <span className="mt-2 text-sm">food</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function BarChartIcon(props: any) {
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
    >
      <line x1="12" x2="12" y1="20" y2="10" />
      <line x1="18" x2="18" y1="20" y2="4" />
      <line x1="6" x2="6" y1="20" y2="16" />
    </svg>
  );
}

function FootprintsIcon(props: any) {
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
    >
      <path d="M4 16v-2.38C4 11.5 2.97 10.5 3 8c.03-2.72 1.49-6 4.5-6C9.37 2 10 3.8 10 5.5c0 3.11-2 5.66-2 8.68V16a2 2 0 1 1-4 0Z" />
      <path d="M20 20v-2.38c0-2.12 1.03-3.12 1-5.62-.03-2.72-1.49-6-4.5-6C14.63 6 14 7.8 14 9.5c0 3.11 2 5.66 2 8.68V20a2 2 0 1 0 4 0Z" />
      <path d="M16 17h4" />
      <path d="M4 13h4" />
    </svg>
  );
}

function HeartIcon(props: any) {
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
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  );
}

function HomeIcon(props: any) {
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
    >
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

function MenuIcon(props: any) {
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
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

function PersonStandingIcon(props: any) {
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
    >
      <circle cx="12" cy="5" r="1" />
      <path d="m9 20 3-6 3 6" />
      <path d="m6 8 6 2 6-2" />
      <path d="M12 10v4" />
    </svg>
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
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}
