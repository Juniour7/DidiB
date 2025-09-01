import React from 'react';
import { motion } from 'framer-motion';
import { Play, ExternalLink, Calendar } from 'lucide-react';

const ProjetsPage: React.FC = () => {
  const musicTracks = [
    {
      title: 'Didi B - En Haut',
      url: 'https://open.spotify.com/track/595jJM2sqdHwv1kvcZUHTl?si=8dd7f2bde7ad400f',
      image: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg'
    },
    {
      title: 'Didi B - L\'argent feat @DADJU',
      url: 'https://open.spotify.com/track/7FRniN2WWFoH77P3gFf51r?si=7bef6c64ebf74226',
      image: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg'
    },
    {
      title: 'Didi B - Tala',
      url: 'https://open.spotify.com/track/7zEnFfGPhNdyjsNuxvNs9s?si=873d8b7f00de4494',
      image: 'https://images.pexels.com/photos/1699161/pexels-photo-1699161.jpeg'
    },
    {
      title: 'Didi B - Holiday Season',
      url: 'https://open.spotify.com/track/6BovZi5xW96aWgGZVmToRe?si=cbd3a27ea81940c2',
      image: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg'
    }
  ];

  const videos = [
    {
      title: 'Didi B - En Haut',
      url: 'https://youtu.be/e0K3OjNHTtA?si=ugLx9-YdbhOyk2nz',
      thumbnail: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg'
    },
    {
      title: 'Didi B - L\'argent feat @DADJU',
      url: 'https://youtu.be/DKCQ_5s7pRE?si=B0mjeCDnGTsMvtwB',
      thumbnail: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg'
    },
    {
      title: 'Didi B - Tala',
      url: 'https://youtu.be/VHI2QPzlThk?si=Vc1D7T226RvfYK6-',
      thumbnail: 'https://images.pexels.com/photos/1699161/pexels-photo-1699161.jpeg'
    },
    {
      title: 'Didi B - Holiday Season',
      url: 'https://youtu.be/ESVsB0QLe74?si=idnAc87qyZGcjdDo',
      thumbnail: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-20"
    >
      {/* Header */}
      <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            className="text-5xl sm:text-6xl font-bold text-white mb-6"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Mes <span className="text-yellow-400">Projets</span>
          </motion.h1>
          <motion.p
            className="text-xl text-gray-300 max-w-2xl mx-auto"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Découvrez ma discographie et mes clips vidéo les plus populaires
          </motion.p>
        </div>
      </section>

      {/* Music Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-4xl font-bold text-white mb-12 text-center"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Musiques Populaires
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {musicTracks.map((track, index) => (
              <motion.div
                key={index}
                className="group cursor-pointer"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="relative overflow-hidden rounded-2xl shadow-lg">
                  <img
                    src={track.image}
                    alt={track.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <a
                      href={track.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-green-500 text-white p-4 rounded-full hover:bg-green-600 transition-colors"
                    >
                      <Play className="h-6 w-6" />
                    </a>
                  </div>
                </div>
                <div className="mt-4">
                  <h3 className="text-lg font-semibold text-white group-hover:text-yellow-400 transition-colors">
                    {track.title}
                  </h3>
                  <p className="text-gray-400">Single</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Videos Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-4xl font-bold text-white mb-12 text-center"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Vidéos Populaires
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {videos.map((video, index) => (
              <motion.div
                key={index}
                className="group cursor-pointer"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="relative overflow-hidden rounded-2xl shadow-lg">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <a
                      href={video.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-red-600 text-white p-4 rounded-full hover:bg-red-700 transition-colors"
                    >
                      <Play className="h-8 w-8" />
                    </a>
                  </div>
                </div>
                <div className="mt-4">
                  <h3 className="text-lg font-semibold text-white group-hover:text-yellow-400 transition-colors">
                    {video.title}
                  </h3>
                  <p className="text-gray-400">Clip officiel</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

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
              Vous aimez ce que vous entendez ? Réservez Didi B pour votre prochain événement et offrez une expérience musicale exceptionnelle.
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

export default ProjetsPage;