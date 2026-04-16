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
import { motion, AnimatePresence } from 'framer-motion';

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
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Brands', href: '#brands' },
    { name: 'Contact', href: '#contact' },
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
    "https://indigo-spider-680423.hostingersite.com/wp-content/uploads/2026/04/medicon-1.png",
    "https://indigo-spider-680423.hostingersite.com/wp-content/uploads/2026/04/topdres.png",
    "https://indigo-spider-680423.hostingersite.com/wp-content/uploads/2026/04/bajaypack.jpg",
    "https://indigo-spider-680423.hostingersite.com/wp-content/uploads/2026/04/higiemax-color-scaled.png",
    "https://indigo-spider-680423.hostingersite.com/wp-content/uploads/2026/04/index-color.png",
    "https://indigo-spider-680423.hostingersite.com/wp-content/uploads/2026/04/infumed.png",
    "https://indigo-spider-680423.hostingersite.com/wp-content/uploads/2026/04/intratub.png",
    "https://indigo-spider-680423.hostingersite.com/wp-content/uploads/2026/04/Logo-Urocare.png",
    "https://indigo-spider-680423.hostingersite.com/wp-content/uploads/2026/04/Max-Continental-viejo.png",
    "https://indigo-spider-680423.hostingersite.com/wp-content/uploads/2026/04/medline.jpg",
    "https://indigo-spider-680423.hostingersite.com/wp-content/uploads/2026/04/max-sutures-color.png",
    "https://indigo-spider-680423.hostingersite.com/wp-content/uploads/2026/04/medical-precision-color.png",
    "https://indigo-spider-680423.hostingersite.com/wp-content/uploads/2026/04/Medispo-normal.png",
    "https://indigo-spider-680423.hostingersite.com/wp-content/uploads/2026/04/one-band-color-scaled.png",
    "https://indigo-spider-680423.hostingersite.com/wp-content/uploads/2026/04/one-gloves-color.png",
    "https://indigo-spider-680423.hostingersite.com/wp-content/uploads/2026/04/Healcath.png",
    "https://indigo-spider-680423.hostingersite.com/wp-content/uploads/2026/04/Healcath-Plus.png",
    "https://indigo-spider-680423.hostingersite.com/wp-content/uploads/2026/04/protbarrier.png"
  ];

  const LanguageSelector = ({ mobile = false }: { mobile?: boolean }) => (
    <div className={`flex items-center gap-6 ${mobile ? 'justify-center mt-10' : 'ml-10 pl-10 border-l border-white/10'}`}>
      <button onClick={() => window.location.replace('https://cdgimportadora.com.ar')} className="flex items-center gap-2 group transition-all">
        <img src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Spain.svg" alt="Spanish" className="w-4 h-3 object-cover rounded-sm opacity-40 group-hover:opacity-100 transition-opacity" />
        <span className={`text-[11px] font-bold tracking-[0.2em] transition-colors ${mobile ? 'text-lg' : 'text-white/40 group-hover:text-white'}`}>ES</span>
      </button>
      <span className="text-white/10 font-thin select-none">|</span>
      <button onClick={() => window.location.replace('https://cdgimportadora.com.ar/en')} className="flex items-center gap-2 group transition-all">
        <img src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_the_United_States.svg" alt="English" className="w-4 h-3 object-cover rounded-sm opacity-60 group-hover:opacity-100 transition-opacity" />
        <span className={`text-[11px] font-bold tracking-[0.2em] transition-colors ${mobile ? 'text-lg' : 'text-white'}`}>EN</span>
      </button>
    </div>
  );

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
              <img src="https://indigo-spider-680423.hostingersite.com/wp-content/uploads/2026/03/CDG-2-scaled.png" alt="CDG Logo" className="h-10 md:h-16 w-auto brightness-0 invert" />
            </motion.div>

            <div className="hidden md:flex items-center">
              <div className="flex gap-10">
                {navLinks.map((link, i) => (
                  <motion.a key={link.name} href={link.href} initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="text-[11px] font-bold hover:text-white/70 transition-colors uppercase tracking-[0.25em] relative group">
                    {link.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                  </motion.a>
                ))}
              </div>
              <LanguageSelector />
            </div>

            <button className="md:hidden p-2 hover:bg-white/10 rounded-lg transition-colors" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: '100vh' }} exit={{ opacity: 0, height: 0 }} className="md:hidden fixed top-0 left-0 w-full bg-black/95 backdrop-blur-2xl z-40 overflow-hidden flex flex-col justify-center">
                <button className="absolute top-8 right-8" onClick={() => setMobileMenuOpen(false)}><X size={32} /></button>
                <div className="px-6 flex flex-col gap-8 text-center">
                  {navLinks.map((link) => (
                    <a key={link.name} href={link.href} onClick={() => setMobileMenuOpen(false)} className="text-3xl font-bold uppercase tracking-widest hover:text-[#911913] transition-colors">{link.name}</a>
                  ))}
                  <LanguageSelector mobile={true} />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>

        <main>
          <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
            <div className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat bg-fixed opacity-30" style={{ backgroundImage: `url('https://indigo-spider-680423.hostingersite.com/wp-content/uploads/2026/04/cdg-inicio-importadora.jpg')` }} />
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-[#911913]/90 z-0" />
            <div className="max-w-7xl mx-auto px-6 w-full relative z-10 text-center">
              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="flex flex-col items-center">
                <img src="https://indigo-spider-680423.hostingersite.com/wp-content/uploads/2026/03/CDG-2-scaled.png" alt="CDG Import" className="w-auto h-24 md:h-40 lg:h-48 mb-10 brightness-0 invert drop-shadow-[0_0_30px_rgba(255,255,255,0.3)]" />
                <p className="font-sans text-xl md:text-3xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
                  We are the official import and export trade division of <br className="hidden md:block" />
                  <strong>Max Continental</strong> and <strong>Distribuidora Gamma</strong>.
                </p>
                <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} href="#about" className="px-12 py-6 bg-white text-[#911913] font-bold rounded-full transition-all text-lg tracking-widest uppercase">Learn More</motion.a>
              </motion.div>
            </div>
          </section>

          <section id="about" className="py-24 lg:py-32 px-6 bg-white/5 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
                <div className="rounded-[40px] lg:rounded-[60px] overflow-hidden shadow-2xl border-4 border-white/10 aspect-[4/5] relative group">
                  <img src="https://indigo-spider-680423.hostingersite.com/wp-content/uploads/2026/04/cdg-importadora-deposito.jpg" alt="CDG Warehouse" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold uppercase mb-8 lg:mb-10 tracking-tighter leading-[1.1]">WHO WE ARE</h2>
                <p className="text-lg lg:text-xl text-white/70 mb-6 leading-relaxed">A leading firm in the import and export of medical products, ensuring international logistics and distribution standards for hospital-grade supplies.</p>
                <div className="grid grid-cols-2 gap-8 mt-12">
                  <div className="flex flex-col gap-2">
                    <Award size={32} className="text-[#e74520]" />
                    <div className="text-3xl font-bold">Since 2003</div>
                    <div className="text-xs text-white/40 uppercase font-bold tracking-widest">Expertise & Quality</div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <VenetianMask size={32} className="text-[#e74520]" />
                    <div className="text-3xl font-bold">500+</div>
                    <div className="text-xs text-white/40 uppercase font-bold tracking-widest">Imported Products</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>

          <section id="brands" className="py-24 lg:py-32 overflow-hidden bg-black/20">
            <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-tighter mb-4">Brands That Trust Us</h2>
              <div className="w-24 h-1 bg-[#e74520] mx-auto"></div>
            </div>
            <div className="flex relative" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
              <motion.div animate={{ x: isPaused ? undefined : [0, -6240] }} transition={{ duration: 55, repeat: Infinity, ease: "linear" }} className="flex gap-8 whitespace-nowrap">
                {[...marcas, ...marcas, ...marcas].map((logo, i) => (
                  <div key={i} className="flex-shrink-0 w-48 h-24 bg-[#F6F6F6] rounded-2xl flex items-center justify-center px-6">
                    <img src={logo} alt="Brand Logo" className="max-w-full max-h-[65%] object-contain opacity-80 hover:opacity-100 transition-opacity" />
                  </div>
                ))}
              </motion.div>
            </div>
          </section>
        </main>

        <footer id="contact" className="pt-24 pb-12 bg-black/40 px-6 border-t border-white/5 text-center md:text-left">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 items-start">
              <div className="flex flex-col items-center md:items-start">
                <img src="https://indigo-spider-680423.hostingersite.com/wp-content/uploads/2026/03/CDG-2-scaled.png" alt="CDG Logo" className="h-16 w-auto brightness-0 invert" />
              </div>
              <div>
                <h4 className="font-semibold uppercase text-xl mb-6">Navigation</h4>
                <ul className="space-y-4 text-white/50">
                  <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
                  <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
                  <li><a href="#brands" className="hover:text-white transition-colors">Brands</a></li>
                </ul>
              </div>
              <div className="flex flex-col items-center md:items-start">
                <h4 className="font-semibold uppercase text-xl mb-6">Our Partners</h4>
                <div className="flex flex-col gap-6">
                  <img src="https://indigo-spider-680423.hostingersite.com/wp-content/uploads/2026/04/logo-max-transp.png" alt="Max Continental" className="h-10 w-auto brightness-0 invert opacity-60" />
                  <img src="https://indigo-spider-680423.hostingersite.com/wp-content/uploads/2026/04/logo-gamma.png" alt="Distribuidora Gamma" className="h-10 w-auto brightness-0 invert opacity-60" />
                </div>
              </div>
              <div>
                <h4 className="font-semibold uppercase text-xl mb-6">Contact</h4>
                <div className="space-y-4 text-white/60">
                  <p className="flex items-center justify-center md:justify-start gap-2 italic"><Mail size={18} /> administracion@cdgimport.com</p>
                  <p className="flex items-center justify-center md:justify-start gap-2 italic"><MapPin size={18} /> Industrial Park - Tandil, Arg.</p>
                </div>
              </div>
            </div>
            <div className="pt-8 border-t border-white/5 text-center text-white/20 text-xs font-bold uppercase tracking-widest">
              © 2026 CDG - ALL RIGHTS RESERVED.
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
