
"use client"

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { 
  BookOpen, 
  CreditCard, 
  Users, 
  Shield, 
  Zap, 
  Globe,
  CheckCircle
} from 'lucide-react'
import Image from 'next/image'

const AboutSection = () => {
  const features = [
    {
      icon: BookOpen,
      title: "Gestion Pédagogique",
      description: "Suivi des présences, carnet de notes numérique, gestion des examens et statistiques complètes.",
      color: "text-blue-600 bg-blue-100"
    },
    {
      icon: CreditCard,
      title: "Gestion Financière",
      description: "Inscriptions, paiements du minerval, comptabilité et tableaux de bord financiers.",
      color: "text-emerald-600 bg-emerald-100"
    },
    {
      icon: Users,
      title: "Portail Parent",
      description: "Interface dédiée pour les parents avec accès aux résultats et suivi des paiements.",
      color: "text-orange-600 bg-orange-100"
    },
    {
      icon: Shield,
      title: "Sécurisé",
      description: "Données protégées avec accès sécurisé et sauvegarde automatique.",
      color: "text-purple-600 bg-purple-100"
    },
    {
      icon: Zap,
      title: "Performant",
      description: "Interface rapide et intuitive optimisée pour les connexions faibles.",
      color: "text-yellow-600 bg-yellow-100"
    },
    {
      icon: Globe,
      title: "Accessible",
      description: "Disponible sur navigateur web et application mobile légère.",
      color: "text-indigo-600 bg-indigo-100"
    }
  ]

  const benefits = [
    "Réduction du temps administratif de 70%",
    "Amélioration de la communication école-parents",
    "Suivi financier transparent et précis",
    "Accès aux données en temps réel",
    "Support technique local en français",
    "Formation complète incluse"
  ]

  return (
    <section id="a-propos" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Une solution complète pour votre école
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            IQschool combine deux modules puissants - POSP et Ubank - pour offrir une 
            gestion intégrée de la pédagogie et des finances scolaires.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Image et description */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="https://get.pxhere.com/photo/office-room-classroom-school-computer-room-conference-hall-training-room-computer-training-1218112.jpg"
                alt="Directeur d'école utilisant IQschool"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
            
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900">
                Conçu pour les écoles congolaises
              </h3>
              <p className="text-gray-600 leading-relaxed">
                IQschool comprend les défis spécifiques des établissements scolaires 
                en RDC. Notre solution s'adapte à votre infrastructure existante et 
                fonctionne même avec des connexions Internet limitées.
              </p>
            </div>
          </motion.div>

          {/* Avantages */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Pourquoi choisir IQschool ?
            </h3>
            
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-3"
                >
                  <CheckCircle className="h-6 w-6 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Grille des fonctionnalités */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow group">
                  <CardContent className="p-6">
                    <div className={`w-12 h-12 rounded-lg ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default AboutSection
