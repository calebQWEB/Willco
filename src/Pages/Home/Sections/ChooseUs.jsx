import choose from '../../../assets/chooseUs/choose-US.png';

const ChooseUs = () => {
  return (
    <section className="section-padding willco__chooseUs">
        <div className="willco__chooseUs-container">
            <img src={choose} alt="Contruction worker" className='willco__chooseUs-image' />
            <div className='willco__chooseUs-Card'>
                <span>- WHY CHOOSE US</span>
                <h1 className='willco__chooseUs-title'>Unrivaled Exellence in Every Project.</h1>
                <p className='willco__chooseUs-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
                <button className='willco__chooseUs-button'>Learn more</button>
            </div>
        </div>
    </section>
  )
}

export default ChooseUs