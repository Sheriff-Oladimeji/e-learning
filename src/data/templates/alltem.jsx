import Photoshop from "../../assets/photoshop.png";
import Business from "../../assets/Business.png";
import BusinessTwo from "../../assets/Business 2.png";
import Development from "../../assets/development.png";
import marketing from "../../assets/Design 1.png";
import photoshopTwo from "../../assets/Photography 2.png";

const allCourses = [
  {
    id: 1,
     avarta:  "https://images.unsplash.com/photo-1625504615927-c14f4f309b63?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGhlYWRzaG90fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    title: "Photoshop Master Course: From Beginner to Expert",
    description:"This  template provides a solid foundation for building engaging digital products. Explore wireframes, prototypes, and pre-designed UI kits to expedite the design process.",
    category: "Popular",
  
    initialPrice: "N 34,000",
    tutor: "Robert Fox",
    rating: "(4.2)",
    price: 27000,
    keyfeature: "Pre-designed UI Elements: Access a library of ready-to-use UI elements such as buttons, forms, cards, and menus, allowing you to save time and streamline your design process. ",
    discount: "20% Off",
    image: Photoshop,
  },
  {
    id: 2,
     avarta:  "https://images.unsplash.com/photo-1625504615927-c14f4f309b63?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGhlYWRzaG90fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    title: "How to Budget and Forecast Your Business",
    description:"This  template provides a solid foundation for building engaging digital products. Explore wireframes, prototypes, and pre-designed UI kits to expedite the design process.",
    category: "New",
  
    initialPrice: false,
    tutor: "Wade Warren",
    rating: "(4,760)",
    price: 20000,
    keyfeature: "Pre-designed UI Elements: Access a library of ready-to-use UI elements such as buttons, forms, cards, and menus, allowing you to save time and streamline your design process.",
    discount: false,
    image: Business,
  },
  {
    id: 3,
     avarta:  "https://images.unsplash.com/photo-1625504615927-c14f4f309b63?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGhlYWRzaG90fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    title: "How to Budget and Forecast Your Business",
    description:"This  template provides a solid foundation for building engaging digital products. Explore wireframes, prototypes, and pre-designed UI kits to expedite the design process.",
    category: "Price",
  
    initialPrice: false,
    tutor: "Wade Warren",
    rating: "(4,760)",
    price: 20000,
    keyfeature: "hello ",
    discount: false,
    image: BusinessTwo,
  },
  {
    id: 4,
     avarta:  "https://images.unsplash.com/photo-1625504615927-c14f4f309b63?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGhlYWRzaG90fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    title: "Photoshop Master Course: From Beginner to Expert",
    description:"This  template provides a solid foundation for building engaging digital products. Explore wireframes, prototypes, and pre-designed UI kits to expedite the design process.",
    category: "New",
  
    initialPrice: "N 34,000",
    tutor: "Robert Fox",
    rating: "(4.2)",
    price: 27000,
    keyfeature: "hello ",
    discount: "20% Off",
    image: photoshopTwo,
  },
  {
    id: 5,
     avarta:  "https://images.unsplash.com/photo-1625504615927-c14f4f309b63?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGhlYWRzaG90fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    title: "How to Budget and Forecast Your Business",
    description:"This  template provides a solid foundation for building engaging digital products. Explore wireframes, prototypes, and pre-designed UI kits to expedite the design process.",
    category: "Popular",
  
    initialPrice: false,
    tutor: "Wade Warren",
    rating: "(4,760)",
    price: 20000,
    keyfeature: "hello ",
    discount: false,
    image: marketing,
  },
  {
    id: 6,
     avarta:  "https://images.unsplash.com/photo-1625504615927-c14f4f309b63?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGhlYWRzaG90fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    title: "Web Development Masterclass & Certifcation",
    description:"This  template provides a solid foundation for building engaging digital products. Explore wireframes, prototypes, and pre-designed UI kits to expedite the design process.",
    category: "New",
  
    initialPrice: "N 30,000",
    tutor: "Albert Flores",
    rating: "(4.8)",
    price: 15000,
    keyfeature: "hello ",
    discount: "50% Off",
    image: Development,
  },
];

const testmonal = [

  {
    "id": 1,
    "name": "John Smith",
    "testimony": "I've tried various online learning platforms, but this one stands out from the rest. The quality of content, the interactive learning experience, and the valuable resources provided have surpassed my expectations.",
    "image": "https://images.unsplash.com/photo-1625504615927-c14f4f309b63?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGhlYWRzaG90fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
  },
  {
    "id": 2,
    "name": "Emily Johnson",
    "testimony": "I can confidently say that this platform has been a game-changer for me. The flexibility to learn at my own pace, the comprehensive course offerings, and the excellent support from the platform's team have made my learning journey a breeze.",
    "image": "https://images.unsplash.com/photo-1611432579699-484f7990b127?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGVhZHNob3R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
  },
  {
    "id": 3,
    "name": "Michael Williams",
    "testimony": "I can confidently say that this platform has been a game-changer for me. The flexibility to learn at my own pace, the comprehensive course offerings, and the excellent support from the platform's team have made my learning journey a breeze..",
    "image": "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGVhZHNob3R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
  },
  {
    "id": 4,
    "name": "Sophia Brown",
    "testimony": "I've tried various online learning platforms, but this one stands out from the rest. The quality of content, the interactive learning experience, and the valuable resources provided have surpassed my expectations..",
    "image": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aGVhZHNob3R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
  },
  {
    "id": 5,
    "name": "William Davis",
    "testimony": "I've tried various online learning platforms, but this one stands out from the rest. The quality of content, the interactive learning experience, and the valuable resources provided have surpassed my expectations.",
    "image": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhlYWRzaG90fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
  },
  {
    "id": 6,
    "name": "Olivia Miller",
    "testimony": "I've tried various online learning platforms, but this one stands out from the rest. The quality of content, the interactive learning experience, and the valuable resources provided have surpassed my expectations.",
    "image": "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGhlYWRzaG90fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
  }



];
export  { allCourses , testmonal}
