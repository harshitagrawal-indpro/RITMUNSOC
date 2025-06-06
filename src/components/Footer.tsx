
export function Footer() {
  return (
    <footer className="relative overflow-hidden munsoc-glass border-t border-white/20 py-16">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-br from-munsoc-teal-200 to-munsoc-gold-200 rounded-full opacity-10 float morphing-shape"></div>
        <div className="absolute bottom-10 right-10 w-16 h-16 bg-gradient-to-br from-munsoc-gold-200 to-munsoc-teal-200 rounded-full opacity-15 float-delayed morphing-shape"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2 reveal-up stagger-1">
            <div className="flex items-center space-x-4 mb-6">
              <div className="relative">
                <img 
                  src="/lovable-uploads/28e42789-83a6-4394-b5a3-83204b5afde8.png" 
                  alt="MUNSOC RIT Logo" 
                  className="h-12 w-12 float"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-munsoc-teal-400 to-munsoc-gold-400 rounded-full opacity-20 blur-lg"></div>
              </div>
              <span className="text-2xl font-bold munsoc-text-gradient">MUNSOC RIT</span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md leading-relaxed">
              Rochester Institute of Technology's Model United Nations Society - 
              fostering global awareness through diplomatic education and leadership development.
            </p>
            <p className="text-lg font-semibold munsoc-text-gradient">
              Dialogue. Diplomacy. Leadership.
            </p>
          </div>

          <div className="reveal-up stagger-2">
            <h3 className="font-bold mb-6 text-xl munsoc-text-gradient">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#home" className="text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block">
                  Home
                </a>
              </li>
              <li>
                <a href="#events" className="text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block">
                  Events
                </a>
              </li>
              <li>
                <a href="#about" className="text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block">
                  About
                </a>
              </li>
              <li>
                <a href="#team" className="text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block">
                  Team
                </a>
              </li>
              <li>
                <a href="#calendar" className="text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block">
                  Calendar
                </a>
              </li>
            </ul>
          </div>

          <div className="reveal-up stagger-3">
            <h3 className="font-bold mb-6 text-xl munsoc-text-gradient">Connect</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center hover:text-primary transition-all duration-300 cursor-pointer">
                <span className="text-lg mr-3">📧</span>
                munsoc@rit.edu
              </li>
              <li className="flex items-center hover:text-primary transition-all duration-300 cursor-pointer">
                <span className="text-lg mr-3">📱</span>
                Instagram: @munsoc_rit
              </li>
              <li className="flex items-center hover:text-primary transition-all duration-300 cursor-pointer">
                <span className="text-lg mr-3">🐦</span>
                Twitter: @MUNSOC_RIT
              </li>
              <li className="flex items-center hover:text-primary transition-all duration-300 cursor-pointer">
                <span className="text-lg mr-3">📍</span>
                Rochester Institute of Technology
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8 text-center reveal-up stagger-4">
          <p className="text-sm text-muted-foreground">
            © 2025 MUNSOC RIT. All rights reserved. | 
            <span className="ml-2 munsoc-text-gradient font-semibold">Empowering future diplomats and global leaders.</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
