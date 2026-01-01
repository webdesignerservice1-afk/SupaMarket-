"use client"

import { useState } from "react"
import Image from "next/image"
import { Star, Truck, RotateCcw, Users, Shield, Clock } from "lucide-react"
import { OrderForm } from "@/components/order-form"

export default function Home() {
  const [isOrderFormOpen, setIsOrderFormOpen] = useState(false)

  const handleOrderClick = () => {
    setIsOrderFormOpen(true)
  }

  const handleCloseForm = () => {
    setIsOrderFormOpen(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0e27] to-[#1a1f3a]">
      <div className="bg-gradient-to-r from-pink-600 to-rose-600 py-3 overflow-hidden">
        <div className="flex whitespace-nowrap">
          <div className="animate-scroll flex gap-8">
            <span className="text-white font-bold text-lg">💳 Paiement à la livraison 100% gratuit</span>
            <span className="text-white font-bold text-lg">💳 Paiement à la livraison 100% gratuit</span>
            <span className="text-white font-bold text-lg">💳 Paiement à la livraison 100% gratuit</span>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-40 bg-[#0a0e27]/95 backdrop-blur-md border-b border-pink-900/30">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-rose-300">
            Supa Market
          </h1>
          <div className="flex gap-6">
            <button className="text-gray-300 hover:text-pink-300 transition">Accueil</button>
            <button className="text-gray-300 hover:text-pink-300 transition">Produits</button>
            <button className="text-gray-300 hover:text-pink-300 transition">Contact</button>
          </div>
        </div>
      </nav>

      {/* Hero Section with Hero Image */}
      <section className="relative overflow-hidden py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Text Content */}
            <div className="space-y-6 order-2 md:order-1">
              <div className="space-y-2">
                <p className="text-pink-400 font-semibold text-lg">✨ Soins de nuit révolutionnaires</p>
                <h2 className="text-5xl md:text-6xl font-bold text-white leading-tight">Votre peau est abimée?</h2>
              </div>

              <p className="text-xl text-gray-300">
                <span className="text-pink-300 font-semibold">Le Masque Collagène Night</span> est le secret pour une
                peau radieuse et rajeunie. C'est le temps d'une vraie réparation!
              </p>

              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-yellow-400 font-bold">4.8/5</span>
                <span className="text-gray-400">(2,847 avis clients)</span>
              </div>

              <div className="bg-pink-500/20 border border-pink-400/30 rounded-xl p-4">
                <p className="text-gray-200">
                  <strong className="text-pink-300">Résultats visibles dès les premières utilisations:</strong>{" "}
                  Hydratation intense, peau plus ferme et éclat naturel restauré.
                </p>
              </div>

              <button
                onClick={handleOrderClick}
                className="w-full md:w-auto bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-bold py-4 px-10 rounded-lg text-lg transition shadow-lg shadow-pink-500/50"
              >
                COMMANDER MAINTENANT
              </button>
            </div>

            {/* Hero Image */}
            <div className="order-1 md:order-2">
              <div className="relative h-96 md:h-full">
                <Image
                  src="/images/captured-ecran2025-12-02102255-540x.png"
                  alt="Femme noire souriante avec Masque Collagène Night - Avant Après"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="py-20 bg-[#1a1f3a]/50">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-4xl font-bold text-white text-center mb-16">Découvrez votre nouveau secret beauté</h3>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Image 1 */}
            <div className="bg-gradient-to-br from-pink-400/10 to-rose-400/10 rounded-2xl p-6 flex flex-col items-center justify-center min-h-80">
              <div className="relative w-full h-80">
                <Image
                  src="/images/4.png"
                  alt="Femme noire radieuse appliquant le masque collagène"
                  fill
                  className="object-contain"
                />
              </div>
              <p className="text-gray-300 text-sm mt-4 text-center font-semibold">
                Application facile avec applicateur doré
              </p>
            </div>

            {/* Image 2 */}
            <div className="bg-gradient-to-br from-pink-400/10 to-rose-400/10 rounded-2xl p-6 flex flex-col items-center justify-center min-h-80">
              <div className="relative w-full h-80">
                <Image
                  src="/images/h09bbb779e70d4f64b94d3cd949248e75y.png"
                  alt="Produit Masque Collagène Night tenu en main avec emballage premium"
                  fill
                  className="object-contain"
                />
              </div>
              <p className="text-gray-300 text-sm mt-4 text-center font-semibold">
                Produit premium avec applicateur doré
              </p>
            </div>

            {/* Image 3 */}
            <div className="bg-gradient-to-br from-pink-400/10 to-rose-400/10 rounded-2xl p-6 flex flex-col items-center justify-center min-h-80">
              <div className="relative w-full h-80">
                <Image
                  src="/images/2-206e4e49-9280-4f6f-a58a.png"
                  alt="Masque Collagène Night tube et boîte complète"
                  fill
                  className="object-contain"
                />
              </div>
              <p className="text-gray-300 text-sm mt-4 text-center font-semibold">Emballage complet premium</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-96">
              <Image
                src="/images/3.png"
                alt="Bénéfices du masque collagène pour la peau"
                fill
                className="object-contain"
              />
            </div>

            <div className="space-y-8">
              <h3 className="text-4xl font-bold text-white">Bienfaits que ta peau va adorer</h3>

              <div className="space-y-4">
                {[
                  { title: "Hydratation Intense", desc: "Hydrate profondément et restaure l'éclat naturel" },
                  { title: "Peau Plus Ferme", desc: "Raffermit et tonifie pour un contour plus défini" },
                  { title: "Éclat Lumineux", desc: 'Crée un effet "glass skin" éclatant et radieux' },
                  { title: "Lisse les Rides", desc: "Réduit visiblement les ridules et les lignes fines" },
                  { title: "Élimine les Impuretés", desc: "Purifie et détoxifie en profondeur la peau" },
                  { title: "Atténue les Taches", desc: "Unifie le teint et atténue les taches sombres" },
                ].map((benefit, idx) => (
                  <div key={idx} className="flex gap-3">
                    <div className="w-2 h-2 rounded-full bg-pink-400 mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="font-bold text-white">{benefit.title}</p>
                      <p className="text-gray-400 text-sm">{benefit.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ingredients Section */}
      <section className="py-20 bg-[#1a1f3a]/50">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-4xl font-bold text-white text-center mb-12">Ingrédients Premium</h3>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { name: "Collagène Hydrolysé", icon: "💎", desc: "Augmente l'élasticité et la fermeté" },
              { name: "Acide Hyaluronique", icon: "💧", desc: "Hydratation intense jusqu'à 48h" },
              { name: "Niacinamide", icon: "✨", desc: "Réduit les pores et resserre" },
              { name: "Céramides", icon: "🛡️", desc: "Renforce la barrière cutanée" },
            ].map((ing, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-pink-500/20 to-rose-500/20 border border-pink-400/30 rounded-xl p-6 text-center"
              >
                <div className="text-4xl mb-3">{ing.icon}</div>
                <h4 className="font-bold text-white mb-2">{ing.name}</h4>
                <p className="text-gray-300 text-sm">{ing.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before/After Results */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-4xl font-bold text-white text-center mb-12">Résultats Visibles</h3>

          <div className="bg-gradient-to-br from-pink-500/10 to-rose-500/10 border border-pink-400/30 rounded-2xl p-8 mb-12">
            <div className="relative h-96">
              <Image
                src="/images/annotation-2025-06-29-105013.png"
                alt="Résultats avant après du masque collagène - transformation visible"
                fill
                className="object-contain"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { time: "Dès 7 jours", benefit: "Peau plus hydratée et lumineuse" },
              { time: "Après 15 jours", benefit: "Teint unifié et plus éclatant" },
              { time: "Après 30 jours", benefit: "Rides réduites et peau ferme" },
            ].map((result, idx) => (
              <div key={idx} className="bg-[#1a1f3a] rounded-xl p-6 border border-pink-400/20">
                <p className="text-pink-400 font-bold text-lg mb-2">{result.time}</p>
                <p className="text-gray-300">{result.benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-[#1a1f3a]/50">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-4xl font-bold text-white text-center mb-12">Pourquoi choisir Supa Market?</h3>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Truck, title: "Livraison Gratuite", desc: "Livraison gratuite partout au Bénin" },
              { icon: RotateCcw, title: "Satisfait ou Remboursé", desc: "Politique de remboursement 30 jours" },
              { icon: Clock, title: "Service Client 7J/7", desc: "Support client disponible 24h/24" },
              { icon: Shield, title: "Paiement à la Livraison", desc: "Payez uniquement à la réception" },
              { icon: Users, title: "Adapté à Tous", desc: "Convient à tous types de peau, même sensibles" },
              { icon: Star, title: "4.8★ de note", desc: "Noté 4.8/5 par 2,847 clients satisfaits" },
            ].map((feature, idx) => {
              const Icon = feature.icon
              return (
                <div
                  key={idx}
                  className="bg-[#0a0e27] border border-pink-400/20 rounded-xl p-6 text-center hover:border-pink-400/50 transition"
                >
                  <Icon className="w-12 h-12 text-pink-400 mx-auto mb-4" />
                  <h4 className="font-bold text-white mb-2">{feature.title}</h4>
                  <p className="text-gray-400 text-sm">{feature.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Price & CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-gradient-to-r from-pink-500/20 to-rose-500/20 border-2 border-pink-400/50 rounded-2xl p-12 text-center">
            <h3 className="text-3xl font-bold text-white mb-4">Masque Collagène Night</h3>
            <p className="text-gray-300 mb-8 text-lg">Votre solution complète pour une peau radieuse et jeune</p>

            <div className="mb-8">
              <div className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-rose-300">
                5,000 FCFA
              </div>
              <p className="text-gray-400 mt-2">Livraison gratuite au Bénin</p>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mb-8 text-left text-gray-300 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-pink-400">✓</span> Collagène hydrolysé premium
              </div>
              <div className="flex items-center gap-2">
                <span className="text-pink-400">✓</span> Acide hyaluronique puissant
              </div>
              <div className="flex items-center gap-2">
                <span className="text-pink-400">✓</span> Niacinamide + Céramides
              </div>
              <div className="flex items-center gap-2">
                <span className="text-pink-400">✓</span> Applicateur doré inclus
              </div>
            </div>

            <button
              onClick={handleOrderClick}
              className="w-full bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-bold py-4 px-10 rounded-xl text-xl transition shadow-lg shadow-pink-500/50 mb-4"
            >
              COMMANDER MAINTENANT - 5,000 FCFA
            </button>
            <p className="text-gray-400 text-sm">Paiement à la livraison | Satisfait ou remboursé</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-[#1a1f3a]/50">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-4xl font-bold text-white text-center mb-12">Témoignages Clients</h3>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Amina K.",
                city: "Cotonou",
                rating: 5,
                text: "Absolument transformé ma peau en 2 semaines! Mon teint est éclatant et les rides de mon front ont diminué. Je recommande vivement!",
              },
              {
                name: "Zara M.",
                city: "Porto-Novo",
                rating: 5,
                text: "Meilleur masque que j'ai jamais essayé. La texture est douce, l'applicateur est génial et les résultats sont impressionnants.",
              },
              {
                name: "Nadège T.",
                city: "Parakou",
                rating: 5,
                text: "Je l'utilise depuis 3 mois et ma peau n'a jamais été aussi belle. Vraiment satisfaite, c'est un investissement qui en vaut la peine.",
              },
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-[#0a0e27] border border-pink-400/20 rounded-xl p-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4">{testimonial.text}</p>
                <p className="font-bold text-white">{testimonial.name}</p>
                <p className="text-gray-400 text-sm">{testimonial.city}, Bénin</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0a0e27] border-t border-pink-900/30 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold text-white mb-4">Supa Market</h4>
              <p className="text-gray-400 text-sm">Vos produits de beauté premium au Bénin</p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Produits</h4>
              <p className="text-gray-400 text-sm hover:text-pink-300 cursor-pointer">Masque Collagène Night</p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Service</h4>
              <p className="text-gray-400 text-sm hover:text-pink-300 cursor-pointer">Support Client</p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Contact</h4>
              <p className="text-gray-400 text-sm">info@supamarket.bj</p>
            </div>
          </div>

          <div className="border-t border-pink-900/30 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-400 text-sm">© 2025 Supa Market. Tous droits réservés.</p>
              <div className="flex gap-6">
                <a href="#mentions" className="text-gray-400 text-sm hover:text-pink-300 transition">
                  Mentions Légales
                </a>
                <a href="#contact" className="text-gray-400 text-sm hover:text-pink-300 transition">
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <OrderForm isOpen={isOrderFormOpen} onClose={handleCloseForm} />
    </div>
  )
}
