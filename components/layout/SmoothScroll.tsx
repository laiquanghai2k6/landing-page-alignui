'use client'
import Lenis from '@studio-freight/lenis'
import { useEffect } from 'react'

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5, // 👈 Tốc độ scroll (có thể tăng để "nhẹ hơn")
      easing: (t) => 1 - Math.pow(1 - t, 3), // cubic ease-out
      smoothWheel: true,
    })

    const raf = (time: number) => {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    return () => lenis.destroy()
  }, [])

  return <>{children}</>
}
