import {
  CodeBracketIcon,
  ServerIcon
} from '@heroicons/react/24/outline';

export default function Skills() {
  return (
    <section id="skills" className="py-20 w-full bg-dark-secondary bg-[url('/skills.png')] bg-center bg-no-repeat bg-fixed">
      <div className="animate-fade-in max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl font-bold mb-12 text-center">
          My <span>Skills</span>
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          <SkillCategory 
            title="Web Development" 
            skills={["JavaScript", "React", "Next.js", "Tailwind CSS", "HTML"]}
            icon={<CodeBracketIcon className="h-12 w-12" />}
          />
          
          <SkillCategory 
            title="Backend Development" 
            skills={["Python", "Java", "Node.js", "Spring Boot", "REST APIs", "SQL"]}
            icon={<ServerIcon className="h-12 w-12" />}
          />
        </div>
      </div>
    </section>
  )
}

function SkillCategory({ 
  title, 
  skills, 
  icon 
}: { 
  title: string; 
  skills: string[]; 
  icon: React.ReactNode 
}) {
  return (
    <div className="rounded-xl p-6">
      <div className="flex items-center mb-6">
        {icon}
        <h3 className="text-3xl font-semibold ml-3">{title}</h3>
      </div>
      
      <ul className="space-y-2 pl-5">
        {skills.map((skill) => (
          <li key={skill} className="flex items-center">
            <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
            <span className="text-xl">{skill}</span>
          </li>
        ))}
      </ul>
    </div>
  )
} 