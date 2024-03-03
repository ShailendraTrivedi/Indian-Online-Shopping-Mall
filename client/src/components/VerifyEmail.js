import { Form, Formik } from "formik";
import React from "react";
import { AddButton, AddInput } from ".";

const VerifyEmail = ({ handleIndex }) => {
  return (
    <Formik initialValues={{ userEmail: "" }}>
      {() => (
        <Form className="w-full space-y-[20px]">
          <AddInput
            id={"userEmail"}
            label="Email"
            type={"email"}
            placeholder={"example@gmail.com"}
          />
          <div onClick={handleIndex} className="px-[10px]">
            <AddButton
              size={"medium"}
              name={"Verify Email"}
              className={"primary text-white"}
            ></AddButton>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default VerifyEmail;
