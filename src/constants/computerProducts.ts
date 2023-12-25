export interface computerProductProps {
  id: number;
  name: string;
  brand: string;
  specialBrandName: string;
  category: string;
  subCategory: string;
  color: string;
  processor: string;
  gpu: string;
  ram: string;
  storage: string;
  displaySize: string;
  operatingSystem: string;
  features: string[];
  price: string;
  image: string;
}

const computers: computerProductProps[] = [
  {
    id: 0,
    name: "MacBook Pro 14-inch M3 8CPU 10GPU 8GB 512GB",
    brand: "apple",
    specialBrandName: "Macbook",
    category: "computers",
    subCategory: "laptops",
    color: "Silver",
    processor: "M3 8CPU",
    gpu: "10GPU",
    ram: "8GB",
    storage: "512GB",
    displaySize: "14 inches",
    operatingSystem: "macOS",
    features: [
      "Retina Display",
      "Magic Keyboard",
      "Touch Bar",
      "Thunderbolt Ports",
      "Long Battery Life",
    ],
    price: "Your specified price",
    image:
      "https://www.pt.com.tr/uploads/products/big/MuCbFqauVI7hAxvXLm4Je88qVKnITqQ0S6WY2tvc.jpg",
  },
  {
    id: 1,
    name: "Samsung Galaxy Tab S6 Lite 128GB",
    brand: "samsung",
    specialBrandName: "Galaxy Tab",
    category: "computers",
    subCategory: "tablets",
    color: "Sky Blue",
    processor: "Exynos",
    gpu: "Mali-G72 MP3",
    ram: "4GB",
    storage: "128GB",
    displaySize: "10.4 inches",
    operatingSystem: "Android",
    features: [
      "S Pen Included",
      "Dolby Atmos Sound",
      "Octa-core Processor",
      "128GB Storage",
      "10.4-inch Display",
    ],
    price: "Your specified price",
    image: "https://m.media-amazon.com/images/I/61Pp0YEF+XL._AC_SL1500_.jpg",
  },
];
