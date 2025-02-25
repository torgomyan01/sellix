import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { fakeProducts, SITE_URL } from "@/utils/consts";
import { RandomKey } from "@/utils/helpers";
import Link from "next/link";
import Slider from "react-slick";

function SliderHome() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplaySpeed: 0,
    autoplay: true,
    cssEase: "linear",
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 7,
          slidesToScroll: 7,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full sm:w-[calc(100%_+_80px)] overflow-hidden mt-6 sm:mt-10">
      <Slider {...settings} className="h-[316px]">
        {[...fakeProducts, ...fakeProducts].map((item) => (
          <Link key={RandomKey()} href={SITE_URL.PRODUCT} className="px-2">
            <div className="w-full h-auto">
              <Image
                src={item.imageURL}
                alt={item.title}
                width={120}
                height={54}
                className="w-full rounded-[8px] h-[150px] object-cover object-center shadow"
              />
              <h3 className="mt-2 text-[16px]">{item.title}</h3>
            </div>
          </Link>
        ))}
      </Slider>
    </div>
  );
}

export default SliderHome;
