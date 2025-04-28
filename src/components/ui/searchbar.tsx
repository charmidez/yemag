
"use client";

import { useState } from "react";

function SearchBar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Bouton de recherche */}
      <button
        onClick={handleToggle}
        className="p-2 border-mine-red border-2 bg-mine-red rounded-full hover:shadow-lg"
      >
        <img
          src="/images/search.svg"
          alt="Search"
          className="h-4 w-4"
        />
      </button>

      {/* Barre de recherche pleine page */}
      {isOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-red-900 opacity-75 flex justify-center items-center transition-all duration-300 ease-in-out z-40"
          onClick={handleToggle}
        >
          <div
            className="w-full max-w-4xl bg-white p-4 rounded-lg flex items-center"
            onClick={(e) => e.stopPropagation()} // Empêche de fermer quand on clique à l'intérieur
          >
            <input
              type="text"
              placeholder="Rechercher..."
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
            <button
              onClick={handleToggle}
              className="ml-2 text-xl text-gray-500"
            >
              ❌
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default SearchBar;
