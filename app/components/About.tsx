export default function About() {
  return (
    <section id="about" className="py-20 w-full bg-dark-primary bg-center bg-no-repeat bg-fixed bg-[url('/about_desk.png')]">
      <div className="animate-fade-in max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl font-bold mb-8 text-center">
          About <span>Me</span>
        </h2>

        <div className="grid md:grid-cols-1 gap-8 max-w-4xl mx-auto">
          <div className="mt-12">
            <p className="text-2xl leading-relaxed">
              I'm a developer with experience in the finance sector.
              I'm willing to learn new things and create efficient and highly scalable solutions.
              I'm excited to collaborate with others to solve real world problems.
              I'm eager to offer practical solutions to problems that require a cutting edge technology such as AI. My interest in AI improves my enthusiasm for integrating it into applications.
            </p>
          </div>
        </div>

      </div>
    </section>
  )
} 