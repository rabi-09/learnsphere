import React from "react";
import { motion } from "motion/react";

export default function Footer() {
  return (
    <footer className="relative bg-black dark:bg-black border-t border-neutral-800 pt-10 pb-8 px-4 sm:px-6 lg:px-8 mt-10">
      <div className="max-w-7xl mx-auto">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Brand section */}
          <div className="lg:col-span-1 text-center md:text-left">
            <h2 className="text-2xl font-bold text-white mb-4">
              CivicSight
            </h2>
            <p className="text-neutral-400 mb-6 max-w-sm mx-auto md:mx-0">
              Empowering citizens and authorities to monitor, report, and ensure billboard compliance for cleaner, safer cities.
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
            © {new Date().getFullYear()} CivicSight. All rights reserved.
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
    // same SVG icons as before...
  ];

  return (
    <div className="flex justify-center md:justify-start space-x-6">
      {socials.map((social, index) => (
        <motion.a
          key={index}
          href={social.href}
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
