export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="animate-fade-in">
        <h2 className="text-3xl font-bold mb-8 text-center">
          About <span className="text-dark-accent">Me</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="bg-dark-secondary rounded-xl p-6 shadow-lg">
            <h3 className="text-xl font-semibold mb-4 text-dark-accent">My Journey</h3>
            <p className="text-dark-text/80 mb-4">
              I'm a passionate developer with a background in web development and a love for creating 
              beautiful, functional applications. My journey began with HTML and CSS, and has evolved to 
              include modern frameworks and technologies.
            </p>
            <p className="text-dark-text/80">
              I specialize in building responsive, user-friendly web applications with a focus on 
              performance and accessibility. I'm constantly learning and exploring new technologies 
              to enhance my skills.
            </p>
          </div>
          
          <div>
            <div className="bg-dark-secondary rounded-xl p-6 shadow-lg mb-6">
              <h3 className="text-xl font-semibold mb-4 text-dark-accent">Education</h3>
              <div className="mb-4">
                <p className="font-medium">B.S. in Computer Science</p>
                <p className="text-dark-muted">University Name • 2018-2022</p>
              </div>
              <div>
                <p className="font-medium">Web Development Bootcamp</p>
                <p className="text-dark-muted">Coding Academy • 2022</p>
              </div>
            </div>
            
            <div className="bg-dark-secondary rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-dark-accent">Experience</h3>
              <div className="mb-4">
                <p className="font-medium">Front-end Developer</p>
                <p className="text-dark-muted">Company Name • 2022-Present</p>
              </div>
              <div>
                <p className="font-medium">Web Design Intern</p>
                <p className="text-dark-muted">Studio Name • 2021</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 