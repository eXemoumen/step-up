/**
 * v0 by Vercel.
 * @see https://v0.dev/t/0HgRtaj8XyV
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Component() {
  return (
    <div className=" p-4 max-w-md mx-auto rounded-lg shadow-lg h-screen">
      <div className="text-center font-bold text-lg mb-2">Magazin</div>
      <div className="text-center text-sm mb-4">Credit = 2000 P</div>
      <div className="space-y-3">
        <div className="bg-[#ff0000] text-white rounded-lg">
          <Button className="w-full flex items-center justify-between px-4 py-3">
            <span>OOREDOO</span>
            <div className="flex items-center">
              <span className="mr-2">100 P</span>
              <ShoppingCartIcon className="text-white" />
            </div>
          </Button>
        </div>
        <div className="bg-[#22c55e] text-white rounded-lg">
          <Button className="w-full flex items-center justify-between px-4 py-3">
            <span>MOBILIS</span>
            <div className="flex items-center">
              <span className="mr-2">50 P</span>
              <ShoppingCartIcon className="text-white" />
            </div>
          </Button>
        </div>
        <div className="bg-[#ec4899] text-white rounded-lg">
          <Button className="w-full flex items-center justify-between px-4 py-3">
            <span>DJEZZY</span>
            <div className="flex items-center">
              <span className="mr-2">100 P</span>
              <ShoppingCartIcon className="text-white" />
            </div>
          </Button>
        </div>
      </div>
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-3 flex justify-around">
        <Link href={"/home"}>
          <HomeIcon className="text-gray-500" />
        </Link>
        <Link href={"/market"}>
          <BarChartIcon className="text-gray-500" />
        </Link>
        <Link href={"/profile"}>
          <UserIcon className="text-gray-500" />
        </Link>
      </div>
    </div>
  );
}

function HomeIcon(props:any) {
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
function BarChartIcon(props:any) {
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
function SearchIcon(props:any) {
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
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

function ShoppingCartIcon(props:any) {
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
      <circle cx="8" cy="21" r="1" />
      <circle cx="19" cy="21" r="1" />
      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
    </svg>
  );
}

function UserIcon(props:any) {
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
