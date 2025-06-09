import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const upcomingEvent = {
  title: "RACHANA MUN",
  date: "June 13, 2025",
  mode: "Offline",
  participation: "Individual",
  registrationFee: "₹550",
  description: `🌐 Hey everyone!
RACHANA (MUN) is here – an offline Model United Nations simulation under the Literary category of our fest!

🗓️ Date: 13/06/2025
👤 Participation: Individual
📍 Mode: Offline

💼 Committees (Choose One):
1️⃣ Lok Sabha – Delimitation of Parliamentary and Assembly Constituencies
2️⃣ UNHRC – Addressing Statelessness and Cross-Border Displacement from Ethnic Tensions in Western Myanmar

💰 Prizes (Separate for both Committees)
🥇 1st Prize: ₹3,000
🥈 2nd Prize: ₹1,000

📝 Registration Fee: ₹550

📲 How to Register:
1️⃣ Click the registration link
2️⃣ Fill in your basic details
3️⃣ Under "Event Category", select Literary Events
4️⃣ Then choose MUN (RACHNA)

📨 Allotments will be sent 3 days prior to the event.
Total duration: 4 hours (Single-day event).

📞 For queries, contact:
📌 Devika: 9743690921
📌 Ryan Gomez: 7022509965

🎙️ Whether you're a seasoned delegate or a first-timer, this is your chance to showcase your diplomacy, critical thinking, and public speaking skills on a national platform.

Seats are limited – Register now and make your mark!`,
  registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSf7ZGFdkDBTFxt8O6IJGM4mfd3kWttjV9n5rsA-PkPgm95Wkw/viewform?usp=dialog",
  contacts: [
    { name: "Devika", phone: "9743690921" },
    { name: "Ryan Gomez", phone: "7022509965" }
  ]
};

export function EventCarousel() {
  const [showFullDescription, setShowFullDescription] = useState(false);

  return (
    <section id="events" className="py-12 sm:py-16 lg:py-20 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 animated-bg opacity-5"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 sm:mb-16 reveal-up">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 munsoc-text-gradient">
            Upcoming Events
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            Join us for exciting Model UN experiences and diplomatic challenges
          </p>
        </div>

        {/* Rachana MUN Event Card */}
        <div className="max-w-6xl mx-auto">
          <Card className="munsoc-glass hover:shadow-2xl transition-all duration-500 transform hover:scale-105 reveal-scale stagger-2">
            <CardHeader className="text-center py-8 sm:py-12 relative overflow-hidden">
              {/* Background decoration */}
              <div className="absolute inset-0 bg-gradient-to-br from-munsoc-teal-500/10 to-munsoc-gold-500/10"></div>
              <div className="relative z-10 px-4">
                <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-munsoc-teal-500 to-munsoc-gold-500 rounded-full mb-4 sm:mb-6 animate-bounce">
                  <span className="text-2xl sm:text-3xl">🏛️</span>
                </div>
                <CardTitle className="text-3xl sm:text-4xl lg:text-5xl munsoc-text-gradient mb-3 sm:mb-4">
                  {upcomingEvent.title}
                </CardTitle>
                <CardDescription className="text-lg sm:text-xl text-muted-foreground mb-4 sm:mb-6">
                  Model United Nations Conference
                </CardDescription>
                <div className="flex flex-wrap justify-center gap-2 sm:gap-4 text-xs sm:text-sm">
                  <span className="bg-munsoc-teal-500/20 text-munsoc-teal-700 dark:text-munsoc-teal-300 px-3 py-2 rounded-full font-semibold">
                    📅 {upcomingEvent.date}
                  </span>
                  <span className="bg-munsoc-gold-500/20 text-munsoc-gold-700 dark:text-munsoc-gold-300 px-3 py-2 rounded-full font-semibold">
                    👤 {upcomingEvent.participation}
                  </span>
                  <span className="bg-munsoc-teal-500/20 text-munsoc-teal-700 dark:text-munsoc-teal-300 px-3 py-2 rounded-full font-semibold">
                    📍 {upcomingEvent.mode}
                  </span>
                  <span className="bg-munsoc-gold-500/20 text-munsoc-gold-700 dark:text-munsoc-gold-300 px-3 py-2 rounded-full font-semibold">
                    💰 {upcomingEvent.registrationFee}
                  </span>
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="px-4 sm:px-8 pb-8 sm:pb-12">
              {/* Event Description */}
              <div className="mb-6 sm:mb-8">
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 munsoc-text-gradient">Event Details</h3>
                <div className="bg-gradient-to-r from-munsoc-teal-900/10 to-munsoc-gold-900/10 rounded-lg p-4 sm:p-6 border border-munsoc-teal-500/20">
                  <div className={`whitespace-pre-line text-sm sm:text-base text-muted-foreground leading-relaxed ${!showFullDescription ? 'line-clamp-6' : ''}`}>
                    {showFullDescription ? upcomingEvent.description : upcomingEvent.description.slice(0, 300) + "..."}
                  </div>
                  <Button
                    variant="ghost"
                    onClick={() => setShowFullDescription(!showFullDescription)}
                    className="mt-4 text-munsoc-teal-600 hover:text-munsoc-teal-700 p-0 text-sm sm:text-base"
                  >
                    {showFullDescription ? "Show Less" : "Read More"}
                  </Button>
                </div>
              </div>

              {/* Committees */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
                <Card className="munsoc-glass border-munsoc-teal-500/30">
                  <CardContent className="p-4 sm:p-6">
                    <h4 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-munsoc-teal-600 dark:text-munsoc-teal-400">
                      🏛️ Lok Sabha Committee
                    </h4>
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      Delimitation of Parliamentary and Assembly Constituencies
                    </p>
                  </CardContent>
                </Card>
                <Card className="munsoc-glass border-munsoc-gold-500/30">
                  <CardContent className="p-4 sm:p-6">
                    <h4 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-munsoc-gold-600 dark:text-munsoc-gold-400">
                      🌍 UNHRC Committee
                    </h4>
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      Addressing Statelessness and Cross-Border Displacement from Ethnic Tensions in Western Myanmar
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Prizes */}
              <div className="mb-6 sm:mb-8">
                <h4 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 munsoc-text-gradient">Prizes</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="text-center p-4 sm:p-6 bg-gradient-to-br from-yellow-500/20 to-yellow-600/20 rounded-lg border border-yellow-500/30">
                    <div className="text-2xl sm:text-3xl mb-2">🥇</div>
                    <div className="text-lg sm:text-xl font-bold text-yellow-600 dark:text-yellow-400">1st Prize</div>
                    <div className="text-xl sm:text-2xl font-bold">₹3,000</div>
                  </div>
                  <div className="text-center p-4 sm:p-6 bg-gradient-to-br from-gray-400/20 to-gray-500/20 rounded-lg border border-gray-500/30">
                    <div className="text-2xl sm:text-3xl mb-2">🥈</div>
                    <div className="text-lg sm:text-xl font-bold text-gray-600 dark:text-gray-400">2nd Prize</div>
                    <div className="text-xl sm:text-2xl font-bold">₹1,000</div>
                  </div>
                </div>
                <p className="text-center text-xs sm:text-sm text-muted-foreground mt-4">
                  Separate prizes for both committees
                </p>
              </div>

              {/* Contact Information */}
              <div className="mb-6 sm:mb-8">
                <h4 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 munsoc-text-gradient">Contact for Queries</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {upcomingEvent.contacts.map((contact, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 sm:p-4 bg-munsoc-glass rounded-lg border border-munsoc-teal-500/20">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-munsoc-teal-500 to-munsoc-gold-500 rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-base">
                        {contact.name.charAt(0)}
                      </div>
                      <div>
                        <div className="font-semibold text-foreground text-sm sm:text-base">{contact.name}</div>
                        <a href={`tel:${contact.phone}`} className="text-munsoc-teal-600 dark:text-munsoc-teal-400 hover:underline text-sm">
                          {contact.phone}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Registration Button */}
              <div className="text-center">
                <a
                  href={upcomingEvent.registrationLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full sm:w-auto"
                >
                  <Button 
                    size="lg"
                    className="w-full sm:w-auto bg-gradient-to-r from-munsoc-teal-600 to-munsoc-gold-600 hover:from-munsoc-teal-700 hover:to-munsoc-gold-700 text-white px-8 sm:px-12 py-3 sm:py-4 text-lg sm:text-xl font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  >
                    Register Now - ₹550
                  </Button>
                </a>
                <p className="text-xs sm:text-sm text-muted-foreground mt-4">
                  Limited seats available. Register early to secure your spot!
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Social Media Call to Action */}
        <div className="text-center mt-12 sm:mt-16">
          <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 munsoc-text-gradient">Stay Connected</h3>
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 px-4">
            <a
              href="https://www.instagram.com/rit.munsoc/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center space-x-2 px-4 sm:px-6 py-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white transition-all duration-300 transform hover:scale-105 hover:shadow-lg w-full sm:w-auto"
            >
              <span className="text-lg sm:text-xl">📸</span>
              <span className="font-medium text-sm sm:text-base">Follow on Instagram</span>
            </a>
            <a
              href="https://chat.whatsapp.com/Gcv1rlofnHhBoOG3nmC3Oz"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center space-x-2 px-4 sm:px-6 py-3 rounded-full bg-gradient-to-r from-green-500 to-green-600 text-white transition-all duration-300 transform hover:scale-105 hover:shadow-lg w-full sm:w-auto"
            >
              <span className="text-lg sm:text-xl">💬</span>
              <span className="font-medium text-sm sm:text-base">Join WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}