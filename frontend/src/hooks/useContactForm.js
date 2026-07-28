import { useState } from 'react';
import emailjs from '@emailjs/browser';

export const useContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus({ type: '', message: '' });

    // Basic validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus({
        type: 'error',
        message: 'Please fill in all fields.'
      });
      setIsLoading(false);
      return;
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus({
        type: 'error',
        message: 'Please enter a valid email address.'
      });
      setIsLoading(false);
      return;
    }

    let sentSuccessfully = false;

    // 1. Primary Attempt: EmailJS
    try {
      const serviceId = 'service_04t4cm1';
      const templateId = 'template_3ozw3ui';
      const publicKey = 'AlcxgNUbxdv0C4oGu';

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_name: 'Nisal Dushmantha',
        to_email: 'lawanyanisal@gmail.com',
        reply_to: formData.email,
        email: formData.email,
        name: formData.name
      };

      const result = await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      );

      if (result.status === 200) {
        sentSuccessfully = true;
      }
    } catch (emailjsError) {
      console.warn('EmailJS submission failed, proceeding to FormSubmit fallback:', emailjsError);
    }

    // 2. Secondary Fallback Attempt: Direct FormSubmit API to lawanyanisal@gmail.com
    if (!sentSuccessfully) {
      try {
        const response = await fetch('https://formsubmit.co/ajax/lawanyanisal@gmail.com', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            message: formData.message,
            _subject: `Portfolio Contact Message from ${formData.name}`,
            _replyto: formData.email,
            _template: 'table'
          })
        });

        const data = await response.json();
        if (response.ok || data.success === 'true' || data.success === true) {
          sentSuccessfully = true;
        }
      } catch (formSubmitError) {
        console.error('FormSubmit fallback error:', formSubmitError);
      }
    }

    // Final outcome handling
    if (sentSuccessfully) {
      setStatus({
        type: 'success',
        message: `Thank you, ${formData.name}! Your message has been sent successfully to lawanyanisal@gmail.com. I will get back to you soon!`
      });
      resetForm();
    } else {
      // Fail-safe Mailto client trigger if both HTTP methods were blocked
      const mailtoUrl = `mailto:lawanyanisal@gmail.com?subject=${encodeURIComponent(`Portfolio Contact: ${formData.name}`)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
      window.location.href = mailtoUrl;
      setStatus({
        type: 'success',
        message: 'Opening your mail client to send the message directly to lawanyanisal@gmail.com.'
      });
      resetForm();
    }

    setIsLoading(false);
  };

  return {
    formData,
    isLoading,
    status,
    handleChange,
    handleSubmit,
    resetForm
  };
};

