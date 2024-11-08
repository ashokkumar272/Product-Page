import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import HeroSection from './components/hero/HeroSection'
import AboutSection from './components/about/AboutSection'
import ServicesSection from './components/services/ServicesSection'
import FoundersSection from './components/founders/FoundersSection'
import TestimonialSection from './components/testimonial/TestimonialSection';
import Footer from './components/footer/Footer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='body'>
     <HeroSection/>
     <AboutSection/>
     <ServicesSection/>
     <FoundersSection/>
     <TestimonialSection/>
     <Footer/>
    </div>
  )
}

export default App
