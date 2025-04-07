import Image from 'next/image'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center py-20">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Hi, I'm <span className="text-dark-accent">Your Name</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-dark-muted mb-6">
            Full Stack Developer
          </h2>
          <p className="text-lg mb-8 text-dark-text/80">
            I create beautiful and functional web applications with modern technologies.
          </p>
          <div className="space-x-4">
            <a
              href="#contact"
              className="bg-dark-accent text-dark-primary px-6 py-3 rounded-lg font-medium hover:bg-dark-accent/90 transition-colors"
            >
              Contact Me
            </a>
            <a
              href="#projects"
              className="border border-dark-accent text-dark-accent px-6 py-3 rounded-lg font-medium hover:bg-dark-accent/10 transition-colors"
            >
              View Work
            </a>
          </div>
        </div>
        <div className="animate-slide-up">
          {/* Add your profile image here */}
          <div className="relative w-72 h-72 mx-auto">
            <div className="absolute inset-0 bg-dark-accent/20 rounded-full blur-3xl"></div>
            <div className="relative rounded-full overflow-hidden border-4 border-dark-accent">
              <Image
                src="/your-photo.jpg" // Add your photo to the public folder
                alt="Your Name"
                width={288}
                height={288}
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 