
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function EventCarousel() {
  return (
    <section id="events" className="py-20 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 animated-bg opacity-5"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 reveal-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 munsoc-text-gradient">
            Upcoming Events
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover exciting opportunities to grow your diplomatic skills
          </p>
        </div>

        {/* Empty state with call to action */}
        <div className="max-w-4xl mx-auto">
          <Card className="munsoc-glass hover:shadow-2xl transition-all duration-500 transform hover:scale-105 reveal-scale stagger-2">
            <CardHeader className="text-center py-16">
              <div className="text-8xl mb-8 animate-bounce">🗓️</div>
              <CardTitle className="text-3xl md:text-4xl munsoc-text-gradient mb-4">
                Events Coming Soon
              </CardTitle>
              <CardDescription className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our team is curating amazing Model UN experiences for you. 
                Stay tuned for conference announcements, workshops, and training sessions!
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center pb-16">
              <div className="space-y-4 mb-8">
                <div className="flex justify-center space-x-8">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-munsoc-teal-600">🏛️</div>
                    <p className="text-sm text-muted-foreground">Conferences</p>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-munsoc-gold-600">🎯</div>
                    <p className="text-sm text-muted-foreground">Training</p>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-munsoc-teal-600">⚡</div>
                    <p className="text-sm text-muted-foreground">Workshops</p>
                  </div>
                </div>
              </div>
              
              <Button 
                size="lg"
                className="bg-gradient-to-r from-munsoc-teal-600 to-munsoc-gold-600 hover:from-munsoc-teal-700 hover:to-munsoc-gold-700 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Get Notified
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
