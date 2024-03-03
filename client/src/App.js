import { ChatBot, Footer, Navbar } from "./components";
import PageRouter from "./routers/PageRouter";

export default function App() {
  return (
    <div className="flex flex-col gap-[100px]">
      <Navbar />
      <div className="mx-auto px-[30px] space-y-[50px] w-[1440px] min-h-screen text-p">
        <div className="relative w-full h-full z-10">
          <ChatBot />
        </div>
        <PageRouter />
      </div>
      <Footer />
    </div>
  );
}
