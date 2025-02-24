import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import { fakeProducts, SITE_URL } from "@/utils/consts";
import { RandomKey } from "@/utils/helpers";
import Link from "next/link";

function SliderHome() {
  return (
    <div className="w-full sm:w-[calc(100%_+_80px)] overflow-hidden mt-6 sm:mt-10">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView={10}
        loop={true} // Անընդհատ շարժում
        autoplay={{
          delay: 0, // Գործնականում «նույնիսկ» անընդհատ շարժում
          disableOnInteraction: false,
        }}
        speed={3000} // Արագությունը կարող եք կարգավորել ըստ ցանկության
        breakpoints={{
          320: { slidesPerView: 1 }, // Հեռախոսի էկրան
          420: { slidesPerView: 2 }, // Հեռախոսի էկրան
          640: { slidesPerView: 4 }, // Փոքր պլանշետ
          1024: { slidesPerView: 7 }, // Նորմալ համակարգիչ
          1440: { slidesPerView: 10 }, // Լայն էկրան
        }}
      >
        {[...fakeProducts, ...fakeProducts].map((item) => (
          <SwiperSlide key={RandomKey()}>
            <Link href={SITE_URL.PRODUCT}>
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
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default SliderHome;
