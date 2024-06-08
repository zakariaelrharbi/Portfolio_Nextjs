"use client";
// Objective: Create a mobile navigation component.

import { Sheet, SheetContent, SheetTrigger } from "../components/ui/sheet"; // Adjust the path as needed
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from 'react-icons/ci'; 

const links = [
  { 
    name: "Home",
    path: "/",
  },
  { 
    name: "Services",
    path: "/services",
  },
  { 
    name: "Resume",
    path: "/resume",
  },
  { 
    name: "Work",
    path: "/work",
  },
  { 
    name: "Contact",
    path: "/contact",
  },
];

const MobileNav = () => {
  const pathname = usePathname();
  
  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center" aria-label="Open menu">
        <CiMenuFries className="text-[32px] text-accent"/>
      </SheetTrigger>
      <SheetContent className="flex flex-col gap-8 text-center pt-[100px]">
        <nav className="flex flex-col justify-center items-center gap-8">
            {links.map((link, index) => {
            return <Link 
                href={link.path} 
                key={index}
                className={`text-l capitalize font-medium transition-all ${
                link.path === pathname && "text-accent border-b-2 border-accent" 
                }`}
                aria-current={link.path === pathname ? "page" : undefined}
            >
                {link.name}
            </Link>
            }
            )}
        </nav>
        </SheetContent>
    </Sheet>
    );
}

export default MobileNav;
