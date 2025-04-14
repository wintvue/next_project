export default function About() {
  return (
    <section id="about" className="py-20 w-full bg-dark-primary min-h-screen bg-center bg-no-repeat bg-fixed bg-[url('/about_desk.png')]">
      <div className="animate-fade-in max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl font-bold mb-8 text-center">
          About <span>Me</span>
        </h2>
        
        {/* Description in a full row */}
        <div className="mb-8">
          <div className="rounded-xl p-6">
            <h3 className="text-3xl font-semibold mb-4">Description</h3>
            <p className="mb-4 text-2xl leading-relaxed">
            I'm a developer with experience in the finance sector. 
            I'm willing to learn new things and create efficient and highly scalable solutions. 
            I'm excited to collaborate with others to solve real world problems.
            </p>
          </div>
        </div>
        
        {/* Experience and Education side by side in the next row */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="rounded-xl p-6">
            <h3 className="text-3xl font-semibold mb-4">Experience</h3>
            <div className="mb-8">
              <p className="font-medium text-xl">Back-end Developer</p>
              <p className="text-dark-muted text-xl">2023 - Present</p>
              <ul className="list-disc list-inside font-small text-xl space-y-3 mt-2">
                <li>Developed multiple services using Java, Spring Boot, SQL, and Kafka for the payment and app team.</li>
                <li>Enabled users to make payments by creating secure and reliable payment services that integrate with 3rd party financial systems.</li>
                <li>Identified and fixed bugs and security issues in the services in different domain products.</li>
              </ul>
            </div>
            <div>
              <p className="font-medium text-xl">Data Developer</p>
              <p className="text-dark-muted text-xl">2021 - 2022</p>
            </div>
          </div>

          <div className="rounded-xl p-6 mb-6">
            <h3 className="text-3xl font-semibold mb-4">Education</h3>
            <div className="mb-8">
              <p className="font-medium text-xl">B.S. in Computer Science</p>
              <p className="text-dark-muted text-xl">University • 2016-2020</p>
            </div>
            <div>
              <p className="font-medium text-xl">Bootcamp</p>
              <p className="text-dark-muted text-xl">Coding Academy • 2022</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 