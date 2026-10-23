import { ParticlesProvider } from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'

const initParticles = async (engine) => {
  await loadSlim(engine)
}

export default function ParticleSetup({ children }) {
  return (
    <ParticlesProvider init={initParticles}>
      {children}
    </ParticlesProvider>
  )
}