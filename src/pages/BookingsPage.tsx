import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Calendar, Send } from 'lucide-react';

const BookingsPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    eventType: '',
    location: '',
    date: '',
    budget: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Booking request:', formData);
    alert('Votre demande a été envoyée avec succès !');
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
            <span className="text-yellow-400">Bookings</span>
          </motion.h1>
          <motion.p
            className="text-xl text-gray-300 max-w-2xl mx-auto"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Réservez Didi B pour vos événements en Afrique et à l'international
          </motion.p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              className="space-y-8"
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Contactez-nous</h2>
                <p className="text-gray-400 text-lg mb-8">
                  Pour toute demande de booking, concert ou événement privé, 
                  contactez directement notre équipe. Nous répondons dans les 24h.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-yellow-400/20 p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-yellow-400" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Téléphone</p>
                    <a href="tel:+2250759032332" className="text-gray-400 hover:text-yellow-400 transition-colors">
                      +225 07 59 03 23 32
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-yellow-400/20 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-yellow-400" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Email</p>
                    <a href="mailto:contact@repatagency.com" className="text-gray-400 hover:text-yellow-400 transition-colors">
                      contact@repatagency.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-yellow-400/20 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-yellow-400" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Zones de service</p>
                    <p className="text-gray-400">Afrique & International</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-yellow-400/10 to-orange-500/10 border border-yellow-400/20 rounded-2xl p-6 mt-8">
                <h3 className="text-lg font-semibold text-white mb-3">Services disponibles</h3>
                <ul className="space-y-2 text-gray-400">
                  <li>• Concerts et festivals</li>
                  <li>• Événements privés</li>
                  <li>• Collaborations artistiques</li>
                  <li>• Séances photo/vidéo</li>
                </ul>
              </div>
            </motion.div>

            {/* Booking Form */}
            <motion.div
              className="bg-gray-800 rounded-2xl p-8"
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-white mb-6">Demande de booking</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 transition-colors"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 transition-colors"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Téléphone *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 transition-colors"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Entreprise/Organisation
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Type d'événement *
                    </label>
                    <select
                      name="eventType"
                      value={formData.eventType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-yellow-400 transition-colors"
                      required
                    >
                      <option value="">Sélectionner</option>
                      <option value="concert">Concert</option>
                      <option value="festival">Festival</option>
                      <option value="prive">Événement privé</option>
                      <option value="corporate">Événement corporate</option>
                      <option value="autre">Autre</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Lieu *
                    </label>
                    <input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      placeholder="Ville, Pays"
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 transition-colors"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Date souhaitée *
                    </label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-yellow-400 transition-colors"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Budget estimé
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-yellow-400 transition-colors"
                    >
                      <option value="">Sélectionner</option>
                      <option value="5k-10k">5,000€ - 10,000€</option>
                      <option value="10k-25k">10,000€ - 25,000€</option>
                      <option value="25k-50k">25,000€ - 50,000€</option>
                      <option value="50k+">50,000€+</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Décrivez votre événement, le nombre d'invités attendus, vos attentes..."
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 transition-colors resize-none"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-semibold py-4 rounded-lg hover:from-yellow-500 hover:to-orange-600 transition-all duration-200 transform hover:scale-105 flex items-center justify-center"
                >
                  <Send className="h-5 w-5 mr-2" />
                  Envoyer la demande
                </button>
              </form>

              <p className="text-gray-400 text-sm mt-4 text-center">
                * Champs obligatoires. Réponse garantie sous 24h.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default BookingsPage;