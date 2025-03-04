"use client";

import MainTemplateDashboard from "@/app/dashboard/main-template-dashboard";
import React, { useState } from "react";
import { CURRENCY, SERVICES_TYPE, SITE_URL } from "@/utils/consts";
import AutocompleteCorrectCategory from "@/components/layout/autocomplite-correct-category/autocomplete-correct-category";
import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import { RandomKey, toBase64 } from "@/utils/helpers";
import Image from "next/image";

interface IAutocompleteResult {
  cat: ICategory | null;
  subCat: ICategory | null;
  subSubCat: ICategory | null;
}

export default function Posts() {
  const [results, setResults] = useState<IAutocompleteResult | null>(null);
  const [images, setImages] = useState<string[]>([]);
  const [currency, setCurrency] = useState("");
  const [typeActivity, setTypeActivity] = useState("");
  const [typeOffer, setTypeOffer] = useState("");

  function CategorySelecting(res: IAutocompleteResult) {
    setResults(res);
  }

  const handleChange = (event: SelectChangeEvent) => {
    setCurrency(event.target.value as string);
  };

  function selectFiles(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.files) {
      const files = Array.from(e.target.files); // FileList-ը վերածում ենք զանգվածի

      files.forEach((file) => {
        toBase64(file).then((result) => {
          setImages((oldArr) => [...oldArr, result]);
        });
      });
    }
  }

  return (
    <MainTemplateDashboard pathname={`/${SITE_URL.DASHBOARD_POSTS_CREATE}`}>
      <div className="w-full wrapper mt-4 p-6">
        <h1 className="mb-4 font-bold text-black">
          Ընտրեք համապատասխան բաժիները
        </h1>
        <AutocompleteCorrectCategory onChange={CategorySelecting} />

        {results?.cat && results?.subCat && results?.subSubCat && (
          <>
            <h1 className="mt-10">
              <span className="underline">{results?.cat?.name}</span> {">"}{" "}
              {results?.subCat?.name} {"> "}
              {results?.subSubCat?.name}
            </h1>

            <form action="/" className="w-full mt-6">
              <div className="w-full sm:w-[60%] mb-8">
                <TextField
                  label="Հասցե կամ տարածաշրջան"
                  variant="outlined"
                  className="w-full"
                />
              </div>
              <div className="w-full sm:w-[60%] mb-8 relative">
                <button
                  type="button"
                  className="px-4 py-1 bg-white text-[14px] absolute top-[-13px] right-[10px] z-20 border shadow"
                >
                  Բարելավել վեռնագիրը
                </button>
                <TextField
                  label="Վեռնագիր"
                  variant="outlined"
                  className="w-full"
                />
              </div>

              <div className="w-full sm:w-[60%] mb-8 grid grid-cols-2 gap-4">
                <FormControl className="w-full">
                  <InputLabel id="demo-simple-select-label">
                    Գործունեության տեսակ
                  </InputLabel>
                  <Select
                    value={typeActivity}
                    required
                    label="Գործունեության տեսակ"
                    onChange={(e: SelectChangeEvent) =>
                      setTypeActivity(e.target.value)
                    }
                  >
                    {Object.values(SERVICES_TYPE).map((item) => (
                      <MenuItem key={RandomKey()} value={item}>
                        {item}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>

                {typeActivity === SERVICES_TYPE["Տալիս եմ վարձով"] && (
                  <FormControl className="w-full">
                    <InputLabel>Առաջարկի տեսակ</InputLabel>
                    <Select
                      value={typeOffer}
                      required
                      label="Առաջարկի տեսակ"
                      onChange={(e: SelectChangeEvent) =>
                        setTypeOffer(e.target.value)
                      }
                    >
                      <MenuItem value="Օրավարձով">Օրավարձով</MenuItem>
                      <MenuItem value="Ամսավճարով">Ամսավճարով</MenuItem>
                    </Select>
                  </FormControl>
                )}
              </div>

              <div className="w-full sm:w-[60%] mb-8 relative">
                <button
                  type="button"
                  className="px-4 py-1 bg-white text-[14px] absolute top-[-13px] right-[10px] z-20 border shadow"
                >
                  Բարելավել նկարագրությունը
                </button>
                <TextField
                  label="Նկարագրություն"
                  variant="outlined"
                  className="w-full"
                  multiline
                  rows={20}
                />
              </div>

              <div className="w-full sm:w-[60%] mb-8 flex-jsb-c gap-4">
                <div className="flex-js-c gap-4">
                  <TextField
                    label="Արժեքը"
                    variant="outlined"
                    className="w-[174px]"
                  />
                  <FormControl className="w-[100px]">
                    <InputLabel id="demo-simple-select-label">
                      {CURRENCY.AMD}
                    </InputLabel>
                    <Select
                      value={currency}
                      label={CURRENCY.AMD}
                      onChange={handleChange}
                    >
                      {Object.values(CURRENCY).map((item) => (
                        <MenuItem key={RandomKey()} value={item}>
                          {item}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </div>
              </div>
              <div className="w-full sm:w-[60%] mb-8">
                <FormControlLabel control={<Checkbox />} label="Սակարկելի" />
              </div>
              <div className="mb-8">
                <div className="w-full sm:w-[60%] flex-js-s gap-2 flex-col sm:flex-row">
                  <label className="w-[80px] h-[80px] border rounded-[8px] flex-jc-c hover:border-black cursor-pointer">
                    <i className="fa-solid fa-plus text-black/70"></i>
                    <input
                      type="file"
                      className="hidden"
                      onChange={selectFiles}
                      multiple
                      accept="image/jpeg,image/png"
                    />
                  </label>
                  <div className="w-full sm:w-[257px] grid grid-cols-3 gap-2">
                    {images &&
                      images.map((image) => (
                        <div
                          key={RandomKey()}
                          className="w-full sm:w-[80px] h-[80px] border rounded-[8px] flex-jc-c overflow-hidden"
                        >
                          <Image
                            src={image}
                            alt="image"
                            width={80}
                            height={80}
                            className="w-full h-full object-center object-cover"
                          />
                          {/*<i className="fa-regular fa-image text-black/70"></i>*/}
                        </div>
                      ))}
                  </div>
                </div>

                {images && images.length < 6 && (
                  <p className="text-red-500 mt-2 text-[14px]">
                    Նկարների քանակը պառտադիր պետքե լինի 6 հատ
                  </p>
                )}
              </div>

              <div className="w-full sm:w-[60%] ">
                <Button variant="contained">Ավելացնել</Button>
              </div>
            </form>
          </>
        )}
      </div>
    </MainTemplateDashboard>
  );
}
