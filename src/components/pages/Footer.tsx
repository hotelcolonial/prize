"use client";

import { motion } from "framer-motion";
import {
  Diamond,
  MapPin,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Instagram,
} from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <Link href="/" className="flex items-center space-x-2">
              <Diamond className="w-8 h-8 text-amber-400" />
              <span className="text-2xl font-light text-gray-900">
                Prize Hotéis
              </span>
            </Link>
            <p className="text-gray-600">
              Gestão hoteleira de excelência, valorizando a identidade única de
              cada empreendimento.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-medium text-gray-900">Links Rápidos</h3>
            <ul className="space-y-2">
              {["Início", "Sobre Nós", "Serviços", "Contato"].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-gray-600 hover:text-amber-500 transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-medium text-gray-900">Contato</h3>
            <ul className="space-y-2">
              <li className="flex items-start space-x-2">
                <MapPin className="w-5 h-5 text-amber-400 mt-0.5" />
                <span className="text-gray-600">
                  Avenida Senador Souza Naves, 851 - CRISTO REI, CURITIBA - PR -
                  80050-152
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-5 h-5 text-amber-400" />
                <a
                  href="tel:(41) 3016-6771"
                  className="text-gray-600 hover:text-amber-500 transition-colors"
                >
                  (41) 3016-6771
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-5 h-5 text-amber-400" />
                <a
                  href="mailto:adm@prizehoteis.com.br"
                  className="text-gray-600 hover:text-amber-500 transition-colors"
                >
                  adm@prizehoteis.com.br
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Social Media and Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-medium text-gray-900">Siga-nos</h3>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Instagram].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="p-2 rounded-full border border-gray-200 hover:border-amber-400 transition-colors"
                >
                  <Icon className="w-5 h-5 text-gray-600 hover:text-amber-500 transition-colors" />
                </a>
              ))}
            </div>
            <form className="mt-4">
              <label htmlFor="email-subscription" className="sr-only">
                Inscreva-se para nossa newsletter
              </label>
              <div className="flex">
                <input
                  type="email"
                  id="email-subscription"
                  placeholder="Seu e-mail"
                  className="flex-grow px-4 py-2 bg-white border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-amber-500 text-white rounded-r-md hover:bg-amber-600 transition-colors"
                >
                  Inscrever
                </button>
              </div>
            </form>
          </motion.div>
        </div>

        {/* Copyright and Accessibility Notice */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 pt-8 border-t border-gray-200 text-center"
        >
          <p className="text-gray-600 text-sm">
            &copy; {currentYear} Prize Hotéis. Todos os direitos reservados.
          </p>
          <p className="text-gray-500 text-xs mt-2">
            Este é um ambiente de trabalho acessível. Pessoas com deficiência
            são bem-vindas para se candidatar.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
