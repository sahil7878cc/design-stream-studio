
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and info */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="font-display text-xl font-bold">
              <span className="gradient-text">DesignStream</span>
            </Link>
            <p className="mt-4 text-muted-foreground max-w-md">
              Empowering designers to create, edit, and share stunning videos with our specialized video editing tools.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-base font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <FooterLink to="/">Home</FooterLink>
              <FooterLink to="/editor">Video Editor</FooterLink>
              <FooterLink to="/projects">Projects</FooterLink>
              <FooterLink to="/about">About</FooterLink>
              <FooterLink to="/contact">Contact</FooterLink>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-base font-medium mb-4">Contact</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>info@designstream.com</li>
              <li>+1 (555) 123-4567</li>
              <li>123 Design St, Creative City</li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="mt-12 pt-6 border-t flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} DesignStream. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Twitter
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Instagram
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Behance
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Dribbble
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const FooterLink = ({ to, children }: { to: string; children: React.ReactNode }) => {
  return (
    <li>
      <Link 
        to={to} 
        className="text-muted-foreground hover:text-primary transition-colors"
      >
        {children}
      </Link>
    </li>
  );
};

export default Footer;
