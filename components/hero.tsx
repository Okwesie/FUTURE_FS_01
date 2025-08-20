"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"

export function Hero() {
  const scrollToProjects = () => {
    const element = document.getElementById("projects")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-card"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <div className="mb-8">
          <img
            src="/pic2.jpg"
            alt="Professional headshot"
            className="w-48 h-48 rounded-full mx-auto mb-8 border-4 border-primary shadow-lg 
              hover:scale-105 transform transition-transform duration-300 ease-in-out"
          />  
          </div>

          <h1 className="font-heading text-4xl md:text-6xl font-bold text-foreground mb-6">Caleb Okwesie Arthur</h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Faith-Driven Aspiring Entrepreneur | Computer Science @ Ashesi University | Student Member, ICAG (Level 2) |
            Ashesi Peer Tutor
          </p>

          <div className="flex justify-center space-x-4 mb-12">
            <Button variant="outline" size="sm" asChild>
              <a href="mailto:arthurcaleb12@gmail.com" className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                Email
              </a>
            </Button>
            <Button variant="outline" size="sm" asChild>
              <a
                href="https://linkedin.com/in/caleb-okwesie-arthur-29b378263"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>
            </Button>
            <Button variant="outline" size="sm" asChild>
              <a
                href="https://github.com/Okwesie"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Github className="h-4 w-4" />
                GitHub
              </a>
            </Button>
          </div>

          <Button onClick={scrollToProjects} size="lg" className="group">
            View My Work
            <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  )
}
