import { Form, Formik } from "formik";
import { AddButton, AddInput, Loading } from ".";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { UserDetailsAction } from "../redux";

export default function AddressBook() {
  const dispatch = useDispatch();
  const { loading, details } = useSelector((state) => state.userStore);

  useEffect(() => {
    if (!details) dispatch(UserDetailsAction());
  }, [dispatch, details]);

  if (!details) return;
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="p-[10px] space-y-[50px]">
          <h4 className="text-h4 text-center font-semibold">
            Address Book - Your Shipping Convenience Hub
          </h4>
          <div className="">
            <Formik
              initialValues={{
                recipientName: details.recipientName,
                recipientAddress: details.recipientAddress,
                recipientCity: details.recipientCity,
                recipientState: details.recipientState,
                recipientPostCode: details.recipientPostCode,
                recipientCountry: details.recipientCountry,
              }}
            >
              {({ values }) => (
                <Form className="space-y-[20px]">
                  <AddInput
                    id={"recipientName"}
                    type={"text"}
                    label={"Recipient's Name"}
                    value={values.recipientName}
                    placeholder={"Enter receiver name..."}
                  />
                  <AddInput
                    id={"recipientAddress"}
                    type={"text"}
                    label={"Address Line"}
                    value={values.recipientAddress}
                    placeholder={"Enter your address ..."}
                  />
                  <div className="flex ">
                    <AddInput
                      id={"recipientCity"}
                      type={"text"}
                      label={"Town/City"}
                      value={values.recipientCity}
                      placeholder={"Enter town/city here..."}
                    />
                    <AddInput
                      id={"recipientState"}
                      type={"text"}
                      label={"State"}
                      value={values.recipientState}
                      placeholder={"Enter state here..."}
                    />
                  </div>
                  <div className="flex">
                    <AddInput
                      id={"recipientPostCode"}
                      type={"text"}
                      label={"Post Code"}
                      value={values.recipientPostCode}
                      placeholder={"Enter post code..."}
                    />
                    <AddInput
                      id={"recipientCountry"}
                      type={"text"}
                      label={"Country"}
                      value={values.recipientCountry}
                      placeholder={"Enter country here..."}
                    />
                  </div>
                  <div className="flex justify-center pt-[20px]">
                    <AddButton
                      size={"medium"}
                      name={"Save Changes"}
                      className={"w-1/2 primary text-white"}
                    />
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      )}
    </>
  );
}
