import { Form, Formik } from "formik";
import { AddButton, AddInput } from ".";
import { useDispatch } from "react-redux";
import { RegisterAction } from "../redux";
import { useNavigate } from "react-router-dom";

export default function Register({ handleAccount }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleRegister = (values) => {
    dispatch(RegisterAction(values, navigate));
  };
  return (
    <div className="flex flex-col gap-[20px] w-[418px]">
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-h2 font-bold">Register.</h2>
        <p className="text-p">
          Already have an account?
          <span
            onClick={handleAccount}
            className="gradient-text font-semibold cursor-pointer ps-2"
          >
            Login
          </span>
        </p>
      </div>
      <div className="">
        <Formik
          initialValues={{
            userName: "",
            userEmail: "",
            userPassword: "",
            confirmPassword: "",
          }}
          onSubmit={handleRegister}
        >
          {() => (
            <Form className="space-y-[20px]">
              <AddInput
                label={"Full Name"}
                id={"userName"}
                placeholder={"e.g. John Dep"}
              />
              <AddInput
                label={"Email"}
                id={"userEmail"}
                placeholder={"e.g., example@gmail.com"}
              />
              <AddInput
                label={"Password"}
                id={"userPassword"}
                placeholder={"Enter password (6 character or more)"}
              />
              <AddInput
                label={"Confirm Password"}
                id={"confirmPassword"}
                placeholder={"Re-Write Password"}
              />
              <AddButton
                size={"medium"}
                name={"Register"}
                className={"primary text-white"}
              />
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
