import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import Experience from './components/Experience'

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <Navbar />
      <div className="space-y-0">
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Contact />
      </div>
    </main>
  )
}
