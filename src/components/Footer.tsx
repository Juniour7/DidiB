import React from 'react';
import { Instagram, Facebook, Music2, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  const socialLinks = [
    { icon: Instagram, href: 'https://www.instagram.com/didibofficial/', label: 'Instagram' },
    { icon: Facebook, href: 'https://www.facebook.com/share/14UQAc6NKb/?mibextid=wwXIfr', label: 'Facebook' },
    { icon: Music2, href: 'https://www.tiktok.com/@didib.mojaveli', label: 'TikTok' },
    { icon: Twitter, href: 'https://x.com/didibofficial?s=11', label: 'Twitter' },
  ];

  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-yellow-400">DIDI B</h3>
            <p className="text-gray-400 max-w-md">
              Artiste ivoirien passionné, créateur de hits qui marquent les esprits.
              Suivez mon parcours musical et mes dernières créations.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Navigation</h4>
            <div className="space-y-2">
              <a href="/" className="block text-gray-400 hover:text-yellow-400 transition-colors">Accueil</a>
              <a href="/projets" className="block text-gray-400 hover:text-yellow-400 transition-colors">Projets</a>
              <a href="/tours" className="block text-gray-400 hover:text-yellow-400 transition-colors">Dates/Tours</a>
              <a href="/merch" className="block text-gray-400 hover:text-yellow-400 transition-colors">Merch</a>
              <a href="/bookings" className="block text-gray-400 hover:text-yellow-400 transition-colors">Bookings</a>
            </div>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Suivez-moi</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-800 rounded-full text-gray-400 hover:text-yellow-400 hover:bg-gray-700 transition-all duration-200"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">
            © 2025 Didi B. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;