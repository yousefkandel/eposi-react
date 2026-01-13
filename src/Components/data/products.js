// images pool
import img1 from "../../assets/img/products/1-600x800.webp";
import img1Hover from "../../assets/img/products/12-100x133.webp";

import img2 from "../../assets/img/products/2-600x800.webp";
import img2Hover from "../../assets/img/products/2_1-600x800.webp";

import img3 from "../../assets/img/products/3-600x800.webp";
import img3Hover from "../../assets/img/products/3_1-600x800.webp";

import img4 from "../../assets/img/products/4-600x800.webp";
import img4Hover from "../../assets/img/products/4_1-600x800.webp";

import img5 from "../../assets/img/products/5-600x800.webp";
import img5Hover from "../../assets/img/products/5_1-600x800.webp";

import img6 from "../../assets/img/products/6-600x800.webp";
import img6Hover from "../../assets/img/products/6_1-600x800.webp";

// 👇 images object (pool)
const images = {
  1: { main: img1, hover: img1Hover },
  2: { main: img2, hover: img2Hover },
  3: { main: img3, hover: img3Hover },
  4: { main: img4, hover: img4Hover },
  5: { main: img5, hover: img5Hover },
  6: { main: img6, hover: img6Hover },
};

// 👇 products array
const products = [
  {
    id: 1,
    title: "Cillum dolore lorem ipsum decoration item",
    category: "Decor",
    price: 100,
    oldPrice: 120,
    image: images[1].main,
    imageHover: images[1].hover,
    code: "CODE101",
    rewardPoints: 150,
    stock: "In Stock",
    description:
      "This stylish decoration piece enhances your living space with elegance and modern design.",
  },
  {
    id: 2,
    title: "Elegant vase with floral pattern",
    category: "Decor",
    price: 80,
    oldPrice: 95,
    image: images[2].main,
    imageHover: images[2].hover,
    code: "CODE102",
    rewardPoints: 120,
    stock: "In Stock",
    description:
      "A beautifully crafted vase featuring delicate floral patterns.",
  },
  {
    id: 3,
    title: "Modern wall art painting",
    category: "Decor",
    price: 150,
    oldPrice: 180,
    image: images[3].main,
    imageHover: images[3].hover,
    code: "CODE103",
    rewardPoints: 200,
    stock: "Out of Stock",
    description:
      "Abstract wall art painting that brings life and color to your walls.",
  },
  {
    id: 4,
    title: "Handmade ceramic bowl",
    category: "Decor",
    price: 60,
    oldPrice: 75,
    image: images[4].main,
    imageHover: images[4].hover,
    code: "CODE104",
    rewardPoints: 100,
    stock: "In Stock",
    description:
      "Crafted from high-quality ceramic, ideal for decorative and functional use.",
  },
  {
    id: 5,
    title: "Luxury scented candle",
    category: "Decor",
    price: 40,
    oldPrice: 55,
    image: images[5].main,
    imageHover: images[5].hover,
    code: "CODE105",
    rewardPoints: 80,
    stock: "In Stock",
    description:
      "Premium scented candle that fills your room with a relaxing aroma.",
  },
  {
    id: 6,
    title: "Vintage table lamp",
    category: "Decor",
    price: 200,
    oldPrice: 250,
    image: images[6].main,
    imageHover: images[6].hover,
    code: "CODE106",
    rewardPoints: 300,
    stock: "Limited Stock",
    description:
      "A beautifully designed vintage lamp that enhances the ambiance of any room.",
  },
];

export default products;
