import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import { Button, TextField } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { CreateUser } from "@/utils/api";
import { IMaskInput } from "react-imask";
import Image from "next/image";
import {toast} from "react-toastify";

interface IProps {
  status: boolean;
  onClose: () => void;
}

const validationSchema = Yup.object({
  name: Yup.string().required("Անվան դաշտը պարտադիր է"),
  phone_number: Yup.string()
    .matches(/^\(\+374\) \d{2}-\d{2}-\d{2}-\d{2}$/, "Հեռախոսահամարի ձևաչափը սխալ է")
    .required("Հեռախոսահամար դաշտը պարտադիր է"),
  password: Yup.string().required("Գաղտնաբառ դաշտը պարտադիր է"),
});

// Phone mask component for Formik
const TextMaskCustom = React.forwardRef<HTMLInputElement, any>(
  function TextMaskCustom(props, ref) {
    const { onChange, ...other } = props;
    return (
      <IMaskInput
        {...other}
        mask="(+374) 00-00-00-00"
        inputRef={ref}
        onAccept={(value: any) => onChange({ target: { name: props.name, value } })}
        overwrite
      />
    );
  }
);

function ModalRegister({ status, onClose }: IProps) {
  const [loading, setLoading] = useState<boolean>(false);
  const [name, setName] = useState<string | null>(null);

  function Submit(value: { name: string; password: string; phone_number: string }) {

    setLoading(true);
    CreateUser(value)
      .then(({ data }) => {

        if(data.data){
          setName(data.data.name);
        }

        if(data.status === 0){
          toast.error(data.error);
        }
      })
      .finally(() => setLoading(false));
  }

  const onCloseThanks = () => {
    setName(null)
    onClose()
  }

  return (
    <>
      <Dialog open={status} onClose={onCloseThanks}>
        <DialogTitle>
          <div className="flex-jsb-c">
            <span>Գրանցում</span>
            <i className="fa-regular fa-xmark-large text-[15px] cursor-pointer" onClick={onCloseThanks}></i>
          </div>
        </DialogTitle>
        <DialogContent className="w-full sm:w-[400px]">

          {
            name ? (
              <>
                <Image src="/img/thanks.svg" alt="thanks"  width={400} height={400}/>
                <h3 className="text-[18px] text-center">Հարգելի {name}, Շնորհակալություն ենք հայտնում՝ Ձեզ մեզ միանալու համար, կարող եք ավելացնել ձեր առաջին հայտարարությունը։</h3>
                <div className="text-right mt-4">
                  <Button onClick={onCloseThanks}>Փակել</Button>
                </div>
              </>
            ) : (
              <Formik
                initialValues={{ name: "", phone_number: "", password: "" }}
                validationSchema={validationSchema}
                onSubmit={Submit}
              >
                {({ setFieldValue }) => (
                  <Form className="pt-2">
                    <div className="w-full mb-8">
                      <Field name="name" as={TextField} label="Անուն Ազգանուն / Ընկերություն" className="w-full" />
                      <ErrorMessage name="name" component="div" className="text-[12px] text-red-500 mt-1" />
                    </div>

                    <div className="w-full mb-8">
                      <Field name="phone_number">
                        {({ field }: any) => (
                          <TextField
                            {...field}
                            label="Հեռախոսահամար"
                            className="w-full"
                            variant="outlined"
                            InputProps={{
                              inputComponent: TextMaskCustom as any,
                            }}
                            onChange={(e) => setFieldValue("phone_number", e.target.value)}
                          />
                        )}
                      </Field>
                      <ErrorMessage name="phone_number" component="div" className="text-[12px] text-red-500 mt-1" />
                    </div>

                    <div className="w-full mb-4">
                      <Field name="password" as={TextField} label="Գաղտնաբառ" className="w-full" type="password" />
                      <ErrorMessage name="password" component="div" className="text-[12px] text-red-500 mt-1" />
                    </div>

                    <div className="flex-jc-c">
                      <Button variant="contained" type="submit" disabled={loading}>
                        {loading ? "Գրանցվում է..." : "Գրանցվել"}
                      </Button>
                    </div>
                  </Form>
                )}
              </Formik>
            )
          }




        </DialogContent>
      </Dialog>

    </>
  );
}

export default ModalRegister;
