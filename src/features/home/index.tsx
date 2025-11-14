import Hero from "./hero"
import PremiumCta from "./premiumCta"
import ProjectRequirementsSection from "./projectRequirement"
import ServicesSection from "./services"
import TechStackSection from "./techStack"
import Testimonials from "./testimonials"

const Home = () => {
  return (
    <>
      <Hero/>
      <ServicesSection/>
      <TechStackSection/>
      <ProjectRequirementsSection/>
      <PremiumCta/>
      <Testimonials/>
    </>
  )
}

export default Home
