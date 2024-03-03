import { Form, Formik } from "formik";
import { useState } from "react";
import { AddInput, AddButton } from ".";

export default function AccountDetails() {
  const [changePassword, setChangePassword] = useState();
  return (
    <div className="p-[10px] space-y-[50px]">
      <h4 className="text-h4 text-center font-semibold">
        Account Details - Your Personalized Hubs
      </h4>
      <div className="">
        <Formik
          initialValues={{
            userName: "Shailendra Trivedi",
            userEmail: "shailendratrivedi009@gmail.com",
            userPhoneNumber: "0000000000",
          }}
        >
          {({ values }) => (
            <Form className="space-y-[20px]">
              <AddInput
                id={"userName"}
                type={"text"}
                label={"Full Name"}
                value={values.userName}
              />
              <AddInput
                id={"userEmail"}
                type={"email"}
                label={"Email"}
                value={values.userEmail}
              />
              <AddInput
                id={"userPhoneNumber"}
                type={"text"}
                label={"Phone Number"}
                value={values.userPhoneNumber}
              />
              <div className="flex justify-center pt-[20px]">
                <AddButton
                  size={"medium"}
                  name={"Save Changes"}
                  className={"w-1/2 primary"}
                />
              </div>
            </Form>
          )}
        </Formik>
      </div>
      <div>
        <Formik
          initialValues={{
            userPassword: "12345678",
            newPassword: "",
            confirmPassword: "",
          }}
          onSubmit={(values) => {
            alert("Working");
          }}
        >
          {({ values }) => (
            <Form className="">
              <div className="relative">
                <AddInput
                  id={"userPassword"}
                  disabled={true}
                  type={"password"}
                  label={"Password"}
                  value={values.userPassword}
                />
                <span className="absolute bottom-[12px] right-[20px] gradient-text text-h6 cursor-pointer">
                  {changePassword ? (
                    <div className="flex gap-2">
                      <AddButton type="submit">Save</AddButton>/
                      <AddButton onClick={() => setChangePassword(false)}>
                        Cancel
                      </AddButton>
                    </div>
                  ) : (
                    <AddButton onClick={() => setChangePassword(true)}>
                      Change Password?
                    </AddButton>
                  )}
                </span>
              </div>
              {changePassword && (
                <div>
                  <AddInput
                    id={"newPassword"}
                    type={"password"}
                    placeholder={"Enter your new password..."}
                  />
                  <AddInput
                    id={"confirmPassword"}
                    type={"password"}
                    placeholder={"Re-write your new password..."}
                  />
                </div>
              )}
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
