import { Link, useNavigate } from "react-router-dom";
import { AddButton, AddInput } from ".";
import { Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { LoginAction } from "../redux";

export default function Login({ handleAccount }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (values) => {
    dispatch(LoginAction(values, navigate));
  };

  return (
    <div className="flex flex-col gap-[50px] w-[418px]">
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-h2 font-bold">Login.</h2>
        <p className="text-p">
          Don't have an account yet?
          <span
            onClick={handleAccount}
            className="gradient-text font-semibold cursor-pointer"
          >
            Register
          </span>
        </p>
      </div>
      <div className="flex flex-col gap-[20px]">
        <Formik
          initialValues={{ userEmail: "", userPassword: "" }}
          onSubmit={handleLogin}
        >
          {() => (
            <Form className="space-y-[20px]">
              <AddInput
                label={"Email"}
                id={"userEmail"}
                placeholder={"e.g., example@gmail.com"}
              />
              <div className="w-full space-y-[10px]">
                <AddInput
                  label={"Password"}
                  id={"userPassword"}
                  placeholder={"Enter password (6 character or more)"}
                />
                <div className="gradient-text text-end text-h6 cursor-pointer">
                  <Link to="/forget-password">Forget Password ?</Link>
                </div>
              </div>
              <AddButton
                size={"medium"}
                name={"Login"}
                className={"primary text-white "}
              />
            </Form>
          )}
        </Formik>

        <div className="text-black50 flex justify-center items-center mx-[10px]">
          <hr className="w-1/4 h-[2px] bg-black10" />
          OR
          <hr className="w-1/4 h-[2px] bg-black10" />
        </div>
        <button className="w-full border-black50 text-black50 border-2 p-[10px] flex gap-2 items-center justify-center">
          <img src="./Images/Google.png" alt="" className="" />
          Login With Google
        </button>
      </div>
    </div>
  );
}
