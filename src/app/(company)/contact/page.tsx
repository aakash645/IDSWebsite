'use client';

import { useState, useRef } from 'react';
import { FadeIn } from '@/components/ui';
import { CTASection } from '@/components/layout';
import { Mail, Phone, MapPin, Send, HelpCircle, ChevronDown, Clock, MessageCircle, Star, Navigation } from 'lucide-react';
import type { FAQItemProps } from '@/types';

const FAQItem = ({ question, answer }: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-border pb-4">
      <button 
        className="w-full flex justify-between items-center text-left py-2 hover:text-primary transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-bold text-lg text-foreground">{question}</span>
        <ChevronDown className={`transition-transform duration-300 text-foreground ${isOpen ? 'rotate-180' : ''}`} size={20} />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-40 opacity-100 mt-2' : 'max-h-0 opacity-0'}`}>
        <p className="text-foreground-secondary text-sm leading-relaxed">{answer}</p>
      </div>
    </div>
  );
};

// Office Locations Data with coordinates for map
const officeLocations = [
  { 
    name: "ID SmartTech HQ",
    address: "B-45, Sector 63, Noida, Uttar Pradesh 201301",
    phone: "+91 120 4567890",
    hours: "9:00 AM - 6:00 PM",
    status: "open",
    rating: 4.8,
    reviews: 124,
    lat: 28.6279,
    lng: 77.3749,
    mapQuery: "Sector 63, Noida, Uttar Pradesh"
  },
  { 
    name: "Delhi Sales Office",
    address: "Connaught Place, New Delhi 110001",
    phone: "+91 11 2345 6789",
    hours: "10:00 AM - 7:00 PM",
    status: "open",
    rating: 4.6,
    reviews: 89,
    lat: 28.6315,
    lng: 77.2167,
    mapQuery: "Connaught Place, New Delhi"
  },
  { 
    name: "Mumbai Branch",
    address: "Bandra Kurla Complex, Mumbai 400051",
    phone: "+91 22 6789 0123",
    hours: "9:00 AM - 6:00 PM",
    status: "open",
    rating: 4.7,
    reviews: 67,
    lat: 19.0596,
    lng: 72.8656,
    mapQuery: "Bandra Kurla Complex, Mumbai"
  },
  { 
    name: "Bangalore Tech Center",
    address: "Whitefield, Bangalore 560066",
    phone: "+91 80 4567 8901",
    hours: "9:30 AM - 6:30 PM",
    status: "closed",
    rating: 4.5,
    reviews: 45,
    lat: 12.9698,
    lng: 77.7500,
    mapQuery: "Whitefield, Bangalore"
  }
];

export default function ContactPage() {
  const [selectedOffice, setSelectedOffice] = useState(0);
  const mapRef = useRef<HTMLIFrameElement>(null);

  // Get the map embed URL for the selected office
  const getMapEmbedUrl = (office: typeof officeLocations[0]) => {
    return `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50000!2d${office.lng}!3d${office.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s${encodeURIComponent(office.mapQuery)}!5e0!3m2!1sen!2sin!4v1640000000000!5m2!1sen!2sin`;
  };

  return (
    <div className="pt-24 min-h-screen bg-background text-foreground">
      
      {/* Map Section First - Hero Style */}
      <section className="relative py-20 md:py-28 bg-[#e8f4fa]">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-border mb-6">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-foreground font-semibold text-sm tracking-widest uppercase">Our Locations</span>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight">
                Find an ID SmartTech<br/>
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#9cd0ec] via-[#fed356] to-[#ee6d31]">Office Near You</span>
              </h1>
              <p className="text-xl text-foreground-secondary max-w-2xl mx-auto">
                Visit our offices across India for consultations, demos, and support. Our teams are ready to help you find the right solutions.
              </p>
            </div>
          </FadeIn>
          
          {/* Map with Location Markers */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left - Office List */}
            <FadeIn>
              <div className="bg-white rounded-3xl shadow-xl p-6 border border-border h-full">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-foreground-secondary text-sm font-medium">{officeLocations.length} VERIFIED LOCATIONS</span>
                </div>
                
                <div className="space-y-3">
                  {officeLocations.map((office, index) => (
                    <div 
                      key={index}
                      onClick={() => setSelectedOffice(index)}
                      className={`p-4 rounded-2xl border-2 cursor-pointer transition-all ${
                        selectedOffice === index 
                          ? 'border-primary bg-primary/5 shadow-lg scale-[1.02]' 
                          : 'border-border hover:border-primary/30 bg-white hover:shadow-md'
                      }`}
                    >
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-bold text-foreground">{office.name}</h3>
                        <span className={`text-xs font-bold uppercase px-2 py-0.5 rounded ${
                          office.status === 'open' 
                            ? 'text-green-600 bg-green-50' 
                            : 'text-red-600 bg-red-50'
                        }`}>
                          {office.status === 'open' ? 'OPEN' : 'CLOSED'}
                        </span>
                      </div>
                      <p className="text-sm text-foreground-secondary flex items-start gap-2 mb-2">
                        <MapPin size={14} className="text-primary mt-0.5 flex-shrink-0" /> 
                        <span className="line-clamp-2">{office.address}</span>
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} size={12} className={i < Math.floor(office.rating) ? 'text-[#fed356] fill-[#fed356]' : 'text-gray-300'} />
                          ))}
                          <span className="text-xs text-foreground-secondary ml-1">{office.rating}</span>
                        </div>
                        {selectedOffice === index && (
                          <span className="text-xs text-primary font-semibold flex items-center gap-1">
                            <Navigation size={12} /> Selected
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>

            {/* Right - Interactive Map */}
            <FadeIn direction="left" className="lg:col-span-2">
              <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-border relative h-[500px] lg:h-full min-h-[500px]">
                {/* Map Badge */}
                <div className="absolute top-4 left-4 z-20 flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-sm border border-border shadow-lg">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-xs font-bold text-foreground">LIVE MAP VIEW</span>
                </div>

                {/* Location Markers Overlay */}
                <div className="absolute inset-0 z-10 pointer-events-none">
                  {/* Dynamic Location Marker */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-full pointer-events-auto">
                    <div className="relative">
                      {/* Pulse Effect */}
                      <div className="absolute inset-0 bg-primary/30 rounded-full animate-ping" style={{ width: '48px', height: '48px', top: '-8px', left: '-8px' }}></div>
                      {/* Marker Pin */}
                      <div className="relative w-8 h-8 bg-primary rounded-full flex items-center justify-center shadow-xl border-4 border-white">
                        <MapPin size={16} className="text-white" />
                      </div>
                      {/* Marker Tip */}
                      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[8px] border-r-[8px] border-t-[12px] border-l-transparent border-r-transparent border-t-primary"></div>
                    </div>
                  </div>
                </div>
                
                {/* Google Maps Embed */}
                <iframe 
                  ref={mapRef}
                  key={selectedOffice}
                  src={getMapEmbedUrl(officeLocations[selectedOffice])}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0"
                />
                
                {/* Selected Office Info Card */}
                <div className="absolute bottom-4 right-4 left-4 md:left-auto md:w-96 z-20">
                  <div className="bg-white rounded-2xl shadow-2xl p-5 border border-border">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h4 className="font-bold text-lg text-foreground mb-1">{officeLocations[selectedOffice].name}</h4>
                        <p className="text-xs text-primary font-semibold uppercase flex items-center gap-1">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                          SELECTED LOCATION
                        </p>
                      </div>
                      <div className={`text-xs font-bold uppercase px-3 py-1 rounded-full ${
                        officeLocations[selectedOffice].status === 'open' 
                          ? 'text-green-700 bg-green-100' 
                          : 'text-red-700 bg-red-100'
                      }`}>
                        {officeLocations[selectedOffice].status === 'open' ? '● Open Now' : '● Closed'}
                      </div>
                    </div>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-start gap-3">
                        <MapPin size={16} className="text-primary mt-0.5 flex-shrink-0" />
                        <p className="text-sm text-foreground">{officeLocations[selectedOffice].address}</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <Phone size={16} className="text-primary flex-shrink-0" />
                        <p className="text-sm text-foreground">{officeLocations[selectedOffice].phone}</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <Clock size={16} className="text-primary flex-shrink-0" />
                        <p className="text-sm text-foreground">{officeLocations[selectedOffice].hours}</p>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <a 
                        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(officeLocations[selectedOffice].address)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-primary hover:bg-primary/90 text-white font-bold py-3 rounded-xl transition-all flex items-center justify-center gap-2"
                      >
                        <Navigation size={16} /> Get Directions
                      </a>
                      <a 
                        href={`tel:${officeLocations[selectedOffice].phone.replace(/\s/g, '')}`}
                        className="w-12 h-12 bg-[#fed356] hover:bg-[#fed356]/90 text-foreground font-bold rounded-xl transition-all flex items-center justify-center"
                      >
                        <Phone size={18} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="relative py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-6">
                <div className="w-2 h-2 rounded-full bg-accent" />
                <span className="text-foreground font-semibold text-sm tracking-widest uppercase">Get In Touch</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 leading-tight">
                Let&apos;s Build the <br/>
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#9cd0ec] via-[#fed356] to-[#ee6d31]">Future Together</span>
              </h2>
              <p className="text-xl text-foreground-secondary max-w-xl mb-12 leading-relaxed">
                Whether you have a question about features, pricing, need a demo, or anything else, our team is ready to answer all your questions.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-card border border-border p-6 rounded-2xl hover:border-primary/50 transition-colors group shadow-sm">
                  <Mail className="text-primary mb-4" size={24} />
                  <h3 className="font-bold text-lg mb-1 text-foreground">Sales Inquiry</h3>
                  <p className="text-sm text-foreground-secondary mb-2">For enterprise licensing & partnerships</p>
                  <a href="mailto:sales@idssmarttech.com" className="text-primary text-sm font-bold hover:underline">sales@idssmarttech.com</a>
                </div>
                <div className="bg-card border border-border p-6 rounded-2xl hover:border-accent/50 transition-colors group shadow-sm">
                  <MessageCircle className="text-accent mb-4" size={24} />
                  <h3 className="font-bold text-lg mb-1 text-foreground">Technical Support</h3>
                  <p className="text-sm text-foreground-secondary mb-2">For existing clients & troubleshooting</p>
                  <a href="mailto:support@idssmarttech.com" className="text-accent text-sm font-bold hover:underline">support@idssmarttech.com</a>
                </div>
              </div>
            </FadeIn>
            
            <FadeIn direction="left">
              <div className="bg-card border border-border rounded-3xl p-8 md:p-12 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2"></div>
                
                <h3 className="text-2xl font-bold mb-6 relative z-10 text-foreground">Send us a Message</h3>
                <form className="space-y-6 relative z-10">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-foreground-secondary uppercase tracking-wide">First Name</label>
                      <input type="text" className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" placeholder="Jane" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-foreground-secondary uppercase tracking-wide">Last Name</label>
                      <input type="text" className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" placeholder="Doe" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-foreground-secondary uppercase tracking-wide">Email Address</label>
                    <input type="email" className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" placeholder="jane@company.com" />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-foreground-secondary uppercase tracking-wide">Phone Number</label>
                    <input type="tel" className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" placeholder="+91 98765 43210" />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-foreground-secondary uppercase tracking-wide">Message</label>
                    <textarea rows={4} className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none" placeholder="Tell us about your project..."></textarea>
                  </div>

                  <button type="button" className="w-full bg-gradient-to-r from-[#9cd0ec] via-[#fed356] to-[#ee6d31] hover:opacity-90 text-white font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2 transform active:scale-95 shadow-lg">
                    Send Message <Send size={18} />
                  </button>
                </form>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 container mx-auto px-4 border-t border-border">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1">
            <div className="sticky top-32">
              <div className="inline-flex items-center gap-2 text-[#fed356] font-bold mb-4">
                <HelpCircle size={20} /> <span>FAQ</span>
              </div>
              <h2 className="text-3xl font-bold mb-6 text-foreground">Frequently Asked Questions</h2>
              <p className="text-foreground-secondary mb-8">
                Can&apos;t find what you&apos;re looking for? Reach out to our support team directly.
              </p>
              <a href="#" className="text-foreground border-b border-[#fed356] hover:text-primary transition-colors pb-1 font-medium">Visit Help Center</a>
            </div>
          </div>
          <div className="lg:col-span-2 space-y-2">
            {[
              { q: "What is your typical response time?", a: "For enterprise clients with SLA, we guarantee a response within 1 hour. For standard inquiries, we aim to respond within 24 hours." },
              { q: "Do you offer on-site consultations?", a: "Yes, our field engineers and solution architects can visit your facility for a comprehensive security audit and infrastructure assessment." },
              { q: "How do I report a security vulnerability?", a: "We take security seriously. Please email security@idssmarttech.com with PGP encryption. We offer a bug bounty program for valid reports." },
              { q: "Can I partner with IDS?", a: "Absolutely. We have a dedicated reseller and system integrator program. Please contact our sales team to discuss partnership opportunities." },
            ].map((item, i) => (
              <FadeIn key={i} delay={i*50}>
                <FAQItem question={item.q} answer={item.a} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </div>
  );
}
