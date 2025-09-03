import React from "react";
import { motion } from "motion/react";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Github,
  Share2
} from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative bg-black dark:bg-black border-t border-neutral-800 pt-10 pb-8 px-4 sm:px-6 lg:px-8 mt-10">
      <div className="max-w-7xl mx-auto">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Brand section */}
          <div className="lg:col-span-1 text-center md:text-left">
            <h2 className="text-2xl font-bold text-white mb-4">
              LearnSphere
            </h2>
            <p className="text-neutral-400 mb-6 max-w-sm mx-auto md:mx-0">
              Empowering learners and educators worldwide with personalized, interactive education for lifelong growth and success.
            </p>
            <SocialLinks />
          </div>

          {/* Product links */}
          <FooterSection
            title="Platform"
            links={[
              { name: "How It Works", href: "#" },
              { name: "Dashboard", href: "#" },
              { name: "Mobile App", href: "#" },
              { name: "Offline Access", href: "#" },
            ]}
          />

          {/* Company links */}
          <FooterSection
            title="About"
            links={[
              { name: "Our Mission", href: "#" },
              { name: "Success Stories", href: "#" },
              { name: "Partners", href: "#" },
              { name: "Contact Us", href: "#" },
            ]}
          />

          {/* Resources links */}
          <FooterSection
            title="Resources"
            links={[
              { name: "FAQs", href: "#" },
              { name: "User Guide", href: "#" },
              { name: "API Docs", href: "#" },
              { name: "Report Issue", href: "#" },
            ]}
          />
        </div>

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-neutral-800 text-center md:text-left gap-4">
          <p className="text-neutral-400 text-sm">
            © {new Date().getFullYear()} LearnSphere. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-4 md:gap-6 justify-center">
            <FooterLink href="#" text="Privacy Policy" />
            <FooterLink href="#" text="Terms of Service" />
            <FooterLink href="#" text="Cookie Policy" />
          </div>
        </div>
      </div>

      {/* Animated background elements */}
      <AnimatedBackground />
    </footer>
  );
}

/* ---------------- Components ---------------- */

const FooterSection = ({ title, links }) => {
  return (
    <div className="text-center md:text-left">
      <h3 className="text-lg font-semibold text-white mb-6">
        {title}
      </h3>
      <ul className="space-y-4">
        {links.map((link, index) => (
          <li key={index}>
            <motion.a
              href={link.href}
              className="group text-neutral-400 hover:text-white transition-colors relative inline-block"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-current transition-all duration-300 group-hover:w-full" />
            </motion.a>
          </li>
        ))}
      </ul>
    </div>
  );
};

const FooterLink = ({ href, text }) => (
  <a
    href={href}
    className="text-sm text-neutral-400 hover:text-white transition-colors"
  >
    {text}
  </a>
);

/* ---------------- Social Links ---------------- */

const SocialLinks = () => {
  const socials = [
    {
      name: "Facebook",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
          <path d="M22 12a10 10 0 10-11.5 9.8v-6.9H8v-3h2.5V9.5a3.5 3.5 0 013.7-3.8 14.4 14.4 0 012 .2v2.3H13a1.6 1.6 0 00-1.8 1.7v2h3.2l-.5 3h-2.7v6.9A10 10 0 0022 12z" />
        </svg>
      ),
      url: "https://facebook.com/od.rabi.09",
    },
    {
      name: "Twitter",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
          <path d="M22.46 6c-.77.35-1.6.6-2.47.7a4.26 4.26 0 001.88-2.37 8.49 8.49 0 01-2.7 1.03 4.24 4.24 0 00-7.2 3.87 12 12 0 01-8.7-4.41 4.23 4.23 0 001.31 5.66A4.24 4.24 0 012 9.6v.05a4.24 4.24 0 003.4 4.15 4.23 4.23 0 01-1.92.07 4.24 4.24 0 003.95 2.94 8.5 8.5 0 01-5.3 1.84c-.34 0-.67 0-1-.06a12 12 0 006.49 1.9c7.79 0 12.06-6.46 12.06-12.06 0-.18 0-.36-.01-.54A8.6 8.6 0 0024 4.56a8.41 8.41 0 01-2.54.7z" />
        </svg>
      ),
      url: "https://x.com/das_rabi_09",
    },
    {
      name: "Instagram",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <path d="M16 11.37a4 4 0 11-4.73-4.73 4 4 0 014.73 4.73z" />
          <line x1="17.5" y1="6.5" x2="17.5" y2="6.5" />
        </svg>
      ),
      url: "https://instagram.com/_rabi.09_",
    },
    {
      name: "LinkedIn",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
          <path d="M16 8a6 6 0 016 6v6h-3v-6a3 3 0 00-3-3 3 3 0 00-3 3v6h-3v-12h3v1.75a4.5 4.5 0 014.5-4.5zM2 9h3v12H2zM3.5 4a1.5 1.5 0 110 3 1.5 1.5 0 010-3z" />
        </svg>
      ),
      url: "https://www.linkedin.com/in/rabinarayandas/",
    },
    {
      name: "GitHub",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
          <path d="M12 2a10 10 0 00-3.17 19.49c.5.1.68-.22.68-.48v-1.69c-2.78.6-3.37-1.34-3.37-1.34a2.65 2.65 0 00-1.11-1.46c-.9-.62.07-.6.07-.6a2.1 2.1 0 011.53 1.04 2.13 2.13 0 002.91.83 2.13 2.13 0 01.64-1.33c-2.22-.26-4.56-1.11-4.56-4.95a3.87 3.87 0 011-2.69 3.6 3.6 0 01.1-2.65s.83-.27 2.72 1a9.4 9.4 0 014.95 0c1.9-1.3 2.72-1 2.72-1a3.6 3.6 0 01.1 2.65 3.87 3.87 0 011 2.69c0 3.85-2.34 4.68-4.57 4.94a2.39 2.39 0 01.68 1.88v2.79c0 .26.18.59.69.49A10 10 0 0012 2z" />
        </svg>
      ),
      url: "https://github.com/rabi-09",
    },
    
  ];


  return (
    <div className="flex justify-center md:justify-start space-x-6">
      {socials.map((social, index) => (
        <motion.a
          key={index}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-neutral-400 hover:text-white transition-colors"
          whileHover={{ scale: 1.2, rotate: 5 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          {social.icon}
        </motion.a>
      ))}
    </div>
  );
};

/* ---------------- Animated BG ---------------- */

const AnimatedBackground = () => (
  <div className="absolute inset-0 -z-10 overflow-hidden opacity-20">
    <motion.div
      className="absolute top-1/3 left-1/4 w-72 h-72 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-3xl"
      animate={{ x: [0, 50, -50, 0], y: [0, -30, 30, 0], rotate: [0, 45, -45, 0] }}
      transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
    />
    <motion.div
      className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-gradient-to-r from-pink-500 to-yellow-500 rounded-full blur-3xl"
      animate={{ x: [0, -60, 60, 0], y: [0, 40, -40, 0], rotate: [0, -45, 45, 0] }}
      transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
    />
  </div>
);
