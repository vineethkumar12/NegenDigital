import { capabilities } from '../data/content.js'

export default function Capabilities() {
  return (
    <section
      id="capabilities"
      className="bg-slate-50/50 pb-16 pt-20 sm:pb-20 sm:pt-24 lg:pb-28 lg:pt-28"
    >
      <div className="container-x -translate-y-4">
        {/* Header */}
        <div data-aos="fade-up" className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            
            <h2 className="font-display text-3xl font-bold tracking-[-0.02em] text-navy sm:text-4xl lg:text-5xl">
              Core capabilities
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-600 sm:text-base">
              Strategic technology expertise to help you innovate, operate and achieve more.
            </p>
          </div>
        </div>

        {/* Grid */}
        <div className="mt-10 grid gap-6 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map(({ icon: Icon, title, text, image }, i) => {
            const isFeature = i === 0
            const num = String(i + 1).padStart(2, '0')

            return (
              <div
                key={title}
                data-aos="fade-up"
                data-aos-delay={(i % 3) * 100}
                className={isFeature ? 'sm:col-span-2 lg:col-span-1' : ''}
              >
                <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition duration-300 hover:-translate-y-1 hover:border-navy/15 hover:shadow-xl motion-reduce:hover:translate-y-0">
                  
                  {/* Image Wrapper */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-50 border-b border-slate-100 flex items-center justify-center p-4">
                    {image ? (
                      <img
                        src={image}
                        alt={title}
                        // scale-110 zooms it in slightly, object-contain keeps the full image visible
                        className="h-full w-full object-contain scale-110 transition-transform duration-700 ease-out group-hover:scale-125"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center text-teal">
                        <Icon size={40} strokeWidth={1.5} />
                      </div>
                    )}
                    
                    {/* Floating Icon Badge */}
                    <div className="absolute bottom-4 right-4 z-10 flex h-10 w-10 items-center justify-center rounded-xl bg-white/90 shadow-sm backdrop-blur-md border border-slate-100 transition duration-300 group-hover:bg-brand-gradient group-hover:text-white">
                      <Icon size={18} strokeWidth={2} />
                    </div>
                  </div>

                  {/* Content Wrapper */}
                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-start gap-3 mb-2">
                      <span className="mt-1 font-mono text-[10px] font-bold tracking-[0.15em] text-slate-400 bg-slate-100 px-2 py-1 rounded-md shrink-0">
                        {num}
                      </span>
                      <h3 className={`font-display font-bold tracking-[-0.01em] text-navy leading-tight ${isFeature ? 'text-xl' : 'text-lg'}`}>
                        {title}
                      </h3>
                    </div>

                    <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-500">
                      {text}
                    </p>
                  </div>
                </article>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}