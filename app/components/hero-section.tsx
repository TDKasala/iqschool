
"use client"

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { ArrowRight, Play, School, Users, TrendingUp } from 'lucide-react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const HeroSection = () => {
  const [currentStat, setCurrentStat] = useState(0)
  const stats = [
    { number: 150, label: "Écoles partenaires", icon: School },
    { number: 25000, label: "Élèves gérés", icon: Users },
    { number: 98, label: "% de satisfaction", icon: TrendingUp },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [stats.length])

  const handleContactClick = () => {
    const element = document.querySelector('#contact')
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="accueil" className="section-padding bg-gradient-to-br from-blue-50 to-emerald-50 min-h-screen flex items-center">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Contenu principal */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <motion.h1 
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                Transformez votre école avec{' '}
                <span className="gradient-text">IQschool</span>
              </motion.h1>
              
              <motion.p 
                className="text-xl text-gray-600 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                La solution numérique complète pour la gestion pédagogique et financière 
                des écoles en République Démocratique du Congo.
              </motion.p>

              <motion.div 
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <Button 
                  onClick={handleContactClick}
                  size="lg"
                  className="bg-blue-700 hover:bg-blue-800 text-white text-lg px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all"
                >
                  Demander une démo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                
                <Button 
                  variant="outline"
                  size="lg"
                  className="text-blue-700 border-blue-700 hover:bg-blue-50 text-lg px-8 py-3 rounded-lg"
                >
                  <Play className="mr-2 h-5 w-5" />
                  Voir la vidéo
                </Button>
              </motion.div>
            </div>

            {/* Statistiques animées */}
            <motion.div 
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <div className="flex items-center justify-center space-x-4">
                {stats.map((stat, index) => {
                  const Icon = stat.icon
                  return (
                    <motion.div
                      key={index}
                      className={`text-center px-4 py-2 rounded-lg transition-all ${
                        currentStat === index ? 'bg-blue-100 text-blue-700' : 'text-gray-600'
                      }`}
                      animate={{
                        scale: currentStat === index ? 1.05 : 1,
                      }}
                    >
                      <Icon className="h-8 w-8 mx-auto mb-2" />
                      <div className="text-2xl font-bold">{stat.number.toLocaleString()}</div>
                      <div className="text-sm">{stat.label}</div>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          </motion.div>

          {/* Image principale */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://www.quill.com/content/index/resource-center/education/technology/using-tablets-in-the-classroom/images/using-tablets-in-the-classroom_960.jpg"
                alt="Étudiants utilisant la technologie en classe"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              
              {/* Éléments décoratifs */}
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-3">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">En ligne</span>
                </div>
              </div>
            </div>

            {/* Cartes flottantes */}
            <motion.div
              className="absolute -top-4 -left-4 bg-white rounded-lg shadow-lg p-4 max-w-xs"
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3 }}
            >
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                  <Users className="h-4 w-4 text-emerald-600" />
                </div>
                <div>
                  <div className="text-sm font-medium">Nouveau élève inscrit</div>
                  <div className="text-xs text-gray-500">Il y a 2 minutes</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="absolute -bottom-4 -right-4 bg-white rounded-lg shadow-lg p-4 max-w-xs"
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 3, delay: 1.5 }}
            >
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <TrendingUp className="h-4 w-4 text-blue-600" />
                </div>
                <div>
                  <div className="text-sm font-medium">Résultats disponibles</div>
                  <div className="text-xs text-gray-500">Classe 6ème A</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
