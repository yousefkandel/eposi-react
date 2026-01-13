// src/Components/data/ProductArv.js

// images imports
import img1 from "../../assets/img/products/1-600x800.webp";
import img1Hover from "../../assets/img/products/1_1-600x800.webp";

import img2 from "../../assets/img/products/2-600x800.webp";
import img2Hover from "../../assets/img/products/2_1-600x800.webp";

import img3 from "../../assets/img/products/3-600x800.webp";
import img3Hover from "../../assets/img/products/3_1-600x800.webp";

import img4 from "../../assets/img/products/4-600x800.webp";
import img4Hover from "../../assets/img/products/4_1-600x800.webp";

const ProductArv = [
  {
    id: 1,
    title: "Cillum dolore lorem ipsum",
    category: "Decor",
    price: 100,
    oldPrice: 120,
    image: img1,
    imageHover: img1Hover,
    code: "CODE101",
    rewardPoints: 150,
    stock: "In Stock",
    description: "This stylish decoration piece enhances your living space.",
  },
  {
    id: 2,
    title: "Elegant vase",
    category: "Decor",
    price: 80,
    oldPrice: 95,
    image: img2,
    imageHover: img2Hover,
    code: "CODE102",
    rewardPoints: 120,
    stock: "In Stock",
    description: "A beautifully crafted vase with floral pattern.",
  },
  {
    id: 3,
    title: "Modern wall art",
    category: "Decor",
    price: 150,
    oldPrice: 180,
    image: img3,
    imageHover: img3Hover,
    code: "CODE103",
    rewardPoints: 200,
    stock: "Out of Stock",
    description: "Abstract wall art painting for modern interiors.",
  },
  {
    id: 4,
    title: "Handmade ceramic bowl",
    category: "Decor",
    price: 60,
    oldPrice: 75,
    image: img4,
    imageHover: img4Hover,
    code: "CODE104",
    rewardPoints: 100,
    stock: "In Stock",
    description: "High quality handmade ceramic bowl.",
  },
];

export default ProductArv;
