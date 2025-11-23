export default function Footer() {
  return (
    <footer className="py-6 md:py-8 border-t border-dark-secondary/50 bg-dark-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-dark-muted text-xs md:text-sm text-center md:text-left">
            © {new Date().getFullYear()} Joseph. All rights reserved.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 md:space-x-6 md:gap-0 mt-2 md:mt-0">
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
      className="text-dark-muted hover:text-dark-accent transition-colors text-xs md:text-sm"
      aria-label={label}
    >
      {label}
    </a>
  )
}
