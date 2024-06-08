import Link from "next/link";
import { Button } from "./ui/button";


// components
import Nav from "./Nav";
import MobileNav from "./MobileNav";


const Header = () => {
  return <header className="py-8 lg:py-12  text-white ">
    <div className="container max-auto flex justify-between items-center">
        {/* logo */}
        <Link href="/">
            <h1 className="text-4xl font-semibold">
                <span className="text-3xl font-semibold">Zer</span>
                Dev<span className="text-accent">.</span>
            </h1>
        </Link>

        {/* Desktop Nav  & hire me*/}
        {/* hide it in the mobile size */}
        <div className="hidden xl:flex items-center gap-8">
            <Nav />
            <Link href="/contact">
                <Button className="ml-4">Hire Me</Button>
            </Link>
        </div>

        {/* Mobile Nav */}
        {/* hide it in the desktop size */}
        <div className="xl:hidden flex items-center ">
            <MobileNav />
        </div>

    </div>
  </header>
}

export default Header
