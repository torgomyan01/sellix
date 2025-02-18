import Image from "next/image";
import { fakeProducts } from "../../../../utils/consts";
import { SwiperSlide } from "swiper/react";
import { RandomKey } from "../../../../utils/helpers";
import Link from "next/link";
import { useState } from "react";

function HomeFormSearch() {
  const [result, setResult] = useState<boolean>(false);
  return (
    <div className="flex-jc-c w-full relative z-50">
      <form
        action="#"
        className="min-w-full min-[632px]:min-w-[600px] relative"
      >
        <label
          className={`w-full h-[40px] ${result ? "border-gray-500" : "border-gray-300"} border transition rounded-[40px] bg-white overflow-hidden px-4 flex-jsb-c`}
        >
          <input
            className="w-full h-full"
            type="text"
            onFocus={() => setResult(true)}
            onBlur={() => setResult(false)}
            placeholder="Որոնում"
            defaultValue="Matori yux"
          />
          <i className="fa-regular fa-magnifying-glass"></i>
        </label>
        {result && (
          <div className="w-full bg-white absolute top-[100%] left-0 mt-1 rounded-[8px] border p-4">
            <div className="flex-js-c gap-2 flex-wrap">
              <button className="px-3 py-1 bg-gray-200 rounded-[4px] text-gray-600">
                Karobka
              </button>
              <button className="px-3 py-1 bg-gray-200 rounded-[4px] text-gray-600">
                CX-5
              </button>
              <button className="px-3 py-1 bg-gray-200 rounded-[4px] text-gray-600">
                Պահեստամասեր
              </button>
              <button className="px-3 py-1 bg-gray-200 rounded-[4px] text-gray-600">
                Շիթ
              </button>
              <button className="px-3 py-1 bg-gray-200 rounded-[4px] text-gray-600">
                Ներկել
              </button>
            </div>

            <div className="w-full grid grid-cols-1 gap-4 h-[300px]  mt-4 pr-2 overflow-y-auto">
              {fakeProducts.map((item, i) => (
                <SwiperSlide key={RandomKey()}>
                  <div className="w-full h-auto flex-js-s gap-4 cursor-pointer">
                    <Image
                      src={item.imageURL}
                      alt={item.title}
                      width={100}
                      height={100}
                      className="w-[100px] h-[100px] rounded-[8px] object-cover object-center shadow"
                    />
                    <h3 className="text-[16px]">{item.title}</h3>
                  </div>
                </SwiperSlide>
              ))}
            </div>

            <div className="flex-jc-c mt-4">
              <Link href="#" className="text-[14px]">
                Տեսնել Բոլորը
              </Link>
            </div>
          </div>
        )}
      </form>
    </div>
  );
}

export default HomeFormSearch;
