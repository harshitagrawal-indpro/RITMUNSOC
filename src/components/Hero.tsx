import { Button } from "@/components/ui/button";
import { ParticleBackground } from "./ParticleBackground";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ParticleBackground />
      
      {/* Animated background shapes */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-munsoc-teal-200 dark:bg-munsoc-teal-800 rounded-full morphing-shape opacity-20 float"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-munsoc-gold-200 dark:bg-munsoc-gold-800 rounded-full morphing-shape opacity-30 float-delayed"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-munsoc-teal-300 dark:bg-munsoc-teal-700 rounded-full morphing-shape opacity-25 float"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="reveal-scale">
          <div className="relative inline-block mb-8">
            <img 
              src="https://i.ibb.co/wZs4SvXB/28e42789-83a6-4394-b5a3-83204b5afde8-png.png" 
              alt="MUNSOC RIT Logo" 
              className="h-40 w-40 mx-auto glow float"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-munsoc-teal-400 to-munsoc-gold-400 rounded-full opacity-20 blur-xl"></div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 reveal-up stagger-1">
            <span className="munsoc-text-gradient">MUNSOC RIT</span>
          </h1>
          
          <div className="reveal-up stagger-2">
            <p className="text-2xl md:text-3xl text-muted-foreground mb-4 font-light">
              Dialogue. Diplomacy. Leadership.
            </p>
          </div>
          
          <div className="reveal-up stagger-3">
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed">
              Join Ramaiah Institute of Technology's premier Model United Nations Society. 
              Engage in global dialogue, develop diplomatic skills, and lead meaningful change 
              through immersive international relations experiences.
            </p>
          </div>

          {/* Social Media Quick Links */}
          <div className="reveal-up stagger-4 mb-8">
            <div className="flex justify-center space-x-4 mb-6">
              <a
                href="https://www.instagram.com/rit.munsoc/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center text-white transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
                title="Follow us on Instagram"
              >
                <span className="text-xl group-hover:animate-pulse">📸</span>
              </a>
              <a
                href="https://www.linkedin.com/company/munsoc-rit/posts/?feedView=all"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center text-white transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
                title="Connect on LinkedIn"
              >
                <span className="text-xl group-hover:animate-pulse">💼</span>
              </a>
              <a
                href="https://chat.whatsapp.com/Gcv1rlofnHhBoOG3nmC3Oz"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center text-white transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
                title="Join WhatsApp Community"
              >
                <span className="text-xl group-hover:animate-pulse">💬</span>
              </a>
            </div>
          </div>
          
          <div className="space-x-6 reveal-up stagger-5">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSf7ZGFdkDBTFxt8O6IJGM4mfd3kWttjV9n5rsA-PkPgm95Wkw/viewform?usp=dialog"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-munsoc-teal-600 to-munsoc-teal-700 hover:from-munsoc-teal-700 hover:to-munsoc-teal-800 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Join RACHANA MUN
              </Button>
            </a>
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-munsoc-teal-600 text-munsoc-teal-600 hover:bg-munsoc-teal-600 hover:text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              onClick={() => document.getElementById('events')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explore Events
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-munsoc-teal-600 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-munsoc-teal-600 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}