import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./Testimonials.css"


const settings ={
    dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: <div>Prev</div>,
  prevArrow: <div>Next</div>,
}

const Testimonials = () => {
  return (
    <>
    <h2 className='test_title'>Testimonials</h2>
    <Slider {...settings} className="slider_test">
        <div className='slider_test_slide'>
            <h2>
                No lo puedo creer
            </h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque sunt dignissimos voluptate expedita nam. Commodi delectus quis accusantium velit illo!
            </p>
        </div>
        <div className='slider_test_slide'>
            <h2>
                No lo puedo creer
            </h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque sunt dignissimos voluptate expedita nam. Commodi delectus quis accusantium velit illo!
            </p>
        </div>
        <div className='slider_test_slide'>
            <h2>
                No lo puedo creer
            </h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque sunt dignissimos voluptate expedita nam. Commodi delectus quis accusantium velit illo!
            </p>
        </div>
        <div className='slider_test_slide'>
            <h2>
                No lo puedo creer
            </h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque sunt dignissimos voluptate expedita nam. Commodi delectus quis accusantium velit illo!
            </p>
        </div>
        <div className='slider_test_slide'>
            <h2>
                No lo puedo creer
            </h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque sunt dignissimos voluptate expedita nam. Commodi delectus quis accusantium velit illo!
            </p>
        </div>
    </Slider>
    </>
  )
}

export default Testimonials