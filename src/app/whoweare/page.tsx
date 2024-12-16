"use client";

import Mission from "@/components/pages/Mission";
import NavBar from "@/components/pages/NavBar";
import WhoWeAre from "@/components/pages/WhoWeAre";
import { motion } from "framer-motion";
import { Diamond } from "lucide-react";
import Image from "next/image";
import React from "react";

const WhoWeArePage = () => {
  return (
    <>
      <NavBar />
      <section className="relative bg-gradient-to-b from-white to-gray-50 overflow-hidden ">
        <div className="container mx-auto px-4 py-24 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <Diamond className="w-12 h-12 text-amber-400 mx-auto mb-8" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-800 mb-6">
              Quem Somos
            </h1>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed">
              Na Prize Hotéis, elevamos a arte da hospitalidade através de uma
              gestão hoteleira personalizada e inovadora, criando experiências
              únicas que encantam hóspedes e maximizam o potencial de cada
              empreendimento.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative h-96 md:h-[32rem] mt-8 md:mt-0"
        >
          <Image
            src="/hotel4.jpg"
            alt="Luxury Hotel Interior"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
        </motion.div>
      </section>

      <WhoWeAre />
      <Mission />
    </>
  );
};

export default WhoWeArePage;
