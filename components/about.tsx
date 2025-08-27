import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, Heart, Target, Users } from "lucide-react"

export function About() {
  const achievements = [
    {
      title: "Dean's List",
      description: "3.56/4.00 GPA at Ashesi University",
      icon: <Award className="h-6 w-6 text-primary" />,
      color: "bg-primary/10 border-primary/20"
    },
    {
      title: "EmpowerAbled Recognition",
      description: "Recognized by Africa Dyslexia & British Educational Council",
      icon: <Heart className="h-6 w-6 text-secondary" />,
      color: "bg-secondary/10 border-secondary/20"
    },
    {
      title: "ICAG Student Member",
      description: "Level 2 - Professional Accounting Qualification",
      icon: <Target className="h-6 w-6 text-primary" />,
      color: "bg-primary/10 border-primary/20"
    },
    {
      title: "Peer Tutor",
      description: "Supporting fellow students in Computer Science",
      icon: <Users className="h-6 w-6 text-secondary" />,
      color: "bg-secondary/10 border-secondary/20"
    }
  ]

  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">About Me</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Passionate about technology, AI, and finance, I aim to build innovative solutions that solve real-world
            challenges while creating social impact.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Column */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-primary/20 rounded-2xl blur-xl"></div>
              <img
                src="/profile_pic.jpg"
                alt="Caleb Okwesie Arthur at Ashesi University"
                className="relative w-full rounded-2xl shadow-2xl border border-border/50"
              />
            </div>
          </div>

          {/* Content Column */}
          <div className="order-1 lg:order-2 space-y-8">
            {/* Personal Story */}
            <Card className="border-primary/20 bg-primary/5">
              <CardHeader>
                <CardTitle className="text-2xl font-heading text-primary">My Journey</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  I am a highly self-motivated individual combining technical expertise in computer science with
                  financial knowledge from ICAG. My experiences range from software development to finance internships,
                  alongside leadership roles in student initiatives such as <span className="text-primary font-semibold">EmpowerAbled</span>, 
                  which was recognized by Africa Dyslexia and the British Educational Council.
                </p>
              </CardContent>
            </Card>

            {/* Mission Statement */}
            <Card className="border-secondary/20 bg-secondary/5">
              <CardHeader>
                <CardTitle className="text-2xl font-heading text-secondary">My Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  I am driven by faith, collaboration, and continuous learning, with the goal of merging finance and
                  technology to positively transform industries and society. I believe in creating solutions that not
                  only solve problems but also empower communities.
                </p>
              </CardContent>
            </Card>

            {/* Key Achievements */}
            <div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-4">Key Achievements</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {achievements.map((achievement, index) => (
                  <Card key={index} className={`${achievement.color} border`}>
                    <CardContent className="p-4">
                      <div className="flex items-start gap-3">
                        {achievement.icon}
                        <div>
                          <h4 className="font-semibold text-foreground">{achievement.title}</h4>
                          <p className="text-sm text-muted-foreground">{achievement.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Beyond Code */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-heading">Beyond Code</CardTitle>
              </CardHeader>
              <CardContent>
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
