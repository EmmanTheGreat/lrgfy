"use client";

import { useRouter } from "next/navigation";
import { twMerge } from "tailwind-merge";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
import { HiHome } from "react-icons/hi";

interface HeaderProps {
  children: React.ReactNode;
  className?: string;
}

const Header: React.FC<HeaderProps> = ({
  children,
  className
}) => {
  const router = useRouter();

  const handleLogout = () => {
    // Handle logout
  }

  return (
    <div className={twMerge(`
      h-fit
      bg-gradient-to-b
      from-amber-800
      p-6
    `)}>
      <div className="
        w-full
        mb-4
        items-center
        justify-between
      ">
        <div className="
          hidden
          md:flex
          gap-x-2
          items-center
        ">
          <button className="
          rounded-full
          bg-black
          flex
          items-center
          justify-center
          hover:opacity-75
          transition
        ">
            <RxCaretLeft className="text-white" size={35} />
          </button>
          <button 
          onClick={() => router.forward()}
          className="
            rounded-full
            bg-black
            flex
            items-center
            justify-center
            hover:opacity-75
            transition
          ">
            <RxCaretRight className="text-white" size={35} />
          </button>
        </div>
        <div className="flex md:hidden gap-x-2 items-center">
          <button>
            <HiHome />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;