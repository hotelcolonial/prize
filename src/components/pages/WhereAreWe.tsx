"use client";

import { motion } from "framer-motion";
import { Diamond, Play, MapPin } from "lucide-react";
import { useState } from "react";

export default function WhereAreWe() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="bg-white py-24">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="flex items-center justify-center gap-4 mb-16">
          <Diamond className="w-8 h-8 text-amber-400" />
          <h2 className="text-4xl font-light tracking-tight text-gray-900">
            Onde estamos
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Video Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative aspect-video rounded-2xl overflow-hidden group"
          >
            {!isPlaying ? (
              <>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />
                <button
                  onClick={() => setIsPlaying(true)}
                  className="absolute inset-0 flex items-center justify-center group"
                >
                  <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                    <Play className="w-6 h-6 text-gray-900 ml-1" />
                  </div>
                </button>
              </>
            ) : (
              <video autoPlay controls className="w-full h-full object-cover">
                <source src="/your-video.mp4" type="video/mp4" />
                Seu navegador não suporta o elemento de vídeo.
              </video>
            )}
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-50 rounded-full">
              <MapPin className="w-5 h-5 text-amber-500" />
              <span className="text-amber-800 text-sm font-medium">
                Foz do Iguaçu
              </span>
            </div>

            <div className="space-y-6 text-gray-600">
              <p className="text-xl leading-relaxed">
                Com presença estratégica em Foz do Iguaçu desde 2011, atendemos
                hotéis em todo o Brasil, oferecendo suporte presencial e remoto.
              </p>

              <p className="text-lg leading-relaxed">
                Nossa equipe está preparada para prestar consultoria e serviços
                personalizados, garantindo que nossos clientes recebam o melhor
                acompanhamento, onde quer que estejam. Seja em grandes centros
                urbanos ou em destinos turísticos emergentes, estamos prontos
                para atuar com a mesma dedicação e excelência.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
