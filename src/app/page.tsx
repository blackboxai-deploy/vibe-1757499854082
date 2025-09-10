"use client";

import React from "react";

// Dr. Pilot — AVMED Recruitment single-file React component
// Uses Tailwind classes for styling (no imports required in the file)
// This component is a single-page landing site inspired by a modern enterprise layout.

export default function DrPilotAVMEDSite() {
  return (
    <div className="min-h-screen bg-white text-gray-800 antialiased">
      {/* Top navigation */}
      <header className="bg-white shadow sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-red-400 rounded-md flex items-center justify-center text-white font-semibold">DP</div>
            <div>
              <h1 className="text-lg font-semibold leading-none">Dr. Pilot AVMED Recruitment</h1>
              <p className="text-xs text-gray-500">Made in Africa — Global Impact</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#program" className="hover:text-red-600">Program</a>
            <a href="#partners" className="hover:text-red-600">Partners</a>
            <a href="#schools" className="hover:text-red-600">Aviation High Schools</a>
            <a href="#press" className="hover:text-red-600">Press</a>
            <a href="#contact" className="px-4 py-2 bg-red-600 text-white rounded-md shadow-sm">Apply / Contact</a>
          </nav>

          <div className="md:hidden"> 
            <button aria-label="Open menu" className="p-2 rounded-md border"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M3 5h14a1 1 0 010 2H3a1 1 0 010-2zm0 4h14a1 1 0 010 2H3a1 1 0 010-2zm0 4h14a1 1 0 010 2H3a1 1 0 010-2z" clipRule="evenodd"/></svg></button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <main className="pt-10">
        <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">Doctor-on-Board Initiative — <span className="text-red-600">Dr. Pilot AVMED Recruitment</span></h2>
            <p className="mt-4 text-lg text-gray-600">A world‑first program originating in Africa that retrains qualified doctors using immersive VR pilot training and places them onboard commercial flights as certified <strong>Pilot‑Doctors</strong>. Workforce transformation, passenger safety, and female leadership — scaled through airline partnerships.</p>

            <div className="mt-6 flex flex-wrap gap-4">
              <a href="#apply" className="inline-block px-6 py-3 bg-red-600 text-white rounded-md font-medium">Apply as a Doctor</a>
              <a href="#schools" className="inline-block px-6 py-3 border border-red-600 text-red-600 rounded-md font-medium">Buy a Dr. Pilot School</a>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4 text-sm text-gray-600">
              <div className="p-4 bg-gray-50 rounded-md">
                <strong className="block text-xl">R50</strong>
                <span>per ticket funds Pilot‑Doctor training</span>
              </div>
              <div className="p-4 bg-gray-50 rounded-md">
                <strong className="block text-xl">200+</strong>
                <span>Pilot‑Doctors deployed across HEIRI routes</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            {/* Big visual: Black female pilot in VR headset branded Dr. Pilot */}
            <div className="rounded-xl overflow-hidden shadow-lg bg-gray-50">
              <img src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/854428aa-29e1-4208-905d-ae2a2d7ceadc.png" alt="Black female pilot wearing VR headset with Dr. Pilot branding during professional aviation training" className="w-full h-96 object-cover" />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-white rounded-md shadow-sm border">
                <h4 className="font-semibold">VR Classrooms</h4>
                <p className="text-sm text-gray-500">Remote, immersive training for fast, safe upskilling.</p>
              </div>
              <div className="p-4 bg-white rounded-md shadow-sm border">
                <h4 className="font-semibold">Teacher Ownership</h4>
                <p className="text-sm text-gray-500">Empowering female teachers to own and run local aviation schools.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Program detail sections */}
        <section id="program" className="mt-20 bg-gradient-to-b from-white to-gray-50 py-14">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-bold">Program Overview</h3>
              <p className="mt-4 text-gray-600">Dr. Pilot AVMED Recruitment delivers a three‑pillar model: recruitment, training, and deployment. We identify unemployed medical doctors across South Africa, provide them with intensive VR‑optimised pilot training and aviation medical certification, and deploy them as Pilot‑Doctors across partner airline routes. The model is funded sustainably through a passenger‑linked contribution managed transparently.</p>

              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 bg-white rounded-lg border shadow-sm">
                  <h4 className="font-semibold">Recruitment</h4>
                  <p className="text-sm text-gray-500 mt-2">Targeted outreach, partnered with medical associations and community groups to find qualified candidates.</p>
                </div>
                <div className="p-6 bg-white rounded-lg border shadow-sm">
                  <h4 className="font-semibold">VR Training</h4>
                  <p className="text-sm text-gray-500 mt-2">Immersive simulation reduces training time by up to 40% and lowers cost barriers.</p>
                </div>
                <div className="p-6 bg-white rounded-lg border shadow-sm">
                  <h4 className="font-semibold">Dual Certification</h4>
                  <p className="text-sm text-gray-500 mt-2">Graduates receive both aviation medical certification and commercial pilot credentials.</p>
                </div>
                <div className="p-6 bg-white rounded-lg border shadow-sm">
                  <h4 className="font-semibold">Deployment</h4>
                  <p className="text-sm text-gray-500 mt-2">Rostering across HEIRI routes with prioritized placements on long‑haul services.</p>
                </div>
              </div>
            </div>

            <aside className="p-6 bg-red-50 rounded-lg border">
              <h4 className="font-semibold text-red-700">Why Partner?</h4>
              <ul className="mt-4 space-y-3 text-sm text-gray-700">
                <li>Reduce diversion costs and improve passenger outcomes</li>
                <li>Deliver measurable social impact and job creation</li>
                <li>Position your airline as a global safety leader</li>
              </ul>
              <a href="#partners" className="mt-6 inline-block px-4 py-2 bg-red-600 text-white rounded-md">See Partners</a>
            </aside>
          </div>
        </section>

        {/* Recruitment segments */}
        <section id="recruitment" className="max-w-7xl mx-auto px-6 py-16">
          <h3 className="text-2xl font-bold">Recruitment Segments</h3>
          <p className="mt-2 text-gray-600">Multiple pathways to join or partner with Dr. Pilot AVMED Recruitment.</p>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 border rounded-lg">
              <h4 className="font-semibold">Doctors</h4>
              <p className="text-sm text-gray-500 mt-2">Qualified medical doctors are recruited, trained, and dual-certified before deployment to airline rosters.</p>
              <a className="mt-4 inline-block text-red-600 font-medium" href="#apply">Apply as a Doctor →</a>
            </div>

            <div className="p-6 border rounded-lg">
              <h4 className="font-semibold">Female Teachers — School Owners</h4>
              <p className="text-sm text-gray-500 mt-2">Purchase and operate Dr. Pilot Aviation High Schools, creating localized pipelines that empower students and teachers.</p>
              <a className="mt-4 inline-block text-red-600 font-medium" href="#schools">Own a School →</a>
            </div>

            <div className="p-6 border rounded-lg">
              <h4 className="font-semibold">Airline Partners</h4>
              <p className="text-sm text-gray-500 mt-2">Work with us on rostering, funding transparency, and operational integration to ensure passenger safety.</p>
              <a className="mt-4 inline-block text-red-600 font-medium" href="#partners">Partner →</a>
            </div>
          </div>
        </section>

        {/* Aviation high schools for teachers */}
        <section id="schools" className="bg-gradient-to-b from-gray-50 to-white py-16">
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold">Dr. Pilot Aviation High Schools — Teacher-Owned & Operated</h3>
              <p className="mt-4 text-gray-600">We offer a franchise-style model enabling female public school teachers to purchase, own and operate Dr. Pilot Aviation High Schools. Each school becomes a community hub for aviation and STEM pathways for young people, with direct feeder links into the Pilot-Doctor pipeline.</p>

              <ul className="mt-6 space-y-3 text-sm text-gray-700">
                <li><strong>Turnkey Setup:</strong> Curriculum, VR classrooms, and instructor training included.</li>
                <li><strong>Revenue Sharing:</strong> Local tuition, government subsidies, and recruitment bonuses for referrals.</li>
                <li><strong>Mentorship:</strong> Industry mentors from OBAP, GLPA and Emirates network.</li>
                <li><strong>Priority Admissions:</strong> Graduates may be prioritized for Pilot-Doctor recruitment streams.</li>
              </ul>

              <div className="mt-6 flex gap-4">
                <a href="#buy" className="px-5 py-3 bg-red-600 text-white rounded-md">Enquire to Buy a School</a>
                <a href="#info" className="px-5 py-3 border rounded-md">Download Franchise Pack</a>
              </div>
            </div>

            <div className="rounded-lg overflow-hidden shadow">
              <img src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/17066cde-c214-4675-8e45-f96c28271a85.png" alt="Black female teacher leading VR aviation classroom with students using modern educational technology" className="w-full h-80 object-cover"/>
            </div>
          </div>
        </section>

        {/* Partners */}
        <section id="partners" className="max-w-7xl mx-auto px-6 py-16">
          <h3 className="text-2xl font-bold">Partners</h3>
          <p className="mt-2 text-gray-600">A cross-sector coalition delivering training, technology, and deployment at scale.</p>

          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6 items-center">
            {[
              { name: 'Emirates', url: 'https://www.emirates.com/' },
              { name: 'VRpilot', url: 'https://vrpilot.aero/' },
              { name: 'AVMED', url: 'https://www.avmed.co.za/' },
              { name: 'EON Knowledge XR', url: 'https://www.eonreality.com/' },
              { name: 'OBAP', url: 'https://www.obap.org/' },
              { name: 'GLPA', url: 'https://www.glpa.org/' },
              { name: 'IU International', url: 'https://www.iu.org/' },
              { name: 'BAA Training', url: 'https://baatraining.com/' }
            ].map((p) => (
              <a key={p.name} href={p.url} className="flex items-center justify-center p-4 border rounded hover:shadow" target="_blank" rel="noreferrer">
                <div className="text-center">
                  <div className="text-sm font-semibold">{p.name}</div>
                  <div className="text-xs text-gray-500">Visit</div>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Press / Full integrated press release */}
        <section id="press" className="max-w-5xl mx-auto px-6 py-16">
          <h3 className="text-2xl font-bold">Press Release — 14th August 2025</h3>
          <article className="mt-6 prose max-w-none">
            <h4 className="text-xl font-semibold mt-6 mb-4">Dr. Pilot AVMED Recruitment Launches the Doctor-on-Board Initiative</h4>
            <p className="mb-4 text-gray-700">Dr. Pilot AVMED Recruitment, led by <strong>Dr. Mongwe</strong>, today announced the Doctor-on-Board Initiative — a pioneering program to retrain qualified medical doctors as Pilot-Doctors using immersive VR training and deploy them across airline networks to improve in-flight medical response and operational resilience.</p>
            <p className="mb-4 text-gray-700">The program is funded through a passenger-linked contribution of <strong>R50 per ticket</strong> on partner airline HEIRI routes, consolidated under <strong>Emirates Airlines</strong>, which will manage deployment and funding of the program at scale.</p>
            <p className="mb-4 text-gray-700">Key partners include <strong>VRpilot</strong>, <strong>AVMED</strong>, <strong>EON Knowledge XR</strong>, <strong>BAA Training</strong>, <strong>OBAP</strong>, <strong>GLPA</strong>, and <strong>IU International University</strong>. The program also offers teacher-owned Dr. Pilot Aviation High Schools as a sustainable local feeder system.</p>
            <h5 className="text-lg font-semibold mt-6 mb-3">Program Highlights</h5>
            <ul className="space-y-2 mb-6 text-gray-700">
              <li>Full sponsorship for Pilot-Doctor candidates (VR training, licensing, type ratings)</li>
              <li>Accelerated VR training reducing training time by up to 40%</li>
              <li>Over 200 Pilot-Doctors earmarked for initial deployment across HEIRI routes</li>
              <li>Franchise model for female teachers to buy and run Dr. Pilot Aviation High Schools</li>
            </ul>
            <h5 className="text-lg font-semibold mt-6 mb-3">Quotes</h5>
            <blockquote className="border-l-4 border-red-600 pl-4 italic text-gray-700">
              <p>"Emirates' bold decision to consolidate all airline commitments demonstrates the power of unified leadership in transforming aviation safety and social impact. This 'Made in Africa' innovation will place life‑saving medical professionals on every flight for less than the price of a cup of coffee per passenger." — <strong>Dr. Mongwe</strong></p>
            </blockquote>
          </article>
        </section>

        {/* Contact / Apply */}
        <section id="contact" className="bg-red-50 py-16">
          <div className="max-w-4xl mx-auto px-6">
            <h3 className="text-2xl font-bold">Apply or Enquire</h3>
            <p className="mt-2 text-gray-700">Interested doctors, teachers, airlines, or partners can reach us through the form below or via email.</p>

            <form className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" placeholder="Full name" className="p-3 border rounded" />
              <input type="email" placeholder="Email" className="p-3 border rounded" />
              <input type="text" placeholder="Role (Doctor / Teacher / Partner)" className="p-3 border rounded" />
              <input type="tel" placeholder="Phone number" className="p-3 border rounded" />
              <textarea placeholder="Message or enquiry details" rows={4} className="md:col-span-2 p-3 border rounded resize-none"></textarea>
              <button type="submit" className="md:col-span-2 px-6 py-3 bg-red-600 text-white rounded font-medium hover:bg-red-700">Submit Application / Enquiry</button>
            </form>

            <div className="mt-8 text-center text-sm text-gray-600">
              <p>For direct enquiries: <strong>info@drpilot-avmed.co.za</strong></p>
              <p className="mt-2">Dr. Pilot AVMED Recruitment — Made in Africa, Global Impact</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-4 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-br from-red-600 to-red-400 rounded flex items-center justify-center text-white font-semibold text-sm">DP</div>
              <div>
                <div className="font-semibold">Dr. Pilot AVMED Recruitment</div>
                <div className="text-xs text-gray-400">Made in Africa — Global Impact</div>
              </div>
            </div>
            <div className="text-sm text-gray-400">
              <p>&copy; 2025 Dr. Pilot AVMED Recruitment. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}