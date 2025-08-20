import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Code, Database, Brain, Users } from "lucide-react"

export function Projects() {
  const projects = [
    {
      title: "Ashesi Admissions Streamlining App",
      description:
        "Automated and simplified Ashesi's admissions process using Java. Built a comprehensive system to handle student applications, document management, and admission decisions efficiently.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["Java", "Object-Oriented Programming", "File Management", "GUI Development"],
      category: "Academic System",
      icon: <Code className="h-5 w-5" />,
      githubUrl: "https://github.com/Okwesie",
      liveUrl: null,
      featured: true,
    },
    {
      title: "Drug Effectiveness Predictor App",
      description:
        "ML-based application that predicts the effectiveness of drugs using Python, TensorFlow, and Streamlit. Implements machine learning algorithms to analyze drug data and provide effectiveness predictions.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["Python", "TensorFlow", "Streamlit", "Machine Learning", "Data Analysis"],
      category: "AI/ML",
      icon: <Brain className="h-5 w-5" />,
      githubUrl: "https://github.com/Okwesie",
      liveUrl: null,
      featured: true,
    },
    {
      title: "Restaurant Management App",
      description:
        "A comprehensive system for managing restaurant operations efficiently using Java and Hash Table data structures. Features include order management, inventory tracking, and customer service optimization.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["Java", "Hash Tables", "Data Structures", "System Design"],
      category: "Business System",
      icon: <Database className="h-5 w-5" />,
      githubUrl: "https://github.com/Okwesie",
      liveUrl: null,
      featured: false,
    },
    {
      title: "Gallery Management App",
      description:
        "System to organize and manage gallery exhibits and collections using SQL and Streamlit. Provides comprehensive database management for artwork, exhibitions, and visitor information.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["SQL", "Streamlit", "Database Design", "Python"],
      category: "Management System",
      icon: <Database className="h-5 w-5" />,
      githubUrl: "https://github.com/Okwesie",
      liveUrl: null,
      featured: false,
    },
    {
      title: "EmpowerAbled Initiative",
      description:
        "Student-led initiative supporting learners with disabilities. Recognized internationally by Africa Dyslexia and the British Educational Council. Led financial planning and resource management as CFO.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["Leadership", "Project Management", "Financial Planning", "Community Impact"],
      category: "Social Impact",
      icon: <Users className="h-5 w-5" />,
      githubUrl: null,
      liveUrl: null,
      featured: true,
    },
    {
      title: "Ghana Railway System Optimization Research",
      description:
        "Research project exploring the impact of optimizing Ghana's railway system on national GDP growth using simulation modeling. Currently in progress for 2025 completion.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: ["Research", "Simulation Modeling", "Economic Analysis", "Data Visualization"],
      category: "Research",
      icon: <Brain className="h-5 w-5" />,
      githubUrl: null,
      liveUrl: null,
      featured: true,
    },
  ]

  const featuredProjects = projects.filter((project) => project.featured)
  const otherProjects = projects.filter((project) => !project.featured)

  return (
    <section id="projects" className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-card-foreground mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my technical projects, research work, and leadership initiatives that demonstrate my skills
            and impact.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <div className="grid lg:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <Card key={index} className="group hover:shadow-lg transition-shadow duration-300">
                <div className="aspect-video overflow-hidden rounded-t-lg">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-2">
                      {project.icon}
                      <CardTitle className="text-xl">{project.title}</CardTitle>
                    </div>
                    <Badge variant="secondary" className="shrink-0">
                      {project.category}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    {project.githubUrl && (
                      <Button variant="outline" size="sm" asChild>
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          <Github className="h-4 w-4" />
                          Code
                        </a>
                      </Button>
                    )}
                    {project.liveUrl && (
                      <Button size="sm" asChild>
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          <ExternalLink className="h-4 w-4" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="font-heading text-2xl font-semibold text-card-foreground mb-8">Other Projects</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {otherProjects.map((project, index) => (
              <Card key={index} className="group hover:shadow-md transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-2">
                      {project.icon}
                      <CardTitle className="text-lg">{project.title}</CardTitle>
                    </div>
                    <Badge variant="outline" className="shrink-0">
                      {project.category}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{project.technologies.length - 3} more
                      </Badge>
                    )}
                  </div>
                  <div className="flex gap-2">
                    {project.githubUrl && (
                      <Button variant="outline" size="sm" asChild>
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          <Github className="h-4 w-4" />
                          Code
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">Interested in collaborating or learning more about my work?</p>
          <Button size="lg" asChild>
            <a
              href="https://github.com/Okwesie"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Github className="h-5 w-5" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
