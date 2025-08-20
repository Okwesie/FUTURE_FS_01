# Caleb Okwesie Arthur - Portfolio Website

> **Task 1 - Future Interns Internship Program**  
> This portfolio website was developed as the first task of my internship with Future Interns, showcasing modern web development skills and professional presentation.

## 🚀 Overview

A modern, responsive personal portfolio website showcasing my skills, projects, and achievements as a Computer Science student at Ashesi University and aspiring software developer specializing in AI/ML and Fintech.

## ✨ Features

- **Interactive Resume & Portfolio Section** - Comprehensive display of skills, experience, and projects
- **Contact Form with Email Notifications** - Functional contact system for professional inquiries
- **SEO Optimized** - Enhanced search engine visibility with structured data and meta tags
- **Responsive Design** - Mobile-first approach ensuring optimal viewing on all devices
- **Dark/Light Mode Support** - Theme switching for better user experience
- **Smooth Animations** - Engaging user interactions with performance optimizations
- **Accessibility Focused** - WCAG compliant with proper ARIA labels and keyboard navigation

## 🛠️ Tech Stack

### Frontend
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui
- **Fonts**: Space Grotesk, DM Sans
- **Icons**: Lucide React

### Backend
- **Runtime**: Node.js
- **API Routes**: Next.js API Routes
- **Email Service**: Nodemailer (configured for contact form)

## 📦 Installation

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Setup Instructions

1. **Clone the repository**
   \`\`\`bash
   git clone https://github.com/Okwesie/caleb-portfolio.git
   cd caleb-portfolio
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   \`\`\`

3. **Set up environment variables**
   Create a `.env.local` file in the root directory:
   \`\`\`env
   # Email Configuration (for contact form)
   SMTP_HOST=your-smtp-host
   SMTP_PORT=587
   SMTP_USER=your-email@example.com
   SMTP_PASS=your-app-password
   CONTACT_EMAIL=your-contact-email@example.com
   
   # Optional: Analytics
   NEXT_PUBLIC_GA_ID=your-google-analytics-id
   \`\`\`

4. **Run the development server**
   \`\`\`bash
   npm run dev
   \`\`\`

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Project Structure

\`\`\`
caleb-portfolio/
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.ts          # Contact form API endpoint
│   ├── globals.css               # Global styles and Tailwind config
│   ├── layout.tsx                # Root layout with SEO metadata
│   ├── page.tsx                  # Main portfolio page
│   ├── robots.ts                 # SEO robots configuration
│   └── sitemap.ts                # Dynamic sitemap generation
├── components/
│   ├── ui/                       # Reusable UI components (shadcn/ui)
│   ├── about.tsx                 # About section component
│   ├── contact.tsx               # Contact form and info
│   ├── experience.tsx            # Work experience timeline
│   ├── footer.tsx                # Site footer
│   ├── hero.tsx                  # Hero/landing section
│   ├── navigation.tsx            # Main navigation
│   ├── projects.tsx              # Projects showcase
│   └── skills.tsx                # Skills and education display
├── hooks/                        # Custom React hooks
├── lib/
│   └── utils.ts                  # Utility functions
├── public/                       # Static assets
└── README.md                     # Project documentation
\`\`\`

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Configure environment variables in Vercel dashboard
4. Deploy automatically on every push

### Other Platforms
The project can be deployed on any platform supporting Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 🤝 Contributing

While this is a personal portfolio, suggestions and improvements are welcome!

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/improvement`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/improvement`)
5. Open a Pull Request

## 📞 Contact

**Caleb Okwesie Arthur**
- Email: [arthurcaleb12@gmail.com](mailto:arthurcaleb12@gmail.com)
- LinkedIn: [caleb-okwesie-arthur-29b378263](https://linkedin.com/in/caleb-okwesie-arthur-29b378263)
- GitHub: [@Okwesie](https://github.com/Okwesie)

*Built with ❤️ by Caleb Okwesie Arthur | Computer Science Student @ Ashesi University*
