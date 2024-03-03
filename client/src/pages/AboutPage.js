import { Facebook, Instagram, Linkedin, Truck, Twitter } from "lucide-react";
import { Separator } from "../components";

export default function AboutPage() {
  return (
    <div className="flex flex-col gap-10">
      <div className="w-[1100px] h-[500px] m-[50px] mx-auto grid grid-cols-2 gap-[20px]">
        <div className="bg-black10 w-full h-full"></div>
        <div className="flex flex-col items-center justify-center px-10">
          <div className="text-center">
            Welcome to the <b>Indian Online Shopping Mall</b>, your one-stop
            destination for a truly immersive and delightful online shopping
            experience. Embracing the vibrant tapestry of Indian culture, our
            platform offers a diverse array of products, from traditional
            handcrafted artifacts to modern fashion trends. Navigate through our
            virtual aisles with ease, enjoying the convenience of secure
            transactions, swift deliveries, and a user-friendly interface. At
            Indian Online Shopping Mall, we take pride in showcasing the rich
            heritage of India through a curated selection of goods, providing a
            platform that seamlessly blends tradition with contemporary
            convenience. Join us on this exciting journey of discovery and
            indulge in the charm of Indian craftsmanship and innovation right at
            your fingertips.
          </div>
          <span className="text-h5 font-bold">Happy shopping!</span>
        </div>
      </div>
      <div className="">
        <Separator name="Our Services" />
        <div className="p-[50px] flex justify-between ">
          <div className="w-[400px] flex flex-col items-center gap-10 rounded-xl p-[10px]">
            <div className="shadow-[0px_0px_0px_10px_rgba(0,0,0,0.1)] h-[120px] w-[120px] rounded-full primary flex flex-col items-center justify-center">
              <Truck color="white" size={60} />
            </div>
            <h5 className="text-h5 font-bold gradient-text">
              Fast and Reliable Shipping
            </h5>
            <p className="text-center">
              Experience prompt and reliable delivery with our shipping
              services. We work with trusted carriers to ensure your orders
              reach you in the shortest time possible. Track your shipments in
              real-time for added convenience.
            </p>
          </div>
          <div className="w-[400px] flex flex-col items-center gap-10 rounded-xl p-[10px]">
            <div className="shadow-[0px_0px_0px_10px_rgba(0,0,0,0.1)] h-[120px] w-[120px] rounded-full primary flex flex-col items-center justify-center">
              <Truck color="white" size={60} />
            </div>
            <h5 className="text-h5 font-bold gradient-text">
              24/7 Customer Support
            </h5>
            <p className="text-center">
              Have a question or need assistance? Our dedicated customer support
              team is available around the clock to provide you with timely and
              helpful responses. Your satisfaction is our top priority.
            </p>
          </div>
          <div className="w-[400px] flex flex-col items-center gap-10 rounded-xl p-[10px]">
            <div className="shadow-[0px_0px_0px_10px_rgba(0,0,0,0.1)] h-[120px] w-[120px] rounded-full primary flex flex-col items-center justify-center">
              <Truck color="white" size={60} />
            </div>
            <h5 className="text-h5 font-bold gradient-text">
              Easy Returns and Exchanges
            </h5>
            <p className="text-center">
              We understand that sometimes items may not meet your expectations.
              Our hassle-free return and exchange process allows you to shop
              with confidence, knowing that your satisfaction is our priority.
            </p>
          </div>
        </div>
      </div>
      <div className="">
        <Separator name="Develope By ~" />
        <div className="w-[1100px] h-[500px] m-[50px] mx-auto grid grid-cols-2 gap-[20px]">
          <div className="bg-black10 w-full h-full"></div>
          <div className="flex flex-col justify-center justify- gap-[20px]">
            <h3 className="text-h3">Shailendra Trivedi</h3>
            <h5 className="text-h5 text-black50">Full Stack Engineer</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur. Blandit accumsan
              scelerisque vestibulum mauris rhoncus purus. Nulla at at pulvinar
              malesuada habitant tincidunt. Tincidunt euismod mauris lacus
              habitant nibh auctor rutrum facilisi. Nec tincidunt enim est mi ut
              et urna elementum. Ac vel est platea aenean diam leo et
              ullamcorper diam. Mi bibendum quis tempor amet. Velit sapien arcu
              suspendisse felis adipiscing commodo diam non sed. <br />
              <br /> Urna urna tincidunt pellentesque ultrices vestibulum ipsum
              in lobortis. Scelerisque magnis penatibus sit mollis quam donec
              aliquet ac. Sem vestibulum ut libero praesent blandit odio purus
              pharetra praesent. Morbi sed felis ut ut id.{" "}
            </p>
            <div className="flex gap-2">
              <div className="hover:bg-black10 rounded-full h-10 w-10 flex justify-center items-center cursor-pointer">
                <Facebook className="cursor-pointer" />
              </div>
              <div className="hover:bg-black10 rounded-full h-10 w-10 flex justify-center items-center cursor-pointer">
                <Instagram className="cursor-pointer" />
              </div>
              <div className="hover:bg-black10 rounded-full h-10 w-10 flex justify-center items-center cursor-pointer">
                <Twitter className="cursor-pointer" />
              </div>
              <div className="hover:bg-black10 rounded-full h-10 w-10 flex justify-center items-center cursor-pointer">
                <Linkedin className="cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
