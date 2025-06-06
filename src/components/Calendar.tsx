
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function Calendar() {
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

        {/* Empty calendar state */}
        <div className="max-w-4xl mx-auto">
          <Card className="munsoc-glass hover:shadow-2xl transition-all duration-500 transform hover:scale-105 reveal-scale stagger-1">
            <CardHeader className="text-center py-16">
              <div className="relative mb-8">
                <div className="text-8xl animate-bounce">📅</div>
                <div className="absolute inset-0 bg-gradient-to-br from-munsoc-teal-400 to-munsoc-gold-400 rounded-full opacity-20 blur-2xl"></div>
              </div>
              <CardTitle className="text-3xl md:text-4xl munsoc-text-gradient mb-4">
                Calendar Loading...
              </CardTitle>
              <CardDescription className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our administrative team is preparing an exciting calendar of events. 
                From Model UN conferences to training workshops, stay tuned for updates!
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center pb-16">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                <div className="text-center p-4 rounded-lg munsoc-glass hover:shadow-lg transition-all duration-300 reveal-up stagger-2">
                  <div className="text-3xl mb-2">🏛️</div>
                  <p className="text-sm font-semibold text-munsoc-teal-600">Conferences</p>
                  <p className="text-xs text-muted-foreground">Coming Soon</p>
                </div>
                <div className="text-center p-4 rounded-lg munsoc-glass hover:shadow-lg transition-all duration-300 reveal-up stagger-3">
                  <div className="text-3xl mb-2">🎯</div>
                  <p className="text-sm font-semibold text-munsoc-gold-600">Training</p>
                  <p className="text-xs text-muted-foreground">In Progress</p>
                </div>
                <div className="text-center p-4 rounded-lg munsoc-glass hover:shadow-lg transition-all duration-300 reveal-up stagger-4">
                  <div className="text-3xl mb-2">⚡</div>
                  <p className="text-sm font-semibold text-munsoc-teal-600">Workshops</p>
                  <p className="text-xs text-muted-foreground">Planning</p>
                </div>
                <div className="text-center p-4 rounded-lg munsoc-glass hover:shadow-lg transition-all duration-300 reveal-up stagger-5">
                  <div className="text-3xl mb-2">🎉</div>
                  <p className="text-sm font-semibold text-munsoc-gold-600">Social Events</p>
                  <p className="text-xs text-muted-foreground">Soon</p>
                </div>
              </div>
              
              <Button 
                size="lg"
                className="bg-gradient-to-r from-munsoc-teal-600 to-munsoc-gold-600 hover:from-munsoc-teal-700 hover:to-munsoc-gold-700 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 reveal-up stagger-6"
              >
                Subscribe to Updates
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
