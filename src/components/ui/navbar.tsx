import Link from "next/link";
import Menumobile from "./menumobile";
import NavbarCenter from "./navbarcenter";
import SearchBar from "./searchbar";

import Image from "next/image";

type NavbarProps = {
  className: string;
};

const Navbar: React.FC<NavbarProps> = ({ className }) => {
  return (
    <>
      <div className={`navbar ${className}`}>
        {/*NAV BAR START*/}
        <div className="navbar-start">
          <Link href={"/"}>
          <Image
            src="/images/logo.png"
            alt="logo de Yemag"
            className="lg:h-30 lg:w-30 w-16 border-mine-white lg:p-4 p-1 bg-mine-white rounded-xl shadow-xl"
            width={100}
            height={100}
          />
          </Link>   
        </div>

        {/*NAV BAR CENTER*/}
        <div className="navbar-center hidden lg:flex justify-around">
          <NavbarCenter />
        </div>

        {/*NAV BAR END*/}
        <div className="navbar-end flex flex-row justify-end items-center gap-4">
          <SearchBar />
          <Menumobile />
        </div>
      </div>
    </>
  );
};

export default Navbar;
