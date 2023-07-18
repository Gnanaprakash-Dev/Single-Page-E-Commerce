import women1 from "../assets/images/header/1.png";
import women2 from "../assets/images/header/2.png";
import women3 from "../assets/images/header/3.png";
import women4 from "../assets/images/header/4.jpg";
import women5 from "../assets/images/header/5.png";
import popular1 from "../assets/images/popular_product/1.jpg";
import popular2 from "../assets/images/popular_product/2.jpg";
import popular3 from "../assets/images/popular_product/3.jpg";
import popular4 from "../assets/images/popular_product/1.png";
import category1 from "../assets/images/product_category/1.png";
import category2 from "../assets/images/product_category/2.png";
import category3 from "../assets/images/product_category/3.png";
import category4 from "../assets/images/product_category/4.png";
import category5 from "../assets/images/product_category/5.png";


const headerMenu = [
  {
    name: "Men",
    value: [],
  },
  {
    name: "Women",
    value: [
      {
        name: "Product 1",
        value: women1,
      },
      {
        name: "Product 2",
        value: women2,
      },
      {
        name: "Product 3",
        value: women3,
      },
      {
        name: "Product 4",
        value: women4,
      },
    ],
  },
  {
    name: "Kids",
    value: [
      {
        value: [
          {
            name: "Kids fashion 1",
            value: [
              {
                name: "Product List",
              },
              {
                name: "Product List",
              },
              {
                name: "Product List",
              },
              {
                name: "Product List",
              },
            ],
          },
          {
            name: "Kids fashion 2",
            value: [
              {
                name: "Product List",
              },
              {
                name: "Product List",
              },
              {
                name: "Product List",
              },
              {
                name: "Product List",
              },
            ],
          },
        ],
      },
      {
        value: [
          {
            name: "Kids fashion 3",
            value: [
              {
                name: "Product List",
              },
              {
                name: "Product List",
              },
              {
                name: "Product List",
              },
              {
                name: "Product List",
              },
            ],
          },
          {
            name: "Kids fashion 4",
            value: [
              {
                name: "Product List",
              },
              {
                name: "Product List",
              },
              {
                name: "Product List",
              },
              {
                name: "Product List",
              },
            ],
          },
        ],
      },
      {
        value: [
          {
            name: "Kids fashion 5",
            value: [
              {
                name: "Product List",
              },
              {
                name: "Product List",
              },
              {
                name: "Product List",
              },
              {
                name: "Product List",
              },
              {
                name: "Product List",
              },
              {
                name: "Product List",
              },
              {
                name: "Product List",
              },
              {
                name: "Product List",
              },
              {
                name: "Product List",
              },
            ],
          },
        ],
      },
      {
        value: 0,
        name: women5,
      },
    ],
  },
  {
    name: "Couple",
    value: [
      {
        name: "Product 1",
      },
      {
        name: "Product 2",
      },
      {
        name: "Product 3",
      },
      {
        name: "Product 4",
      },
    ],
  },
  {
    name: "New Arrivals",
    value: [],
  },
];

const shippingReturns = [
  {
    title: "Free shipping",
    content: "Standard shipping",
    icon: "bi-box-seam",
  },
  {
    title: "Special discounts",
    content: "Guaranteed saving",
    icon: "bi-patch-check",
  },
  {
    title: "Buyers protection",
    content: "Secure payment",
    icon: "bi-wallet",
  },
  {
    title: "Customer service",
    content: "Give us feedback",
    icon: "bi-chat-left-text",
  },
];

const popularProduct = [
  {
    name: "Simple Stripe",
    price: "800",
    discountPrice: "1000",
    image: popular1,
  },
  {
    name: "Basic Navy Thick Hemp",
    price: "900",
    discountPrice: "1000",
    image: popular2,
  },
  {
    name: "Twirl Tutu Dress",
    price: "1000",
    discountPrice: "1900",
    image: popular3,
  },
  {
    name: "Casual Shirt",
    price: "500",
    discountPrice: "1200",
    image: popular4,
  },
];

const productCategory = [
  {
    name: "Men",
    count: 10,
    image: category1
  },
  {
    name: "Women",
    count: 15,
    image: category2
  },
  {
    name: "Kids",
    count: 7,
    image: category3
  },
  {
    name: "Couple",
    count: 30,
    image: category4
  },
  {
    name: "Family",
    count: 20,
    image: category5
  },
];

export { headerMenu, shippingReturns, popularProduct , productCategory};
