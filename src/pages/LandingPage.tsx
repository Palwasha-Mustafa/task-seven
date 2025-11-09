import About from "../components/About"
import AboutUs from "../components/AboutUs"
import Footer from "../components/Footer"
import GetStartedForm from "../components/GetStartedForm/GetStartedForm"
import Nav from "../components/hero-section/Nav"
import HeroSection from "../components/HeroSection"
import PortfolioSection from "../components/Portfolio/PortfolioSection"
import Services from "../components/Services"
import WhyUs from "../components/WhyUs"
import WorkProcess from "../components/WorkProcess/WorkProcess"

const LandingPage = () => {
  return (
    <>
      <div className="bg-[#1E1C26]">
        <Nav />
        <HeroSection />
        {/* About Section */}
        <div className="py-16 bg-[#1E1C26];
">
          <About />
        </div>

        {/* Services Section */}
        <div className="py-16 bg-[#1E1C26]">
          <Services />
        </div>
        <WhyUs />

        <div className="min-h-screen bg-[#1E1C26] text-white">
          <PortfolioSection />
        </div>

        {/* AboutUs Section (With Testimonials) */}
        <div className="py-16 bg-[#1E1C26]">
          <AboutUs />
        </div>
        
        <div>
          <WorkProcess />
        </div>
        <div>
          <GetStartedForm />
        </div>




        <div>
          <Footer />
        </div>

      </div>

    </>
  )
}

export default LandingPage
