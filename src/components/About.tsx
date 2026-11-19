"use client"
import React from 'react'
import { motion } from 'framer-motion'
import SectionHeading from './ui/SectionHeading'

const About = () => {
  return (
    <section id='about' className='relative w-full min-h-screen py-24 px-6 md:px-16 bg-darkBg overflow-hidden flex flex-col items-center justify-center'>
      <div className="absolute top-[50%] left-[20%] w-[500px] h-[500px] bg-teal/5 blur-[150px] rounded-full -z-10" />
      <div className='w-full max-w-5xl mx-auto'>
        <SectionHeading>ABOUT <span className='text-teal'>ME</span></SectionHeading>
        <div className='relative max-w-3xl mx-auto md:ml-24'>
          <div className='absolute left-0 top-0 bottom-0 w-[1px] bg-gradient-to-b from-teal via-teal/20 to-transparent' />
          <div className='flex flex-col gap-14'>
            <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className='relative pl-10'>
              <div className='absolute left-[-5.5px] top-2 w-3 h-3 rounded-full bg-darkBg border-2 border-teal shadow-[0_0_8px_#14b8a6] z-10' />
              <p className='text-slate-300 text-xl text-center tracking-normal font-semibold'>
                I’m an AI Automation Engineer focused on building useful automation systems, AI-powered workflows, and user-centred software.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className='relative pl-10 space-y-6'>
              <div className='absolute left-[-5.5px] top-2 w-3 h-3 rounded-full bg-darkBg border-2 border-teal z-10' />
              <div className='inline-block rounded-full px-4 py-1 bg-teal/10 border border-teal/20 text-teal font-bold text-xs md:text-sm uppercase tracking-widest'>My Journey</div>
              <div className='space-y-6 text-slate-400 text-base md:text-lg leading-relaxed tracking-wide'>
                <p>
                  I’m currently studying Artificial Intelligence and Full-Stack Development through GIAIC, where I’ve worked with TypeScript, Next.js, Python, Agentic AI, and prompt and context engineering.
                </p>
                <p>
                  As the Founder & CEO of <span className='text-teal'>XORA</span>, I’m working on practical AI automation and software solutions. My current focus includes workflow automation with n8n, AI integrations, and building with tools such as the OpenAI Agents SDK and Claude.
                </p>
                <p>
                  I enjoy learning by building: turning concepts into working projects, testing ideas, and improving systems through hands-on practice.
                </p>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className='relative pl-10'>
              <div className='absolute left-[-5.5px] top-2 w-3 h-3 rounded-full bg-darkBg border-2 border-teal z-10' />
              <div className='bg-slate-900/40 backdrop-blur-md border border-white/5 rounded-2xl p-8 md:p-10 transition-all hover:border-teal/20'>
                <h2 className='font-bold text-xl md:text-2xl text-teal mb-4 uppercase tracking-tighter'>My <span className='text-white'>Approach</span></h2>
                <p className='text-slate-400 text-lg leading-relaxed'>
                  I aim to make technology practical and accessible by creating reliable, easy-to-use solutions that reduce repetitive work and help people focus on what matters.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default About
