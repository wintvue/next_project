'use client'

import { Link as ScrollLink } from 'react-scroll'

export default function Hero() {
  return (
    <section id="hero" className="py-32 min-h-screen w-full bg-dark-primary bg-[url('https://static.wixstatic.com/media/c837a6_2119733e838e4a2f8813ebde736f99d5~mv2.jpg/v1/fill/w_1960,h_1600,al_r,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_2119733e838e4a2f8813ebde736f99d5~mv2.jpg')] bg-center">
      <div className="animate-fade-in max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 pt-2 pl-8 md:pl-16 lg:pl-24">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 whitespace-nowrap">
          Hello, I'm <span className="text-dark-accent">Joseph</span>
        </h1>
        <p className="text-3xl mb-10 font-bold py-3">
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
            className="bg-dark-accent text-dark-primary px-6 py-3 rounded-lg font-medium hover:bg-dark-accent/90 transition-colors text-lg cursor-pointer inline-block"
          >
            See More
          </ScrollLink>
        </div>
      </div>
    </section>
  )
} 