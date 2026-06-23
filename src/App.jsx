import React, { useState, useRef, useEffect, useMemo } from 'react'
import heroBgImg from './assets/ChatGPT Image 22 jun 2026, 10_20_10 p.m..png'
import {
  Gift,
  Zap,
  Headphones,
  Heart,
  Search,
  ShoppingCart,
  ChevronLeft,
  ChevronRight,
  Star,
  Clock,
  Award,
  Leaf,
  Globe,
  Tag,
  PenTool,
  Eye,
  CreditCard,
  Mail,
  Send,
  MessageCircle,
  X,
  Play,
  Pause,
  Check,
  Sparkles,
  Calendar,
  Cake,
  Sun,
  Moon,
  ChevronDown,
  Trash2,
  Lock,
  Shield,
  Smile,
  Truck,
  HeartOff,
  MessageSquare,
  MapPin,
  Quote,
  Cloud,
  Package,
  Menu
} from 'lucide-react'

// Custom SVG Icons for Occasions to match reference screenshot
const HeartIcon = (props) => <Heart className="text-[#FF5A6F] fill-[#FF5A6F] w-7 h-7" {...props} />
const RingIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7" {...props}>
    <circle cx="12" cy="14" r="6" stroke="#FF5A6F" />
    <path d="m12 8 2-3.5h-4L12 8Z" fill="#FFAE00" stroke="#FFAE00" />
    <circle cx="12" cy="4" r="1.5" fill="#FFF" stroke="#FFAE00" strokeWidth="1.5" />
  </svg>
)
const CakeIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="#FF5A6F" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7" {...props}>
    <path d="M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8" />
    <path d="M4 16h16" />
    <path d="M12 11V7" />
    <path d="M12 7c1.5-1.5 1.5-3.5 0-4.5-1.5 1-1.5 3 0 4.5Z" fill="#FFAE00" stroke="#FFAE00" />
    <path d="M8 11V8" />
    <path d="M16 11V8" />
  </svg>
)
const LetterIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="#FF5A6F" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7" {...props}>
    <rect width="20" height="14" x="2" y="5" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    <path d="M12 15.5l-1.5-1.5a2.12 2.12 0 0 1 0-3l3 3a2.12 2.12 0 0 1 0 3l-1.5-1.5Z" fill="#FF5A6F" />
  </svg>
)
const MusicIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="#FF5A6F" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7" {...props}>
    <path d="M9 18V5l12-2v13" />
    <circle cx="6" cy="18" r="3" fill="#FF5A6F" />
    <circle cx="18" cy="16" r="3" fill="#FF5A6F" />
  </svg>
)
const AlbumIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="#FF5A6F" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7" {...props}>
    <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
    <circle cx="9" cy="9" r="2" />
    <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
  </svg>
)
const SpecialIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="#FF5A6F" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7" {...props}>
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    <path d="M12 7c.5-1.5 2.5-1.5 3 0 .5 1.5-1.5 3-3 4.5-1.5-1.5-3.5-3-3-4.5.5-1.5 2.5-1.5 3 0Z" fill="#FF5A6F" />
  </svg>
)
const OccasionGiftIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="#FF5A6F" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7" {...props}>
    <rect width="18" height="14" x="3" y="8" rx="2" />
    <path d="M12 5a3 3 0 1 0-3-3 3 3 0 0 0 3 3Z" />
    <path d="M12 5a3 3 0 1 1 3-3 3 3 0 0 1-3 3Z" />
    <path d="M3 12h18" />
    <path d="M12 8v14" />
  </svg>
)

const OCCASIONS = [
  { id: 1, name: 'San Valentín', icon: HeartIcon },
  { id: 2, name: 'Aniversarios', icon: RingIcon },
  { id: 3, name: 'Cumpleaños', icon: CakeIcon },
  { id: 4, name: 'Carta de amor', icon: LetterIcon },
  { id: 5, name: 'Combos personalizados', icon: MusicIcon },
  { id: 6, name: 'Álbumes digitales', icon: AlbumIcon },
  { id: 7, name: 'Dedicatorias especiales', icon: SpecialIcon },
  { id: 8, name: 'Para cualquier ocasión', icon: OccasionGiftIcon },
]

const PRODUCTS = [
  {
    id: 1,
    category: 'VIDEO',
    title: 'Corazón Galáctico de Partículas',
    rating: 5.0,
    reviews: 150,
    price: 29.90,
    originalPrice: 49.90,
    image: 'https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&w=600&q=80',
    badge: 'MÁS VENDIDO',
    badgeColor: 'bg-[#FF5A6F]',
    previewHtml: '/detalles/CORAZONVIRAL (1).html',
  },
  {
    id: 2,
    category: '3D ROMÁNTICO',
    title: '3D I Love You Animado',
    rating: 5.0,
    reviews: 98,
    price: 24.90,
    originalPrice: 39.90,
    image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80',
    badge: 'EXCLUSIVO',
    badgeColor: 'bg-amber-500',
    previewHtml: '/detalles/3D_I_LOVE_YOU.html',
  },
  {
    id: 3,
    category: 'DEDICATORIAS',
    title: 'Ángel de Amor Personalizado',
    rating: 5.0,
    reviews: 114,
    price: 14.90,
    originalPrice: 29.90,
    image: 'https://images.unsplash.com/photo-1518895949257-7621c3c786d7?auto=format&fit=crop&w=600&q=80',
    badge: 'NUEVO',
    badgeColor: 'bg-emerald-500',
    previewHtml: '/detalles/Angel_.html',
  },
  {
    id: 4,
    category: 'SALUDO',
    title: 'Buenos Días con Amor',
    rating: 5.0,
    reviews: 207,
    price: 34.90,
    originalPrice: 59.90,
    image: 'https://images.unsplash.com/photo-1512418490979-92798cec1380?auto=format&fit=crop&w=600&q=80',
    badge: 'LA PREFERIDA',
    badgeColor: 'bg-indigo-500',
    previewHtml: '/detalles/Buenos dias.html',
  },
  {
    id: 5,
    category: 'CONTADOR',
    title: 'Contador de Fechas Especiales',
    rating: 5.0,
    reviews: 132,
    price: 19.90,
    originalPrice: 34.90,
    image: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=600&q=80',
    badge: 'ESPECIAL',
    badgeColor: 'bg-violet-500',
    previewHtml: '/detalles/Contador-de-Fechas-Especiales.html',
  },
  {
    id: 6,
    category: 'CORAZONES',
    title: 'Corazón Multicolor con Emojis',
    rating: 5.0,
    reviews: 89,
    price: 12.90,
    originalPrice: 24.90,
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=600&q=80',
    badge: 'VIRAL',
    badgeColor: 'bg-pink-500',
    previewHtml: '/detalles/corazon_multicolor_emojis.html',
  },
  {
    id: 7,
    category: 'CORAZONES',
    title: 'Corazón Viral Genial',
    rating: 5.0,
    reviews: 203,
    price: 17.90,
    originalPrice: 29.90,
    image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80',
    badge: 'TOP',
    badgeColor: 'bg-rose-500',
    previewHtml: '/detalles/Corazon_Viral_Genial.html',
  },
  {
    id: 8,
    category: 'CORAZONES',
    title: 'Corazón Viral Genial Premium',
    rating: 5.0,
    reviews: 175,
    price: 22.90,
    originalPrice: 39.90,
    image: 'https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&w=600&q=80',
    badge: 'PREMIUM',
    badgeColor: 'bg-amber-600',
    previewHtml: '/detalles/Corazon_Viral_Genial (1).html',
  },
  {
    id: 9,
    category: 'FRASES',
    title: 'Corazones con Frases de Amor',
    rating: 5.0,
    reviews: 161,
    price: 15.90,
    originalPrice: 27.90,
    image: 'https://images.unsplash.com/photo-1518895949257-7621c3c786d7?auto=format&fit=crop&w=600&q=80',
    badge: 'ROMÁNTICO',
    badgeColor: 'bg-red-500',
    previewHtml: '/detalles/corazonesconfrases.html',
  },
]

const GALLERY_PHOTOS = [
  'https://images.unsplash.com/photo-1512418490979-92798cec1380?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1518895949257-7621c3c786d7?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&w=400&q=80'
]

const TESTIMONIALS = [
  {
    id: 1,
    name: 'Carlos M.',
    location: 'Lima, Perú',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&h=150&q=80',
    text: 'Le envié un video personalizado y lloró de emoción. 100% recomendado, son los mejores.',
    rating: 5
  },
  {
    id: 2,
    name: 'Andres R.',
    location: 'Arequipa, Perú',
    avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=150&h=150&q=80',
    text: 'La canción quedó increíble, superó mis expectativas. ¡Muchas gracias!',
    rating: 5
  },
  {
    id: 3,
    name: 'Daniel P.',
    location: 'Trujillo, Perú',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80',
    text: 'El álbum digital es hermoso, tiene una calidad que realmente sorprende.',
    rating: 5
  }
]

export default function App() {
  const [cartItems, setCartItems] = useState([])
  const [activeTab, setActiveTab] = useState('Más vendidos')
  const [toastMessage, setToastMessage] = useState('')
  const [emailInput, setEmailInput] = useState('')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isPlaying, setIsPlaying] = useState(true)
  const [testimonialIndex, setTestimonialIndex] = useState(0)
  const [searchQuery, setSearchQuery] = useState('')
  const [cartOpen, setCartOpen] = useState(false)

  // Customization modal state
  const [customizingProduct, setCustomizingProduct] = useState(null)
  const [formSender, setFormSender] = useState('')
  const [formReceiver, setFormReceiver] = useState('')
  const [formMessage, setFormMessage] = useState('')
  const [formMusic, setFormMusic] = useState('Romántica Acústica')

  // Favorites
  const [favorites, setFavorites] = useState([])
  const [favoritesOpen, setFavoritesOpen] = useState(false)

  // Countdown timer hooks
  const [hours, setHours] = useState(23)
  const [minutes, setMinutes] = useState(58)
  const [seconds, setSeconds] = useState(45)

  // Page loading states
  const [loading, setLoading] = useState(true)
  const [loadingFadeOut, setLoadingFadeOut] = useState(false)

  const occasionsRef = useRef(null)
  const galleryRef = useRef(null)

  useEffect(() => {
    // Hide loading screen after 1.5s
    const loadTimeout = setTimeout(() => {
      setLoadingFadeOut(true)
      setTimeout(() => {
        setLoading(false)
      }, 500) // matches transition duration
    }, 1500)

    const timer = setInterval(() => {
      setSeconds(prev => {
        if (prev > 0) return prev - 1
        setMinutes(m => {
          if (m > 0) return m - 1
          setHours(h => (h > 0 ? h - 1 : 23))
          return 59
        })
        return 59
      })
    }, 1000)

    return () => {
      clearTimeout(loadTimeout)
      clearInterval(timer)
    }
  }, [])

  const cartCount = useMemo(() => {
    return cartItems.reduce((acc, curr) => acc + curr.quantity, 0)
  }, [cartItems])

  const totalAmount = useMemo(() => {
    return cartItems.reduce((acc, curr) => acc + (curr.price * curr.quantity), 0).toFixed(2)
  }, [cartItems])

  const showToast = (message) => {
    setToastMessage(message)
    setTimeout(() => setToastMessage(''), 3000)
  }

  const handleToggleFavorite = (id, title) => {
    if (favorites.includes(id)) {
      setFavorites(prev => prev.filter(item => item !== id))
      showToast(`Quitado de favoritos: ${title} ♡`)
    } else {
      setFavorites(prev => [...prev, id])
      showToast(`Agregado a favoritos: ${title} ❤️`)
    }
  }

  const handleOpenDetail = (product) => {
    setCustomizingProduct(product)
    setFormSender('')
    setFormReceiver('')
    setFormMessage('')
    setFormMusic('Romántica Acústica')
  }

  const handleAddCustomizedToCart = (e) => {
    e.preventDefault()
    if (!formSender || !formReceiver || !formMessage) {
      showToast('Por favor completa todos los campos del formulario. ✍️')
      return
    }

    const newItem = {
      id: Date.now(),
      title: customizingProduct.title,
      price: customizingProduct.price,
      quantity: 1,
      image: customizingProduct.image,
      customization: {
        sender: formSender,
        receiver: formReceiver,
        message: formMessage,
        music: formMusic
      }
    }

    setCartItems(prev => [...prev, newItem])
    setCustomizingProduct(null)
    setCartOpen(true)
    showToast('¡Detalle personalizado añadido al carrito! 🛒❤️')
  }

  const handleRemoveFromCart = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id))
    showToast('Producto eliminado del carrito.')
  }

  const handleUpdateQuantity = (id, change) => {
    setCartItems(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = item.quantity + change
        return { ...item, quantity: newQty > 0 ? newQty : 1 }
      }
      return item
    }))
  }

  const handleCheckoutWhatsApp = () => {
    if (cartItems.length === 0) {
      showToast('Tu carrito está vacío. 🛒')
      return
    }

    let messageText = '¡Hola! Me gustaría adquirir las siguientes dedicatorias digitales:\n\n'
    cartItems.forEach((item, idx) => {
      messageText += `*${idx + 1}. ${item.title}* (Cant: ${item.quantity}) - S/ ${(item.price * item.quantity).toFixed(2)}\n`
      messageText += `   De: ${item.customization.sender} | Para: ${item.customization.receiver}\n`
      messageText += `   Dedicatoria: "${item.customization.message}"\n`
      messageText += `   Música: ${item.customization.music}\n\n`
    })
    messageText += `*Total a pagar: S/ ${totalAmount}*\n`
    messageText += 'Quedo a la espera para realizar el pago y recibir el enlace de descarga.'

    const encodedText = encodeURIComponent(messageText)
    window.open(`https://wa.me/51900123456?text=${encodedText}`, '_blank')
    showToast('Redirigiendo a WhatsApp... 📲')
  }

  const handleBuyNow = (prod) => {
    const messageText = `¡Hola! Quiero comprar:\n\n*${prod.title}*\nPrecio: S/ ${prod.price.toFixed(2)}\n\n¿Cómo procedo con el pago?`
    const encodedText = encodeURIComponent(messageText)
    window.open(`https://wa.me/51900123456?text=${encodedText}`, '_blank')
    showToast(`Comprando: ${prod.title} 📲`)
  }

  const [previewImage, setPreviewImage] = useState(null)

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (emailInput.trim()) {
      showToast(`¡Suscrito con éxito! Enviamos tu cupón a: ${emailInput} 💌`)
      setEmailInput('')
    }
  }

  const scrollOccasions = (direction) => {
    if (occasionsRef.current) {
      const scrollAmount = direction === 'left' ? -260 : 260
      occasionsRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
    }
  }

  const scrollGallery = (direction) => {
    if (galleryRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300
      galleryRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen flex flex-col font-sans select-none antialiased bg-white text-slate-800">
      {/* 0. PAGE PRELOADER */}
      {loading && (
        <div className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-white transition-opacity duration-500 ${loadingFadeOut ? 'opacity-0' : 'opacity-100'}`}>
          <div className="flex flex-col items-center space-y-4">
            {/* Pulsing heart logo icon */}
            <div className="p-4 bg-[#FFF0F2] rounded-3xl animate-preloader-pulse">
              <Heart className="w-14 h-14 text-[#FF5A6F] fill-[#FF5A6F]" />
            </div>
            
            {/* Pulsing text info */}
            <div className="flex flex-col items-center">
              <span className="font-extrabold text-lg sm:text-xl text-slate-900 tracking-tight leading-none">
                Detalles que <span className="font-cursive text-2xl sm:text-3xl text-[#FF5A6F] font-bold italic">enamoran</span>
              </span>
              <span className="text-[9px] text-[#FF5A6F] font-extrabold tracking-[0.25em] uppercase leading-none mt-2">
                DIGITALES
              </span>
            </div>

            {/* Spinner line loader */}
            <div className="w-24 h-1 bg-slate-100 rounded-full overflow-hidden relative mt-4">
              <div className="absolute top-0 left-0 h-full bg-[#FF5A6F] rounded-full w-1/2 animate-shimmer" style={{ animation: 'shimmer 1.5s infinite ease-in-out' }}></div>
            </div>
          </div>
        </div>
      )}

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-slate-900 text-white px-5 py-3 rounded-xl shadow-2xl flex items-center space-x-3 border border-[#FF5A6F] animate-bounce">
          <Heart className="w-5 h-5 text-[#FF5A6F] fill-[#FF5A6F]" />
          <span className="font-semibold text-sm">{toastMessage}</span>
        </div>
      )}

      {/* 1. TOP BAR */}
      <div className="bg-[#FF5A6F] text-white text-xs py-2.5 px-4 font-semibold tracking-wide">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0 text-center">
          <div className="flex items-center space-x-2">
            <Truck className="w-4.5 h-4.5 text-white/90" />
            <span>Entrega inmediata en todo el Perú</span>
          </div>
          <div className="flex items-center space-x-2">
            <Lock className="w-4.5 h-4.5 text-white/90" />
            <span>Pago 100% seguro</span>
          </div>
          <div className="flex items-center space-x-2">
            <MessageCircle className="w-4.5 h-4.5 text-white/90 fill-white/10" />
            <span>Soporte 24/7 por WhatsApp</span>
          </div>
        </div>
      </div>

      {/* 2. HEADER / NAVBAR */}
      <header className="sticky top-0 bg-white shadow-sm z-40 border-b border-slate-100">
        <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-4 sm:px-6 lg:px-8 relative">
          {/* Logo */}
          <div
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center space-x-2 group cursor-pointer"
          >
            <div className="p-1.5 bg-[#FFF0F2] rounded-lg group-hover:scale-110 transition-transform shrink-0">
              <Heart className="w-7 h-7 text-[#FF5A6F] fill-[#FF5A6F]" />
            </div>
            <div className="flex flex-col text-left">
              <span className="font-extrabold text-base sm:text-lg text-slate-900 leading-none tracking-tight">
                Detalles que <span className="font-cursive text-xl sm:text-2xl text-[#FF5A6F] font-bold italic">enamoran</span>
              </span>
              <span className="text-[8px] sm:text-[9px] text-[#FF5A6F] font-extrabold tracking-[0.25em] uppercase leading-none mt-1">
                DIGITALES
              </span>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-7 text-[15px] font-semibold text-slate-600">
            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="nav-link pb-1 text-[#FF5A6F]">Inicio</button>
            <div className="relative group cursor-pointer flex items-center space-x-1 hover:text-[#FF5A6F] transition-colors nav-link pb-1">
              <span>Catálogo</span>
              <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
              {/* Dropdown */}
              <div className="absolute top-full left-0 mt-3 bg-white border border-slate-100 rounded-xl shadow-xl py-2 w-48 hidden group-hover:block transition-all">
                {['Videos', 'Cartas', 'Música', 'Álbumes', 'Promociones'].map(cat => (
                  <button
                    key={cat}
                    onClick={() => {
                      const el = document.getElementById('catalogo');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="w-full text-left px-4 py-2 hover:bg-[#FFF0F2] hover:text-[#FF5A6F] font-medium text-slate-700 transition-colors"
                  >
                     {cat}
                  </button>
                ))}
              </div>
            </div>
            <button onClick={() => document.getElementById('pasos')?.scrollIntoView({ behavior: 'smooth' })} className="nav-link pb-1 hover:text-[#FF5A6F] transition-colors">Personaliza</button>
            <button onClick={() => document.getElementById('pasos')?.scrollIntoView({ behavior: 'smooth' })} className="nav-link pb-1 hover:text-[#FF5A6F] transition-colors">Cómo funciona</button>
            <button onClick={() => document.getElementById('testimonios')?.scrollIntoView({ behavior: 'smooth' })} className="nav-link pb-1 hover:text-[#FF5A6F] transition-colors">Nosotros</button>
            <button onClick={() => document.getElementById('newsletter')?.scrollIntoView({ behavior: 'smooth' })} className="nav-link pb-1 hover:text-[#FF5A6F] transition-colors">Blog</button>
            <button onClick={() => document.getElementById('footer')?.scrollIntoView({ behavior: 'smooth' })} className="nav-link pb-1 hover:text-[#FF5A6F] transition-colors">Contacto</button>
          </nav>

          {/* Action Icons */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            {/* Search Input (Desktop) */}
            <div className="hidden md:flex relative items-center bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-1.5 w-40 sm:w-48 transition-all">
              <Search className="w-4.5 h-4.5 text-slate-400 mr-2 shrink-0" />
              <input
                type="text"
                placeholder="¿Buscar detalles...?"
                className="w-full text-xs bg-transparent border-none outline-none focus:outline-none focus:ring-0 text-slate-700 p-0"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && searchQuery.trim()) {
                    showToast(`Buscando: "${searchQuery}"... 🔍`)
                    setSearchQuery('')
                  }
                }}
              />
            </div>


            {/* Favorites Icon */}
            <button
              onClick={() => setFavoritesOpen(!favoritesOpen)}
              className={`p-2 rounded-full transition-colors relative ${favoritesOpen ? 'bg-[#FFF0F2] text-[#FF5A6F]' : 'hover:bg-slate-50 text-slate-600 hover:text-[#FF5A6F]'}`}
              aria-label="Favoritos"
            >
              <Heart className={`w-5 h-5 ${favorites.length > 0 ? 'text-[#FF5A6F] fill-[#FF5A6F]' : ''}`} />
              {favorites.length > 0 && (
                <span className="absolute top-0 right-0 bg-[#FF5A6F] text-white text-[8px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {favorites.length}
                </span>
              )}
            </button>

            {/* Shopping Cart Icon */}
            <button
              onClick={() => setCartOpen(true)}
              className="p-2 hover:bg-slate-50 rounded-full text-slate-600 hover:text-[#FF5A6F] transition-colors relative"
              aria-label="Carrito"
            >
              <ShoppingCart className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 bg-[#FF5A6F] text-white text-[10px] font-extrabold w-4.5 h-4.5 rounded-full flex items-center justify-center border-2 border-white">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Hamburger Button (Mobile) */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 lg:hidden rounded-full hover:bg-slate-50 text-slate-600 hover:text-[#FF5A6F] transition-colors"
              aria-label="Menú de navegación"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer Menu (Floating on top with backdrop) */}
        {mobileMenuOpen && (
          <>
            {/* Backdrop overlay */}
            <div
              className="fixed inset-0 top-[73px] bg-slate-950/20 backdrop-blur-xs z-35"
              onClick={() => setMobileMenuOpen(false)}
            />
            {/* Floating menu body */}
            <div className="absolute top-full left-0 right-0 bg-white border-b border-slate-150 py-6 px-6 space-y-4 shadow-2xl flex flex-col text-left font-semibold text-slate-700 z-40 animate-fade-in-up">
              <div className="flex md:hidden relative items-center bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 w-full">
                <Search className="w-4.5 h-4.5 text-slate-400 mr-2 shrink-0" />
                <input
                  type="text"
                  placeholder="¿Buscar detalles...?"
                  className="w-full text-sm bg-transparent border-none outline-none focus:outline-none focus:ring-0 text-slate-700 p-0"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && searchQuery.trim()) {
                      showToast(`Buscando: "${searchQuery}"... 🔍`)
                      setSearchQuery('')
                      setMobileMenuOpen(false)
                    }
                  }}
                />
              </div>
              <button onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); setMobileMenuOpen(false); }} className="w-full text-left py-1.5 hover:text-[#FF5A6F]">Inicio</button>
              <button onClick={() => { document.getElementById('catalogo')?.scrollIntoView({ behavior: 'smooth' }); setMobileMenuOpen(false); }} className="w-full text-left py-1.5 border-t border-slate-150 pt-2 hover:text-[#FF5A6F]">Catálogo</button>
              <button onClick={() => { document.getElementById('pasos')?.scrollIntoView({ behavior: 'smooth' }); setMobileMenuOpen(false); }} className="w-full text-left py-1.5 border-t border-slate-150 pt-2 hover:text-[#FF5A6F]">Personaliza</button>
              <button onClick={() => { document.getElementById('pasos')?.scrollIntoView({ behavior: 'smooth' }); setMobileMenuOpen(false); }} className="w-full text-left py-1.5 border-t border-slate-150 pt-2 hover:text-[#FF5A6F]">Cómo funciona</button>
              <button onClick={() => { document.getElementById('testimonios')?.scrollIntoView({ behavior: 'smooth' }); setMobileMenuOpen(false); }} className="w-full text-left py-1.5 border-t border-slate-150 pt-2 hover:text-[#FF5A6F]">Nosotros</button>
              <button onClick={() => { document.getElementById('newsletter')?.scrollIntoView({ behavior: 'smooth' }); setMobileMenuOpen(false); }} className="w-full text-left py-1.5 border-t border-slate-150 pt-2 hover:text-[#FF5A6F]">Blog</button>
              <button onClick={() => { document.getElementById('footer')?.scrollIntoView({ behavior: 'smooth' }); setMobileMenuOpen(false); }} className="w-full text-left py-1.5 border-t border-slate-150 pt-2 hover:text-[#FF5A6F]">Contacto</button>
            </div>
          </>
        )}

        {/* Favorites Modal Dropdown Overlay (Floating on top) */}
        {favoritesOpen && (
          <div className="absolute top-full mt-2 right-4 sm:right-6 bg-white border border-slate-100 rounded-2xl shadow-2xl py-4 px-4 w-72 text-left z-50 space-y-3 animate-fade-in-up">
            <div className="flex justify-between items-center border-b border-slate-100 pb-2">
              <span className="font-extrabold text-xs text-slate-800 uppercase tracking-wider flex items-center">
                <Heart className="w-4 h-4 text-[#FF5A6F] fill-[#FF5A6F] mr-1.5" />
                Mis Favoritos
              </span>
              <button onClick={() => setFavoritesOpen(false)} className="text-slate-400 hover:text-[#FF5A6F]">
                <X className="w-4.5 h-4.5" />
              </button>
            </div>
            {favorites.length === 0 ? (
              <p className="text-xs text-slate-400 font-light py-4 text-center">Aún no tienes favoritos. ♡</p>
            ) : (
              <div className="space-y-3 max-h-60 overflow-y-auto no-scrollbar">
                {PRODUCTS.filter(p => favorites.includes(p.id)).map(fav => (
                  <div key={fav.id} className="flex items-center justify-between space-x-3 border-b border-slate-50 pb-2">
                    <img src={fav.image} alt={fav.title} className="w-10 h-10 object-cover rounded-lg" />
                    <div className="flex-1 text-left">
                      <p className="text-xs font-bold text-slate-800 line-clamp-1 leading-snug">{fav.title}</p>
                      <p className="text-xs text-[#FF5A6F] font-extrabold mt-0.5">S/ {fav.price.toFixed(2)}</p>
                    </div>
                    <button
                      onClick={() => { handleOpenDetail(fav); setFavoritesOpen(false); }}
                      className="p-1 text-[#FF5A6F] hover:bg-[#FFF0F2] rounded-lg text-[10px] font-bold"
                    >
                      Crear
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </header>

      {/* 3. HERO SECTION */}
      <section
        className="relative py-14 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 border-b border-slate-100 overflow-hidden bg-[position:15%_center] lg:bg-center bg-cover bg-no-repeat transition-all duration-300"
        style={{ backgroundImage: `url(${heroBgImg})` }}
      >
        {/* Transparent white overlay to make text highly readable */}
        <div className="absolute inset-0 bg-white/40 lg:bg-gradient-to-r lg:from-white/50 lg:via-white/20 lg:to-transparent z-0 pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column */}
          <div className="space-y-6 max-w-xl text-left lg:col-span-7 animate-fade-in-up">
            <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-md border border-[#FF5A6F]/30 text-[#FF5A6F] text-xs px-3.5 py-1.5 rounded-full font-bold uppercase tracking-wider shadow-sm">
              <Heart className="w-3.5 h-3.5 fill-[#FF5A6F] text-[#FF5A6F] animate-pulse" />
              <span>PLATAFORMA DIGITAL #1 EN DETALLES</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.1] tracking-tight">
              Regala momentos <br />
              <span className="text-[#FF5A6F] font-cursive text-5xl sm:text-6xl lg:text-7.5xl font-semibold italic inline-flex items-center relative">
                que enamoran
                <svg className="absolute -bottom-2.5 left-0 w-full h-3 text-[#FF5A6F]/30" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0,7 C30,2 70,2 100,7" stroke="currentColor" strokeWidth="2" fill="none" />
                </svg>
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
              Videos, cartas, canciones, álbumes y más detalles personalizados para sorprender a esa persona especial.
            </p>

            {/* 4 Points Grid */}
            <div className="grid grid-cols-2 gap-4 max-w-lg pt-2">
              <div className="flex items-center space-x-2.5 bg-white/70 backdrop-blur-sm border border-slate-100 p-3 rounded-xl shadow-xs">
                <Gift className="w-5 h-5 text-[#FF5A6F]" />
                <span className="text-xs font-bold text-slate-800">+10,000 Detalles entregados</span>
              </div>
              <div className="flex items-center space-x-2.5 bg-white/70 backdrop-blur-sm border border-slate-100 p-3 rounded-xl shadow-xs">
                <Star className="w-5 h-5 text-amber-500 fill-amber-500" />
                <span className="text-xs font-bold text-slate-800">4.9/5 Valoración promedio</span>
              </div>
              <div className="flex items-center space-x-2.5 bg-white/70 backdrop-blur-sm border border-slate-100 p-3 rounded-xl shadow-xs">
                <Zap className="w-5 h-5 text-[#FF5A6F] fill-[#FF5A6F]" />
                <span className="text-xs font-bold text-slate-800">Entrega inmediata</span>
              </div>
              <div className="flex items-center space-x-2.5 bg-white/70 backdrop-blur-sm border border-slate-100 p-3 rounded-xl shadow-xs">
                <Lock className="w-5 h-5 text-[#FF5A6F]" />
                <span className="text-xs font-bold text-slate-800">Pago 100% seguro</span>
              </div>
            </div>

            {/* Call to Actions */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <button
                onClick={() => document.getElementById('catalogo')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center justify-center px-6 py-3.5 bg-[#FF5A6F] hover:bg-[#ff465d] text-white font-bold rounded-2xl shadow-lg hover:shadow-[#FF5A6F]/20 transform hover:-translate-y-0.5 transition-all text-sm"
              >
                Explorar catálogo
              </button>
              <button
                onClick={() => handleOpenDetail(PRODUCTS[0])}
                className="inline-flex items-center justify-center px-6 py-3.5 border-2 border-[#FF5A6F] text-[#FF5A6F] hover:bg-[#FFF0F2] font-bold rounded-2xl transition-all text-sm bg-white/50"
              >
                Personalizar ahora
                <Heart className="w-4 h-4 ml-1.5 text-[#FF5A6F]" />
              </button>
              <button
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center space-x-2.5 py-2 px-3 text-left hover:text-[#FF5A6F] transition-all group"
              >
                <div className="w-10 h-10 bg-[#FF5A6F] rounded-full flex items-center justify-center text-white shadow-md animate-pulse-ring cursor-pointer shrink-0">
                  <Play className="w-4 h-4 fill-white ml-0.5" />
                </div>
                <div>
                  <span className="text-xs font-extrabold text-slate-800 block leading-tight">Ver cómo funciona</span>
                  <span className="text-[10px] text-slate-400 font-light block mt-0.5">Video explicativo</span>
                </div>
              </button>
            </div>

            {/* Bottom Payment Trust Row */}
            <div className="pt-6 border-t border-slate-200/50 flex flex-wrap items-center gap-4">
              <span className="text-xs text-slate-500 font-bold">Pago como prefieras:</span>
              <div className="flex flex-wrap items-center gap-2">
                <div className="bg-[#74227C] text-white px-2.5 py-1 rounded-lg font-black text-[9px] select-none tracking-tight">yape</div>
                <div className="bg-[#00D1C4] text-white px-2.5 py-1 rounded-lg font-black text-[9px] select-none tracking-tight">plin</div>
                <div className="bg-[#002A54] text-white px-2.5 py-1 rounded-lg font-black text-[9px] select-none tracking-tight flex items-center border border-orange-500/20"><span className="text-orange-500 mr-0.5 font-bold">▶</span>BCP</div>
                <div className="bg-slate-100 text-blue-800 px-2.5 py-1 rounded-lg font-black text-[9px] select-none tracking-tight italic">VISA</div>
                <div className="bg-slate-100 text-slate-800 px-2.5 py-1 rounded-lg font-black text-[9px] select-none tracking-tight flex items-center space-x-0.5">
                  <div className="flex -space-x-1.5"><div className="w-2 h-2 bg-red-500 rounded-full"></div><div className="w-2 h-2 bg-amber-500 rounded-full opacity-80"></div></div>
                  <span className="text-[8px] font-bold">mc</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column (Transparent placeholder to reveal background image couple) */}
          <div className="hidden lg:block lg:col-span-5 h-[400px]" />
        </div>
      </section>

      {/* 4. SECCIÓN DE OCASIONES */}
      <section className="py-16 bg-white px-4 sm:px-6 lg:px-8 border-b border-slate-100">
        <div className="max-w-7xl mx-auto relative text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
            Encuentra el <span className="text-[#FF5A6F] font-cursive text-3xl sm:text-4xl font-bold italic">detalle perfecto</span> para cada ocasión
          </h2>

          {/* Nav arrows */}
          <div className="absolute right-4 top-0 space-x-2 hidden sm:flex">
            <button
              onClick={() => scrollOccasions('left')}
              className="p-2 bg-slate-50 hover:bg-[#FF5A6F] border border-slate-200 rounded-full text-slate-600 hover:text-white transition-all shadow-xs cursor-pointer"
              aria-label="Anterior"
            >
              <ChevronLeft className="w-4.5 h-4.5" />
            </button>
            <button
              onClick={() => scrollOccasions('right')}
              className="p-2 bg-slate-50 hover:bg-[#FF5A6F] border border-slate-200 rounded-full text-slate-600 hover:text-white transition-all shadow-xs cursor-pointer"
              aria-label="Siguiente"
            >
              <ChevronRight className="w-4.5 h-4.5" />
            </button>
          </div>

          {/* Occasions List */}
          <div
            ref={occasionsRef}
            className="flex items-center space-x-6 overflow-x-auto no-scrollbar py-8 mt-4 scroll-smooth px-2"
          >
            {OCCASIONS.map((occ) => {
              const IconComp = occ.icon
              return (
                <div
                  key={occ.id}
                  onClick={() => {
                    showToast(`Filtrando motivos de: ${occ.name} 💌`)
                    document.getElementById('catalogo')?.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className="group flex-shrink-0 w-32 flex flex-col items-center cursor-pointer transform transition-all duration-300 hover:scale-105"
                >
                  <div className="w-16 h-16 rounded-full bg-[#FFF0F2] flex items-center justify-center text-[#FF5A6F] group-hover:bg-[#FF5A6F] group-hover:text-white transition-colors duration-300 shadow-xs">
                    <IconComp className="w-7 h-7 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <span className="text-slate-700 font-bold text-xs mt-3 leading-snug text-center group-hover:text-[#FF5A6F] transition-colors duration-300">
                    {occ.name}
                  </span>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* 5. SECCIÓN PRODUCTOS MÁS POPULARES */}
      <section id="catalogo" className="py-16 bg-slate-50/50 px-4 sm:px-6 lg:px-8 border-b border-slate-100">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-6 lg:space-y-0 pb-6 mb-8 border-b border-slate-200/50">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight text-left">
                Los más populares <span className="text-[#FF5A6F] font-cursive text-3xl sm:text-4xl font-bold italic">digitales</span>
              </h2>
              <p className="text-xs text-slate-400 text-left mt-1.5 font-light">Diseños románticos exclusivos para regalar al instante.</p>
            </div>

            {/* Navigation Tabs */}
            <div className="flex flex-wrap gap-1.5 bg-white p-1 rounded-xl border border-slate-200 max-w-full overflow-x-auto no-scrollbar">
              {['Más vendidos', 'Nuevos', 'Videos', 'Cartas', 'Música', 'Álbumes', 'Promociones'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => {
                    setActiveTab(tab)
                    showToast(`Mostrando: ${tab}`)
                  }}
                  className={`px-3.5 py-1.5 text-xs font-bold rounded-lg transition-all ${activeTab === tab
                    ? 'bg-[#FF5A6F] text-white shadow-xs'
                    : 'text-slate-500 hover:text-[#FF5A6F]'
                    }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <button
              onClick={() => showToast('Abriendo catálogo digital completo... 📚')}
              className="text-[#FF5A6F] hover:text-[#ff465d] text-sm font-bold flex items-center space-x-1 group"
            >
              <span>Ver todo el catálogo</span>
              <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Catalog Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Products grid */}
            <div className="lg:col-span-9 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {PRODUCTS.map((prod, idx) => {
                const isFav = favorites.includes(prod.id)
                return (
                  <div
                    key={prod.id}
                    className="bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-xs hover:shadow-xl hover:border-[#FF5A6F]/20 flex flex-col justify-between group transition-all relative staggered-card"
                    style={{ animationDelay: `${idx * 0.1}s` }}
                  >
                    {/* Floating elements */}
                    <button
                      onClick={() => handleToggleFavorite(prod.id, prod.title)}
                      className="absolute top-3 right-3 z-20 p-1.5 bg-white/80 backdrop-blur-md rounded-full shadow-xs hover:bg-white text-slate-400 hover:text-[#FF5A6F] transition-colors"
                      aria-label="Favorito"
                    >
                      <Heart className={`w-4 h-4 ${isFav ? 'text-[#FF5A6F] fill-[#FF5A6F]' : ''}`} />
                    </button>

                    <div className="relative aspect-[4/3] bg-slate-50 overflow-hidden">
                      {prod.badge && (
                        <span className={`absolute top-3 left-3 z-10 text-[9px] font-extrabold uppercase text-white px-2 py-0.5 rounded-md ${prod.badgeColor}`}>
                          {prod.badge}
                        </span>
                      )}
                      <img
                        src={prod.image}
                        alt={prod.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                    <div className="p-4 flex-1 flex flex-col justify-between text-left">
                      <div>
                        <span className="text-[10px] text-[#FF5A6F] font-extrabold uppercase tracking-wider block">
                          {prod.category}
                        </span>
                        <h3 className="font-bold text-sm text-slate-800 line-clamp-2 mt-1.5 leading-snug">
                          {prod.title}
                        </h3>

                        {/* Stars */}
                        <div className="flex items-center space-x-1 mt-2">
                          <div className="flex text-amber-400">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                            ))}
                          </div>
                          <span className="text-[10px] text-slate-400 font-bold">({prod.reviews})</span>
                        </div>
                      </div>

                      <div className="mt-4 pt-3 border-t border-slate-100">
                        <div className="flex items-baseline space-x-2 mb-3">
                          <span className="text-base font-extrabold text-[#FF5A6F]">S/ {prod.price.toFixed(2)}</span>
                          <span className="text-xs text-slate-400 line-through">S/ {prod.originalPrice.toFixed(2)}</span>
                        </div>

                        {/* Two action buttons: Ver + Comprar */}
                        <div className="grid grid-cols-2 gap-1.5">
                          {/* Ver — abre la página HTML del detalle */}
                          <button
                            onClick={() => setPreviewImage(import.meta.env.BASE_URL.replace(/\/$/, '') + prod.previewHtml)}
                            className="py-2 bg-slate-50 border border-slate-200 hover:border-[#FF5A6F]/50 text-slate-600 hover:text-[#FF5A6F] rounded-xl text-[11px] font-bold transition-all flex items-center justify-center gap-1"
                          >
                            <Eye className="w-3.5 h-3.5" />
                            Ver
                          </button>

                          {/* Comprar — WhatsApp directo */}
                          <button
                            onClick={() => handleBuyNow(prod)}
                            className="py-2 bg-[#FF5A6F] hover:bg-[#ff465d] text-white rounded-xl text-[11px] font-bold transition-all flex items-center justify-center gap-1 shadow-sm"
                          >
                            <ShoppingCart className="w-3.5 h-3.5" />
                            Comprar
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Checklist Column */}
            <div className="lg:col-span-3 bg-white border border-slate-200 rounded-3xl p-6 flex flex-col justify-between text-left shadow-xs">
              <div className="space-y-4">
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider border-b border-slate-100 pb-2">Ventajas Clave</h3>
                <div className="space-y-3.5">
                  <div className="flex items-start space-x-2.5">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <p className="text-xs text-slate-600 leading-relaxed font-medium">
                      <strong className="font-semibold text-slate-800 block">Entrega inmediata</strong> por email o WhatsApp.
                    </p>
                  </div>
                  <div className="flex items-start space-x-2.5">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <p className="text-xs text-slate-600 leading-relaxed font-medium">
                      <strong className="font-semibold text-slate-800 block">Personalización total</strong> Con fotos, textos, música y más.
                    </p>
                  </div>
                  <div className="flex items-start space-x-2.5">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <p className="text-xs text-slate-600 leading-relaxed font-medium">
                      <strong className="font-semibold text-slate-800 block">Vista previa</strong> Revisa tu detalle antes de pagar.
                    </p>
                  </div>
                  <div className="flex items-start space-x-2.5">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <p className="text-xs text-slate-600 leading-relaxed font-medium">
                      <strong className="font-semibold text-slate-800 block">Soporte 24/7</strong> Te ayudamos en todo momento.
                    </p>
                  </div>
                </div>
              </div>

              <button
                onClick={() => handleOpenDetail(PRODUCTS[0])}
                className="mt-6 w-full py-3 bg-[#FF5A6F] hover:bg-[#ff465d] text-white rounded-xl text-xs font-bold transition-all shadow-md flex items-center justify-center space-x-1"
              >
                <span>Crear mi detalle ahora ⚡</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 6. SECCIÓN "CREA TU DETALLE" EN 3 PASOS */}
      <section id="pasos" className="py-20 bg-[#FFF9FA] px-4 sm:px-6 lg:px-8 border-b border-slate-100 overflow-visible">
        <div className="max-w-6xl mx-auto bg-white border border-slate-100/80 rounded-[2.5rem] shadow-xl p-8 md:p-12 relative overflow-visible">
          {/* Centered Header */}
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 leading-tight">
              Crea tu detalle <span className="text-[#FF5A6F] font-cursive italic font-normal text-3xl sm:text-4xl lg:text-5xl mr-2">personalizado</span> en 3 pasos
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center overflow-visible">
            {/* Steps Left Column */}
            <div className="lg:col-span-7 relative overflow-visible">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-6 w-full items-start relative z-10">
                {/* Step 1 */}
                <div className="flex flex-col items-center text-center space-y-4 group">
                  <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#FFF0F2] border border-[#FF5A6F]/20 flex items-center justify-center shadow-inner group-hover:border-[#FF5A6F]/40 transition-colors duration-305">
                    <div className="absolute -top-1 -left-1 w-7 h-7 rounded-full bg-[#FF5A6F] text-white flex items-center justify-center font-bold text-xs shadow-md z-10">
                      1
                    </div>
                    {/* Red line icon of browser/layout */}
                    <svg viewBox="0 0 24 24" fill="none" stroke="#FF5A6F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-9 h-9 group-hover:scale-110 transition-transform duration-300">
                      <rect x="3" y="3" width="18" height="18" rx="2" strokeWidth="2" />
                      <path d="M3 8h18" />
                      <path d="M8 8v13" />
                      <rect x="11" y="11" width="7" height="7" rx="1" fill="#FF5A6F" fillOpacity="0.1" />
                    </svg>
                  </div>
                  <div className="space-y-1.5">
                    <h3 className="font-extrabold text-sm text-slate-800">
                      Elige tu plantilla
                    </h3>
                    <p className="text-xs text-slate-500 font-light leading-relaxed max-w-[180px] mx-auto">
                      Selecciona el tipo de detalle que más te guste.
                    </p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex flex-col items-center text-center space-y-4 group">
                  <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#FFF0F2] border border-[#FF5A6F]/20 flex items-center justify-center shadow-inner group-hover:border-[#FF5A6F]/40 transition-colors duration-305">
                    <div className="absolute -top-1 -left-1 w-7 h-7 rounded-full bg-[#FF5A6F] text-white flex items-center justify-center font-bold text-xs shadow-md z-10">
                      2
                    </div>
                    {/* Red line icon of cloud upload */}
                    <svg viewBox="0 0 24 24" fill="none" stroke="#FF5A6F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-9 h-9 group-hover:scale-110 transition-transform duration-300">
                      <path d="M17.5 19A5.5 5.5 0 0 0 18 8.02A7.5 7.5 0 0 0 4 10.5a5 5 0 0 0 .5 9.98" />
                      <path d="M12 12v9" />
                      <path d="m9 15 3-3 3 3" />
                    </svg>
                  </div>
                  <div className="space-y-1.5">
                    <h3 className="font-extrabold text-sm text-slate-800">
                      Agrega tus fotos y mensajes
                    </h3>
                    <p className="text-xs text-slate-500 font-light leading-relaxed max-w-[180px] mx-auto">
                      Personaliza con nombres, fotos, música and dedicatorias.
                    </p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex flex-col items-center text-center space-y-4 group relative">
                  <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#FFF0F2] border border-[#FF5A6F]/20 flex items-center justify-center shadow-inner group-hover:border-[#FF5A6F]/40 transition-colors duration-305">
                    <div className="absolute -top-1 -left-1 w-7 h-7 rounded-full bg-[#FF5A6F] text-white flex items-center justify-center font-bold text-xs shadow-md z-10">
                      3
                    </div>
                    {/* Red line icon of paper plane */}
                    <svg viewBox="0 0 24 24" fill="none" stroke="#FF5A6F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-9 h-9 group-hover:scale-110 transition-transform duration-300">
                      <line x1="22" y1="2" x2="11" y2="13" />
                      <polygon points="22 2 15 22 11 13 2 9 22 2" />
                    </svg>
                  </div>
                  <div className="space-y-1.5">
                    <h3 className="font-extrabold text-sm text-slate-800">
                      Realiza el pago y recibe
                    </h3>
                    <p className="text-xs text-slate-500 font-light leading-relaxed max-w-[180px] mx-auto">
                      Te lo enviamos al instante por email o WhatsApp.
                    </p>
                  </div>

                  {/* Curved dotted line pointing right to mockup on desktop */}
                  <div className="absolute -right-16 top-8 w-24 h-12 hidden lg:block pointer-events-none z-0">
                    <svg viewBox="0 0 100 50" fill="none" className="w-full h-full text-[#FF5A6F]/60">
                      <path d="M5,25 C30,5 70,5 92,20" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" strokeLinecap="round" />
                      <path d="M82,14 L92,20 L87,28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Steps Right Column (Video mockup + Overlapping cards) */}
            <div className="lg:col-span-5 flex items-center justify-center relative pt-8 lg:pt-0 overflow-visible">
              {/* Outer pink device frame */}
              <div className="bg-[#FFF0F2] border-4 border-white rounded-[2.5rem] shadow-xl p-3 w-full max-w-md aspect-[16/11] flex items-center justify-center relative overflow-visible">
                {/* Inner screen */}
                <div className="w-full h-full bg-slate-950 rounded-[1.8rem] overflow-hidden relative border border-[#FF5A6F]/10 shadow-inner group">
                  <img
                    src="https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&w=600&q=80"
                    alt="Video preview mockup"
                    className="w-full h-full object-cover opacity-80"
                  />

                  {/* Top-left float icons inside video screen */}
                  <div className="absolute top-3.5 left-3.5 flex space-x-1.5 z-20">
                    <div className="w-6.5 h-6.5 rounded-full bg-indigo-650 bg-indigo-600 text-white flex items-center justify-center shadow-md">
                      <MusicIcon className="w-3.5 h-3.5" />
                    </div>
                    <div className="w-6.5 h-6.5 rounded-full bg-[#FF5A6F] text-white flex items-center justify-center shadow-md">
                      <Heart className="w-3.5 h-3.5 fill-white text-white" />
                    </div>
                  </div>

                  {/* Pulsing play button overlay */}
                  <div
                    onClick={() => setIsModalOpen(true)}
                    className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/25 transition-colors cursor-pointer"
                  >
                    <div className="w-14 h-14 bg-gradient-to-tr from-[#FF5A6F] to-pink-500 hover:scale-105 rounded-full flex items-center justify-center text-white shadow-xl animate-pulse transition-transform duration-300">
                      <Play className="w-5 h-5 fill-white ml-0.5" />
                    </div>
                  </div>

                  {/* Video Control Bar */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent px-4 py-3 flex items-center justify-between text-white text-[10px] font-semibold">
                    <div className="flex items-center space-x-2">
                      <Play className="w-3 h-3 fill-white shrink-0" />
                      <span>0:00 / 1:18</span>
                    </div>
                    {/* Tiny visual progress bar */}
                    <div className="flex-1 mx-3 h-1 bg-white/30 rounded-full overflow-hidden">
                      <div className="w-0 h-full bg-[#FF5A6F]"></div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                      <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                    </div>
                  </div>
                </div>

                {/* Overlapping Music Card (Floating top-right) */}
                <div className="absolute -top-6 -right-6 md:-right-8 bg-white/95 backdrop-blur-sm px-4 py-3 rounded-2xl border border-slate-100 shadow-xl flex items-center space-x-3 z-30 w-[240px] text-left transform rotate-2 hover:rotate-0 transition-transform duration-300">
                  <div className="p-2.5 bg-[#FFF0F2] text-[#FF5A6F] rounded-xl shrink-0">
                    <MusicIcon className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-[10px] text-slate-400 font-bold block leading-none">Tu canción</span>
                    {/* Styled Audio Visualizer Wave */}
                    <div className="flex items-end space-x-0.5 h-4 my-1.5">
                      <div className="w-0.5 h-2 bg-[#FF5A6F] rounded-full animate-bounce" style={{ animationDelay: '0.1s', animationDuration: '1s' }}></div>
                      <div className="w-0.5 h-3 bg-[#FF5A6F] rounded-full animate-bounce" style={{ animationDelay: '0.3s', animationDuration: '0.8s' }}></div>
                      <div className="w-0.5 h-4 bg-[#FF5A6F] rounded-full animate-bounce" style={{ animationDelay: '0.5s', animationDuration: '1.2s' }}></div>
                      <div className="w-0.5 h-2.5 bg-[#FF5A6F] rounded-full animate-bounce" style={{ animationDelay: '0.2s', animationDuration: '0.9s' }}></div>
                      <div className="w-0.5 h-3.5 bg-[#FF5A6F] rounded-full animate-bounce" style={{ animationDelay: '0.4s', animationDuration: '1.1s' }}></div>
                      <div className="w-0.5 h-2 bg-[#FF5A6F] rounded-full animate-bounce" style={{ animationDelay: '0.1s', animationDuration: '0.7s' }}></div>
                      <div className="w-0.5 h-4 bg-[#FF5A6F] rounded-full animate-bounce" style={{ animationDelay: '0.6s', animationDuration: '1.3s' }}></div>
                      <div className="w-0.5 h-3 bg-[#FF5A6F] rounded-full animate-bounce" style={{ animationDelay: '0.2s', animationDuration: '1s' }}></div>
                      <div className="w-0.5 h-1.5 bg-[#FF5A6F] rounded-full animate-bounce" style={{ animationDelay: '0.4s', animationDuration: '0.8s' }}></div>
                    </div>
                    <div className="flex justify-between text-[8px] text-slate-400 font-bold">
                      <span>2:04</span>
                      <span>2:45</span>
                    </div>
                  </div>
                </div>

                {/* Overlapping Text Card (Floating bottom-right) */}
                <div className="absolute -bottom-8 -right-4 md:-right-6 bg-white/95 backdrop-blur-sm p-4 rounded-2xl border border-slate-100 shadow-xl z-30 w-48 text-left transform -rotate-2 hover:rotate-0 transition-transform duration-300">
                  <span className="text-[9px] text-slate-400 font-extrabold uppercase tracking-wider block leading-none">Carta de amor</span>
                  <p className="text-xs font-bold text-slate-800 mt-2 block leading-tight">
                    Para la persona más especial...
                  </p>
                  <div className="flex justify-start mt-2">
                    <Heart className="w-4 h-4 text-[#FF5A6F] fill-[#FF5A6F] animate-pulse" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. SECCIÓN "¿POR QUÉ ELEGIR DETALLES QUE ENAMORAN?" */}
      <section className="py-16 bg-slate-50/50 px-4 sm:px-6 lg:px-8 border-b border-slate-100">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-12">
            ¿Por qué elegir <span className="text-[#FF5A6F] font-cursive text-3xl sm:text-4xl font-bold italic">Detalles que Enamoran</span>?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              { title: 'Pagos seguros', desc: 'Tus datos 100% protegidos con seguridad bancaria.', icon: Lock },
              { title: 'Entrega inmediata', desc: 'Recibe tu detalle en tu email o WhatsApp al instante.', icon: Zap },
              { title: 'Miles de clientes felices', desc: '+10,000 personas ya nos recomiendan en todo el país.', icon: Smile },
              { title: 'Acceso permanente', desc: 'Descarga y guarda tu detalle digital para siempre.', icon: Cloud },
              { title: 'Calidad garantizada', desc: 'Detalles únicos hechos con amor por profesionales.', icon: Award }
            ].map((card, idx) => {
              const IconComp = card.icon
              return (
                <div
                  key={idx}
                  className="bg-white border border-slate-150 p-5 rounded-2xl shadow-xs text-center flex flex-col items-center space-y-3.5 transform hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                  onClick={() => showToast(`Calidad: ${card.title} 🌟`)}
                >
                  <div className="w-12 h-12 bg-[#FFF0F2] text-[#FF5A6F] rounded-full flex items-center justify-center">
                    <IconComp className="w-5.5 h-5.5 fill-[#FF5A6F]/5" />
                  </div>
                  <h3 className="font-bold text-sm text-slate-900">{card.title}</h3>
                  <p className="text-xs text-slate-500 font-light leading-relaxed">{card.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* 8. SECCIÓN METODOS DE PAGO */}
      <section className="py-16 bg-white px-4 sm:px-6 lg:px-8 border-b border-slate-100">
        <div className="max-w-5xl mx-auto text-center space-y-5">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Pago fácil, rápido y <span className="text-[#FF5A6F] font-cursive text-3.5xl font-bold italic">seguro</span>
          </h2>
          <p className="text-slate-500 text-sm font-medium">Aceptamos múltiples métodos de pago para tu comodidad</p>

          <div className="grid grid-cols-3 md:grid-cols-9 gap-4 pt-6 items-center justify-center">
            {/* Yape */}
            <div className="staggered-logo bg-[#74227C] text-white py-3 px-1 rounded-xl font-bold text-xs shadow-xs text-center select-none cursor-pointer">yape</div>
            {/* Plin */}
            <div className="staggered-logo bg-[#00D1C4] text-white py-3 px-1 rounded-xl font-bold text-xs shadow-xs text-center select-none cursor-pointer">plin</div>
            {/* BCP */}
            <div className="staggered-logo bg-[#002A54] text-white py-3 px-1 rounded-xl font-bold text-xs shadow-xs text-center select-none cursor-pointer border border-orange-500/20"><span className="text-orange-500 mr-0.5">▶</span>BCP</div>
            {/* Interbank */}
            <div className="staggered-logo border border-[#00B050] text-[#00B050] py-3 px-1 rounded-xl font-bold text-xs bg-white text-center select-none cursor-pointer">Interbank</div>
            {/* BBVA */}
            <div className="staggered-logo bg-[#004481] text-white py-3 px-1 rounded-xl font-bold text-xs shadow-xs text-center select-none cursor-pointer italic font-serif">BBVA</div>
            {/* Scotiabank */}
            <div className="staggered-logo bg-[#EE1C25] text-white py-3 px-1 rounded-xl font-bold text-xs shadow-xs text-center select-none cursor-pointer">Scotiabank</div>
            {/* Visa */}
            <div className="staggered-logo border border-slate-200 text-blue-900 py-3 px-1 rounded-xl font-extrabold text-xs bg-white text-center select-none cursor-pointer italic">VISA</div>
            {/* Mastercard */}
            <div className="staggered-logo bg-slate-900 text-white py-3 px-1 rounded-xl font-bold text-xs shadow-xs text-center select-none cursor-pointer flex items-center justify-center space-x-0.5">
              <div className="flex -space-x-1.5"><div className="w-2.5 h-2.5 bg-red-500 rounded-full"></div><div className="w-2.5 h-2.5 bg-amber-500 rounded-full opacity-80"></div></div>
              <span className="text-[9px] font-bold">mc</span>
            </div>
            {/* Amex */}
            <div className="staggered-logo bg-[#0070CD] text-white py-3 px-1 rounded-xl font-bold text-xs shadow-xs text-center select-none cursor-pointer">AMEX</div>
          </div>

          <p className="text-xs text-slate-400 font-light flex items-center justify-center space-x-1.5 pt-4">
            <Lock className="w-4 h-4 text-[#FF5A6F]" />
            <span>Tu transacción está protegida con encriptación SSL de 256 bits.</span>
          </p>
        </div>
      </section>

      {/* 9. SECCIÓN GALERÍA DE DETALLES ENTREGADOS */}
      <section className="py-16 bg-slate-50/50 px-4 sm:px-6 lg:px-8 border-b border-slate-100">
        <div className="max-w-7xl mx-auto relative text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Algunos detalles <span className="text-[#FF5A6F] font-cursive text-3.5xl font-bold italic">entregados</span> con amor
          </h2>
          <p className="text-slate-500 text-xs mt-1.5 font-light">Mira el resultado de nuestro trabajo personalizado.</p>

          {/* Navigation Arrows */}
          <button
            onClick={() => scrollGallery('left')}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 p-2 bg-white/90 hover:bg-[#FF5A6F] border border-slate-200 rounded-full text-slate-600 hover:text-white transition-all shadow-md cursor-pointer"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-4.5 h-4.5" />
          </button>
          <button
            onClick={() => scrollGallery('right')}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 p-2 bg-white/90 hover:bg-[#FF5A6F] border border-slate-200 rounded-full text-slate-600 hover:text-white transition-all shadow-md cursor-pointer"
            aria-label="Siguiente"
          >
            <ChevronRight className="w-4.5 h-4.5" />
          </button>

          {/* Carousel */}
          <div
            ref={galleryRef}
            className="flex items-center space-x-5 overflow-x-auto no-scrollbar py-8 mt-6 scroll-smooth px-6"
          >
            {GALLERY_PHOTOS.map((photo, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 w-60 aspect-[4/3] bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-xs hover:shadow-lg transition-shadow group relative"
              >
                <img
                  src={photo}
                  alt={`Detalle entregado ${idx + 1}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-[#FF5A6F]/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </div>
            ))}
          </div>

          <button
            onClick={() => showToast('Abriendo más ejemplos en redes sociales... 📸')}
            className="mt-4 px-6 py-2.5 border border-[#FF5A6F] text-[#FF5A6F] hover:bg-[#FFF0F2] font-bold rounded-xl text-xs transition-colors"
          >
            Ver más ejemplos
          </button>
        </div>
      </section>

      {/* 10. SECCIÓN DE TESTIMONIOS */}
      <section id="testimonios" className="py-16 bg-white px-4 sm:px-6 lg:px-8 border-b border-slate-100">
        <div className="max-w-7xl mx-auto text-center space-y-10">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
            Lo que dicen nuestros <span className="text-[#FF5A6F] font-cursive text-3.5xl sm:text-4xl font-bold italic">clientes</span>
          </h2>

          {/* Testimonial slider for mobile/tablet, side-by-side grid on desktop */}
          <div>
            {/* Desktop layout */}
            <div className="hidden lg:grid grid-cols-3 gap-8">
              {TESTIMONIALS.map((test) => (
                <div
                  key={test.id}
                  className="bg-slate-50 border border-slate-100 rounded-3xl p-6 shadow-xs flex flex-col justify-between text-left"
                >
                  <div className="space-y-3.5">
                    <div className="flex text-amber-400 space-x-0.5">
                      {[...Array(test.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed font-light">
                      "{test.text}"
                    </p>
                  </div>

                  <div className="flex items-center space-x-3.5 mt-6 pt-4 border-t border-slate-200/50">
                    <img
                      src={test.avatar}
                      alt={test.name}
                      className="w-10 h-10 rounded-full object-cover border border-white shadow-sm"
                    />
                    <div className="leading-none text-left">
                      <span className="font-extrabold text-xs text-slate-800 block">{test.name}</span>
                      <span className="text-[10px] text-[#FF5A6F] font-semibold block mt-0.5">{test.location}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile layout */}
            <div className="lg:hidden max-w-md mx-auto bg-slate-50 border border-slate-100 rounded-3xl p-6 shadow-xs flex flex-col justify-between text-left relative min-h-[220px]">
              <div className="space-y-3.5">
                <div className="flex text-amber-400 space-x-0.5">
                  {[...Array(TESTIMONIALS[testimonialIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-slate-600 text-sm leading-relaxed font-light">
                  "{TESTIMONIALS[testimonialIndex].text}"
                </p>
              </div>

              <div className="flex items-center space-x-3.5 mt-6 pt-4 border-t border-slate-200/50">
                <img
                  src={TESTIMONIALS[testimonialIndex].avatar}
                  alt={TESTIMONIALS[testimonialIndex].name}
                  className="w-10 h-10 rounded-full object-cover border border-white shadow-sm"
                />
                <div className="leading-none text-left">
                  <span className="font-extrabold text-xs text-slate-800 block">{TESTIMONIALS[testimonialIndex].name}</span>
                  <span className="text-[10px] text-[#FF5A6F] font-semibold block mt-0.5">{TESTIMONIALS[testimonialIndex].location}</span>
                </div>
              </div>

              {/* Slider nav arrows on mobile */}
              <div className="absolute right-4 bottom-4 flex space-x-1">
                <button
                  onClick={() => setTestimonialIndex(prev => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)}
                  className="p-1 bg-white border border-slate-200 rounded-full text-slate-600 hover:bg-[#FF5A6F] hover:text-white transition-colors"
                >
                  <ChevronLeft className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => setTestimonialIndex(prev => (prev + 1) % TESTIMONIALS.length)}
                  className="p-1 bg-white border border-slate-200 rounded-full text-slate-600 hover:bg-[#FF5A6F] hover:text-white transition-colors"
                >
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Slider dot indicators */}
            <div className="flex justify-center space-x-1.5 mt-6">
              {TESTIMONIALS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setTestimonialIndex(idx)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${testimonialIndex === idx ? 'w-5 bg-[#FF5A6F]' : 'w-1.5 bg-slate-200'}`}
                  aria-label={`Ir al testimonio ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 11. SECCIÓN DE BANNER DE CUENTA REGRESIVA */}
      <section className="py-12 bg-slate-50/50 px-4 sm:px-6 lg:px-8 border-b border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="bg-[#FFF0F2] border border-[#FF5A6F]/20 rounded-3xl p-8 flex flex-col lg:flex-row items-center justify-between gap-8 relative overflow-hidden shadow-xs text-left">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF5A6F]/5 rounded-full blur-2xl pointer-events-none" />

            <div className="space-y-3 z-10">
              <span className="inline-block bg-[#FF5A6F] text-white text-[9px] font-extrabold uppercase px-2 py-0.5 rounded-md tracking-wider">OFERTA ESPECIAL</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
                20% de descuento HOY
              </h2>
              <p className="text-slate-600 text-sm font-medium">Sorprende a esa persona especial con el mejor detalle ♥</p>
            </div>

            {/* Timer boxes & button */}
            <div className="flex flex-col sm:flex-row items-center gap-6 z-10 w-full lg:w-auto shrink-0">
              <div className="flex items-center space-x-3.5">
                {/* Hours */}
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 bg-white border border-slate-150 rounded-2xl flex items-center justify-center font-black text-xl text-slate-800 shadow-sm leading-none">{hours}</div>
                  <span className="text-[9px] font-extrabold text-slate-400 mt-1 uppercase tracking-wider">HORAS</span>
                </div>
                <span className="font-extrabold text-slate-400 text-xl leading-none -mt-4">:</span>
                {/* Minutes */}
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 bg-white border border-slate-150 rounded-2xl flex items-center justify-center font-black text-xl text-slate-800 shadow-sm leading-none">{minutes}</div>
                  <span className="text-[9px] font-extrabold text-slate-400 mt-1 uppercase tracking-wider">MINUTOS</span>
                </div>
                <span className="font-extrabold text-slate-400 text-xl leading-none -mt-4">:</span>
                {/* Seconds */}
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 bg-white border border-slate-150 rounded-2xl flex items-center justify-center font-black text-xl text-slate-800 shadow-sm leading-none">{seconds}</div>
                  <span className="text-[9px] font-extrabold text-slate-400 mt-1 uppercase tracking-wider">SEGUNDOS</span>
                </div>
              </div>

              <button
                onClick={() => handleOpenDetail(PRODUCTS[0])}
                className="w-full sm:w-auto px-6 py-4 bg-[#FF5A6F] hover:bg-[#ff465d] text-white font-bold rounded-2xl transition-colors text-sm shadow-md cursor-pointer shimmer-btn shrink-0"
              >
                Crear mi detalle ahora
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 12. SECCIÓN DE NEWSLETTER */}
      <section id="newsletter" className="py-16 bg-white px-4 sm:px-6 lg:px-8 border-b border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-[#FF5A6F] to-purple-600 rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden shadow-xl text-left">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-white/5 rounded-full blur-xl pointer-events-none" />

            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="space-y-4 max-w-xl">
                <div className="inline-flex items-center space-x-2 bg-white/10 px-3.5 py-1.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider">
                  <Mail className="w-4 h-4 text-white/90" />
                  <span>Suscríbete y recibe ideas románticas y promociones exclusivas</span>
                </div>
                <h2 className="text-3xl font-extrabold tracking-tight leading-tight">
                  Inspiración para enamorar cada día
                </h2>
              </div>

              <form onSubmit={handleSubscribe} className="w-full max-w-md flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  placeholder="Tu correo electrónico"
                  className="flex-1 px-5 py-4 rounded-2xl text-slate-800 focus:outline-none focus:ring-3 focus:ring-[#FF5A6F]/30 font-medium text-sm border-none"
                  required
                />
                <button
                  type="submit"
                  className="px-8 py-4 bg-slate-900 hover:bg-slate-950 text-white font-bold rounded-2xl transition-colors text-sm shadow-md cursor-pointer hover:scale-102 transform duration-200"
                >
                  Suscribirme
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* 13. SECCIÓN DE VALOR DEL FOOTER */}
      <section className="py-12 bg-white px-4 sm:px-6 lg:px-8 border-b border-slate-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-[#FFF0F2] rounded-xl text-[#FF5A6F] shrink-0">
              <Truck className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-extrabold text-sm text-slate-800">Entrega inmediata</h3>
              <p className="text-xs text-slate-400 font-light mt-0.5">por email y WhatsApp</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-[#FFF0F2] rounded-xl text-[#FF5A6F] shrink-0">
              <Lock className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-extrabold text-sm text-slate-800">Pago 100% seguro</h3>
              <p className="text-xs text-slate-400 font-light mt-0.5">Tus datos protegidos</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-[#FFF0F2] rounded-xl text-[#FF5A6F] shrink-0">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-extrabold text-sm text-slate-800">Garantía de satisfacción</h3>
              <p className="text-xs text-slate-400 font-light mt-0.5">Si no te gusta, te devolvemos tu dinero</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-[#FFF0F2] rounded-xl text-[#FF5A6F] shrink-0">
              <Headphones className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-extrabold text-sm text-slate-800">Soporte 24/7</h3>
              <p className="text-xs text-slate-400 font-light mt-0.5">Siempre estamos para ti</p>
            </div>
          </div>
        </div>
      </section>

      {/* 14. FOOTER (PIE DE PÁGINA) */}
      <footer id="footer" className="bg-slate-950 text-slate-400 pt-16 pb-8 px-4 sm:px-6 lg:px-8 border-t border-slate-900">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 text-left pb-12 border-b border-slate-900">
          {/* Logo & Info */}
          <div className="space-y-4 lg:col-span-1">
            <div className="flex items-center space-x-2">
              <Heart className="w-6 h-6 text-[#FF5A6F] fill-[#FF5A6F]" />
              <span className="font-extrabold text-base text-white tracking-tight">
                Detalles que <span className="font-cursive text-xl text-[#FF5A6F] font-bold italic">enamoran</span>
              </span>
            </div>
            <p className="text-xs leading-relaxed font-light text-slate-400">
              Creamos detalles digitales únicos para conectar emociones y crear recuerdos inolvidables.
            </p>
            {/* Social Icons */}
            <div className="flex space-x-3 pt-2">
              {/* Instagram */}
              <button
                onClick={() => showToast('Abriendo Instagram... 📸')}
                className="w-8 h-8 rounded-full bg-gradient-to-tr from-yellow-500 via-red-500 to-purple-600 text-white flex items-center justify-center hover:scale-110 transition-transform cursor-pointer"
                aria-label="Instagram"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </button>
              {/* TikTok */}
              <button
                onClick={() => showToast('Abriendo TikTok... 🎵')}
                className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center hover:scale-110 transition-transform cursor-pointer"
                aria-label="TikTok"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.06-2.89-.52-4.06-1.42-.45-.35-.86-.77-1.21-1.24v6.78c.03 2.05-.66 4.19-2.12 5.62-1.57 1.55-3.95 2.16-6.1 1.65-2.58-.61-4.71-2.85-5.07-5.5-.47-3.41 1.83-6.77 5.25-7.22.84-.11 1.7-.06 2.53.13v4.25c-.75-.24-1.58-.29-2.33-.1-.97.23-1.84.97-2.14 1.93-.46 1.44.42 3.12 1.91 3.48 1.05.25 2.25-.13 2.82-1.07.39-.63.46-1.42.45-2.15V0h.02z" />
                </svg>
              </button>
              {/* Facebook */}
              <button
                onClick={() => showToast('Abriendo Facebook... 👥')}
                className="w-8 h-8 rounded-full bg-[#1877F2] text-white flex items-center justify-center hover:scale-110 transition-transform cursor-pointer"
                aria-label="Facebook"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </button>
              {/* YouTube */}
              <button
                onClick={() => showToast('Abriendo YouTube... 📺')}
                className="w-8 h-8 rounded-full bg-[#FF0000] text-white flex items-center justify-center hover:scale-110 transition-transform cursor-pointer"
                aria-label="YouTube"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23.498 6.163a3.003 3.003 0 00-2.11-2.11C19.518 3.545 12 3.545 12 3.545s-7.519 0-9.387.507a3.003 3.003 0 00-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 002.11 2.11c1.868.507 9.387.507 9.387.507s7.518 0 9.387-.507a3.003 3.003 0 002.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </button>
              {/* WhatsApp */}
              <button
                onClick={() => showToast('Abriendo WhatsApp... 💬')}
                className="w-8 h-8 rounded-full bg-[#25D366] text-white flex items-center justify-center hover:scale-110 transition-transform cursor-pointer"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4.5 h-4.5" />
              </button>
            </div>
          </div>

          {/* Col 2 - Productos */}
          <div className="space-y-4">
            <h3 className="text-white font-extrabold text-sm uppercase tracking-wider">PRODUCTOS</h3>
            <ul className="space-y-2.5 text-xs font-medium">
              <li><button onClick={() => { setActiveTab('Videos'); showToast('Filtro: Videos'); }} className="hover:text-white transition-colors">Videos románticos</button></li>
              <li><button onClick={() => { setActiveTab('Cartas'); showToast('Filtro: Cartas'); }} className="hover:text-white transition-colors">Cartas de amor</button></li>
              <li><button onClick={() => { setActiveTab('Música'); showToast('Filtro: Música'); }} className="hover:text-white transition-colors">Canciones personalizadas</button></li>
              <li><button onClick={() => { setActiveTab('Álbumes'); showToast('Filtro: Álbumes'); }} className="hover:text-white transition-colors">Álbumes digitales</button></li>
              <li><button onClick={() => { setActiveTab('Más vendidos'); showToast('Filtro: Todos'); }} className="hover:text-white font-bold text-[#FF5A6F]">Todos los productos</button></li>
            </ul>
          </div>

          {/* Col 3 - Información */}
          <div className="space-y-4">
            <h3 className="text-white font-extrabold text-sm uppercase tracking-wider">INFORMACIÓN</h3>
            <ul className="space-y-2.5 text-xs font-medium">
              <li><button onClick={() => showToast('Abriendo Cómo funciona')} className="hover:text-white transition-colors">Cómo funciona</button></li>
              <li><button onClick={() => showToast('Abriendo Preguntas frecuentes')} className="hover:text-white transition-colors">Preguntas frecuentes</button></li>
              <li><button onClick={() => showToast('Abriendo Términos y condiciones')} className="hover:text-white transition-colors">Términos y condiciones</button></li>
              <li><button onClick={() => showToast('Abriendo Política de privacidad')} className="hover:text-white transition-colors">Política de privacidad</button></li>
              <li><button onClick={() => showToast('Abriendo Política de reembolsos')} className="hover:text-white transition-colors">Política de reembolsos</button></li>
            </ul>
          </div>

          {/* Col 4 - Ayuda */}
          <div className="space-y-4">
            <h3 className="text-white font-extrabold text-sm uppercase tracking-wider">AYUDA</h3>
            <ul className="space-y-2.5 text-xs font-medium">
              <li><button onClick={() => showToast('Abriendo Centro de ayuda')} className="hover:text-white transition-colors">Centro de ayuda</button></li>
              <li><button onClick={() => showToast('Abriendo Contacto')} className="hover:text-white transition-colors">Contacto</button></li>
              <li><button onClick={() => showToast('Abriendo Métodos de pago')} className="hover:text-white transition-colors">Métodos de pago</button></li>
              <li><button onClick={() => showToast('Abriendo Envíos y entregas')} className="hover:text-white transition-colors">Envíos y entregas</button></li>
            </ul>
          </div>

          {/* Col 5 - Contacto */}
          <div className="space-y-4">
            <h3 className="text-white font-extrabold text-sm uppercase tracking-wider">CONTACTO</h3>
            <ul className="space-y-3.5 text-xs font-medium">
              <li className="flex items-center space-x-2">
                <MessageCircle className="w-4.5 h-4.5 text-[#FF5A6F]" />
                <a href="https://wa.me/51900123456" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  +51 900 123 456
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-4.5 h-4.5 text-[#FF5A6F]" />
                <a href="mailto:hola@detallesqueenamoran.com" className="hover:text-white transition-colors">
                  hola@detallesqueenamoran.com
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Globe className="w-4.5 h-4.5 text-[#FF5A6F]" />
                <span>Lima, Perú</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright & Pulse */}
        <div className="max-w-7xl mx-auto pt-8 flex flex-col md:flex-row justify-between items-center text-xs space-y-4 md:space-y-0">
          <span>
            © 2024 Detalles que Enamoran. Todos los derechos reservados.
          </span>
          <span className="flex items-center space-x-1 ml-auto">
            <span>Hecho con</span>
            <Heart className="w-4.5 h-4.5 text-[#FF5A6F] fill-[#FF5A6F] animate-heartbeat" />
            <span>para enamorar</span>
          </span>
        </div>
      </footer>

      {/* 3D Video Player Preview Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/75 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl w-full max-w-2xl overflow-hidden shadow-2xl relative">
            {/* Modal Header */}
            <div className="flex justify-between items-center p-5 border-b border-slate-800">
              <span className="font-extrabold text-sm text-white uppercase tracking-wider flex items-center space-x-2">
                <Sparkles className="w-4.5 h-4.5 text-[#FF5A6F]" />
                <span>Vista Previa del Detalle Digital</span>
              </span>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-1 rounded-lg bg-slate-800 hover:bg-[#FF5A6F] text-slate-400 hover:text-white transition-all"
                aria-label="Cerrar modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Video representation */}
            <div className="relative aspect-video bg-black flex items-center justify-center">
              <img
                src="https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&w=800&q=80"
                alt="Fondo de la dedicatoria en video"
                className={`w-full h-full object-cover transition-opacity duration-300 ${isPlaying ? 'opacity-80' : 'opacity-40'}`}
              />

              <div className="absolute inset-0 flex flex-col justify-between p-6 bg-gradient-to-t from-black/60 to-transparent">
                <div className="flex items-start justify-between">
                  <div className="bg-slate-950/60 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/10 text-left">
                    <span className="text-[10px] text-[#FF5A6F] font-extrabold uppercase leading-none block">Para</span>
                    <span className="text-white text-xs font-bold leading-none mt-0.5 block">Mi Persona Favorita</span>
                  </div>
                  <div className="bg-[#FF5A6F] text-white font-extrabold text-[10px] px-2.5 py-1.5 rounded-lg shadow-sm">
                    {isPlaying ? 'REPRODUCIENDO PREVIEW' : 'PAUSADO'}
                  </div>
                </div>

                {/* Love Greeting */}
                <div className="text-center space-y-2 my-auto">
                  <h3 className="font-cursive text-white text-4xl sm:text-5xl drop-shadow-lg font-bold">
                    ¡Feliz Aniversario, Amor!
                  </h3>
                  <p className="text-white/90 text-sm font-light drop-shadow-md max-w-sm mx-auto">
                    "Gracias por hacer de cada instante el mejor recuerdo de mi vida."
                  </p>
                </div>

                {/* Media Controller bar */}
                <div className="bg-slate-950/80 backdrop-blur-md border border-white/10 rounded-2xl p-3 space-y-2">
                  <div className="flex items-center justify-between text-[10px] text-white/70 font-semibold">
                    <span>0:45</span>
                    <div className="flex-1 mx-3 h-1 bg-white/20 rounded-full overflow-hidden">
                      <div className="w-1/3 h-full bg-[#FF5A6F]" />
                    </div>
                    <span>2:15</span>
                  </div>

                  <div className="flex justify-center items-center space-x-4">
                    <button className="text-white hover:text-[#FF5A6F] transition-colors" onClick={() => showToast('Retroceder')}>
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      className="w-8 h-8 rounded-full bg-[#FF5A6F] flex items-center justify-center text-white hover:bg-[#ff465d] transition-colors cursor-pointer"
                      onClick={() => {
                        setIsPlaying(!isPlaying)
                        showToast(isPlaying ? 'Video pausado' : 'Reproduciendo video')
                      }}
                    >
                      {isPlaying ? <Pause className="w-3.5 h-3.5 fill-white" /> : <Play className="w-3.5 h-3.5 fill-white ml-0.5" />}
                    </button>
                    <button className="text-white hover:text-[#FF5A6F] transition-colors" onClick={() => showToast('Avanzar')}>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Actions */}
            <div className="p-5 bg-slate-900 border-t border-slate-800 flex justify-end space-x-3">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-5 py-2.5 rounded-xl border border-slate-700 hover:border-slate-500 text-slate-400 hover:text-white font-bold text-sm transition-colors"
              >
                Volver
              </button>
              <button
                onClick={() => {
                  handleOpenDetail(PRODUCTS[0])
                  setIsModalOpen(false)
                }}
                className="px-5 py-2.5 bg-[#FF5A6F] hover:bg-[#ff465d] text-white rounded-xl font-bold text-sm transition-colors flex items-center"
              >
                <span>Personalizar este detalle</span>
                <Heart className="w-4 h-4 ml-2 fill-white" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Customizable Product Details Modal */}
      {customizingProduct && (
        <div className="fixed inset-0 z-50 bg-slate-950/75 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-white border border-slate-100 rounded-3xl w-full max-w-lg overflow-hidden shadow-2xl relative text-left animate-fade-in-up">
            {/* Header */}
            <div className="flex justify-between items-center p-5 border-b border-slate-100">
              <span className="font-extrabold text-sm text-slate-800 uppercase tracking-wider flex items-center">
                <PenTool className="w-4.5 h-4.5 text-[#FF5A6F] mr-2" />
                Personaliza tu Dedicatoria
              </span>
              <button
                onClick={() => setCustomizingProduct(null)}
                className="p-1 rounded-lg bg-slate-50 hover:bg-rose-50 text-slate-400 hover:text-[#FF5A6F] transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleAddCustomizedToCart} className="p-6 space-y-4">
              <div className="flex items-center space-x-4 border-b border-slate-100 pb-4 mb-4">
                <img src={customizingProduct.image} alt={customizingProduct.title} className="w-16 h-16 object-cover rounded-xl shadow-xs" />
                <div>
                  <h3 className="font-bold text-slate-800 text-base leading-snug">{customizingProduct.title}</h3>
                  <p className="text-xs text-[#FF5A6F] font-extrabold mt-1">S/ {customizingProduct.price.toFixed(2)}</p>
                </div>
              </div>

              {/* Sender Name */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5">Tu Nombre (Remitente)</label>
                <input
                  type="text"
                  value={formSender}
                  onChange={(e) => setFormSender(e.target.value)}
                  placeholder="Ej. Carlos"
                  className="w-full px-4 py-2.5 border border-slate-200 rounded-xl focus:outline-none focus:border-[#FF5A6F] text-sm font-medium"
                  required
                />
              </div>

              {/* Receiver Name */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5">Nombre de tu Pareja (Destinatario)</label>
                <input
                  type="text"
                  value={formReceiver}
                  onChange={(e) => setFormReceiver(e.target.value)}
                  placeholder="Ej. Sofía"
                  className="w-full px-4 py-2.5 border border-slate-200 rounded-xl focus:outline-none focus:border-[#FF5A6F] text-sm font-medium"
                  required
                />
              </div>

              {/* Dedicated Message */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5">Dedicatoria / Mensaje de amor</label>
                <textarea
                  value={formMessage}
                  onChange={(e) => setFormMessage(e.target.value)}
                  placeholder="Escribe el mensaje de dedicatoria..."
                  rows="3"
                  className="w-full px-4 py-2.5 border border-slate-200 rounded-xl focus:outline-none focus:border-[#FF5A6F] text-sm font-medium resize-none"
                  required
                ></textarea>
              </div>

              {/* Background Music Style */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5">Música de fondo IA</label>
                <select
                  value={formMusic}
                  onChange={(e) => setFormMusic(e.target.value)}
                  className="w-full px-4 py-2.5 border border-slate-200 rounded-xl focus:outline-none focus:border-[#FF5A6F] text-sm font-medium bg-white"
                >
                  <option value="Romántica Acústica">Acústica & Guitarra Romántica</option>
                  <option value="Piano Clásico">Piano Suave & Melódico</option>
                  <option value="Balada Pop">Balada Pop Moderna</option>
                  <option value="Violín Instrumental">Violín Clásico</option>
                </select>
              </div>

              {/* Submit Buttons */}
              <div className="pt-4 flex space-x-3">
                <button
                  type="button"
                  onClick={() => setCustomizingProduct(null)}
                  className="w-1/3 py-3 border border-slate-200 hover:border-slate-300 text-slate-600 rounded-xl text-sm font-bold transition-all text-center"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="w-2/3 py-3 bg-[#FF5A6F] hover:bg-[#ff465d] text-white rounded-xl text-sm font-bold transition-all shadow-md text-center cursor-pointer"
                >
                  Añadir al carrito ♡
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Shopping Cart Drawer Sidebar */}
      {cartOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          <div className="absolute inset-0 bg-slate-950/40 backdrop-blur-xs transition-opacity" onClick={() => setCartOpen(false)} />

          <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
            <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col h-full border-l border-slate-100">
              {/* Drawer Header */}
              <div className="px-6 py-5 border-b border-slate-100 flex items-center justify-between">
                <span className="font-extrabold text-sm text-slate-800 uppercase tracking-wider flex items-center">
                  <ShoppingCart className="w-5 h-5 text-[#FF5A6F] mr-2" />
                  Carrito de Compras ({cartCount})
                </span>
                <button
                  onClick={() => setCartOpen(false)}
                  className="p-1 rounded-lg bg-slate-50 hover:bg-[#FFF0F2] text-slate-400 hover:text-[#FF5A6F] transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Items List */}
              <div className="flex-1 py-4 px-6 overflow-y-auto no-scrollbar space-y-4 bg-slate-50/50">
                {cartItems.length === 0 ? (
                  <div className="text-center py-20 space-y-4">
                    <div className="w-16 h-16 bg-[#FFF0F2] rounded-full flex items-center justify-center mx-auto text-[#FF5A6F]">
                      <ShoppingCart className="w-8 h-8" />
                    </div>
                    <p className="text-sm font-bold text-slate-800">Tu carrito está vacío</p>
                    <p className="text-xs text-slate-400 max-w-[200px] mx-auto font-light leading-relaxed">
                      Explora el catálogo y añade dedicatorias personalizadas para tu pareja.
                    </p>
                    <button
                      onClick={() => {
                        setCartOpen(false)
                        document.getElementById('catalogo')?.scrollIntoView({ behavior: 'smooth' })
                      }}
                      className="px-5 py-2.5 bg-[#FF5A6F] hover:bg-[#ff465d] text-white rounded-xl text-xs font-bold transition-all"
                    >
                      Ver Catálogo
                    </button>
                  </div>
                ) : (
                  cartItems.map((item) => (
                    <div
                      key={item.id}
                      className="bg-white border border-slate-100 p-4 rounded-2xl shadow-xs flex items-start space-x-3.5 relative group"
                    >
                      <img src={item.image} alt={item.title} className="w-16 h-16 object-cover rounded-xl" />

                      <div className="flex-1 text-left">
                        <h4 className="font-bold text-xs text-slate-800 pr-4 leading-snug line-clamp-1">{item.title}</h4>
                        <div className="text-[10px] text-slate-400 font-light mt-1.5 space-y-0.5 leading-none">
                          <p><span className="font-semibold text-slate-600">De:</span> {item.customization.sender}</p>
                          <p><span className="font-semibold text-slate-600">Para:</span> {item.customization.receiver}</p>
                          <p className="italic line-clamp-1">"{item.customization.message}"</p>
                          <p><span className="font-semibold text-[#FF5A6F]">Música:</span> {item.customization.music}</p>
                        </div>

                        {/* Adjust quantities */}
                        <div className="flex items-center space-x-3.5 mt-3">
                          <div className="flex items-center border border-slate-200 rounded-lg overflow-hidden bg-white">
                            <button
                              onClick={() => handleUpdateQuantity(item.id, -1)}
                              className="px-2 py-0.5 hover:bg-slate-50 text-slate-500 font-extrabold text-xs"
                            >
                              -
                            </button>
                            <span className="px-2.5 py-0.5 text-xs font-extrabold text-slate-800 bg-slate-50/50">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => handleUpdateQuantity(item.id, 1)}
                              className="px-2 py-0.5 hover:bg-slate-50 text-slate-500 font-extrabold text-xs"
                            >
                              +
                            </button>
                          </div>

                          <span className="text-xs text-[#FF5A6F] font-extrabold">
                            S/ {(item.price * item.quantity).toFixed(2)}
                          </span>
                        </div>
                      </div>

                      {/* Remove Button */}
                      <button
                        onClick={() => handleRemoveFromCart(item.id)}
                        className="absolute top-3 right-3 text-slate-350 hover:text-red-500 p-1 rounded-lg transition-colors"
                        aria-label="Eliminar producto"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))
                )}
              </div>

              {/* Checkout Summary */}
              {cartItems.length > 0 && (
                <div className="p-6 border-t border-slate-100 bg-white space-y-4">
                  <div className="flex justify-between items-center text-sm">
                    <span className="font-bold text-slate-500">Subtotal</span>
                    <span className="font-extrabold text-slate-800">S/ {totalAmount}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm pb-2 border-b border-slate-100">
                    <span className="font-bold text-slate-500">Envío Digital</span>
                    <span className="font-extrabold text-emerald-500 uppercase text-xs">Gratis / Inmediato</span>
                  </div>
                  <div className="flex justify-between items-center text-base pt-2">
                    <span className="font-extrabold text-slate-800">Total</span>
                    <span className="text-2xl font-black text-[#FF5A6F]">S/ {totalAmount}</span>
                  </div>

                  <div className="space-y-2 pt-2">
                    <button
                      onClick={handleCheckoutWhatsApp}
                      className="w-full py-4 bg-emerald-500 hover:bg-emerald-600 text-white rounded-2xl font-bold text-sm transition-all shadow-md flex items-center justify-center space-x-2 cursor-pointer"
                    >
                      <MessageCircle className="w-5 h-5 fill-white" />
                      <span>Comprar por WhatsApp</span>
                    </button>

                    <button
                      onClick={() => showToast('Pasarela de pagos con tarjeta en desarrollo... 💳')}
                      className="w-full py-3.5 bg-slate-900 hover:bg-slate-950 text-white rounded-2xl font-bold text-xs transition-all flex items-center justify-center space-x-2 cursor-pointer"
                    >
                      <Lock className="w-4 h-4 text-slate-400" />
                      <span>Pago Seguro con Tarjeta</span>
                    </button>
                  </div>

                  <p className="text-[10px] text-slate-400 font-light text-center leading-normal pt-1">
                    *Al comprar por WhatsApp se coordinará el abono vía Yape, Plin o transferencia bancaria y se te enviará el enlace de descarga de forma inmediata.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
      {/* HTML Preview Modal */}
      {previewImage && (
        <div
          className="fixed inset-0 z-[60] bg-black/85 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setPreviewImage(null)}
        >
          <div
            className="relative w-full max-w-3xl flex flex-col"
            onClick={e => e.stopPropagation()}
          >
            {/* Header bar */}
            <div className="flex items-center justify-between bg-slate-900 px-4 py-2.5 rounded-t-2xl">
              <div className="flex items-center gap-2">
                <Eye className="w-4 h-4 text-[#FF5A6F]" />
                <span className="text-white text-sm font-bold">Vista previa del detalle</span>
              </div>
              <button
                onClick={() => setPreviewImage(null)}
                className="text-slate-400 hover:text-white transition-colors flex items-center gap-1 text-xs font-bold"
              >
                <X className="w-4 h-4" /> Cerrar
              </button>
            </div>
            {/* iframe */}
            <iframe
              src={previewImage}
              title="Vista previa"
              className="w-full rounded-b-2xl border-0 shadow-2xl"
              style={{ height: '75vh' }}
            />
          </div>
        </div>
      )}
    </div>
  )
}
