
import { NextRequest, NextResponse } from 'next/server'
import { promises as fs } from 'fs'
import path from 'path'

const contactsFilePath = path.join(process.cwd(), 'data', 'contacts.json')

// Assurer que le dossier data existe
async function ensureDataDirectory() {
  const dataDir = path.join(process.cwd(), 'data')
  try {
    await fs.mkdir(dataDir, { recursive: true })
  } catch (error) {
    // Le dossier existe déjà
  }
}

// Lire les contacts depuis le fichier JSON
async function readContacts() {
  try {
    const data = await fs.readFile(contactsFilePath, 'utf-8')
    return JSON.parse(data)
  } catch (error) {
    return []
  }
}

// Écrire les contacts dans le fichier JSON
async function writeContacts(contacts: any[]) {
  await ensureDataDirectory()
  await fs.writeFile(contactsFilePath, JSON.stringify(contacts, null, 2))
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    const { nom, email, telephone, ecole, message } = body

    // Validation des données
    if (!nom || !email || !message) {
      return NextResponse.json(
        { error: 'Nom, email et message sont requis' },
        { status: 400 }
      )
    }

    // Validation de l'email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Format d\'email invalide' },
        { status: 400 }
      )
    }

    // Créer un nouvel enregistrement de contact
    const contact = {
      id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
      nom: nom.trim(),
      email: email.trim().toLowerCase(),
      telephone: telephone?.trim() || null,
      ecole: ecole?.trim() || null,
      message: message.trim(),
      status: 'nouveau',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }

    // Lire les contacts existants
    const contacts = await readContacts()
    
    // Ajouter le nouveau contact
    contacts.push(contact)
    
    // Sauvegarder dans le fichier
    await writeContacts(contacts)

    return NextResponse.json(
      { 
        message: 'Message enregistré avec succès',
        id: contact.id 
      },
      { status: 201 }
    )

  } catch (error) {
    console.error('Erreur lors de l\'enregistrement du contact:', error)
    return NextResponse.json(
      { error: 'Erreur interne du serveur' },
      { status: 500 }
    )
  }
}

export async function GET() {
  try {
    const contacts = await readContacts()
    
    // Trier par date de création (plus récent en premier)
    const sortedContacts = contacts.sort((a: any, b: any) => 
      new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    )

    return NextResponse.json(sortedContacts)
  } catch (error) {
    console.error('Erreur lors de la récupération des contacts:', error)
    return NextResponse.json(
      { error: 'Erreur interne du serveur' },
      { status: 500 }
    )
  }
}
