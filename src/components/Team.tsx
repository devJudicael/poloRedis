import React from "react";
import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

import elogeimg from "../assets/elogepic.jpg";
import judicaelimg from "../assets/judicaelpic.jpg";
import younoussimg from "../assets/younousspic.jpg";
import marcimg from "../assets/marcpic.jpg";
import calixteimg from "../assets/calixtepic.jpg";
import presiimg from "../assets/presipic.jpg";

const team = [
  {
    name: "Tinde Pehe Calixte",
    role: "Développement Frontend",
    image: calixteimg,
    bio: "Dévéloppeur React , Tailwind , Zustand",
    social: {
      whatsapp: "https://wa.me/+22552767349",
      linkedin:
        "https://www.linkedin.com/in/tinde-p%C3%A9h%C3%A9-calixte-hassan-6a982b336",
      email: "mailto:sophie@example.com",
    },
  },
  {
    name: "Cakpo Judicael",
    role: "Développement Frontend",
    image: judicaelimg,
    bio: "Dévéloppeur React , Tailwind , Zustand",
    social: {
      whatsapp: "https://wa.me/+2250564624366",
      linkedin: "https://www.linkedin.com/in/judicael-cakpo-6907b32a0",
      email: "mailto:thomas@example.com",
    },
  },
  {
    name: "Bamba Younouss",
    role: "Développement Backend",
    image: younoussimg,
    bio: "Développeur API PHP/Laravel",
    social: {
      whatsapp: "https://wa.me/+22566293579",
      linkedin: "https://www.linkedin.com/in/bamba-younouss-b63277314",
      email: "mailto:marie@example.com",
    },
  },
  {
    name: "Bamidele Marc Emmanuel",
    role: "Développement Backend",
    image: marcimg,
    bio: "Développeur API PHP/Laravel",
    social: {
      whatsapp: "https://wa.me/+22540022693",
      linkedin: "https://linkedin.com",
      email: "mailto:marie@example.com",
    },
  },
  {
    name: "Kouhou Moneka Eloge",
    role: "Développement Backend",
    image: elogeimg,
    bio: "Développeur API PHP/Laravel",
    social: {
      whatsapp: "https://wa.me/+22540834531",
      linkedin:
        "https://www.linkedin.com/in/monneka-ange-eloge-kohou-143415327/",
      email: "mailto:marie@example.com",
    },
  },
];

export const Team: React.FC = () => {
  return (
    <div className="container mx-auto px-4 pt-24 pb-12">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold text-center mb-12">
        Notre Équipe
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/** Presi */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 * 0.1 }}
          className="bg-white rounded-xl shadow-2xl overflow-hidden border-4 border-indigo-500 transform scale-105">
          <div>
            <img
              src={presiimg}
              alt="Président"
              className="w-full h-[25rem] object-cover"
            />
          </div>
          <div className="p-6">
            <h3 className="text-2xl font-semibold mb-2">Boua Ange Désiré</h3>
            <p className="text-indigo-600 font-medium mb-4">Président REDIS</p>
            <p className="text-gray-600 mb-6">
              Initiateur et coordonateur du projet
            </p>

            <div className="flex justify-center space-x-4">
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href="https://wa.me/22555294324"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900">
                <FaWhatsapp className="h-6 w-6" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900">
                <Linkedin className="h-6 w-6" />
              </motion.a>
            </div>
          </div>
        </motion.div>

        {team.map((member, index) => (
          <motion.div
            key={member.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="aspect-w-1 aspect-h-1">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-[25rem] object-cover"
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
                  href={member.social.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900">
                  <FaWhatsapp className="h-5 w-5" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  href={member.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900">
                  <Linkedin className="h-5 w-5" />
                </motion.a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
