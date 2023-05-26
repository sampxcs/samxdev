'use client'

import { ReactNode, useEffect, useRef } from 'react'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

import styles from './scrollytelling.module.css'

export default function Section ({ children, animation, size, style }: {children: ReactNode, animation: string, size?: string, style?: {} }) {
  const ref = useRef(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ref.current,
        scrub: true,
        start: 'top 90%',
        end: 'top 30%'
      }
    })

    timeline.to(ref.current, { y: 0, x: 0, opacity: 1, duration: 1, stagger: 0.3 })

    return () => {
      timeline.revert()
    }
  }, [])

  return (
    <div ref={ref} data-animation={animation} data-size={size} className={styles.container} style={style}>
      {children}
    </div>
  )
}
