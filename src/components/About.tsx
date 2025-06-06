
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
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 right-10 w-20 h-20 bg-gradient-to-br from-munsoc-teal-200 to-munsoc-gold-200 rounded-full opacity-20 float"></div>
        <div className="absolute bottom-20 left-10 w-16 h-16 bg-gradient-to-br from-munsoc-gold-200 to-munsoc-teal-200 rounded-full opacity-30 float-delayed"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 reveal-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 munsoc-text-gradient">
            Our Objectives
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            MUNSOC RIT is committed to developing future leaders through immersive Model United Nations experiences
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {objectives.map((objective, index) => (
            <Card 
              key={index} 
              className="text-center hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 munsoc-glass reveal-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-4">
                <div className="relative mx-auto mb-6">
                  <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${objective.color} flex items-center justify-center text-3xl shadow-lg glow`}>
                    {objective.icon}
                  </div>
                </div>
                <CardTitle className="text-xl font-bold">{objective.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm leading-relaxed">{objective.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="munsoc-glass rounded-3xl p-8 md:p-12 shadow-xl hover:shadow-2xl transition-all duration-500 reveal-scale stagger-5">
          <h3 className="text-3xl md:text-4xl font-bold mb-8 text-center munsoc-text-gradient">
            MUNSOC RIT Handbook
          </h3>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="reveal-up stagger-6">
              <h4 className="text-2xl font-semibold mb-6 text-munsoc-teal-700 dark:text-munsoc-teal-300 flex items-center">
                <span className="text-3xl mr-3">✨</span>
                Membership Benefits
              </h4>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center">
                  <span className="text-munsoc-teal-500 mr-3">🎯</span>
                  Access to exclusive training workshops
                </li>
                <li className="flex items-center">
                  <span className="text-munsoc-teal-500 mr-3">🌍</span>
                  Participation in national and international conferences
                </li>
                <li className="flex items-center">
                  <span className="text-munsoc-teal-500 mr-3">🤝</span>
                  Networking with diplomatic professionals
                </li>
                <li className="flex items-center">
                  <span className="text-munsoc-teal-500 mr-3">🚀</span>
                  Leadership development opportunities
                </li>
                <li className="flex items-center">
                  <span className="text-munsoc-teal-500 mr-3">📈</span>
                  Academic and career guidance
                </li>
              </ul>
            </div>
            <div className="reveal-up stagger-7">
              <h4 className="text-2xl font-semibold mb-6 text-munsoc-gold-700 dark:text-munsoc-gold-300 flex items-center">
                <span className="text-3xl mr-3">📋</span>
                Requirements
              </h4>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center">
                  <span className="text-munsoc-gold-500 mr-3">🎓</span>
                  Active RIT student status
                </li>
                <li className="flex items-center">
                  <span className="text-munsoc-gold-500 mr-3">📊</span>
                  Minimum 2.5 GPA
                </li>
                <li className="flex items-center">
                  <span className="text-munsoc-gold-500 mr-3">👋</span>
                  Attendance at orientation session
                </li>
                <li className="flex items-center">
                  <span className="text-munsoc-gold-500 mr-3">📅</span>
                  Participation in at least 2 events per semester
                </li>
                <li className="flex items-center">
                  <span className="text-munsoc-gold-500 mr-3">🤲</span>
                  Commitment to collaborative learning
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
