
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";
import { AuthModal } from "./AuthModal";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [authModalOpen, setAuthModalOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 munsoc-glass backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4 reveal-scale">
              <div className="relative">
                <img 
                  src="/lovable-uploads/28e42789-83a6-4394-b5a3-83204b5afde8.png" 
                  alt="MUNSOC RIT Logo" 
                  className="h-10 w-10 float transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-munsoc-teal-400 to-munsoc-gold-400 rounded-full opacity-20 blur-lg animate-pulse"></div>
              </div>
              <span className="text-xl font-bold munsoc-text-gradient">MUNSOC RIT</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="nav-link">
                Home
              </a>
              <a href="#events" className="nav-link">
                Events
              </a>
              <a href="#about" className="nav-link">
                About
              </a>
              <a href="#team" className="nav-link">
                Team
              </a>
              <a href="#calendar" className="nav-link">
                Calendar
              </a>
            </div>

            <div className="hidden md:flex items-center space-x-4">
              <ThemeToggle />
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => setAuthModalOpen(true)}
                className="border-munsoc-teal-300 text-munsoc-teal-600 hover:bg-munsoc-teal-50 dark:hover:bg-munsoc-teal-900 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                Login
              </Button>
              <Button 
                size="sm" 
                onClick={() => setAuthModalOpen(true)}
                className="bg-gradient-to-r from-munsoc-teal-600 to-munsoc-gold-600 hover:from-munsoc-teal-700 hover:to-munsoc-gold-700 text-white transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Register
              </Button>
            </div>

            {/* Mobile Hamburger Menu */}
            <div className="md:hidden flex items-center space-x-2">
              <ThemeToggle />
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-foreground/80 hover:text-primary transition-all duration-300 transform hover:scale-110 p-2 rounded-lg hover:bg-munsoc-teal-100/20"
              >
                {isOpen ? (
                  <X className="h-6 w-6 transition-transform duration-300 rotate-180" />
                ) : (
                  <Menu className="h-6 w-6 transition-transform duration-300" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="munsoc-glass border-t border-white/10 backdrop-blur-xl">
            <div className="px-4 pt-4 pb-6 space-y-3">
              <a href="#home" className="mobile-nav-link" onClick={() => setIsOpen(false)}>
                Home
              </a>
              <a href="#events" className="mobile-nav-link" onClick={() => setIsOpen(false)}>
                Events
              </a>
              <a href="#about" className="mobile-nav-link" onClick={() => setIsOpen(false)}>
                About
              </a>
              <a href="#team" className="mobile-nav-link" onClick={() => setIsOpen(false)}>
                Team
              </a>
              <a href="#calendar" className="mobile-nav-link" onClick={() => setIsOpen(false)}>
                Calendar
              </a>
              <div className="pt-4 space-y-2">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full"
                  onClick={() => {
                    setAuthModalOpen(true);
                    setIsOpen(false);
                  }}
                >
                  Login
                </Button>
                <Button 
                  size="sm" 
                  className="w-full bg-gradient-to-r from-munsoc-teal-600 to-munsoc-gold-600 text-white"
                  onClick={() => {
                    setAuthModalOpen(true);
                    setIsOpen(false);
                  }}
                >
                  Register
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <AuthModal isOpen={authModalOpen} onClose={() => setAuthModalOpen(false)} />
    </>
  );
}
