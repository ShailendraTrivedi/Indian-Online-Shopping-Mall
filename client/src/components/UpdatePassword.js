import { Form, Formik } from "formik";
import React from "react";
import { AddButton, AddInput } from ".";

const UpdatePassword = ({ handleIndex }) => {
  return (
    <Formik initialValues={{ userEmail: "" }}>
      {() => (
        <Form className="w-full space-y-[20px]">
          <AddInput
            id={"userNewPassword"}
            label="New Password"
            type={"password"}
            placeholder={"Enter your new password..."}
          />
          <AddInput
            id={"confirmPassword"}
            label="Confirm New Password"
            type={"password"}
            placeholder={"Re-Enter your new password..."}
          />
          <div onClick={handleIndex} className="px-[10px]">
            <AddButton
              size={"medium"}
              name={"Update Password"}
              className={"primary text-white"}
            ></AddButton>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default UpdatePassword;
