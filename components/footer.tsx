
"use client"

import { GraduationCap, Phone, Mail, MapPin, ArrowUp } from 'lucide-react'
import { Button } from '@/components/ui/button'

const Footer = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="bg-gray-900 text-white">
      {/* Section principale */}
      <div className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Logo et description */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <GraduationCap className="h-8 w-8 text-blue-400" />
                <span className="text-2xl font-bold">IQschool</span>
              </div>
              <p className="text-gray-400 mb-6 max-w-md">
                La solution numérique complète pour moderniser la gestion 
                pédagogique et financière des écoles en République Démocratique du Congo.
              </p>
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-gray-400">
                  <Phone className="h-4 w-4" />
                  <span>+243 81 234 5678</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-400">
                  <Mail className="h-4 w-4" />
                  <span>contact@iqschool.cd</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-400">
                  <MapPin className="h-4 w-4" />
                  <span>Kinshasa, RDC</span>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Navigation</h4>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => handleNavClick('#accueil')}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Accueil
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNavClick('#posp')}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Module POSP
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNavClick('#ubank')}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Module Ubank
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNavClick('#portail')}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Portail Parent
                  </button>
                </li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Support</h4>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => handleNavClick('#contact')}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Nous contacter
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNavClick('#contact')}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Demander une démo
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {/* Séparateur */}
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-gray-400 text-sm mb-4 md:mb-0">
                © 2025 IQschool. Tous droits réservés.
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-gray-400 text-sm">
                  Conçu pour les écoles congolaises
                </span>
                <Button
                  onClick={handleScrollToTop}
                  variant="ghost"
                  size="sm"
                  className="text-gray-400 hover:text-white"
                >
                  <ArrowUp className="h-4 w-4 mr-1" />
                  Haut de page
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
