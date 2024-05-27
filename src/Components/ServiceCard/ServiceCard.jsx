import './ServiceCard.css';
import PropTypes from 'prop-types';

const ServiceCard = ({ serviceImage, serviceTitle, serviceDescription }) => {
  return (
    <div className="service-description">
      <img src={serviceImage} alt={serviceTitle} className="sevice-image" />

      <div className="services-title-and-des-container">
        <h2 className="service-title">{serviceTitle}</h2>
        <hr />
        <p className="service-description">{serviceDescription}</p>
        <hr />
      </div>
    </div>
  );
};

export default ServiceCard;

ServiceCard.propTypes = {
  serviceImage: PropTypes.string,
  serviceTitle: PropTypes.string,
  serviceDescription: PropTypes.string,
};
