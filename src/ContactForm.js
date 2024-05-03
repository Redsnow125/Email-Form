import React, { useState } from 'react'

const ContactForm = () => {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [stateMessage, setStateMessage] = useState(null)

    const sendEmail = (e) => {
        e.persist()
        e.preventDefault()
        setIsSubmitting(true)
    }
  return (
    <div>
      <form action="">
        
      </form>
    </div>
  )
}

export default ContactForm