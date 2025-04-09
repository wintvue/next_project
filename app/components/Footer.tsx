export default function Footer() {
  return (
    <footer className="py-8 border-t border-dark-secondary/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-dark-muted text-sm">
            © {new Date().getFullYear()} Your Name. All rights reserved.
          </p>
          
          <div className="flex space-x-6 mt-4 md:mt-0">
            <SocialLink href="https://github.com" label="GitHub" />
            <SocialLink href="https://linkedin.com" label="LinkedIn" />
            <SocialLink href="https://twitter.com" label="Twitter" />
            <SocialLink href="https://dribbble.com" label="Dribbble" />
          </div>
        </div>
      </div>
    </footer>
  )
}

function SocialLink({ href, label }: { href: string; label: string }) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="text-dark-muted hover:text-dark-accent transition-colors"
      aria-label={label}
    >
      {label}
    </a>
  )
} 