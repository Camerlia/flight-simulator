"use client"

import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Mail, Phone, MessageSquare, User, Plane, Menu, X } from 'lucide-react';

export default function FvrgoSims() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [bookingForm, setBookingForm] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    duration: '1'
  });

  const [hostForm, setHostForm] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    equipment: '',
    experience: ''
  });

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    const subject = 'Flight Simulator Booking Request';
    const body = `Hi I'd like to book a simulator session:

Name: ${bookingForm.name}
Email: ${bookingForm.email}
Phone: ${bookingForm.phone}
Date: ${bookingForm.date}
Time: ${bookingForm.time}
Duration: ${bookingForm.duration} hour(s)

Please confirm my booking.

Thank you`;
    
    const mailtoUrl = `mailto:Fvrgo@yahoo.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;
  };

  const handleHostSubmit = (e) => {
    e.preventDefault();
    const subject = 'Simulator Host Application';
    const body = `Hi I'm interested in hosting a simulator rig:

Name: ${hostForm.name}
Email: ${hostForm.email}
Phone: ${hostForm.phone}
Location: ${hostForm.location}

Equipment Details:
${hostForm.equipment}

Experience & Background:
${hostForm.experience}

I look forward to hearing from you.

Thank you`;
    
    const mailtoUrl = `mailto:Fvrgo@yahoo.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;
  };

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/95 backdrop-blur-sm z-50 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold">fvrgo sims</div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex gap-8">
              <button onClick={() => scrollToSection('home')} className="hover:text-cyan-400 transition-colors">Home</button>
              <button onClick={() => scrollToSection('about')} className="hover:text-cyan-400 transition-colors">About</button>
              <button onClick={() => scrollToSection('contact')} className="hover:text-cyan-400 transition-colors">Contact</button>
              <button onClick={() => scrollToSection('hosting')} className="hover:text-cyan-400 transition-colors">Hosting</button>
            </div>

            
            <button 
              onClick={() => setMobileMenuOpen(mobileMenuOpen)}
              className="md:hidden p-2 hover:bg-slate-800 rounded-lg transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-2">
              <button 
                onClick={() => scrollToSection('home')} 
                className="block w-full text-left px-4 py-3 hover:bg-slate-800 rounded-lg transition-colors"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')} 
                className="block w-full text-left px-4 py-3 hover:bg-slate-800 rounded-lg transition-colors"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="block w-full text-left px-4 py-3 hover:bg-slate-800 rounded-lg transition-colors"
              >
                Contact
              </button>
              <button 
                onClick={() => scrollToSection('hosting')} 
                className="block w-full text-left px-4 py-3 hover:bg-slate-800 rounded-lg transition-colors"
              >
                Hosting
              </button>
            </div>
          )}
        </div>
      </nav>

     
      <section id="home" className="min-h-screen bg-gradient-to-b from-slate-900 to-black pt-20">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-6xl font-bold mb-6 leading-tight">
                Experience flight<br />Anywhere.
              </h1>
              <button 
                onClick={() => scrollToSection('booking')}
                className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 mb-8"
              >
                Start Playing
              </button>
              <p className="text-gray-400 text-lg">
                Find and book simulator experiences near you <br/> or host your own and bring aviation closer to your city.
              </p>
            </div>
            <div className="relative">
              <div className="bg-orange-500 rounded-3xl p-12 transform rotate-2 hover:rotate-0 transition-transform">
                <div className="flex flex-col items-center gap-8">
                  <div className="w-48 h-32 bg-slate-800 rounded-lg flex items-center justify-center">
                    <Plane className="w-16 h-16 text-orange-500" />
                  </div>
                  <div className="w-40 h-40 bg-slate-900 rounded-2xl"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      
      <section id="about" className="min-h-screen bg-slate-900/50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-bold  text-center">
          How It Works
          </h2>
          <p className={'mt-4 mb-12 text-xl text-center'}>Your ticket to flight — in three steps.</p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 hover:border-cyan-500 transition-all">
              <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mb-6">
                <Plane className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Find a simulator near you.</h3>
              <p className="text-gray-400 leading-relaxed">
                Explore our network of certified setups in your city.
              </p>
            </div>
            <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 hover:border-orange-500 transition-all">
              <div className="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center mb-6">
                <Calendar className="w-8 h-8 text-orange-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Book your session.</h3>
              <p className="text-gray-400 leading-relaxed">
                Choose your time, pay securely, and lock in your seat.
              </p>
            </div>
            <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 hover:border-purple-500 transition-all">
              <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mb-6">
                <MapPin className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Fly and feel it.</h3>
              <p className="text-gray-400 leading-relaxed">
             Step in, take control, and experience flight like never before.
              </p>
            </div>
          </div>
        </div>
      </section>


      

      
      <section id="booking" className="min-h-screen bg-black py-20">
        <div className="max-w-4xl mx-auto px-6">
        <p className={'text-center text-base mb-4'}>Ready to fly?
</p>
          <h2 className="text-5xl font-bold mb-6 text-center">Book Your Session</h2>
          <p className="text-gray-400 text-center mb-12 text-lg">
            Book your session now or apply to host a simulator in your city.
Follow us on Instagram @fvrgoaviation and TikTok @fvrgo for live updates.
          </p>
          <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800">
            <form onSubmit={handleBookingSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-300">Full Name</label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 w-5 h-5 text-gray-500" />
                    <input
                      type="text"
                      required
                      value={bookingForm.name}
                      onChange={(e) => setBookingForm({...bookingForm, name: e.target.value})}
                      className="w-full bg-slate-800 border border-slate-700 rounded-lg px-10 py-3 focus:outline-none focus:border-cyan-500 transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-300">Email</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-500" />
                    <input
                      type="email"
                      required
                      value={bookingForm.email}
                      onChange={(e) => setBookingForm({...bookingForm, email: e.target.value})}
                      className="w-full bg-slate-800 border border-slate-700 rounded-lg px-10 py-3 focus:outline-none focus:border-cyan-500 transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-300">Phone Number</label>
                <div className="relative">
                  <Phone className="absolute left-3 top-3 w-5 h-5 text-gray-500" />
                  <input
                    type="tel"
                    required
                    value={bookingForm.phone}
                    onChange={(e) => setBookingForm({...bookingForm, phone: e.target.value})}
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-10 py-3 focus:outline-none focus:border-cyan-500 transition-colors"
                    placeholder="08012345678"
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-300">Preferred Date</label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-3 w-5 h-5 text-gray-500" />
                    <input
                      type="date"
                      required
                      value={bookingForm.date}
                      onChange={(e) => setBookingForm({...bookingForm, date: e.target.value})}
                      className="w-full bg-slate-800 border border-slate-700 rounded-lg px-10 py-3 focus:outline-none focus:border-cyan-500 transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-300">Preferred Time</label>
                  <div className="relative">
                    <Clock className="absolute left-3 top-3 w-5 h-5 text-gray-500" />
                    <input
                      type="time"
                      required
                      value={bookingForm.time}
                      onChange={(e) => setBookingForm({...bookingForm, time: e.target.value})}
                      className="w-full bg-slate-800 border border-slate-700 rounded-lg px-10 py-3 focus:outline-none focus:border-cyan-500 transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-300">Duration (hours)</label>
                  <select
                    value={bookingForm.duration}
                    onChange={(e) => setBookingForm({...bookingForm, duration: e.target.value})}
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 focus:outline-none focus:border-cyan-500 transition-colors"
                  >
                    <option value="1">1 hour</option>
                    <option value="2">2 hours</option>
                    <option value="3">3 hours</option>
                    <option value="4">4 hours</option>
                  </select>
                </div>
              </div>
              <button
                type="submit"
                className="w-full bg-cyan-500 hover:bg-cyan-600 text-white py-4 rounded-lg font-bold text-lg transition-all transform hover:scale-105"
              >
                Book Now
              </button>
            </form>
          </div>
        </div>
      </section>{/* Vision Section */}
      <section id="vision" className="min-h-screen bg-gradient-to-b from-black to-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6">Building the future of African aviation together.</h2>
            <p className="text-gray-400 text-xl max-w-3xl mx-auto leading-relaxed">
              We believe the next generation of pilots, engineers, and aviation leaders will rise from communities that had the chance to touch flight early.
              Every simulator we launch brings that dream closer.
            </p>
          </div>

          
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-cyan-900/30 to-orange-900/30 p-12 rounded-3xl border border-cyan-500/30 hover:border-cyan-500/60 transition-all">
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-orange-500 rounded-full flex items-center justify-center mb-8">
                  <Plane className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-4xl font-bold mb-6">Every flight funds a future.</h3>
                <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-2xl">
                  Through the fvrgo foundation, part of every booking supports programs helping out-of-school children learn, build, and dream again.
                  When you fly with us, you&apos;re helping someone else take off too.
                </p>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="bg-gradient-to-r from-cyan-500 to-orange-500 hover:from-cyan-600 hover:to-orange-600 text-white px-10 py-4 rounded-lg font-bold text-lg transition-all transform hover:scale-105"
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      



      
      <section id="hosting" className="min-h-screen bg-slate-900/50 py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-5xl font-bold mb-6 text-center">Become a Host</h2>
          
          <p className="text-gray-400 text-center mb-12 text-lg">
            Join the fvrgo network and earn from your simulator.
We’ll help you set up, list, and manage bookings while you focus on what you love — flying.

          </p>
          <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800">
            <form onSubmit={handleHostSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-300">Full Name</label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 w-5 h-5 text-gray-500" />
                    <input
                      type="text"
                      required
                      value={hostForm.name}
                      onChange={(e) => setHostForm({...hostForm, name: e.target.value})}
                      className="w-full bg-slate-800 border border-slate-700 rounded-lg px-10 py-3 focus:outline-none focus:border-orange-500 transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-300">Email</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-500" />
                    <input
                      type="email"
                      required
                      value={hostForm.email}
                      onChange={(e) => setHostForm({...hostForm, email: e.target.value})}
                      className="w-full bg-slate-800 border border-slate-700 rounded-lg px-10 py-3 focus:outline-none focus:border-orange-500 transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-300">Phone Number</label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-3 w-5 h-5 text-gray-500" />
                    <input
                      type="tel"
                      required
                      value={hostForm.phone}
                      onChange={(e) => setHostForm({...hostForm, phone: e.target.value})}
                      className="w-full bg-slate-800 border border-slate-700 rounded-lg px-10 py-3 focus:outline-none focus:border-orange-500 transition-colors"
                      placeholder="08012345678"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-300">Location</label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 w-5 h-5 text-gray-500" />
                    <input
                      type="text"
                      required
                      value={hostForm.location}
                      onChange={(e) => setHostForm({...hostForm, location: e.target.value})}
                      className="w-full bg-slate-800 border border-slate-700 rounded-lg px-10 py-3 focus:outline-none focus:border-orange-500 transition-colors"
                      placeholder="Lagos, Nigeria"
                    />
                  </div>
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-300">Equipment Details</label>
                <textarea
                  required
                  value={hostForm.equipment}
                  onChange={(e) => setHostForm({...hostForm, equipment: e.target.value})}
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 focus:outline-none focus:border-orange-500 transition-colors h-24"
                  placeholder="Describe your simulator setup (e.g., hardware, software, peripherals)"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-300">Experience & Background</label>
                <textarea
                  required
                  value={hostForm.experience}
                  onChange={(e) => setHostForm({...hostForm, experience: e.target.value})}
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 focus:outline-none focus:border-orange-500 transition-colors h-24"
                  placeholder="Tell us about your experience with flight simulators"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-lg font-bold text-lg transition-all transform hover:scale-105"
              >
                List Your Simulator

              </button>
            </form>
          </div>
        </div>
      </section>

      
      <section id="contact" className="min-h-screen bg-black py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-5xl font-bold mb-6 text-center">Get In Touch</h2>
          <p className="text-gray-400 text-center mb-12 text-lg">
            Have questions? We&apos;d love to hear from you. Reach out to us through any of these channels.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <a href="https://wa.me/2348066727363" target="_blank" rel="noopener noreferrer" className="bg-slate-900 p-8 rounded-2xl border border-slate-800 hover:border-green-500 transition-all group">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mb-6 group-hover:bg-green-500/30 transition-colors">
                <MessageSquare className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-2xl font-bold mb-2">WhatsApp</h3>
              <p className="text-gray-400">08066727363</p>
            </a>
            <a href="mailto:Fvrgo@yahoo.com" className="bg-slate-900 p-8 rounded-2xl border border-slate-800 hover:border-cyan-500 transition-all group">
              <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mb-6 group-hover:bg-cyan-500/30 transition-colors">
                <Mail className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Email</h3>
              <p className="text-gray-400">Fvrgo@yahoo.com</p>
            </a>
            <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800">
              <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mb-6">
                <User className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Contact Person</h3>
              <p className="text-gray-400">Farouqgambo</p>
            </div>
            <a href="https://instagram.com/fvrgosims" target="_blank" rel="noopener noreferrer" className="bg-slate-900 p-8 rounded-2xl border border-slate-800 hover:border-pink-500 transition-all group">
              <div className="w-16 h-16 bg-pink-500/20 rounded-full flex items-center justify-center mb-6 group-hover:bg-pink-500/30 transition-colors">
                <MessageSquare className="w-8 h-8 text-pink-400" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Instagram</h3>
              <p className="text-gray-400">@fvrgosims</p>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-800 py-8">
        <div className="max-w-7xl mx-auto px-6 text-center text-gray-400">
          <p>&copy; 2024 fvrgo sims. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}