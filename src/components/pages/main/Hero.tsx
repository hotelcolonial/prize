"use client";

import { useState, useEffect } from "react";
import Banner from "./Banner";
import Image from "next/image";

const images = ["/hotel1.jpg", "/hotel2.jpg", "/hotel3.jpg", "/hotel4.jpg"];

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Cambia la imagen cada 5 segundos

    return () => clearInterval(interval);
  }, []);

  const handleDotClick = (index: number) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Imágenes de fondo */}
      {images.map((src, index) => (
        <Image
          key={src}
          src={src}
          alt={`Hotel background ${index + 1}`}
          layout="fill"
          objectFit="cover"
          priority={index === 0}
          className={`transition-opacity duration-1000 filter blur-sm ${
            index === currentImageIndex ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* Overlay oscuro */}
      <div className="absolute inset-0 bg-gray-600 bg-opacity-60" />

      {/* Contenido */}
      <div className="relative z-20 flex flex-col justify-between h-full">
        <div className="">
          <Banner />
        </div>

        {/* Texto en la parte inferior */}
        <div className="absolute bottom-16 w-full text-center z-30 px-4">
          <h1 className="text-gray-300 text-md md:text-xl font-medium italic font-cormorant">
            Sua marca, seu patrimônio, seu sucesso, nosso prêmio
          </h1>
        </div>

        {/* Indicadores de selección */}
        <div className="absolute bottom-8 w-full flex justify-center z-30">
          <div className="flex space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`size-2 rounded-full ${
                  index === currentImageIndex
                    ? "bg-white"
                    : "bg-gray-400 hover:bg-gray-300"
                } transition-colors duration-300`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
