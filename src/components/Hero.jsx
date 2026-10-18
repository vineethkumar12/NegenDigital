
import { Link } from 'react-router-dom'
import { ArrowRight, ChevronRight } from 'lucide-react'
import heroImg from '../assets/heroimg.png'
import negenLogo from '../assets/logo.png'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pt-16 lg:pt-[72px]">
      <div className="container-x grid items-center gap-8 py-12 lg:grid-cols-2 lg:gap-0 lg:py-20">

        {/* Left content */}
        <div className="relative z-10">
          {/* Company logo */}
          <div className="mb-6">
            <img
              src={negenLogo}
              alt="Negen Digital logo"
              className="h-24 w-auto object-contain"
            />
          </div>

          <span
            data-aos="fade-down"
            className="eyebrow flex items-center gap-2"
          >
            <span className="h-px w-6 bg-teal" />
            Our Capabilities
          </span>

          <h1
            data-aos="fade-up"
            className="text-4xl font-extrabold leading-[1.1] sm:text-5xl lg:text-6xl"
          >
            Technology that builds{' '}
            <span className="gradient-text">what’s next.</span>
          </h1>

          <p
            data-aos="fade-up"
            data-aos-delay="100"
            className="mt-6 max-w-lg text-base leading-relaxed text-muted sm:text-lg"
          >
            From Agentic AI to cloud engineering, we help businesses modernize,
            integrate and scale with confidence.
          </p>

          {/* Action buttons */}
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <a href="#capabilities" className="btn-primary">
              Explore Capabilities <ArrowRight size={16} />
            </a>

            <Link to="/about#contact" className="btn-outline">
              Talk to Our Experts <ChevronRight size={16} />
            </Link>
          </div>
        </div>

        {/* Right hero image */}
        <div
          data-aos="fade-left"
          data-aos-delay="150"
          className="relative h-[280px] overflow-hidden rounded-2xl sm:h-[380px] lg:h-[480px] lg:rounded-l-none lg:rounded-r-[2rem]"
        >
          <img
            src={heroImg}
            alt="Modern glass office towers representing enterprise technology"
            className="h-full w-full object-cover object-center"
          />

          {/* Subtle white gradient */}
          <div
            className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-r from-white/70 via-white/25 to-transparent lg:rounded-l-none lg:rounded-r-[2rem]"
            aria-hidden="true"
          />
        </div>

      </div>
    </section>
  )
}
