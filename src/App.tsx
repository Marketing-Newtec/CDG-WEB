/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useRef } from 'react';
import { 
  Menu, 
  X, 
  Mail, 
  MapPin, 
  Award,
  VenetianMask
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Nosotros', href: '#nosotros' },
    { name: 'Marcas', href: '#marcas' },
    { name: 'Contacto', href: '#contacto' },
  ];

  const marcas = [
    "https://indigo-spider-680423.hostingersite.com/wp-content/uploads/2026/04/supermax.png",
    "https://indigo-spider-680423.hostingersite.com/wp-content/uploads/2026/04/flumax-color-scaled.png",
    "https://indigo-spider-680423.hostingersite.com/wp-content/uploads/2026/04/greetmed-color-scaled.png",
    "https://indigo-spider-680423.hostingersite.com/wp-content/uploads/2026/04/harsoria.png",
    "https://indigo-spider-680423.hostingersite.com/wp-content/uploads/2026/04/hemobag.png",
    "https://indigo-spider-680423.hostingersite.com/wp-content/uploads/2026/04/higiemax-color-scaled.png",
    "https://indigo-spider-680423.hostingersite.com/wp-content/uploads/2026/04/index-color.png",
    "https://indigo-spider-680423.hostingersite.com/wp-content/uploads/2026/04/infumed.png",
    "https://indigo-spider-680423.hostingersite.com/wp-content/uploads/2026/04/intratub.png",
    "https://indigo-spider-680423.hostingersite.com/wp-content/uploads/2026/04/Logo-Urocare.png",
    "https://indigo-spider-680423.hostingersite.com/wp-content/uploads/2026/04/Max-Continental-viejo.png",
    "https://indigo-spider-680423.hostingersite.com/wp-content/uploads/2026/04/max-sutures-color.png",
    "https://indigo-spider-680423.hostingersite.com/wp-content/uploads/2026/04/medical-precision-color.png",
    "https://indigo-spider-680423.hostingersite.com/wp-content/uploads/2026/04/Medispo-normal.png",
    "https://indigo-spider-680423.hostingersite.com/wp-content/uploads/2026/04/one-band-color-scaled.png",
    "https://indigo-spider-680423.hostingersite.com/wp-content/uploads/2026/04/one-gloves-color.png",
    "https://indigo-spider-680423.hostingersite.com/wp-content/uploads/2026/04/Healcath.png",
    "https://indigo-spider-680423.hostingersite.com/wp-content/uploads/2026/04/Healcath-Plus.png"
  ];

  return (
    <div className="min-h-screen font-sans text-white bg-black overflow-x-hidden">
      {/* Navbar */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-black/80 backdrop-blur-md py-3' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center">
            <img 
              src="https://indigo-spider-680423.hostingersite.com/wp-content/uploads/2026/03/CDG-2-scaled.png" 
              alt="CDG Logo" 
              className="h-10 md:h-14 w-auto brightness-0 invert"
            />
          </div>
          <div className="hidden md:flex gap-8">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-xs font-bold uppercase tracking-widest hover:text-[#e74520] transition-colors">
                {link.name}
              </a>
            ))}
          </div>
          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      <main>
        {/* Hero */}
        <section id="inicio" className="relative h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0 bg-cover bg-center bg-fixed opacity-40" style={{ backgroundImage: `url('https://indigo-spider-680423.hostingersite.com/wp-content/uploads/2026/03/cdg-portada-hero-inicio-scaled.jpg')` }} />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black/60 z-10" />
          <div className="relative z-20 text-center px-6">
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-6xl md:text-9xl font-bold uppercase tracking-tighter mb-6">Somos CDG</motion.h1>
            <p className="text-lg md:text-2xl text-white/80 max-w-2xl mx-auto mb-10 font-light italic">Líderes en logística y provisión de insumos médicos de alta complejidad.</p>
            <a href="#nosotros" className="px-10 py-4 bg-white text-black font-bold rounded-full uppercase text-sm tracking-widest hover:bg-[#e74520] hover:text-white transition-all">Explorar Historia</a>
          </div>
        </section>

        {/* Nosotros */}
        <section id="nosotros" className="py-24 px-6 bg-[#0a0a0a]">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
            <div className="rounded-3xl overflow-hidden shadow-2xl border border-white/10">
              <img src="https://indigo-spider-680423.hostingersite.com/wp-content/uploads/2026/03/cdg-frente-importadora-scaled.jpg" alt="Sede CDG" className="w-full h-full object-cover opacity-80" />
            </div>
            <div>
              <h2 className="text-4xl md:text-6xl font-bold uppercase mb-8 tracking-tighter">Quiénes Somos</h2>
              <p className="text-white/60 text-lg mb-10 leading-relaxed">CDG es una empresa Tandilense con proyección internacional, especializada en la importación de tecnología médica avanzada. Garantizamos seguridad, trazabilidad y eficiencia en cada entrega.</p>
              <div className="grid grid-cols-2 gap-10">
                <div className="border-l-2 border-[#e74520] pl-6">
                  <Award className="text-[#e74520] mb-2" size={28} />
                  <div className="text-4xl font-bold">15+</div>
                  <p className="text-[10px] uppercase tracking-widest text-white/40">Años de experiencia</p>
                </div>
                <div className="border-l-2 border-[#e74520] pl-6">
                  <VenetianMask className="text-[#e74520] mb-2" size={28} />
                  <div className="text-4xl font-bold">500+</div>
                  <p className="text-[10px] uppercase tracking-widest text-white/40">Insumos activos</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Marcas Slider Mejorado */}
        <section id="marcas" className="py-32 bg-black overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 mb-20 text-center">
            <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tighter mb-4">Marcas que nos eligen</h2>
            <div className="w-20 h-1 bg-[#e74520] mx-auto mb-6"></div>
            <p className="text-white/40 italic text-sm uppercase tracking-widest">Arrastra para explorar la red de partners</p>
          </div>
          
          <div className="flex select-none touch-none">
            <motion.div 
              drag="x"
              dragConstraints={{ left: -3500, right: 0 }}
              initial={{ x: 0 }}
              animate={{ x: [0, -3500] }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 60,
                  ease: "linear",
                },
              }}
              className="flex gap-8 px-4 cursor-grab active:cursor-grabbing"
            >
              {[...marcas, ...marcas, ...marcas].map((logo, i) => (
                <div key={i} className="flex-shrink-0 w-56 h-28 bg-[#F6F6F6] rounded-xl flex items-center justify-center p-6 border border-white/5">
                  <img src={logo} alt="Partner" className="max-w-full max-h-[70%] object-contain pointer-events-none grayscale hover:grayscale-0 transition-all duration-500" />
                </div>
              ))}
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer id="contacto" className="py-20 bg-black border-t border-white/5 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-16">
          <div>
            <img src="https://indigo-spider-680423.hostingersite.com/wp-content/uploads/2026/03/CDG-2-scaled.png" className="h-12 brightness-0 invert mb-6" alt="CDG Logo" />
            <p className="text-white/30 text-sm">Innovación y seguridad en el mercado médico nacional e internacional.</p>
          </div>
          <div>
            <h4 className="text-sm font-bold uppercase mb-6 tracking-widest">Contacto</h4>
            <div className="flex items-center gap-3 mb-4 text-white/60 hover:text-white transition-colors">
              <Mail size={16} /> <span className="text-xs">administracion@cdgimport.com</span>
            </div>
            <div className="flex items-center gap-3 text-white/60">
              <MapPin size={16} /> <span className="text-xs">Parque Industrial, Tandil, Argentina</span>
            </div>
          </div>
          <div>
            <h4 className="text-sm font-bold uppercase mb-6 tracking-widest">Partner</h4>
            <p className="text-[#e74520] font-bold text-lg tracking-tighter">MAX CONTINENTAL</p>
          </div>
          <div className="text-center md:text-right flex flex-col justify-end">
            <p className="text-[10px] text-white/20 font-bold tracking-[0.3em]">© 2026 CDG IMPORT - TANDIL</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
