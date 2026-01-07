import React, { useState, useEffect } from 'react';
import { Search, Calendar, MapPin, Clock, ChevronRight, Music, Laptop, GraduationCap, Trophy, Menu, X, Facebook, Twitter, Instagram, Linkedin, TrendingUp, Star, Users, Ticket, Heart, Share2, Filter, ArrowRight, Play, Award, CheckCircle, Bell } from 'lucide-react';

const RwandaEventPlatform = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [likedEvents, setLikedEvents] = useState(new Set());

  const heroSlides = [
    {
      title: "Kigali Jazz Festival 2026",
      subtitle: "Experience the rhythm of Africa",
      image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=1600&q=80",
      date: "Jan 15-17, 2026"
    },
    {
      title: "Rwanda Tech Summit",
      subtitle: "Shaping Africa's Digital Future",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1600&q=80",
      date: "Jan 22-24, 2026"
    },
    {
      title: "Kwita Izina Festival",
      subtitle: "Celebrating Wildlife Conservation",
      image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1600&q=80",
      date: "Feb 5, 2026"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const featuredEvents = [
    {
      id: 1,
      title: "Kigali Jazz Festival",
      date: "Jan 15, 2026",
      time: "7:00 PM",
      location: "BK Arena, Kigali",
      price: "25,000 RWF",
      image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&q=80",
      category: "Music",
      attendees: 2500,
      rating: 4.8,
      featured: true,
      organizer: "Jazz Rwanda"
    },
    {
      id: 2,
      title: "Rwanda Tech Summit 2026",
      date: "Jan 22, 2026",
      time: "9:00 AM",
      location: "Kigali Convention Centre",
      price: "50,000 RWF",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
      category: "Tech",
      attendees: 3000,
      rating: 4.9,
      featured: true,
      organizer: "Tech Hub Rwanda"
    },
    {
      id: 3,
      title: "Kwita Izina Celebration",
      date: "Feb 5, 2026",
      time: "10:00 AM",
      location: "Volcanoes National Park",
      price: "Free",
      image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&q=80",
      category: "Culture",
      attendees: 5000,
      rating: 5.0,
      featured: true,
      organizer: "Rwanda Tourism"
    }
  ];

  const upcomingEvents = [
    {
      id: 4,
      title: "Kigali Film Festival",
      date: "Jan 28, 2026",
      time: "6:00 PM",
      location: "Century Cinema, Kigali",
      price: "15,000 RWF",
      image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=600&q=80",
      category: "Entertainment",
      attendees: 800,
      rating: 4.6
    },
    {
      id: 5,
      title: "Rwanda Fashion Week",
      date: "Feb 10, 2026",
      time: "7:00 PM",
      location: "Intare Conference Arena",
      price: "30,000 RWF",
      image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&q=80",
      category: "Fashion",
      attendees: 1200,
      rating: 4.7
    },
    {
      id: 6,
      title: "Agricultural Innovation Expo",
      date: "Feb 15, 2026",
      time: "8:00 AM",
      location: "Gikondo Expo Grounds",
      price: "10,000 RWF",
      image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=600&q=80",
      category: "Education",
      attendees: 1500,
      rating: 4.5
    },
    {
      id: 7,
      title: "Kigali Marathon 2026",
      date: "Feb 20, 2026",
      time: "6:00 AM",
      location: "City of Kigali",
      price: "20,000 RWF",
      image: "https://images.unsplash.com/photo-1452626038306-9aae5e071dd3?w=600&q=80",
      category: "Sports",
      attendees: 4000,
      rating: 4.9
    },
    {
      id: 8,
      title: "Business Leadership Forum",
      date: "Feb 25, 2026",
      time: "9:00 AM",
      location: "Radisson Blu Hotel",
      price: "75,000 RWF",
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=600&q=80",
      category: "Business",
      attendees: 500,
      rating: 4.8
    },
    {
      id: 9,
      title: "Kigali Food Festival",
      date: "Mar 1, 2026",
      time: "12:00 PM",
      location: "Kigali Heights",
      price: "5,000 RWF",
      image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&q=80",
      category: "Food",
      attendees: 2000,
      rating: 4.7
    },
    {
      id: 10,
      title: "Youth Innovation Challenge",
      date: "Mar 5, 2026",
      time: "10:00 AM",
      location: "Carnegie Mellon University",
      price: "Free",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&q=80",
      category: "Education",
      attendees: 600,
      rating: 4.6
    },
    {
      id: 11,
      title: "Kigali Car Rally",
      date: "Mar 10, 2026",
      time: "8:00 AM",
      location: "Bugesera Circuit",
      price: "30,000 RWF",
      image: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=600&q=80",
      category: "Sports",
      attendees: 3000,
      rating: 4.8
    },
    {
      id: 12,
      title: "African Art Exhibition",
      date: "Mar 15, 2026",
      time: "11:00 AM",
      location: "Kigali Art Center",
      price: "10,000 RWF",
      image: "https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?w=600&q=80",
      category: "Culture",
      attendees: 800,
      rating: 4.7
    }
  ];

  const categories = [
    { name: "All", icon: TrendingUp, color: "bg-gradient-to-br from-purple-500 to-pink-500", count: 45 },
    { name: "Music", icon: Music, color: "bg-gradient-to-br from-purple-500 to-indigo-500", count: 24 },
    { name: "Tech", icon: Laptop, color: "bg-gradient-to-br from-blue-500 to-cyan-500", count: 18 },
    { name: "Education", icon: GraduationCap, color: "bg-gradient-to-br from-green-500 to-emerald-500", count: 15 },
    { name: "Sports", icon: Trophy, color: "bg-gradient-to-br from-orange-500 to-red-500", count: 12 },
    { name: "Culture", icon: Award, color: "bg-gradient-to-br from-yellow-500 to-orange-500", count: 10 }
  ];

  const stats = [
    { label: "Active Events", value: "150+", icon: Calendar },
    { label: "Happy Attendees", value: "50K+", icon: Users },
    { label: "Event Categories", value: "25+", icon: Award },
    { label: "Tickets Sold", value: "100K+", icon: Ticket }
  ];

  const toggleLike = (eventId) => {
    setLikedEvents(prev => {
      const newSet = new Set(prev);
      if (newSet.has(eventId)) {
        newSet.delete(eventId);
      } else {
        newSet.add(eventId);
      }
      return newSet;
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-lg shadow-sm sticky top-0 z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-12">
              <div className="flex-shrink-0 flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                  <Ticket className="text-white" size={20} />
                </div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Rwanda Event
                </h1>
              </div>
              <div className="hidden md:flex items-center space-x-8">
                <a href="#" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium transition relative group">
                  Events
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all"></span>
                </a>
                <a href="#" className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium transition">Categories</a>
                <a href="#" className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium transition">Organizers</a>
                <a href="#" className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium transition">About</a>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <button className="p-2 hover:bg-gray-100 rounded-lg transition">
                <Bell className="text-gray-600" size={20} />
              </button>
              <button className="text-gray-700 hover:text-blue-600 px-4 py-2 text-sm font-medium transition">
                Login
              </button>
              <button className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white px-6 py-2.5 rounded-xl text-sm font-medium hover:shadow-xl transition-all transform hover:scale-105">
                Get Started
              </button>
            </div>
            <div className="md:hidden">
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-gray-700 p-2 hover:bg-gray-100 rounded-lg">
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
        
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 pt-2 pb-4 space-y-1">
              <a href="#" className="block px-4 py-3 text-gray-900 font-medium hover:bg-gray-50 rounded-lg">Events</a>
              <a href="#" className="block px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg">Categories</a>
              <a href="#" className="block px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg">Organizers</a>
              <a href="#" className="block px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg">About</a>
              <button className="w-full text-left px-4 py-3 text-gray-700 font-medium hover:bg-gray-50 rounded-lg">Login</button>
              <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-3 rounded-lg font-medium">
                Get Started
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Slider */}
      <div className="relative h-[600px] overflow-hidden">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent z-10"></div>
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 z-20 flex items-center">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="max-w-2xl">
                  <div className="inline-flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-medium mb-6">
                    <Calendar className="mr-2" size={16} />
                    {slide.date}
                  </div>
                  <h2 className="text-5xl md:text-7xl font-bold text-white mb-4 leading-tight">
                    {slide.title}
                  </h2>
                  <p className="text-xl text-gray-200 mb-8">
                    {slide.subtitle}
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-medium hover:shadow-2xl transition-all transform hover:scale-105 flex items-center">
                      Book Tickets <ArrowRight className="ml-2" size={20} />
                    </button>
                    <button className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-medium hover:bg-white/30 transition-all flex items-center">
                      <Play className="mr-2" size={20} /> Watch Preview
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        
        {/* Slider Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex space-x-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide ? 'bg-white w-8' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Search Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-30">
        <div className="bg-white rounded-3xl shadow-2xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="md:col-span-1">
              <label className="block text-sm font-medium text-gray-700 mb-2">Search Events</label>
              <div className="flex items-center px-4 py-3 bg-gray-50 rounded-xl border border-gray-200 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-100">
                <Search className="text-gray-400 mr-3" size={20} />
                <input
                  type="text"
                  placeholder="Event name..."
                  className="bg-transparent outline-none flex-1 text-gray-700"
                />
              </div>
            </div>
            <div className="md:col-span-1">
              <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
              <div className="flex items-center px-4 py-3 bg-gray-50 rounded-xl border border-gray-200 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-100">
                <MapPin className="text-gray-400 mr-3" size={20} />
                <input
                  type="text"
                  placeholder="City..."
                  className="bg-transparent outline-none flex-1 text-gray-700"
                />
              </div>
            </div>
            <div className="md:col-span-1">
              <label className="block text-sm font-medium text-gray-700 mb-2">Date</label>
              <div className="flex items-center px-4 py-3 bg-gray-50 rounded-xl border border-gray-200 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-100">
                <Calendar className="text-gray-400 mr-3" size={20} />
                <input
                  type="date"
                  className="bg-transparent outline-none flex-1 text-gray-700"
                />
              </div>
            </div>
            <div className="flex items-end">
              <button className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white px-6 py-3 rounded-xl font-medium hover:shadow-xl transition-all transform hover:scale-105 flex items-center justify-center">
                <Search className="mr-2" size={20} />
                Search
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                    <Icon className="text-white" size={24} />
                  </div>
                  <TrendingUp className="text-green-500" size={20} />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</h3>
                <p className="text-gray-600 text-sm">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Categories Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Browse by Category</h2>
          <p className="text-gray-600 text-lg">Find events that match your interests</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <button
                key={index}
                onClick={() => setActiveCategory(category.name)}
                className={`${category.color} rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all cursor-pointer transform hover:-translate-y-2 group relative overflow-hidden ${
                  activeCategory === category.name ? 'ring-4 ring-white' : ''
                }`}
              >
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all"></div>
                <div className="relative">
                  <Icon className="text-white mx-auto mb-3 group-hover:scale-110 transition-transform" size={32} />
                  <h3 className="text-white font-semibold mb-1">{category.name}</h3>
                  <p className="text-white/80 text-sm">{category.count} events</p>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Featured Events */}
      <div className="bg-gradient-to-b from-gray-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-2">Featured Events</h2>
              <p className="text-gray-600">Don't miss these amazing experiences</p>
            </div>
            <button className="hidden md:flex items-center text-blue-600 hover:text-blue-700 font-medium group">
              View All 
              <ChevronRight className="ml-1 group-hover:translate-x-1 transition-transform" size={20} />
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredEvents.map((event) => (
              <div
                key={event.id}
                className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 group"
              >
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1.5 rounded-full text-sm font-semibold backdrop-blur-sm">
                      {event.category}
                    </span>
                    <button
                      onClick={() => toggleLike(event.id)}
                      className="bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/30 transition-all"
                    >
                      <Heart
                        className={`${likedEvents.has(event.id) ? 'fill-red-500 text-red-500' : 'text-white'}`}
                        size={20}
                      />
                    </button>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center text-white text-sm mb-2">
                      <Star className="text-yellow-400 fill-yellow-400 mr-1" size={16} />
                      <span className="font-semibold">{event.rating}</span>
                      <span className="mx-2">•</span>
                      <Users size={16} className="mr-1" />
                      <span>{event.attendees} going</span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition line-clamp-1">
                    {event.title}
                  </h3>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-gray-600">
                      <Calendar size={18} className="mr-3 text-blue-600" />
                      <span className="text-sm font-medium">{event.date}</span>
                      <Clock size={18} className="ml-4 mr-2 text-blue-600" />
                      <span className="text-sm font-medium">{event.time}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <MapPin size={18} className="mr-3 text-blue-600" />
                      <span className="text-sm font-medium">{event.location}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Starting from</p>
                      <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        {event.price}
                      </span>
                    </div>
                    <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-medium hover:shadow-xl transition-all transform hover:scale-105 flex items-center">
                      Book Now <ArrowRight className="ml-2" size={18} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Upcoming Events */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-2">Upcoming Events</h2>
              <p className="text-gray-600">Discover what's happening next</p>
            </div>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <button className="flex items-center px-4 py-2 bg-white border border-gray-200 rounded-xl hover:border-blue-600 hover:text-blue-600 transition">
                <Filter size={18} className="mr-2" />
                Filter
              </button>
              <button className="flex items-center text-blue-600 hover:text-blue-700 font-medium group">
                View All 
                <ChevronRight className="ml-1 group-hover:translate-x-1 transition-transform" size={20} />
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {upcomingEvents.map((event) => (
              <div
                key={event.id}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1 group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute top-3 right-3">
                    <button
                      onClick={() => toggleLike(event.id)}
                      className="bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/30 transition-all"
                    >
                      <Heart
                        className={`${likedEvents.has(event.id) ? 'fill-red-500 text-red-500' : 'text-white'}`}
                        size={16}
                      />
                    </button>
                  </div>
                  <div className="absolute bottom-3 left-3 right-3">
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      {event.category}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center text-yellow-400 text-sm mb-2">
                    <Star className="fill-yellow-400 mr-1" size={14} />
                    <span className="font-semibold text-gray-900">{event.rating}</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition min-h-[3.5rem]">
                    {event.title}
                  </h3>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-gray-600 text-sm">
                      <Calendar size={14} className="mr-2 text-blue-600" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center text-gray-600 text-sm">
                      <MapPin size={14} className="mr-2 text-blue-600" />
                      <span className="line-clamp-1">{event.location}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <span className="text-lg font-bold text-blue-600">{event.price}</span>
                    <button className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center group">
                      View <ArrowRight className="ml-1 group-hover:translate-x-1 transition-transform" size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-4xl font-bold text-white mb-4">Never Miss an Event</h2>
                <p className="text-white/90 text-lg mb-6">
                  Subscribe to our newsletter and get notified about the latest events happening in Rwanda
                </p>
                <div className="flex items-center space-x-2 text-white/80 text-sm">
                  <CheckCircle size={20} className="text-green-400" />
                  <span>Weekly event updates</span>
                </div>
                <div className="flex items-center space-x-2 text-white/80 text-sm mt-2">
                  <CheckCircle size={20} className="text-green-400" />
                  <span>Exclusive early bird access</span>
                </div>
              </div>
              <div>
                <div className="bg-white rounded-2xl p-2 flex">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="flex-1 px-4 py-3 outline-none text-gray-700"
                  />
                  <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-medium hover:shadow-xl transition-all">
                    Subscribe
                  </button>
                </div>
                <p className="text-white/70 text-sm mt-3 text-center">
                  Join 10,000+ event enthusiasts in Rwanda
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                  <Ticket className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Rwanda Event
                </h3>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Your premier platform for discovering and booking the best events across Rwanda. From concerts to conferences, we've got you covered.
              </p>
              <div className="flex space-x-3">
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-all transform hover:scale-110">
                  <Facebook size={20} />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-400 transition-all transform hover:scale-110">
                  <Twitter size={20} />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-pink-600 transition-all transform hover:scale-110">
                  <Instagram size={20} />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-all transform hover:scale-110">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-lg mb-4">Company</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition flex items-center group"><ChevronRight size={16} className="mr-1 group-hover:translate-x-1 transition-transform" /> About Us</a></li>
                <li><a href="#" className="hover:text-white transition flex items-center group"><ChevronRight size={16} className="mr-1 group-hover:translate-x-1 transition-transform" /> Careers</a></li>
                <li><a href="#" className="hover:text-white transition flex items-center group"><ChevronRight size={16} className="mr-1 group-hover:translate-x-1 transition-transform" /> Press</a></li>
                <li><a href="#" className="hover:text-white transition flex items-center group"><ChevronRight size={16} className="mr-1 group-hover:translate-x-1 transition-transform" /> Blog</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-lg mb-4">Support</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition flex items-center group"><ChevronRight size={16} className="mr-1 group-hover:translate-x-1 transition-transform" /> Help Center</a></li>
                <li><a href="#" className="hover:text-white transition flex items-center group"><ChevronRight size={16} className="mr-1 group-hover:translate-x-1 transition-transform" /> Safety</a></li>
                <li><a href="#" className="hover:text-white transition flex items-center group"><ChevronRight size={16} className="mr-1 group-hover:translate-x-1 transition-transform" /> Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition flex items-center group"><ChevronRight size={16} className="mr-1 group-hover:translate-x-1 transition-transform" /> FAQs</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-lg mb-4">Legal</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition flex items-center group"><ChevronRight size={16} className="mr-1 group-hover:translate-x-1 transition-transform" /> Terms</a></li>
                <li><a href="#" className="hover:text-white transition flex items-center group"><ChevronRight size={16} className="mr-1 group-hover:translate-x-1 transition-transform" /> Privacy</a></li>
                <li><a href="#" className="hover:text-white transition flex items-center group"><ChevronRight size={16} className="mr-1 group-hover:translate-x-1 transition-transform" /> Cookies</a></li>
                <li><a href="#" className="hover:text-white transition flex items-center group"><ChevronRight size={16} className="mr-1 group-hover:translate-x-1 transition-transform" /> Licenses</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm mb-4 md:mb-0">
                &copy; 2025 Rwanda Event. All rights reserved.
              </p>
              <div className="flex items-center space-x-6 text-sm text-gray-400">
                <span>Made with ❤️ in Rwanda</span>
                <span>🇷🇼</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default RwandaEventPlatform;