import Link from "next/link";
import { Button } from "./ui/button";


// components
import Nav from "./Nav";


const Header = () => {
  return <header className="py-8 lg:py-12 bg-pink-50/20 text-white ">
    <div className="container max-auto flex justify-between items-center">
        {/* logo */}
        <Link href="/">
            <h1>
                <span className="text-3xl font-semibold">Zer</span>
                Dev
                <span className="text-accent">.</span>
            </h1>
        </Link>

        {/* Desktop Nav */}
        {/* hide it in the mobile size */}
        <div className="hidden xl:flex">
            <Nav />
        </div>

    </div>
  </header>
}

export default Header
