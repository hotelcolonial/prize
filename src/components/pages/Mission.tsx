"use client";

import { motion } from "framer-motion";
import {
  Star,
  Shield,
  Lightbulb,
  Users,
  TrendingUp,
  Globe,
} from "lucide-react";

export default function Mission() {
  return (
    <section className="bg-gradient-to-b from-white to-[#f8f5f0] py-24">
      <div className="container mx-auto px-4 md:px-6">
        {/* Mission & Vision */}
        <div className="max-w-7xl mx-auto mb-20">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="group"
            >
              <div className="relative">
                <h2 className="text-3xl font-light mb-8 tracking-wide text-gray-900">
                  Nossa missão
                </h2>
                <div className="h-px w-20 bg-gradient-to-r from-amber-400 to-amber-600 mb-8"></div>
                <p className="text-lg leading-relaxed text-gray-700">
                  Ser a administradora de hotéis que valoriza e respeita a
                  singularidade de cada parceiro, oferecendo uma gestão
                  personalizada que enaltece sua marca e promove excelência
                  operacional com base em respeito e integridade, destacando a
                  identidade do hotel e elevando a experiência dos hóspedes em
                  busca dos melhores resultados.
                </p>
              </div>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="group"
            >
              <div className="relative">
                <h2 className="text-3xl font-light mb-8 tracking-wide text-gray-900">
                  Nossa visão
                </h2>
                <div className="h-px w-20 bg-gradient-to-r from-amber-400 to-amber-600 mb-8"></div>
                <p className="text-lg leading-relaxed text-gray-700">
                  Ser reconhecida como referência em gestão hoteleira,
                  destacando-se pela preservação e valorização da marca dos
                  parceiros, com ética e inovação.
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-7xl mx-auto"
        >
          <h2 className="text-3xl font-light mb-16 tracking-wide text-center text-gray-900">
            Valores
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center items-start">
            {/* Value Cards */}
            <div className="p-8 bg-white hover:shadow-xl transition-shadow duration-300">
              <Shield className="w-10 h-10 text-amber-500 mb-6" />
              <h3 className="text-xl font-medium mb-4 text-gray-900">
                Respeito e Integridade
              </h3>
              <p className="text-gray-600">
                Preservar a autenticidade dos parceiros, promovendo um ambiente
                de confiança e ética.
              </p>
            </div>

            <div className="p-8 bg-white  hover:shadow-xl transition-shadow duration-300">
              <Star className="w-10 h-10 text-amber-500 mb-6" />
              <h3 className="text-xl font-medium mb-4 text-gray-900">
                Excelência
              </h3>
              <p className="text-gray-600">
                Superar expectativas em todos os aspectos do atendimento e da
                gestão.
              </p>
            </div>

            <div className="p-8 bg-white  hover:shadow-xl transition-shadow duration-300">
              <Lightbulb className="w-10 h-10 text-amber-500 mb-6" />
              <h3 className="text-xl font-medium mb-4 text-gray-900">
                Inovação
              </h3>
              <p className="text-gray-600">
                Implementar soluções criativas e eficazes para otimizar
                operações.
              </p>
            </div>

            <div className="p-8 bg-white hover:shadow-xl transition-shadow duration-300">
              <Users className="w-10 h-10 text-amber-500 mb-6" />
              <h3 className="text-xl font-medium mb-4 text-gray-900">
                Parceria e Transparência
              </h3>
              <p className="text-gray-600">
                Fomentar relações baseadas em comunicação aberta e colaboração.
              </p>
            </div>

            <div className="p-8 bg-white  hover:shadow-xl transition-shadow duration-300">
              <TrendingUp className="w-10 h-10 text-amber-500 mb-6" />
              <h3 className="text-xl font-medium mb-4 text-gray-900">
                Crescimento Sustentável
              </h3>
              <p className="text-gray-600">
                Promover práticas que assegurem resultados duradouros e
                responsáveis.
              </p>
            </div>

            <div className="p-8 bg-white  hover:shadow-xl transition-shadow duration-300">
              <Globe className="w-10 h-10 text-amber-500 mb-6" />
              <h3 className="text-xl font-medium mb-4 text-gray-900">
                Impacto Global
              </h3>
              <p className="text-gray-600">
                Expandir nossa visão e presença para gerar um impacto positivo
                além das fronteiras.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
