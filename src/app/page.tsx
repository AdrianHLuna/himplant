'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  CheckCircle2, 
  Zap, 
  Clock, 
  ArrowRight, 
  ShieldCheck, 
  Users, 
  Star,
  Activity
} from 'lucide-react';
import { BeforeAfterGallery } from '../components/BeforeAfterGallery';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
};

export default function Home() {
  return (
    <main className="min-h-screen bg-[#000814] text-white selection:bg-blue-500/30">
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/himplant-clinic.png" 
            alt="Clinical Interior" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#000814]/80 via-[#000814]/60 to-[#000814]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-8 backdrop-blur-xl">
              <ShieldCheck className="w-4 h-4 text-blue-400" />
              <span className="text-[10px] font-black tracking-[0.3em] text-blue-400 uppercase">Tecnología Autorizada por la FDA</span>
            </div>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-8 tracking-tighter leading-none">
              HIMPLANT<span className="text-blue-600">.</span>
            </h1>
            <p className="text-xl md:text-2xl text-zinc-400 max-w-3xl mx-auto mb-12 font-medium leading-relaxed">
              El procedimiento cosmético e innovador para el agrandamiento del pene diseñado para mejorar tu confianza y calidad de vida.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button className="px-10 py-5 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-bold transition-all duration-300 shadow-[0_0_40px_rgba(37,99,235,0.4)] hover:scale-105 flex items-center gap-3 group">
                INICIAR CONSULTA
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>
        </div>
        
        {/* Floating elements */}
        <div className="absolute bottom-12 left-12 hidden lg:flex items-center gap-6 text-[10px] font-black tracking-[0.2em] text-zinc-600 uppercase">
          <div className="flex items-center gap-2">
            <Activity className="w-4 h-4" /> SEGURO
          </div>
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4" /> EFECTIVO
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4" /> DISCRETO
          </div>
        </div>
      </section>

      {/* Info Sections - Two Main Cards as in the Image */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto space-y-24">
          
          {/* Card 1: Qué es? */}
          <motion.div 
            {...fadeInUp}
            className="group relative bg-white rounded-[40px] p-12 lg:p-20 overflow-hidden shadow-2xl"
          >
            <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-50/50 pointer-events-none" />
            <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl lg:text-5xl font-black text-[#001026] mb-8 leading-tight">
                  ¿Qué es <span className="text-blue-600">Himplant?</span>
                </h2>
                <div className="space-y-6 text-lg text-zinc-600 leading-relaxed">
                  <p>
                    Himplant es un procedimiento cosmético e innovador para el agrandamiento del pene, 
                    este procedimiento se encuentra <strong className="text-[#001026]">autorizado por la FDA.</strong>
                  </p>
                  <p>
                    Se trata de un implante de silicona médica suave que envuelve el pene y está diseñado 
                    para mejorar tanto el <strong className="text-[#001026]">grosor como la longitud</strong> en estado flácido, 
                    brindando un aspecto natural y confortable.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square bg-zinc-100 rounded-3xl overflow-hidden border border-zinc-200 shadow-inner flex items-center justify-center p-12">
                   <ShieldCheck className="w-40 h-40 text-blue-600/20" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 2: En qué consiste? */}
          <motion.div 
            {...fadeInUp}
            className="group relative bg-white rounded-[40px] p-12 lg:p-20 overflow-hidden shadow-2xl"
          >
            <div className="absolute top-0 left-0 w-1/2 h-full bg-zinc-50 pointer-events-none" />
            <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto">
              <h2 className="text-4xl lg:text-5xl font-black text-[#001026] mb-8">
                ¿En qué consiste?
              </h2>
              <div className="space-y-8 text-lg text-zinc-600 leading-relaxed">
                <p>
                  El procedimiento implica una incisión en la parte superior del escroto 
                  (aproximadamente 2.5 a 5 cm por debajo de la unión escroto-peneana), 
                  lo cual ayuda a <strong className="text-[#001026]">minimizar cicatrices visibles.</strong>
                </p>
                <div className="bg-blue-600/5 p-8 rounded-3xl border border-blue-600/10 text-[#001026] font-medium">
                  El implante se inserta por debajo de la piel del pene, envolviéndolo en 270° para 
                  garantizar que no interfiera con la uretra. Se fija con suturas justo detrás del 
                  glande y contiene una malla quirúrgica integrada para dar estabilidad.
                </div>
              </div>
            </div>
          </motion.div>

          {/* Two Column Section: Beneficios & Recuperación */}
          <div className="grid md:grid-cols-2 gap-12">
            {/* Beneficios */}
            <motion.div 
              {...fadeInUp}
              className="bg-white rounded-[40px] p-12 shadow-2xl"
            >
              <div className="flex items-center gap-4 mb-10">
                <div className="w-12 h-12 rounded-2xl bg-blue-600/10 flex items-center justify-center text-blue-600">
                  <Zap className="w-6 h-6" />
                </div>
                <h2 className="text-3xl font-black text-[#001026]">Beneficios</h2>
              </div>
              <ul className="space-y-6">
                {[
                  "Aumento de circunferencia de 2.5 a 5 cm.",
                  "Mejora de longitud en estado flácido.",
                  "Resultados duraderos y permanentes.",
                  "Sensibilidad y función intactas.",
                  "Aspecto y tacto auténtico."
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4 text-zinc-600 group">
                    <CheckCircle2 className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Recuperación */}
            <motion.div 
              {...fadeInUp}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-[40px] p-12 shadow-2xl"
            >
              <div className="flex items-center gap-4 mb-10">
                <div className="w-12 h-12 rounded-2xl bg-blue-600/10 flex items-center justify-center text-blue-600">
                  <Clock className="w-6 h-6" />
                </div>
                <h2 className="text-3xl font-black text-[#001026]">Recuperación</h2>
              </div>
              <div className="space-y-10">
                <div>
                  <h4 className="text-[10px] font-black tracking-[0.2em] text-zinc-400 uppercase mb-2">Dolor</h4>
                  <p className="text-zinc-600 font-medium">Procedimiento ambulatorio con manejo del dolor sumamente efectivo.</p>
                </div>
                <div>
                  <h4 className="text-[10px] font-black tracking-[0.2em] text-zinc-400 uppercase mb-2">Actividad Ligera</h4>
                  <p className="text-zinc-600 font-medium">Retorno a actividades en unos días, vida normal en 1-2 semanas.</p>
                </div>
                <div>
                  <h4 className="text-[10px] font-black tracking-[0.2em] text-zinc-400 uppercase mb-2">Vida Sexual</h4>
                  <p className="text-zinc-600 font-medium">Generalmente se reanuda entre las 6 a 8 semanas post-cirugía.</p>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </section>

      {/* Gallery Section */}
      <BeforeAfterGallery />

      {/* Footer */}
      <footer className="py-20 bg-[#000814] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="text-2xl font-black tracking-tighter mb-8">
            HIMPLANT<span className="text-blue-600">.</span>
          </div>
          <p className="text-zinc-500 text-sm max-w-md mx-auto">
            © 2026 Himplant Medical. Todos los derechos reservados. 
            Consulte a su médico antes de realizar cualquier procedimiento quirúrgico.
          </p>
        </div>
      </footer>

    </main>
  );
}
