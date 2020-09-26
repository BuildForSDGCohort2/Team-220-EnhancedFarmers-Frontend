const data = [
  { id: 1, category: "aqua", price: 10000, quantity: 1000, image: "1.jpg" },
  {
    id: 2,
    category: "vegitable",
    price: 10000,
    quantity: 10000,
    image: "2.jpg",
  },
  {
    id: 3,
    category: "vegitable",
    price: 10000,
    quantity: 10000,
    image: "3.jpg",
  },
  { id: 4, category: "aqua", price: 10000, quantity: 10000, image: "4.jpg" },
  { id: 5, category: "serial", price: 10000, quantity: 10000, image: "5.jpg" },
  { id: 6, category: "aqua", price: 10000, quantity: 10000, image: "6.jpg" },
  { id: 7, category: "friut", price: 10000, quantity: 10000, image: "7.jpg" },
  { id: 8, category: "aqua", price: 10000, quantity: 10000, image: "8.jpg" },
  {
    id: 9,
    category: "vegitable",
    price: 10000,
    quantity: 10000,
    image: "9.jpeg",
  },
  { id: 10, category: "aqua", price: 10000, quantity: 10000, image: "10.jpeg" },
  { id: 11, category: "aqua", price: 10000, quantity: 10000, image: "11.jpeg" },
  { id: 12, category: "aqua", price: 10000, quantity: 10000, image: "12.jpeg" },
  { id: 13, category: "aqua", price: 10000, quantity: 10000, image: "13.jpeg" },
  { id: 14, category: "aqua", price: 10000, quantity: 10000, image: "14.jpeg" },
  { id: 15, category: "aqua", price: 10000, quantity: 10000, image: "15.jpeg" },
  { id: 16, category: "aqua", price: 10000, quantity: 10000, image: "16.jpeg" },
  { id: 17, category: "aqua", price: 10000, quantity: 10000, image: "17.jpeg" },
  { id: 18, category: "aqua", price: 10000, quantity: 10000, image: "18.jpeg" },
  { id: 19, category: "aqua", price: 10000, quantity: 10000, image: "19.jpeg" },
  { id: 20, category: "aqua", price: 10000, quantity: 10000, image: "20.jpeg" },
  { id: 21, category: "aqua", price: 10000, quantity: 10000, image: "21.jpeg" },
  { id: 22, category: "aqua", price: 10000, quantity: 10000, image: "22.jpg" },
  { id: 23, category: "aqua", price: 10000, quantity: 10000, image: "23.jpg" },
  { id: 24, category: "aqua", price: 10000, quantity: 10000, image: "24.jpg" },
];

function getAllProducts() {
  if (data.length === 0) {
    return "No car ads yet";
  }
  return data;
}

export default {
  getAllProducts,
};
