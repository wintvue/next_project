'use client'

import { Link as ScrollLink } from 'react-scroll'

export default function Hero() {
  return (
    <section id="hero" className="pt-48 pb-32 min-h-screen w-full bg-dark-primary bg-[url('/hero.png')] bg-cover bg-center bg-no-repeat bg-fixed">
      <div className="animate-fade-in max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 pt-2 pl-16 md:pl-32 lg:pl-40">
        <h1 className="text-5xl md:text-7xl font-bold mb-1 whitespace-nowrap">
          Hello, I'm <span className="text-dark-accent">Joseph</span>
        </h1>
        <p className="text-3xl mb-10 font-bold py-6 leading-relaxed">
          I'm a self-taught programmer and content creator with<br></br>
          special interests in backend and AI programming. I like <br></br>
          to build fast and scalable systems. Here is a summary<br></br>
          of my expertise and experience.<br></br>
        </p>
        <div className="space-x-4 pt-16">
          <ScrollLink
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={800}
            className="bg-dark-accent px-6 py-3 rounded-lg hover:bg-dark-accent/90 transition-colors text-sm cursor-pointer inline-block"
          >
            See More
          </ScrollLink>
        </div>
      </div>
    </section>
  )
} 