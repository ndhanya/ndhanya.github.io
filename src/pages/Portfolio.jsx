import React from "react";
import ExperienceItem from "../components/ExperienceItem";
import ProjectCard from "../components/ProjectCard";
import StatCard from "../components/StatCard";

export default function Portfolio() {
  return (
    <div className="min-h-screen text-gray-900 antialiased bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      {/* HEADER */}
      <header className="bg-white shadow-sm">
        <div className="mx-auto max-w-5xl px-6 py-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white font-semibold">
              ND
            </div>
            <div>
              <h1 className="text-xl font-semibold">
                Naga Dhanya. V — Sr. UI Frontend Developer
              </h1>
              <p className="text-sm text-gray-500">
                React · Next.js · TypeScript · Redux · AWS · Maps · Deck.gl
              </p>
            </div>
          </div>
          <div className="text-sm text-right">
            <div className="font-medium">+1 (479) 388-1947</div>
            <a
              href="mailto:dhanya.2048@gmail.com"
              className="text-indigo-600"
            >
              dhanya.2048@gmail.com
            </a>
          </div>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="mx-auto max-w-5xl px-6 py-12">
        {/* ABOUT / TECH SKILLS */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 bg-white rounded-2xl p-8 shadow">
            <h2 className="text-2xl font-semibold mb-3">About</h2>
            <p className="text-gray-700 leading-relaxed">
              I’m a Senior UI / Frontend Developer with 11+ years building
              performant, accessible, and enterprise-scale web applications. I
              specialize in React & Next.js, complex state management
              (Redux-Saga), spatial visualizations (deck.gl, Mapbox), and
              architecting scalable frontends for large engineering teams.
            </p>

            <div className="mt-6 grid grid-cols-2 gap-4">
              <div>
                <h3 className="text-sm font-medium text-gray-500">
                  Primary Tech
                </h3>
                <ul className="mt-2 space-y-1 text-sm text-gray-700">
                  <li>React, Next.js, TypeScript</li>
                  <li>Redux, Saga, GraphQL</li>
                  <li>Node.js, Express</li>
                  <li>Deck.gl, Mapbox, Nebula.gl</li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500">
                  Cloud & Tools
                </h3>
                <ul className="mt-2 space-y-1 text-sm text-gray-700">
                  <li>AWS (Lambda, S3, Cognito)</li>
                  <li>Docker, Kubernetes</li>
                  <li>Webpack, Jest, Cypress</li>
                  <li>Figma, Tailwind, Material UI</li>
                </ul>
              </div>
            </div>
          </div>

          {/* SIDEBAR HIGHLIGHTS */}
          <aside className="bg-white rounded-2xl p-6 shadow flex flex-col gap-4">
            <div>
              <h3 className="text-sm font-semibold text-gray-500">
                Highlights
              </h3>
              <ul className="mt-3 text-sm text-gray-700 space-y-2">
                <li>Led frontend teams at Walmart & Samsung.</li>
                <li>Micro-frontend migrations, design systems.</li>
                <li>Built geospatial dashboards (deck.gl).</li>
                <li>Accessibility & performance focused.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-500">
                Certifications
              </h3>
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
              //period="Jun 2023 — Nov 2025"
              bullets={[
                "Led frontend architecture & team direction.",
                "Migrated legacy apps → micro-frontends.",
                "Implemented CI/CD pipelines (GitHub Actions).",
              ]}
            />

            <ExperienceItem
              company="Samsung — Mountain View, CA"
              title="Sr. Frontend Developer"
              //period="Jan 2021 — Jun 2023"
              bullets={[
                "Built map & geospatial visualization layers.",
                "Collaborated on design systems in Figma.",
              ]}
            />

            <ExperienceItem
              company="EchoStar"
              title="Sr. Software Developer"
              //period="Feb 2019 — Jan 2021"
              bullets={[
                "Maintained React/Redux enterprise apps.",
                "Modernized build tooling & UI framework.",
              ]}
            />

            <ExperienceItem
              company="UHG"
              title="Sr. Software Developer"
              //period="Jun 2016 — Jan 2019"
              bullets={[
                "Delivered production React dashboards.",
                "Integrated RESTful APIs & improved testing.",
              ]}
            />
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section className="mt-12">
          <h2 className="text-3xl font-semibold mb-6">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ProjectCard
              title="Walmart — Analytics Dashboard"
              subtitle="Large-scale retail visualization"
              description="Next.js + deck.gl interactive visualization with micro-frontend architecture and CI/CD."
              tags={["Next.js", "Deck.gl", "Redux Saga", "AWS"]}
            />
            <ProjectCard
              title="Samsung — Geo Visualizer"
              subtitle="Spatial visualization & mapping"
              description="High-performance rendering of millions of map points using Mapbox + WebGL."
              tags={["Mapbox", "Nebula.gl", "WebGL"]}
            />
            <ProjectCard
              title="Internal Design System"
              subtitle="Component library"
              description="Built a modern React component library with Storybook + Figma design tokens."
              tags={["React", "Storybook", "Figma"]}
            />
            <ProjectCard
              title="Sitefinity Integrations"
              subtitle="CMS personalization"
              description="Built multi-site content personalization & caching optimization."
              tags={["Sitefinity", "CMS", "C#"]}
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
      </main>
    </div>
  );
}
