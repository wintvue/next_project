'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Link as ScrollLink } from 'react-scroll'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    
    window.addEventListener('scroll', handleScroll)
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <nav className={`fixed w-full z-50 transition-colors duration-300 ${scrolled ? 'bg-black' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-dark-accent font-bold text-xl">
              Joseph
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6">
              <ScrollLink to="hero" spy={true} smooth={true} offset={-70} duration={800} className="cursor-pointer px-3 py-2 hover:text-dark-accent transition-colors text-sm font-bold">Home</ScrollLink>
              <ScrollLink to="about" spy={true} smooth={true} offset={-70} duration={800} className="cursor-pointer px-3 py-2 hover:text-dark-accent transition-colors text-sm font-bold">About</ScrollLink>
              <ScrollLink to="experience" spy={true} smooth={true} offset={-70} duration={800} className="cursor-pointer px-3 py-2 hover:text-dark-accent transition-colors text-sm font-bold">Experience</ScrollLink>
              <ScrollLink to="projects" spy={true} smooth={true} offset={-70} duration={800} className="cursor-pointer px-3 py-2 hover:text-dark-accent transition-colors text-sm font-bold">Projects</ScrollLink>
              <ScrollLink to="skills" spy={true} smooth={true} offset={-70} duration={800} className="cursor-pointer px-3 py-2 hover:text-dark-accent transition-colors text-sm font-bold">Skills</ScrollLink>
              <ScrollLink to="contact" spy={true} smooth={true} offset={-70} duration={800} className="cursor-pointer px-3 py-2 hover:text-dark-accent transition-colors text-sm font-bold">Contact</ScrollLink>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-dark-text hover:text-dark-accent focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className={`px-2 pt-2 pb-3 space-y-1 sm:px-3 ${scrolled ? 'bg-black' : 'bg-dark-secondary/90'}`}>
            <MobileNavLink href="#about">About</MobileNavLink>
            <MobileNavLink href="#experience">Experience</MobileNavLink>
            <MobileNavLink href="#projects">Projects</MobileNavLink>
            <MobileNavLink href="#skills">Skills</MobileNavLink>
            <MobileNavLink href="#contact">Contact</MobileNavLink>
          </div>
        </div>
      )}
    </nav>
  )
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="text-dark-text hover:text-dark-accent px-3 py-2 rounded-md text-sm font-medium transition-colors"
    >
      {children}
    </Link>
  )
}

function MobileNavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="text-dark-text hover:text-dark-accent block px-3 py-2 rounded-md text-base font-medium"
    >
      {children}
    </Link>
  )
} 