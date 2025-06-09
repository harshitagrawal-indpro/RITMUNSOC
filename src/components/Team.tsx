import { Card, CardContent } from "@/components/ui/card";

const president = {
  name: "Ryan Gomez",
  position: "President",
  image: "https://i.ibb.co/SXVgR9y6/image.png",
  bio: "Leading MUNSOC RIT with vision and diplomatic excellence, fostering global awareness and leadership development.",
  achievements: ["Established MUNSOC RIT", "Diplomatic Leadership Excellence", "Global Affairs Expertise"]
};

const coreMembers = [
  { name: "ShreeHari R Pillai", position: "Vice President", image: "https://i.ibb.co/fVD7pwXn/image.png", specialization: "Strategic Leadership & Operations" },
  { name: "Devika", position: "Coordinator", image: "https://i.ibb.co/ksGr3jxz/image.png", specialization: "Program Coordination & Management" },
  { name: "Manya Ravishankar", position: "Convener", image: "https://i.ibb.co/99s5JbsJ/image.png", specialization: "Event Organization & Assembly" },
  { name: "Shiddharth Priyatam", position: "Head of PR Marketing", image: "https://i.ibb.co/WNZtVkhc/image.png", specialization: "Brand Strategy & Communications" },
  { name: "Amogh Shastry", position: "Head of PR Marketing", image: "https://i.ibb.co/5gyTD8Vb/image.png", specialization: "Digital Marketing & Outreach" },
  { name: "Aashitha", position: "Head of Design", image: "https://i.ibb.co/pr9RvjHS/image.png", specialization: "Visual Identity & Creative Direction" },
  { name: "Vennela", position: "Event Management", image: "https://i.ibb.co/Zz6nCnzK/image.png", specialization: "Conference Planning & Execution" },
  { name: "Angel", position: "Head of Design", image: "https://i.ibb.co/xtYfHGSY/image.png", specialization: "UI/UX Design & Graphics" },
  { name: "Hamd", position: "Head of Delegation", image: "https://i.ibb.co/gLF0ZfpY/image.png", specialization: "Delegation Training & Support" },
  { name: "Neesarg", position: "Head of Logistics", image: "https://i.ibb.co/FLGSj4x8/image.png", specialization: "Operations & Resource Management" },
  { name: "Harshit Agrawal", position: "Head of IT", image: "https://i.ibb.co/GQtfp7vX/image.png", specialization: "Technology & Web Development" }
];

export function Team() {
  return (
    <section id="team" className="py-12 sm:py-16 lg:py-20 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 animated-bg opacity-5"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 sm:mb-16 reveal-up">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 munsoc-text-gradient">
            Leadership Team
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
            Meet the dedicated individuals driving MUNSOC RIT's mission of diplomatic excellence
          </p>
        </div>

        {/* President Section */}
        <div className="mb-16 sm:mb-20 reveal-scale stagger-1">
          <div className="text-center mb-8 sm:mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold munsoc-text-gradient mb-4">Our President</h3>
          </div>
          <Card className="max-w-4xl mx-auto munsoc-glass hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border-munsoc-teal-500/30">
            <CardContent className="p-6 sm:p-8 lg:p-12">
              <div className="flex flex-col lg:flex-row items-center gap-6 sm:gap-8">
                <div className="relative group flex-shrink-0">
                  <img 
                    src={president.image} 
                    alt={president.name}
                    className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 rounded-full object-cover border-4 border-munsoc-teal-500/30 transition-all duration-500 group-hover:border-munsoc-gold-500/50 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-munsoc-teal-400/20 to-munsoc-gold-400/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <div className="flex-1 text-center lg:text-left">
                  <h4 className="text-2xl sm:text-3xl font-bold mb-2 text-foreground">{president.name}</h4>
                  <p className="text-lg sm:text-xl text-munsoc-teal-600 dark:text-munsoc-teal-400 font-semibold mb-3 sm:mb-4">{president.position}</p>
                  <p className="text-sm sm:text-base lg:text-lg text-muted-foreground mb-4 sm:mb-6 leading-relaxed">{president.bio}</p>
                  <div className="space-y-2">
                    <h5 className="font-semibold text-sm sm:text-base text-foreground">Key Achievements:</h5>
                    <ul className="space-y-1">
                      {president.achievements.map((achievement, index) => (
                        <li key={index} className="text-xs sm:text-sm text-muted-foreground flex items-center justify-center lg:justify-start">
                          <span className="text-munsoc-gold-500 mr-2">🏆</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Core Members Section */}
        <div className="reveal-up stagger-2">
          <div className="text-center mb-8 sm:mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold munsoc-text-gradient mb-4">Core Members</h3>
            <p className="text-sm sm:text-base lg:text-lg text-muted-foreground">The backbone of our organization</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
            {coreMembers.map((member, index) => (
              <Card 
                key={member.name} 
                className={`group munsoc-glass hover:shadow-xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 border-munsoc-teal-500/20 hover:border-munsoc-gold-500/30 reveal-scale cursor-pointer ${
                  member.name === "Harshit Agrawal" ? "ring-2 ring-munsoc-gold-400/50" : ""
                }`}
              >
                <CardContent className="p-4 sm:p-6 text-center">
                  <div className="relative mb-4 sm:mb-6 overflow-hidden rounded-full">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover mx-auto border-3 border-munsoc-teal-500/30 transition-all duration-500 group-hover:border-munsoc-gold-500/50 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-munsoc-teal-400/20 to-munsoc-gold-400/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  
                  <h4 className="text-lg sm:text-xl font-bold mb-2 text-white group-hover:text-munsoc-teal-300 transition-colors duration-300">{member.name}</h4>
                  <p className="text-munsoc-teal-400 dark:text-munsoc-teal-300 font-semibold mb-2 sm:mb-3 text-sm sm:text-base lg:text-lg group-hover:text-munsoc-gold-400 transition-colors duration-300">{member.position}</p>
                  {member.name === "Harshit Agrawal" && (
                    <p className="text-xs text-munsoc-gold-400 font-semibold mb-2">✨ Website Creator ✨</p>
                  )}
                  <div className="bg-munsoc-teal-900/30 dark:bg-munsoc-teal-900/40 rounded-lg p-2 sm:p-3 group-hover:bg-munsoc-gold-900/30 transition-colors duration-300">
                    <p className="text-xs sm:text-sm text-white/90 group-hover:text-white font-medium leading-relaxed">{member.specialization}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}