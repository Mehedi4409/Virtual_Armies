import React, { useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router-dom';
import Wrapper from './Wrapper';
import { MenuIcon } from 'lucide-react';
import BigMenu from './BigMenu';

const NAV_LINKS = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    // { name: 'contact', path: '/contact' },
    { name: 'Experience', path: '/experience' },
];

const Navbar = () => {
    const location = useLocation();
    const { scrollY } = useScroll();

    const [hidden, setHidden] = useState(false);
    const [scrolledPastHero, setScrolledPastHero] = useState(false);
    // const [menuOpen, setMenuOpen] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious();

        if (previous && latest > previous && latest > 100) {
            setHidden(true);
        } else {
            setHidden(false);
        }

        setScrolledPastHero(latest > window.innerHeight);
    });

    const navBgClass = scrolledPastHero ? "bg-white" : "bg-transparent";

    return (
        <>
            <motion.div
                initial={{ y: 0 }}
                animate={{ y: hidden ? "-100%" : "0%" }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className={`fixed top-0 w-full z-40 py-4 ${navBgClass}`}
            >
                <Wrapper>
                    <div className="flex justify-between items-center">
                        <div className="flex-1">
                            <Button size="lg" variant="white">Virtual Armies</Button>
                        </div>

                        {/* NAV LINKS */}
                        <div className="flex-none flex gap-2 hover:gap-3 transition-all duration-300 bg-slate-100 py-2 px-3 rounded-lg">
                            {NAV_LINKS.map(({ name, path }) => {
                                const isActive = location.pathname === path;
                                return (
                                    <Link key={name} to={path}>
                                        <Button variant={isActive ? "nav" : "navWhite"}>
                                            {name}
                                        </Button>
                                    </Link>
                                );
                            })}
                        </div>

                        {/* CTA BUTTONS */}
                        <div className="flex-1 flex justify-end gap-2">
                            <Link to="/contact">
                                <Button variant="secondary" size="lg">Contact Us</Button>
                            </Link>
                            <Button
                                size="icon-lg"
                                variant="menu"
                                onClick={() => setMenuOpen(true)}
                            >
                                <MenuIcon />
                            </Button>
                        </div>
                    </div>
                </Wrapper>
            </motion.div>

            {/* Big Menu */}
            {/* <BigMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} /> */}
        </>
    );
};

export default Navbar;
