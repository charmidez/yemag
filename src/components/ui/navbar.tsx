import Link from "next/link";
import Menucss from "./menucss";

type NavbarProps = {
  className: string;
};

const Navbar: React.FC<NavbarProps> = ({ className }) => {
  return (
    <>

        <div className={`navbar ${className}`}>
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{" "}
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                <li>
                  <a href="/contact">Contact</a>
                </li>
                <li>
                  <a>Parent</a>
                  <ul className="p-2">
                    <li>
                      <a>Submenu 1</a>
                    </li>
                    <li>
                      <a>Submenu 2</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a>Item 3</a>
                </li>
              </ul>
            </div>
            <img src="/images/logo.png" alt="logo de Yemag" className="h-30 w-30 border-mine-white p-4 bg-mine-white rounded-xl shadow-xl" />
          </div>

          <div className="navbar-center hidden lg:flex justify-around">
            <ul className="menu menu-horizontal px-1 font-semibold">
              <li className="px-2">
              <Menucss linkMine="/" nameMenuMine="Accueil"></Menucss>
              </li>
              <li>
                <details>
                  <summary className="font-normal">Yemag Institut</summary>
                  <ul className="p-2">
                    <li>
                      <Menucss linkMine="/yemag-institut/presentation" nameMenuMine="Présentation"></Menucss>
                    </li>
                    <li>
                      <a>Administration et corps enseignant</a>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
              <a href="/contact">Contact</a>
              </li>
            </ul>
          </div>
          <div className="navbar-end">
            <a className="btn">Button</a>
          </div>
        </div>
    </>
  );
};

export default Navbar;
