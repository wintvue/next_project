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
    <section id="contact" className="py-20 w-full bg-dark-primary bg-[url('https://static.wixstatic.com/media/c837a6_2119733e838e4a2f8813ebde736f99d5~mv2.jpg/v1/fill/w_1960,h_1600,al_r,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_2119733e838e4a2f8813ebde736f99d5~mv2.jpg')] bg-center">
      <div className="animate-fade-in max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Contact <span className="text-dark-accent">Me</span>
        </h2>
        
        <div className="grid md:grid-cols-1 gap-8 max-w-4xl mx-auto">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-dark-accent">Get In Touch</h3>
            <p className="text-dark-text/80 mb-6">
              I'm available for work and job opportunities. 
              Feel free to reach out if you want to collaborate or just want to connect!
            </p>
            
            <div className="space-y-4">
              <ContactInfo label="LinkedIn" value="www.linkedin.com/in/joseph-j-linked" />
              <ContactInfo label="GitHub" value="github.com/wintvue" />
            </div>
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