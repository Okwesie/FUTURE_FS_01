import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Code, Database, Users } from "lucide-react"

export function Skills() {
  const technicalSkills = [
    { name: "Python", level: 90, category: "Programming" },
    { name: "Java", level: 85, category: "Programming" },
    { name: "JavaScript", level: 75, category: "Programming" },
    { name: "SQL", level: 80, category: "Database" },
    { name: "React", level: 70, category: "Frontend" },
    { name: "TensorFlow", level: 75, category: "AI/ML" },
    { name: "Git", level: 85, category: "Tools" },
    { name: "MySQL", level: 80, category: "Database" },
  ]

  const softSkills = [
    "Critical Thinking",
    "Problem Solving",
    "Communication",
    "Collaboration",
    "Leadership",
    "Project Management",
    "Financial Analysis",
    "Strategic Planning",
  ]

  const certifications = [
    {
      title: "BSc. Computer Science",
      institution: "Ashesi University",
      period: "2022-2026",
      gpa: "3.56/4.00 (Dean's List)",
      icon: <Code className="h-5 w-5" />,
    },
    {
      title: "ICAG Student Member",
      institution: "Institute of Chartered Accountants Ghana",
      period: "2023-Present",
      gpa: "Level 2",
      icon: <Database className="h-5 w-5" />,
    },
  ]

  return (
    <section id="skills" className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-card-foreground mb-4">Skills & Expertise</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical skills, soft skills, and educational background.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Technical Skills */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Code className="h-5 w-5 text-primary" />
                Technical Skills
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                {technicalSkills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-card-foreground">{skill.name}</span>
                      <Badge variant="secondary" className="text-xs">
                        {skill.category}
                      </Badge>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Soft Skills */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                Soft Skills
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {softSkills.map((skill) => (
                  <Badge key={skill} variant="outline" className="text-sm">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Education & Certifications */}
        <div className="grid md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  {cert.icon}
                  {cert.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="font-medium text-card-foreground">{cert.institution}</p>
                  <p className="text-muted-foreground">{cert.period}</p>
                  <Badge variant="secondary">{cert.gpa}</Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
