import React from "react";
import { Link } from "react-router-dom";
import ExperienceItem from "../components/ExperienceItem";
import ProjectCard from "../components/ProjectCard";
import StatCard from "../components/StatCard";

// Company logos (ensure these exist in src/assets/logos/)
import walmartLogo from "../assets/logos/walmart.jpg";
import samsungLogo from "../assets/logos/samsung.png";

export default function Portfolio() {
  return (<div className="min-h-screen text-gray-900 antialiased bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
    {/* HEADER */} <header className="bg-white shadow-sm"> <div className="mx-auto max-w-5xl px-6 py-6 flex items-center justify-between"> <div className="flex items-center gap-4"> <div className="h-12 w-12 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white font-semibold">
      ND </div> <div> <h1 className="text-xl font-semibold">
        Naga Dhanya. V — Sr. UI Frontend Developer </h1> <p className="text-sm text-gray-500">
          React · Next.js · TypeScript · Redux · AWS · Maps · Deck.gl </p> </div> </div> <div className="text-sm text-right"> <div className="font-medium">Phone: +1 (479) 388-1947</div> <a href="mailto:dhanya.2048@gmail.com" className="text-indigo-600">
            [Email:dhanya.2048@gmail.com] </a> </div> </div> </header>

    ```
    {/* MAIN CONTENT */}
    <main className="mx-auto max-w-5xl px-6 py-12">
      {/* ABOUT / TECH SKILLS */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2 bg-white rounded-2xl p-8 shadow">
          <h2 className="text-2xl font-semibold mb-3">About</h2>
          <p className="text-gray-700 leading-relaxed">
            I’m a Senior UI/Frontend Developer with 11+ years of experience architecting and building high-performance, accessible, and enterprise-scale web applications.
          </p>
          <p>
            I specialize in <strong>React, Next.js, TypeScript, Redux-Saga, GraphQL, REST APIs, Webpack, Vite, Tailwind CSS, Material-UI, deck.gl, Mapbox</strong>, and advanced data visualization techniques.
          </p>
          <p>
            I design scalable, modular frontends for large engineering teams, focusing on maintainability, performance optimization, and seamless user experiences.
          </p>
          <p>
            Passionate about cutting-edge frontend engineering, I also integrate <strong>real-time rendering, spatial visualizations, and component-driven design systems, progressive web app principles, and cloud-ready architectures</strong> to deliver technically robust and highly engaging solutions for complex enterprise applications.
          </p>


          <div className="mt-6 grid grid-cols-2 gap-4">
            <div>
              <h3 className="text-10m font-medium text-gray-500"><strong>Primary Tech:</strong> </h3>
              <ul className="mt-2 space-y-1 text-sm text-gray-700">
                <li><strong>Frontend Frameworks & Libraries:</strong> React, Next.js, TypeScript, JavaScript (ES6+), Redux, Redux-Saga, MobX, GraphQL, REST APIs</li>
                <li><strong>UI & Styling:</strong> Tailwind CSS, Material-UI, Chakra UI, SCSS, CSS3, HTML5, Styled-Components</li>
                <li><strong>Data Visualization & Spatial:</strong> deck.gl, Mapbox, Nebula.gl, D3.js, Three.js, WebGL</li>
                <li><strong>Backend & Fullstack:</strong> Node.js, Express, NestJS, Serverless functions (AWS Lambda)</li>
                <li><strong>State & Data Management:</strong> Redux, Redux-Saga, Context API, Apollo Client</li>
                <li><strong>Testing & Quality:</strong> Jest, Cypress, React Testing Library, ESLint, Prettier, Storybook</li>
              </ul>
            </div>
            <div>
              <h3 className="text-6m font-medium text-gray-500"><strong>Cloud & Tools:</strong></h3>
              <ul className="mt-2 space-y-1 text-sm text-gray-700">
                <li><strong>Cloud Platforms & Services:</strong> AWS (Lambda, S3, Cognito, CloudFront, API Gateway, DynamoDB), Firebase</li>
                <li><strong>Containerization & Orchestration:</strong> Docker, Kubernetes</li>
                <li><strong>CI/CD & Deployment:</strong> GitHub Actions, GitLab CI/CD, Vercel, Netlify, AWS Amplify</li>
                <li><strong>Build Tools & Module Bundlers:</strong> Webpack, Vite, Rollup, Parcel</li>
                <li><strong>Monitoring & Performance:</strong> Lighthouse, Web Vitals, Sentry, LogRocket</li>
              </ul>
            </div>
          </div>
        </div>

        {/* SIDEBAR HIGHLIGHTS */}
        <aside className="bg-white rounded-2xl p-6 shadow flex flex-col gap-4">
          <div>
              <h3 className="text-6m font-medium text-gray-500"><strong>Design & Collaboration:</strong></h3>
              <ul className="mt-2 space-y-1 text-sm text-gray-700">
                <li><strong>Design Tools & Prototyping:</strong> Figma, Adobe XD, Sketch, InVision</li>
                <li><strong>UX & Accessibility:</strong> WCAG standards, ARIA roles, responsive & mobile-first design, performance optimization</li>
                <li><strong>Agile & Collaboration:</strong> Jira, Trello, Confluence, Slack, Git, Bitbucket</li>
              </ul>
            </div>
            <div>
            <h3 className="text-6m font-semibold text-gray-500"><strong>Highlights:</strong></h3>
            <ul className="mt-3 text-sm text-gray-700 space-y-2">
              <li>Led frontend teams at Walmart & Samsung.</li>
              <li>Micro-frontend migrations, design systems.</li>
              <li>Built geospatial dashboards (deck.gl).</li>
              <li>Accessibility & performance focused.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-500"><strong>Certifications:</strong></h3>
            <div className="mt-2 text-sm text-gray-700">
              Oracle OCI 2022 · Google Analytics 2024
            </div>
          </div>
        </aside>
      </section>

      {/* EXPERIENCE SECTION */}
      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-6">Experience</h2>
        <div className="space-y-6">
          <ExperienceItem
            company="Walmart (Remote)"
            title="Sr. UI Frontend Developer"
            bullets={[
              "Led frontend architecture & team direction.",
              "Migrated legacy apps → micro-frontends.",
              "Implemented CI/CD pipelines (GitHub Actions).",
            ]}
          />
          <ExperienceItem
            company="Samsung — Mountain View, CA"
            title="Sr. Frontend Developer"
            bullets={[
              "Built map & geospatial visualization layers.",
              "Collaborated on design systems in Figma.",
            ]}
          />
          <ExperienceItem
            company="EchoStar"
            title="Sr. Software Developer"
            bullets={[
              "Maintained React/Redux enterprise apps.",
              "Modernized build tooling & UI framework.",
            ]}
          />
          <ExperienceItem
            company="UHG"
            title="Sr. Software Developer"
            bullets={[
              "Delivered production React dashboards.",
              "Integrated RESTful APIs & improved testing.",
            ]}
          />
        </div>
      </section>

      {/* PROJECTS SECTION (Walmart & Samsung only) */}
      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-6">Most Recent Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ProjectCard
            logo={walmartLogo}
            title="Walmart — Analytics Dashboard"
            subtitle="Large-scale retail visualization"
            description="Next.js + deck.gl interactive visualization with micro-frontend architecture and CI/CD."
            tags={["Next.js", "Deck.gl", "Redux Saga", "AWS"]}
          />

          <ProjectCard
            logo={samsungLogo}
            title="Samsung — Geo Visualizer"
            subtitle="Spatial visualization & mapping"
            description="High-performance rendering of millions of map points using Mapbox + WebGL."
            tags={["Mapbox", "Nebula.gl", "WebGL"]}
          />
        </div>
      </section>

      {/* STATS / CONTACT */}
      <section className="mt-12 bg-white rounded-2xl p-8 shadow">
        <h2 className="text-2xl font-semibold mb-4">Contact & Stats</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <StatCard label="Years" value="11+" />
          <StatCard label="Companies" value="Walmart, Samsung, UHG..." />
          <StatCard label="Tech" value="React · Next.js · AWS" />
        </div>
      </section>

      {/* Back to Home button */}
      <div className="mt-8">
        <Link
          to="/"
          className="inline-block px-6 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-500 transition"
        >
          Home
        </Link>
      </div>
    </main>
  </div>

  );
}
