import React, { useState, useRef, useMemo } from 'react'
import {
  Gift,
  Zap,
  Headphones,
  Heart,
  Search,
  User,
  ShoppingCart,
  ChevronLeft,
  ChevronRight,
  Star,
  Clock,
  Sliders,
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
  HeartHandshake,
  Calendar,
  Cake,
  Sun,
  Moon,
  ChevronDown,
  Trash2,
  CheckCircle2,
  Lock
} from 'lucide-react'

// Mock Data
const OCCASIONS = [
  { id: 1, name: 'San Valentín', icon: Heart, desc: 'Amor puro' },
  { id: 2, name: 'Aniversario', icon: Calendar, desc: 'Fechas clave' },
  { id: 3, name: 'Cumpleaños', icon: Cake, desc: 'Celebraciones' },
  { id: 4, name: 'Para pedir perdón', icon: HeartHandshake, desc: 'Reconciliación' },
  { id: 5, name: 'Buenos días', icon: Sun, desc: 'Luz y amor' },
  { id: 6, name: 'Buenas noches', icon: Moon, desc: 'Dulces sueños' },
  { id: 7, name: 'Me haces falta', icon: MessageCircle, desc: 'Distancia' },
  { id: 8, name: 'Sin ocasión', icon: Gift, desc: 'Sorpresas' },
]

const PRODUCTS = [
  {
    id: 1,
    category: 'Videos',
    title: 'Video romántico personalizado',
    rating: 5,
    reviews: 1248,
    price: 29.90,
    originalPrice: 45.00,
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=500&q=80',
    alt: 'Mockup 3D de un reproductor de video en un monitor mostrando una dedicatoria romántica con corazones generada por IA',
    badge: 'Más vendido',
    badgeColor: 'bg-amber-500',
  },
  {
    id: 2,
    category: 'Cartas',
    title: 'Carta digital personalizada',
    rating: 5,
    reviews: 892,
    price: 19.90,
    originalPrice: 29.00,
    image: 'https://images.unsplash.com/photo-1512418490979-92798cec1380?auto=format&fit=crop&w=500&q=80',
    alt: 'Mockup 3D de una carta de amor digital interactiva abriéndose en un smartphone con corazones flotantes generada por IA',
    badge: 'Nuevo',
    badgeColor: 'bg-rose-500',
  },
  {
    id: 3,
    category: 'Música',
    title: 'Canción dedicada con nombre',
    rating: 5,
    reviews: 736,
    price: 24.90,
    originalPrice: 39.00,
    image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=500&q=80',
    alt: 'Mockup 3D de una portada de álbum musical en Spotify y Apple Music con fotos personalizadas de pareja generada por IA',
    badge: 'Más vendido',
    badgeColor: 'bg-amber-500',
  },
  {
    id: 4,
    category: 'Cartas',
    title: 'Álbum de fotos interactivo',
    rating: 5,
    reviews: 1105,
    price: 34.90,
    originalPrice: 49.00,
    image: 'https://images.unsplash.com/photo-1526244434298-88fc7067ec8e?auto=format&fit=crop&w=500&q=80',
    alt: 'Mockup 3D de una tablet mostrando una galería interactiva y animada de fotos de pareja generada por IA',
    badge: 'Nuevo',
    badgeColor: 'bg-rose-500',
  },
  {
    id: 5,
    category: 'Promociones',
    title: 'Cupón de amor personalizado',
    rating: 5,
    reviews: 632,
    price: 14.90,
    originalPrice: 25.00,
    image: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&w=500&q=80',
    alt: 'Mockup 3D de una tiquetera interactiva de cupones de amor canjeables en dispositivo móvil generada por IA',
    badge: 'Más vendido',
    badgeColor: 'bg-amber-500',
  },
  {
    id: 6,
    category: 'Videos',
    title: 'Video recap de momentos',
    rating: 5,
    reviews: 521,
    price: 39.90,
    originalPrice: 59.00,
    image: 'https://images.unsplash.com/photo-1518895949257-7621c3c786d7?auto=format&fit=crop&w=500&q=80',
    alt: 'Mockup 3D de una pantalla led mostrando un video recapitulativo de fotos de aniversario generada por IA',
    badge: 'Nuevo',
    badgeColor: 'bg-rose-500',
  },
]

const PACKS = [
  {
    id: 101,
    title: 'Pack Te Amo',
    items: 'Video + Carta + Canción',
    discount: '-15%',
    price: 59.90,
    wasPrice: 69.90,
    image: 'https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&w=500&q=80',
    alt: 'Mockup digital en tablet y móvil mostrando el Pack Te Amo con video, canción de IA y carta digital romántica'
  },
  {
    id: 102,
    title: 'Pack Aniversario',
    items: 'Álbum + Video + Cupón',
    discount: '-20%',
    price: 79.90,
    wasPrice: 99.00,
    image: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=500&q=80',
    alt: 'Mockup digital mostrando el Pack Aniversario con un álbum de fotos animado en laptop y cupones en móvil'
  },
  {
    id: 103,
    title: 'Pack Romántico',
    items: 'Carta + Canción + Cupón',
    discount: '-10%',
    price: 44.90,
    wasPrice: 49.90,
    image: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&w=500&q=80',
    alt: 'Mockup digital mostrando el Pack Romántico con carta flotante de amor y portada de reproductor musical en móvil'
  },
  {
    id: 104,
    title: 'Pack Completo',
    items: 'Todo en uno',
    discount: '-25%',
    price: 129.90,
    wasPrice: 169.90,
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=500&q=80',
    alt: 'Mockup digital consolidando todos los productos: videos, cartas animadas, cupones interactivos y música de IA'
  }
]

const TESTIMONIALS = [
  {
    id: 1,
    name: 'Carlos M.',
    location: 'Lima, Perú',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&h=150&q=80',
    text: '"Le envié un video personalizado y llenó de emoción. ¡Fue el mejor detalle que pude darle! 100% recomendado."',
    rating: 5
  },
  {
    id: 2,
    name: 'Andrea R.',
    location: 'Arequipa, Perú',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80',
    text: '"La carta digital quedó hermosa, tal como la imaginé. Entrega súper rápida y atención excelente."',
    rating: 5
  },
  {
    id: 3,
    name: 'Luis P.',
    location: 'Trujillo, Perú',
    avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=150&h=150&q=80',
    text: '"Compré el pack aniversario y fue perfecto. A mi pareja le encantó cada detalle."',
    rating: 5
  }
]

export default function App() {
  // Main states
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      title: 'Video romántico personalizado',
      price: 29.90,
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=150&h=150&q=80',
      customization: { sender: 'Juan', receiver: 'Clara', message: 'Gracias por ser mi luz cada día.', music: 'Romántica Acústica' }
    },
    {
      id: 2,
      title: 'Carta digital personalizada',
      price: 19.90,
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1512418490979-92798cec1380?auto=format&fit=crop&w=150&h=150&q=80',
      customization: { sender: 'Sofía', receiver: 'Mateo', message: 'Eres la casualidad más hermosa.', music: 'Piano Clásico' }
    }
  ])
  const [activeTab, setActiveTab] = useState('Más vendidos')
  const [activeStep, setActiveStep] = useState(1)
  const [toastMessage, setToastMessage] = useState('')
  const [emailInput, setEmailInput] = useState('')
  
  // Interactive UI modales & triggers
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isPlaying, setIsPlaying] = useState(true)
  const [testimonialIndex, setTestimonialIndex] = useState(0)
  const [searchQuery, setSearchQuery] = useState('')
  const [searchVisible, setSearchVisible] = useState(false)
  const [cartOpen, setCartOpen] = useState(false)
  
  // Customization modal state
  const [customizingProduct, setCustomizingProduct] = useState(null)
  const [formSender, setFormSender] = useState('')
  const [formReceiver, setFormReceiver] = useState('')
  const [formMessage, setFormMessage] = useState('')
  const [formMusic, setFormMusic] = useState('Romántica Acústica')
  
  // Favorite state
  const [favorites, setFavorites] = useState([1, 3])
  const [favoritesOpen, setFavoritesOpen] = useState(false)
  const [userDropdownOpen, setUserDropdownOpen] = useState(false)
  
  // Filter states
  const [catalogFilter, setCatalogFilter] = useState('')

  const occasionsRef = useRef(null)

  // Derived properties
  const cartCount = useMemo(() => {
    return cartItems.reduce((acc, curr) => acc + curr.quantity, 0)
  }, [cartItems])

  const totalAmount = useMemo(() => {
    return cartItems.reduce((acc, curr) => acc + (curr.price * curr.quantity), 0).toFixed(2)
  }, [cartItems])

  const filteredProducts = useMemo(() => {
    let prods = PRODUCTS

    // If an occasion filter is active
    if (catalogFilter) {
      // Just simulate occasion filtering for visual updates
      prods = PRODUCTS.filter((_, idx) => (idx + catalogFilter.length) % 2 === 0)
    }

    // Filter by tab
    if (activeTab === 'Más vendidos') {
      return prods.filter(p => p.badge === 'Más vendido')
    } else if (activeTab === 'Nuevos') {
      return prods.filter(p => p.badge === 'Nuevo')
    } else if (activeTab === 'Videos') {
      return prods.filter(p => p.category === 'Videos')
    } else if (activeTab === 'Cartas') {
      return prods.filter(p => p.category === 'Cartas')
    } else if (activeTab === 'Música') {
      return prods.filter(p => p.category === 'Música')
    } else if (activeTab === 'Promociones') {
      return prods.filter(p => p.price < 25.0)
    }
    return prods
  }, [activeTab, catalogFilter])

  // Callbacks
  const showToast = (message) => {
    setToastMessage(message)
    setTimeout(() => setToastMessage(''), 3000)
  }

  // Toggle favorite
  const handleToggleFavorite = (id, title) => {
    if (favorites.includes(id)) {
      setFavorites(prev => prev.filter(item => item !== id))
      showToast(`Quitado de favoritos: ${title} ♡`)
    } else {
      setFavorites(prev => [...prev, id])
      showToast(`Agregado a favoritos: ${title} ❤️`)
    }
  }

  // Open detail modal for customization
  const handleOpenDetail = (product) => {
    setCustomizingProduct(product)
    setFormSender('')
    setFormReceiver('')
    setFormMessage('')
    setFormMusic('Romántica Acústica')
  }

  // Add customized item to cart
  const handleAddCustomizedToCart = (e) => {
    e.preventDefault()
    if (!formSender || !formReceiver || !formMessage) {
      showToast('Por favor completa todos los campos del formulario. ✍️')
      return
    }

    const newItem = {
      id: Date.now(), // unique timestamp id
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
    setCartOpen(true) // Open shopping cart sidebar to show the new item!
    showToast('¡Detalle personalizado añadido al carrito! 🛒❤️')
  }

  // Add bundle pack directly to cart
  const handleAddPackToCart = (pack) => {
    const newItem = {
      id: Date.now(),
      title: pack.title,
      price: pack.price,
      quantity: 1,
      image: pack.image,
      customization: {
        sender: 'Personalizable',
        receiver: 'Persona Especial',
        message: `Combo Digital: ${pack.items}`,
        music: 'Múltiple'
      }
    }
    setCartItems(prev => [...prev, newItem])
    setCartOpen(true)
    showToast(`¡${pack.title} añadido al carrito! 🎁`)
  }

  // Remove item from cart
  const handleRemoveFromCart = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id))
    showToast('Producto eliminado del carrito.')
  }

  // Adjust item quantity
  const handleUpdateQuantity = (id, change) => {
    setCartItems(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = item.quantity + change
        return { ...item, quantity: newQty > 0 ? newQty : 1 }
      }
      return item
    }))
  }

  // Handle Checkout via WhatsApp
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
    showToast('Redirigiendo a WhatsApp para finalizar tu pedido... 📲')
  }

  // Form handle for subscribe
  const handleSubscribe = (e) => {
    e.preventDefault()
    if (emailInput.trim()) {
      showToast(`¡Suscrito con éxito! Enviamos tu cupón a: ${emailInput} 💌`)
      setEmailInput('')
    }
  }

  const handleScrollOccasions = (direction) => {
    if (occasionsRef.current) {
      const scrollAmount = direction === 'left' ? -250 : 250
      occasionsRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
    }
  }

  const handleNextTestimonial = () => {
    setTestimonialIndex((prev) => (prev + 1) % TESTIMONIALS.length)
  }

  const handlePrevTestimonial = () => {
    setTestimonialIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)
  }

  return (
    <div className="min-h-screen flex flex-col font-sans select-none antialiased bg-white">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-slate-900 text-white px-5 py-3 rounded-xl shadow-2xl flex items-center space-x-3 border border-rose-500 animate-bounce">
          <Heart className="w-5 h-5 text-rose-500 fill-rose-500" />
          <span className="font-semibold text-sm">{toastMessage}</span>
        </div>
      )}

      {/* 1. TOP BAR */}
      <div className="bg-rose-600 text-white text-xs py-2.5 px-4 font-medium tracking-wide">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-1.5 md:space-y-0">
          <div className="flex items-center space-x-2">
            <Gift className="w-4.5 h-4.5 text-rose-200" />
            <span>Regalos digitales que llegan directo al corazón</span>
          </div>
          <div className="flex items-center space-x-2">
            <Zap className="w-4.5 h-4.5 text-rose-200 fill-rose-200" />
            <span>Envío inmediato por email, WhatsApp o descarga</span>
          </div>
          <div className="flex items-center space-x-2">
            <Headphones className="w-4.5 h-4.5 text-rose-200" />
            <span>Soporte 24/7</span>
          </div>
        </div>
      </div>

      {/* 2. HEADER / NAVBAR */}
      <header className="sticky top-0 bg-white shadow-sm z-40">
        <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <div
            onClick={() => {
              setCatalogFilter('')
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
            className="flex items-center space-x-2.5 group cursor-pointer"
          >
            <div className="p-1.5 bg-rose-50 rounded-lg group-hover:scale-110 transition-transform">
              <Heart className="w-8 h-8 text-rose-500 fill-rose-500" />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-lg text-slate-900 leading-none tracking-tight">
                Detalles que <span className="font-cursive text-2xl text-rose-500 font-bold italic">enamoran</span>
              </span>
              <span className="text-[10px] text-rose-500 font-extrabold tracking-[0.25em] uppercase leading-none mt-1">
                DIGITALES
              </span>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center space-x-7 text-[15px] font-semibold text-slate-600">
            <button
              onClick={() => {
                setCatalogFilter('')
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }}
              className={`pb-1 transition-all ${!catalogFilter ? 'text-rose-500 border-b-2 border-rose-500' : 'hover:text-rose-500'}`}
            >
              Inicio
            </button>
            <div className="relative group cursor-pointer flex items-center space-x-1 hover:text-rose-500 transition-colors">
              <span>Catálogo</span>
              <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
              {/* Dropdown */}
              <div className="absolute top-full left-0 mt-3.5 bg-white border border-slate-100 rounded-xl shadow-xl py-2.5 w-48 hidden group-hover:block transition-all">
                {['Videos', 'Cartas', 'Música', 'Promociones'].map(cat => (
                  <button
                    key={cat}
                    onClick={() => {
                      setActiveTab(cat)
                      const el = document.getElementById('mas-vendidos')
                      if (el) el.scrollIntoView({ behavior: 'smooth' })
                    }}
                    className="w-full text-left px-4 py-2 hover:bg-rose-50 hover:text-rose-500 font-medium text-slate-700 transition-colors"
                  >
                    {cat === 'Música' ? 'Canciones IA' : cat === 'Videos' ? 'Videos Románticos' : cat === 'Cartas' ? 'Cartas Animadas' : cat}
                  </button>
                ))}
              </div>
            </div>
            <button
              onClick={() => {
                const el = document.getElementById('pasos')
                if (el) el.scrollIntoView({ behavior: 'smooth' })
              }}
              className="hover:text-rose-500 transition-colors"
            >
              Personaliza
            </button>
            <button
              onClick={() => {
                const el = document.getElementById('pasos')
                if (el) el.scrollIntoView({ behavior: 'smooth' })
              }}
              className="hover:text-rose-500 transition-colors"
            >
              Cómo funciona
            </button>
            <button
              onClick={() => {
                const el = document.getElementById('testimonios')
                if (el) el.scrollIntoView({ behavior: 'smooth' })
              }}
              className="hover:text-rose-500 transition-colors"
            >
              Nosotros
            </button>
            <button
              onClick={() => {
                const el = document.getElementById('newsletter')
                if (el) el.scrollIntoView({ behavior: 'smooth' })
              }}
              className="hover:text-rose-500 transition-colors"
            >
              Blog
            </button>
            <button
              onClick={() => {
                const el = document.getElementById('footer')
                if (el) el.scrollIntoView({ behavior: 'smooth' })
              }}
              className="hover:text-rose-500 transition-colors"
            >
              Contacto
            </button>
          </nav>

          {/* Icon Actions */}
          <div className="flex items-center space-x-2.5 relative">
            
            {/* Search Input Toggle */}
            <div className="flex items-center">
              {searchVisible && (
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Buscar regalo..."
                  className="px-3 py-1 text-xs border border-slate-200 rounded-lg mr-2 focus:outline-none focus:border-rose-500 w-32 sm:w-48 transition-all"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && searchQuery.trim()) {
                      showToast(`Buscando: "${searchQuery}"... 🔍`)
                      setSearchQuery('')
                      setSearchVisible(false)
                    }
                  }}
                />
              )}
              <button
                onClick={() => setSearchVisible(!searchVisible)}
                className={`p-2 rounded-full transition-colors ${searchVisible ? 'bg-rose-50 text-rose-500' : 'hover:bg-slate-50 text-slate-600 hover:text-rose-500'}`}
                aria-label="Buscar"
              >
                <Search className="w-5 h-5" />
              </button>
            </div>

            {/* Favorites Icon */}
            <button
              onClick={() => setFavoritesOpen(!favoritesOpen)}
              className={`p-2 rounded-full transition-colors relative ${favoritesOpen ? 'bg-rose-50 text-rose-500' : 'hover:bg-slate-50 text-slate-600 hover:text-rose-500'}`}
              aria-label="Favoritos"
            >
              <Heart className={`w-5 h-5 ${favorites.length > 0 ? 'text-rose-500 fill-rose-500 animate-pulse' : ''}`} />
              {favorites.length > 0 && (
                <span className="absolute top-0 right-0 bg-rose-500 text-white text-[8px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {favorites.length}
                </span>
              )}
            </button>

            {/* Profile Dropdown Toggle */}
            <div className="relative">
              <button
                onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                className={`p-2 rounded-full transition-colors ${userDropdownOpen ? 'bg-rose-50 text-rose-500' : 'hover:bg-slate-50 text-slate-600 hover:text-rose-500'}`}
                aria-label="Perfil"
              >
                <User className="w-5 h-5" />
              </button>
              {userDropdownOpen && (
                <div className="absolute right-0 mt-2 bg-white border border-slate-100 rounded-xl shadow-xl py-2 w-48 text-left z-50">
                  <div className="px-4 py-2 border-b border-slate-50">
                    <p className="text-xs text-slate-400 font-medium">Hola, bienvenido</p>
                    <p className="text-sm font-bold text-slate-800">Mi Cuenta</p>
                  </div>
                  <button
                    onClick={() => {
                      showToast('Iniciando sesión... 🔑')
                      setUserDropdownOpen(false)
                    }}
                    className="w-full text-left px-4 py-2 hover:bg-rose-50 hover:text-rose-500 text-xs font-bold text-slate-700 transition-colors"
                  >
                    Iniciar Sesión
                  </button>
                  <button
                    onClick={() => {
                      showToast('Mis dedicatorias compradas... 🎁')
                      setUserDropdownOpen(false)
                    }}
                    className="w-full text-left px-4 py-2 hover:bg-rose-50 hover:text-rose-500 text-xs font-bold text-slate-700 transition-colors"
                  >
                    Mis Dedicatorias
                  </button>
                </div>
              )}
            </div>

            {/* Shopping Cart Drawer Toggle */}
            <button
              onClick={() => setCartOpen(true)}
              className="p-2 hover:bg-slate-50 rounded-full text-slate-600 hover:text-rose-500 transition-colors relative"
              aria-label="Carrito"
            >
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute -top-0.5 -right-0.5 bg-rose-500 text-white text-[10px] font-extrabold w-4.5 h-4.5 rounded-full flex items-center justify-center border-2 border-white">
                {cartCount}
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Favorites Modal Dropdown Overlay */}
      {favoritesOpen && (
        <div className="absolute top-16 right-16 sm:right-28 bg-white border border-slate-100 rounded-2xl shadow-2xl py-4 px-4 w-72 text-left z-50 space-y-3">
          <div className="flex justify-between items-center border-b border-slate-100 pb-2">
            <span className="font-extrabold text-xs text-slate-800 uppercase tracking-wider flex items-center">
              <Heart className="w-4 h-4 text-rose-500 fill-rose-500 mr-1.5" />
              Mis Favoritos
            </span>
            <button onClick={() => setFavoritesOpen(false)} className="text-slate-400 hover:text-rose-500">
              <X className="w-4.5 h-4.5" />
            </button>
          </div>
          {favorites.length === 0 ? (
            <p className="text-xs text-slate-400 font-light py-4 text-center">Aún no tienes productos favoritos. ♡</p>
          ) : (
            <div className="space-y-3 max-h-60 overflow-y-auto no-scrollbar">
              {PRODUCTS.filter(p => favorites.includes(p.id)).map(fav => (
                <div key={fav.id} className="flex items-center justify-between space-x-3 border-b border-slate-50 pb-2">
                  <img src={fav.image} alt={fav.title} className="w-10 h-10 object-cover rounded-lg" />
                  <div className="flex-1 text-left">
                    <p className="text-xs font-bold text-slate-800 line-clamp-1 leading-snug">{fav.title}</p>
                    <p className="text-xs text-rose-500 font-extrabold mt-0.5">S/ {fav.price.toFixed(2)}</p>
                  </div>
                  <button
                    onClick={() => handleOpenDetail(fav)}
                    className="p-1 text-rose-500 hover:bg-rose-50 rounded-lg text-[10px] font-bold"
                  >
                    Crear
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* 3. HERO SECTION */}
      <section className="radial-glow py-16 lg:py-24 px-4 sm:px-6 lg:px-8 border-b border-slate-100 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Column */}
          <div className="space-y-8 max-w-xl text-left">
            <div className="inline-flex items-center space-x-2 bg-rose-50 text-rose-600 text-xs px-3.5 py-1.5 rounded-full font-bold uppercase tracking-wider">
              <Sparkles className="w-4 h-4" />
              <span>Plataforma Digital Premium</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl font-extrabold text-slate-900 leading-[1.1] tracking-tight">
              Detalles digitales <br />
              <span className="text-rose-500 font-cursive text-6xl sm:text-7xl font-semibold italic inline-flex items-center space-x-2">
                que enamoran
                <Heart className="w-8 h-8 ml-2 text-rose-500 fill-rose-500 animate-pulse" />
              </span>
            </h1>

            <p className="text-lg text-slate-600 leading-relaxed font-light">
              Dedicatorias, cartas, videos y más detalles personalizados para conquistar y sorprender a tu persona especial. Diseños emotivos con música generada por IA entregados al instante.
            </p>

            {/* Badges */}
            <div className="grid grid-cols-3 gap-3">
              <div className="flex items-center space-x-2 bg-white/70 backdrop-blur-sm border border-slate-100 p-3 rounded-xl shadow-xs">
                <div className="p-1 bg-rose-50 rounded-full">
                  <Check className="w-4.5 h-4.5 text-rose-500" />
                </div>
                <span className="text-xs sm:text-sm font-semibold text-slate-700">100% Personalizado</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/70 backdrop-blur-sm border border-slate-100 p-3 rounded-xl shadow-xs">
                <div className="p-1 bg-rose-50 rounded-full">
                  <Clock className="w-4.5 h-4.5 text-rose-500" />
                </div>
                <span className="text-xs sm:text-sm font-semibold text-slate-700">Entrega inmediata</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/70 backdrop-blur-sm border border-slate-100 p-3 rounded-xl shadow-xs">
                <div className="p-1 bg-rose-50 rounded-full">
                  <Gift className="w-4.5 h-4.5 text-rose-500" />
                </div>
                <span className="text-xs sm:text-sm font-semibold text-slate-700">Cualquier ocasión</span>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="#mas-vendidos"
                className="inline-flex items-center justify-center px-8 py-4 bg-rose-500 hover:bg-rose-600 text-white font-bold rounded-2xl shadow-lg hover:shadow-rose-200 transform hover:-translate-y-0.5 transition-all text-base"
              >
                Explorar catálogo
                <ChevronRight className="w-5 h-5 ml-2" />
              </a>
              <button
                onClick={() => {
                  // Direct shortcut to customize first popular product
                  handleOpenDetail(PRODUCTS[0])
                }}
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-rose-500/30 hover:border-rose-500 text-rose-600 hover:bg-rose-50/50 font-bold rounded-2xl transition-all text-base"
              >
                Crear mi detalle ♡
              </button>
            </div>
          </div>

          {/* Right Column: 3D Compositions */}
          <div className="relative h-[480px] w-full flex items-center justify-center lg:justify-end">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] h-[380px] bg-rose-200/30 rounded-full blur-3xl pointer-events-none" />

            {/* 3D Monitor / Video Mockup (Back-Left) */}
            <div className="absolute top-4 left-6 sm:left-12 lg:left-0 z-10 w-[300px] sm:w-[340px] hover:scale-105 transition-transform duration-500">
              <div className="bg-slate-900 border-[6px] border-slate-800 rounded-2xl shadow-2xl overflow-hidden aspect-video relative group">
                <img
                  src="https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&w=600&q=80"
                  alt="Mockup 3D de un monitor mostrando una dedicatoria de video de pareja generada por IA"
                  className="w-full h-full object-cover opacity-85"
                />
                <div className="absolute inset-0 bg-slate-950/40 flex flex-col justify-end p-4 text-left">
                  <span className="text-[10px] text-rose-300 font-extrabold uppercase tracking-widest leading-none">Video Dedicatoria</span>
                  <span className="text-white font-extrabold text-sm sm:text-base leading-tight mt-1">Para ti, mi amor</span>
                </div>
                {/* Play Button */}
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-rose-500 hover:bg-rose-600 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform cursor-pointer"
                  aria-label="Reproducir video"
                >
                  <Play className="w-5 h-5 text-white fill-white ml-0.5" />
                </button>
              </div>
              <div className="w-16 h-8 bg-slate-800 mx-auto rounded-b-xl shadow-lg" />
              <div className="w-28 h-2 bg-slate-700 mx-auto rounded-full shadow-lg" />
            </div>

            {/* 3D Smartphone Mockup (Center-Right) */}
            <div className="absolute bottom-4 right-10 sm:right-20 lg:right-12 z-30 w-[190px] sm:w-[210px] animate-float-slow hover:scale-105 transition-transform duration-500">
              <div className="bg-slate-950 border-[7px] border-slate-900 rounded-[2.5rem] shadow-2xl overflow-hidden aspect-[9/18] relative ring-4 ring-white/50">
                <div className="absolute top-2 left-1/2 -translate-x-1/2 bg-slate-900 w-16 h-4 rounded-full z-20" />
                <img
                  src="https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=400&q=80"
                  alt="Mockup 3D de un smartphone mostrando una carta de amor digital generada por IA"
                  className="w-full h-full object-cover opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex flex-col justify-end p-4 text-center">
                  <p className="text-white font-bold text-xs leading-snug mb-3">
                    "Contigo cada día es mi lugar favorito ❤️"
                  </p>
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-2 flex items-center space-x-2 justify-between">
                    <button
                      onClick={() => showToast('Escuchando demo de audio... 🎵')}
                      className="p-1 rounded-lg bg-rose-500 text-white cursor-pointer"
                    >
                      <Play className="w-3.5 h-3.5 fill-white ml-0.5" />
                    </button>
                    <div className="flex-1 text-left">
                      <div className="h-1 bg-white/35 rounded-full overflow-hidden">
                        <div className="w-2/3 h-full bg-rose-500" />
                      </div>
                      <span className="text-[8px] text-white/80 font-bold block mt-1 leading-none font-sans">Nuestra Canción - 1:48</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 3D Opened Letter Mockup (Bottom-Left) */}
            <div className="absolute bottom-6 left-12 sm:left-24 lg:left-10 z-20 w-[180px] sm:w-[200px] animate-float-delayed hover:scale-105 transition-transform duration-500">
              <div className="bg-rose-50 border border-rose-100 rounded-2xl shadow-xl p-4 text-left relative overflow-hidden group">
                <div className="absolute -top-6 -right-6 w-16 h-16 bg-rose-200/50 rounded-full rotate-45" />
                <span className="inline-block text-[9px] font-extrabold uppercase bg-rose-100 text-rose-700 px-2 py-0.5 rounded-md mb-2">Carta Interactiva</span>
                <p className="font-cursive text-rose-500 text-lg font-bold mt-1">Eres mi persona favorita</p>
                <p className="text-[10px] text-slate-500 leading-relaxed mt-1.5 font-light">
                  Abre este sobre digital y sumérgete en un viaje de momentos...
                </p>
                <button
                  onClick={() => handleOpenDetail(PRODUCTS[1])} // Open customization for Letter product
                  className="mt-3 flex items-center space-x-1 text-rose-500 font-bold text-[10px] hover:text-rose-600 cursor-pointer"
                >
                  <span>Abrir sobre digital</span>
                  <ChevronRight className="w-3 h-3" />
                </button>
              </div>
            </div>
            
            {/* Heart particles */}
            <div className="absolute top-20 right-6 text-rose-400 opacity-60 animate-bounce duration-1000">
              <Heart className="w-6 h-6 fill-rose-400" />
            </div>
            <div className="absolute top-1/2 left-0 text-rose-300 opacity-50 animate-pulse">
              <Heart className="w-5 h-5 fill-rose-300" />
            </div>
          </div>
        </div>
      </section>

      {/* 4. CARRUSEL DE OCASIONES */}
      <section className="py-16 bg-slate-50 px-4 sm:px-6 lg:px-8 border-b border-slate-100">
        <div className="max-w-7xl mx-auto relative text-center">
          <h2 className="text-3xl font-extrabold text-slate-900 leading-tight">
            Encuentra el <span className="text-rose-500 font-cursive text-4xl font-bold italic">detalle perfecto</span> para cada ocasión
          </h2>

          {/* Navigation buttons */}
          <div className="absolute right-4 top-0 space-x-2 hidden sm:flex">
            <button
              onClick={() => handleScrollOccasions('left')}
              className="p-2.5 bg-white border border-slate-200 rounded-full text-slate-600 hover:bg-rose-500 hover:text-white transition-all shadow-sm cursor-pointer"
              aria-label="Anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => handleScrollOccasions('right')}
              className="p-2.5 bg-white border border-slate-200 rounded-full text-slate-600 hover:bg-rose-500 hover:text-white transition-all shadow-sm cursor-pointer"
              aria-label="Siguiente"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Carousel */}
          <div
            ref={occasionsRef}
            className="flex items-center space-x-5 overflow-x-auto no-scrollbar py-8 mt-6 scroll-smooth px-2"
          >
            {OCCASIONS.map((occ) => {
              const IconComp = occ.icon
              const isFiltered = catalogFilter === occ.name
              return (
                <div
                  key={occ.id}
                  onClick={() => {
                    if (isFiltered) {
                      setCatalogFilter('')
                      showToast('Quitado filtro de ocasión 💌')
                    } else {
                      setCatalogFilter(occ.name)
                      showToast(`Filtrando catálogo para: ${occ.name} 💌`)
                      const el = document.getElementById('mas-vendidos')
                      if (el) el.scrollIntoView({ behavior: 'smooth' })
                    }
                  }}
                  className={`flex-shrink-0 w-[140px] bg-white border rounded-2xl p-4 flex flex-col items-center justify-center text-center cursor-pointer hover:shadow-lg transform hover:-translate-y-1 transition-all ${
                    isFiltered ? 'border-rose-500 shadow-md ring-2 ring-rose-100' : 'border-slate-100'
                  }`}
                >
                  <div className={`w-14 h-14 rounded-full flex items-center justify-center transition-colors ${
                    isFiltered ? 'bg-rose-500 text-white' : 'bg-rose-550 bg-rose-50 text-rose-500 group-hover:bg-rose-500'
                  }`}>
                    <IconComp className="w-6 h-6" />
                  </div>
                  <span className={`font-bold text-xs mt-4 leading-tight transition-colors ${
                    isFiltered ? 'text-rose-600' : 'text-slate-700'
                  }`}>
                    {occ.name}
                  </span>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* 5. SECCIÓN "LOS MÁS POPULARES" (CATÁLOGO) */}
      <section id="mas-vendidos" className="py-16 bg-white px-4 sm:px-6 lg:px-8 border-b border-slate-100">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-6 lg:space-y-0 border-b border-slate-100 pb-6 mb-10">
            <div>
              <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight flex items-center">
                {catalogFilter ? `Catálogo: ${catalogFilter}` : 'Los más populares'}
                <span className="text-rose-500 font-cursive text-4xl font-bold italic ml-2">digitales</span>
                <Sparkles className="w-5 h-5 text-rose-500 ml-2 fill-rose-100" />
              </h2>
              {catalogFilter && (
                <button
                  onClick={() => setCatalogFilter('')}
                  className="text-xs text-rose-500 font-bold hover:underline mt-1 block text-left"
                >
                  Ver todos los motivos ✕
                </button>
              )}
            </div>
            
            {/* Tabs */}
            <div className="flex flex-wrap gap-2 items-center bg-slate-50 p-1.5 rounded-xl border border-slate-100">
              {['Más vendidos', 'Nuevos', 'Videos', 'Cartas', 'Música', 'Promociones'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => {
                    setActiveTab(tab)
                    showToast(`Categoría: ${tab}`)
                  }}
                  className={`px-4 py-2 text-xs sm:text-sm font-bold rounded-lg transition-all cursor-pointer ${
                    activeTab === tab
                      ? 'bg-white text-rose-600 shadow-sm border border-slate-100'
                      : 'text-slate-500 hover:text-rose-500'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <button
              onClick={() => {
                setActiveTab('Más vendidos')
                setCatalogFilter('')
                showToast('Mostrando todo el catálogo digital. 📚')
              }}
              className="text-rose-500 hover:text-rose-600 text-sm font-bold flex items-center space-x-1 group"
            >
              <span>Ver todo el catálogo</span>
              <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Grid Products */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
            {filteredProducts.map((prod) => {
              const isFav = favorites.includes(prod.id)
              return (
                <div
                  key={prod.id}
                  className="bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-xs hover:shadow-xl hover:border-rose-100 flex flex-col justify-between group transition-all relative"
                >
                  {/* Favorite Toggle Floating Button */}
                  <button
                    onClick={() => handleToggleFavorite(prod.id, prod.title)}
                    className="absolute top-3 right-3 z-20 p-2 bg-white/80 backdrop-blur-md rounded-full shadow-xs hover:bg-white text-slate-400 hover:text-rose-500 transition-colors"
                    aria-label="Guardar favorito"
                  >
                    <Heart className={`w-4 h-4 ${isFav ? 'text-rose-500 fill-rose-500' : ''}`} />
                  </button>

                  {/* Image and Floating Badge */}
                  <div className="relative aspect-square bg-slate-50 overflow-hidden">
                    {prod.badge && (
                      <span className={`absolute top-3 left-3 z-10 text-[9px] font-extrabold uppercase text-white px-2 py-0.5 rounded-md ${prod.badgeColor}`}>
                        {prod.badge}
                      </span>
                    )}
                    <img
                      src={prod.image}
                      alt={prod.alt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    
                    {/* Play Button Overlay for Videos */}
                    {prod.category === 'Videos' && (
                      <div
                        onClick={() => setIsModalOpen(true)}
                        className="absolute inset-0 bg-slate-900/30 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity cursor-pointer"
                      >
                        <div className="w-12 h-12 bg-white/95 rounded-full flex items-center justify-center text-rose-500 shadow-lg scale-90 group-hover:scale-100 transition-transform">
                          <Play className="w-5 h-5 fill-rose-500 ml-0.5" />
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-4 flex-1 flex flex-col justify-between text-left">
                    <div>
                      <span className="text-[10px] text-rose-500 font-extrabold uppercase tracking-wide">
                        {prod.category}
                      </span>
                      <h3 className="font-bold text-sm text-slate-800 line-clamp-2 mt-1 leading-snug">
                        {prod.title}
                      </h3>
                      
                      {/* Review stars */}
                      <div className="flex items-center space-x-1.5 mt-2">
                        <div className="flex text-amber-400">
                          {[...Array(prod.rating)].map((_, i) => (
                            <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                          ))}
                        </div>
                        <span className="text-[11px] text-slate-400 font-medium">({prod.reviews})</span>
                      </div>
                    </div>

                    {/* Pricing and Action */}
                    <div className="mt-4 pt-3.5 border-t border-slate-50">
                      <div className="flex items-baseline space-x-2 mb-3">
                        <span className="text-lg font-extrabold text-rose-500">S/ {prod.price.toFixed(2)}</span>
                        <span className="text-xs text-slate-400 line-through">S/ {prod.originalPrice.toFixed(2)}</span>
                      </div>
                      
                      <button
                        onClick={() => handleOpenDetail(prod)}
                        className="w-full py-2 bg-white border border-rose-200 hover:border-rose-500 text-rose-500 hover:bg-rose-500 hover:text-white rounded-xl text-xs font-bold transition-all cursor-pointer"
                      >
                        Ver detalle
                      </button>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
          {filteredProducts.length === 0 && (
            <div className="text-center py-12 border border-dashed border-slate-100 rounded-3xl mt-6">
              <p className="text-slate-400 text-sm">No se encontraron productos en esta categoría por el momento. ♡</p>
            </div>
          )}
        </div>
      </section>

      {/* 6. BENEFICIOS "¿POR QUÉ ELEGIR DETALLES DIGITALES?" */}
      <section className="py-16 bg-slate-50 px-4 sm:px-6 lg:px-8 border-b border-slate-100">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-slate-900">
            ¿Por qué elegir <span className="text-rose-500 font-cursive text-4xl font-bold italic">detalles digitales</span>?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mt-12">
            {[
              {
                title: 'Entrega inmediata',
                desc: 'La recibes al instante por email o WhatsApp.',
                icon: Clock
              },
              {
                title: 'Personalización total',
                desc: 'Agrega nombres, fotos, mensajes y más.',
                icon: PenTool
              },
              {
                title: 'Únicos y originales',
                desc: 'Diseños exclusivos para cada momento especial.',
                icon: Award
              },
              {
                title: 'Ecológicos',
                desc: 'Cero residuos, 100% amigable con el planeta.',
                icon: Leaf
              },
              {
                title: 'Acceso para siempre',
                desc: 'Descarga o guarda y revívelo cuando quieras.',
                icon: Globe
              },
              {
                title: 'Precios accesibles',
                desc: 'Más amor, menos gasto.',
                icon: Tag
              }
            ].map((benefit, index) => {
              const IconComp = benefit.icon
              return (
                <div
                  key={index}
                  onClick={() => showToast(`Beneficio: ${benefit.title} 🌟`)}
                  className="flex flex-col items-center text-center space-y-3 bg-white p-5 rounded-2xl border border-slate-100 hover:shadow-md transition-shadow cursor-pointer"
                >
                  <div className="w-12 h-12 bg-rose-50 rounded-full flex items-center justify-center text-rose-500">
                    <IconComp className="w-5.5 h-5.5" />
                  </div>
                  <h3 className="font-bold text-sm text-slate-800">{benefit.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed font-light">{benefit.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* 7. STEPPER "ASÍ DE FÁCIL ES CREAR TU DETALLE" */}
      <section id="pasos" className="py-16 bg-white px-4 sm:px-6 lg:px-8 border-b border-slate-100">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-slate-900">
            Así de fácil es <span className="text-rose-500 font-cursive text-4xl font-bold italic">crear tu detalle</span>
          </h2>

          {/* Horizontal Stepper container */}
          <div className="relative mt-16 max-w-5xl mx-auto">
            {/* Horizontal Line background (desktop) */}
            <div className="absolute top-8 left-10 right-10 h-0.5 dotted-connector hidden lg:block z-0 pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 relative z-10">
              {[
                { step: 1, name: 'Elige tu detalle', desc: 'Selecciona el tipo de detalle que deseas regalar.', icon: Gift },
                { step: 2, name: 'Personaliza', desc: 'Agrega nombres, fotos, mensajes y música.', icon: PenTool },
                { step: 3, name: 'Vista previa', desc: 'Mira cómo queda tu detalle en tiempo real.', icon: Eye },
                { step: 4, name: 'Realiza el pago', desc: 'Pago seguro y rápido 100% en línea.', icon: CreditCard },
                { step: 5, name: 'Recibe y sorprende', desc: 'Enviamos tu detalle por email o WhatsApp al instante.', icon: Mail }
              ].map((item) => {
                const IconComp = item.icon
                const isActive = activeStep === item.step
                return (
                  <div
                    key={item.step}
                    onClick={() => {
                      setActiveStep(item.step)
                      showToast(`Paso ${item.step}: ${item.name}`)
                    }}
                    className="flex flex-col items-center cursor-pointer group"
                  >
                    {/* Circle Icon wrapper */}
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center border-2 transition-all duration-300 relative shadow-md ${
                      isActive
                        ? 'bg-rose-500 border-rose-500 text-white scale-110 ring-4 ring-rose-100'
                        : 'bg-white border-slate-200 text-slate-500 group-hover:border-rose-500 group-hover:text-rose-500'
                    }`}>
                      <span className="absolute -top-1.5 -right-1.5 w-6 h-6 bg-slate-900 text-white rounded-full flex items-center justify-center text-xs font-bold">
                        {item.step}
                      </span>
                      <IconComp className="w-6 h-6" />
                    </div>

                    <h3 className="font-extrabold text-sm text-slate-800 mt-5 leading-snug group-hover:text-rose-500 transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-xs text-slate-500 mt-2 max-w-[180px] leading-relaxed font-light">
                      {item.desc}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 8. PACKS Y COMBOS ESPECIALES */}
      <section id="combos" className="py-16 bg-slate-50 px-4 sm:px-6 lg:px-8 border-b border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-10 border-b border-slate-200/50 pb-5">
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Packs y combos <span className="text-rose-500 font-cursive text-4xl font-bold italic">especiales</span>
            </h2>
            <button
              onClick={() => {
                showToast('Mostrando todos los combos disponibles. 🎁')
              }}
              className="text-rose-500 hover:text-rose-600 text-sm font-bold flex items-center space-x-1 group"
            >
              <span>Ver todos los packs</span>
              <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PACKS.map((pack) => (
              <div
                key={pack.id}
                className="bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:border-rose-100 flex flex-col justify-between group transition-all"
              >
                {/* Image layout */}
                <div className="relative aspect-video overflow-hidden bg-slate-100">
                  <span className="absolute top-3 left-3 z-10 text-[10px] font-extrabold uppercase bg-red-600 text-white px-2 py-0.5 rounded-md shadow-xs">
                    {pack.discount} DESC
                  </span>
                  <img
                    src={pack.image}
                    alt={pack.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Info and price */}
                <div className="p-5 flex-1 flex flex-col justify-between text-left">
                  <div>
                    <h3 className="font-extrabold text-base text-slate-800 leading-snug group-hover:text-rose-500 transition-colors">
                      {pack.title}
                    </h3>
                    <p className="text-xs text-slate-500 mt-1 font-light">{pack.items}</p>
                  </div>

                  <div className="mt-5 pt-4 border-t border-slate-50 flex items-center justify-between">
                    <div className="flex flex-col">
                      <span className="text-xs text-slate-400 line-through">S/ {pack.wasPrice.toFixed(2)}</span>
                      <span className="text-xl font-extrabold text-rose-500">S/ {pack.price.toFixed(2)}</span>
                    </div>

                    <button
                      onClick={() => handleAddPackToCart(pack)}
                      className="px-4 py-2 bg-rose-500 hover:bg-rose-600 text-white rounded-xl text-xs font-bold transition-colors shadow-sm cursor-pointer"
                    >
                      Agregar al carrito
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. TESTIMONIOS */}
      <section id="testimonios" className="py-16 bg-white px-4 sm:px-6 lg:px-8 border-b border-slate-100 overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative">
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Lo que dicen quienes <span className="text-rose-500 font-cursive text-4xl font-bold italic">ya han sorprendido</span>
          </h2>

          {/* Testimonial slider cards */}
          <div className="relative mt-12 bg-slate-50 border border-slate-100 rounded-3xl p-8 sm:p-12 shadow-xs max-w-2xl mx-auto text-left transition-all">
            <div className="flex text-amber-400 space-x-1 mb-4">
              {[...Array(TESTIMONIALS[testimonialIndex].rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400" />
              ))}
            </div>

            <p className="text-slate-600 text-base sm:text-lg italic leading-relaxed font-light">
              {TESTIMONIALS[testimonialIndex].text}
            </p>

            <div className="flex items-center space-x-4 mt-8 pt-6 border-t border-slate-200/50">
              <img
                src={TESTIMONIALS[testimonialIndex].avatar}
                alt={`Avatar de cliente ${TESTIMONIALS[testimonialIndex].name}`}
                className="w-12 h-12 rounded-full object-cover border-2 border-white ring-4 ring-rose-50"
              />
              <div className="text-left leading-none">
                <span className="font-extrabold text-sm text-slate-800 block">
                  {TESTIMONIALS[testimonialIndex].name}
                </span>
                <span className="text-xs text-rose-500 font-semibold block mt-1">
                  {TESTIMONIALS[testimonialIndex].location}
                </span>
              </div>
            </div>
          </div>

          {/* Testimonial navigators */}
          <div className="flex justify-center space-x-4 mt-8">
            <button
              onClick={handlePrevTestimonial}
              className="p-2.5 bg-slate-100 hover:bg-rose-500 hover:text-white rounded-full text-slate-600 transition-all shadow-xs cursor-pointer"
              aria-label="Testimonio anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex items-center space-x-2">
              {TESTIMONIALS.map((t, idx) => (
                <button
                  key={t.id}
                  onClick={() => setTestimonialIndex(idx)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    testimonialIndex === idx ? 'w-5 bg-rose-500' : 'bg-slate-200'
                  }`}
                  aria-label={`Ir al testimonio ${idx + 1}`}
                />
              ))}
            </div>
            <button
              onClick={handleNextTestimonial}
              className="p-2.5 bg-slate-100 hover:bg-rose-500 hover:text-white rounded-full text-slate-600 transition-all shadow-xs cursor-pointer"
              aria-label="Siguiente testimonio"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* 10. BANNER DE NEWSLETTER Y TRUST PRE-FOOTER */}
      <section id="newsletter" className="py-16 bg-white px-4 sm:px-6 lg:px-8 border-b border-slate-100">
        <div className="max-w-7xl mx-auto space-y-12">
          {/* Newsletter Box */}
          <div className="bg-gradient-to-r from-rose-500 to-purple-600 rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden shadow-xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-white/5 rounded-full blur-xl pointer-events-none" />

            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 text-left">
              <div className="space-y-4 max-w-xl">
                <div className="inline-flex items-center space-x-2 bg-white/10 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
                  <Mail className="w-4 h-4 text-rose-200" />
                  <span>Newsletter Semanal</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight">
                  Ideas románticas y promociones exclusivas para ti 💌
                </h2>
                <p className="text-rose-100 font-light text-sm sm:text-base">
                  Suscríbete y recibe inspiración para enamorar cada día, además de descuentos de temporada.
                </p>
              </div>

              <form onSubmit={handleSubscribe} className="w-full max-w-md flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  placeholder="Tu correo electrónico"
                  className="flex-1 px-5 py-4 rounded-2xl text-slate-800 focus:outline-none focus:ring-3 focus:ring-rose-300 font-medium text-sm"
                  required
                />
                <button
                  type="submit"
                  className="px-8 py-4 bg-rose-600 hover:bg-rose-700 text-white font-bold rounded-2xl transition-colors text-sm shadow-md cursor-pointer"
                >
                  Suscribirme
                </button>
              </form>
            </div>
          </div>

          {/* Trust line */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-6">
            {[
              { title: 'Entrega inmediata', desc: 'por email o WhatsApp', icon: Clock },
              { title: 'Pago 100% seguro', desc: 'Tus datos protegidos', icon: CreditCard },
              { title: 'Garantía de satisfacción', desc: 'Te ayudamos en lo que necesites', icon: Award },
              { title: 'Soporte 24/7', desc: 'Siempre estamos para ti', icon: Headphones }
            ].map((trust, idx) => {
              const IconComp = trust.icon
              return (
                <div
                  key={idx}
                  onClick={() => showToast(`Confianza: ${trust.title} ✅`)}
                  className="flex items-center space-x-4 bg-slate-50 p-5 rounded-2xl border border-slate-100 hover:-translate-y-0.5 transition-transform cursor-pointer"
                >
                  <div className="p-3 bg-rose-50 rounded-xl text-rose-500">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <div className="text-left">
                    <h3 className="font-bold text-sm text-slate-800">{trust.title}</h3>
                    <p className="text-xs text-slate-400 font-light mt-0.5">{trust.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* 11. FOOTER OSCURO */}
      <footer id="footer" className="bg-slate-900 text-slate-400 pt-16 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 text-left border-b border-slate-800 pb-12">
          {/* Col 1 */}
          <div className="space-y-5 lg:col-span-1">
            <div className="flex items-center space-x-2.5">
              <Heart className="w-6 h-6 text-rose-500 fill-rose-500" />
              <span className="font-extrabold text-base text-white tracking-tight">
                Detalles que <span className="font-cursive text-xl text-rose-500 font-bold italic">enamoran</span>
              </span>
            </div>
            <p className="text-xs leading-relaxed font-light text-slate-400">
              Creamos detalles digitales únicos que conectan emociones y crean recuerdos inolvidables para siempre.
            </p>
            <div className="flex space-x-3">
              <button
                onClick={() => showToast('Abriendo Instagram... 📸')}
                className="w-8 h-8 rounded-full bg-slate-800 hover:bg-rose-500 text-white flex items-center justify-center hover:scale-110 transition-transform cursor-pointer"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </button>
              <button
                onClick={() => showToast('Abriendo Facebook... 👥')}
                className="w-8 h-8 rounded-full bg-slate-800 hover:bg-rose-500 text-white flex items-center justify-center hover:scale-110 transition-transform cursor-pointer"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </button>
              <button
                onClick={() => showToast('Abriendo WhatsApp... 💬')}
                className="w-8 h-8 rounded-full bg-slate-800 hover:bg-rose-500 text-white flex items-center justify-center hover:scale-110 transition-transform cursor-pointer"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4.5 h-4.5" />
              </button>
            </div>
          </div>

          {/* Col 2 */}
          <div className="space-y-4">
            <h3 className="text-white font-extrabold text-sm uppercase tracking-wider">Productos</h3>
            <ul className="space-y-2.5 text-xs font-light">
              <li><button onClick={() => { setActiveTab('Videos'); showToast('Filtro: Videos'); }} className="hover:text-rose-500 transition-colors">Videos románticos</button></li>
              <li><button onClick={() => { setActiveTab('Cartas'); showToast('Filtro: Cartas'); }} className="hover:text-rose-500 transition-colors">Cartas digitales</button></li>
              <li><button onClick={() => { setActiveTab('Música'); showToast('Filtro: Música'); }} className="hover:text-rose-500 transition-colors">Música personalizada</button></li>
              <li><button onClick={() => { setActiveTab('Promociones'); showToast('Filtro: Promociones'); }} className="hover:text-rose-500 transition-colors">Cupones de amor</button></li>
              <li><button onClick={() => { setActiveTab('Más vendidos'); showToast('Filtro: Todos'); }} className="hover:text-rose-500 text-rose-400 font-bold transition-colors">Todos los productos</button></li>
            </ul>
          </div>

          {/* Col 3 */}
          <div className="space-y-4">
            <h3 className="text-white font-extrabold text-sm uppercase tracking-wider">Información</h3>
            <ul className="space-y-2.5 text-xs font-light">
              <li><button onClick={() => { setActiveStep(1); showToast('Stepper: Paso 1'); }} className="hover:text-rose-500 transition-colors">Cómo funciona</button></li>
              <li><button onClick={() => { const el = document.getElementById('testimonios'); if (el) el.scrollIntoView({ behavior: 'smooth' }); }} className="hover:text-rose-500 transition-colors">Preguntas frecuentes</button></li>
              <li><button onClick={() => showToast('Términos y condiciones')} className="hover:text-rose-500 transition-colors">Términos y condiciones</button></li>
              <li><button onClick={() => showToast('Política de privacidad')} className="hover:text-rose-500 transition-colors">Política de privacidad</button></li>
              <li><button onClick={() => showToast('Política de reembolsos')} className="hover:text-rose-500 transition-colors">Política de reembolsos</button></li>
            </ul>
          </div>

          {/* Col 4 */}
          <div className="space-y-4">
            <h3 className="text-white font-extrabold text-sm uppercase tracking-wider">Ayuda</h3>
            <ul className="space-y-2.5 text-xs font-light">
              <li><button onClick={() => showToast('Centro de ayuda')} className="hover:text-rose-500 transition-colors">Centro de ayuda</button></li>
              <li><button onClick={() => showToast('Formulario de contacto')} className="hover:text-rose-500 transition-colors">Contacto</button></li>
              <li><button onClick={() => showToast('Aceptamos tarjetas de Crédito, Débito, Yape, Plin')} className="hover:text-rose-500 transition-colors">Métodos de pago</button></li>
              <li><button onClick={() => showToast('Entregas digitales inmediatas 24/7')} className="hover:text-rose-500 transition-colors">Envíos y entregas</button></li>
            </ul>
          </div>

          {/* Col 5 */}
          <div className="space-y-4">
            <h3 className="text-white font-extrabold text-sm uppercase tracking-wider">Contacto</h3>
            <ul className="space-y-3.5 text-xs font-light">
              <li className="flex items-center space-x-2">
                <MessageCircle className="w-4.5 h-4.5 text-rose-500" />
                <a href="https://wa.me/51900123456" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  +51 900 123 456
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-4.5 h-4.5 text-rose-500" />
                <a href="mailto:hola@detallesqueenamoran.com" className="hover:text-white transition-colors">
                  hola@detallesqueenamoran.com
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Globe className="w-4.5 h-4.5 text-rose-500" />
                <span>Lima, Perú</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="max-w-7xl mx-auto pt-8 flex flex-col md:flex-row justify-between items-center text-xs space-y-4 md:space-y-0">
          <span>
            © 2026 Detalles Que Enamoran Digitales. Todos los derechos reservados.
          </span>
          <span className="flex items-center space-x-1">
            <span>Hecho con</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 animate-pulse" />
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
                <Sparkles className="w-4.5 h-4.5 text-rose-500" />
                <span>Vista Previa del Detalle Digital</span>
              </span>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-1 rounded-lg bg-slate-800 hover:bg-rose-500 text-slate-400 hover:text-white transition-all cursor-pointer"
                aria-label="Cerrar modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Video Canvas Representation */}
            <div className="relative aspect-video bg-black flex items-center justify-center">
              <img
                src="https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&w=800&q=80"
                alt="Fondo de la dedicatoria en video"
                className={`w-full h-full object-cover transition-opacity duration-300 ${isPlaying ? 'opacity-80' : 'opacity-40'}`}
              />
              
              {/* Play overlays and progress meters simulating interactive software */}
              <div className="absolute inset-0 flex flex-col justify-between p-6">
                <div className="flex items-start justify-between">
                  <div className="bg-slate-950/60 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/10 text-left">
                    <span className="text-[10px] text-rose-400 font-extrabold uppercase leading-none block font-sans">Para</span>
                    <span className="text-white text-xs font-bold leading-none mt-0.5 font-sans">Mi Persona Favorita</span>
                  </div>
                  <div className="bg-rose-500 text-white font-extrabold text-[10px] px-2.5 py-1.5 rounded-lg shadow-sm">
                    {isPlaying ? 'PLAYING PREVIEW' : 'PAUSED'}
                  </div>
                </div>

                {/* Main Love Greeting */}
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
                  <div className="flex items-center justify-between text-[10px] text-white/70 font-semibold font-sans">
                    <span>0:45</span>
                    <div className="flex-1 mx-3 h-1 bg-white/20 rounded-full overflow-hidden">
                      <div className="w-1/3 h-full bg-rose-500" />
                    </div>
                    <span>2:15</span>
                  </div>
                  
                  <div className="flex justify-center items-center space-x-4">
                    <button className="text-white hover:text-rose-500 transition-colors" onClick={() => showToast('Minuto anterior')}>
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      className="w-8 h-8 rounded-full bg-rose-500 flex items-center justify-center text-white hover:bg-rose-600 transition-colors cursor-pointer"
                      onClick={() => {
                        setIsPlaying(!isPlaying)
                        showToast(isPlaying ? 'Video pausado' : 'Reproduciendo video')
                      }}
                    >
                      {isPlaying ? <Pause className="w-3.5 h-3.5 fill-white" /> : <Play className="w-3.5 h-3.5 fill-white ml-0.5" />}
                    </button>
                    <button className="text-white hover:text-rose-500 transition-colors" onClick={() => showToast('Minuto siguiente')}>
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
                className="px-5 py-2.5 rounded-xl border border-slate-700 hover:border-slate-500 text-slate-400 hover:text-white font-bold text-sm transition-colors cursor-pointer"
              >
                Volver
              </button>
              <button
                onClick={() => {
                  handleOpenDetail(PRODUCTS[0]) // Open customization form
                  setIsModalOpen(false)
                }}
                className="px-5 py-2.5 bg-rose-500 hover:bg-rose-600 text-white rounded-xl font-bold text-sm transition-colors flex items-center cursor-pointer"
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
          <div className="bg-white border border-slate-100 rounded-3xl w-full max-w-lg overflow-hidden shadow-2xl relative text-left">
            {/* Header */}
            <div className="flex justify-between items-center p-5 border-b border-slate-100">
              <span className="font-extrabold text-sm text-slate-800 uppercase tracking-wider flex items-center">
                <PenTool className="w-4.5 h-4.5 text-rose-500 mr-2" />
                Personaliza tu Dedicatoria
              </span>
              <button
                onClick={() => setCustomizingProduct(null)}
                className="p-1 rounded-lg bg-slate-50 hover:bg-rose-50 text-slate-400 hover:text-rose-500 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleAddCustomizedToCart} className="p-6 space-y-4">
              <div className="flex items-center space-x-4 border-b border-slate-50 pb-4 mb-4">
                <img src={customizingProduct.image} alt={customizingProduct.title} className="w-16 h-16 object-cover rounded-xl shadow-xs" />
                <div>
                  <h3 className="font-bold text-slate-800 text-base leading-snug">{customizingProduct.title}</h3>
                  <p className="text-xs text-rose-500 font-extrabold mt-1">S/ {customizingProduct.price.toFixed(2)}</p>
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
                  className="w-full px-4 py-2.5 border border-slate-200 rounded-xl focus:outline-none focus:border-rose-500 text-sm font-medium"
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
                  className="w-full px-4 py-2.5 border border-slate-200 rounded-xl focus:outline-none focus:border-rose-500 text-sm font-medium"
                  required
                />
              </div>

              {/* Dedicated Message */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5">Dedicatoria / Mensaje de amor</label>
                <textarea
                  value={formMessage}
                  onChange={(e) => setFormMessage(e.target.value)}
                  placeholder="Escribe el mensaje que irá dentro del detalle digital..."
                  rows="3"
                  className="w-full px-4 py-2.5 border border-slate-200 rounded-xl focus:outline-none focus:border-rose-500 text-sm font-medium resize-none"
                  required
                ></textarea>
              </div>

              {/* Background Music Style */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5">Música de fondo IA</label>
                <select
                  value={formMusic}
                  onChange={(e) => setFormMusic(e.target.value)}
                  className="w-full px-4 py-2.5 border border-slate-200 rounded-xl focus:outline-none focus:border-rose-500 text-sm font-medium bg-white"
                >
                  <option value="Romántica Acústica">Acústica & Guitarra Romántica</option>
                  <option value="Piano Clásico">Piano Suave & Melódico</option>
                  <option value="Balada Pop">Balada Pop Moderna</option>
                  <option value="Violín Instrumental">Violín Clásico</option>
                </select>
              </div>

              {/* Submit Button */}
              <div className="pt-4 flex space-x-3">
                <button
                  type="button"
                  onClick={() => setCustomizingProduct(null)}
                  className="w-1/3 py-3 border border-slate-200 hover:border-slate-300 text-slate-600 rounded-xl text-sm font-bold transition-all text-center cursor-pointer"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="w-2/3 py-3 bg-rose-500 hover:bg-rose-600 text-white rounded-xl text-sm font-bold transition-all shadow-md text-center cursor-pointer"
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
          {/* Backdrop */}
          <div className="absolute inset-0 bg-slate-950/40 backdrop-blur-xs transition-opacity" onClick={() => setCartOpen(false)} />

          <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
            <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col h-full border-l border-slate-100">
              
              {/* Drawer Header */}
              <div className="px-6 py-5 border-b border-slate-100 flex items-center justify-between">
                <span className="font-extrabold text-sm text-slate-800 uppercase tracking-wider flex items-center">
                  <ShoppingCart className="w-5 h-5 text-rose-500 mr-2" />
                  Carrito de Compras ({cartCount})
                </span>
                <button
                  onClick={() => setCartOpen(false)}
                  className="p-1 rounded-lg bg-slate-50 hover:bg-rose-50 text-slate-400 hover:text-rose-500 transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Items List */}
              <div className="flex-1 py-4 px-6 overflow-y-auto no-scrollbar space-y-4 bg-slate-50/50">
                {cartItems.length === 0 ? (
                  <div className="text-center py-20 space-y-4">
                    <div className="w-16 h-16 bg-rose-50 rounded-full flex items-center justify-center mx-auto text-rose-500">
                      <ShoppingCart className="w-8 h-8" />
                    </div>
                    <p className="text-sm font-bold text-slate-800">Tu carrito está vacío</p>
                    <p className="text-xs text-slate-400 max-w-[200px] mx-auto font-light leading-relaxed">
                      Explora nuestro catálogo y personaliza dedicatorias para tu persona favorita.
                    </p>
                    <button
                      onClick={() => {
                        setCartOpen(false)
                        const el = document.getElementById('mas-vendidos')
                        if (el) el.scrollIntoView({ behavior: 'smooth' })
                      }}
                      className="px-5 py-2 bg-rose-500 hover:bg-rose-600 text-white rounded-xl text-xs font-bold transition-all"
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
                      {/* Product thumbnail */}
                      <img src={item.image} alt={item.title} className="w-16 h-16 object-cover rounded-xl" />

                      {/* Info */}
                      <div className="flex-1 text-left">
                        <h4 className="font-bold text-xs text-slate-800 pr-4 leading-snug line-clamp-1">{item.title}</h4>
                        <div className="text-[10px] text-slate-400 font-light mt-1.5 space-y-0.5 leading-none">
                          <p><span className="font-semibold">De:</span> {item.customization.sender}</p>
                          <p><span className="font-semibold">Para:</span> {item.customization.receiver}</p>
                          <p className="italic line-clamp-1">"{item.customization.message}"</p>
                          <p><span className="font-semibold text-rose-500">Música:</span> {item.customization.music}</p>
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

                          <span className="text-xs text-rose-500 font-extrabold">
                            S/ {(item.price * item.quantity).toFixed(2)}
                          </span>
                        </div>
                      </div>

                      {/* Remove Button */}
                      <button
                        onClick={() => handleRemoveFromCart(item.id)}
                        className="absolute top-3 right-3 text-slate-300 hover:text-red-500 p-1 rounded-lg transition-colors"
                        aria-label="Eliminar producto"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))
                )}
              </div>

              {/* Checkout Summary panel */}
              {cartItems.length > 0 && (
                <div className="p-6 border-t border-slate-100 bg-white space-y-4">
                  <div className="flex justify-between items-center text-sm">
                    <span className="font-bold text-slate-500">Subtotal</span>
                    <span className="font-extrabold text-slate-800">S/ {totalAmount}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm pb-2 border-b border-slate-50">
                    <span className="font-bold text-slate-500">Envío Digital</span>
                    <span className="font-extrabold text-emerald-500 uppercase text-xs">Gratis / Inmediato</span>
                  </div>
                  <div className="flex justify-between items-center text-base pt-2">
                    <span className="font-extrabold text-slate-800">Total</span>
                    <span className="text-2xl font-black text-rose-500">S/ {totalAmount}</span>
                  </div>

                  <div className="space-y-2 pt-2">
                    <button
                      onClick={handleCheckoutWhatsApp}
                      className="w-full py-4 bg-emerald-500 hover:bg-emerald-600 text-white rounded-2xl font-bold text-sm transition-all shadow-md shadow-emerald-100 flex items-center justify-center space-x-2 cursor-pointer"
                    >
                      <MessageCircle className="w-5 h-5 fill-white" />
                      <span>Comprar por WhatsApp</span>
                    </button>
                    
                    <button
                      onClick={() => showToast('Pasarela de pagos en desarrollo... 💳')}
                      className="w-full py-3.5 bg-slate-900 hover:bg-slate-950 text-white rounded-2xl font-bold text-xs transition-all flex items-center justify-center space-x-2 cursor-pointer"
                    >
                      <Lock className="w-4 h-4 text-slate-400" />
                      <span>Pago Seguro con Tarjeta</span>
                    </button>
                  </div>

                  <p className="text-[10px] text-slate-400 font-light text-center leading-normal pt-1">
                    *Al comprar por WhatsApp se generará un pedido automático y coordinarás el abono vía Yape, Plin o transferencia bancaria.
                  </p>
                </div>
              )}

            </div>
          </div>
        </div>
      )}

    </div>
  )
}
