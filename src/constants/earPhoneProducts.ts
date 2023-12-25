export interface earphoneProductProps {
  id: number;
  name: string;
  brand: string;
  category: string;
  subCategory: string;
  color: string;
  microphone: boolean;
  features: string[];
  price: string;
  image: string;
  connectivity?: string;
  driverSize?: string;
  frequencyResponse?: string;
  impedance?: string;
  foldable?: boolean;
  remoteControl?: boolean;
  cableLength?: string;
  weight?: string;
  wireless?: boolean;
  bluetoothVersion?: string;
  batteryLife?: string;
  waterResistant?: boolean;
  noiseCancellation?: boolean;
  touchControls?: boolean;
  chargingType?: string;
}

export const dummyEarPhoneProducts: earphoneProductProps[] = [
  {
    id: 0,
    name: "JBL Wave Buds TWS Bluetooth Ear Buds Ear Phone",
    brand: "JBL",
    category: "ear-phones",
    subCategory: "ear-buds",
    color: "Black",
    microphone: true,
    features: [
      "Wireless Bluetooth Technology",
      "Water-Resistant Design",
      "Touch Controls",
      "Built-in Microphone",
      "USB Type-C Charging",
    ],
    price: "Your specified price",
    image:
      "https://de.jbl.com/dw/image/v2/BFND_PRD/on/demandware.static/-/Sites-masterCatalog_Harman/default/dwdc2606b3/1.JBL_Wave_Vibe_%20Buds_Product%20Image_Hero_Black.png?sw=680&sh=680",
    wireless: true,
    bluetoothVersion: "5.0",
    batteryLife:
      "Up to 6 hours (earbuds) / Up to 20 hours (with charging case)",
    waterResistant: true,
    noiseCancellation: false,
    touchControls: true,
    chargingType: "USB Type-C",
  },
  {
    id: 1,
    name: "JBL Tune 500 Wired On-Ear Headphones",
    brand: "JBL",
    category: "ear-phones",
    subCategory: "head-phones",
    color: "Black",
    connectivity: "Wired",
    driverSize: "32mm",
    frequencyResponse: "20Hz - 20kHz",
    impedance: "32 ohms",
    foldable: true,
    microphone: true,
    remoteControl: true,
    cableLength: "1.2 meters",
    weight: "140 grams",
    features: [
      "Powerful JBL Pure Bass Sound",
      "Lightweight and Comfortable",
      "Foldable Design for Portability",
      "In-line Microphone and Remote Control",
      "1.2m Tangle-Free Flat Cable",
    ],
    price: "Your specified price",
    image: "https://m.media-amazon.com/images/I/51dQZRvwajL._AC_SL1500_.jpg",
  },
];
