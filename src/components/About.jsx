import { Settings, Users, ShieldCheck, Handshake } from 'lucide-react'
import  aboutImg  from '../assets/aboutimg1.png';
// If you have your logo saved as an asset, import it here. 
// If you are using your <Logo /> component, import that instead.
import Logo from './Logo.jsx' 

const values = [
  { title: 'Engineering excellence', icon: Settings },
  { title: 'Transparent collaboration', icon: Users },
  { title: 'Security and trust', icon: ShieldCheck },
  { title: 'Long-term partnership', icon: Handshake },
]

export default function About() {
  return (
    <section id="about" className="bg-white py-16 lg:py-24">
      <div className="container-x grid items-center gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
        
        {/* Left Content */}
        <div data-aos="fade-right">
          {/* Logo & Divider */}
          <div className="mb-8">
           
            {/* The small green line from your image */}
            <div className="mt-6 h-1 w-12 rounded bg-brand" />
          </div>

          <h2 className="font-display text-4xl font-extrabold tracking-tight text-navy sm:text-5xl">
            Who We Are
          </h2>
          
          <h3 className="mt-3 text-lg font-bold text-navy sm:text-xl">
            Experts in modern technology & data.
          </h3>

          <div className="mt-5 space-y-4 text-sm leading-relaxed text-slate-600 sm:text-base">
            <p>
              Negen Digital is an IT consulting and services company driven by industry
              veterans with expertise in Advanced Analytics, AI and Agentic AI, ServiceNow,
              data platforms, and enterprise integration.
            </p>
            <p>
              We partner with organizations to solve complex technology challenges,
              modernize digital capabilities, and deliver secure, business-focused results.
            </p>
          </div>

          {/* The 4 Values with Icons */}
          <div className="mt-10 grid grid-cols-2 gap-y-8 gap-x-4 sm:grid-cols-4 sm:divide-x sm:divide-slate-200">
            {values.map((v) => {
              const Icon = v.icon
              return (
                <div key={v.title} className="flex flex-col items-start sm:items-center sm:text-center sm:px-2">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-brand/40 text-brand">
                    <Icon size={22} strokeWidth={2} />
                  </div>
                  <span className="mt-3 text-xs font-semibold text-navy sm:text-[13px] leading-tight">
                    {v.title}
                  </span>
                </div>
              )
            })}
          </div>
        </div>

        {/* Right Image */}
        <div data-aos="fade-left" className="relative">
          <img 
            src={aboutImg} 
            alt="Team collaborating in a modern glass office" 
            className="w-full rounded-2xl object-cover shadow-2xl" 
          />
        </div>

      </div>
    </section>
  )
}