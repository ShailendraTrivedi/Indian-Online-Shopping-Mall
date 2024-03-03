import { Form, Formik } from "formik";
import { AddInput, AddButton, Separator } from "../components";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [open, setOpen] = useState(null);
  const QuestionAnswer = [
    {
      q: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Facere, rerum.",
      a: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis hic id unde natus quidem inventore nam culpa! Fuga voluptatem sint repudiandae libero laudantium possimus pariatur optio. Voluptas ipsam velit atque libero deserunt amet nobis molestias temporibus delectus pariatur, odit dignissimos, est voluptatum! Iure nihil assumenda esse dignissimos ducimus provident, laudantium aliquid. Repellat assumenda eaque delectus dolores perspiciatis tempore, magni repellendus quod illum, quo voluptatibus vel nostrum adipisci quas perferendis? Nihil soluta ab amet non eligendi similique tempora id, enim incidunt, nesciunt veniam beatae voluptatum ut. Repellendus, quos ex quisquam itaque minus nobis eos voluptates obcaecati, asperiores perspiciatis nisi corrupti nemo!",
    },
    {
      q: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Facere, rerum.",
      a: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis hic id unde natus quidem inventore nam culpa! Fuga voluptatem sint repudiandae libero laudantium possimus pariatur optio. Voluptas ipsam velit atque libero deserunt amet nobis molestias temporibus delectus pariatur, odit dignissimos, est voluptatum! Iure nihil assumenda esse dignissimos ducimus provident, laudantium aliquid. Repellat assumenda eaque delectus dolores perspiciatis tempore, magni repellendus quod illum, quo voluptatibus vel nostrum adipisci quas perferendis? Nihil soluta ab amet non eligendi similique tempora id, enim incidunt, nesciunt veniam beatae voluptatum ut. Repellendus, quos ex quisquam itaque minus nobis eos voluptates obcaecati, asperiores perspiciatis nisi corrupti nemo!",
    },
    {
      q: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Facere, rerum.",
      a: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis hic id unde natus quidem inventore nam culpa! Fuga voluptatem sint repudiandae libero laudantium possimus pariatur optio. Voluptas ipsam velit atque libero deserunt amet nobis molestias temporibus delectus pariatur, odit dignissimos, est voluptatum! Iure nihil assumenda esse dignissimos ducimus provident, laudantium aliquid. Repellat assumenda eaque delectus dolores perspiciatis tempore, magni repellendus quod illum, quo voluptatibus vel nostrum adipisci quas perferendis? Nihil soluta ab amet non eligendi similique tempora id, enim incidunt, nesciunt veniam beatae voluptatum ut. Repellendus, quos ex quisquam itaque minus nobis eos voluptates obcaecati, asperiores perspiciatis nisi corrupti nemo!",
    },
    {
      q: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Facere, rerum.",
      a: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis hic id unde natus quidem inventore nam culpa! Fuga voluptatem sint repudiandae libero laudantium possimus pariatur optio. Voluptas ipsam velit atque libero deserunt amet nobis molestias temporibus delectus pariatur, odit dignissimos, est voluptatum! Iure nihil assumenda esse dignissimos ducimus provident, laudantium aliquid. Repellat assumenda eaque delectus dolores perspiciatis tempore, magni repellendus quod illum, quo voluptatibus vel nostrum adipisci quas perferendis? Nihil soluta ab amet non eligendi similique tempora id, enim incidunt, nesciunt veniam beatae voluptatum ut. Repellendus, quos ex quisquam itaque minus nobis eos voluptates obcaecati, asperiores perspiciatis nisi corrupti nemo!",
    },
    {
      q: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Facere, rerum.",
      a: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis hic id unde natus quidem inventore nam culpa! Fuga voluptatem sint repudiandae libero laudantium possimus pariatur optio. Voluptas ipsam velit atque libero deserunt amet nobis molestias temporibus delectus pariatur, odit dignissimos, est voluptatum! Iure nihil assumenda esse dignissimos ducimus provident, laudantium aliquid. Repellat assumenda eaque delectus dolores perspiciatis tempore, magni repellendus quod illum, quo voluptatibus vel nostrum adipisci quas perferendis? Nihil soluta ab amet non eligendi similique tempora id, enim incidunt, nesciunt veniam beatae voluptatum ut. Repellendus, quos ex quisquam itaque minus nobis eos voluptates obcaecati, asperiores perspiciatis nisi corrupti nemo!",
    },
  ];
  return (
    <div>
      <div className="">
        <Separator name="Frequently Question Asked" />
        <div className="p-[50px]  w-full">
          <div className="flex flex-col justify-center gap-[20px] items-end w-full h-full">
            {QuestionAnswer.map((item, i) => (
              <div key={i} className="flex flex-col gap-[10px] w-full">
                <div
                  onClick={() =>
                    setOpen(open === null || open !== i ? i : null)
                  }
                  className="flex gap-2 border-b-2 border-black w-full p-[10px] cursor-pointer"
                >
                  {open === i ? <ChevronUp /> : <ChevronDown />}
                  {item.q}
                </div>
                {open === i && (
                  <div className="flex gap-2 text-black50 w-full p-[10px]">
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="">
        <Separator name="Raise Your Doubt" />
        <div className="p-[50px]  w-full">
          <div className="flex justify-center gap-[50px] items-end w-full h-full">
            <div className="w-[400px] h-[500px] bg-black10">
            </div>
            <div className="w-full h-full p-[10px]">
              <Formik
                initialValues={{
                  userName: "",
                  userEmail: "",
                  userPhoneNumber: "",
                  userQuery: "",
                }}
                onSubmit={(values) => {
                  alert(values);
                }}
              >
                {() => (
                  <Form className="space-y-5">
                    <AddInput
                      label="Name"
                      type="text"
                      id="userName"
                      placeholder="Enter your full name..."
                    />
                    <AddInput
                      label="Email"
                      type="email"
                      id="userEmail"
                      placeholder="Enter your email address..."
                    />
                    <AddInput
                      label="Phone Number"
                      type="text"
                      id="userPhoneNumber"
                      placeholder="Enter your phone number..."
                    />
                    <AddInput
                      as="textarea"
                      label="Message"
                      id="userQuery"
                      className="h-[100px]"
                      placeholder="Describe your query here..."
                    />
                    <AddButton size="medium" name="Submit" className={"primary text-white"}/>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
