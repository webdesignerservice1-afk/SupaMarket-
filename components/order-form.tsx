"use client"

import type React from "react"
import { useState } from "react"
import { X, Plus, Minus, ShoppingCart } from "lucide-react"

interface OrderFormProps {
  isOpen: boolean
  onClose: () => void
}

export function OrderForm({ isOpen, onClose }: OrderFormProps) {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    numero: "",
    ville: "",
    quartier: "",
    quantite: 1,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleQuantityChange = (delta: number) => {
    setFormData((prev) => ({
      ...prev,
      quantite: Math.max(1, prev.quantite + delta),
    }))
  }

  const handleWhatsAppOrder = () => {
    if (!formData.nom || !formData.prenom || !formData.numero || !formData.ville || !formData.quartier) {
      alert("Veuillez remplir tous les champs")
      return
    }

    const prixUnitaire = 5000
    const total = formData.quantite * prixUnitaire

    const message = `🛍️ *NOUVELLE COMMANDE - SUPA MARKET*\n\n*═══════════════════*\n\n📦 *RÉCAPITULATIF DU PANIER*\n├ Produit: Masque Collagène Night\n├ Quantité: ${formData.quantite}\n├ Prix unitaire: ${prixUnitaire} FCFA\n├ Total: ${total} FCFA\n\n*═══════════════════*\n\n👤 *INFORMATIONS DE LIVRAISON*\n├ Nom: ${formData.nom}\n├ Prénom: ${formData.prenom}\n├ Téléphone: ${formData.numero}\n├ Ville: ${formData.ville}\n└ Quartier: ${formData.quartier}\n\n*═══════════════════*\n\n📲 Appuyez sur "Envoyer" pour confirmer votre commande\n\n✅ Merci pour votre achat!\n💳 Paiement à la livraison`

    const encodedMessage = encodeURIComponent(message)
    const phoneNumber = "2290158704571"

    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)

    if (isMobile) {
      // Mobile: Use WhatsApp API to open app directly
      window.location.href = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`
    } else {
      // Desktop: Use WhatsApp Web
      window.location.href = `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-[#0a0e27] border border-pink-400/30 rounded-2xl max-w-md w-full p-8 relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-white transition">
          <X className="w-6 h-6" />
        </button>

        <h2 className="text-3xl font-bold text-white mb-2">Votre Commande</h2>
        <p className="text-gray-400 mb-6">Remplissez vos informations de livraison</p>

        <div className="space-y-4">
          <div>
            <label className="block text-gray-300 font-semibold mb-2">Nom</label>
            <input
              type="text"
              name="nom"
              value={formData.nom}
              onChange={handleChange}
              placeholder="Votre nom"
              className="w-full bg-[#1a1f3a] border border-pink-400/30 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-pink-400 transition"
            />
          </div>

          <div>
            <label className="block text-gray-300 font-semibold mb-2">Prénom</label>
            <input
              type="text"
              name="prenom"
              value={formData.prenom}
              onChange={handleChange}
              placeholder="Votre prénom"
              className="w-full bg-[#1a1f3a] border border-pink-400/30 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-pink-400 transition"
            />
          </div>

          <div>
            <label className="block text-gray-300 font-semibold mb-2">Numéro de téléphone</label>
            <input
              type="tel"
              name="numero"
              value={formData.numero}
              onChange={handleChange}
              placeholder="+229 XX XX XX XX"
              className="w-full bg-[#1a1f3a] border border-pink-400/30 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-pink-400 transition"
            />
          </div>

          <div>
            <label className="block text-gray-300 font-semibold mb-2">Ville</label>
            <input
              type="text"
              name="ville"
              value={formData.ville}
              onChange={handleChange}
              placeholder="Ex: Cotonou"
              className="w-full bg-[#1a1f3a] border border-pink-400/30 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-pink-400 transition"
            />
          </div>

          <div>
            <label className="block text-gray-300 font-semibold mb-2">Quartier</label>
            <input
              type="text"
              name="quartier"
              value={formData.quartier}
              onChange={handleChange}
              placeholder="Ex: Haie Vive"
              className="w-full bg-[#1a1f3a] border border-pink-400/30 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-pink-400 transition"
            />
          </div>

          <div>
            <label className="block text-gray-300 font-semibold mb-2">Quantité</label>
            <div className="flex items-center gap-4 bg-[#1a1f3a] border border-pink-400/30 rounded-lg px-4 py-3">
              <button
                type="button"
                onClick={() => handleQuantityChange(-1)}
                className="text-pink-400 hover:text-pink-300 transition disabled:opacity-50"
                disabled={formData.quantite <= 1}
              >
                <Minus className="w-5 h-5" />
              </button>
              <span className="text-white font-bold text-xl flex-1 text-center">{formData.quantite}</span>
              <button
                type="button"
                onClick={() => handleQuantityChange(1)}
                className="text-pink-400 hover:text-pink-300 transition"
              >
                <Plus className="w-5 h-5" />
              </button>
            </div>
            <p className="text-gray-400 text-sm mt-2">Total: {formData.quantite * 5000} FCFA</p>
          </div>

          <button
            type="button"
            onClick={handleWhatsAppOrder}
            className="w-full bg-[#25D366] hover:bg-[#1fa855] text-white font-bold py-3 px-6 rounded-lg transition shadow-lg shadow-green-500/50 flex items-center justify-center gap-2"
          >
            <ShoppingCart className="w-5 h-5" />
            Commander WhatsApp
          </button>
        </div>
      </div>
    </div>
  )
}
