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
// Cambiamos a la importación estándar más estable para Vercel
import { motion, AnimatePresence } from 'framer-motion';

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const constraintsRef = useRef(null);

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
    <div className="min-h-screen font-sans text-white bg-animated-gradient overflow-x-hidden">
      {/* Navbar */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-black/40 backdrop-blur-xl py-3 shadow-2xl' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center">
            <img 
              src="https://indigo-spider-680423.hostingersite.com/wp-content/uploads/2026/03/CDG-2-scaled.png" 
              alt="CDG Logo" 
              className="h-12 md:h-16 w-auto brightness-0 invert"
            />
          </motion.div>

          <div className="hidden md:flex gap-10">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-sm font-bold hover:text-white/70 transition-colors uppercase tracking-widest relative group">
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          <button className="md:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      <main>
        {/* Hero */}
        <section id="inicio" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
          <div className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat bg-fixed opacity-30" style={{ backgroundImage: `url('https://indigo-spider-680423.hostingersite.com/wp-content/uploads/2026/03/cdg-portada-hero-inicio-scaled.jpg')` }} />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-[#911913]/90 z-0" />

          <div className="max-w-7xl mx-auto px-6 w-full relative z-10 text-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <h1 className="font-poppins text-6xl md:text-8xl lg:text-9xl font-bold uppercase mb-8 tracking-tighter">Somos CDG</h1>
              <p className="font-sans text-xl md:text-3xl text-white/90 mb-12 max-w-3xl mx-auto font-light">Importamos y exportamos productos médicos de alta calidad</p>
              <a href="#nosotros" className="inline-block px-12 py-6 bg-white text-[#911913] font-bold rounded-full hover:shadow-xl transition-all uppercase tracking-widest">Nuestra Historia</a>
            </motion.div>
          </div>
        </section>

        {/* Nosotros */}
        <section id="nosotros" className="py-24 lg:py-32 px-6 bg-white/5">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
            <div className="rounded-[40px] overflow-hidden shadow-2xl border-4 border-white/10 aspect-[4/5] relative">
              <img src="https://indigo-spider-680423.hostingersite.com/wp-content/uploads/2026/03/cdg-frente-importadora-scaled.jpg" alt="CDG" className="w-full h-full object-cover" />
            </div>
            <div className="text-center lg:text-left">
              <h2 className="font-poppins text-4xl md:text-7xl font-bold uppercase mb-8 tracking-tighter">Quiénes Somos</h2>
              <p className="text-white/70 text-lg lg:text-xl mb-8 leading-relaxed">Expertos en logística y distribución de insumos médicos críticos, comprometidos con la salud pública y privada.</p>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <Award size={32} className="text-[#e74520] mb-2 mx-auto lg:mx-0" />
                  <div className="text-3xl font-bold">15+</div>
                  <div className="text-xs text-white/40 uppercase font-bold tracking-widest">Años de Trayectoria</div>
                </div>
                <div>
                  <VenetianMask size={32} className="text-[#e74520] mb-2 mx-auto lg:mx-0" />
                  <div className="text-3xl font-bold">500+</div>
                  <div className="text-xs text-white/40 uppercase font-bold tracking-widest">Productos Activos</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Marcas con Drag Habilitado */}
        <section id="marcas" className="py-24 bg-black/10 overflow-hidden" ref={constraintsRef}>
          <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
            <h2 className="font-poppins text-3xl md:text-5xl font-bold uppercase tracking-tighter mb-4">Marcas Aliadas</h2>
            <p className="text-white/50 italic">Puedes arrastrar el carrusel para explorar</p>
          </div>
          
          <div className="flex cursor-grab active:cursor-grabbing">
            <motion.div 
              drag="x"
              dragConstraints={constraintsRef}
              animate={{ x: [0, -2800] }}
              transition={{ x: { duration: 50, repeat: Infinity, ease: "linear" } }}
              className="flex gap-8 whitespace-nowrap"
            >
              {[...marcas, ...marcas, ...marcas].map((logo, i) => (
                <div key={i} className="flex-shrink-0 w-48 h-24 bg-[#F6F6F6] rounded-2xl flex items-center justify-center px-6 select-none">
                  <img src={logo} alt="Marca" className="max-w-full max-h-[65%] object-contain opacity-80 pointer-events-none" />
                </div>
              ))}
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer id="contacto" className="py-24 bg-black/40 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-12 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start">
            <img src="https://indigo-spider-680423.hostingersite.com/wp-content/uploads/2026/03/CDG-2-scaled.png" className="h-16 brightness-0 invert mb-6" alt="CDG" />
            <p className="text-white/40">Excelencia en insumos médicos.</p>
          </div>
          <div>
            <h4 className="font-bold uppercase mb-6">Navegación</h4>
            <ul className="space-y-3 text-white/50">
              <li><a href="#inicio">Inicio</a></li>
              <li><a href="#nosotros">Nosotros</a></li>
              <li><a href="#marcas">Marcas</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold uppercase mb-6">Partner</h4>
            <p className="text-white/70 font-bold">MAX CONTINENTAL</p>
          </div>
          <div>
            <h4 className="font-bold uppercase mb-6">Contacto</h4>
            <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
              <Mail size={18} className="text-[#e74520]" />
              <span className="text-sm">administracion@cdgimport.com</span>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-3">
              <MapPin size={18} className="text-[#e74520]" />
              <span className="text-sm">Parque Industrial - Tandil</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
