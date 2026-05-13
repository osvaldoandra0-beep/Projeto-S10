/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Settings, 
  ShieldCheck, 
  Wrench, 
  MessageSquare, 
  MapPin, 
  Phone, 
  CheckCircle2, 
  ChevronRight,
  Truck,
  Zap
} from "lucide-react";

export default function App() {
  const WHATSAPP_NUMBER = "5511966624077"; // Updated with user provided number
  const WHATSAPP_MESSAGE = encodeURIComponent("Olá! Vi seu site e gostaria de saber mais sobre o bloqueio de diferencial para minha S10 2010.");
  const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

  return (
    <div className="min-h-screen bg-zinc-950 text-white font-sans selection:bg-orange-600/30 selection:text-orange-200 flex flex-col p-4 md:p-8 gap-6 overflow-x-hidden">
      {/* Floating WhatsApp Button for Mobile (optional, keeping for consistency if bento block isn't enough) */}
      <motion.a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        className="fixed bottom-6 right-6 z-50 md:hidden bg-[#25D366] text-white p-4 rounded-full shadow-lg flex items-center justify-center transition-all"
        id="whatsapp-mobile"
      >
        <MessageSquare className="w-6 h-6" />
      </motion.a>

      {/* Header Section */}
      <header className="flex flex-col md:flex-row justify-between items-start md:items-end border-b border-zinc-800 pb-4 gap-4">
        <div className="flex flex-col">
          <span className="text-zinc-500 text-xs font-mono uppercase tracking-widest">Especialista Automotive</span>
          <div className="flex items-center gap-2">
            <h1 className="text-4xl font-black tracking-tighter uppercase italic">
              DIFF<span className="text-orange-600">LOCK</span> S10
            </h1>
            <Settings className="w-5 h-5 text-orange-600 animate-spin-slow" />
          </div>
        </div>
        <div className="text-left md:text-right">
          <p className="text-zinc-400 text-sm italic">"Tração total onde outros falham • S10 2010 Especialista"</p>
          <nav className="flex items-center gap-6 text-[10px] font-mono uppercase tracking-widest text-zinc-500 mt-2">
            <a href="#diferencial" className="hover:text-orange-600 transition-colors">Diferencial</a>
            <a href="#servicos" className="hover:text-orange-600 transition-colors">Serviços</a>
            <a href="#contato" className="hover:text-orange-600 transition-colors">Contato</a>
          </nav>
        </div>
      </header>

      {/* Main Bento Grid */}
      <main className="grid grid-cols-1 md:grid-cols-12 md:grid-rows-6 gap-4 flex-grow">
        
        {/* Hero Block */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="col-span-1 md:col-span-8 row-span-4 bg-zinc-900 border border-zinc-800 rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden group"
        >
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-orange-600/10 border border-orange-600/20 text-orange-500 px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-widest mb-6">
              <Zap className="w-3 h-3" /> Especialista S10 2010
            </div>
            <h2 className="text-5xl md:text-7xl font-bold leading-[0.9] mb-4 tracking-tight uppercase italic">
              Bloqueio de <br />Diferencial <span className="text-orange-600 underline decoration-2 underline-offset-8">S10 2010</span>
            </h2>
            <p className="text-zinc-400 text-lg md:text-xl max-w-md mt-6 leading-relaxed">
              Manutenção preventiva e corretiva especializada. Recupere a performance off-road e a segurança bruta do seu veículo.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-2 z-10 mt-8">
            {["Ajuste Pinhão", "Limpeza Satélites", "Lubrificação High-Perf", "Troca de Discos"].map((tag) => (
              <div key={tag} className="bg-zinc-800 px-4 py-2 rounded-full text-[10px] font-mono uppercase tracking-widest border border-zinc-700 text-zinc-300">
                {tag}
              </div>
            ))}
          </div>

          {/* Decorative Element */}
          <div className="absolute -right-20 -bottom-20 opacity-5 group-hover:opacity-10 transition-opacity duration-1000">
             <svg width="400" height="400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
               <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="4"/><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
             </svg>
          </div>
          
          <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
            <img 
              src="https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=2000" 
              alt="Rugged terrain" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </motion.div>

        {/* Stats Block */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          className="col-span-1 md:col-span-4 row-span-2 bg-orange-600 rounded-3xl p-6 flex flex-col justify-center items-center text-center group transition-colors hover:bg-orange-700"
        >
          <span className="text-7xl font-black tracking-tighter">12+</span>
          <span className="text-orange-200 font-bold uppercase tracking-widest text-xs">Anos de Experiência</span>
          <p className="mt-4 text-white/80 text-[10px] font-mono uppercase leading-tight">Referência técnica em mecânica pesada e tração 4x4.</p>
        </motion.div>

        {/* Why Us Block */}
        <motion.div 
          id="diferencial"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="col-span-1 md:col-span-4 row-span-2 bg-zinc-900 border border-zinc-800 rounded-3xl p-6 flex flex-col justify-between hover:border-zinc-700 transition-colors"
        >
          <div className="w-12 h-12 bg-zinc-800 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110">
            <ShieldCheck className="text-orange-600 w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl font-bold uppercase italic tracking-tight">Segurança Garantida</h3>
            <p className="text-zinc-500 text-sm mt-2 leading-relaxed">Evite quebras inesperadas no diferencial que podem travar as rodas em movimento ou causar patinação excessiva.</p>
          </div>
        </motion.div>

        {/* WhatsApp Block */}
        <motion.a 
          href={WHATSAPP_URL}
          target="_blank"
          rel="noreferrer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="col-span-1 md:col-span-6 row-span-2 bg-[#25D366] rounded-3xl p-8 flex items-center justify-between group cursor-pointer hover:shadow-2xl hover:shadow-green-500/20 transition-all"
        >
          <div className="text-zinc-950">
            <h3 className="text-3xl font-black uppercase tracking-tighter">Falar com Especialista</h3>
            <p className="font-bold opacity-80 uppercase text-xs tracking-widest mt-1">Tire suas dúvidas agora pelo WhatsApp</p>
          </div>
          <div className="bg-white rounded-full p-5 shadow-xl group-hover:scale-110 transition-transform">
            <MessageSquare className="w-10 h-10 text-[#25D366]" fill="#25D366" />
          </div>
        </motion.a>

        {/* Technical Specs / Services Block */}
        <motion.div 
          id="servicos"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="col-span-1 md:col-span-6 row-span-2 bg-zinc-800 border border-zinc-700 rounded-3xl p-6 flex flex-col md:flex-row gap-6 items-center hover:bg-zinc-800/80 transition-colors"
        >
          <div className="flex-1">
            <h4 className="text-zinc-500 font-mono text-[10px] uppercase mb-4 tracking-[0.2em]">Serviço Premium Especializado</h4>
            <ul className="text-sm space-y-3 font-medium">
              {[
                "Instalação de Bloqueio 100%",
                "Manutenção Coroa & Pinhão",
                "Fluido Especial com Aditivo",
                "Garantia Técnica de 6 meses"
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-zinc-300">
                  <div className="w-2 h-2 bg-orange-600 rounded-full" /> {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full md:w-32 h-32 bg-zinc-900 border border-zinc-700 rounded-2xl flex flex-col items-center justify-center shrink-0">
             <span className="text-orange-600 font-black text-3xl tracking-tighter">100%</span>
             <span className="text-[10px] uppercase font-mono opacity-50 tracking-widest mt-1">Eficácia</span>
          </div>
        </motion.div>

      </main>

      {/* Logistics Banner (Full Width within padding) */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="bg-orange-600 rounded-3xl p-8 text-white flex flex-col md:flex-row items-center gap-6"
      >
        <Truck className="w-16 h-16 shrink-0 opacity-80" />
        <div className="flex-grow text-center md:text-left">
          <h4 className="text-2xl font-black uppercase italic tracking-tighter">Atendemos via Envio de Peça</h4>
          <p className="font-bold text-orange-100 uppercase text-xs tracking-widest mt-1">Envie seu diferencial para manutenção e receba em qualquer lugar do Brasil com selo de garantia.</p>
        </div>
        <a 
          href={WHATSAPP_URL} 
          className="bg-zinc-950 text-white px-8 py-4 rounded-xl font-black uppercase text-sm tracking-widest hover:bg-zinc-900 transition-all shrink-0 shadow-lg"
        >
          Logística Reversa
        </a>
      </motion.div>

      {/* Footer Bar */}
      <footer id="contato" className="flex flex-col md:flex-row justify-between items-center text-zinc-600 text-[10px] font-mono uppercase tracking-widest pt-4 border-t border-zinc-900 gap-4">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> Oficina Especializada 4x4</span>
          <span className="hidden md:inline">•</span>
          <span className="flex items-center gap-1"><Phone className="w-3 h-3" /> Suporte Técnico</span>
        </div>
        <div className="text-center md:text-right flex flex-col md:flex-row gap-4">
          <span>© 2024 S10MASTER Maintenance Systems</span>
          <span className="text-orange-600 opacity-50">Especialidade: Chevrolet S10 (2010)</span>
        </div>
      </footer>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 12s linear infinite;
        }
        html { scroll-behavior: smooth; }
      `}} />
    </div>
  );
}

