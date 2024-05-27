import './Home.css'
import About from './Sections/About'
import Intro from './Sections/Intro'
import Services from './Sections/Services'
import Testimonials from './Sections/Testimonials'
import ChooseUs from './Sections/chooseUs'
import Work from './Sections/work'

const Home = () => {
  return (
    <>
      <Intro />
      <About />
      <Services />
      <ChooseUs />
      <Work />
      <Testimonials />
    </>
  )
}

export default Home