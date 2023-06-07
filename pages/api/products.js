const products = [
  // {id:1, desc}
  { id: 1, name: "Product 1", description: "Description 1", price: 10.99 },
  { id: 2, name: "Product 2", description: "Description 2", price: 19.99 },
  { id: 3, name: "Product 3", description: "Description 3", price: 14.99 },
  { id: 4, name: "Product 3", description: "Description 3", price: 14.99 },
  { id: 5, name: "Product 3", description: "Description 3", price: 14.99 },
  { id: 6, name: "Product 3", description: "Description 3", price: 14.99 },
];

export default function handler(req, res) {
  res.status(200).json(products);
}
