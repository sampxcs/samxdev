'use client'

import { useState, useEffect } from 'react'
import styles from './button.module.css'

import ButtonCircle from '../ButtonCircle'
import ArrowUp from '@/components/Icons/ArrowUp'

function ButtonUp () {
  const [isVisible, setIsVisible] = useState(false)

  const toggleVisibility = (): void => {
    if (window.pageYOffset > 300) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  const handleClick = (): void => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility)

    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])

  return (
    <div className={styles.container} data-visible={isVisible}>
      <ButtonCircle type='button' size='lg' tooltip='Subir' onClick={handleClick}>
        <ArrowUp width='1rem' />
      </ButtonCircle>
    </div>
  )
}
export default ButtonUp
