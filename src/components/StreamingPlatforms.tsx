import React from 'react';
import { motion } from 'framer-motion';
import { Music, Play, ExternalLink } from 'lucide-react';

const StreamingPlatforms: React.FC = () => {
  const platforms = [
    {
      name: 'Spotify',
      url: 'https://open.spotify.com/artist/2FwWGogJ04HZdALWeMxZA4',
      icon: Music,
      color: 'from-green-400 to-green-600'
    },
    {
      name: 'Apple Music',
      url: 'https://music.apple.com/ie/artist/didi-b/549549219',
      icon: Music,
      color: 'from-gray-600 to-gray-800'
    },
    {
      name: 'Amazon Music',
      url: 'https://music.amazon.com/artists/B008S3BMEY/didi-b',
      icon: Music,
      color: 'from-orange-400 to-orange-600'
    },
    {
      name: 'YouTube',
      url: 'https://www.youtube.com/@DidiBKiffnobeatTV',
      icon: Play,
      color: 'from-red-500 to-red-700'
    },
    {
      name: 'BoomPlay',
      url: 'https://www.boomplay.com/artists/1289999',
      icon: Music,
      color: 'from-purple-500 to-purple-700'
    }
  ];

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-white mb-4">Écoutez partout</h2>
          <p className="text-gray-400 text-lg">Retrouvez ma musique sur toutes les plateformes</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {platforms.map((platform, index) => (
            <motion.a
              key={platform.name}
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className={`bg-gradient-to-br ${platform.color} p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300`}>
                <div className="flex flex-col items-center text-center">
                  <platform.icon className="h-8 w-8 text-white mb-3" />
                  <span className="text-white font-semibold text-sm">{platform.name}</span>
                  <ExternalLink className="h-4 w-4 text-white/70 mt-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StreamingPlatforms;