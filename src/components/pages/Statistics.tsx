"use client";

import { motion } from "framer-motion";
import { Building2, Bed, DollarSign, TrendingUp, Users } from "lucide-react";
import { SVGProps, useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

// Definir tipos para las props del componente AnimatedStat
interface AnimatedStatProps {
  icon: React.FC<SVGProps<SVGSVGElement>>;
  value: number;
  label: string;
  suffix?: string;
  delay?: number;
}

const AnimatedStat: React.FC<AnimatedStatProps> = ({
  icon: Icon,
  value,
  label,
  suffix = "",
  delay = 0,
}) => {
  const ref = useRef<HTMLDivElement | null>(null); // Definir el tipo del ref
  const isInView = useInView(ref);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      let startTimestamp: number;
      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / 2000, 1);
        setCount(Math.floor(progress * value));
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }
  }, [isInView, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      className="flex flex-col items-center text-center"
    >
      <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-4 transition-all duration-300 hover:bg-gray-200">
        <Icon className="w-12 h-12 text-gray-800" />
      </div>
      <div className="text-3xl font-light text-gray-900 mb-1">
        {count}
        {suffix}
      </div>
      <div className="text-gray-600 text-sm">{label}</div>
    </motion.div>
  );
};

const Statistics: React.FC = () => {
  return (
    <section className="bg-white py-16 border-t border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          <AnimatedStat
            icon={Building2}
            value={23}
            label="Parceiros Comerciais"
            delay={0.1}
          />
          <AnimatedStat
            icon={Bed}
            value={1.3}
            label="Gestão de apartamentos (mil)"
            suffix="k"
            delay={0.2}
          />
          <AnimatedStat
            icon={DollarSign}
            value={18}
            label="Gestão de Receita anual (mil)"
            suffix="k"
            delay={0.3}
          />
          <AnimatedStat
            icon={TrendingUp}
            value={11}
            label="Taxa Anual de Crescimento"
            suffix="%"
            delay={0.4}
          />
          <AnimatedStat
            icon={Users}
            value={500}
            label="Gestão de colaboradores"
            delay={0.5}
          />
        </div>
      </div>
    </section>
  );
};

export default Statistics;
