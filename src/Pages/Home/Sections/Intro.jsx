import introImage from '../../../assets/Background/intro-image.png'

const Intro = () => {
  return (
    <header className='willco__intro'>
        <div className='willco__intro-container'>
            <article>
                <h1 className='willco__intro-header'>Welcome to willco</h1>
                <p className='willco__intro-paragraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>

                <div className='willco__intro-button-container'>
                    <button className='willco__intro-button services'>Services</button>
                    <button className='willco__intro-button project'>Projects</button>
                </div>

                <div className='willco__company-resume'>
                    <div className='willco__years'>
                        <span>30+</span>
                        <span>years of<br /> experience</span>
                    </div>

                    <div className='willco__completed-projects'>
                        <span>700+</span>
                        <span>Projects<br/> completed</span>
                    </div>
                </div>
            </article>

            <img src={introImage} alt="A contruction worker" className='willco__intro-image' />
        </div>
    </header>
  )
}

export default Intro