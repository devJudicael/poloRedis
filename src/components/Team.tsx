import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

const team = [
  {
    name: 'Sophie Martin',
    role: 'Designer Principal',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
    bio: 'Passionnée par la mode et le design, Sophie apporte son expertise dans la création de nos collections.',
    social: {
      github: 'https://github.com',
      linkedin: 'https://linkedin.com',
      email: 'mailto:sophie@example.com'
    }
  },
  {
    name: 'Thomas Dubois',
    role: 'Développeur Full Stack',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
    bio: 'Expert en développement web, Thomas a créé la plateforme de précommande en ligne.',
    social: {
      github: 'https://github.com',
      linkedin: 'https://linkedin.com',
      email: 'mailto:thomas@example.com'
    }
  },
  {
    name: 'Marie Laurent',
    role: 'Responsable Marketing',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400',
    bio: 'Marie gère la stratégie marketing et la communication de notre marque.',
    social: {
      github: 'https://github.com',
      linkedin: 'https://linkedin.com',
      email: 'mailto:marie@example.com'
    }
  }
];

export const Team: React.FC = () => {
  return (
    <div className="container mx-auto px-4 pt-24 pb-12">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold text-center mb-12"
      >
        Notre Équipe
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {team.map((member, index) => (
          <motion.div
            key={member.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-xl shadow-lg overflow-hidden"
          >
            <div className="aspect-w-1 aspect-h-1">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
              <p className="text-indigo-600 font-medium mb-4">{member.role}</p>
              <p className="text-gray-600 mb-6">{member.bio}</p>
              
              <div className="flex justify-center space-x-4">
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  href={member.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900"
                >
                  <Github className="h-5 w-5" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  href={member.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900"
                >
                  <Linkedin className="h-5 w-5" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  href={member.social.email}
                  className="text-gray-600 hover:text-gray-900"
                >
                  <Mail className="h-5 w-5" />
                </motion.a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}