
"use client"

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Star, Quote, Users, TrendingUp, Clock } from 'lucide-react'
import Image from 'next/image'

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Directeur Mbaya",
      role: "Directeur",
      school: "École Primaire Sainte-Marie, Kinshasa",
      content: "IQschool a révolutionné la gestion de notre école. Nous avons économisé 60% de temps administratif et les parents sont très satisfaits du portail.",
      rating: 5,
      image: "https://static.vecteezy.com/system/resources/previews/052/249/511/non_2x/confident-smiling-african-american-businessman-in-professional-attire-on-transparent-background-png.png"
    },
    {
      name: "Professeur Kalala",
      role: "Enseignant",
      school: "Lycée Technique de Lubumbashi",
      content: "La gestion des notes et des présences n'a jamais été aussi simple. Mes élèves et leurs parents ont accès aux résultats en temps réel.",
      rating: 5,
      image: "https://static.vecteezy.com/system/resources/previews/020/675/549/non_2x/african-american-female-teacher-at-classroom-near-blackboard-education-lecture-and-lesson-at-school-vector.jpg"
    },
    {
      name: "Maman Ngozi",
      role: "Parent d'élève",
      school: "École Primaire Les Palmiers",
      content: "Grâce au portail parent, je peux suivre les résultats de mon enfant et gérer les paiements depuis mon téléphone. C'est vraiment pratique!",
      rating: 5,
      image: "https://cdn.pixabay.com/photo/2023/03/30/08/30/africa-7887056_960_720.jpg"
    },
    {
      name: "Administrateur Mukendi",
      role: "Gestionnaire",
      school: "Complexe Scolaire Moderne",
      content: "Le module Ubank a transformé notre gestion financière. Les rapports sont clairs et nous avons une visibilité complète sur nos finances.",
      rating: 5,
      image: "https://i.pinimg.com/originals/62/98/d3/6298d39b50429bfc626e68fad02d9b12.jpg"
    }
  ]

  const stats = [
    {
      icon: Users,
      value: "150+",
      label: "Écoles partenaires",
      description: "Dans toute la RDC"
    },
    {
      icon: TrendingUp,
      value: "98%",
      label: "Taux de satisfaction",
      description: "Des utilisateurs"
    },
    {
      icon: Clock,
      value: "60%",
      label: "Temps économisé",
      description: "En administration"
    },
    {
      icon: Star,
      value: "4.9/5",
      label: "Note moyenne",
      description: "Évaluation clients"
    }
  ]

  return (
    <section className="section-padding bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Star className="h-4 w-4" />
            <span>Témoignages</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ce que disent nos utilisateurs
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez comment IQschool transforme la gestion scolaire dans 
            les établissements à travers la République Démocratique du Congo.
          </p>
        </motion.div>

        {/* Statistiques */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="text-center hover:shadow-lg transition-shadow bg-white/80 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-emerald-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <div className="text-3xl font-bold gradient-text mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm font-medium text-gray-700 mb-1">
                      {stat.label}
                    </div>
                    <div className="text-xs text-gray-500">
                      {stat.description}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>

        {/* Témoignages en grille */}
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow bg-white/80 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <h4 className="font-semibold text-gray-900">
                          {testimonial.name}
                        </h4>
                        <div className="flex items-center space-x-1">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                          ))}
                        </div>
                      </div>
                      <div className="text-sm text-gray-600 mb-3">
                        {testimonial.role} • {testimonial.school}
                      </div>
                    </div>
                  </div>
                  
                  <div className="relative">
                    <Quote className="h-6 w-6 text-gray-300 absolute top-0 left-0" />
                    <p className="text-gray-700 italic pl-8 leading-relaxed">
                      {testimonial.content}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Section de confiance */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-emerald-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Rejoignez plus de 150 écoles qui font confiance à IQschool
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Découvrez pourquoi les directeurs, enseignants et parents choisissent 
              IQschool pour moderniser la gestion scolaire.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center space-x-2 bg-white/20 rounded-full px-4 py-2">
                <Star className="h-4 w-4" />
                <span>Formation incluse</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/20 rounded-full px-4 py-2">
                <Users className="h-4 w-4" />
                <span>Support technique</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/20 rounded-full px-4 py-2">
                <TrendingUp className="h-4 w-4" />
                <span>Résultats garantis</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default TestimonialsSection
