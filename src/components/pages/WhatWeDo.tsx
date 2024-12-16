"use client";

import { motion } from "framer-motion";
import { Diamond } from "lucide-react";

interface ServiceColumnProps {
  title: string;
  description: string;
  features: string[];
  delay?: number;
}

const WhatWeDo = () => {
  return (
    <section className="bg-[#FAFAFA] py-24">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <div className="inline-block text-amber-400 mb-4 px-3 py-1 bg-amber-50 rounded-full text-sm">
            Nossa expertise
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-gray-900 mb-6">
            Gestão hoteleira completa
          </h1>
          <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
            Na Prize Hotéis, oferecemos uma gestão completa e personalizada para
            hotéis independentes, visando maximizar a eficiência operacional e
            aprimorar a experiência dos hóspedes.
          </p>
        </motion.div>

        {/* Services Section */}
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-0 divide-y md:divide-y-0 md:divide-x divide-gray-200">
            <ServiceColumn
              title="Implantação e Gestão"
              description="Cuidamos de todo o processo de implantação de novas unidades e gestão operacional, garantindo eficiência e excelência."
              features={[
                "Implantação de novas unidades",
                "Gestão operacional completa",
                "Otimização de processos",
              ]}
              delay={0.2}
            />

            <ServiceColumn
              title="Estratégia e Marketing"
              description="Desenvolvemos estratégias personalizadas para aumentar a visibilidade e rentabilidade do seu hotel."
              features={[
                "Consultoria estratégica",
                "Marketing digital e tradicional",
                "Gestão de receitas",
              ]}
              delay={0.4}
            />

            <ServiceColumn
              title="Tecnologia e Inovação"
              description="Implementamos soluções tecnológicas modernas para otimizar a operação e melhorar a experiência."
              features={[
                "Sistemas de gestão",
                "Soluções digitais",
                "Inovação contínua",
              ]}
              delay={0.6}
            />
          </div>
        </div>

        {/* Footer Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="max-w-3xl mx-auto text-center mt-20"
        >
          <Diamond className="w-6 h-6 text-amber-400 mx-auto mb-6" />
          <p className="text-xl md:text-2xl font-light text-gray-800">
            &quot;Nosso maior premio é ser parceiros de confiança para nossos
            clientes, fornecendo suporte continuo e adaptado às necessidades de
            cada hotel.&quot;
          </p>
        </motion.div>
      </div>
    </section>
  );
};

const ServiceColumn: React.FC<ServiceColumnProps> = ({
  title,
  description,
  features,
  delay = 0,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      className="px-8 py-12 md:py-16 group"
    >
      <div className="max-w-xs mx-auto md:mx-0">
        <h3 className="text-2xl font-light text-gray-900 mb-4 group-hover:text-amber-500 transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 mb-8 leading-relaxed">{description}</p>
        <ul className="space-y-4">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-gray-700">
              <div className="w-1.5 h-1.5 rounded-full bg-amber-400 mr-3" />
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default WhatWeDo;
