import ServiceCard from '../../../Components/ServiceCard/ServiceCard'
import service1 from '../../../assets/Services/services-1.jpg'
import service2 from '../../../assets/Services/services-2.jpg'
import service3 from '../../../assets/Services/services-3.jpg'

const Services = () => {
    return (
        <section className="section-padding willco__services">
            <span className='willco__our-serives'>OUR SERVICES</span>
            <h1 className='willco__out-services-header'>What we do at willco architectural group</h1>
            <div className="willco__services-container">
                <ServiceCard serviceImage={service1} serviceTitle="Design & Build" serviceDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"/>
                
                <ServiceCard serviceImage={service3} serviceTitle="Rennovation" serviceDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"/>

                <ServiceCard serviceImage={service2} serviceTitle="Training" serviceDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"/>
            </div>
        </section>
    )
}

export default Services