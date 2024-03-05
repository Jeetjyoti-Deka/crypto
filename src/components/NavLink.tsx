import Link from "next/link";

type NavLinkProps = {
  link: {
    label: string;
    route: string;
  };
};

const NavLink = ({ link }: NavLinkProps) => {
  return (
    <Link href={link.route} className="text-sm font-semibold">
      {link.label}
    </Link>
  );
};
export default NavLink;
