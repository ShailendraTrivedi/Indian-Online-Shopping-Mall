import { Form, Formik } from "formik";
import { AddButton, AddInput } from ".";

export default function AddressBook() {
  return (
    <div className="p-[10px] space-y-[50px]">
      <h4 className="text-h4 text-center font-semibold">
        Address Book - Your Shipping Convenience Hub
      </h4>
      <div className="">
        <Formik
          initialValues={{
            userName: "",
            userAddress1: "",
            userAddress2: "",
            userCity: "",
            userState: "",
            userPostCode: "",
            userCountry: "",
          }}
        >
          {({ values }) => (
            <Form className="space-y-[20px]">
              <AddInput
                id={"userName"}
                type={"text"}
                label={"Recipient's Name"}
                value={values.userName}
                placeholder={"Enter receiver name..."}
              />
              <AddInput
                id={"userAddress1"}
                type={"text"}
                label={"Address Line 1"}
                value={values.userAddress1}
                placeholder={"Enter the address line 1..."}
              />
              <AddInput
                id={"userAddress2"}
                type={"text"}
                label={"Address Line 2"}
                value={values.userAddress2}
                placeholder={"Enter the address line 2..."}
              />
              <div className="flex ">
                <AddInput
                  id={"userCity"}
                  type={"text"}
                  label={"Town/City"}
                  value={values.userCity}
                  placeholder={"Enter town/city here..."}
                />
                <AddInput
                  id={"userState"}
                  type={"text"}
                  label={"State"}
                  value={values.userState}
                  placeholder={"Enter state here..."}
                />
              </div>
              <div className="flex">
                <AddInput
                  id={"userPostCode"}
                  type={"text"}
                  label={"Post Code"}
                  value={values.userPostCode}
                  placeholder={"Enter post code..."}
                />
                <AddInput
                  id={"userCountry"}
                  type={"text"}
                  label={"Country"}
                  value={values.userCountry}
                  placeholder={"Enter country here..."}
                />
              </div>
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
    </div>
  );
}
