"use client";

import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { MenuIcon } from "lucide-react";
import Menu from "./Menu";
import PrizeLuxuryLogo from "../PrizeLuxuryLogo";
import { useMediaQuery } from "react-responsive"; // Si usas react-responsive

const slogans = [
  "Gestão hoteleira segura e eficiente",
  "Transformando confiança em recompensas",
  "Conduzindo a gestão hoteleira com confiança e excelência",
];

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showOnlyDiamond, setShowOnlyDiamond] = useState(false);

  const is2XL = useMediaQuery({ query: "(min-width: 1536px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 640px)" });
  const logoYOffset = isMobile ? "-44vh" : is2XL ? "-46vh" : "-43vh"; // Mobile: 45vh, 2XL: 46vh, demás: 44vh
  const bannerRef = useRef(null);
  const { scrollY } = useScroll();
  const bannerOpacity = useTransform(scrollY, [0, 100], [1, 0]);
  const navBackgroundOpacity = useTransform(scrollY, [0, 100], [0, 0.9]);
  const logoScale = useTransform(scrollY, [0, 300], [2.3, 1.6]);
  const logoY = useTransform(scrollY, [0, 300], ["0%", logoYOffset]);
  const menuY = useTransform(scrollY, [0, 300], ["5vh", "0vh"]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slogans.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const unsubscribe = scrollY.onChange((latest) => {
      setShowOnlyDiamond(latest > 150);
    });
    return () => unsubscribe();
  }, [scrollY]);

  return (
    <>
      <motion.div
        ref={bannerRef}
        className="flex items-center sm:py-3 justify-center bg-gray-200 overflow-hidden"
        style={{ opacity: bannerOpacity }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{
              opacity: 0,
              y: -50,
              transition: { duration: 0.8, ease: "easeInOut" },
            }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="text-xs font-interlight underline underline-offset-4 decoration-[0.5px] font-light text-center py-4"
          >
            {slogans[currentIndex]}
          </motion.div>
        </AnimatePresence>
      </motion.div>
      <motion.div
        className="fixed top-0 left-0 right-0 z-50 flex flex-col items-center justify-center"
        style={{
          height: "100vh",
          pointerEvents: "none",
        }}
      >
        <motion.div
          className="absolute inset-0 bg-white h-[6em]"
          style={{ opacity: navBackgroundOpacity }}
        />
        <motion.div
          className="relative z-10"
          style={{
            y: logoY,
            scale: logoScale,
            marginTop: useTransform(scrollY, [0, 300], ["0px", "0px"]),
          }}
        >
          <PrizeLuxuryLogo
            className="transform scale-150"
            showOnlyDiamond={showOnlyDiamond}
          />
        </motion.div>
        <motion.div
          className="absolute top-0 right-0 p-4 mr-3 mt-4"
          style={{ y: menuY }}
        >
          <button
            onClick={() => setIsMenuOpen(true)}
            className="p-2 hover:bg-gray-100 flex gap-2 rounded-full"
            aria-label="Open menu"
            style={{ pointerEvents: "auto" }}
          >
            <MenuIcon className="h-6 w-6" /> Menu
          </button>
        </motion.div>
      </motion.div>

      <AnimatePresence>
        {isMenuOpen && (
          <Menu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
        )}
      </AnimatePresence>
    </>
  );
};

export default Banner;
