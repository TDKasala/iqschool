
"use client"

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { 
  UserPlus, 
  CreditCard, 
  Receipt, 
  PieChart, 
  DollarSign,
  FileSpreadsheet,
  TrendingUp,
  Calculator
} from 'lucide-react'
import Image from 'next/image'

const UbankSection = () => {
  const features = [
    {
      icon: UserPlus,
      title: "Inscriptions facilitées",
      description: "Processus d'inscription et de réinscription simplifié avec formulaires numériques.",
      details: [
        "Formulaires en ligne",
        "Saisie manuelle possible",
        "Validation automatique",
        "Suivi des dossiers"
      ]
    },
    {
      icon: CreditCard,
      title: "Gestion des paiements",
      description: "Suivi détaillé des paiements du minerval avec historique complet.",
      details: [
        "Historique des paiements",
        "Calcul automatique des soldes",
        "Rappels automatiques",
        "Échéanciers flexibles"
      ]
    },
    {
      icon: Receipt,
      title: "Génération de reçus",
      description: "Création automatique de reçus imprimables ou PDF pour tous les paiements.",
      details: [
        "Reçus instantanés",
        "Format PDF",
        "Personnalisation possible",
        "Archivage automatique"
      ]
    },
    {
      icon: Calculator,
      title: "Comptabilité simplifiée",
      description: "Enregistrement des principales dépenses et suivi budgétaire.",
      details: [
        "Suivi des salaires",
        "Gestion des fournitures",
        "Frais d'entretien",
        "Catégorisation automatique"
      ]
    },
    {
      icon: PieChart,
      title: "Tableaux de bord",
      description: "Rapports financiers clairs et faciles à comprendre pour la direction.",
      details: [
        "Visualisations graphiques",
        "Rapports mensuels",
        "Analyses de tendances",
        "Indicateurs clés"
      ]
    },
    {
      icon: TrendingUp,
      title: "Analyse financière",
      description: "Outils d'analyse pour optimiser la gestion financière de l'école.",
      details: [
        "Prévisions budgétaires",
        "Analyse des revenus",
        "Suivi des coûts",
        "Ratios financiers"
      ]
    }
  ]

  const benefits = [
    {
      icon: DollarSign,
      title: "Revenus optimisés",
      description: "Amélioration de 25% du recouvrement des frais scolaires",
      value: "+25%"
    },
    {
      icon: FileSpreadsheet,
      title: "Temps économisé",
      description: "Réduction de 60% du temps de gestion administrative",
      value: "-60%"
    },
    {
      icon: TrendingUp,
      title: "Transparence",
      description: "Visibilité complète sur les finances de l'école",
      value: "100%"
    },
    {
      icon: Calculator,
      title: "Précision",
      description: "Élimination des erreurs de calcul et de saisie",
      value: "99.9%"
    }
  ]

  return (
    <section id="ubank" className="section-padding bg-gradient-to-br from-emerald-50 to-teal-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <CreditCard className="h-4 w-4" />
            <span>Module Ubank</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Gestion des Inscriptions et Paiements Scolaires
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Optimisez la gestion financière de votre école avec des outils 
            de comptabilité simplifiés et des rapports détaillés.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Avantages et statistiques */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Résultats concrets pour votre école
            </h3>
            
            <div className="space-y-6">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="h-6 w-6 text-emerald-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <h4 className="text-lg font-semibold text-gray-900">
                          {benefit.title}
                        </h4>
                        <span className="text-2xl font-bold text-emerald-600">
                          {benefit.value}
                        </span>
                      </div>
                      <p className="text-gray-600 text-sm">
                        {benefit.description}
                      </p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* Image principale */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="https://c8.alamy.com/comp/2KHFD29/finance-laptop-and-black-woman-writing-a-house-budget-for-bills-savings-or-money-management-on-living-room-sofa-paperwork-inflation-and-african-2KHFD29.jpg"
                alt="Administrateur gérant les finances avec Ubank"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              
              {/* Éléments flottants */}
              <motion.div
                className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 max-w-xs"
                animate={{ y: [0, -5, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
              >
                <div className="flex items-center space-x-2">
                  <Receipt className="h-5 w-5 text-emerald-600" />
                  <div>
                    <div className="text-sm font-medium">Reçu généré</div>
                    <div className="text-xs text-gray-500">Paiement minerval</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 max-w-xs"
                animate={{ y: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 2, delay: 1 }}
              >
                <div className="flex items-center space-x-2">
                  <TrendingUp className="h-5 w-5 text-emerald-600" />
                  <div>
                    <div className="text-sm font-medium">Revenus +15%</div>
                    <div className="text-xs text-gray-500">Ce mois</div>
                  </div>
                </div>
              </motion.div>
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
                  <CardHeader>
                    <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="h-6 w-6 text-emerald-600" />
                    </div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{feature.description}</p>
                    <ul className="space-y-2">
                      {feature.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-center space-x-2 text-sm text-gray-500">
                          <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full"></div>
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

export default UbankSection
