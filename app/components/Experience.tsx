'use client'

import { BriefcaseIcon } from '@heroicons/react/24/outline';
import { useEffect, useState } from 'react';

const experiences = [
  {
    title: 'Backend Engineer',
    date: '2023 - present',
    description: `Developed multiple services using Java, Spring Boot, SQL, and Kafka for the payment team.
                  Enabled users to make payments by creating secure and reliable payment services that integrate with 3rd party financial systems.`,
    icon: <BriefcaseIcon className="h-8 w-8 text-dark-accent" />,
    side: 'left',
  },
  {
    title: 'Python Engineer',
    date: '2021 - 2022',
    description:
      'Worked as a developer where I created an data processing platform that transformed raw data into actionable insights for analytics.',
    icon: <BriefcaseIcon className="h-8 w-8 text-dark-accent" />,
    side: 'right',
  },
  {
    title: 'Self Employed',
    date: '2020 - 2021',
    description:
      'Worked on a side projects.',
    icon: <BriefcaseIcon className="h-8 w-8 text-dark-accent" />,
    side: 'left',
  },
];

export default function Experience() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize(); 
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section id="experience" className="py-20 w-full bg-dark-secondary bg-[url('/about_desk.png')] bg-center bg-no-repeat bg-fixed">
      <div className="animate-fade-in max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl font-bold mb-12 text-center">Experience</h2>
        <div className="relative flex flex-col items-center">
          {/* Vertical timeline line */}
          <div className="absolute left-1/2 top-0 w-1 h-full bg-dark-muted/30 -translate-x-1/2 z-0" />
          <div className="space-y-16 w-full">
            {experiences.map((exp, idx) => (
              <div
                key={exp.title}
                className={`relative flex flex-col md:flex-row items-center md:items-stretch w-full ${idx % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}
              >
                {/* Card left */}
                {((idx % 2 === 0) || isMobile) && (
                  <div className="md:w-1/2 flex justify-end md:pr-8 mb-4 md:mb-0">
                    <div className="bg-dark-primary rounded-xl shadow-lg p-6 w-full max-w-md">
                      <h3 className="text-2xl font-bold mb-2">{exp.title}</h3>
                      <p className="text-dark-text/80 mb-2">{exp.description}</p>
                    </div>
                  </div>
                )}
                {/* Timeline icon and date */}
                <div className="z-10 flex flex-col items-center">
                  <div className="bg-white border-4 border-dark-secondary rounded-full p-3 mb-2 shadow-lg">
                    {exp.icon}
                  </div>
                  <span className="text-white font-medium text-lg whitespace-nowrap px-4">{exp.date}</span>
                </div>
                {/* Card right */}
                {(idx % 2 !== 0 && !isMobile) && (
                  <div className="md:w-1/2 flex justify-start md:pl-8">
                    <div className="bg-dark-primary rounded-xl shadow-lg p-6 w-full max-w-md">
                      <h3 className="text-2xl font-bold mb-2">{exp.title}</h3>
                      <p className="text-dark-text/80 mb-2">{exp.description}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
