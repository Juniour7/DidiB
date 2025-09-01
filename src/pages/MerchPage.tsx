import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Star } from 'lucide-react';

const MerchPage: React.FC = () => {
  const merchItems = [
    {
      name: 'T-Shirt DIDI B Classic',
      price: '25€',
      image: 'https://images.pexels.com/photos/1018911/pexels-photo-1018911.jpeg',
      rating: 5
    },
    {
      name: 'Hoodie Mojaveli',
      price: '45€',
      image: 'https://images.pexels.com/photos/2294342/pexels-photo-2294342.jpeg',
      rating: 5
    },
    {
      name: 'Casquette DIDI B',
      price: '20€',
      image: 'https://images.pexels.com/photos/1126993/pexels-photo-1126993.jpeg',
      rating: 4
    },
    {
      name: 'Poster Vintage',
      price: '15€',
      image: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg',
      rating: 5
    },
    {
      name: 'CD Album Collector',
      price: '30€',
      image: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg',
      rating: 5
    },
    {
      name: 'Sac DIDI B',
      price: '35€',
      image: 'https://images.pexels.com/photos/1699161/pexels-photo-1699161.jpeg',
      rating: 4
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
            <span className="text-yellow-400">Merch</span> Store
          </motion.h1>
          <motion.p
            className="text-xl text-gray-300 max-w-2xl mx-auto"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Représentez votre artiste préféré avec style
          </motion.p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {merchItems.map((item, index) => (
              <motion.div
                key={index}
                className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03 }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm rounded-full px-3 py-1">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-3 w-3 ${
                            i < item.rating ? 'text-yellow-400 fill-current' : 'text-gray-600'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-yellow-400 transition-colors">
                    {item.name}
                  </h3>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-yellow-400">{item.price}</span>
                    <button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-2 rounded-full font-semibold hover:from-yellow-500 hover:to-orange-600 transition-all duration-200 transform hover:scale-105 flex items-center">
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      Acheter
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mt-16"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-400 mb-6">
              Livraison gratuite pour toute commande de plus de 50€
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
              <span>✓ Paiement sécurisé</span>
              <span>✓ Livraison mondiale</span>
              <span>✓ Retours gratuits</span>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default MerchPage;