import React from 'react';

const skills = [
  "JavaScript", "React", "Next.js", "Tailwind CSS", "HTML", "Python", "Java", "Node.js", "Spring Boot", "REST APIs", "SQL"
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 w-full min-h-[60vh] flex items-center justify-center bg-dark-secondary bg-[url('/skills.png')] bg-center bg-no-repeat bg-fixed">
      <div className="animate-fade-in max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center justify-center">
        <h2 className="text-5xl font-bold mb-12 text-center">Skills</h2>
        <div className="flex flex-wrap justify-center gap-4 w-full max-w-3xl">
          {skills.map((skill) => (
            <span
              key={skill}
              className="px-6 py-3 bg-dark-primary text-dark-text rounded-xl text-lg font-medium shadow border border-dark-muted"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
