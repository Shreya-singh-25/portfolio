# Shreya Singh — Portfolio

Modern, responsive portfolio website built with React, Vite, and Lucide Icons showcasing full-stack software development, machine learning ensembles, Java system applications, and certified technical credentials.

## Live Demo & Profile

- **LinkedIn:** [https://www.linkedin.com/in/shreya-singh4b67/](https://www.linkedin.com/in/shreya-singh4b67/)
- **GitHub:** [https://github.com/Shreya-singh-25](https://github.com/Shreya-singh-25)

## Tech Stack

- **Frontend:** React 18, Vite 5
- **Styling:** Modern CSS3, Flexbox, CSS Grid, Custom Design Tokens
- **Icons:** Lucide React
- **Typography:** Space Grotesk, Inter, JetBrains Mono

## Project Structure

```
├── public/
│   └── assets/
│       ├── images/          Profile, project mockups, certifications, campus
│       └── Shreya-Singh-Resume.pdf
├── src/
│   ├── components/          Modular section components
│   │   ├── Navbar.jsx       Sticky navigation & mobile drawer
│   │   ├── Hero.jsx         Introduction, headline & status pill
│   │   ├── About.jsx        Background, philosophy & key stats
│   │   ├── Skills.jsx       Categorized skills & tech pills
│   │   ├── Projects.jsx     Project cards with source code links
│   │   ├── Internships.jsx  Experience & training timeline
│   │   ├── Education.jsx    Academic qualifications & coursework
│   │   ├── Certifications.jsx Verified credentials
│   │   ├── UniversitySpotlight.jsx Interactive campus & tour tabs
│   │   ├── Achievements.jsx Honors, merit grades & milestones
│   │   ├── Resume.jsx       Resume viewer & download panel
│   │   ├── Contact.jsx      Interactive contact form & details
│   │   ├── Footer.jsx       Footer & scroll-to-top button
│   │   ├── ImageModal.jsx   Full-screen image lightbox
│   │   └── ScrollProgress.jsx Scroll progress track
│   ├── data/                Structured data models
│   ├── hooks/               useScrollReveal animation hook
│   ├── index.css            Base styles, variables, typography
│   └── sections.css         Responsive section styles
├── vercel.json              Vercel production configuration
└── vite.config.js           Vite bundler configuration
```

## Running Locally

1. Install dependencies:
```bash
npm install
```

2. Start the local development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

4. Preview production build locally:
```bash
npm run preview
```

## Deployment Guide

### Option 1: Deploying to GitHub

1. Initialize or link your repository:
```bash
git add .
git commit -m "Modern responsive portfolio for Shreya Singh"
git branch -M main
```

2. Point origin to your GitHub account:
```bash
git remote set-url origin https://github.com/Shreya-singh-25/portfolio.git
```
*(If creating a new repo, use `git remote add origin https://github.com/Shreya-singh-25/portfolio.git`)*

3. Push to GitHub:
```bash
git push -u origin main
```

### Option 2: Deploying to Vercel

1. Log in to [vercel.com](https://vercel.com) using your GitHub account.
2. Click **"Add New"** > **"Project"**.
3. Select your `portfolio` repository from your GitHub repository list.
4. Framework Preset will auto-detect **Vite**.
5. Build Command: `npm run build`
6. Output Directory: `dist`
7. Click **"Deploy"**.
8. Within seconds, your site is live with global CDN, SSL certificate, and continuous deployment on every Git push.
