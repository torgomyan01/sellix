"use client";

import MainTemplateDashboard from "@/app/dashboard/main-template-dashboard";
import { SITE_URL } from "@/utils/consts";
import { Button, Checkbox, FormControlLabel, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { GetUserInfo } from "@/app/actions/user/getUserInfo";
import { GetToken } from "@/utils/helpers";
import LoadingBlock from "@/components/layout/loading-block/loading-block";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { IMaskInput } from "react-imask";
import { UpdateUserInfo } from "@/app/actions/user/updateUserInfo";
import { toast } from "react-toastify";
import * as Yup from "yup";

const TextMaskCustom = React.forwardRef<HTMLInputElement, any>(
  function TextMaskCustom(props, ref) {
    const { onChange, ...other } = props;
    return (
      <IMaskInput
        {...other}
        mask="(+374) 00-00-00-00"
        inputRef={ref}
        onAccept={(value: string) =>
          onChange({ target: { name: props.name, value } })
        }
        overwrite
      />
    );
  },
);

const socialLinkPatterns = {
  fb_link:
    /^https?:\/\/(www\.)?(facebook\.com|fb\.com|m\.facebook\.com)\/[A-Za-z0-9_.-]+\/?$/,
  insta_link: /^https?:\/\/(www\.)?instagram\.com\/[A-Za-z0-9_.-]+\/?$/,
  linkedin_link:
    /^https?:\/\/(www\.)?linkedin\.com\/(in|company)\/[A-Za-z0-9_.-]+\/?$/,
};

const validationSchema = Yup.object({
  name: Yup.string().required("Անունը պարտադիր է"),

  phone_number: Yup.string()
    .matches(
      /^\(\+374\) \d{2}-\d{2}-\d{2}-\d{2}$/,
      "Հեռախոսահամարի ձևաչափը սխալ է",
    )
    .required("Հեռախոսահամար դաշտը պարտադիր է"),

  email: Yup.string()
    .email("Սխալ Email հասցե")
    .required("Email դաշտը պարտադիր է"),

  // ✅ Facebook-ի հղման ստուգում (ընդունում է `fb.com`, `m.facebook.com`, `www.facebook.com`)
  fb_link: Yup.string()
    .matches(
      socialLinkPatterns.fb_link,
      "Հղումը պետք է լինի Facebook-ի օգտատիրոջ կամ էջի URL",
    )
    .nullable(),

  // ✅ Instagram-ի հղման ստուգում
  insta_link: Yup.string()
    .matches(
      socialLinkPatterns.insta_link,
      "Հղումը պետք է լինի Instagram-ի օգտատիրոջ էջի URL",
    )
    .nullable(),

  // ✅ LinkedIn-ի հղման ստուգում (ընդունում է `linkedin.com/in/` և `linkedin.com/company/`)
  linkedin_link: Yup.string()
    .matches(
      socialLinkPatterns.linkedin_link,
      "Հղումը պետք է լինի LinkedIn-ի օգտատիրոջ կամ ընկերության էջի URL",
    )
    .nullable(),
});

export default function Posts() {
  const [user, setUser] = useState<IDBUser | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  async function getInfo() {
    return await GetUserInfo(GetToken());
  }

  useEffect(() => {
    getInfo().then((res) => {
      if (res.status && res.data) {
        setUser(res.data);
      }
    });
  }, []);

  const handleSubmit = async (values: any) => {
    setLoading(true);
    const res = await UpdateUserInfo(GetToken(), values);

    if (res.status === 0) {
      toast.error(res.message);
    }

    toast.success(res.message);

    setLoading(false);
  };

  return (
    <MainTemplateDashboard pathname={`/${SITE_URL.DASHBOARD_SETTINGS}`}>
      <LoadingBlock status={!user}>
        {user && (
          <Formik
            initialValues={{
              name: user.name || "",
              phone_number: user.phone_number || "",
              email: user.email || "",
              image_path: user.image_path || "",
              its_company: user.its_company || false,
              whats_app: user.whats_app || false,
              telegram: user.telegram || false,
              viber: user.viber || false,
              fb_link: user.fb_link || "",
              insta_link: user.insta_link || "",
              linkedin_link: user.linkedin_link || "",
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ setFieldValue, values }) => (
              <Form className="pt-2">
                {/* Անուն */}
                <div className="w-full md:w-[60%] mt-6">
                  <Field name="name">
                    {({ field }: any) => (
                      <TextField
                        {...field}
                        label="Անուն"
                        className="w-full"
                        variant="outlined"
                      />
                    )}
                  </Field>
                  <ErrorMessage
                    name="name"
                    component="div"
                    className="text-red-500 text-[11px]"
                  />
                </div>

                {/* Հեռախոսահամար */}
                <div className="w-full md:w-[60%] mt-4">
                  <Field name="phone_number">
                    {({ field }: any) => (
                      <TextField
                        {...field}
                        label="Հեռախոսահամար"
                        className="w-full"
                        variant="outlined"
                        InputProps={{ inputComponent: TextMaskCustom as any }}
                        onChange={(e) =>
                          setFieldValue("phone_number", e.target.value)
                        }
                      />
                    )}
                  </Field>
                  <ErrorMessage
                    name="phone_number"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>

                {/* Email */}
                <div className="w-full md:w-[60%] mt-4">
                  <Field name="email">
                    {({ field }: any) => (
                      <TextField
                        {...field}
                        label="Email"
                        className="w-full"
                        variant="outlined"
                      />
                    )}
                  </Field>
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>

                {/* Checkboxes */}
                <div className="w-full md:w-[60%] mt-4">
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={values.its_company}
                        onChange={(e) =>
                          setFieldValue("its_company", e.target.checked)
                        }
                      />
                    }
                    label="Ես ընկերություն եմ"
                  />
                  <hr className="my-4" />

                  <h3 className="mb-2">
                    Եթե հեռախոսահամարը գործում է նշված համակարգերում կարող եք
                    ընտրել
                  </h3>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={values.whats_app}
                        onChange={(e) =>
                          setFieldValue("whats_app", e.target.checked)
                        }
                      />
                    }
                    label="Whats App"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={values.telegram}
                        onChange={(e) =>
                          setFieldValue("telegram", e.target.checked)
                        }
                      />
                    }
                    label="Telegram"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={values.viber}
                        onChange={(e) =>
                          setFieldValue("viber", e.target.checked)
                        }
                      />
                    }
                    label="Viber"
                  />
                </div>

                {/* Սոցիալական կայքերի հղումներ */}
                <h4 className="mt-6">
                  Կարող եք նշել ձեր սոցիալական կայքերի հասցեները
                </h4>
                <div className="w-full md:w-[60%] mt-4">
                  <Field name="fb_link">
                    {({ field }: any) => (
                      <TextField
                        {...field}
                        label="Facebook"
                        className="w-full"
                        variant="outlined"
                      />
                    )}
                  </Field>
                  <ErrorMessage
                    name="fb_link"
                    component="div"
                    className="text-red-500 text-[12px]"
                  />
                </div>

                <div className="w-full md:w-[60%] mt-4">
                  <Field name="insta_link">
                    {({ field }: any) => (
                      <TextField
                        {...field}
                        label="Instagram"
                        className="w-full"
                        variant="outlined"
                      />
                    )}
                  </Field>
                  <ErrorMessage
                    name="insta_link"
                    component="div"
                    className="text-red-500 text-[12px]"
                  />
                </div>

                <div className="w-full md:w-[60%] mt-4">
                  <Field name="linkedin_link">
                    {({ field }: any) => (
                      <TextField
                        {...field}
                        label="LinkedIn"
                        className="w-full"
                        variant="outlined"
                      />
                    )}
                  </Field>
                  <ErrorMessage
                    name="linkedin_link"
                    component="div"
                    className="text-red-500 text-[12px]"
                  />
                </div>

                <div className="w-full md:w-[60%] mt-6">
                  <Button variant="contained" type="submit" loading={loading}>
                    Պահպանել փոփոխությունները
                  </Button>
                </div>
              </Form>
            )}
          </Formik>
        )}
      </LoadingBlock>
    </MainTemplateDashboard>
  );
}
