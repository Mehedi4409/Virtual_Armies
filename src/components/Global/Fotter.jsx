import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Linkedin, Twitter, Mail, ArrowUp } from 'lucide-react';
import Wrapper from './Wrapper'; 
import { Button } from '@/components/ui/button'; 

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const links = {
    company: [
      { label: 'About', path: '/about' },
      { label: 'Experience', path: '/experience' },
      { label: 'Privacy Policy', path: '/privacy' },
      { label: 'Terms of Service', path: '/terms' },
    ],
    services: [
      { label: 'GovCon Strategic', path: '/services' },
      { label: 'Operations-as-a-Service', path: '/services' },
      { label: 'Recruiter-as-a-Service', path: '/services' },
      { label: 'Managed IT Delivery', path: '/services' },
    ],
    sol_list_1: [
      { label: 'Idea-to-Launch', path: '/solutions' },
      { label: 'Small Biz Support', path: '/solutions' },
      { label: 'GovCon Jumpstart', path: '/solutions' },
      { label: 'GovCon Growth', path: '/solutions' },
      { label: 'Contract Accelerator', path: '/solutions' },
    ],
    sol_list_2: [
      { label: 'Multi-State Expansion', path: '/solutions' },
      { label: 'Post-Award Engine', path: '/solutions' },
      { label: 'Digitalize Business', path: '/solutions' },
      { label: 'Embedded Recruiting', path: '/solutions' },
    ],
    social: [
      { label: 'LinkedIn', icon: Linkedin, url: '#' },
      { label: 'Twitter', icon: Twitter, url: '#' },
      { label: 'Email', icon: Mail, url: '#' },
    ]
  };

  return (
    <footer className="relative min-h-[100dvh] w-full bg-[#050505] text-white flex flex-col justify-between antialiased overflow-hidden">
      
      {/* 1. TOP UTILITY */}
      <div className="pt-[clamp(2rem,6vh,4rem)] shrink-0 z-20">
        <Wrapper>
          <div className="flex justify-between items-center border-b border-white/5 pb-8">
            <div className="flex items-center gap-3">
               <div className="w-1.5 h-1.5 bg-[#48a9a6] rounded-full" />
               <h2 className="text-[clamp(12px,1.2vw,14px)] font-bold tracking-[0.1em] uppercase text-zinc-300">Virtual Armies</h2>
            </div>
            
            <button 
              onClick={scrollToTop}
              className="group flex items-center gap-2 text-sm font-medium uppercase text-zinc-300 hover:text-white transition-colors"
            >
              Back to Top <ArrowUp size={14} className="group-hover:-translate-y-1 transition-transform text-[#48a9a6]" />
            </button>
          </div>
        </Wrapper>
      </div>

      {/* 2. MAIN GRID AREA */}
      <Wrapper className="flex-1 flex flex-col justify-center z-20 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 w-full gap-16 lg:gap-4 items-start">
          
          {/* LEFT: CTA SECTION */}
          <div className="lg:col-span-4 flex flex-col justify-center space-y-10">
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
            >
              <h2 className="text-[clamp(3.5rem,8vw,6rem)] font-black leading-[0.9] tracking-tighter text-white">
                LET'S <br />
                <span className="text-zinc-600">BUILD IT.</span>
              </h2>
            </motion.div>
            
            <div className="max-w-xs space-y-8">
               <p className="text-[clamp(1rem,1.3vw,1.1rem)] text-zinc-400 font-medium ">
                 Architecting high-performance operations for the modern era.
               </p>
               <Button className="rounded-full h-12 w-1/2 text-sm bg-white text-black hover:bg-[#48a9a6] hover:text-white transition-all group">
                  Start a Project
                  <ArrowUpRight className="ml-1 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
               </Button>
            </div>
          </div>

          {/* RIGHT: THE 4X4 LINK GRID */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-12">
            
            {/* Column 1: Company */}
            <div className="space-y-6">
              <h4 className="text-md font-bold text-[#48a9a6]">Company</h4>
              <ul className="flex flex-col gap-4">
                {links.company.map((item) => (
                  <li key={item.label}>
                    <Link to={item.path} className="text-[clamp(14px,1.4vw,15px)] font-semibold text-zinc-200 hover:text-white transition-colors">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2: Service */}
            <div className="space-y-6">
              <h4 className="text-md font-bold text-[#48a9a6]">Service</h4>
              <ul className="flex flex-col gap-4">
                {links.services.map((item) => (
                  <li key={item.label}>
                    <Link to={item.path} className="text-[clamp(14px,1.4vw,15px)] font-semibold text-zinc-200 hover:text-white transition-colors">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Sol_list_1 */}
            <div className="space-y-6">
              <h4 className="text-md font-bold text-[#48a9a6]">Solutions</h4>
              <ul className="flex flex-col gap-4">
                {links.sol_list_1.map((item) => (
                  <li key={item.label}>
                    <Link to={item.path} className="text-[clamp(14px,1.4vw,15px)] font-semibold text-zinc-200 hover:text-white transition-colors">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Sol_list_2 */}
            <div className="space-y-6">
              <h4 className="text-[13px] font-medium text-transparent select-none md:block hidden">.</h4>
              <ul className="flex flex-col gap-4">
                {links.sol_list_2.map((item) => (
                  <li key={item.label}>
                    <Link to={item.path} className="text-[clamp(14px,1.4vw,15px)] font-semibold text-zinc-200 hover:text-white transition-colors">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </Wrapper>

      {/* 3. BASE UTILITY */}
      <div className="shrink-0 z-20 pb-10">
        <Wrapper>
           <div className="flex flex-col md:flex-row justify-between items-center gap-10 border-t border-white/5 pt-10">
              <div className="flex gap-10">
                {links.social.map((social) => (
                   <a key={social.label} href={social.url} className="text-zinc-300 hover:text-[#48a9a6] transition-colors group flex items-center gap-2">
                      <social.icon size={18} />
                      <span className="text-[11px] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-300">{social.label}</span>
                   </a>
                ))}
              </div>

              <p className="text-[11px] uppercase tracking-[0.2em] text-zinc-300">
                © {new Date().getFullYear()} Virtual Armies Inc.
              </p>
           </div>
        </Wrapper>
      </div>

      {/* 4. BACKGROUND WATERMARK */}
      {/* <div className="absolute bottom-[-2vw] left-0 w-full overflow-hidden pointer-events-none z-0 select-none opacity-[0.02] grayscale">
         <h1 className="text-[12vw] font-black leading-none text-white whitespace-nowrap text-center tracking-tighter">
            VIRTUAL ARMIES
         </h1>
      </div> */}

    </footer>
  );
};

export default Footer;