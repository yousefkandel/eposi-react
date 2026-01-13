// src/data/productsData.js

// Import images
import img5 from "../../assets/img/products/5-100x133.webp";
import img6 from "../../assets/img/products/6-100x133.webp";
import img7 from "../../assets/img/products/7-100x133.webp";
import img8 from "../../assets/img/products/8-100x133.webp";
import img9 from "../../assets/img/products/9-100x133.webp";
import img10 from "../../assets/img/products/10-100x133.webp";
import img11 from "../../assets/img/products/11-100x133.webp";
import img12 from "../../assets/img/products/12-100x133.webp";
import img13 from "../../assets/img/products/13-100x133.webp";

export const widgetsData = [
  {
    id: 1,
    title: "Latest Arrivals",
    products: [
      { id: 5, category: "Decor", title: "Cillum dolore lorem ipsum decoration item", discountedPrice: "$80.00", mainPrice: "$100.00", rating: 4, img: img5 },
      { id: 6, category: "Decor", title: "lorem ipsum cillium dolore decoration item", discountedPrice: "$20.00", mainPrice: "$40.00", rating: 4, img: img6 },
      { id: 7, category: "Furniture", title: "lorem ipsum decoration item", discountedPrice: "$40.00", mainPrice: "$60.00", rating: 3, img: img7 },
    ],
  },
  {
    id: 2,
    title: "Special Products",
    products: [
      { id: 8, category: "Decor", title: "Cillum dolore lorem ipsum decoration item", discountedPrice: null, mainPrice: "$120.00", rating: 4, img: img8 },
      { id: 9, category: "Decor", title: "Cillum dolore lorem ipsum decoration item", discountedPrice: "$80.00", mainPrice: "$100.00", rating: 4, img: img9 },
      { id: 10, category: "Furniture", title: "Cillum lorem dolore ipsum furniture item", discountedPrice: "$80.00", mainPrice: "$100.00", rating: 3, img: img10 },
    ],
  },
  {
    id: 3,
    title: "Most View Products",
    products: [
      { id: 11, category: "Decor", title: "lorem ipsum decoration item", discountedPrice: "$180.00", mainPrice: "$200.00", rating: 4, img: img11 },
      { id: 12, category: "Decor", title: "Cillum dolore lorem ipsum decoration item", discountedPrice: "$50.00", mainPrice: "$80.00", rating: 4, img: img12 },
      { id: 13, category: "Furniture", title: "Cillum dolore item", discountedPrice: "$80.00", mainPrice: "$100.00", rating: 3, img: img13 },
    ],
  },
];
