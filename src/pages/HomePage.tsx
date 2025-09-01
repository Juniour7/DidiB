import React from 'react';
import { motion } from 'framer-motion';
import { Play, ExternalLink, Calendar } from 'lucide-react';
import StreamingPlatforms from '../components/StreamingPlatforms';

const HomePage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
        <div className="absolute inset-0 bg-[url('/bg.jpg')] bg-cover bg-center opacity-20"></div>
        
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
          <motion.h1
            className="text-6xl sm:text-8xl lg:text-9xl font-bold mb-6"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
              DIDI B
            </span>
          </motion.h1>
          
          <motion.p
            className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Artiste Ivoirien · Créateur de hits · Mojaveli
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <a
              href="https://www.youtube.com/watch?v=AInvj5cml4M"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold rounded-full hover:from-red-700 hover:to-red-800 transition-all duration-200 transform hover:scale-105"
            >
              <Play className="h-5 w-5 mr-2" />
              Vidéo Featured
            </a>
            <a
              href="/projets"
              className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-yellow-400 text-yellow-400 font-semibold rounded-full hover:bg-yellow-400 hover:text-black transition-all duration-200 transform hover:scale-105"
            >
              Découvrir mes projets
              <ExternalLink className="h-5 w-5 ml-2" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Featured Video Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">Dernière Sortie</h2>
            <p className="text-gray-400 text-lg">Découvrez mon dernier clip vidéo</p>
          </motion.div>
          
          <motion.div
            className="aspect-video max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <iframe
              src="https://www.youtube.com/embed/AInvj5cml4M"
              title="Didi B - Featured Video"
              className="w-full h-full"
              allowFullScreen
            ></iframe>
          </motion.div>
        </div>
      </section>

      {/* Streaming Platforms */}
      <StreamingPlatforms />

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-yellow-400 to-orange-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-black mb-6">
              Réserver Didi B
            </h2>
            <p className="text-xl text-black/80 mb-8 max-w-2xl mx-auto">
              Organisez un événement inoubliable avec Didi B. Concerts, festivals, événements privés - nous sommes là pour vous.
            </p>
            <motion.a
              href="/bookings"
              className="inline-flex items-center px-8 py-4 bg-black text-white font-semibold rounded-full hover:bg-gray-800 transition-all duration-200 transform hover:scale-105 shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Calendar className="h-5 w-5 mr-2" />
              Faire une demande
            </motion.a>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default HomePage;