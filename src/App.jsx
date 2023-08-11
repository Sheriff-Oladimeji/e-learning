import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Blog from "./pages/blog/Blog";
import Cart from "./pages/cart/Cart";
import RootLayout from "./layouts/RootLayout";
import Checkout from "./pages/checkout/Checkout";
import Search from "./pages/search/Search";
import Template from "./pages/template/Template";
import Courses from "./pages/courses/Coures";
import Login from "./pages/auth/login/Login";
import SignUp from "./pages/auth/signup/SignUp";
import Contact from "./pages/contact/Contact";
import NotFound from "./pages/404/NotFound";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="blog" element={<Blog />} />
      <Route path="cart" element={<Cart />} />
      <Route path="checkout" element={<Checkout />} />
      <Route path="search" element={<Search />} />
      <Route path="courses" element={<Courses />} />
      <Route path="auth/login" element={<Login />} />
      <Route path="auth/signup" element={<SignUp />} />
      <Route path="template" element={<Template />} />
      <Route path="contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
