"use client";

import { motion } from "framer-motion";
import { X, Diamond, Phone, MapPin } from "lucide-react";
import Link from "next/link";

interface MenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const menuItems = [
  { title: "Home", href: "/" },
  { title: "Quem Somos", href: "/whoweare" },
  { title: "Gestão Hoteleira", href: "/hotelmanagement" },
  { title: "Soluções", href: "/solutions" },
  { title: "Hotéis", href: "/hoteis" },
];

const Menu = ({ isOpen, onClose }: MenuProps) => {
  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
          onClick={onClose}
        />
      )}

      {/* Menu Panel */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: isOpen ? 0 : "100%" }}
        transition={{ type: "spring", damping: 20, stiffness: 100 }}
        className="fixed top-0 right-0 h-full w-80 bg-white z-50 shadow-xl overflow-y-auto"
        style={{
          backgroundImage: "url('/subtle-pattern.png')",
          backgroundRepeat: "repeat",
        }}
      >
        <div className="p-6">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="h-6 w-6" />
          </button>

          {/* Logo */}
          <div className="flex items-center justify-center mb-8">
            <Diamond className="size-6 text-primary-yellow" />
            <span className="ml-2 text-xl font-light text-gray-800">
              Prize Hotéis
            </span>
          </div>

          {/* Main Menu Items */}
          <nav className="space-y-8">
            <div className="space-y-6">
              {menuItems.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="block text-base font-medium text-primary-blue hover:text-amber-500 transition-colors"
                >
                  {item.title}
                </Link>
              ))}
            </div>

            <hr className="border-gray-200" />

            {/* Contact Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-gray-800">Contato</h3>
              <Link
                href="tel:+551234567890"
                className="flex items-center text-gray-600 hover:text-amber-500 transition-colors"
              >
                <Phone className="h-5 w-5 mr-2" />
                <span>+55 (12) 3456-7890</span>
              </Link>
              <div className="flex items-start text-gray-600">
                <MapPin className="h-5 w-5 mr-2 mt-1 flex-shrink-0" />
                <span>Av. Exemplo, 123 - São Paulo, SP</span>
              </div>
            </div>
          </nav>

          {/* Footer */}
          <div className="absolute bottom-6 left-6 right-6">
            <hr className="border-gray-200 mb-4" />
            <div className="flex justify-between items-center">
              <Link
                href="/politica-privacidade"
                className="text-sm text-gray-500 hover:text-amber-500 transition-colors"
              >
                Política de Privacidade
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Menu;
