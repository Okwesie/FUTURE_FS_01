import { Card, CardContent } from "@/components/ui/card"

export function About() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionate about technology, AI, and finance, I aim to build innovative solutions that solve real-world
            challenges while creating social impact.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="/placeholder.svg?height=400&width=400"
              alt="Caleb at Ashesi University"
              className="w-full rounded-lg shadow-lg"
            />
          </div>

          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-heading text-xl font-semibold text-card-foreground mb-3">My Journey</h3>
                <p className="text-muted-foreground leading-relaxed">
                  I am a highly self-motivated individual combining technical expertise in computer science with
                  financial knowledge from ICAG. My experiences range from software development to finance internships,
                  alongside leadership roles in student initiatives such as EmpowerAbled, which was recognized by Africa
                  Dyslexia and the British Educational Council.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-heading text-xl font-semibold text-card-foreground mb-3">My Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  I am driven by faith, collaboration, and continuous learning, with the goal of merging finance and
                  technology to positively transform industries and society. I believe in creating solutions that not
                  only solve problems but also empower communities.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-heading text-xl font-semibold text-card-foreground mb-3">Beyond Code</h3>
                <p className="text-muted-foreground leading-relaxed">
                  When I'm not coding or studying, you'll find me playing piano or bass guitar, capturing moments
                  through photography, or on the football field. I'm also passionate about reading Christian literature
                  and engaging in community service.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
