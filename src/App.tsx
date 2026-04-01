/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  Mail, 
  MapPin, 
  Award,
  VenetianMask
} from 'lucide-react';
// Cambiamos a framer-motion que es el estándar más estable para builds de Vercel
import { motion, AnimatePresence } from 'framer-motion';

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
    <div className="min-h-screen font-sans text-white bg-[#0a0a0a]">
      {/* Navbar */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-black/80 backdrop-blur-md py-3' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center">
            <img 
              src="https://indigo-spider-680423.hostingersite.com/wp-content/uploads/2026/03/CDG-2-scaled.png" 
              alt="CDG Logo" 
              className="h-12 md:h-16 w-auto brightness-0 invert"
            />
          </div>

          <div className="hidden md:flex gap-10">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-sm font-bold hover:text-white/70 transition-colors uppercase tracking-widest">
                {link.name}
              </a>
            ))}
          </div>

          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      <main>
        {/* Hero */}
        <section id="inicio" className="relative h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0 bg-cover bg-center opacity-30" style={{ backgroundImage: `url('https://indigo-spider-680423.hostingersite.com/wp-content/uploads/2026/03/cdg-portada-hero-inicio-scaled.jpg')` }} />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black z-0" />
          <div className="relative z-10 text-center px-6">
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-6xl md:text-9xl font-bold uppercase tracking-tighter mb-6">Somos CDG</motion.h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto mb-10 font-light">Importación y exportación de productos médicos de alta calidad.</p>
            <a href="#nosotros" className="inline-block px-12 py-5 bg-white text-black font-bold rounded-full uppercase tracking-widest hover:bg-[#e74520] hover:text-white transition-all">Nuestra Historia</a>
          </div>
        </section>

        {/* Nosotros */}
        <section id="nosotros" className="py-24 px-6">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
            <div className="rounded-[40px] overflow-hidden border border-white/10 aspect-square lg:aspect-auto">
              <img src="https://indigo-spider-680423.hostingersite.com/wp-content/uploads/2026/03/cdg-frente-importadora-scaled.jpg" alt="Sede" className="w-full h-full object-cover" />
            </div>
            <div>
              <h2 className="text-4xl md:text-7xl font-bold uppercase mb-8 tracking-tighter">Quiénes Somos</h2>
              <p className="text-white/60 text-lg mb-12 leading-relaxed">CDG es referente en la provisión de tecnología médica innovadora, garantizando estándares internacionales en logística y distribución de insumos críticos.</p>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <Award size={32} className="text-[#e74520] mb-3" />
                  <div className="text-3xl font-bold">15+</div>
                  <p className="text-xs text-white/40 uppercase tracking-widest">Años de experiencia</p>
                </div>
                <div>
                  <VenetianMask size={32} className="text-[#e74520] mb-3" />
                  <div className="text-3xl font-bold">500+</div>
                  <p className="text-xs text-white/40 uppercase tracking-widest">Productos activos</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Marcas Slider - Versión ULTRA ESTABLE */}
        <section id="marcas" className="py-24 overflow-hidden bg-black/30">
          <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
            <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tighter">Marcas Aliadas</h2>
          </div>
          
          <div className="flex">
            <motion.div 
              animate={{ x: [0, -2500] }} 
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="flex gap-8 whitespace-nowrap"
            >
              {[...marcas, ...marcas].map((logo, i) => (
                <div key={i} className="flex-shrink-0 w-48 h-24 bg-[#F6F6F6] rounded-2xl flex items-center justify-center px-6">
                  <img src={logo} alt="Marca" className="max-w-full max-h-[60%] object-contain opacity-80" />
                </div>
              ))}
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer id="contacto" className="py-20 bg-black px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <img src="https://indigo-spider-680423.hostingersite.com/wp-content/uploads/2026/03/CDG-2-scaled.png" className="h-12 brightness-0 invert mb-6" alt="CDG" />
            <p className="text-white/30 text-sm">Distribución estratégica de insumos médicos.</p>
          </div>
          <div>
            <h4 className="font-bold uppercase mb-6 text-sm tracking-widest">Navegación</h4>
            <ul className="space-y-3 text-white/50 text-sm">
              <li><a href="#inicio">Inicio</a></li>
              <li><a href="#nosotros">Nosotros</a></li>
              <li><a href="#marcas">Marcas</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold uppercase mb-6 text-sm tracking-widest">Partner</h4>
            <p className="text-white/70 font-bold uppercase tracking-tighter">MAX CONTINENTAL</p>
          </div>
          <div>
            <h4 className="font-bold uppercase mb-6 text-sm tracking-widest">Contacto</h4>
            <div className="flex items-center gap-3 mb-4 text-white/60">
              <Mail size={16} /> <span className="text-xs">administracion@cdgimport.com</span>
            </div>
            <div className="flex items-center gap-3 text-white/60">
              <MapPin size={16} /> <span className="text-xs">Parque Industrial - Tandil</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
