"use client";

import { motion } from "framer-motion";
import {
  Diamond,
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Twitter,
  Instagram,
} from "lucide-react";

export default function ContactForm() {
  return (
    <section className="bg-white py-24">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="flex items-center justify-center gap-4 mb-16">
          <Diamond className="w-8 h-8 text-amber-400" />
          <h2 className="text-4xl font-light tracking-tight text-gray-900">
            Contato
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="bg-white p-6 rounded-lg shadow-sm space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-amber-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-gray-900">
                    Avenida Senador Souza Naves, 851 - CRISTO REI
                  </p>
                  <p className="text-gray-600">CURITIBA - PR - 80050-152</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Phone className="w-6 h-6 text-amber-400" />
                <a
                  href="tel:(41) 3016-6771"
                  className="text-gray-900 hover:text-amber-500 transition-colors"
                >
                  (41) 3016-6771
                </a>
              </div>

              <div className="flex items-center gap-4">
                <Mail className="w-6 h-6 text-amber-400" />
                <a
                  href="mailto:adm@prizehoteis.com.br"
                  className="text-gray-900 hover:text-amber-500 transition-colors"
                >
                  adm@prizehoteis.com.br
                </a>
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-white p-6 rounded-lg shadow-sm space-y-6">
              <h3 className="text-2xl font-light text-gray-900">
                Horário de Funcionamento
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-amber-400 flex-shrink-0 mt-1" />
                  <div className="space-y-2">
                    <div>
                      <p className="text-gray-900">Segunda a Sexta-feira</p>
                      <p className="text-gray-600">9:00 às 18:00</p>
                    </div>
                    <div>
                      <p className="text-gray-900">Sábado</p>
                      <p className="text-gray-600">9:00 às 12:00</p>
                    </div>
                    <p className="text-gray-600">Fechado aos Domingos</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="space-y-4">
              <h3 className="text-2xl font-light text-gray-900">
                Siga-nos online
              </h3>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="p-2 rounded-full border border-gray-200 hover:border-amber-400 transition-colors"
                >
                  <Facebook className="w-5 h-5 text-gray-600 hover:text-amber-500 transition-colors" />
                </a>
                <a
                  href="#"
                  className="p-2 rounded-full border border-gray-200 hover:border-amber-400 transition-colors"
                >
                  <Twitter className="w-5 h-5 text-gray-600 hover:text-amber-500 transition-colors" />
                </a>
                <a
                  href="#"
                  className="p-2 rounded-full border border-gray-200 hover:border-amber-400 transition-colors"
                >
                  <Instagram className="w-5 h-5 text-gray-600 hover:text-amber-500 transition-colors" />
                </a>
              </div>
            </div>

            {/* Accessibility Notice */}
            <p className="text-gray-600 text-sm">
              Este é um ambiente de trabalho acessível. Pessoas com deficiência
              são bem-vindas para se candidatar.
            </p>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-colors"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-colors"
                />
                <input
                  type="tel"
                  placeholder="Numero telefone"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-colors"
                />
              </div>
              <div>
                <textarea
                  placeholder="Mensagem"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-colors min-h-[200px]"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-amber-500 hover:bg-amber-600 text-white font-medium py-3 px-4 rounded-md transition-colors"
              >
                Enviar mensagem
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
