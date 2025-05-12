import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Initialize EmailJS with your User ID in useEffect
  React.useEffect(() => {
    emailjs.init("YOUR_USER_ID_HERE"); // Replace with your actual User ID from EmailJS
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Prepare template parameters - make sure these match your EmailJS template variables
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message
    };

    emailjs.send(
      'YOUR_SERVICE_ID',  // Replace with your actual Service ID from EmailJS
      'YOUR_TEMPLATE_ID', // Replace with your actual Template ID from EmailJS
      templateParams,
      'YOUR_USER_ID'      // Replace with your actual User ID from EmailJS
    )
    .then((result) => {
      console.log('Email sent successfully:', result.text);
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitStatus(null), 5000);
    }, (error) => {
      console.error('Failed to send email:', error.text);
      setIsSubmitting(false);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus(null), 5000);
    });
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-8 md:px-16 lg:px-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">Get In Touch</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <p className="text-tertiary mb-8">
              I'm interested in freelance opportunities and collaborations. If you have a project that needs my expertise or just want to say hi, feel free to reach out!
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-tertiary/10 p-3 rounded-full">
                  <FaEnvelope className="text-secondary" size={20} />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Email</h3>
                  <p className="text-tertiary">dhaneshthaninki@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-tertiary/10 p-3 rounded-full">
                  <FaPhone className="text-secondary" size={20} />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Phone</h3>
                  <p className="text-tertiary">+919573434598</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-tertiary/10 p-3 rounded-full">
                  <FaMapMarkerAlt className="text-secondary" size={20} />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Location</h3>
                  <p className="text-tertiary">Available for remote work</p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="w-full p-3 bg-tertiary/10 border border-tertiary/30 rounded focus:outline-none focus:border-secondary"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                  className="w-full p-3 bg-tertiary/10 border border-tertiary/30 rounded focus:outline-none focus:border-secondary"
                />
              </div>
              <div>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  required
                  className="w-full p-3 bg-tertiary/10 border border-tertiary/30 rounded focus:outline-none focus:border-secondary"
                />
              </div>
              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  required
                  rows="5"
                  className="w-full p-3 bg-tertiary/10 border border-tertiary/30 rounded focus:outline-none focus:border-secondary resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn w-full flex justify-center items-center"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
              
              {submitStatus === 'success' && (
                <div className="p-3 bg-green-500/20 border border-green-500 rounded text-green-500">
                  Your message has been sent successfully!
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="p-3 bg-red-500/20 border border-red-500 rounded text-red-500">
                  Failed to send message. Please try again later.
                </div>
              )}
            </form>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;