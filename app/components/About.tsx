export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="animate-fade-in">
        <h2 className="text-3xl font-bold mb-8 text-center">
          About <span className="text-dark-accent">Me</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="bg-dark-secondary rounded-xl p-6 shadow-lg">
            <h3 className="text-xl font-semibold mb-4 text-dark-accent">Description</h3>
            <p className="text-dark-text/80 mb-4">
            I'm a developer with experience in the finance sector. 
            I'm willing to learn new things and create efficient and highly scalable solutions. 
            I'm excited to collaborate with others to solve real world problems.
            </p>
          </div>
            
            <div className="bg-dark-secondary rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-dark-accent">Experience</h3>
              <div className="mb-4">
                <p className="font-medium">Back-end Developer</p>
                <p className="text-dark-muted">2023 - Present</p>
                <ul className="list-disc list-inside font-small">
                  <li>Developed multiple services using Java, Spring Boot, SQL, and Kafka for the payment and app team.</li>
                  <li>Enabled users to make payments by creating secure and reliable payment services that integrate with 3rd party financial systems.</li>
                  <li>Identified and fixed bugs and security issues in the services in different domain products.</li>
                </ul>
              </div>
              <div>
                <p className="font-medium">Data Developer</p>
                <p className="text-dark-muted">2021 - 2022</p>
              </div>
            </div>
            <div>

            <div className="bg-dark-secondary rounded-xl p-6 shadow-lg mb-6">
              <h3 className="text-xl font-semibold mb-4 text-dark-accent">Education</h3>
              <div className="mb-4">
                <p className="font-medium">B.S. in Computer Science</p>
                <p className="text-dark-muted">University • 2016-2020</p>
              </div>
              <div>
                <p className="font-medium">Bootcamp</p>
                <p className="text-dark-muted">Coding Academy • 2022</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 