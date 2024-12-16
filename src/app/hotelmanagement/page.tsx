"use client";

import NavBar from "@/components/pages/NavBar";
import { motion } from "framer-motion";
import {
  BarChartIcon as ChartBar,
  Building2,
  CircleDollarSign,
  Shield,
  Diamond,
} from "lucide-react";
import Image from "next/image";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

interface PillarProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
}

function Pillar({ title, description, icon, className }: PillarProps) {
  return (
    <motion.div
      className={`group relative overflow-hidden bg-white p-8 shadow-sm transition-all hover:shadow-md ${
        className || ""
      }`}
      whileHover={{ scale: 1.02 }}
      {...fadeIn}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-gray-50 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
      <div className="relative z-10">
        <div className="mb-4 inline-block  bg-gray-100 p-3">{icon}</div>
        <h3 className="mb-3 text-xl font-medium text-gray-900">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </motion.div>
  );
}

export default function HotelManagement() {
  return (
    <>
      <NavBar />
      <div className="min-h-screen bg-gray-50">
        {/* Intro Section */}
        <motion.section
          className="relative overflow-hidden bg-gradient-to-b from-gray-100 to-white py-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute inset-0 z-0">
            <Image
              src="/hotel3.jpg"
              alt="Hotel management dashboard"
              layout="fill"
              objectFit="cover"
              className="opacity-10"
            />
          </div>
          <div className="container relative z-10 mx-auto px-4">
            <div className="mx-auto max-w-4xl text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Diamond className="w-12 h-12 text-amber-400 mx-auto mb-6" />
              </motion.div>
              <motion.h1
                className="mb-6 text-4xl font-light tracking-tight text-gray-800 sm:text-5xl md:text-6xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                Gestão Hoteleira Inovadora
              </motion.h1>
              <motion.p
                className="mx-auto max-w-2xl text-lg text-gray-600"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                Descubra como a PRIZE Hotéis está revolucionando a administração
                de empreendimentos hoteleiros, desde a concepção até a operação
                diária, maximizando eficiência e rentabilidade.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="mt-8"
              ></motion.div>
            </div>
          </div>
        </motion.section>

        {/* Main Content */}
        <section id="gestao-hoteleira" className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="mx-auto max-w-4xl text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="mb-6 text-3xl font-light tracking-tight text-gray-800 sm:text-4xl">
                Nossa Abordagem à Gestão Hoteleira
              </h2>
              <p className="mb-16 text-gray-600 leading-relaxed">
                A PRIZE Hotéis traz uma abordagem holística à gestão hoteleira,
                abrangendo desde o desenvolvimento inicial até a operação
                diária. Nossa experiência no desenvolvimento de Hotéis,
                Condohotéis e Pousadas de alto padrão, em parceria com diversas
                incorporadoras e construtoras pelo Brasil, nos permite oferecer
                uma gestão completa e eficiente, garantindo o sucesso e a
                rentabilidade de cada empreendimento.
              </p>
            </motion.div>

            {/* Pillars Grid */}
            <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <Pillar
                icon={<ChartBar className="h-6 w-6 text-gray-600" />}
                title="Gestão de Receitas"
                description="Estratégias avançadas de revenue management para maximizar a ocupação e o RevPAR."
              />
              <Pillar
                icon={<CircleDollarSign className="h-6 w-6 text-gray-600" />}
                title="Controle de Custos"
                description="Otimização de despesas operacionais sem comprometer a qualidade do serviço."
              />
              <Pillar
                icon={<Shield className="h-6 w-6 text-gray-600" />}
                title="Excelência Operacional"
                description="Implementação de processos eficientes e treinamento contínuo da equipe."
              />
              <Pillar
                icon={<Building2 className="h-6 w-6 text-gray-600" />}
                title="Gestão Patrimonial"
                description="Manutenção preventiva e valorização constante do empreendimento."
              />
            </div>

            {/* Additional Info */}
            <div className="mt-20 grid gap-8 md:grid-cols-2">
              <motion.div className=" bg-white p-8 shadow-sm" {...fadeIn}>
                <h3 className="mb-4 text-xl font-medium text-gray-800">
                  Desenvolvimento de Projetos
                </h3>
                <p className="text-gray-600">
                  Nossa expertise abrange todas as etapas do desenvolvimento
                  hoteleiro, desde a viabilização do negócio até a montagem
                  final do empreendimento, garantindo projetos eficientes e
                  alinhados com as demandas do mercado.
                </p>
              </motion.div>
              <motion.div className=" bg-white p-8 shadow-sm" {...fadeIn}>
                <h3 className="mb-4 text-xl font-medium text-gray-800">
                  Gestão Operacional Equilibrada
                </h3>
                <p className="text-gray-600">
                  Nosso modelo de gestão se baseia no equilíbrio entre receitas,
                  custos, qualidade e valorização patrimonial, assegurando a
                  sustentabilidade e o sucesso a longo prazo de cada
                  empreendimento.
                </p>
              </motion.div>
            </div>

            {/* CTA Section */}
            {/*  <motion.div
              className="mt-20 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <button className="group inline-flex items-center gap-2 rounded-full bg-gray-800 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-gray-700">
                Conheça nossos casos de sucesso
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </motion.div> */}
          </div>
        </section>
      </div>
    </>
  );
}
