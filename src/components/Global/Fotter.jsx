import React from 'react';
import Wrapper from './Wrapper';
import { Link } from 'react-router-dom';
import { ArrowRight, Dot, Facebook, Linkedin } from 'lucide-react';
import { Button } from '../ui/button';

const footerData = [
  {
    title: 'Pages',
    links: [
      { label: 'Home', path: '/' },
      { label: 'About', path: '/about' },
      { label: 'Services', path: '/services' },
      { label: 'Experience', path: '/experience' },
      { label: 'Contact', path: '/contact' },
    ],
  },
  {
    title: 'Services',
    categories: [
      {
        label: 'Business',
        subLinks: [
          { label: 'Virtual Training' },
          { label: 'Strategy Planning' },
          { label: 'Consulting' },
        ],
      },
      {
        label: 'Government Contracting',
        subLinks: [
          { label: 'Simulations' },
          { label: 'AI Integration' },
          { label: 'Cybersecurity' },
        ],
      },
      {
        label: 'Defense',
        subLinks: [
          { label: 'Tactical Training' },
          { label: 'Scenario Simulation' },
        ],
      },
    ],
  },
  {
    title: 'Social',
    links: [
      { label: 'Facebook', icon: <Facebook className="w-5 h-5 text-slate-400 fill-slate-400" />, url: '#' },
      { label: 'LinkedIn', icon: <Linkedin className="w-5 h-5 text-slate-400 fill-slate-400" />, url: '#' },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="bg-[#48a9a6] text-white py-12 mx-4 rounded-lg -mt-30 h-[60vh]">
      <Wrapper>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Logo */}
          <div>
            <h1 className='text-3xl font-bold'>Virtual Armies</h1>
          </div>

          {/* Footer Columns */}
          {footerData.map((column) => (
            <div key={column.title}>
              <h3 className="font-bold text-xl mb-4">{column.title}</h3>

              {/* Services with subcategories */}
              {column.categories
                ? column.categories.map((cat, idx) => (
                    <div key={idx} className="mb-3">
                      <h4 className="font-semibold text-lg mb-1">{cat.label}</h4>
                      <ul className="space-y-1 text-sm">
                        {cat.subLinks.map((link, i) => (
                          <li key={i}>{link.label}</li> // just text
                        ))}
                      </ul>
                    </div>
                  ))
                : (
                  <ul className="space-y-2 text-sm">
                    {column.links.map((link, idx) => (
                      <li key={idx}>
                        {link.path 
                          ? <Link to={link.path} className="hover:underline">{link.label}</Link> 
                          : <a href={link.url} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 bg-white hover:bg-white/90 size-8 rounded-sm">{link.icon}</a>
                        }
                      </li>
                    ))}
                  </ul>
                )}
            </div>
          ))}

          {/* Contact Button */}
          <div className='space-y-2'>
            <h2 className='text-xl font-bold'>Contact Us</h2>
            <Button variant="fotterContactButton" size="fotterContactButtonSize">
               Contact Us <ArrowRight/>
            </Button>
          </div>
        </div>

        <div className="mt-8 text-sm opacity-80">
          &copy; {new Date().getFullYear()} Virtual Armies. All rights reserved.
        </div>
      </Wrapper>
    </footer>
  );
};

export default Footer;

