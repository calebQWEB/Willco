import './ImageComponent.css';
import PropTypes from 'prop-types';
import {motion} from 'framer-motion';

const ImageComponent = ({src}) => {
  return (
    <motion.img 
    src={src} 
    alt='Work image' 
    className='work-image'
    whileHover={{scale: 1.02}}></motion.img>
  )
}

export default ImageComponent

ImageComponent.propTypes = {
    src: PropTypes.string,
  };