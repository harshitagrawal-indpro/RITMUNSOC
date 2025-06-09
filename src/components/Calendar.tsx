import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const currentDate = new Date();
const currentMonth = 5; // June (0-indexed)
const currentYear = 2025;

// Define types
interface Achievement {
  id: number;
  image: string;
  title: string;
  description: string;
  date: string;
}

// Generate calendar days for June 2025
const generateCalendarDays = () => {
  const firstDay = new Date(currentYear, currentMonth, 1).getDay();
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const days: (number | null)[] = [];

  // Add empty cells for days before the first day of month
  for (let i = 0; i < firstDay; i++) {
    days.push(null);
  }

  // Add days of the month
  for (let day = 1; day <= daysInMonth; day++) {
    days.push(day);
  }

  return days;
};

const events = {
  13: { title: "Rachna MUN", type: "conference", color: "bg-munsoc-teal-500" }
};

const achievements: Achievement[] = [
  { 
    id: 1, 
    image: "https://i.ibb.co/B247kV25/image.png", 
    title: "Winner at KJCMUN", 
    description: "Outstanding performance and victory at Kristu Jayanti College Model United Nations",
    date: "2024"
  },
  { 
    id: 2, 
    image: "https://i.ibb.co/FL6BcVKF/image.png", 
    title: "KJCMUN Achievement", 
    description: "Team excellence showcased at Kristu Jayanti College MUN conference",
    date: "2024"
  }
];

// Social media links
const socialLinks = [
  {
    name: "Instagram",
    url: "https://www.instagram.com/rit.munsoc/?hl=en",
    icon: "📸",
    color: "from-pink-500 to-purple-600"
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/company/munsoc-rit/posts/?feedView=all",
    icon: "💼",
    color: "from-blue-600 to-blue-700"
  },
  {
    name: "WhatsApp",
    url: "https://chat.whatsapp.com/Gcv1rlofnHhBoOG3nmC3Oz",
    icon: "💬",
    color: "from-green-500 to-green-600"
  }
];

export function Calendar() {
  const [selectedAchievement, setSelectedAchievement] = useState<Achievement | null>(null);
  const calendarDays = generateCalendarDays();

  return (
    <section id="calendar" className="py-20 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-24 h-24 bg-gradient-to-br from-munsoc-teal-200 to-munsoc-gold-200 rounded-full opacity-20 float morphing-shape"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-gradient-to-br from-munsoc-gold-200 to-munsoc-teal-200 rounded-full opacity-20 float-delayed morphing-shape"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 reveal-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 munsoc-text-gradient">
            Event Calendar
          </h2>
          <p className="text-xl text-muted-foreground">
            Stay updated with all our upcoming activities and conferences
          </p>
        </div>

        {/* Calendar Section */}
        <div className="max-w-4xl mx-auto mb-20">
          <Card className="munsoc-glass hover:shadow-2xl transition-all duration-500 reveal-scale stagger-1">
            <CardHeader className="text-center pb-6">
              <CardTitle className="text-3xl md:text-4xl munsoc-text-gradient mb-2">
                June 2025
              </CardTitle>
              <CardDescription className="text-lg text-muted-foreground">
                Mark your calendars for upcoming events
              </CardDescription>
            </CardHeader>
            <CardContent className="px-8 pb-8">
              {/* Calendar Grid */}
              <div className="mb-6">
                {/* Days of week header */}
                <div className="grid grid-cols-7 gap-2 mb-4">
                  {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                    <div key={day} className="text-center font-semibold text-munsoc-teal-600 dark:text-munsoc-teal-400 py-2">
                      {day}
                    </div>
                  ))}
                </div>
                
                {/* Calendar days */}
                <div className="grid grid-cols-7 gap-2">
                  {calendarDays.map((day, index) => (
                    <div key={index} className="aspect-square flex items-center justify-center relative">
                      {day && (
                        <div className={`
                          w-full h-full flex items-center justify-center rounded-lg transition-all duration-300 cursor-pointer
                          ${day === 13 
                            ? 'bg-gradient-to-br from-munsoc-teal-500 to-munsoc-gold-500 text-white font-bold shadow-lg transform scale-110' 
                            : 'hover:bg-munsoc-teal-100 dark:hover:bg-munsoc-teal-900/30'
                          }
                        `}>
                          <span className="text-sm md:text-base">{day}</span>
                          {day === 13 && (
                            <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2">
                              <div className="w-2 h-2 bg-munsoc-gold-400 rounded-full animate-pulse"></div>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Event Details */}
              <div className="bg-gradient-to-r from-munsoc-teal-900/20 to-munsoc-gold-900/20 rounded-lg p-6 border border-munsoc-teal-500/30">
                <h3 className="text-xl font-bold mb-4 munsoc-text-gradient">Upcoming Events</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-4 p-3 bg-munsoc-glass rounded-lg border border-munsoc-teal-500/20">
                    <div className="w-12 h-12 bg-gradient-to-br from-munsoc-teal-500 to-munsoc-gold-500 rounded-full flex items-center justify-center text-white font-bold">
                      13
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-lg text-foreground">RACHANA MUN</h4>
                      <p className="text-muted-foreground text-sm">Model United Nations Conference - Literary Category</p>
                      <p className="text-munsoc-teal-600 dark:text-munsoc-teal-400 text-sm font-medium">June 13, 2025 | Registration Fee: ₹550</p>
                    </div>
                    <div className="text-right">
                      <span className="bg-munsoc-teal-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                        Conference
                      </span>
                    </div>
                  </div>
                </div>
                
                {/* Quick Registration Link */}
                <div className="mt-4 text-center">
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSf7ZGFdkDBTFxt8O6IJGM4mfd3kWttjV9n5rsA-PkPgm95Wkw/viewform?usp=dialog"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-munsoc-teal-600 to-munsoc-gold-600 text-white rounded-full hover:from-munsoc-teal-700 hover:to-munsoc-gold-700 transition-all duration-300 transform hover:scale-105"
                  >
                    <span>📝</span>
                    <span className="font-medium">Quick Register</span>
                  </a>
                </div>
              </div>

              {/* Social Media Links */}
              <div className="mt-8 text-center">
                <h4 className="text-lg font-semibold mb-4 munsoc-text-gradient">Connect with MUNSOC RIT</h4>
                <div className="flex justify-center space-x-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group flex items-center space-x-2 px-4 py-2 rounded-full bg-gradient-to-r ${social.color} text-white transition-all duration-300 transform hover:scale-105 hover:shadow-lg`}
                    >
                      <span className="text-lg">{social.icon}</span>
                      <span className="font-medium">{social.name}</span>
                    </a>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  Ramaiah Institute of Technology
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Previous Achievements Section */}
        <div className="reveal-up stagger-2">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 munsoc-text-gradient">
              Previous Achievements
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Celebrating our victories and milestones in Model United Nations conferences
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {achievements.map((achievement, index) => (
              <Card 
                key={achievement.id}
                className="group munsoc-glass hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 cursor-pointer reveal-scale"
                onClick={() => setSelectedAchievement(achievement)}
              >
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={achievement.image} 
                    alt={achievement.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4 bg-munsoc-gold-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    🏆 Winner
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-2 text-foreground group-hover:text-munsoc-teal-300 transition-colors duration-300">
                    {achievement.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                    {achievement.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-munsoc-gold-500 font-semibold text-sm">{achievement.date}</span>
                    <span className="text-munsoc-teal-500 text-sm font-medium">Kristu Jayanti College MUN</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-munsoc-teal-600 to-munsoc-gold-600 hover:from-munsoc-teal-700 hover:to-munsoc-gold-700 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              View All Achievements
            </Button>
          </div>
        </div>
      </div>

      {/* Achievement Modal */}
      {selectedAchievement && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm animate-fade-in"
          onClick={() => setSelectedAchievement(null)}
        >
          <div className="max-w-3xl mx-4 bg-white dark:bg-gray-900 rounded-lg overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <div className="relative">
              <img 
                src={selectedAchievement.image} 
                alt={selectedAchievement.title}
                className="w-full h-80 object-cover"
              />
              <div className="absolute top-4 right-4 bg-munsoc-gold-500 text-white px-4 py-2 rounded-full font-semibold">
                🏆 Winner at KJCMUN
              </div>
            </div>
            <div className="p-8">
              <h3 className="text-3xl font-bold mb-4 munsoc-text-gradient">{selectedAchievement.title}</h3>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">{selectedAchievement.description}</p>
              <div className="flex items-center justify-between mb-6">
                <span className="text-munsoc-gold-500 font-bold text-lg">Year: {selectedAchievement.date}</span>
                <span className="text-munsoc-teal-500 font-semibold">Kristu Jayanti College MUN</span>
              </div>
              <div className="flex space-x-4">
                <Button 
                  onClick={() => setSelectedAchievement(null)}
                  className="flex-1 bg-munsoc-teal-600 hover:bg-munsoc-teal-700"
                >
                  Close
                </Button>
                <Button 
                  variant="outline"
                  className="flex-1 border-munsoc-gold-500 text-munsoc-gold-500 hover:bg-munsoc-gold-500 hover:text-white"
                  onClick={() => window.open(socialLinks[0].url, '_blank')}
                >
                  Share Achievement
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}