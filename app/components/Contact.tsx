'use client'

import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Implement your form submission logic here
    console.log(formData)
    alert('Thanks for your message! I\'ll get back to you soon.')
    setFormData({ name: '', email: '', message: '' })
  }
  
  return (
    <section id="contact" className="py-20">
      <div className="animate-fade-in">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Contact <span className="text-dark-accent">Me</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-dark-accent">Get In Touch</h3>
            <p className="text-dark-text/80 mb-6">
              I'm currently available for freelance work and job opportunities. 
              Feel free to reach out if you have a project in mind or just want to connect!
            </p>
            
            <div className="space-y-4">
              <ContactInfo label="Email" value="your.email@example.com" />
              <ContactInfo label="Location" value="City, Country" />
              <ContactInfo label="LinkedIn" value="linkedin.com/in/yourprofile" />
              <ContactInfo label="GitHub" value="github.com/yourusername" />
            </div>
          </div>
          
          <div className="bg-dark-secondary rounded-xl p-6 shadow-lg">
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-dark-primary border border-dark-muted rounded-lg p-3 text-dark-text focus:border-dark-accent focus:outline-none focus:ring-1 focus:ring-dark-accent"
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-dark-primary border border-dark-muted rounded-lg p-3 text-dark-text focus:border-dark-accent focus:outline-none focus:ring-1 focus:ring-dark-accent"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full bg-dark-primary border border-dark-muted rounded-lg p-3 text-dark-text focus:border-dark-accent focus:outline-none focus:ring-1 focus:ring-dark-accent resize-none"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-dark-accent text-dark-primary py-3 rounded-lg font-medium hover:bg-dark-accent/90 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

function ContactInfo({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <span className="text-dark-accent font-medium">{label}:</span>{' '}
      <span className="text-dark-text/80">{value}</span>
    </div>
  )
} 