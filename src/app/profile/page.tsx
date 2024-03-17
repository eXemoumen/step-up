/**
 * v0 by Vercel.
 * @see https://v0.dev/t/gQsNmryKtNJ
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Toggle } from "@/components/ui/toggle";
import Image from "next/image";
import Pic from "./user-pfp.jpg";
export default function Profile() {
  return (
    <div className="space-y-4 ">
      <header className="lg:pt-4 lg:pb-8">
        <div className="container mx-auto px-4 flex items-center space-x-4 lg:space-x-6">
          <Link className="flex items-center space-x-2" href={"/home"}>
            <HomeIcon className="h-6 w-6" />
            <span className="text-lg font-semibold">Home</span>
          </Link>
          <Link
            className="hidden lg:flex items-center space-x-2"
            href="/market"
          >
            <BarChartIcon className="h-6 w-6" />
            <span className="text-lg font-semibold">Market</span>
          </Link>
          <Link
            className="lg:hidden flex items-center space-x-2"
            href="/market "
          >
            <BarChartIcon className="h-6 w-6" />
            <span className="text-lg font-semibold">Market</span>
          </Link>
          <Link
            className="lg:hidden flex items-center space-x-2"
            href="/profile"
          >
            <UserIcon className="h-6 w-6" />
            <span className="text-lg font-semibold">Profile</span>
          </Link>
          <div className="flex-1 flex justify-end lg:justify-center">
            <Button className="lg:hidden" size="sm" variant="outline">
              <MenuIcon className="h-4 w-4 -translate-x-1" />
              Menu
            </Button>
            <Button className="hidden lg:flex" size="sm" variant="outline">
              <LogOutIcon className="h-4 w-4 -translate-x-1" />
              Log out
            </Button>
          </div>
        </div>
      </header>
      <main className="container h-screen mx-auto flex flex-col items-center justify-center gap-4 lg:gap-8 px-4 lg:px-0 ">
        <div className="flex flex-col items-center space-y-4">
          <Image
            alt="avatar"
            className="rounded-full"
            height="150"
            src={Pic}
            style={{
              aspectRatio: "150/150",
              objectFit: "cover",
            }}
            width="150"
          />
          <h1 className="text-2xl font-bold">Welcome back, Jane</h1>
          <p className="m-auto max-w-[400px] text-center text-sm lg:text-base text-[#6b7280]">
            Your journey begins here. Start walking to earn rewards and discover
            new adventures.
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="grid grid-cols-2 gap-2">
            <div className="flex items-center space-x-2">
              <CalendarIcon className="h-4 w-4" />
              <span className="text-sm font-medium">Daily</span>
            </div>
            <div className="flex items-center space-x-2">
              <AwardIcon className="h-4 w-4" />
              <span className="text-sm font-medium">Rewards</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPinIcon className="h-4 w-4" />
              <span className="text-sm font-medium">Routes</span>
            </div>
            <div className="flex items-center space-x-2">
              <TrophyIcon className="h-4 w-4" />
              <span className="text-sm font-medium">Challenges</span>
            </div>
          </div>
          <div className="flex-1" />
          <Toggle />
        </div>
      </main>
    </div>
  );
}

function AwardIcon(props) {
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
      <circle cx="12" cy="8" r="6" />
      <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
    </svg>
  );
}

function CalendarIcon(props) {
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
      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
      <line x1="16" x2="16" y1="2" y2="6" />
      <line x1="8" x2="8" y1="2" y2="6" />
      <line x1="3" x2="21" y1="10" y2="10" />
    </svg>
  );
}

function HomeIcon(props) {
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

function LogOutIcon(props) {
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
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
      <polyline points="16 17 21 12 16 7" />
      <line x1="21" x2="9" y1="12" y2="12" />
    </svg>
  );
}

function MapPinIcon(props) {
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
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function MenuIcon(props) {
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

function ShoppingBagIcon(props) {
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
      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
      <path d="M3 6h18" />
      <path d="M16 10a4 4 0 0 1-8 0" />
    </svg>
  );
}

function TrophyIcon(props) {
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
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
      <path d="M4 22h16" />
      <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
      <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
      <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
    </svg>
  );
}

function UserIcon(props) {
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
function BarChartIcon(props) {
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
