import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Send, Heart } from 'lucide-react';

const Reviews: React.FC = () => {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (rating > 0 && name && comment) {
      // Aqui você pode integrar com um serviço de avaliações
      console.log({ rating, name, comment });
      setSubmitted(true);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setSubmitted(false);
        setRating(0);
        setName('');
        setComment('');
      }, 3000);
    }
  };

  const renderStars = (interactive = false) => {
    return (
      <div className="flex items-center gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            size={24}
            className={`cursor-pointer transition-colors ${
              star <= (interactive ? (hoverRating || rating) : rating)
                ? 'text-yellow-400 fill-yellow-400' 
                : 'text-gray-300 hover:text-yellow-200'
            }`}
            onClick={() => interactive && setRating(star)}
            onMouseEnter={() => interactive && setHoverRating(star)}
            onMouseLeave={() => interactive && setHoverRating(0)}
          />
        ))}
      </div>
    );
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 border-l-4 border-brand-green pl-4 inline-block">
            Avalie Nosso Trabalho
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Sua opinião é muito importante para nós! Deixe sua avaliação e nos ajude a melhorar.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200"
        >
          {submitted ? (
            <div className="text-center py-12">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="w-16 h-16 bg-brand-green rounded-full flex items-center justify-center mx-auto mb-4"
              >
                <Heart className="text-white" size={32} />
              </motion.div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Obrigado!</h3>
              <p className="text-gray-600">Sua avaliação foi enviada com sucesso. Agradecemos seu feedback!</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Rating Stars */}
              <div className="text-center">
                <label className="block text-lg font-semibold text-gray-900 mb-4">
                  Como você avalia nosso trabalho?
                </label>
                <div className="flex justify-center mb-2">
                  {renderStars(true)}
                </div>
                <p className="text-sm text-gray-500">
                  {rating === 0 && "Clique nas estrelas para avaliar"}
                  {rating === 1 && "Muito ruim"}
                  {rating === 2 && "Ruim"}
                  {rating === 3 && "Regular"}
                  {rating === 4 && "Bom"}
                  {rating === 5 && "Excelente"}
                </p>
              </div>

              {/* Name Input */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Seu Nome
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-green focus:border-transparent transition-all"
                  placeholder="Digite seu nome"
                  required
                />
              </div>

              {/* Comment Input */}
              <div>
                <label htmlFor="comment" className="block text-sm font-medium text-gray-700 mb-2">
                  Seu Comentário
                </label>
                <textarea
                  id="comment"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-green focus:border-transparent transition-all resize-none"
                  placeholder="Conte-nos sobre sua experiência com a Ku_KulaDevz..."
                  required
                />
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  disabled={rating === 0 || !name || !comment}
                  className="inline-flex items-center gap-2 px-8 py-3 bg-brand-green hover:bg-green-600 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-bold rounded-lg transition-all shadow-lg hover:shadow-xl transform hover:scale-105 disabled:transform-none"
                >
                  <Send size={20} />
                  Enviar Avaliação
                </button>
              </div>
            </form>
          )}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 mb-4">
            Ainda não trabalhou conosco? Entre em contato e vamos criar algo incrível juntos!
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white border-2 border-brand-green text-brand-green hover:bg-brand-green hover:text-white font-semibold rounded-lg transition-all"
          >
            Fale Conosco
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Reviews;