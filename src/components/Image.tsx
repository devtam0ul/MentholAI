'use client'
import NextImage from 'next/image'
import { useState, useEffect } from 'react'

export function OptimizedImage({ src, ...props }) {
  const [isInViewport, setIsInViewport] = useState(false)
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsInViewport(entry.isIntersecting)
    )
    
    const element = document.querySelector(`img[src="${src}"]`)
    if (element) observer.observe(element)
    
    return () => observer.disconnect()
  }, [src])

  return <NextImage loading={isInViewport ? "eager" : "lazy"} {...props} src={src} />
}

<Image
  src={src}
  alt={alt}
  fill
  className="object-cover"
  loading="lazy"
  sizes="(max-width: 640px) 100vw, 
         (max-width: 1024px) 50vw,
         33vw"
/> 