
"use client"

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { 
  Smartphone, 
  CreditCard, 
  FileText, 
  Bell, 
  Shield, 
  Eye,
  Calendar,
  MessageSquare
} from 'lucide-react'
import Image from 'next/image'

const ParentPortalSection = () => {
  const features = [
    {
      icon: CreditCard,
      title: "Suivi des paiements",
      description: "Consultez le solde, l'historique des paiements et les échéances à venir.",
      details: [
        "Solde en temps réel",
        "Historique complet",
        "Échéanciers personnalisés",
        "Notifications de rappel"
      ]
    },
    {
      icon: FileText,
      title: "Accès aux résultats",
      description: "Consultez les notes, bulletins et rapports de votre enfant en sécurité.",
      details: [
        "Notes en temps réel",
        "Bulletins numériques",
        "Statistiques de performance",
        "Évolution des résultats"
      ]
    },
    {
      icon: Bell,
      title: "Notifications importantes",
      description: "Recevez toutes les annonces importantes de l'école instantanément.",
      details: [
        "Réunions parents-profs",
        "Calendrier des examens",
        "Événements scolaires",
        "Alertes urgentes"
      ]
    },
    {
      icon: Calendar,
      title: "Calendrier scolaire",
      description: "Suivez tous les événements et activités de l'école.",
      details: [
        "Planning des cours",
        "Dates d'examens",
        "Vacances scolaires",
        "Activités extra-scolaires"
      ]
    },
    {
      icon: MessageSquare,
      title: "Communication directe",
      description: "Échangez directement avec les enseignants et l'administration.",
      details: [
        "Messages sécurisés",
        "Demandes de rendez-vous",
        "Questions pédagogiques",
        "Suivi personnalisé"
      ]
    },
    {
      icon: Shield,
      title: "Sécurité garantie",
      description: "Accès sécurisé avec authentification et protection des données.",
      details: [
        "Connexion sécurisée",
        "Données chiffrées",
        "Accès personnalisé",
        "Confidentialité totale"
      ]
    }
  ]

  const steps = [
    {
      number: "01",
      title: "Connexion sécurisée",
      description: "Connectez-vous avec vos identifiants personnels fournis par l'école."
    },
    {
      number: "02",
      title: "Tableau de bord",
      description: "Accédez à toutes les informations importantes de votre enfant."
    },
    {
      number: "03",
      title: "Suivi en temps réel",
      description: "Consultez les résultats, paiements et annonces instantanément."
    }
  ]

  return (
    <section id="portail" className="section-padding bg-gradient-to-br from-orange-50 to-red-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Smartphone className="h-4 w-4" />
            <span>Portail Parent</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Un accès privilégié pour les parents
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Restez connecté à la scolarité de votre enfant avec un portail 
            sécurisé accessible 24h/24 depuis votre téléphone ou ordinateur.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Image et processus */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="https://c8.alamy.com/comp/2KF9AYE/female-child-using-her-parent-cell-phone-2KF9AYE.jpg"
                alt="Parent utilisant le portail parent"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              
              {/* Interface mobile simulée */}
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 max-w-xs">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                  <span className="text-sm font-medium">Connecté</span>
                </div>
                <div className="text-xs text-gray-600">
                  Dernière connexion: il y a 2 min
                </div>
              </div>
            </div>

            {/* Étapes d'utilisation */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-gray-900">
                Comment utiliser le portail parent ?
              </h3>
              <div className="space-y-4">
                {steps.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-4"
                  >
                    <div className="w-8 h-8 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                      {step.number}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">
                        {step.title}
                      </h4>
                      <p className="text-gray-600 text-sm">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Aperçu des fonctionnalités */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Tout ce dont vous avez besoin
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
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="h-6 w-6 text-orange-600" />
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

            {/* Élément de confiance */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-orange-100 to-red-100 rounded-lg p-6 mt-8"
            >
              <div className="flex items-center space-x-3 mb-3">
                <Shield className="h-8 w-8 text-orange-600" />
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">
                    Sécurité et confidentialité
                  </h4>
                  <p className="text-sm text-gray-600">
                    Vos données sont protégées selon les standards internationaux
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-4 text-sm text-gray-600">
                <div className="flex items-center space-x-1">
                  <Eye className="h-4 w-4" />
                  <span>Accès contrôlé</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Shield className="h-4 w-4" />
                  <span>Données chiffrées</span>
                </div>
              </div>
            </motion.div>
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
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="h-6 w-6 text-orange-600" />
                    </div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{feature.description}</p>
                    <ul className="space-y-2">
                      {feature.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-center space-x-2 text-sm text-gray-500">
                          <div className="w-1.5 h-1.5 bg-orange-600 rounded-full"></div>
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

export default ParentPortalSection
