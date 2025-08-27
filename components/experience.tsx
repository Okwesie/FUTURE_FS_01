import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Briefcase, Award, Users, Download } from "lucide-react"

export function Experience() {
  const experiences = [
    {
      title: "Peer Tutor",
      company: "Ashesi University",
      period: "2024-2025",
      type: "Part-time",
      description:
        "Tutoring students in Computing and Calculus, helping them understand complex concepts and improve their academic performance.",
      skills: ["Teaching", "Communication", "Problem Solving"],
    },
    {
      title: "Finance Intern (Shadowing)",
      company: "Dikan, Accra",
      period: "Jul-Aug 2023",
      type: "Internship",
      description:
        "Assisted in financial reporting and budget planning, gaining hands-on experience in corporate finance operations.",
      skills: ["Financial Analysis", "Budget Planning", "Reporting"],
    },
    {
      title: "ERP Intern",
      company: "IPMC, Accra",
      period: "Oct-Dec 2022",
      type: "Internship",
      description:
        "Trained in ERP systems and management, learning enterprise resource planning and business process optimization.",
      skills: ["ERP Systems", "Business Process", "Data Management"],
    },
    {
      title: "Junior Accountant",
      company: "Jonad Association, Accra",
      period: "Aug-Sep 2019",
      type: "Part-time",
      description: "Prepared reports, handled secretarial duties, and facilitated inter-department communication.",
      skills: ["Accounting", "Report Writing", "Communication"],
    },
  ]

  const achievements = [
    {
      title: "Dean's List",
      organization: "Ashesi University",
      year: "2023-Present",
      description: "Recognized for academic excellence with GPA of 3.56/4.00",
    },
    {
      title: "EmpowerAbled Recognition",
      organization: "Africa Dyslexia, British Educational Council",
      year: "2023",
      description: "International recognition for student-led initiative supporting learners with disabilities",
    },
  ]

  const leadership = [
    {
      role: "CFO",
      organization: "EmpowerAbled",
      period: "2023",
      description:
        "Led financial planning and resource management for internationally recognized disability support initiative",
    },
    {
      role: "Member",
      organization: "Ashesi Student Council",
      period: "2023-2024",
      description: "Contributed to outreach and finance committees, organizing student events and managing budgets",
    },
    {
      role: "Bassist & Pianist",
      organization: "Ashesi Ensemble Club",
      period: "2022-Present",
      description: "Active member of university music ensemble, performing at various campus events",
    },
  ]

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Experience & Achievements
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My professional journey, leadership roles, and academic achievements that have shaped my career.
          </p>
        </div>

        {/* Resume Download */}
        <div className="text-center mb-12">
          <Button size="lg" asChild className="group">
            <a 
              href="/caleb-arthur-resume.pdf" 
              download="Caleb_Okwesie_Arthur_Resume.pdf"
              className="flex items-center gap-2"
            >
              <Download className="mr-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
              Download Resume
            </a>
          </Button>
        </div>

        {/* Work Experience */}
        <div className="mb-16">
          <h3 className="font-heading text-2xl font-semibold text-foreground mb-8 flex items-center gap-2">
            <Briefcase className="h-6 w-6 text-primary" />
            Work Experience
          </h3>
          <div className="grid gap-6">
            {experiences.map((exp, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <div>
                      <CardTitle className="text-xl">{exp.title}</CardTitle>
                      <p className="text-primary font-medium">{exp.company}</p>
                    </div>
                    <div className="flex gap-2">
                      <Badge variant="outline">{exp.period}</Badge>
                      <Badge variant="secondary">{exp.type}</Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <Badge key={skill} variant="outline" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="mb-16">
          <h3 className="font-heading text-2xl font-semibold text-foreground mb-8 flex items-center gap-2">
            <Award className="h-6 w-6 text-primary" />
            Achievements
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{achievement.title}</CardTitle>
                  <p className="text-primary font-medium">{achievement.organization}</p>
                </CardHeader>
                <CardContent>
                  <Badge variant="secondary" className="mb-3">
                    {achievement.year}
                  </Badge>
                  <p className="text-muted-foreground">{achievement.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Leadership */}
        <div>
          <h3 className="font-heading text-2xl font-semibold text-foreground mb-8 flex items-center gap-2">
            <Users className="h-6 w-6 text-primary" />
            Leadership & Co-Curricular
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {leadership.map((role, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{role.role}</CardTitle>
                  <p className="text-primary font-medium">{role.organization}</p>
                </CardHeader>
                <CardContent>
                  <Badge variant="outline" className="mb-3">
                    {role.period}
                  </Badge>
                  <p className="text-muted-foreground text-sm">{role.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
