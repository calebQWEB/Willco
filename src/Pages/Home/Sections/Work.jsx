import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ImageComponent from "../../../Components/ImageComponent/ImageComponent";
import work1 from '../../../assets/Works/work-1.jpg'
import work2 from '../../../assets/Works/work-2.jpg'
import work3 from '../../../assets/Works/work-3.jpg'
import work4 from '../../../assets/Works/work-4.jpg'
import work5 from '../../../assets/Works/work-5.jpg'
import work6 from '../../../assets/Works/work-6.jpg'
import work7 from '../../../assets/Works/work-7.jpg'

const Work = () => {

    const settings = {
      dots: false,
      infinite: true,
      speed: 6000,
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 0,
      cssEase: "linear",
      centerMode: true,

      responsive: [
        {
          breakpoint: 1115,
          settings: {
            slidesToShow: 2,
            infinite: true,
          }
        },
        
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }
      ]
    };

  return (
    <section className="section-padding willco__work">
      <span className="willco__project">PROJECTS</span>
      <h1 className="willco__work-header">
        See our most recent <span>work</span>
      </h1>
      <div className="willco__work-container">
        <Slider {...settings}>
          <div><ImageComponent src={work1}/></div>
          <div><ImageComponent src={work2}/></div>
          <div><ImageComponent src={work3}/></div>
          <div><ImageComponent src={work4}/></div>
          <div><ImageComponent src={work5}/></div>
          <div><ImageComponent src={work6}/></div>
          <div><ImageComponent src={work7}/></div>
        </Slider>
      </div>
    </section>
  );
};

export default Work;
