import Link from 'next/link';
import { Twitter, Linkedin, Facebook, Instagram, Mail, MapPin, PhoneCall } from 'lucide-react';
import { Logo } from '@/components/ui';

export const Footer = () => {
  return (
    <footer className="bg-[#e8f4fa] text-foreground pt-16 pb-10 relative overflow-hidden">
      {/* Background Text Overlay */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none select-none overflow-hidden opacity-[0.04]">
        <h1 className="text-[8vw] font-bold text-foreground whitespace-nowrap leading-none tracking-tighter text-center">IDS ID PRIVATE LIMITED</h1>
      </div>

      {/* Animated Divider Line */}
      <div className="absolute top-0 left-0 w-full h-[4px] overflow-hidden">
        <div className="absolute inset-0 w-[300%] animate-move-divider flex">
          <div className="w-1/3 flex">
            <div className="h-full flex-1 bg-ids-blue"></div>
            <div className="h-full flex-1 bg-ids-orange"></div>
            <div className="h-full flex-1 bg-ids-yellow"></div>
          </div>
          <div className="w-1/3 flex">
            <div className="h-full flex-1 bg-ids-blue"></div>
            <div className="h-full flex-1 bg-ids-orange"></div>
            <div className="h-full flex-1 bg-ids-yellow"></div>
          </div>
          <div className="w-1/3 flex">
            <div className="h-full flex-1 bg-ids-blue"></div>
            <div className="h-full flex-1 bg-ids-orange"></div>
            <div className="h-full flex-1 bg-ids-yellow"></div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="flex justify-center px-4 pt-8">
        <div className="w-full max-w-8xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-8">
            <Logo className="scale-110 origin-left" />
            <p className="text-foreground-secondary text-sm leading-relaxed max-w-sm">
              We engineer the systems that power modern enterprises. From biometric security to autonomous logistics and digital governance, IDS SmartTech is the partner for your digital transformation.
            </p>
            <div className="flex gap-4">
              {[Twitter, Linkedin, Facebook, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-ids-yellow hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-all duration-300 text-foreground-muted border border-border">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
          
          {/* Links Column 1 */}
          <div className="lg:col-span-2">
            <h4 className="font-bold text-lg mb-6 text-foreground border-b border-primary/30 pb-2 inline-block">Services</h4>
            <ul className="space-y-4 text-foreground-secondary text-sm font-medium">
              <li><Link href="/identity-access" className="hover:text-primary hover:translate-x-1 transition-all inline-block">Identity & Access</Link></li>
              <li><Link href="/iot-robotics" className="hover:text-primary hover:translate-x-1 transition-all inline-block">IoT & Robotics</Link></li>
              <li><Link href="/software-platforms" className="hover:text-primary hover:translate-x-1 transition-all inline-block">Software Solutions</Link></li>
              <li><Link href="/governance" className="hover:text-primary hover:translate-x-1 transition-all inline-block">E-Governance</Link></li>
              <li><Link href="/hologram-printing" className="hover:text-primary hover:translate-x-1 transition-all inline-block">Digital Services</Link></li>
            </ul>
          </div>

          {/* Links Column 2 */}
          <div className="lg:col-span-2">
            <h4 className="font-bold text-lg mb-6 text-foreground border-b border-highlight/30 pb-2 inline-block">Company</h4>
            <ul className="space-y-4 text-foreground-secondary text-sm font-medium">
              <li><Link href="/company" className="hover:text-highlight hover:translate-x-1 transition-all inline-block">About Us</Link></li>
              <li><Link href="/team" className="hover:text-highlight hover:translate-x-1 transition-all inline-block">Our Team</Link></li>
              <li><Link href="/team" className="hover:text-highlight hover:translate-x-1 transition-all inline-block">Careers</Link></li>
              <li><Link href="/company" className="hover:text-highlight hover:translate-x-1 transition-all inline-block">Partners</Link></li>
              <li><Link href="/contact" className="hover:text-highlight hover:translate-x-1 transition-all inline-block">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="lg:col-span-4">
            <h4 className="font-bold text-lg mb-6 text-foreground border-b border-accent/30 pb-2 inline-block">Get in Touch</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-secondary hover:bg-card-hover transition-colors border border-border group cursor-pointer">
                <div className="bg-primary/10 p-2.5 rounded-xl text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors"><Mail size={20} /></div>
                <div>
                  <p className="text-xs text-foreground-muted font-bold uppercase mb-1">Email us</p>
                  <p className="text-foreground font-medium group-hover:text-primary transition-colors"> <a href='mailto:akhilesh@idsmartindia.com'>akhilesh@idsmartindia.com</a></p>
                </div>
              </div>

              {/* Address Section */}
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-secondary hover:bg-card-hover transition-colors border border-border group cursor-pointer">
                <div className="bg-accent/10 p-2.5 rounded-xl text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors"><MapPin size={20} /></div>
                <div>
                  <p className="text-xs text-foreground-muted font-bold uppercase mb-1">Address</p>
                  <p className="text-foreground font-medium text-sm leading-relaxed">
                    <a href='https://maps.app.goo.gl/TZzjBCDZwd4fEJ3o9'>BIZHUB, A101, Pimpri Chowk, Pune, Maharashtra - 411018</a>                  </p>
                </div>
              </div>

              {/* Contact Section */}
              <div className="flex flex-col gap-4">
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-secondary hover:bg-card-hover transition-colors border border-border group cursor-pointer">
                  <div className="bg-highlight/10 p-2.5 rounded-xl text-highlight group-hover:bg-highlight group-hover:text-highlight-foreground transition-colors"><PhoneCall size={20} /></div>
                  <div>
                    <p className="text-xs text-foreground-muted font-bold uppercase mb-1">Call us</p>
                    <p className="text-foreground font-medium text-sm leading-relaxed">
                      <a href='tel:+91 72766 80893'>+91 72766 80893</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-foreground-muted">© {new Date().getFullYear()} IDS SmartTech. All rights reserved.</p>
          <div className="flex gap-8 text-xs font-semibold text-foreground-muted">
            <Link href="#" className="hover:text-foreground transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-foreground transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-foreground transition-colors">Cookie Settings</Link>
          </div>
        </div>
        </div>
      </div>
    </footer>
  );
};
