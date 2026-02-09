'use client';

import { useState, useEffect, useRef } from 'react';
import { X, Search, Hash } from 'lucide-react';
import { createPortal } from 'react-dom';
import Link from 'next/link';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SearchModal = ({ isOpen, onClose }: SearchModalProps) => {
  const [query, setQuery] = useState('');
  const [mounted, setMounted] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; }
  }, [isOpen]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  if (!mounted || !isOpen) return null;

  const quickLinks = [
    { name: 'Identity & Access', path: '/identity-access' },
    { name: 'IoT Solutions', path: '/iot-robotics' },
    { name: 'Careers', path: '/company' },
    { name: 'Contact Support', path: '/contact' },
    { name: 'Software Platforms', path: '/software-platforms' },
    { name: 'Hologram Printing', path: '/hologram-printing' },
  ];

  return createPortal(
    <div className="fixed inset-0 z-[100] flex items-start justify-center pt-24 px-4 font-sans">
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-md transition-opacity duration-300" 
        onClick={onClose}
      ></div>
      
      <div className="relative w-full max-w-2xl bg-[#0f172a] border border-white/10 rounded-xl shadow-2xl overflow-hidden animate-fade-in-up transform transition-all ring-1 ring-white/10">
        <div className="flex items-center px-4 py-4 border-b border-white/10">
          <Search className="text-gray-400 w-5 h-5 mr-3" />
          <input 
            ref={inputRef}
            type="text" 
            placeholder="Search..." 
            className="flex-1 bg-transparent text-white text-lg outline-none placeholder:text-gray-500 font-medium"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button 
            onClick={onClose} 
            className="p-1 hover:bg-white/10 rounded-md transition-colors text-gray-400 hover:text-white"
            aria-label="Close search"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <div className="px-2 py-4 min-h-[300px]">
          {query.length === 0 ? (
            <div className="p-2">
              <h4 className="px-3 py-2 text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Quick Links</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
                {quickLinks.map((link) => (
                  <Link 
                    href={link.path}
                    onClick={onClose}
                    key={link.name} 
                    className="flex items-center justify-between px-3 py-3 rounded-lg hover:bg-white/5 hover:text-ids-blue transition-colors text-gray-300 group cursor-pointer"
                  >
                    <span className="text-sm font-medium">{link.name}</span>
                  </Link>
                ))}
              </div>
            </div>
          ) : (
            <div className="p-2">
              <h4 className="px-3 py-2 text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Results</h4>
              <div className="flex flex-col gap-1">
                {quickLinks.filter(l => l.name.toLowerCase().includes(query.toLowerCase())).length > 0 ? (
                  quickLinks
                    .filter(l => l.name.toLowerCase().includes(query.toLowerCase()))
                    .map((link) => (
                      <Link 
                        href={link.path}
                        onClick={onClose}
                        key={link.name} 
                        className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-white/5 hover:text-ids-blue transition-colors text-gray-300 group cursor-pointer"
                      >
                        <Hash className="w-4 h-4 text-gray-500 group-hover:text-ids-blue" />
                        <span className="text-sm font-medium">{link.name}</span>
                      </Link>
                    ))
                ) : (
                  <div className="px-3 py-8 text-center text-gray-500 text-sm">
                    No results found for &quot;{query}&quot;
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
        
        <div className="px-4 py-3 bg-black/20 border-t border-white/5 flex items-center justify-end gap-4 text-xs text-gray-500">
          <div className="flex items-center gap-1">
            <span className="bg-white/10 px-1.5 py-0.5 rounded text-[10px] text-gray-300 border border-white/5">ESC</span>
            <span>to close</span>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};
