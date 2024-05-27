import './Footer.css'
import Logo from '../../assets/Logo/logo.svg';

const Footer = () => {
  return (
    <footer className='willco__footer section-padding'>
        <div className='willco__footer-container'>
            <div className='willco__footer-sub-container'>
                <img src={Logo} alt="Willco Logo" className='willco-logo' />
                <ul className='willco__footer-link-container'>
                    <li className='willco__footer-link-header'>CONTACT INFORMATION</li>
                    <li className='willco__footer-link'>Willcogroup@gmail.com</li>
                    <li className='willco__footer-link'>+234 3045-6789</li>
                    <li className='willco__footer-link'>No. 4 Berlington Avenue Block c4</li>
                </ul>
                <ul className='willco__footer-link-container'>
                    <li className='willco__footer-link-header'>QUICK LINKS</li>
                    <li className='willco__footer-link'>services</li>
                    <li className='willco__footer-link'>training</li>
                    <li className='willco__footer-link'>chat with us</li>
                </ul>
                <ul className='willco__footer-link-container'>
                    <li className='willco__footer-link-header'>SERVICES</li>
                    <li className='willco__footer-link'>Contracting</li>
                    <li className='willco__footer-link'>Design</li>
                    <li className='willco__footer-link'>Management</li>
                    <li className='willco__footer-link'>Special contract</li>
                </ul>
            </div>

            <div className='willco__footer-copyright-container'>
                <p>&copy; 2024 Willco architectural group. All rights reserved.</p>
                <div>
                    <p>Terms & Conditions |</p>
                    <p>Privacy policy |</p>
                    <p>Disclamer</p>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer