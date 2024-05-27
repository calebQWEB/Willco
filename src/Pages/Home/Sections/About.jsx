import about1 from '../../../assets/About/about-1.jpg'
import about2 from '../../../assets/About/about-2.jpg'
import about3 from '../../../assets/About/about-3.jpg'

const About = () => {
  return (
    <section className="section-padding willco__about">
        <span className="willco__about-us">ABOUT US</span>
        <div className="willco__about-container">
            <div className='willco__about-container-article'>
                <h1 className="willco__about-header">Willco architectural group</h1>
                <p className="willco__about-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

                <span className="willco__founder">David Mcgyver - Founder</span>
            </div>

            <div className='willco__about-image-container'>
              <img src={about2} alt="Picture of a house" className='willco__about-image about-2' />
              <img src={about1} alt="Picture of a house" className='willco__about-image about-1' />
              <img src={about3} alt="Picture of a house" className='willco__about-image about-3' />
            </div>
        </div>
    </section>
  )
}

export default About