import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Code, Database, Users, Brain, Briefcase, GraduationCap } from "lucide-react"

export function Skills() {
  const technicalSkills = [
    { name: "Python", level: 85, category: "Programming", icon: "🐍" },
    { name: "Java", level: 80, category: "Programming", icon: "☕" },
    { name: "JavaScript", level: 75, category: "Programming", icon: "⚡" },
    { name: "React", level: 70, category: "Frontend", icon: "⚛️" },
    { name: "SQL", level: 85, category: "Database", icon: "🗄️" },
    { name: "TensorFlow", level: 70, category: "AI/ML", icon: "🤖" },
    { name: "Git", level: 90, category: "Tools", icon: "📝" },
    { name: "MySQL", level: 85, category: "Database", icon: "🐬" },
    { name: "Node.js", level: 65, category: "Backend", icon: "🟢" },
    { name: "TypeScript", level: 70, category: "Programming", icon: "📘" },
  ]

  const softSkills = [
    { name: "Critical Thinking", level: "Expert", icon: "🧠" },
    { name: "Problem Solving", level: "Expert", icon: "🔧" },
    { name: "Communication", level: "Advanced", icon: "💬" },
    { name: "Collaboration", level: "Advanced", icon: "🤝" },
    { name: "Leadership", level: "Advanced", icon: "👑" },
    { name: "Project Management", level: "Intermediate", icon: "📊" },
    { name: "Financial Analysis", level: "Intermediate", icon: "💰" },
    { name: "Strategic Planning", level: "Advanced", icon: "🎯" },
  ]

  const education = [
    {
      title: "BSc. Computer Science",
      institution: "Ashesi University",
      period: "2022-2026",
      status: "Dean's List",
      icon: <GraduationCap className="h-6 w-6 text-primary" />,
      color: "bg-primary/10 border-primary/20"
    },
    {
      title: "ICAG Student Member",
      institution: "Institute of Chartered Accountants Ghana",
      period: "2023-Present",
      status: "Level 2 - Professional Qualification",
      icon: <Briefcase className="h-6 w-6 text-secondary" />,
      color: "bg-secondary/10 border-secondary/20"
    },
  ]

  return (
    <section id="skills" className="py-20 bg-card">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-card-foreground mb-6">Skills & Expertise</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A comprehensive overview of my technical skills, soft skills, and educational background.
          </p>
        </div>

        <div className="space-y-16">
          {/* Technical Skills */}
          <div>
            <div className="text-center mb-8">
              <h3 className="font-heading text-2xl md:text-3xl font-bold text-card-foreground mb-4 flex items-center justify-center gap-3">
                <Code className="h-8 w-8 text-primary" />
                Technical Skills
              </h3>
              <p className="text-muted-foreground">Programming languages, frameworks, and tools I work with</p>
            </div>
            
            <Card className="bg-background/50">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  {technicalSkills.map((skill) => (
                    <div key={skill.name} className="space-y-3">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">{skill.icon}</span>
                          <span className="font-semibold text-card-foreground">{skill.name}</span>
                        </div>
                        <Badge variant="secondary" className="text-xs">
                          {skill.category}
                        </Badge>
                      </div>
                      <div className="space-y-2">
                        <Progress value={skill.level} className="h-3 bg-muted" />
                        <div className="flex justify-between text-sm text-muted-foreground">
                          <span>Beginner</span>
                          <span className="font-medium text-primary">{skill.level}%</span>
                          <span>Expert</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Soft Skills */}
          <div>
            <div className="text-center mb-8">
              <h3 className="font-heading text-2xl md:text-3xl font-bold text-card-foreground mb-4 flex items-center justify-center gap-3">
                <Brain className="h-8 w-8 text-secondary" />
                Soft Skills
              </h3>
              <p className="text-muted-foreground">Interpersonal and professional skills that drive success</p>
            </div>
            
            <Card className="bg-background/50">
              <CardContent className="p-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {softSkills.map((skill) => (
                    <div key={skill.name} className="text-center p-4 rounded-lg bg-card border border-border/50 hover:border-primary/30 transition-colors">
                      <div className="text-3xl mb-2">{skill.icon}</div>
                      <h4 className="font-semibold text-card-foreground text-sm mb-1">{skill.name}</h4>
                      <Badge variant="outline" className="text-xs">
                        {skill.level}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Education & Certifications */}
          <div>
            <div className="text-center mb-8">
              <h3 className="font-heading text-2xl md:text-3xl font-bold text-card-foreground mb-4 flex items-center justify-center gap-3">
                <GraduationCap className="h-8 w-8 text-primary" />
                Education & Certifications
              </h3>
              <p className="text-muted-foreground">Academic achievements and professional qualifications</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {education.map((edu, index) => (
                <Card key={index} className={`${edu.color} border`}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      {edu.icon}
                      {edu.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div>
                        <p className="font-semibold text-card-foreground text-lg">{edu.institution}</p>
                        <p className="text-muted-foreground">{edu.period}</p>
                      </div>
                      <Badge variant="secondary" className="text-sm">
                        {edu.status}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
