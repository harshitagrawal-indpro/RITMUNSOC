
import { Card, CardContent } from "@/components/ui/card";

const president = {
  name: "Sarah Johnson",
  position: "President",
  image: "/placeholder.svg",
  bio: "Leading MUNSOC RIT with vision and diplomatic excellence.",
  achievements: ["Model UN Champion 2023", "Best Delegate Award"]
};

const coreMembers = [
  { name: "Alex Chen", position: "Vice President", image: "/placeholder.svg", specialization: "Crisis Management" },
  { name: "Maria Rodriguez", position: "Secretary General", image: "/placeholder.svg", specialization: "Protocol & Procedures" },
  { name: "David Kim", position: "Head of Logistics", image: "/placeholder.svg", specialization: "Event Coordination" },
  { name: "Emma Thompson", position: "Public Relations", image: "/placeholder.svg", specialization: "Media & Communications" },
  { name: "Ryan O'Connor", position: "Finance Director", image: "/placeholder.svg", specialization: "Budget Management" },
  { name: "Priya Patel", position: "Academic Director", image: "/placeholder.svg", specialization: "Research & Training" },
  { name: "James Wilson", position: "Technology Lead", image: "/placeholder.svg", specialization: "Digital Innovation" }
];

export function Team() {
  return (
    <section id="team" className="py-20 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 animated-bg opacity-5"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 reveal-up">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 munsoc-text-gradient">
            Leadership Team
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Meet the dedicated individuals driving MUNSOC RIT's mission of diplomatic excellence
          </p>
        </div>

        {/* President Section */}
        <div className="mb-20 reveal-scale stagger-1">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold munsoc-text-gradient mb-4">Our President</h3>
          </div>
          <Card className="max-w-4xl mx-auto munsoc-glass hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border-munsoc-teal-500/30">
            <CardContent className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="relative group">
                  <img 
                    src={president.image} 
                    alt={president.name}
                    className="w-48 h-48 rounded-full object-cover border-4 border-munsoc-teal-500/30 transition-all duration-500 group-hover:border-munsoc-gold-500/50 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-munsoc-teal-400/20 to-munsoc-gold-400/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h4 className="text-3xl font-bold mb-2 text-foreground">{president.name}</h4>
                  <p className="text-xl text-munsoc-teal-600 dark:text-munsoc-teal-400 font-semibold mb-4">{president.position}</p>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">{president.bio}</p>
                  <div className="space-y-2">
                    <h5 className="font-semibold text-foreground">Key Achievements:</h5>
                    <ul className="space-y-1">
                      {president.achievements.map((achievement, index) => (
                        <li key={index} className="text-muted-foreground flex items-center">
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
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold munsoc-text-gradient mb-4">Core Members</h3>
            <p className="text-lg text-muted-foreground">The backbone of our organization</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {coreMembers.map((member, index) => (
              <Card 
                key={member.name} 
                className={`group munsoc-glass hover:shadow-xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 border-munsoc-teal-500/20 hover:border-munsoc-gold-500/30 reveal-scale stagger-${index + 3} cursor-pointer`}
              >
                <CardContent className="p-6 text-center">
                  <div className="relative mb-6 overflow-hidden rounded-full">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-24 h-24 rounded-full object-cover mx-auto border-3 border-munsoc-teal-500/30 transition-all duration-500 group-hover:border-munsoc-gold-500/50 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-munsoc-teal-400/20 to-munsoc-gold-400/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  
                  <h4 className="text-xl font-bold mb-2 text-white group-hover:text-munsoc-teal-300 transition-colors duration-300">{member.name}</h4>
                  <p className="text-munsoc-teal-400 dark:text-munsoc-teal-300 font-semibold mb-3 text-lg group-hover:text-munsoc-gold-400 transition-colors duration-300">{member.position}</p>
                  <div className="bg-munsoc-teal-900/30 dark:bg-munsoc-teal-900/40 rounded-lg p-3 group-hover:bg-munsoc-gold-900/30 transition-colors duration-300">
                    <p className="text-sm text-white/90 group-hover:text-white font-medium">{member.specialization}</p>
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
