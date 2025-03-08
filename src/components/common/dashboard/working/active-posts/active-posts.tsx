import { RandomKey } from "@/utils/helpers";
import { Button, Tooltip } from "@mui/material";
import ReactClipboard from "react-clipboardjs-copy";
import { toast } from "react-toastify";

function ActivePosts() {
  return (
    <>
      <h3 className="font-bold mb-4">Ակտիվացրած հայտարարությունները</h3>

      {Array.from(Array(10).keys()).map((_, i) => (
        <div
          key={RandomKey()}
          className="w-full border rounded-[20px] flex-js-s gap-4 flex-col lg:flex-row p-4 relative hover:border-gray-400 cursor-pointer mb-4"
        >
          <img
            src="/img/product/img_1.png"
            alt="Product image"
            width={120}
            height={120}
            className="w-full sm:w-[120px] h-[250px] sm:h-[120px] object-cover object-center rounded-[5px]"
          />

          <div className="min-h-[120px] flex-jsb-s flex-col">
            <div>
              <h2 className="font-semibold text-[18px]">
                Ավտո շիթերի և այլ Պլաստմասե խանութ վաճառք
              </h2>
              <p className="text-[14px] text-gray-500 mt-1">
                Ստեղծվել է 15,02,2025 - Ավարտվում է 25,02,2025
              </p>
            </div>

            <div className="flex-js-c gap-2 flex-col sm:flex-row">
              <Button variant="contained">Դիտել մանրամասն</Button>

              <ReactClipboard
                text="https://sellx.am/xlXjoSo"
                onSuccess={() =>
                  toast.success("Հղումը հաջողությամբ պատճենվել է")
                }
              >
                <div className="w-[228px] h-[40px] flex-jsb-c border rounded-[8px] px-2 text-[#6E6E6E] shadow-inner active:border-gray-400">
                  https://sellx.am/xlXjoSo
                  <Tooltip title="Պատճենել" placement="top">
                    <i className="fa-light fa-copy"></i>
                  </Tooltip>
                </div>
              </ReactClipboard>
            </div>
          </div>

          <div className="absolute right-[16px] top-[12px] lg:top-[unset] lg:bottom-[12px] text-gray-300">
            <i className="fa-solid fa-eye mr-2"></i>
            17{i}
          </div>
        </div>
      ))}
    </>
  );
}

export default ActivePosts;
