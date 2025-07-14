
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from '@/components/ui/sonner'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'IQschool - Solution SaaS pour les écoles congolaises',
  description: 'Plateforme numérique complète pour la gestion pédagogique et financière des écoles en République Démocratique du Congo. Modules POSP et Ubank inclus.',
  keywords: 'école, RDC, Congo, gestion scolaire, SaaS, éducation, pédagogie, finance scolaire',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
