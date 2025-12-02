import React from 'react';
import { Button } from '@/components/ui/button'; // Example shadcn button path
import { Link } from 'react-router-dom';
import Wrapper from './Wrapper';

const links = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
];

const Navbar = () => {
    return (
        <div className="absolute top-0 w-full z-40 p-4 bg-transparent dark:bg-gray-800">
            <Wrapper>
                <div className='space-x-1.5 '>
                    {links.map((link) => (
                        <Link key={link.name} to={link.path}>
                            <Button className="bg-white text-black rounded-sm">
                                {link.name}
                            </Button>
                        </Link>
                    ))}
                </div>
            </Wrapper>
        </div>
    );
};

export default Navbar;
