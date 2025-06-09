export function Footer() {
  return (
    <footer className="relative overflow-hidden munsoc-glass border-t border-white/20 py-12 sm:py-16">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-6 sm:top-10 left-6 sm:left-10 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-munsoc-teal-200 to-munsoc-gold-200 rounded-full opacity-10 float morphing-shape"></div>
        <div className="absolute bottom-6 sm:bottom-10 right-6 sm:right-10 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-munsoc-gold-200 to-munsoc-teal-200 rounded-full opacity-15 float-delayed morphing-shape"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          <div className="sm:col-span-2 reveal-up stagger-1">
            <div className="flex items-center space-x-3 sm:space-x-4 mb-4 sm:mb-6">
              <div className="relative">
                <img 
                  src="https://i.ibb.co/wZs4SvXB/28e42789-83a6-4394-b5a3-83204b5afde8-png.png" 
                  alt="MUNSOC RIT Logo" 
                  className="h-10 w-10 sm:h-12 sm:w-12 float"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-munsoc-teal-400 to-munsoc-gold-400 rounded-full opacity-20 blur-lg"></div>
              </div>
              <span className="text-xl sm:text-2xl font-bold munsoc-text-gradient">MUNSOC RIT</span>
            </div>
            <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 max-w-md leading-relaxed">
              Ramaiah Institute of Technology's Model United Nations Society - 
              fostering global awareness through diplomatic education and leadership development.
            </p>
            <p className="text-base sm:text-lg font-semibold munsoc-text-gradient">
              Dialogue. Diplomacy. Leadership.
            </p>
          </div>

          <div className="reveal-up stagger-2">
            <h3 className="font-bold mb-4 sm:mb-6 text-lg sm:text-xl munsoc-text-gradient">Quick Links</h3>
            <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base">
              <li>
                <a href="#home" className="text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block">
                  🏠 Home
                </a>
              </li>
              <li>
                <a href="#events" className="text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block">
                  📅 Events
                </a>
              </li>
              <li>
                <a href="#about" className="text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block">
                  ℹ️ About
                </a>
              </li>
              <li>
                <a href="#team" className="text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block">
                  👥 Team
                </a>
              </li>
              <li>
                <a href="#calendar" className="text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block">
                  📆 Calendar
                </a>
              </li>
            </ul>
          </div>

          <div className="reveal-up stagger-3">
            <h3 className="font-bold mb-4 sm:mb-6 text-lg sm:text-xl munsoc-text-gradient">Connect</h3>
            <ul className="space-y-3 sm:space-y-4 text-sm sm:text-base">
              <li>
                <a 
                  href="mailto:munsoc@rit.edu"
                  className="flex items-center hover:text-primary transition-all duration-300 cursor-pointer group"
                >
                  <span className="text-base sm:text-lg mr-3 group-hover:scale-110 transition-transform">📧</span>
                  <span className="break-all">munsoc@rit.edu</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://www.instagram.com/rit.munsoc/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center hover:text-primary transition-all duration-300 cursor-pointer group"
                >
                  <span className="text-base sm:text-lg mr-3 group-hover:scale-110 transition-transform">📸</span>
                  <span>@rit.munsoc</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://www.linkedin.com/company/munsoc-rit/posts/?feedView=all"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center hover:text-primary transition-all duration-300 cursor-pointer group"
                >
                  <span className="text-base sm:text-lg mr-3 group-hover:scale-110 transition-transform">💼</span>
                  <span>MUNSOC RIT</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://chat.whatsapp.com/Gcv1rlofnHhBoOG3nmC3Oz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center hover:text-primary transition-all duration-300 cursor-pointer group"
                >
                  <span className="text-base sm:text-lg mr-3 group-hover:scale-110 transition-transform">💬</span>
                  <span>WhatsApp Community</span>
                </a>
              </li>
              <li className="flex items-center text-muted-foreground">
                <span className="text-base sm:text-lg mr-3">📍</span>
                <span className="text-xs sm:text-sm">Ramaiah Institute of Technology</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 sm:mt-12 pt-6 sm:pt-8 text-center reveal-up stagger-4">
          <p className="text-xs sm:text-sm text-muted-foreground px-4">
            © 2025 MUNSOC RIT. All rights reserved. | 
            <span className="ml-2 munsoc-text-gradient font-semibold">Empowering future diplomats and global leaders.</span>
          </p>
        </div>
      </div>
    </footer>
  );
}