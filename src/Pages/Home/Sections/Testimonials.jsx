import { IoRemoveOutline } from "react-icons/io5";
import { FaQuoteLeft, FaQuoteRight, FaLongArrowAltRight, FaLongArrowAltLeft } from "react-icons/fa";
import { useState } from "react";

const Testimonials = () => {
  const [ClientIndex, setClientIndex] = useState(0)

  const clients = [
    {
      id: 0,
      name: 'DANIEL MCGRAVEN',
      commentsHeader: 'Top notch service and prompt delivery',
      comments: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation',
      position: 'CEO - MCGRAVEN INC'
    },
    {
      id: 1,
      name: 'MATTHEW CHISOM',
      commentsHeader: 'Trustworthy and Reliable',
      comments: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation',
      position: 'CEO - SOMETHING LTD'
    },
    {
      id: 2,
      name: 'TIMOTHY ISMAIL',
      commentsHeader: 'Flawless work',
      comments: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation',
      position: 'CEO - SOMETHING INC'
    },
  ]

  const nextIndex = () => {
    if (ClientIndex === clients.length - 1) {
      setClientIndex(0)
    } else {
      setClientIndex(prev => prev + 1)
    }
  }

  const prevIndex = () => {
    if (ClientIndex === 0) {
      setClientIndex(clients.length - 1)
    } else {
      setClientIndex(prev => prev - 1)
    }
  }

  return (
    <section className="section-padding willco__testimonial">
        <span className="willco__testimonial-span">TESTIMONIALS</span>
        <h1 className="willco__testimonial-header">What our <span>Clients</span> about us.</h1>

        <div className="willco__testimonial-container">
              <div className="clients-container">
                <h1 className="comments-header"><FaQuoteLeft className="quote-icon"/>{clients[ClientIndex].commentsHeader}<FaQuoteRight className="quote-icon"/></h1>
                <p className="comments">{clients[ClientIndex].comments}</p>
                <div>
                  <span className="client-name">{clients[ClientIndex].name}</span>
                  <IoRemoveOutline />
                  <span className="client-position">{clients[ClientIndex].position}</span>
                </div>

                <div className="directions">
                  <FaLongArrowAltLeft size={20} onClick={prevIndex} className="direction-icon"/>
                  <FaLongArrowAltRight size={20} onClick={nextIndex} className="direction-icon"/>
                </div>
              </div>
        </div>
    </section>
  )
}

export default Testimonials