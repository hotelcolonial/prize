"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Diamond } from "lucide-react";

function Counter({ end, label }: { end: number; label: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      let startTimestamp: number;
      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / 2000, 1);
        setCount(Math.floor(progress * end));
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }
  }, [isInView, end]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-5xl md:text-6xl font-light text-primary-blue mb-2">
        {count}+
      </div>
      <div className="text-xl text-gray-600">{label}</div>
    </div>
  );
}

export default function OurBrand() {
  return (
    <section className="bg-gradient-to-br from-white to-purple-50/30 py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h2 className="text-3xl md:text-4xl font-light text-primary-blue leading-tight">
              Sua marca, seu patrimônio, seu sucesso, nosso prêmio.
            </h2>

            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p>
                Na Prize Hotéis, valorizamos a identidade única de cada
                empreendimento. Nossa missão é atuar como parceiros estratégicos
                que respeitam e enaltecem a marca dos hotéis parceiros, sem
                descaracterizá-los.
              </p>

              <p>
                Com soluções inovadoras e uma abordagem personalizada,
                transformamos o potencial do seu hotel em uma vantagem
                competitiva que cativa os hóspedes e promove um crescimento
                sustentável.
              </p>

              <p>
                Ao trabalhar com a Prize Hotéis, você tem ao seu lado uma equipe
                dedicada que otimiza operações, desenvolve estratégias de
                marketing eficazes e garante uma gestão excepcional.
              </p>

              <p className="font-medium text-primary-blue">
                Seu sucesso é a nossa maior conquista — e estamos aqui para
                destacar a singularidade do seu hotel no mercado.
              </p>
            </div>
          </motion.div>

          {/* Right Column - Statistics */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:pl-12 lg:border-l border-purple-100"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-light text-primary-blue mb-2">
                Nossos números
              </h2>
              <Diamond className="w-6 h-6 text-primary-yellow mx-auto" />
            </div>

            <div className="grid gap-12">
              <Counter end={1500} label="Unidades Habitacionais" />
              <Counter end={25} label="Milhões em Receita Anual" />
              <Counter end={12} label="Unidades Hoteleiras" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
