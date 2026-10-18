import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import AOS from 'aos'

/** Scrolls to top / hash target on navigation and re-evaluates AOS elements. */
export default function ScrollManager() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    const t = setTimeout(() => {
      if (hash) {
        document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: 'smooth' })
      } else {
        window.scrollTo({ top: 0 })
      }
      AOS.refreshHard()
    }, 60)
    return () => clearTimeout(t)
  }, [pathname, hash])

  return null
}
