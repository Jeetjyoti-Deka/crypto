import { NAV_LINKS } from "@/lib/constants";
import Image from "next/image";
import NavLink from "./NavLink";
import { Button } from "./ui/button";
import MobileNav from "./MobileNav";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-6 md:px-12 py-4 bg-white shadow-sm min-h-[72px]">
      <Image src="/next.svg" alt="logo" width={100} height={100} />
      <div className="md:flex items-center gap-x-7 hidden">
        {NAV_LINKS.map((link, i) => (
          <NavLink key={i} link={link} />
        ))}
        <Button className="bg-primary-blue text-white">Get Started</Button>
      </div>
      <div className="flex items-center justify-center md:hidden">
        <MobileNav />
      </div>
    </nav>
  );
};
export default Navbar;
