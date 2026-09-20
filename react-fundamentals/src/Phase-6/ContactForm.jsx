import { useState } from "react"

export default function ContactForm() {
  // TODO: Create state for name, email, and message
  // TODO: Create three input fields (text, email, textarea)
  // TODO: Each input should be controlled
  // TODO: Display all form data below the form
const [contactForm, setContactForm] = useState({name: '', email: '', message: ''})

const formHandler = (event) => {
    const { name, value } = event.target
    setContactForm({
        ...contactForm, 
        [name]: value})
}

  return (
    <div>
        <p>Simple Form (Phase 5: Exercise 2)</p>
        <input type="text" name="name" value={contactForm.name} onChange={formHandler} placeholder="Input your name" /><br/>
        <input type="email" name="email" value={contactForm.email} onChange={formHandler} placeholder="Input your email" /><br />
        <textarea name="message" value={contactForm.message} onChange={formHandler} placeholder="Input your message here"></textarea>
        
        <p>Data result:</p>
        <p>Name: {contactForm.name}</p>
        <p>Email: {contactForm.email}</p>
        <p>Message: {contactForm.message}</p>
    </div>
  )
}
