import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const objectives = [
  {
    title: "Foster Global Awareness",
    description: "Develop deep understanding of international relations, global politics, and diplomatic processes.",
    icon: "🌐",
    color: "from-blue-500 to-teal-500"
  },
  {
    title: "Build Leadership Skills", 
    description: "Cultivate leadership abilities through committee chairing, event organization, and team management.",
    icon: "👥",
    color: "from-teal-500 to-green-500"
  },
  {
    title: "Enhance Communication",
    description: "Improve public speaking, negotiation, and diplomatic communication skills in multilateral settings.",
    icon: "🗣️",
    color: "from-green-500 to-emerald-500"
  },
  {
    title: "Promote Academic Excellence",
    description: "Encourage rigorous research, critical thinking, and analytical skills in international affairs.",
    icon: "📚",
    color: "from-emerald-500 to-teal-500"
  }
];

export function About() {
  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 right-4 sm:right-10 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-munsoc-teal-200 to-munsoc-gold-200 rounded-full opacity-20 float"></div>
        <div className="absolute bottom-20 left-4 sm:left-10 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-munsoc-gold-200 to-munsoc-teal-200 rounded-full opacity-30 float-delayed"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 sm:mb-16 reveal-up">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 munsoc-text-gradient">
            Our Objectives
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto mb-3 sm:mb-4 px-4">
            MUNSOC RIT is committed to developing future leaders through immersive Model United Nations experiences
          </p>
          <p className="text-sm sm:text-base lg:text-lg text-munsoc-teal-600 dark:text-munsoc-teal-400 font-semibold">
            Ramaiah Institute of Technology
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-16 sm:mb-20">
          {objectives.map((objective, index) => (
            <Card 
              key={index} 
              className="text-center hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 munsoc-glass reveal-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-3 sm:pb-4 px-4 sm:px-6 pt-6">
                <div className="relative mx-auto mb-4 sm:mb-6">
                  <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br ${objective.color} flex items-center justify-center text-2xl sm:text-3xl shadow-lg glow`}>
                    {objective.icon}
                  </div>
                </div>
                <CardTitle className="text-lg sm:text-xl font-bold px-2">{objective.title}</CardTitle>
              </CardHeader>
              <CardContent className="px-4 sm:px-6 pb-6">
                <CardDescription className="text-xs sm:text-sm leading-relaxed">{objective.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="munsoc-glass rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 shadow-xl hover:shadow-2xl transition-all duration-500 reveal-scale stagger-5">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 text-center munsoc-text-gradient">
            MUNSOC RIT Handbook
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
            <div className="reveal-up stagger-6">
              <h4 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-munsoc-teal-700 dark:text-munsoc-teal-300 flex items-center">
                <span className="text-2xl sm:text-3xl mr-3">✨</span>
                Membership Benefits
              </h4>
              <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-muted-foreground">
                <li className="flex items-center">
                  <span className="text-munsoc-teal-500 mr-3 text-base sm:text-lg">🎯</span>
                  Access to exclusive training workshops
                </li>
                <li className="flex items-center">
                  <span className="text-munsoc-teal-500 mr-3 text-base sm:text-lg">🌍</span>
                  Participation in national and international conferences
                </li>
                <li className="flex items-center">
                  <span className="text-munsoc-teal-500 mr-3 text-base sm:text-lg">🤝</span>
                  Networking with diplomatic professionals
                </li>
                <li className="flex items-center">
                  <span className="text-munsoc-teal-500 mr-3 text-base sm:text-lg">🚀</span>
                  Leadership development opportunities
                </li>
                <li className="flex items-center">
                  <span className="text-munsoc-teal-500 mr-3 text-base sm:text-lg">📈</span>
                  Academic and career guidance
                </li>
                <li className="flex items-center">
                  <span className="text-munsoc-teal-500 mr-3 text-base sm:text-lg">🏆</span>
                  Participation in RACHANA MUN and other conferences
                </li>
              </ul>
            </div>
            <div className="reveal-up stagger-7">
              <h4 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-munsoc-gold-700 dark:text-munsoc-gold-300 flex items-center">
                <span className="text-2xl sm:text-3xl mr-3">📋</span>
                Requirements
              </h4>
              <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-muted-foreground">
                <li className="flex items-center">
                  <span className="text-munsoc-gold-500 mr-3 text-base sm:text-lg">🎓</span>
                  Active RIT student status
                </li>
                <li className="flex items-center">
                  <span className="text-munsoc-gold-500 mr-3 text-base sm:text-lg">📊</span>
                  Minimum 2.5 GPA
                </li>
                <li className="flex items-center">
                  <span className="text-munsoc-gold-500 mr-3 text-base sm:text-lg">👋</span>
                  Attendance at orientation session
                </li>
                <li className="flex items-center">
                  <span className="text-munsoc-gold-500 mr-3 text-base sm:text-lg">📅</span>
                  Participation in at least 2 events per semester
                </li>
                <li className="flex items-center">
                  <span className="text-munsoc-gold-500 mr-3 text-base sm:text-lg">🤲</span>
                  Commitment to collaborative learning
                </li>
                <li className="flex items-center">
                  <span className="text-munsoc-gold-500 mr-3 text-base sm:text-lg">💬</span>
                  Join our WhatsApp community for updates
                </li>
              </ul>
            </div>
          </div>

          {/* Call to Action with Social Links */}
          <div className="text-center mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-white/20">
            <h4 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 munsoc-text-gradient">Ready to Join Us?</h4>
            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSf7ZGFdkDBTFxt8O6IJGM4mfd3kWttjV9n5rsA-PkPgm95Wkw/viewform?usp=dialog"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-2 px-4 sm:px-6 py-3 bg-gradient-to-r from-munsoc-teal-600 to-munsoc-gold-600 text-white rounded-full hover:from-munsoc-teal-700 hover:to-munsoc-gold-700 transition-all duration-300 transform hover:scale-105 shadow-lg w-full sm:w-auto text-sm sm:text-base"
              >
                <span>📝</span>
                <span className="font-semibold">Register for RACHANA MUN</span>
              </a>
              <a
                href="https://chat.whatsapp.com/Gcv1rlofnHhBoOG3nmC3Oz"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-2 px-4 sm:px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full hover:from-green-600 hover:to-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg w-full sm:w-auto text-sm sm:text-base"
              >
                <span>💬</span>
                <span className="font-semibold">Join WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}