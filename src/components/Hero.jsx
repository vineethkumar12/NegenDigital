import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Cpu, Database, Network, ShieldCheck, Users } from 'lucide-react'
import heroImg from '../assets/g2.png'

/* ---------- Professional Tech Visual ---------- */

function TechMeshVisual() {
  return (
    <div
      className="pointer-events-none absolute right-[2%] top-[10%] z-0 hidden h-[600px] w-[600px] select-none items-center justify-center lg:flex xl:right-[5%]"
      aria-hidden="true"
    >
      <div className="absolute h-[400px] w-[400px] rounded-full bg-brand/20 blur-[100px]" />
      <div className="absolute h-[300px] w-[300px] rounded-full bg-teal/20 blur-[80px]" />

      <svg className="absolute inset-0 h-full w-full drop-shadow-sm" viewBox="0 0 600 600">
        <defs>
          <linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0587CA" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#09A173" stopOpacity="0.1" />
          </linearGradient>
          <linearGradient id="ringGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#09A173" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#0587CA" stopOpacity="0.1" />
          </linearGradient>
        </defs>

        <g className="origin-center animate-[spin_60s_linear_infinite]">
          <circle cx="300" cy="300" r="260" fill="none" stroke="url(#ringGrad)" strokeWidth="2" strokeDasharray="10 20" />
          <circle cx="300" cy="40" r="5" fill="#0587CA" />
          <circle cx="300" cy="560" r="5" fill="#09A173" />
          <circle cx="40" cy="300" r="5" fill="#0587CA" />
          <circle cx="560" cy="300" r="5" fill="#09A173" />
        </g>

        <g className="origin-center animate-[spin_45s_linear_infinite_reverse]">
          <circle cx="300" cy="300" r="190" fill="none" stroke="url(#ringGrad2)" strokeWidth="1.5" />
          <path d="M300 110 L300 490 M110 300 L490 300" stroke="rgba(5, 135, 202, 0.2)" strokeWidth="1.5" strokeDasharray="4 4" />
        </g>

        <g stroke="rgba(10, 35, 74, 0.2)" strokeWidth="1.5">
          <line x1="300" y1="300" x2="180" y2="150" />
          <line x1="300" y1="300" x2="420" y2="180" />
          <line x1="300" y1="300" x2="150" y2="400" />
          <line x1="300" y1="300" x2="450" y2="420" />
        </g>

        <g>
          <circle cx="180" cy="150" r="6" fill="#ffffff" stroke="#0587CA" strokeWidth="2.5" className="animate-pulse" />
          <circle cx="420" cy="180" r="6" fill="#ffffff" stroke="#09A173" strokeWidth="2.5" className="animate-pulse" />
          <circle cx="150" cy="400" r="6" fill="#ffffff" stroke="#09A173" strokeWidth="2.5" className="animate-pulse" />
          <circle cx="450" cy="420" r="6" fill="#ffffff" stroke="#0587CA" strokeWidth="2.5" className="animate-pulse" />
        </g>
      </svg>

      <div className="relative z-10 flex h-44 w-44 flex-col items-center justify-center rounded-[2rem] border border-white bg-white/80 shadow-[0_12px_40px_rgba(5,135,202,0.25)] backdrop-blur-xl">
        <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-white/90 to-white/40" />
        <div className="relative z-10 mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand to-teal shadow-lg">
          <Network className="h-7 w-7 text-white" strokeWidth={2} />
        </div>
        <span className="relative z-10 text-sm font-extrabold tracking-[0.2em] text-navy uppercase">
          Negen Core
        </span>
      </div>

      {/* Floating badges highlight Negen Digital's core capabilities */}
      <div className="absolute right-[10%] top-[20%] z-20 flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 shadow-xl animate-[bounce_6s_ease-in-out_infinite]">
        <Cpu className="h-4 w-4 text-brand" />
        <span className="text-xs font-bold text-navy">AI &amp; Data</span>
      </div>
      <div className="absolute left-[5%] bottom-[25%] z-20 flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 shadow-xl animate-[bounce_8s_ease-in-out_infinite_1s]">
        <Database className="h-4 w-4 text-teal" />
        <span className="text-xs font-bold text-navy">Cloud Engineering</span>
      </div>
      <div className="absolute right-[15%] bottom-[15%] z-20 flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 shadow-xl animate-[bounce_7s_ease-in-out_infinite_2s]">
        <ShieldCheck className="h-4 w-4 text-electric" />
        <span className="text-xs font-bold text-navy">ServiceNow</span>
      </div>
      <div className="absolute left-[12%] top-[18%] z-20 hidden items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 shadow-xl animate-[bounce_9s_ease-in-out_infinite_1s] xl:flex">
        <Users className="h-4 w-4 text-brand" />
        <span className="text-xs font-bold text-navy">IT Staffing &amp; Recruitment</span>
      </div>
    </div>
  )
}

/* ---------- Hero Section ---------- */

export default function Hero() {
  const [loaded, setLoaded] = useState(false)
  const imgRef = useRef(null)

  useEffect(() => {
    if (imgRef.current?.complete) {
      setLoaded(true)
    }
  }, [])

  return (
    <section className="relative isolate overflow-hidden bg-slate-50">
      {/* Background Image */}
      <div
        className="absolute inset-y-0 right-0 -z-20 w-full lg:w-[75%] lg:[mask-image:linear-gradient(to_right,transparent_0%,rgba(0,0,0,0.8)_25%,black_60%)] lg:[-webkit-mask-image:linear-gradient(to_right,transparent_0%,rgba(0,0,0,0.8)_25%,black_60%)]"
        aria-hidden="true"
      >
        <img
          ref={imgRef}
          src={heroImg}
          alt=""
          onLoad={() => setLoaded(true)}
          className={`h-full w-full object-cover object-[65%_center] transition-all duration-[1500ms] ease-out will-change-transform lg:object-right motion-reduce:scale-100 motion-reduce:opacity-100 motion-reduce:blur-0 motion-reduce:transition-none ${
            loaded ? 'scale-100 opacity-100 blur-0' : 'scale-[1.06] opacity-0 blur-sm'
          }`}
          fetchPriority="high"
          decoding="async"
        />
      </div>

      {/* Aurora Background & Tech Grid */}
      <div className="absolute inset-0 -z-30 overflow-hidden" aria-hidden="true">
        <div className="absolute inset-0 bg-white" />
        <div className="absolute -left-[10%] top-[20%] h-[60vh] w-[50vw] rounded-full bg-brand/15 blur-[120px] animate-[pulse_8s_ease-in-out_infinite]" />
        <div className="absolute left-[5%] bottom-[10%] h-[50vh] w-[40vw] rounded-full bg-teal/15 blur-[120px] animate-[pulse_10s_ease-in-out_infinite_1s]" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDQwIEwgNDAgNDAgTCA0MCAwIiBmaWxsPSJub25lIiBzdHJva2U9IiMwNTg3Q0EiIHN0cm9rZS1vcGFjaXR5PSIwLjA2IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-60 [mask-image:linear-gradient(to_right,black_40%,transparent_100%)]" />
      </div>

      {/* Mobile overlay */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-white/85 lg:hidden" aria-hidden="true" />

      {/* Fade into next section */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-32 bg-gradient-to-t from-white to-transparent" aria-hidden="true" />

      <TechMeshVisual />

      {/* Hero Content */}
      <div className="container-x flex min-h-[90vh] items-center pb-24 pt-32 lg:pt-40">
        <div className="relative z-20 max-w-[680px]">

          {/* Eyebrow — describes the company, not a slogan */}
          <div data-aos="fade-down" className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-white px-4 py-1.5 shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-brand animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-widest text-navy">
              Technology consulting <span className="mx-1 text-teal">·</span> Digital transformation
            </span>
          </div>

          {/* Main Heading — specific, not abstract */}
          <h1
            data-aos="fade-up"
            className="mt-8 text-4xl font-extrabold leading-[1.08] tracking-tight text-navy sm:text-5xl lg:text-[3.9rem]"
          >
            A Technology Partner
            <br />
           
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-brand via-teal to-electric bg-clip-text text-transparent">
               Focussed on Your Goals
              </span>
              <span className="absolute bottom-2 left-0 -z-10 h-3 w-full bg-teal/30 blur-sm" />
            </span>
          </h1>

          {/* Description — pulled from your real company statement */}
          <p
            data-aos="fade-up"
            data-aos-delay="100"
            className="mt-6 max-w-[580px] text-base font-medium leading-relaxed text-slate-700 sm:text-lg"
          >
            Negen Digital helps businesses accelerate digital transformation through Data & AI,
            modern data platforms, cloud engineering, ServiceNow, and digital automation. We also
            provide IT staffing and technical recruitment to help organizations build the teams
            they need to move forward.
          </p>

          {/* Action Buttons */}
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
          >
            <Link
              to="/capabilities"
              className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-xl bg-navy px-8 py-4 font-bold text-white shadow-xl shadow-navy/20 transition-all hover:bg-brand hover:shadow-brand/30 hover:ring-2 hover:ring-brand/30 hover:ring-offset-2"
            >
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full" />
              Explore our services
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              to="/about#contact"
              className="group inline-flex items-center justify-center gap-2 rounded-xl border-2 border-slate-200 bg-white px-8 py-4 font-bold text-navy shadow-sm transition-all hover:border-brand/40 hover:bg-slate-50 hover:text-brand"
            >
              Talk to our team
              <ArrowRight size={18} className="text-slate-400 transition-transform group-hover:translate-x-1 group-hover:text-brand" />
            </Link>
          </div>

          {/* Trust strip — real services, on the fold */}
          <div
            data-aos="fade-up"
            data-aos-delay="300"
            className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-slate-200 pt-6 text-sm text-slate-600"
          >
            <span className="inline-flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-brand" />
              Data & AI · Cloud · ServiceNow · Digital Automation
            </span>
            <span className="hidden h-4 w-px bg-slate-300 sm:block" />
            <span>IT staffing &amp; technical recruitment</span>
          </div>
        </div>
      </div>
    </section>
  )
}