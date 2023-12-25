export interface phoneProductProps {
  id: number;
  name: string;
  brand: string;
  category: string;
  subCategory: string;
  color: string;
  storageCapacity: string;
  displaySize: string;
  resolution: string;
  processor: string;
  image: string;
  ram: string;
  camera: {
    mainCamera: string;
    frontCamera: string;
  };
  battery: string;
  operatingSystem: string;
  features: string[];
  price: string;
}

export const dummyPhoneProducts: phoneProductProps[] = [
  {
    id: 0,
    name: "Samsung Galaxy A54 256GB Smart Phone",
    brand: "samsung",
    category: "phones",
    subCategory: "android-phones",
    color: "White",
    storageCapacity: "256GB",
    displaySize: "6.5 inches",
    resolution: "1080 x 2400 pixels",
    processor: "Octa-core",
    image:
      "https://cdn.idealo.com/folder/Product/202429/5/202429519/s1_produktbild_gross/samsung-galaxy-a54-256gb-awesome-graphite.jpg",
    ram: "6GB",
    camera: {
      mainCamera: "Quad 64 MP, 12 MP, 5 MP, 5 MP",
      frontCamera: "32 MP",
    },
    battery: "4500 mAh",
    operatingSystem: "Android",
    features: [
      "Fingerprint sensor",
      "Face recognition",
      "Water and dust resistant",
    ],
    price: "Your specified price",
  },
  {
    id: 1,
    name: "Apple iPhone 11 128GB",
    brand: "apple",
    category: "phones",
    subCategory: "ios-phones",
    color: "Black",
    storageCapacity: "128GB",
    displaySize: "6.1 inches",
    resolution: "828 x 1792 pixels",
    processor: "Hexa-core",
    image:
      "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MP_108019169?x=480&y=334&format=jpg&quality=80&sp=yes&strip=yes&trim&ex=480&ey=334&align=center&resizesource&unsharp=1.5x1+0.7+0.02&cox=0&coy=0&cdx=480&cdy=334",
    ram: "4GB",
    camera: {
      mainCamera: "Dual 12 MP, 12 MP",
      frontCamera: "12 MP",
    },
    battery: "3110 mAh",
    operatingSystem: "iOS",
    features: [
      "Face ID",
      "Water and dust resistant (IP68)",
      "Wireless charging",
    ],
    price: "Your specified price",
  },
];
