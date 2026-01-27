import React, { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router-dom';
import Wrapper from './Wrapper';
import { MenuIcon, X, ChevronDown, ArrowRight } from 'lucide-react';

// --- UPDATED DETAILED DATA OBJECT ---
const MENU_DATA = {
    services: [
        {
            title: "GovCon Strategic Services",
            description: "Full-lifecycle government contracting support from registration to bid submission.",
            subServices: [
                { name: "Pay-Per-Bid Service", info: "Single-proposal technical writing and submission." },
                { name: "Certifications & Registrations", info: "SAM.gov, 8(a), WOSB, HUBZone, and state-level M/WBE." },
                { name: "Contract Vehicles & Schedules", info: "GSA eOffer/eMod, OASIS+, and FSS Schedule support." },
                { name: "360° Capture & Bid Management", info: "Forecast tracking, sourcing, and submission strategy." }
            ]
        },
        {
            title: "Operations-as-a-Service",
            description: "Scalable back-office infrastructure and long-term program execution.",
            subServices: [
                { name: "Back Office-as-a-Service", info: "Admin, documentation, SOP upkeep, and coordination." },
                { name: "Revenue Operations (RevOps)", info: "CRM hygiene, sales pipeline, and marketing execution." },
                { name: "Business Support Desk", info: "General executive assistance and owner-level task execution." },
                { name: "Virtual HQ & Team Buildout", info: "Digital office setup and assigned workforce management." }
            ]
        },
        {
            title: "Recruiter-as-a-Service",
            description: "Embedded talent acquisition functions with continuity coverage.",
            subServices: [
                { name: "Recruiter Pod (with Backup)", info: "Embedded recruiters integrated into your workflow." },
                { name: "Total Talent Management", info: "Full-scale recruiting function under your direction." }
            ]
        },
        {
            title: "Managed IT Delivery",
            description: "Bespoke technology solutions managed by our dedicated PM layer.",
            subServices: [
                { name: "Web Design & Development", info: "Professional corporate websites and landing pages." },
                { name: "App Development", info: "Custom mobile and web applications." },
                { name: "CRM/ERP Automation", info: "Tech stack connectivity and workflow automation." },
                { name: "AI Solutions", info: "ChatAI, VoiceAI, and white-label automation." }
            ]
        }
    ],
    solutions: [
        { title: "Idea-to-Launch Business Build", focus: "Entrepreneur / Startup", desc: "Digital office setup, branding, and web development." },
        { title: "Small Business Support Suite", focus: "Established Small Biz", desc: "Back-office, CRM automation, and GovCon strategy." },
        { title: "GovCon Jumpstart", focus: "New GovCon Entrants", desc: "SAM registrations, compliance, and bid management." },
        { title: "GovCon Growth System", focus: "Active Contractors", desc: "Pay-per-bid, capture management, and recruiter pods." },
        { title: "Contract Vehicle Accelerator", focus: "Experienced Bidders", desc: "GSA/OASIS+ support and technical data delivery." },
        { title: "Multi-State Expansion Program", focus: "Scaling Businesses", desc: "Foreign entity registrations and program management." },
        { title: "Post-Award Delivery Engine", focus: "Contract Winners", desc: "Execution engine for long-term contract delivery." },
        { title: "Digitalize Your Business", focus: "Efficiency Seekers", desc: "AI solutions, custom apps, and stack integration." },
        { title: "Embedded Recruiting Function", focus: "High-Hiring Companies", desc: "Total talent management and embedded recruiter pods." }
    ]
}

const Navbar = () => {
    const location = useLocation();
    const { scrollY } = useScroll();

    const [hidden, setHidden] = useState(false);
    const [scrolledPastHero, setScrolledPastHero] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => { setMobileMenuOpen(false); }, [location]);

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious();
        if (previous && latest > previous && latest > 100) {
            setHidden(true);
            setMobileMenuOpen(false);
        } else {
            setHidden(false);
        }
        setScrolledPastHero(latest > window.innerHeight);
    });

    // Keeping your original dynamic style logic
    const navBgClass = scrolledPastHero || mobileMenuOpen ? "bg-white/80 backdrop-blur-xl border-b border-zinc-100" : "bg-transparent";
    const textColorClass = scrolledPastHero || mobileMenuOpen ? "text-zinc-900" : "text-white";

    return (
        <>
            <motion.div
                initial={{ y: 0 }}
                animate={{ y: hidden ? "-100%" : "0%" }}
                transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
                className={`fixed top-0 w-full z-40 transition-colors duration-300 ${navBgClass}`}
            >
                <div className="py-4 md:py-6">
                    <Wrapper>
                        <div className="flex justify-between items-center">

                            {/* --- LOGO --- */}
                            <div className="flex-1 z-50">
                                <Link to="/">
                                    <Button
                                        size="lg"
                                        variant={scrolledPastHero || mobileMenuOpen ? "default" : "white"}
                                        className="tracking-tighter font-bold"
                                    >
                                        Virtual Armies
                                    </Button>
                                </Link>
                            </div>

                            {/* --- DESKTOP NAVIGATION (Your original map logic, with Flyout integration) --- */}
                            <div className="hidden md:flex flex-none gap-2 bg-slate-100/10 backdrop-blur-sm py-2 px-3 rounded-lg border border-white/10">
                                {['Home', 'About', 'Services', 'Solutions'].map((name) => {
                                    const path = name === 'Home' ? '/' : `/${name.toLowerCase()}`;
                                    const isActive = location.pathname === path;

                                    // If it's Services or Solutions, wrap it in the Flyout logic
                                    if (name === 'Services' || name === 'Solutions') {
                                        return (
                                            <FlyoutLink
                                                key={name}
                                                title={name}
                                                href={path}
                                                isActive={isActive}
                                                isDark={scrolledPastHero}
                                                content={name === 'Services' ? <ServicesContent /> : <SolutionsContent />}
                                            />
                                        );
                                    }

                                    return (
                                        <Link key={name} to={path}>
                                            <Button variant={isActive ? "nav" : (scrolledPastHero ? "navDark" : "navWhite")}>
                                                {name}
                                            </Button>
                                        </Link>
                                    );
                                })}
                            </div>

                            {/* --- DESKTOP CTA --- */}
                            <div className="hidden md:flex flex-1 justify-end gap-2">
                                <Link to="/contact">
                                    <Button variant={scrolledPastHero ? "default" : "secondary"} size="lg">Contact Us</Button>
                                </Link>
                            </div>

                            {/* --- MOBILE TOGGLE --- */}
                            <div className="flex md:hidden flex-1 justify-end z-50">
                                <Button size="icon" variant="ghost" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className={textColorClass}>
                                    {mobileMenuOpen ? <X size={28} /> : <MenuIcon size={28} />}
                                </Button>
                            </div>
                        </div>
                    </Wrapper>
                </div>

                {/* --- MOBILE MENU (Your original Presence logic) --- */}
                <AnimatePresence>
                    {mobileMenuOpen && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden md:hidden bg-white border-t border-slate-100"
                        >
                            <Wrapper className="py-8 flex flex-col gap-4">
                                {['Home', 'About', 'Services', 'Solutions'].map((name) => (
                                    <Link key={name} to={name === 'Home' ? '/' : `/${name.toLowerCase()}`}>
                                        <div className="text-lg font-medium py-3 text-zinc-900">{name}</div>
                                    </Link>
                                ))}
                            </Wrapper>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </>
    );
};

// --- SUBTLE FLYOUT WRAPPER ---
const FlyoutLink = ({ title, href, content, isActive, isDark }) => {
    const [open, setOpen] = useState(false);
    return (
        <div onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)} className="relative">
            <Link to={href}>
                <Button variant={isActive ? "nav" : (isDark ? "navDark" : "navWhite")} className="flex items-center gap-1">
                    {title}
                    <ChevronDown size={14} className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
                </Button>
            </Link>
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
                        className="absolute left-1/2 top-full -translate-x-1/2 pt-2"
                    >
                        <div className="bg-white border border-zinc-100 shadow-xl rounded-2xl overflow-hidden">
                            {content}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

// --- SERVICES CONTENT: LEAN & READABLE ---
const ServicesContent = () => (
    <div className="w-[1200px] p-10 grid grid-cols-2 gap-x-16 gap-y-12 bg-white">
        {MENU_DATA.services.map((service, i) => (
            <div key={i} className="flex flex-col">
                <div className="mb-5">
                    <h4 className="text-[18px] font-medium text-zinc-900 mb-1">{service.title}</h4>
                    <p className="text-[14px] text-zinc-500 font-normal leading-relaxed">{service.description}</p>
                </div>
                <div className="space-y-4 border-l border-zinc-100 pl-4">
                    {service.subServices.map((sub, idx) => (
                        <div key={idx} className="group cursor-pointer">
                            <h5 className="text-md font-semibold text-zinc-800 flex items-center gap-2">
                                {sub.name}
                                <ArrowRight size={12} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                            </h5>
                            <p className="text-[12px] text-zinc-500 font-normal">{sub.info}</p>
                        </div>
                    ))}
                </div>
            </div>
        ))}
    </div>
);

// --- SOLUTIONS CONTENT: LEAN & READABLE ---
const SolutionsContent = () => (
    <div className="w-[1000px] p-10 grid grid-cols-2 gap-x-12 gap-y-8 bg-white">
        <div className="col-span-2 mb-2 pb-4 border-b border-zinc-50">
            <span className="text-[13px] font-medium text-zinc-400">Strategic Outcomes & Applied Services</span>
        </div>
        {MENU_DATA.solutions.map((sol, i) => (
            <div key={i} className="group cursor-pointer py-2">
                <div className="flex justify-between items-baseline mb-1">
                    <h4 className="text-[16px] font-medium text-zinc-900 group-hover:text-blue-600 transition-colors">
                        {sol.title}
                    </h4>
                    <span className="text-[11px] text-zinc-400 font-normal">{sol.focus}</span>
                </div>
                <p className="text-[13px] text-zinc-500 leading-relaxed font-normal">
                    {sol.desc}
                </p>
            </div>
        ))}
    </div>
);

export default Navbar;