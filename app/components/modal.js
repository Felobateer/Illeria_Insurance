'use client'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef, useEffect } from 'react'
import styles from '../styles'

export default function CustomModal({ isOpen, onClose, children }) {
  const modalRef = useRef()
  const backdropRef = useRef()

  useGSAP(() => {
    if (isOpen) {
      gsap.fromTo(
        modalRef.current,
        { scale: 0.9, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.3 }
      )
      gsap.fromTo(
        backdropRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.3 }
      )
    }
  }, [isOpen])

  useEffect(() => {
    const closeOnEsc = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', closeOnEsc)
    return () => document.removeEventListener('keydown', closeOnEsc)
  }, [onClose])

  if (!isOpen) return null

  return (
    <div
      ref={backdropRef}
      className={styles.modal.backdrop}
      onClick={onClose}
    >
      <div
        ref={modalRef}
        className={styles.modal.container}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  )
}
