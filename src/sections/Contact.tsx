'use client';
import { useState } from 'react';
import {SiGmail, SiLinkedin, SiGithub } from 'react-icons/si';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  
  const [buttonText, setButtonText] = useState('Send Message');
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setButtonText('Sending...');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify(form),
        headers: { 'Content-Type': 'application/json' },
      });

      if (res.ok) {
        
        setForm({ name: '', email: '', message: '' });
        setButtonText('Message Sent!');
        setTimeout(()=>setButtonText('Send Message'), 3000);
      }
    } catch (err) {
      console.error(err);
      setButtonText('Error Sending!');
      setTimeout(() => setButtonText('Send Message'), 3000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact"  className="scroll-smooth w-full px-6 py-16 md:px-20 bg-black text-white">
      <div className="max-w-5xl mx-auto flex md:justify-between flex-col md:flex-row gap-12">
        
        <form onSubmit={handleSubmit} className="flex-1 flex flex-col justify-between gap-4">
          <h2 className="text-3xl font-bold mb-2 text-gray-200">Let's Connect</h2>

          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="bg-white/5 border border-white/10 rounded-lg p-3 outline-none"
            required
          />

          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="bg-white/5 border border-white/10 rounded-lg p-3 outline-none"
            required
          />

          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows={5}
            className="bg-white/5 border border-white/10 rounded-lg p-3 outline-none"
            required
          />

          <button
            type="submit" disabled={loading}
            className="bg-gray-200 text-black py-2 rounded-lg cursor-pointer font-semibold hover:bg-gray-100 transition-all"
          >
            <span className="transition-opacity duration-300 ease-in-out">{buttonText}</span>
          </button>

          
        </form>

        
        <div className="flex-1 flex flex-col justify-between gap-6">
          <div>
            <h2 className="text-3xl font-bold mb-2 text-gray-200">Socials</h2>
            <p className="text-neutral-400">Feel free to reach out to me on any of these platforms but you have to watch this epic fight once in your life.</p>
          </div>
          <div><video src="/videos/video.mp4" autoPlay loop muted playsInline className='max-w-3xl w-full text-gray-200 filter grayscale' ></video></div>
          <div className="flex gap-12 text-gray-200 text-4xl">
            <div><a href="https://github.com/Amanyd" target="_blank" rel="noopener noreferrer"><span><SiGithub/></span></a></div>
            <div><a href="https://www.linkedin.com/in/aman-kumar-yadav-5509a4292" target="_blank" rel="noopener noreferrer"><span><SiLinkedin/></span></a></div>
            <div><a href="mailto:ahhman139@gmail.com"><span><SiGmail/></span></a></div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
