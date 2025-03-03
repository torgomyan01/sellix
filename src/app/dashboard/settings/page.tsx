"use client";

import MainTemplateDashboard from "@/app/dashboard/main-template-dashboard";
import { SITE_URL } from "@/utils/consts";
import { Button, Checkbox, FormControlLabel, TextField } from "@mui/material";

export default function Posts() {
  return (
    <MainTemplateDashboard pathname={`/${SITE_URL.DASHBOARD_SETTINGS}`}>
      <div className="w-full md:w-[60%] mt-6">
        <TextField
          className="w-full"
          name="name"
          label="Անուն Ազգանուն կամ խանութի անուն"
          variant="outlined"
        />
      </div>
      <div className="w-full md:w-[60%] mt-4">
        <TextField
          className="w-full"
          name="phone"
          label="Հեռախոսահաար"
          variant="outlined"
        />
      </div>
      <div className="w-full md:w-[60%] mt-4">
        <TextField
          className="w-full"
          name="email"
          label="Email"
          variant="outlined"
        />
      </div>
      <div className="w-full md:w-[60%] mt-4">
        <TextField
          className="w-full"
          type="password"
          name="password"
          label="Գաղտնաբառ"
          variant="outlined"
        />
      </div>
      <div className="w-full md:w-[60%] mt-4">
        <Button
          component="label"
          role={undefined}
          variant="contained"
          tabIndex={-1}
          startIcon={<i className="fa-regular fa-upload"></i>}
        >
          Բերբեռնել նկար
          <input type="file" className="hidden" />
        </Button>
      </div>
      <div className="w-full md:w-[60%] mt-4">
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label="Ես ընկերություն եմ"
        />
        <hr className="my-4" />
        <div>
          <FormControlLabel control={<Checkbox />} label="Whats App" />
        </div>
        <div>
          <FormControlLabel control={<Checkbox />} label="Telegram" />
        </div>
        <div>
          <FormControlLabel control={<Checkbox />} label="Viber" />
        </div>
      </div>

      <h4 className="mt-6">
        Կարող եք նշել նաեվ ձեր սոցիալական կայքերի հասցեները, ավելի արագ կապի
        համար
      </h4>
      <div className="w-full md:w-[60%] mt-4">
        <TextField
          className="w-full"
          name="fb_link"
          label="Facebook պռոֆիլի հղում "
          variant="outlined"
        />
      </div>
      <div className="w-full md:w-[60%] mt-4">
        <TextField
          className="w-full"
          name="insta_link"
          label="Instagram պռոֆիլի հղում "
          variant="outlined"
        />
      </div>
      <div className="w-full md:w-[60%] mt-4">
        <TextField
          className="w-full"
          name="linkedin_link"
          label="Linkedin պռոֆիլի հղում "
          variant="outlined"
        />
      </div>
    </MainTemplateDashboard>
  );
}
