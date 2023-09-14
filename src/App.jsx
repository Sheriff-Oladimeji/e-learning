import {
  BrowserRouter as Router,
  Route,
  Routes
 
} from "react-router-dom";
import { useEffect } from "react";
import Home from "./pages/home/Home";
import Blog from "./pages/blog/Blog";
import Cart from "./pages/cart/Cart";
import Footer from "./components/footer/Footer";
import Checkout from "./pages/checkout/Checkout";
import Search from "./pages/search/Search";
import Template from "./pages/template/Template";
import Navbar from "./components/navbar/Navbar";
import Login from "./pages/auth/login/Login";
import SignUp from "./pages/auth/signup/SignUp";
import Contact from "./pages/contact/Contact";
import NotFound from "./pages/404/NotFound";
import Development from "./pages/courses/development/Development";
import Design from "./pages/courses/design/Design";
import Marketing from "./pages/courses/marketing/Marketing";
import Business from "./pages/courses/business/Business";
import { useLocation } from "react-router-dom";
import CourseTemDescription from "./components/Template Page/single";
import DevelopmentDesc from "./pages/courses/development/DevelopmentDesc";

function ScrollToTopOnRouteChange() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}


const App = () => {
 return (
   <Router>
     <section className="flex flex-col justify-between min-h-screen">
       <ScrollToTopOnRouteChange />
       <Navbar />
       <Routes>
         <Route index element={<Home />} />
        
         <Route path="blog" element={<Blog />} />
         <Route path="cart" element={<Cart />} />
         <Route path="checkout" element={<Checkout />} />
         <Route path="search" element={<Search />} />
         <Route path="courses/development" element={<Development />} />
         <Route path="courses/design" element={<Design />} />
         <Route path="courses/marketing" element={<Marketing />} />
         <Route path="courses/business" element={<Business />} />
         <Route path="auth/login" element={<Login />} />
         <Route path="auth/signup" element={<SignUp />} />
         <Route path="template" element={<Template />} />
         <Route
            path="/template/:courseId"
          element= {<CourseTemDescription />}
          />
         <Route
            path="/courses/development/:courseId"
          element= {<DevelopmentDesc />}
          />

         <Route path="contact" element={<Contact />} />
         <Route path="*" element={<NotFound />} />
       </Routes>
       <Footer />
     </section>
   </Router>
 );
};

export default App;
