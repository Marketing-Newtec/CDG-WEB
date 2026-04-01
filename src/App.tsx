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
  Users,
  VenetianMask
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

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

  // Array de marcas actualizado con los nuevos logos
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
    "https://indigo-spider-680423.hostingersite.com/wp-content/uploads/2026/04/one-gloves-color.png"
  ];

  return (
    <div className="min-h-screen font-sans text-white bg-animated-gradient">
      {/* Navbar */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-black/40 backdrop-blur-xl py-3 shadow-2xl' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center"
          >
            <img 
              src="https://indigo-spider-680423.hostingersite.com/wp-content/uploads/2026/03/CDG-2-scaled.png" 
              alt="CDG Logo" 
              className="h-12 md:h-16 w-auto brightness-0 invert"
              referrerPolicy="no-referrer"
            />
          </motion.div>

          {/* Desktop Nav */}
          <div className="hidden md:flex gap-10">
            {navLinks.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="text-sm font-bold hover:text-white/70 transition-colors uppercase tracking-widest relative group font-sans"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
              </motion.a>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden p-2 hover:bg-white/10 rounded-lg transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-black/60 backdrop-blur-xl border-t border-white/10 overflow-hidden"
            >
              <div className="px-6 py-8 flex flex-col gap-6 text-center">
                {navLinks.map((link) => (
                  <a 
                    key={link.name} 
                    href={link.href} 
                    onClick={() => setMobileMenuOpen(false)}
                    className="font-poppins text-2xl font-bold uppercase tracking-tighter hover:scale-105 transition-transform"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main>
        {/* Hero Section */}
        <section id="inicio" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
          <div 
            className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat bg-fixed opacity-30"
            style={{ backgroundImage: `url('https://indigo-spider-680423.hostingersite.com/wp-content/uploads/2026/03/cdg-portada-hero-inicio-scaled.jpg')` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-[#911913]/90 z-0 pointer-events-none" />

          <div className="max-w-7xl mx-auto px-6 w-full relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col items-center"
            >
              <h1 className="font-poppins text-6xl md:text-8xl lg:text-9xl font-bold uppercase leading-[1.1] lg:leading-[0.9] mb-8 tracking-tighter drop-shadow-2xl">
                Somos CDG
              </h1>
              <p className="font-sans text-xl md:text-3xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed font-light drop-shadow-lg">
                Importamos y exportamos productos médicos de alta calidad
              </p>
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#nosotros" 
                className="font-sans px-12 py-6 bg-white text-[#911913] font-bold rounded-full hover:shadow-[0_0_50px_rgba(255,255,255,0.3)] transition-all text-lg tracking-widest uppercase"
              >
                NUESTRA HISTORIA
              </motion.a>
            </motion.div>
          </div>
        </section>

        {/* About Us Section */}
        <section id="nosotros" className="py-24 lg:py-32 px-6 bg-white/5">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24 items-center text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative order-2 lg:order-1"
            >
              <div className="rounded-[40px] lg:rounded-[60px] overflow-hidden shadow-2xl border-4 border-white/10 aspect-[4/5] relative group">
                <img 
                  src="https://indigo-spider-680423.hostingersite.com/wp-content/uploads/2026/03/cdg-frente-importadora-scaled.jpg" 
                  alt="Frente Importadora CDG" 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-[#911913]/20 group-hover:bg-transparent transition-colors duration-700" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <h2 className="font-poppins text-4xl md:text-5xl lg:text-7xl font-bold uppercase mb-8 lg:mb-10 tracking-tighter leading-[1.1] lg:leading-[0.9]">QUIÉNES SOMOS</h2>
              <p className="font-sans text-lg lg:text-xl text-white/70 mb-6 lg:mb-8 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <p className="font-sans text-lg lg:text-xl text-white/70 mb-10 lg:mb-12 leading-relaxed">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              
              <div className="grid grid-cols-2 gap-8 lg:gap-12 justify-items-center lg:justify-items-start">
                <div className="flex flex-col lg:flex-row items-center lg:items-start gap-4">
                  <div className="p-4 bg-white/10 rounded-2xl"><Award size={32} className="text-[#e74520]" /></div>
                  <div className="text-center lg:text-left">
                    <div className="font-poppins text-3xl font-bold uppercase">15+</div>
                    <div className="font-sans text-xs text-white/40 uppercase font-bold tracking-widest">años de experiencia</div>
                  </div>
                </div>
                <div className="flex flex-col lg:flex-row items-center lg:items-start gap-4">
                  <div className="p-4 bg-white/10 rounded-2xl"><VenetianMask size={32} className="text-[#e74520]" /></div>
                  <div className="text-center lg:text-left">
                    <div className="font-poppins text-3xl font-bold uppercase">500+</div>
                    <div className="font-sans text-xs text-white/40 uppercase font-bold tracking-widest">productos importados</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Brands Slider */}
        <section id="marcas" className="py-24 lg:py-32 overflow-hidden bg-black/10">
          <div className="max-w-7xl mx-auto px-6 mb-12 lg:mb-16 text-center">
            <h2 className="font-poppins text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-tighter mb-4">Marcas que Confían en Nosotros</h2>
            <p className="font-sans text-white/50 text-base lg:text-lg">Representamos a los fabricantes más innovadores del mundo.</p>
          </div>
          
          <div className="flex relative">
            <motion.div 
              animate={{ x: [0, -2160] }} // Ajustado para el scroll infinito con el ancho total de logos (16 * (192px + 32px gap)) / 2
              transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
              className="flex gap-8 whitespace-nowrap"
            >
              {/* Duplicamos el array para el efecto infinito */}
              {[...marcas, ...marcas].map((logo, i) => (
                <div key={i} className="flex-shrink-0 w-48 h-24 bg-[#F6F6F6] rounded-2xl border border-black/5 flex items-center justify-center group transition-all px-6">
                  <img 
                    src={logo} 
                    alt={`Marca ${i % marcas.length}`} 
                    className="max-w-full max-h-[65%] object-contain opacity-60 group-hover:opacity-100 transition-opacity duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer id="contacto" className="pt-24 lg:pt-32 pb-12 bg-black/40 px-6 border-t border-white/5 text-center md:text-left">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-16 lg:mb-24">
            <div className="flex flex-col items-center md:items-start">
              <div className="mb-6 lg:mb-8">
                <img 
                  src="https://indigo-spider-680423.hostingersite.com/wp-content/uploads/2026/03/CDG-2-scaled.png" 
                  alt="CDG Logo" 
                  className="h-16 lg:h-20 w-auto brightness-0 invert"
                  referrerPolicy="no-referrer"
                />
              </div>
              <p className="font-sans text-white/40 leading-relaxed">
                Importación de <br /> productos médicos.
              </p>
            </div>

            <div>
              <h4 className="font-poppins font-semibold uppercase text-xl mb-6 lg:mb-10 tracking-tight">Navegación</h4>
              <ul className="space-y-4 text-white/50 font-medium font-sans">
                <li><a href="#inicio" className="hover:text-white transition-colors">Inicio</a></li>
                <li><a href="#nosotros" className="hover:text-white transition-colors">Nosotros</a></li>
                <li><a href="#marcas" className="hover:text-white transition-colors">Marcas</a></li>
                <li><a href="#contacto" className="hover:text-white transition-colors">Contacto</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-poppins font-semibold uppercase text-xl mb-6 lg:mb-10 tracking-tight">Nuestro partner</h4>
              <div className="font-sans text-white/70 font-bold text-lg">
                MAX CONTINENTAL
              </div>
            </div>

            <div className="flex flex-col items-center md:items-start">
              <h4 className="font-poppins font-semibold uppercase text-xl mb-6 lg:mb-10 tracking-tight">Contacto</h4>
              <ul className="space-y-6 font-sans">
                <li className="flex flex-col md:flex-row items-center md:items-start gap-4">
                  <div className="p-3 bg-white/5 rounded-xl"><Mail className="text-[#e74520]" size={20} /></div>
                  <div>
                    <div className="text-[10px] text-white/30 uppercase font-bold tracking-widest mb-1">Email</div>
                    <a href="mailto:administracion@cdgimport.com" className="font-bold hover:text-[#e74520] transition-colors">administracion@cdgimport.com</a>
                  </div>
                </li>
                <li className="flex flex-col md:flex-row items-center md:items-start gap-4">
                  <div className="p-3 bg-white/5 rounded-xl"><MapPin className="text-[#e74520]" size={20} /></div>
                  <div>
                    <div className="text-[10px] text-white/30 uppercase font-bold tracking-widest mb-1">Ubicación</div>
                    <p className="font-bold">Parque Industrial - Tandil, Buenos Aires, Argentina</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 lg:pt-12 border-t border-white/5 flex flex-col md:flex-row justify-center items-center gap-6 text-white/20 text-xs lg:text-sm font-bold tracking-widest uppercase text-center font-sans">
            <div className="flex flex-col items-center gap-2">
              <p>© 2026 CDG - TODOS LOS DERECHOS RESERVADOS.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
