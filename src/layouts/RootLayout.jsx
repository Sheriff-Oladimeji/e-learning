import { Outlet } from "react-router-dom"
import Footer from "../components/footer/Footer"
import Navbar from "../components/navbar/Navbar"
const RootLayout = () => {
  return (
    <section className="w-full flex flex-col justify-between min-h-screen font-poppins">
      <Navbar />
      <Outlet />
      <Footer />
    </section>
  );
}

export default RootLayout