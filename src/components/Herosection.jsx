import React from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Listofsong = [
  "https://a10.gaanacdn.com/gn_img/showcase/NOXWVRgWkq/OXWVRGgWkq/size_m_1523469605.webp",
  "https://a10.gaanacdn.com/gn_img/showcase/81l3Mye3rM/1l3Mype3rM/size_m_1641538400.webp",
  "https://a10.gaanacdn.com/gn_img/showcase/4Z9bqo3yQn/Z9bqgxe3yQ/size_m_1709710163.webp",
  "https://a10.gaanacdn.com/gn_img/showcase/9En3pqeWXD/En3p8p03XD/size_m_1709737995.webp",
  "https://a10.gaanacdn.com/gn_img/showcase/10q3Z1K52r/0q3ZmaNK52/size_l_1707225729.webp",
  "https://a10.gaanacdn.com/gn_img/showcase/NOXWVRgWkq/OXWVmEL3kq/size_m_1709715114.webp",
];
import "../index.css";
function Herosection() {
  const settings = {
    infinite: true,
    slidesToShow: 3,
    speed: 500,
    autoplay: true,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div className="w-[95%] z mx-auto">
      <Slider {...settings}>
        {Listofsong.map((song, index) => (
          <div key={index} className=" px-[2px] md:px-2 ">
            <img
              src={song}
              alt="songImage"
              className="w-full h-full object-contain"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Herosection;
