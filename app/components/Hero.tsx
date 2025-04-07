export default function Hero() {
  return (
    <section id="hero" className="py-40">
      {/* <div className="grid md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto"> */}
      <div className="animate-fade-in px-10">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 whitespace-nowrap">
          Hello, I'm <span className="text-dark-accent">Joseph</span>
        </h1>
        <p className="text-2xl mb-10 font-bold py-3">
          I'm a self-taught programmer and content creator with<br></br>
          special interests in backend and AI programming. I like <br></br>
          to build fast and scalable systems. Here is a summary<br></br>
          of my expertise and experience.<br></br>
        </p>
        <div className="space-x-4 py-20">
          <a
            href="#about"
            className="bg-dark-accent text-dark-primary px-6 py-3 rounded-lg font-medium hover:bg-dark-accent/90 transition-colors text-lg"
          >
            See More
          </a>
        </div>
      </div>
      {/* </div> */}
    </section>
  )
} 