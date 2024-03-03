import { Form, Formik } from "formik";
import React from "react";
import { AddButton, AddInput } from ".";

const VerifyOTP = ({ handleIndex }) => {
  return (
    <div className="flex flex-col items-center gap-[10px]">
      <Formik initialValues={{ otp: "" }}>
        {() => (
          <Form className="w-full space-y-[20px]">
            <AddInput
              id={"otp"}
              label="OTP"
              type={"text"}
              placeholder={"Enter 6 digit OTP here..."}
            />
            <div onClick={handleIndex} className="px-[10px]">
              <AddButton
                size={"medium"}
                name={"Verify OTP"}
                className={"primary text-white"}
              ></AddButton>
            </div>
          </Form>
        )}
      </Formik>
      <div className="h-[55px] flex flex-col gap-[10px] items-center">
        <div className="">
          Resend OTP in <b>00:34</b>
        </div>
        <div className="gradient-text font-semibold">Resend OTP</div>
      </div>
    </div>
  );
};

export default VerifyOTP;
