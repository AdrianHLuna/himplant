'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  CheckCircle2,
  Zap,
  Clock,
  ArrowRight,
  Users,
  Star,
  Activity
} from 'lucide-react';
import { BeforeAfterGallery } from '../components/BeforeAfterGallery';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }
};

export default function Home() {
  return (
    <main className="min-h-screen bg-[#000814] text-white selection:bg-blue-500/30">

      {/* Watermark */}
      <div
        aria-hidden="true"
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 9999,
          pointerEvents: 'none',
          overflow: 'hidden',
          display: 'flex',
          flexWrap: 'wrap',
          alignContent: 'flex-start',
          gap: '60px 40px',
          padding: '40px',
          transform: 'rotate(-30deg) scale(1.5)',
          transformOrigin: 'center center',
          opacity: 0.07,
        }}
      >
        {Array.from({ length: 40 }).map((_, i) => (
          <span
            key={i}
            style={{
              display: 'inline-block',
              color: '#ffffff',
              fontSize: '13px',
              fontWeight: 700,
              letterSpacing: '0.12em',
              whiteSpace: 'nowrap',
              userSelect: 'none',
              fontFamily: 'system-ui, sans-serif',
            }}
          >
            Urólogo Sergio Acosta
          </span>
        ))}
      </div>

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
              <img src="/images/himplant.png" alt="Himplant Logo" className="w-4 h-4 object-contain" />
              <span className="text-[10px] font-black tracking-[0.3em] text-blue-400 uppercase">Tecnología Autorizada por la FDA</span>
            </div>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-8 tracking-tighter leading-none">
              HIMPLANT<span className="text-blue-600">.</span>
            </h1>
            <p className="text-xl md:text-2xl text-zinc-400 max-w-3xl mx-auto mb-12 font-medium leading-relaxed">
              El procedimiento cosmético e innovador para el agrandamiento del pene diseñado para mejorar tu confianza y calidad de vida.
            </p>
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

          {/* Gallery Section */}
          <BeforeAfterGallery />

          {/* WhatsApp CTA Button */}
          <motion.div
            {...fadeInUp}
            className="flex justify-center"
          >
            <a
              href="https://wa.me/529613189186?text=Hola%2C%20me%20gustar%C3%ADa%20agendar%20una%20consulta%20sobre%20Himplant."
              target="_blank"
              rel="noopener noreferrer"
              id="whatsapp-cta-btn"
              className="group relative inline-flex items-center gap-4 px-10 py-5 rounded-full overflow-hidden text-white font-black text-lg tracking-wide shadow-2xl transition-transform duration-300 hover:scale-105"
              style={{
                background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
                boxShadow: '0 0 40px rgba(37, 211, 102, 0.35)',
              }}
            >
              {/* Shimmer effect */}
              <span
                aria-hidden="true"
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: 'linear-gradient(120deg, transparent 30%, rgba(255,255,255,0.18) 50%, transparent 70%)',
                }}
              />
              {/* WhatsApp icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                fill="currentColor"
                className="w-7 h-7 flex-shrink-0"
                aria-hidden="true"
              >
                <path d="M16 2C8.268 2 2 8.268 2 16c0 2.47.67 4.784 1.836 6.77L2 30l7.43-1.814A13.93 13.93 0 0 0 16 30c7.732 0 14-6.268 14-14S23.732 2 16 2Zm0 25.4a11.32 11.32 0 0 1-5.77-1.578l-.413-.246-4.41 1.077 1.108-4.294-.27-.44A11.36 11.36 0 0 1 4.6 16C4.6 9.699 9.699 4.6 16 4.6S27.4 9.699 27.4 16 22.301 27.4 16 27.4Zm6.22-8.47c-.34-.17-2.012-.994-2.325-1.108-.312-.113-.54-.17-.767.17-.228.34-.882 1.108-1.08 1.336-.2.228-.397.255-.737.085-.34-.17-1.434-.528-2.732-1.686-1.01-.9-1.692-2.012-1.89-2.352-.198-.34-.022-.524.148-.694.154-.152.34-.397.51-.595.17-.2.227-.34.34-.567.114-.228.057-.426-.028-.595-.085-.17-.767-1.847-1.051-2.53-.277-.665-.558-.575-.767-.585l-.653-.011c-.228 0-.595.085-.907.425s-1.193 1.165-1.193 2.84 1.222 3.296 1.392 3.524c.17.228 2.405 3.673 5.828 5.15.815.352 1.45.562 1.947.72.818.26 1.563.223 2.151.135.656-.097 2.012-.823 2.296-1.618.284-.795.284-1.477.2-1.618-.085-.14-.313-.228-.654-.397Z" />
              </svg>
              <span>Agenda tu Consulta</span>
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </motion.div>

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
                    para mejorar tanto el <strong className="text-[#001026]">grosor como la longitud, </strong>
                    brindando un aspecto natural y confortable.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square bg-zinc-100 rounded-3xl overflow-hidden border border-zinc-200 shadow-inner flex items-center justify-center p-12">
                  <img src="/images/himplant.png" alt="Himplant" className="w-full h-full object-contain" />
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
                  "Aumento promedio de una circunferencia de una pulgada",
                  "Aumento promedio de longitud de dos pulgadas",
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
