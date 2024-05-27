import './LinksBar.css'
import { FaFacebookF, FaSquareXTwitter, FaInstagram, FaLocationPin } from "react-icons/fa6";

const LinksBar = () => {
    
  return (
    <div className='willco__links-bar'>
        <div className='willco__locations-container'>
            <FaLocationPin />
            <p>No. 4 Berlington Avenue Block c4</p>
        </div>

        <div className='willco__social-links-container'>
            <div className='willco__social-link'>
                <FaFacebookF color='#000000' className='willco__social-link-icon'/>
            </div>

            <div className='willco__social-link'>
                <FaSquareXTwitter color='#000000' className='willco__social-link-icon'/>
            </div>

            <div className='willco__social-link'>
                <FaInstagram color='#000000' className='willco__social-link-icon'/>
            </div>
        </div>
    </div>
  )
}

export default LinksBar