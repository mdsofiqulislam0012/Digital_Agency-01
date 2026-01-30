import React from 'react'
import ThemeToggle from '../../components/ThemeToggle'
import StarBackground from '../../components/StarBackground'
import Navbar from '../../components/Navbar'
import Hero from '../../components/HeroSection/Hero'
import Trusted from '../../components/TrustedSection/Trusted'
import ServicesSections from '../../components/ServicesSections/ServicesSections'
import OurWork from '../../components/OurWork/OurWork'

export default function Home() {
  return (
    <div className='min-h-screen bg-background text-foreground overflow-x-hidden'>
        {/* theme toggle */}
        <ThemeToggle></ThemeToggle>

        {/* Background Effects */}
        <StarBackground></StarBackground>

        {/* Navbar */}
        <Navbar></Navbar>
        {/* Main Content */}
        <Hero></Hero>
        <Trusted></Trusted>
        <ServicesSections></ServicesSections>
        <OurWork></OurWork>

        {/* footer */}
    </div>
  )
}
