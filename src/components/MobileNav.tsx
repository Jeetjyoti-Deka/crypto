import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import NavLink from "./NavLink";
import { NAV_LINKS } from "@/lib/constants";

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Image src="/icons/menu.svg" alt="menu" width={30} height={30} />
      </SheetTrigger>
      <SheetContent>
        <div className="flex flex-col items-center mt-40 gap-y-6">
          {NAV_LINKS.map((link, i) => (
            <NavLink key={i} link={link} />
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
};
export default MobileNav;
