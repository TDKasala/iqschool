
"use client"

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { 
  Smartphone, 
  Wifi, 
  Zap, 
  Globe, 
  Shield, 
  Clock,
  Users,
  HardDrive,
  Cloud
} from 'lucide-react'
import Image from 'next/image'

const TechAdvantagesSection = () => {
  const advantages = [
    {
      icon: Smartphone,
      title: "Compatible Mobile",
      description: "Fonctionne parfaitement sur smartphones et tablettes Android et iOS.",
      details: [
        "Application légère",
        "Interface tactile optimisée",
        "Synchronisation automatique",
        "Mode hors ligne partiel"
      ],
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: Wifi,
      title: "Connexion Faible",
      description: "Optimisé pour fonctionner avec des connexions internet limitées.",
      details: [
        "Chargement rapide",
        "Consommation réduite",
        "Cache intelligent",
        "Compression des données"
      ],
      color: "bg-emerald-100 text-emerald-600"
    },
    {
      icon: Zap,
      title: "Interface Rapide",
      description: "Temps de réponse optimal et navigation fluide pour tous les utilisateurs.",
      details: [
        "Chargement instantané",
        "Navigation intuitive",
        "Réponses en temps réel",
        "Performance optimisée"
      ],
      color: "bg-yellow-100 text-yellow-600"
    },
    {
      icon: Globe,
      title: "Accès Universel",
      description: "Accessible depuis n'importe quel navigateur web moderne.",
      details: [
        "Pas d'installation requise",
        "Compatibilité universelle",
        "Mises à jour automatiques",
        "Support technique inclus"
      ],
      color: "bg-purple-100 text-purple-600"
    },
    {
      icon: Shield,
      title: "Sécurité Renforcée",
      description: "Protection avancée des données avec sauvegarde automatique.",
      details: [
        "Chiffrement des données",
        "Sauvegarde quotidienne",
        "Accès sécurisé",
        "Conformité RGPD"
      ],
      color: "bg-red-100 text-red-600"
    },
    {
      icon: Cloud,
      title: "Cloud Sécurisé",
      description: "Stockage dans le cloud avec accès depuis n'importe où.",
      details: [
        "Données toujours disponibles",
        "Synchronisation multi-appareils",
        "Espace de stockage illimité",
        "Récupération automatique"
      ],
      color: "bg-indigo-100 text-indigo-600"
    }
  ]

  const stats = [
    {
      icon: Clock,
      value: "< 3s",
      label: "Temps de chargement",
      description: "Même avec connexion lente"
    },
    {
      icon: Users,
      value: "1000+",
      label: "Utilisateurs simultanés",
      description: "Sans ralentissement"
    },
    {
      icon: HardDrive,
      value: "99.9%",
      label: "Disponibilité",
      description: "Service accessible 24/7"
    },
    {
      icon: Smartphone,
      value: "100%",
      label: "Compatible mobile",
      description: "Tous types d'appareils"
    }
  ]

  const compatibilityItems = [
    { device: "Android", version: "5.0+", icon: "📱" },
    { device: "iOS", version: "12.0+", icon: "📱" },
    { device: "Windows", version: "10+", icon: "💻" },
    { device: "Chrome", version: "70+", icon: "🌐" },
    { device: "Firefox", version: "65+", icon: "🦊" },
    { device: "Safari", version: "12+", icon: "🧭" }
  ]

  return (
    <section id="avantages" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Zap className="h-4 w-4" />
            <span>Avantages Techniques</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Technologie adaptée au contexte congolais
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            IQschool a été conçu pour fonctionner parfaitement dans les conditions 
            techniques de la RDC, avec des connexions limitées et sur tous types d'appareils.
          </p>
        </motion.div>

        {/* Statistiques de performance */}
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
                <Card className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <Icon className="h-8 w-8 text-purple-600 mx-auto mb-3" />
                    <div className="text-3xl font-bold text-gray-900 mb-1">
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

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Image principale */}
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
                alt="Technologie éducative adaptée"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              
              {/* Indicateurs de performance */}
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">Connexion stable</span>
                </div>
              </div>

              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-3">
                <div className="flex items-center space-x-2">
                  <Zap className="h-4 w-4 text-purple-600" />
                  <span className="text-sm font-medium">Chargement rapide</span>
                </div>
              </div>
            </div>

            {/* Compatibilité */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg flex items-center space-x-2">
                  <Globe className="h-5 w-5 text-purple-600" />
                  <span>Compatibilité</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  {compatibilityItems.map((item, index) => (
                    <div key={index} className="flex items-center space-x-2 p-2 bg-gray-50 rounded-lg">
                      <span className="text-lg">{item.icon}</span>
                      <div>
                        <div className="text-sm font-medium">{item.device}</div>
                        <div className="text-xs text-gray-500">{item.version}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Détails techniques */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Pourquoi IQschool fonctionne partout en RDC ?
            </h3>
            
            <div className="space-y-4">
              {advantages.slice(0, 3).map((advantage, index) => {
                const Icon = advantage.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <div className={`w-12 h-12 rounded-lg ${advantage.color} flex items-center justify-center flex-shrink-0`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-1">
                        {advantage.title}
                      </h4>
                      <p className="text-gray-600 text-sm">
                        {advantage.description}
                      </p>
                    </div>
                  </motion.div>
                )
              })}
            </div>

            {/* Mise en avant de l'accessibilité */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-purple-100 to-indigo-100 rounded-lg p-6 mt-8"
            >
              <h4 className="text-lg font-semibold text-gray-900 mb-3">
                Conçu pour l'Afrique
              </h4>
              <p className="text-gray-600 text-sm mb-4">
                Nos serveurs sont optimisés pour réduire la latence et notre interface 
                est conçue pour consommer moins de bande passante.
              </p>
              <div className="flex items-center space-x-4 text-sm text-gray-600">
                <div className="flex items-center space-x-1">
                  <Wifi className="h-4 w-4" />
                  <span>Connexion 2G/3G OK</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Zap className="h-4 w-4" />
                  <span>Économe en données</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Grille complète des avantages */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => {
            const Icon = advantage.icon
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
                    <div className={`w-12 h-12 rounded-lg ${advantage.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-lg">{advantage.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{advantage.description}</p>
                    <ul className="space-y-2">
                      {advantage.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-center space-x-2 text-sm text-gray-500">
                          <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
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

export default TechAdvantagesSection
