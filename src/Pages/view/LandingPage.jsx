import { Container } from '@mui/material'
import React from 'react'
import Header from '../../components/Header'
import HeroSection from '../../components/HeroSection'
import PackagesSection from '../../components/Packages'
import Introduction from '../../components/Introduction'
import PopularTours from '../../components/PopularTours'
import TourPackages from '../../components/TourPakage'
import ReasonsToBook from '../../components/ReasonsToBook'
import About from '../../components/About'
import Testimonials from '../../components/Testimonials'
import Blog from '../../components/Blog'
import Footer from '../../components/Footer'


function LandingPage() {
    return (
        <div>
            <Header />
            <HeroSection />
            <Introduction />
            <PackagesSection />
            <PopularTours />
            <TourPackages />
            <ReasonsToBook/>
            <About/>
            <Testimonials/>
            <Blog/>
            <Footer/>
        </div>
    )
}

export default LandingPage