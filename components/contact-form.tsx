
"use client"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Send, CheckCircle, Phone, Mail, MapPin } from 'lucide-react'
import { toast } from 'sonner'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    telephone: '',
    ecole: '',
    message: ''
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setIsSubmitted(true)
        toast.success('Message envoyé avec succès!')
        setFormData({
          nom: '',
          email: '',
          telephone: '',
          ecole: '',
          message: ''
        })
        
        // Reset après 3 secondes
        setTimeout(() => setIsSubmitted(false), 3000)
      } else {
        throw new Error('Erreur lors de l\'envoi')
      }
    } catch (error) {
      toast.error('Erreur lors de l\'envoi du message. Veuillez réessayer.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: Phone,
      title: "Téléphone",
      details: "+243 81 234 5678",
      description: "Lundi - Vendredi: 8h - 17h"
    },
    {
      icon: Mail,
      title: "Email",
      details: "contact@iqschool.cd",
      description: "Réponse sous 24h"
    },
    {
      icon: MapPin,
      title: "Adresse",
      details: "Kinshasa, RDC",
      description: "Gombe, Avenue Kasa-Vubu"
    }
  ]

  return (
    <section id="contact" className="section-padding bg-gradient-to-br from-blue-50 to-emerald-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Send className="h-4 w-4" />
            <span>Contact</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Prêt à transformer votre école ?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Contactez-nous pour une démonstration personnalisée et découvrez 
            comment IQschool peut révolutionner la gestion de votre établissement.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Formulaire */}
          <Card className="shadow-xl border-0">
            <CardHeader>
              <CardTitle className="text-2xl text-center">
                Demander une démonstration
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              {isSubmitted ? (
                <div className="text-center py-8">
                  <CheckCircle className="h-16 w-16 text-emerald-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Message envoyé avec succès !
                  </h3>
                  <p className="text-gray-600">
                    Notre équipe vous contactera dans les plus brefs délais.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="nom" className="block text-sm font-medium text-gray-700 mb-2">
                        Nom complet *
                      </label>
                      <Input
                        id="nom"
                        name="nom"
                        type="text"
                        required
                        value={formData.nom}
                        onChange={handleChange}
                        className="w-full"
                        placeholder="Votre nom complet"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full"
                        placeholder="votre@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="telephone" className="block text-sm font-medium text-gray-700 mb-2">
                        Téléphone
                      </label>
                      <Input
                        id="telephone"
                        name="telephone"
                        type="tel"
                        value={formData.telephone}
                        onChange={handleChange}
                        className="w-full"
                        placeholder="+243 81 234 5678"
                      />
                    </div>
                    <div>
                      <label htmlFor="ecole" className="block text-sm font-medium text-gray-700 mb-2">
                        Nom de l'école
                      </label>
                      <Input
                        id="ecole"
                        name="ecole"
                        type="text"
                        value={formData.ecole}
                        onChange={handleChange}
                        className="w-full"
                        placeholder="Nom de votre établissement"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full"
                      placeholder="Parlez-nous de votre école et de vos besoins..."
                    />
                  </div>

                  <div className="text-xs text-gray-500 mb-4">
                    <p>* Champs obligatoires</p>
                    <p>Vos données sont traitées de manière confidentielle et sécurisée.</p>
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-blue-700 hover:bg-blue-800 text-white py-3 text-lg"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Envoi en cours...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-5 w-5" />
                        Envoyer la demande
                      </>
                    )}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>

          {/* Informations de contact */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Parlons de votre projet
              </h3>
              <p className="text-gray-600 mb-8">
                Notre équipe d'experts est à votre disposition pour vous accompagner 
                dans la transformation numérique de votre établissement scolaire.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const Icon = info.icon
                return (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Icon className="h-6 w-6 text-blue-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-1">
                            {info.title}
                          </h4>
                          <p className="text-blue-600 font-medium mb-1">
                            {info.details}
                          </p>
                          <p className="text-sm text-gray-500">
                            {info.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>

            {/* Engagement */}
            <Card className="bg-gradient-to-r from-blue-600 to-emerald-600 text-white border-0">
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold mb-3">
                  Notre engagement
                </h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 flex-shrink-0" />
                    <span>Démonstration personnalisée gratuite</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 flex-shrink-0" />
                    <span>Formation complète de votre équipe</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 flex-shrink-0" />
                    <span>Support technique local en français</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 flex-shrink-0" />
                    <span>Accompagnement à long terme</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactForm
