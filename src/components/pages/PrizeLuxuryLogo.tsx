"use client";

import { motion } from "framer-motion";

interface PrizeLuxuryLogoProps {
  className?: string;
  showOnlyDiamond?: boolean;
}

export default function PrizeLuxuryLogo({
  className = "",
  showOnlyDiamond = false,
}: PrizeLuxuryLogoProps) {
  return (
    <motion.div
      className={`flex flex-col items-center ${className}`}
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.img
        src="/logoprize.svg" // Cambia esto por la ruta correcta
        alt="Prize Luxury Logo"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300, damping: 15 }}
        className="w-[26px] h-[23px] -mb-2" // Ajusta el tamaño según sea necesario
      />
      {!showOnlyDiamond && (
        <motion.div
          className="text-center mt-2 -space-y-1 font-serif"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <h1 className="text-primary-blue text-3xl font-serif tracking-widest font-black">
            PRIZE
          </h1>
          <p className="text-primary-yellow text-sm tracking-[0.1em] font-black uppercase">
            Hotéis
          </p>
        </motion.div>
      )}
    </motion.div>
  );
}
