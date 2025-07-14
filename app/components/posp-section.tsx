
"use client"

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { 
  UserCheck, 
  FileText, 
  ClipboardList, 
  BarChart3, 
  AlertCircle,
  Calendar,
  Trophy,
  Users
} from 'lucide-react'
import Image from 'next/image'

const POSPSection = () => {
  const features = [
    {
      icon: UserCheck,
      title: "Suivi des présences",
      description: "Pointage numérique automatique et génération de rapports d'absences en temps réel.",
      details: [
        "Pointage rapide par classe",
        "Notifications aux parents",
        "Rapports d'assiduité",
        "Statistiques mensuelles"
      ]
    },
    {
      icon: FileText,
      title: "Carnet de notes numérique",
      description: "Gestion complète des notes avec accès instantané pour la direction et les parents.",
      details: [
        "Saisie facilitée des notes",
        "Calcul automatique des moyennes",
        "Bulletins numériques",
        "Historique complet"
      ]
    },
    {
      icon: ClipboardList,
      title: "Gestion des examens",
      description: "Organisation simplifiée des contrôles avec questions à choix multiples ou devoirs.",
      details: [
        "Création d'examens QCM",
        "Correction automatique",
        "Programmation flexible",
        "Résultats instantanés"
      ]
    },
    {
      icon: BarChart3,
      title: "Statistiques avancées",
      description: "Tableaux de bord complets avec taux de réussite et performance par classe.",
      details: [
        "Analyse des performances",
        "Comparaison entre classes",
        "Évolution temporelle",
        "Rapports détaillés"
      ]
    },
    {
      icon: AlertCircle,
      title: "Suivi disciplinaire",
      description: "Gestion des observations et sanctions pour un meilleur suivi des élèves.",
      details: [
        "Registre des sanctions",
        "Historique comportemental",
        "Alertes automatiques",
        "Suivi individualisé"
      ]
    },
    {
      icon: Calendar,
      title: "Planning scolaire",
      description: "Organisation complète de l'année scolaire avec calendrier intégré.",
      details: [
        "Calendrier des cours",
        "Planification examens",
        "Événements scolaires",
        "Synchronisation globale"
      ]
    }
  ]

  const stats = [
    { icon: Users, value: "500+", label: "Élèves par école" },
    { icon: Trophy, value: "95%", label: "Taux de réussite" },
    { icon: BarChart3, value: "80%", label: "Gain de temps" },
    { icon: Calendar, value: "24/7", label: "Accès disponible" }
  ]

  return (
    <section id="posp" className="section-padding bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <FileText className="h-4 w-4" />
            <span>Module POSP</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Plateforme d'Organisation et de Suivi Pédagogique
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Gérez efficacement tous les aspects pédagogiques de votre établissement 
            avec des outils numériques intuitifs et puissants.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Image et statistiques */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="https://www.quill.com/content/index/resource-center/education/technology/using-tablets-in-the-classroom/images/using-tablets-in-the-classroom_960.jpg"
                alt="Enseignant utilisant le module POSP"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              
              {/* Overlay avec statistiques */}
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4">
                  <div className="grid grid-cols-2 gap-4">
                    {stats.slice(0, 2).map((stat, index) => {
                      const Icon = stat.icon
                      return (
                        <div key={index} className="text-center">
                          <Icon className="h-6 w-6 text-blue-600 mx-auto mb-1" />
                          <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                          <div className="text-sm text-gray-600">{stat.label}</div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>

            {/* Statistiques supplémentaires */}
            <div className="grid grid-cols-2 gap-4">
              {stats.slice(2).map((stat, index) => {
                const Icon = stat.icon
                return (
                  <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <Icon className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                      <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </motion.div>

          {/* Fonctionnalités principales */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Fonctionnalités clés du module POSP
            </h3>
            
            <div className="space-y-4">
              {features.slice(0, 3).map((feature, index) => {
                const Icon = feature.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-1">
                        {feature.title}
                      </h4>
                      <p className="text-gray-600 text-sm">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>

        {/* Grille complète des fonctionnalités */}
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
                  <CardHeader>
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{feature.description}</p>
                    <ul className="space-y-2">
                      {feature.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-center space-x-2 text-sm text-gray-500">
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
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

export default POSPSection
