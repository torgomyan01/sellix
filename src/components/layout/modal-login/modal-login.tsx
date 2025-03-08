"use client";

import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import { Button, TextField } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import React, { useState } from "react";
import { IMaskInput } from "react-imask";
import * as Yup from "yup";
import { ErrorMessage, Field, Form, Formik, FieldProps } from "formik";
import { UserLogin } from "@/app/actions/login";
import { toast } from "react-toastify";

interface IProps {
  status: boolean;
  onClose: () => void;
}

interface IUserLogin {
  phone_number: string;
  password: string;
}

interface TextMaskCustomProps {
  onChange: (event: { target: { name: string; value: string } }) => void;
  name: string;
}

// ✅ Հեռախոսահամարի `IMaskInput`-ի համար TypeScript-ի ճիշտ կիրառումը
const TextMaskCustom = React.forwardRef<HTMLInputElement, TextMaskCustomProps>(
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

const validationSchema = Yup.object({
  phone_number: Yup.string()
    .matches(
      /^\(\+374\) \d{2}-\d{2}-\d{2}-\d{2}$/,
      "Հեռախոսահամարի ձևաչափը սխալ է",
    )
    .required("Հեռախոսահամար դաշտը պարտադիր է"),
  password: Yup.string().required("Գաղտնաբառ դաշտը պարտադիր է"),
});

function ModalLogin({ status, onClose }: IProps) {
  const [loading, setLoading] = useState<boolean>(false);

  async function Submit(value: IUserLogin) {
    setLoading(true);

    const res = await UserLogin(value);

    if (res.status === 0) {
      toast.error(res.message);
    }
    setLoading(false);
  }

  return (
    <Dialog open={status} onClose={onClose}>
      <DialogTitle>
        <div className="flex-jsb-c">
          <span>Մուտք</span>
          <i
            className="fa-regular fa-xmark-large text-[15px] cursor-pointer"
            onClick={onClose}
          ></i>
        </div>
      </DialogTitle>
      <DialogContent className="w-full sm:w-[400px]">
        <Formik
          initialValues={{ phone_number: "", password: "" }}
          validationSchema={validationSchema}
          onSubmit={Submit}
        >
          {({ setFieldValue }) => (
            <Form className="pt-2">
              <div className="w-full mb-8">
                <Field name="phone_number">
                  {({ field }: FieldProps) => (
                    <TextField
                      {...field}
                      label="Հեռախոսահամար"
                      className="w-full"
                      variant="outlined"
                      InputProps={{
                        inputComponent: TextMaskCustom as any,
                      }}
                      onChange={(e) =>
                        setFieldValue("phone_number", e.target.value)
                      }
                    />
                  )}
                </Field>
                <ErrorMessage
                  name="phone_number"
                  component="div"
                  className="text-[12px] text-red-500 mt-1"
                />
              </div>

              <div className="w-full mb-4">
                <Field
                  name="password"
                  as={TextField}
                  label="Գաղտնաբառ"
                  className="w-full"
                  type="password"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-[12px] text-red-500 mt-1"
                />
              </div>

              <div className="flex-jc-c">
                <Button variant="contained" type="submit" disabled={loading}>
                  Մուտք
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </DialogContent>
    </Dialog>
  );
}

export default ModalLogin;
