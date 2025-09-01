import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Clock, Ticket, ExternalLink } from 'lucide-react';

const ToursPage: React.FC = () => {
  const upcomingShows = [
    {
      date: '2025-03-15',
      venue: 'Palais de la Culture',
      city: 'Abidjan',
      country: 'Côte d\'Ivoire',
      time: '20:00',
      ticketUrl: '#'
    },
    {
      date: '2025-03-22',
      venue: 'Zenith de Paris',
      city: 'Paris',
      country: 'France',
      time: '21:00',
      ticketUrl: '#'
    },
    {
      date: '2025-04-05',
      venue: 'Festival des Arts',
      city: 'Dakar',
      country: 'Sénégal',
      time: '19:30',
      ticketUrl: '#'
    },
    {
      date: '2025-04-12',
      venue: 'O2 Academy',
      city: 'Londres',
      country: 'Royaume-Uni',
      time: '20:30',
      ticketUrl: '#'
    },
    {
      date: '2025-04-20',
      venue: 'Stade Felix Houphouet',
      city: 'Abidjan',
      country: 'Côte d\'Ivoire',
      time: '18:00',
      ticketUrl: '#'
    }
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('fr-FR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

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
            Dates & <span className="text-yellow-400">Tours</span>
          </motion.h1>
          <motion.p
            className="text-xl text-gray-300 max-w-2xl mx-auto"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Ne manquez aucun de mes concerts. Retrouvez-moi en live !
          </motion.p>
        </div>
      </section>

      {/* Tour Dates */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-4xl font-bold text-white mb-12 text-center"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Concerts à venir
          </motion.h2>

          <div className="space-y-6">
            {upcomingShows.map((show, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-r from-gray-800 to-gray-900 border border-gray-700 rounded-2xl p-6 hover:border-yellow-400/50 transition-all duration-300 group"
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="bg-yellow-400/20 p-2 rounded-lg">
                        <Calendar className="h-5 w-5 text-yellow-400" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white group-hover:text-yellow-400 transition-colors">
                          {formatDate(show.date)}
                        </h3>
                        <div className="flex items-center text-gray-400 mt-1">
                          <Clock className="h-4 w-4 mr-1" />
                          {show.time}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center text-gray-300 mb-2">
                      <MapPin className="h-4 w-4 mr-2 text-yellow-400" />
                      <span className="font-semibold">{show.venue}</span>
                    </div>
                    
                    <p className="text-gray-400">
                      {show.city}, {show.country}
                    </p>
                  </div>

                  <div className="flex-shrink-0">
                    <a
                      href={show.ticketUrl}
                      className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-semibold rounded-full hover:from-yellow-500 hover:to-orange-600 transition-all duration-200 transform hover:scale-105"
                    >
                      <Ticket className="h-4 w-4 mr-2" />
                      Billets
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mt-12"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-400 mb-6">
              Plus de dates à venir. Restez connectés !
            </p>
            <a
              href="/bookings"
              className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-yellow-400 text-yellow-400 font-semibold rounded-full hover:bg-yellow-400 hover:text-black transition-all duration-200"
            >
              Réserver Didi B
              <ExternalLink className="h-5 w-5 ml-2" />
            </a>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default ToursPage;