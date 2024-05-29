import { Outlet } from "react-router-dom";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
const RootLayout = () => {
  return (
    <section className="flex flex-col justify-between w-full min-h-screen">
      <Navbar />
      <Outlet />
      <Footer />
    </section>
  );
};

export default RootLayout;
