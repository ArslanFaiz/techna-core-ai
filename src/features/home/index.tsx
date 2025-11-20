import Hero from "./hero"
import PremiumCta from "./premiumCta"
import ProjectRequirementsSection from "./projectRequirement"
import ServicesPage from "./servicePage"
import TechStackSection from "./techStack"
import Testimonials from "./testimonials"

const Home = () => {
  return (
    <>
      <Hero/>
      <ServicesPage/>
      <TechStackSection/>
      <ProjectRequirementsSection/>
      <PremiumCta/>
      <Testimonials/>
    </>
  )
}

export default Home
