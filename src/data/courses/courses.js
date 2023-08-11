import Photoshop from "../../assets/photoshop.png";
import Business from "../../assets/Business.png";
import BusinessTwo from "../../assets/Business 2.png";
import Development from "../../assets/development.png";
import marketing from "../../assets/Design 1.png";
import photoshopTwo from "../../assets/Photography 2.png";

const allCourses = [
  {
    id: 1,
    title: "Photoshop Master Course: From Beginner to Expert",
    category: "Design",
    badge: "New",
    initialPrice: "N 34,000",
    tutor: "Robert Fox",
    rating: "(4.2)",
    price: "N 27,000",
    discount: "20% Off",
    image: Photoshop,
  },
  {
    id: 2,
    title: "How to Budget and Forecast Your Business",
    category: "Business",
    badge: "Bestseller",
    initialPrice: false,
    tutor: "Wade Warren",
    rating: "(4,760)",
    price: "N 20,000",
    discount: false,
    image: Business,
  },
  {
    id: 3,
    title: "How to Budget and Forecast Your Business",
    category: "Business",
    badge: "Bestseller",
    initialPrice: false,
    tutor: "Wade Warren",
    rating: "(4,760)",
    price: "N 20,000",
    discount: false,
    image: BusinessTwo,
  },
  {
    id: 4,
    title: "Photoshop Master Course: From Beginner to Expert",
    category: "Design",
    badge: "New",
    initialPrice: "N 34,000",
    tutor: "Robert Fox",
    rating: "(4.2)",
    price: "N 27,000",
    discount: "20% Off",
    image: photoshopTwo,
  },
  {
    id: 5,
    title: "How to Budget and Forecast Your Business",
    category: "Marketing",
    badge: "Bestseller",
    initialPrice: false,
    tutor: "Wade Warren",
    rating: "(4,760)",
    price: "N 20,000",
    discount: false,
    image: marketing,
  },
  {
    id: 6,
    title: "Web Development Masterclass & Certifcation",
    category: "Development",
    badge: "Bestseller",
    initialPrice: "N 30,000",
    tutor: "Albert Flores",
    rating: "(4.8)",
    price: "N 15,000",
    discount: "50% Off",
    image: Development,
  },
];

export default allCourses;
