"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Menucss from "./menucss";

function NavbarCenter() {
  // Refs pour chaque menu
  const institutRef = useRef<HTMLDetailsElement>(null);
  const formationRef = useRef<HTMLDetailsElement>(null);
  const voyagesRef = useRef<HTMLDetailsElement>(null);

  // States d'ouverture par menu
  const [openInstitut, setOpenInstitut] = useState(false);
  const [openFormation, setOpenFormation] = useState(false);
  const [openVoyages, setOpenVoyages] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    // À chaque changement de page : fermer tous les menus
    //institutRef.current?.open && (institutRef.current.open = false);
    //formationRef.current?.open && (formationRef.current.open = false);
    //voyagesRef.current?.open && (voyagesRef.current.open = false);

    if (institutRef.current?.open) {
  institutRef.current.open = false;
}
if (formationRef.current?.open) {
  formationRef.current.open = false;
}
if (voyagesRef.current?.open) {
  voyagesRef.current.open = false;
}


    setOpenInstitut(false);
    setOpenFormation(false);
    setOpenVoyages(false);
  }, [pathname]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        institutRef.current &&
        !institutRef.current.contains(event.target as Node)
      ) {
        institutRef.current.open = false;
        setOpenInstitut(false);
      }
      if (
        formationRef.current &&
        !formationRef.current.contains(event.target as Node)
      ) {
        formationRef.current.open = false;
        setOpenFormation(false);
      }
      if (
        voyagesRef.current &&
        !voyagesRef.current.contains(event.target as Node)
      ) {
        voyagesRef.current.open = false;
        setOpenVoyages(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="navbar-center hidden lg:flex justify-around">
      <ul className="menu menu-horizontal px-1 font-semibold">

        {/* MENU : ACCUEIL */}
        <li className="px-1">
          <Menucss linkMine="/" nameMenuMine="Accueil" />
        </li>

        {/* MENU : YEMAG INSTITUT */}
        <li className="px-1">
          <details ref={institutRef}>
            <summary
              className="font-normal px-8"
              onClick={() => setOpenInstitut((prev) => !prev)}
            >
              Yemag Institut
            </summary>
            <ul
              className={`p-2 transition-all duration-300 ease-in-out ${
                openInstitut ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0 overflow-hidden"
              }`}
            >
              <li className="border-b-2 border-gray-100">
                <Menucss linkMine="/yemag-institut/presentation" nameMenuMine="Présentation" />
              </li>
              <li className="border-b-2 border-gray-100">
                <Menucss linkMine="/yemag-institut/administration" nameMenuMine="Administration et corps enseignant" />
              </li>
              <li>
                <Menucss linkMine="/yemag-institut/evenements" nameMenuMine="Grands Événements" />
              </li>
            </ul>
          </details>
        </li>

        {/* MENU : FORMATION */}
        <li className="px-1">
          <details ref={formationRef}>
            <summary
              className="font-normal px-8"
              onClick={() => setOpenFormation((prev) => !prev)}
            >
              Formation
            </summary>
            <ul
              className={`p-2 transition-all duration-300 ease-in-out ${
                openFormation ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0 overflow-hidden"
              }`}
            >
              <li className="border-b-2 border-gray-100">
                <Menucss linkMine="/formation/inscription" nameMenuMine="Inscription" />
              </li>
              <li className="border-b-2 border-gray-100">
                <Menucss linkMine="/formation/nos-formations" nameMenuMine="Nos Formations" />
              </li>
              <li>
                <Menucss linkMine="/formation/calendrier-departementale" nameMenuMine="Calendrier Départemental" />
              </li>
            </ul>
          </details>
        </li>

        {/* MENU : VOYAGES */}
        <li className="px-1">
          <details ref={voyagesRef}>
            <summary
              className="font-normal px-8"
              onClick={() => setOpenVoyages((prev) => !prev)}
            >
              Voyages
            </summary>
            <ul
              className={`p-2 transition-all duration-300 ease-in-out ${
                openVoyages ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0 overflow-hidden"
              }`}
            >
              <li className="border-b-2 border-gray-100">
                <Menucss linkMine="/voyages/procedure" nameMenuMine="Procédure de voyage" />
              </li>
              <li className="border-b-2 border-gray-100">
                <Menucss linkMine="/voyages/arrivee" nameMenuMine="Arrivée en Allemagne" />
              </li>
            </ul>
          </details>
        </li>

        {/* MENU : CONTACT */}
        <li className="px-1">
          <Menucss linkMine="/contact" nameMenuMine="Contact" />
        </li>

      </ul>
    </div>
  );
}

export default NavbarCenter;
