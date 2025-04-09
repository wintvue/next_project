import { 
  CodeBracketIcon, 
  CommandLineIcon, 
  ServerIcon, 
  WrenchScrewdriverIcon 
} from '@heroicons/react/24/outline'

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="animate-fade-in">
        <h2 className="text-3xl font-bold mb-12 text-center">
          My <span className="text-dark-accent">Skills</span>
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          <SkillCategory 
            title="Web Development" 
            skills={["JavaScript", "React", "Next.js", "Tailwind CSS", "HTML"]}
            icon={<CodeBracketIcon className="h-10 w-10 text-dark-accent" />}
          />
          
          <SkillCategory 
            title="Backend Development" 
            skills={["Python", "Java", "Node.js", "Spring Boot", "REST APIs", "SQL"]}
            icon={<ServerIcon className="h-10 w-10 text-dark-accent" />}
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
    <div className="bg-dark-secondary rounded-xl p-6 shadow-lg">
      <div className="flex items-center mb-6">
        {icon}
        <h3 className="text-xl font-semibold ml-3">{title}</h3>
      </div>
      
      <ul className="space-y-2">
        {skills.map((skill) => (
          <li key={skill} className="flex items-center">
            <span className="w-2 h-2 bg-dark-accent rounded-full mr-3"></span>
            <span className="text-dark-text/80">{skill}</span>
          </li>
        ))}
      </ul>
    </div>
  )
} 