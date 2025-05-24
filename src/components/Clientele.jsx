import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";






const Clientele = () => {

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const client_logo = [
      "src/assets/images/dropbox.png",
      "src/assets/images/dropbox.png",
      "src/assets/images/dropbox.png",
      "src/assets/images/dropbox.png",
      "src/assets/images/dropbox.png",
      "src/assets/images/dropbox.png",
  ]
 
  return (
    <>
        <div className='Clientele container w-full h-[150px]  items-center p-10 '>
          <p className='Clientele_Title container leading-4 w-[auto] text-center font-semibold text-2sm'>
            Trusted by companies around the world
          </p>
          <div className='clients container pt-3 w-full h-[50px]'>
            <Slider {...settings}>
            {client_logo.map((client_logo, index) => (
            <div key={index} className="">
              <img
                src={client_logo}
                alt= 'logo'
                className="h-[" 
              />
          </div>
        ))}
             
            </Slider>
          </div>

        </div>
    </>
  )
}

export default Clientele





































