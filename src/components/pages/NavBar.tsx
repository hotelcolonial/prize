"use client";

import { useState } from "react";
import { MenuIcon } from "lucide-react";
import Menu from "./main/Menu";
import PrizeLuxuryLogo from "./PrizeLuxuryLogo";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 py-2 bg-white">
        <PrizeLuxuryLogo className="h-8 w-auto" showOnlyDiamond={true} />
        <p>Prize Hoteis</p>
        <button
          onClick={() => setIsMenuOpen(true)}
          className="p-2 hover:bg-gray-100 flex items-center gap-2 rounded-full"
          aria-label="Open menu"
        >
          <MenuIcon className="h-6 w-6" /> Menu
        </button>
      </div>

      <Menu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
};

export default NavBar;
