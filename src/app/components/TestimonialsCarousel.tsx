"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence} from 'framer-motion';

interface Testimonial{
    id: number;
    name: string;
    role: string;
    text: string;
}

const testimonials: Testimonial[] = [
    {
        id: 1,
        name: "João Silva",
        role: "CEO da Empresa X",
        text: "Ótimo serviço! Superou minhas expectativas.",
    },
    {
        id: 2,
        name: "Maria Oliveira",
        role: "Gerente de Marketing",
        text: "A equipe é profissional e atenciosa",
    },
    {
        id: 3,
        name: "Carlos Souza",
        role: "Desenvolvedor",
        text: "Recomendo a todos! Melhor experiência que já tive.",
    },
    {
        id: 4,
        name: "Ana Lima",
        role: "Designer Gráfica",
        text: "Muito satisfeita com o resultado!",
    },
]

export default function TestimonialsCarousel(){
    const [currentIndex, setCurrentIndex] = useState<number>(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
        }, 5000)
        return () => clearInterval(interval);
    }, [])

    const prevSlide = () => {
        setCurrentIndex((prev) => 
        prev === 0 ? testimonials.length - 1 : prev - 1
    );
    };

    const nextSlide = () => {
        setCurrentIndex((prev) => 
        prev === testimonials.length - 1 ? 0 : prev + 1
    );
    };

    return(
        <div className="relative w-full max-w-3xl mx-auto p-4 overflow-hidden">
            {/* conteudo do depoimento */}
            <AnimatePresence mode="wait">
                <motion.div 
                key={testimonials[currentIndex].id}
                initial={{ opacity: 0, x:50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration:0.5 }}
                className="bg-white rounded-lg shadow-md p-6 text-center">
                    <p className="text-gray-700 mb-4 italic">
                        `{testimonials[currentIndex].text}`
                    </p>
                    <h3 className="text-lg font-semibold text-gray-900">
                        {testimonials[currentIndex].name}
                    </h3>
                    <span className="text-sm text-gray-500">
                        {testimonials[currentIndex].role}
                    </span>
                </motion.div>
            </AnimatePresence>
            

            {/* botoes de navegacao */}
            <button 
                onClick={prevSlide}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 rounded-full p-2"
                aria-label="Previous Slide"
            >
                &#8592;
            </button>

            <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 rounded-full p-2"
                aria-label="Next Slide"
            >
                &#8594;
            </button>

            {/* indicadores */}
            <div className="flex justify-center mt-4 space-x-2">
                {testimonials.map((_, index) => (
                    <div
                        key={index}
                        className={`h-2 w-2 rounded-full ${currentIndex === index ? "bg-gray-900" : "bg-gray-300"}`}
                    >
                    </div>
                ))}
            </div>
        </div>
    )
}