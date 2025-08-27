"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail, Download } from "lucide-react"

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
      className="min-h-screen flex items-center justify-center bg-background"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Professional headshot */}
          <div className="mb-12">
            <img
              src="/pic2.jpg"
              alt="Caleb Okwesie Arthur - Professional headshot"
              className="w-48 h-48 rounded-full mx-auto border-2 border-border shadow-lg 
                hover:scale-105 transform transition-all duration-300 ease-in-out"
            />
          </div>

          {/* Name */}
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Caleb Okwesie Arthur
          </h1>

          {/* Bio/Title */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Faith-Driven Aspiring Entrepreneur | Computer Science @ Ashesi University | Student Member, ICAG (Level 2) | Ashesi Peer Tutor
          </p>

          {/* Contact buttons */}
          <div className="flex justify-center space-x-4 mb-8">
            <Button variant="outline" size="default" asChild>
              <a href="mailto:arthurcaleb12@gmail.com" className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                Email
              </a>
            </Button>
            <Button variant="outline" size="default" asChild>
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
            <Button variant="outline" size="default" asChild>
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

          {/* Call to action */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button variant="ghost" onClick={scrollToProjects} className="text-muted-foreground hover:text-foreground">
              View My Work
              <ArrowDown className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" asChild>
              <a 
                href="/caleb-arthur-resume.pdf" 
                download="Caleb_Okwesie_Arthur_Resume.pdf"
                className="flex items-center gap-2"
              >
                <Download className="h-4 w-4" />
                Download Resume
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
