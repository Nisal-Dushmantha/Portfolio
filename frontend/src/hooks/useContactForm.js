import { useState } from 'react'
import emailjs from '@emailjs/browser'

export const useContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isLoading, setIsLoading] = useState(false)
  const [status, setStatus] = useState({ type: '', message: '' })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      message: ''
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setStatus({ type: '', message: '' })

    // Basic validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus({
        type: 'error',
        message: 'Please fill in all fields.'
      })
      setIsLoading(false)
      return
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      setStatus({
        type: 'error',
        message: 'Please enter a valid email address.'
      })
      setIsLoading(false)
      return
    }

    try {
      // EmailJS configuration
      const serviceId = 'service_04t4cm1'  // Your actual service ID
      const templateId = 'template_3ozw3ui'  // Your actual template ID  
      const publicKey = 'AlcxgNUbxdv0C4oGu'  // Your actual public key

      // Debug: Log the configuration
      console.log('Attempting to send email with:', {
        serviceId,
        templateId,
        publicKey: publicKey.substring(0, 5) + '...' // Only show first 5 characters for security
      })

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_name: 'Nisal Dushmantha',
        to_email: 'lawanyanisal@gmail.com',
        // Try multiple email variable names
        email: formData.email,
        user_email: formData.email,
        sender_email: formData.email,
        contact_email: formData.email,
        reply_to: formData.email,
        // Also try with name variations
        name: formData.name,
        user_name: formData.name,
        sender_name: formData.name,
        contact_name: formData.name
      }

      // Debug: Log template parameters
      console.log('Template parameters being sent:', templateParams)

      const result = await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      )

      if (result.status === 200) {
        setStatus({
          type: 'success',
          message: 'Thank you! Your message has been sent successfully. I\'ll get back to you soon!'
        })
        resetForm()
      }
    } catch (error) {
      console.error('EmailJS Error Details:', error)
      console.error('Error text:', error.text)
      console.error('Error status:', error.status)
      
      let errorMessage = 'Sorry, there was an error sending your message. Please try again or contact me directly at lawanyanisal@gmail.com.'
      
      // Provide more specific error messages
      if (error.text) {
        if (error.text.includes('Invalid template ID')) {
          errorMessage = 'Email template configuration error. Please contact me directly at lawanyanisal@gmail.com.'
        } else if (error.text.includes('Invalid service ID')) {
          errorMessage = 'Email service configuration error. Please contact me directly at lawanyanisal@gmail.com.'
        } else if (error.text.includes('Invalid public key')) {
          errorMessage = 'Email authentication error. Please contact me directly at lawanyanisal@gmail.com.'
        }
      }
      
      setStatus({
        type: 'error',
        message: errorMessage
      })
    } finally {
      setIsLoading(false)
    }
  }

  return {
    formData,
    isLoading,
    status,
    handleChange,
    handleSubmit,
    resetForm
  }
}
