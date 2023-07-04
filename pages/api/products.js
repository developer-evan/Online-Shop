const products = [
  { 
    id: 1, 
    name: "Black shoe", 
    description: "Black Shoes fit fit", 
    price: 10.99,
    image: "/1.jpg" 
  },
  { 
    id: 2, 
    name: "Product 2", 
    description: "Description 2", 
    price: 29.99,
    image: "/4.jpg" // Path to the image file for Product 2
  },
  { 
    id: 3, 
    name: "Product 2", 
    description: "Description 2", 
    price: 19.99,
    image: "/1 (2).jpg" // Path to the image file for Product 2
  },
  { 
    id: 4, 
    name: "Product 2", 
    description: "Description 2", 
    price: 34.99,
    image: "/2.jpg" // Path to the image file for Product 2
  },
  { 
    id: 4, 
    name: "Product 2", 
    description: "Description 2", 
    price: 9.99,
    image: "/3.jpg" // Path to the image file for Product 2
  },
  // { 
  //   id: 4, 
  //   name: "Product 2", 
  //   description: "Description 2", 
  //   price: 19.99,
  //   image: "/4.jpeg" // Path to the image file for Product 2
  // },
  { 
    id: 4, 
    name: "Product 2", 
    description: "Description 2", 
    price: 69.99,
    image: "/5.jpeg" // Path to the image file for Product 2
  },
  

  { 
    id: 4, 
    name: "Product 2", 
    description: "Description 2", 
    price: 19.99,
    image: "/6.jpg" // Path to the image file for Product 2
  },
  { 
    id: 4, 
    name: "Product 2", 
    description: "Description 2", 
    price: 19.99,
    image: "/7.jpg" // Path to the image file for Product 2
  },
  // { 
  //   id: 4, 
  //   name: "Product 2", 
  //   description: "Description 2", 
  //   price: 19.99,
  //   image: "/8.jpeg" // Path to the image file for Product 2
  // },
  // Add more products with their respective image paths
  // ...
];

export default function handler(req, res) {
  res.status(200).json(products);
}
