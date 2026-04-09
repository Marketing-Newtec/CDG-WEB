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
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

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
    "https://indigo-spider-680423.hostingersite.com/wp-content/uploads/2026/04/sinocare.png",
    "https://indigo-spider-680423.hostingersite.com/wp-content/uploads/2026/04/supermax.png",
    "https://indigo-spider-680423.hostingersite.com/wp-content/uploads/2026/04/flumax-color-scaled.png",
    "https://indigo-spider-680423.hostingersite.com/wp-content/uploads/2026/04/greetmed-color-scaled.png",
    "https://indigo-spider-680423.hostingersite.com/wp-content/uploads/2026/04/harsoria.png",
    "https://indigo-spider-680423.hostingersite.com/wp-content/uploads/2026/04/hemobag.png",
    "https://indigo-spider-680423.hostingersite.com/wp-content/uploads/2026/04/TIANHE.png",
    "https://indigo-spider-680423.hostingersite.com/wp-content/uploads/2026/04/logo-hisern.png",
    "https://indigo-spider-680423.hostingersite.com/wp-content/uploads/2026/04/bajaypack.jpg",
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
      <style dangerouslySetInnerHTML={{ __html: `
        .bg-animated-gradient {
          background: linear-gradient(-45deg, #0a0a0a, #1a1a1a, #911913, #0a0a0a);
          background-size: 400% 400%;
          animation: gradient 15s ease infinite;
        }
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}} />

      <div className="bg-animated-gradient min-h-screen">
        <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-black/40 backdrop-blur-xl py-3 shadow-2xl' : 'bg-transparent py-6'}`}>
          <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="flex items-center">
              <img 
                src="https://indigo-spider-680423.hostingersite.com/wp-content/uploads/2026/03/CDG-2-scaled.png" 
                alt="CDG Logo" 
                className="h-12 md:h-16 w-auto brightness-0 invert"
                referrerPolicy="no-referrer"
              />
            </motion.div>

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

            <button className="md:hidden p-2 hover:bg-white/10 rounded-lg transition-colors" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="md:hidden bg-black/60 backdrop-blur-xl border-t border-white/10 overflow-hidden">
                <div className="px-6 py-8 flex flex-col gap-6 text-center">
                  {navLinks.map((link) => (
                    <a key={link.name} href={link.href} onClick={() => setMobileMenuOpen(false)} className="font-poppins text-2xl font-bold uppercase tracking-tighter hover:scale-105 transition-transform">
                      {link.name}
                    </a>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>

        <main>
          <section id="inicio" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
            <div className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat bg-fixed opacity-30" style={{ backgroundImage: `url('https://indigo-spider-680423.hostingersite.com/wp-content/uploads/2026/04/cdg-inicio-importadora.jpg')` }} />
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-[#911913]/90 z-0 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 w-full relative z-10 text-center">
              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="flex flex-col items-center">
                <img 
                  src="https://indigo-spider-680423.hostingersite.com/wp-content/uploads/2026/03/CDG-2-scaled.png" 
                  alt="CDG Importadora" 
                  className="w-auto h-24 md:h-40 lg:h-48 mb-10 brightness-0 invert drop-shadow-[0_0_30px_rgba(255,255,255,0.3)]"
                />
                <p className="font-sans text-xl md:text-3xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed font-light drop-shadow-lg">
                  Somos la división importadora y exportadora de <br className="hidden md:block" />
                  <strong>Max Continental</strong> y <strong>Distribuidora Gamma</strong>.
                </p>
                <motion.a 
                  whileHover={{ scale: 1.05 }} 
                  whileTap={{ scale: 0.95 }} 
                  href="#nosotros" 
                  className="font-sans px-12 py-6 bg-white text-[#911913] font-bold rounded-full hover:shadow-[0_0_50px_rgba(255,255,255,0.3)] transition-all text-lg tracking-widest uppercase"
                >
                  Conócenos
                </motion.a>
              </motion.div>
            </div>
          </section>

          <section id="nosotros" className="py-24 lg:py-32 px-6 bg-white/5 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="relative">
                <div className="rounded-[40px] lg:rounded-[60px] overflow-hidden shadow-2xl border-4 border-white/10 aspect-[4/5] relative group">
                  <img src="https://indigo-spider-680423.hostingersite.com/wp-content/uploads/2026/04/cdg-importadora-deposito.jpg" alt="Depósito CDG" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-[#911913]/20 group-hover:bg-transparent transition-colors duration-700" />
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <h2 className="font-poppins text-4xl md:text-5xl lg:text-7xl font-bold uppercase mb-8 lg:mb-10 tracking-tighter leading-[1.1]">QUIÉNES SOMOS</h2>
                <p className="font-sans text-lg lg:text-xl text-white/70 mb-6 leading-relaxed">Referente en la importación y exportación de productos médicos, garantizando estándares internacionales en logística y distribución de insumos médicos hospitalarios.</p>
                <div className="grid grid-cols-2 gap-8 mt-12">
                  <div className="flex flex-col gap-2">
                    <Award size={32} className="text-[#e74520]" />
                    <div className="text-3xl font-bold font-poppins">Desde 2003</div>
                    <div className="text-xs text-white/40 uppercase font-bold tracking-widest">Experiencia y calidad</div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <VenetianMask size={32} className="text-[#e74520]" />
                    <div className="text-3xl font-bold font-poppins">500+</div>
                    <div className="text-xs text-white/40 uppercase font-bold tracking-widest">productos importados</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>

          <section id="marcas" className="py-24 lg:py-32 overflow-hidden bg-black/20">
            <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
              <h2 className="font-poppins text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-tighter mb-4">Marcas que Confían en Nosotros</h2>
              <div className="w-24 h-1 bg-[#e74520] mx-auto"></div>
            </div>
            
            <div 
              className="flex relative cursor-pointer"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <motion.div 
                animate={{ 
                  x: isPaused ? undefined : [0, -5280] 
                }} 
                transition={{ 
                  duration: 40,
                  repeat: Infinity, 
                  ease: "linear" 
                }}
                className="flex gap-8 whitespace-nowrap"
              >
                {[...marcas, ...marcas, ...marcas].map((logo, i) => (
                  <div key={i} className="flex-shrink-0 w-48 h-24 bg-[#F6F6F6] rounded-2xl border border-black/5 flex items-center justify-center transition-all px-6">
                    <img 
                      src={logo} 
                      alt="Logo Marca" 
                      className="max-w-full max-h-[65%] object-contain opacity-80 hover:opacity-100 transition-opacity"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                ))}
              </motion.div>
            </div>
          </section>
        </main>

        <footer id="contacto" className="pt-24 pb-12 bg-black/40 px-6 border-t border-white/5 text-center md:text-left">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 items-start">
              <div className="flex flex-col items-center md:items-start">
                <img src="https://indigo-spider-680423.hostingersite.com/wp-content/uploads/2026/03/CDG-2-scaled.png" alt="Logo CDG" className="h-16 w-auto brightness-0 invert" />
              </div>
              <div>
                <h4 className="font-poppins font-semibold uppercase text-xl mb-6">Navegación</h4>
                <ul className="space-y-4 text-white/50 font-sans">
                  <li><a href="#inicio" className="hover:text-white transition-colors">Inicio</a></li>
                  <li><a href="#nosotros" className="hover:text-white transition-colors">Nosotros</a></li>
                  <li><a href="#marcas" className="hover:text-white transition-colors">Marcas</a></li>
                </ul>
              </div>
              <div className="flex flex-col items-center md:items-start">
                <h4 className="font-poppins font-semibold uppercase text-xl mb-6">Nuestros partners</h4>
                <div className="flex flex-col gap-6">
                  {/* Partner: Max Continental */}
                  <a href="https://www.maxcontinental.com/" target="_blank" rel="noreferrer" className="group">
                    <img 
                      src="https://indigo-spider-680423.hostingersite.com/wp-content/uploads/2026/04/logo-max-transp.png" 
                      alt="Logo Max Continental" 
                      className="h-10 w-auto brightness-0 invert opacity-60 group-hover:opacity-100 transition-all duration-300"
                    />
                  </a>
                  {/* Partner: Distribuidora Gamma */}
                  <a href="https://www.distribuidoragamma.com.ar/" target="_blank" rel="noreferrer" className="group">
                    <img 
                      src="https://indigo-spider-680423.hostingersite.com/wp-content/uploads/2026/04/logo-gamma.png" 
                      alt="Logo Distribuidora Gamma" 
                      className="h-10 w-auto brightness-0 invert opacity-60 group-hover:opacity-100 transition-all duration-300"
                    />
                  </a>
                </div>
              </div>
              <div>
                <h4 className="font-poppins font-semibold uppercase text-xl mb-6">Contacto</h4>
                <div className="space-y-4 font-sans text-white/60">
                  <p className="flex items-center justify-center md:justify-start gap-2 italic"><Mail size={18} /> administracion@cdgimport.com</p>
                  <p className="flex items-center justify-center md:justify-start gap-2 italic"><MapPin size={18} /> Parque Industrial - Tandil</p>
                </div>
              </div>
            </div>
            <div className="pt-8 border-t border-white/5 text-center text-white/20 text-xs font-bold uppercase tracking-widest">
              © 2026 CDG - TODOS LOS DERECHOS RESERVADOS.
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
