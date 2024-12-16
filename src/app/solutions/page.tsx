"use client";

import NavBar from "@/components/pages/NavBar";
import { motion } from "framer-motion";
import { CheckCircle, Diamond } from "lucide-react";

export default function PrizeClientList() {
  const services = [
    "Estratégias Inteligentes para OTA's",
    "Otimização para Aumentar as Vendas via Motor",
    "Estudo de Mercado e Concorrências",
    "Revenue Management para Hotéis",
    "Análise dos Indicadores (TrevPAR, RevPAR, etc.)",
    "Diagnóstico do Hotel (Benchmarking)",
    "Análise da Cesta Competitiva",
    "Terceirização da Central de Reservas do Seu Hotel",
    "Desenvolvimento de Sites para Aumentar as Vendas",
    "Reposicionamento da Marca do Hotel no Mercado",
    "Criação de Campanhas Digitais Estratégias",
    "Anúncios no Facebook, Instagram, Youtube, Google",
    "Campanhas de E-mail Marketing Objetivas",
    "Gestão de Redes Sociais para Hotéis",
    "Mensuração dos Dados das Campanhas",
    "Desenvolvimento de Materiais Gráficos",
  ];

  return (
    <section className="bg-gradient-to-b from-white to-[#f8f5f0] py-24">
      <NavBar />
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <Diamond className="w-12 h-12 text-amber-400 mx-auto mb-6" />
          <h1 className="text-4xl font-light mb-6 tracking-wide text-gray-900">
            Torne-se um Cliente PRIZE
          </h1>
          <div className="h-px w-20 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto mb-6"></div>
          <p className="text-xl leading-relaxed text-gray-700">
            Impulsione a lucratividade do seu hotel. Maximize suas reservas
            diretas e obtenha suporte completo para aumentar a rentabilidade do
            seu hotel.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <ul className="space-y-4 ">
            {services.map((service, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="flex items-start"
              >
                <CheckCircle className="w-6 h-6 text-amber-500 mr-4 flex-shrink-0 mt-1" />
                <span className="text-lg text-gray-700">{service}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-4xl mx-auto text-center mt-16"
        ></motion.div>
      </div>
    </section>
  );
}
