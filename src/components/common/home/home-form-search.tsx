import Image from "next/image";
import { fakeProducts } from "../../../../utils/consts";
import { RandomKey } from "../../../../utils/helpers";
import Link from "next/link";
import React, { useRef, useState } from "react";

function HomeFormSearch() {
  const [result, setResult] = useState<boolean>(false);
  const inputRef = useRef<null | HTMLInputElement>(null);

  function searchResult() {
    setResult(true);
    if (inputRef.current) {
      inputRef.current?.focus();
    }
  }

  return (
    <div className="flex-jc-c w-full relative z-50">
      <form
        action="#"
        className="min-w-full min-[632px]:min-w-[600px] relative"
      >
        <label
          onClick={searchResult}
          className={`w-full h-[40px] ${result ? "border-gray-500 z-10" : "border-gray-300"} border transition rounded-[40px] bg-white overflow-hidden px-4 flex-jsb-c relative`}
        >
          <input
            className="w-full h-full hidden sm:block"
            type="text"
            placeholder="Որոնում"
            defaultValue="Matori yux"
          />
          <span className="text-gray-500 block sm:hidden">Որոնում</span>
          <i className="fa-regular fa-magnifying-glass"></i>
        </label>
        {result && (
          <>
            <div
              className="w-full h-full fixed  top-0 left-0"
              onClick={() => setResult(false)}
            ></div>
            <div className="w-full bg-white absolute top-[100%] left-0 mt-1 rounded-[8px] border p-4 hidden sm:block">
              <div className="flex-js-c gap-2 flex-wrap">
                <button className="px-3 py-1 text-[14px] sm:text-[16px] bg-gray-200 rounded-[4px] text-gray-600">
                  Karobka
                </button>
                <button className="px-3 py-1 text-[14px] sm:text-[16px] bg-gray-200 rounded-[4px] text-gray-600">
                  CX-5
                </button>
                <button className="px-3 py-1 text-[14px] sm:text-[16px] bg-gray-200 rounded-[4px] text-gray-600">
                  Պահեստամասեր
                </button>
                <button className="px-3 py-1 text-[14px] sm:text-[16px] bg-gray-200 rounded-[4px] text-gray-600">
                  Շիթ
                </button>
                <button className="px-3 py-1 text-[14px] sm:text-[16px] bg-gray-200 rounded-[4px] text-gray-600">
                  Ներկել
                </button>
              </div>

              <div className="w-full grid grid-cols-1 gap-4 h-[200] sm:h-[300px]  mt-4 pr-2 overflow-y-auto">
                {fakeProducts.map((item) => (
                  <div
                    key={RandomKey()}
                    className="w-full h-auto flex-js-s gap-4 cursor-pointer"
                  >
                    <Image
                      src={item.imageURL}
                      alt={item.title}
                      width={100}
                      height={100}
                      className="w-[100px] min-w-[100px] h-[100px] rounded-[8px] object-cover object-center shadow"
                    />
                    <h3 className="text-[16px]">{item.title}</h3>
                  </div>
                ))}
              </div>

              <div className="flex-jc-c mt-4">
                <Link href="#" className="text-[14px]">
                  Տեսնել Բոլորը
                </Link>
              </div>
            </div>
          </>
        )}
      </form>

      {result && (
        <div className="w-full h-[100dvh] bg-white fixed top-0 left-0 sm:hidden z-20 flex flex-col">
          <div className="flex-je-c p-4">
            <i
              className="fa-solid fa-xmark-large"
              onClick={() => setResult(false)}
            ></i>
          </div>
          <div className="w-full border-b pb-4 px-4">
            <label className="w-full h-[40px] border rounded-[8px] block overflow-hidden relative">
              <input
                type="text"
                ref={inputRef}
                placeholder="Որոնում"
                className="w-full h-full ps-3"
              />
              <i className="fa-regular fa-magnifying-glass absolute right-3 top-[50%] transform translate-y-[-40%]"></i>
            </label>
            <div className="flex-js-c gap-2 flex-wrap mt-4">
              <button className="px-3 py-1 text-[14px] sm:text-[16px] bg-gray-200 rounded-[4px] text-gray-600">
                Karobka
              </button>
              <button className="px-3 py-1 text-[14px] sm:text-[16px] bg-gray-200 rounded-[4px] text-gray-600">
                CX-5
              </button>
              <button className="px-3 py-1 text-[14px] sm:text-[16px] bg-gray-200 rounded-[4px] text-gray-600">
                Պահեստամասեր
              </button>
              <button className="px-3 py-1 text-[14px] sm:text-[16px] bg-gray-200 rounded-[4px] text-gray-600">
                Շիթ
              </button>
              <button className="px-3 py-1 text-[14px] sm:text-[16px] bg-gray-200 rounded-[4px] text-gray-600">
                Ներկել
              </button>
            </div>
          </div>

          <div className="w-full pl-4 pr-1 flex-grow overflow-hidden">
            <div className="w-full pr-2 h-full overflow-x-auto pt-4">
              {fakeProducts.map((item) => (
                <div
                  key={RandomKey()}
                  className="w-full h-auto flex-js-s gap-4 cursor-pointer mb-4"
                >
                  <Image
                    src={item.imageURL}
                    alt={item.title}
                    width={100}
                    height={100}
                    className="w-[100px] min-w-[100px] h-[100px] rounded-[8px] object-cover object-center shadow"
                  />
                  <h3 className="text-[16px]">{item.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default HomeFormSearch;
