'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown, ChevronRight, Shield, Search } from 'lucide-react';
import { MENU_ITEMS } from '@/constants';
import { Logo } from '@/components/ui';
import { SearchModal } from './SearchModal';
import type { MenuItem } from '@/types';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const pathname = usePathname();
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  // Handle click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleMenuClick = (e: React.MouseEvent, item: MenuItem) => {
    if (item.megaMenu) {
      e.preventDefault();
      setActiveDropdown(activeDropdown === item.name ? null : item.name);
    } else {
      setActiveDropdown(null);
    }
  };

  const closeMenu = () => {
    setActiveDropdown(null);
    setMobileMenuOpen(false);
  };

  const activeMenuItem = MENU_ITEMS.find(item => item.name === activeDropdown);

  return (
    <>
      <nav ref={navRef} className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 flex justify-center pt-4 md:pt-6 px-4">
        <div 
          className={`
            relative flex items-center justify-between 
            w-full max-w-8xl rounded-xl
            px-6 py-3 md:py-4
            bg-white/90 backdrop-blur-md border border-border shadow-lg
            transition-all duration-300
          `}
        >
          {/* Logo */}
          <Link href="/" className="z-50 relative flex-shrink-0" onClick={closeMenu}>
            <Logo />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-1">
            {MENU_ITEMS.map((item) => (
              <div key={item.name} className="relative px-3 py-2">
                <Link 
                  href={item.path}
                  onClick={(e) => handleMenuClick(e, item)}
                  className={`text-base font-medium transition-colors flex items-center gap-1 ${activeDropdown === item.name ? 'text-primary' : 'text-foreground hover:text-primary'}`}
                >
                  {item.name}
                  {item.megaMenu && <ChevronDown size={14} className={`transition-transform duration-300 ${activeDropdown === item.name ? 'rotate-180' : ''}`} />}
                </Link>
                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-highlight via-accent to-primary transition-transform origin-left duration-300 ${activeDropdown === item.name ? 'scale-x-100' : 'scale-x-0'}`}></span>
              </div>
            ))}
          </div>

          {/* Search Icon */}
          <div className="hidden md:flex items-center gap-4 z-50 flex-shrink-0">
            <button 
              className="w-10 h-10 rounded-full bg-secondary hover:bg-primary/10 flex items-center justify-center text-foreground-secondary hover:text-primary transition-all border border-border hover:border-primary/30"
              aria-label="Search"
              onClick={() => setIsSearchOpen(true)}
            >
              <Search size={18} />
            </button>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-foreground z-50"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Mega Menu Dropdown */}
          {activeMenuItem?.megaMenu && (
            <div className="hidden md:block absolute top-full left-0 w-full mt-2 animate-fade-in-up z-40 origin-top">
              <div className="bg-card border border-border rounded-2xl shadow-2xl overflow-hidden p-8 mx-0 overflow-y-auto">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -mt-2 w-4 h-4 bg-card border-l border-t border-border rotate-45"></div>
                <div className="grid grid-cols-4 gap-8 relative z-10">
                  {activeMenuItem.megaMenu.map((category, idx) => (
                    <div key={idx} className="space-y-4">
                      <h4 className="text-primary font-bold text-base uppercase tracking-wider border-b border-border pb-2">{category.title}</h4>
                      <ul className="space-y-2">
                        {category.items.map((subItem, subIdx) => (
                          <li key={subIdx}>
                            <Link 
                              href={subItem.path || activeMenuItem.path} 
                              className="text-foreground-secondary hover:text-foreground text-base hover:translate-x-1 transition-all flex items-center gap-2 group py-1"
                              onClick={closeMenu}
                            >
                              <span className="w-1 h-1 rounded-full bg-accent opacity-0 group-hover:opacity-100 transition-opacity"></span>
                              {subItem.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                
                {/* Bottom CTA in Mega Menu */}
                <div className="mt-8 pt-6 border-t border-border flex justify-between items-center bg-secondary -mx-8 -mb-8 px-8 py-4">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                      <Shield size={20} />
                    </div>
                    <div>
                      <p className="text-foreground font-bold text-sm">Need a custom security audit?</p>
                      <p className="text-foreground-secondary text-xs">Our experts can design a tailored solution for your facility.</p>
                    </div>
                  </div>
                  <Link href="/contact" onClick={closeMenu} className="text-highlight font-bold text-sm flex items-center gap-1 hover:gap-2 transition-all">
                    Get in touch <ChevronRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          )}

          {/* Mobile Menu Overlay */}
          <div className={`
            md:hidden absolute top-full left-0 right-0 mt-2 p-4 bg-card border border-border rounded-2xl shadow-xl
            flex flex-col gap-2 transform transition-all duration-300 origin-top
            ${mobileMenuOpen ? 'opacity-100 scale-y-100 translate-y-0' : 'opacity-0 scale-y-0 -translate-y-4 pointer-events-none'}
          `}>
            <div className="max-h-[70vh] overflow-y-auto">
              {MENU_ITEMS.map((item) => (
                <div key={item.name} className="border-b border-border last:border-0">
                  <div className="flex justify-between items-center">
                    <Link 
                      href={item.path}
                      className="p-3 text-foreground hover:text-primary font-medium transition-colors block flex-grow"
                      onClick={(e) => {
                        if (item.megaMenu) {
                          e.preventDefault();
                          setActiveDropdown(activeDropdown === item.name ? null : item.name);
                        } else {
                          setMobileMenuOpen(false);
                        }
                      }}
                    >
                      {item.name}
                    </Link>
                    {item.megaMenu && (
                      <button onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)} className="p-3 text-foreground-secondary">
                        <ChevronDown size={16} className={`transition-transform ${activeDropdown === item.name ? 'rotate-180' : ''}`} />
                      </button>
                    )}
                  </div>
                  
                  {/* Mobile Submenu */}
                  {item.megaMenu && activeDropdown === item.name && (
                    <div className="bg-secondary p-4 space-y-6 animate-fade-in-up rounded-lg">
                      {item.megaMenu.map((cat, idx) => (
                        <div key={idx}>
                          <h5 className="text-primary text-xs font-bold uppercase mb-2">{cat.title}</h5>
                          <ul className="space-y-2 border-l border-border pl-3">
                            {cat.items.map((sub, sIdx) => (
                              <li key={sIdx}>
                                <Link href={sub.path || item.path} className="text-foreground-secondary text-sm block py-2 active:text-foreground" onClick={() => setMobileMenuOpen(false)}>
                                  {sub.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="h-px bg-border my-2"></div>
            <button 
              className="w-full py-3 rounded-lg bg-secondary hover:bg-primary/10 flex items-center justify-center text-foreground-secondary hover:text-primary transition-all gap-2"
              onClick={() => {
                setMobileMenuOpen(false);
                setIsSearchOpen(true);
              }}
            >
              <Search size={18} />
              <span className="font-medium">Search</span>
            </button>
          </div>
        </div>
      </nav>

      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
};
