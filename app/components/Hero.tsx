'use client'

import { Link as ScrollLink } from 'react-scroll'

export default function Hero() {
  return (
    <section id="hero" className="pt-32 md:pt-48 pb-20 md:pb-32 min-h-screen w-full bg-dark-primary bg-[url('/hero.png')] bg-cover bg-center bg-no-repeat bg-fixed">
      <div className="animate-fade-in max-w-7xl mx-auto px-4 sm:px-8 md:px-12 lg:px-16 pt-2 md:pl-16 lg:pl-32 xl:pl-40">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-1">
          Hello, I'm <span className="text-dark-accent">Joseph</span>
        </h1>
        <p className="text-base sm:text-lg md:text-2xl lg:text-3xl mb-6 md:mb-10 font-bold py-4 md:py-6 leading-relaxed max-w-3xl">
          I'm a self-taught programmer and content creator with special interests in backend and AI programming.
          I like to build fast and scalable systems. Here is a summary of my expertise and experience.
        </p>
        <div className="space-x-4 pt-8 md:pt-16">
          <ScrollLink
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={0}
            className="bg-dark-accent px-6 py-3 rounded-lg hover:bg-dark-accent/90 transition-colors text-sm cursor-pointer inline-block"
          >
            See More
          </ScrollLink>
        </div>
      </div>
    </section>
  )
}