import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Navbar from './components/Navbar'

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="pb-16">
        <Navbar />
      </div>
      <div className="space-y-0">
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Contact />
      </div>
    </main>
  )
}
