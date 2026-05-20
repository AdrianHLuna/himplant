'use client';

import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { BeforeAfterSlider } from './BeforeAfterSlider';

const cases = [
    { 
        id: '1', 
        title: 'Mejora de Grosor',
        description: 'Aumento significativo en la circunferencia manteniendo la naturalidad.',
        before: '/images/himplant-1a.png', 
        after: '/images/himplant-1b.png' 
    },
    { 
        id: '2', 
        title: 'Mayor longitud',
        description: 'Resultados permanentes que mejoran la estética y la confianza.',
        before: '/images/himplant-2a.png',
        after: '/images/himplant-2b.png' 
    },
    { 
        id: '3', 
        title: 'Volumen y Estética',
        description: 'Simetría perfecta y volumen optimizado para un aspecto auténtico.',
        before: '/images/himplant-3a.png', 
        after: '/images/himplant-3b.png' 
    },
    { 
        id: '4', 
        title: 'Resultados Naturales',
        description: 'Integración perfecta del implante con el tejido circundante.',
        before: '/images/himplant-4a.png',
        after: '/images/himplant-4b.png' 
    },
    { 
        id: '5', 
        title: 'Confianza Renovada',
        description: 'Transformación integral que impacta positivamente en la calidad de vida.',
        before: '/images/himplant-5a.png', 
        after: '/images/himplant-5b.png' 
    },
];

export function BeforeAfterGallery() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ 
        align: 'center',
        loop: true,
        skipSnaps: false,
        watchDrag: false
    });

    const scrollPrev = React.useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
    const scrollNext = React.useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

    return (
        <section className="py-24 relative overflow-hidden bg-[#000814]">
            {/* Ambient Background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />
            
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-20">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
                        <Sparkles className="w-4 h-4 text-blue-400" />
                        <span className="text-[10px] font-black tracking-[0.2em] text-blue-400 uppercase">Resultados Clínicos</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                        Transformación <span className="text-blue-500 italic">Real</span>
                    </h2>
                    <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
                        Visualiza los cambios logrados con la tecnología de Himplant. 
                        Resultados auténticos que transforman vidas.
                    </p>
                </div>

                <div className="relative group">
                    <div className="overflow-hidden" ref={emblaRef}>
                        <div className="flex -ml-6">
                            {cases.map((item) => (
                                <div key={item.id} className="flex-[0_0_100%] md:flex-[0_0_80%] lg:flex-[0_0_70%] pl-6">
                                    <div className="space-y-8">
                                        <BeforeAfterSlider 
                                            before={item.before} 
                                            after={item.after} 
                                            className="shadow-[0_0_50px_rgba(0,0,0,0.5)]"
                                        />
                                        <div className="text-center">
                                            <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                                            <p className="text-zinc-500">{item.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Navigation */}
                    <button 
                        onClick={scrollPrev}
                        className="absolute left-4 top-1/2 -translate-y-1/2 h-14 w-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white backdrop-blur-md hover:bg-white/10 transition-all duration-300 z-30 md:-left-8"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button 
                        onClick={scrollNext}
                        className="absolute right-4 top-1/2 -translate-y-1/2 h-14 w-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white backdrop-blur-md hover:bg-white/10 transition-all duration-300 z-30 md:-right-8"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>
                </div>
            </div>
        </section>
    );
}
