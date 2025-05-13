import React, { useState } from "react";
import fotoapp1 from "../../public/image1.png";
import fotoapp2 from "../../public/image2.jpg";
import fotoapp3 from "../../public/image3.jpg";

function Comofunciona() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [fotoapp1, fotoapp2, fotoapp3];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <section id="how-it-works" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 max-w-5xl">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-10">
          Cómo Funciona
        </h2>
        <div className="flex flex-col lg:flex-row items-center gap-6 justify-between">
          {/* Carrusel de imágenes compacto */}
          <div className="lg:w-2/5 w-full relative">
            <div className="overflow-hidden rounded-lg shadow-md bg-white">
              <div
                className="flex transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {images.map((img, index) => (
                  <div
                    key={index}
                    className="min-w-full flex justify-center p-2"
                  >
                    <img
                      src={img}
                      alt={`App screenshot ${index + 1}`}
                      className="w-64 h-auto object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Controles del carrusel */}
            <div className="flex justify-center mt-3 space-x-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full ${
                    currentSlide === index ? "bg-blue-600" : "bg-gray-300"
                  }`}
                  aria-label={`Ir a slide ${index + 1}`}
                />
              ))}
            </div>

            {/* Flechas de navegación más pequeñas */}
            <button
              onClick={prevSlide}
              className="absolute left-1 top-1/2 -translate-y-1/2 bg-white/80 p-1 rounded-full shadow-sm hover:bg-white transition"
              aria-label="Anterior"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-1 top-1/2 -translate-y-1/2 bg-white/80 p-1 rounded-full shadow-sm hover:bg-white transition"
              aria-label="Siguiente"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>

          {/* Pasos - versión compacta */}
          <div className="lg:w-3/5 w-full lg:pl-8">
            <div className="mb-6 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition duration-300">
              <div className="flex items-start">
                <div className="bg-blue-600 text-white rounded-full h-8 w-8 flex items-center justify-center mr-3 mt-0 flex-shrink-0 text-sm">
                  1
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">
                    Descarga la App
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Disponible en Google Play. Instalación rápida en menos de 1
                    minuto.
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-6 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition duration-300">
              <div className="flex items-start">
                <div className="bg-blue-600 text-white rounded-full h-8 w-8 flex items-center justify-center mr-3 mt-0 flex-shrink-0 text-sm">
                  2
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Regístrate</h3>
                  <p className="text-gray-600 text-sm">
                    Crea tu perfil en 30 segundos y únete a tu comunidad de
                    seguridad.
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-6 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition duration-300">
              <div className="flex items-start">
                <div className="bg-blue-600 text-white rounded-full h-8 w-8 flex items-center justify-center mr-3 mt-0 flex-shrink-0 text-sm">
                  3
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Activa Alertas</h3>
                  <p className="text-gray-600 text-sm">
                    Presiona el botón rojo para alertar a tu comunidad en tiempo
                    real.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Comofunciona;
