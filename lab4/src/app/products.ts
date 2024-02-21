export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  img: string;
  link: string;
  rating: number;
}

export const products = [
  {
    id: 1,
    img: "https://resources.cdn-kaspi.kz/img/m/p/h95/h0e/63961934823454.jpg?format=gallery-medium",
    name: 'Apple 20W USB-C Power Adapter ',
    price: 3802,
    description: 'Type: Network charger, 1 connected device, Fast charging: Yes, Connection connector: USB Type-C',
    link:"https://kaspi.kz/shop/p/apple-20w-usb-c-power-adapter-belyi-100984093/?c=750000000",
    rating:4.5,
  },
  {
    id: 2,
    img: "https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=gallery-medium",
    name: 'iPhone 13 128Gb Midnight',
    price: 294426,
    description: 'NFC Technology: Yes, Color: Black, Screen Type: OLED, Super Retina XDR, Diagonal: 6.1 inches, RAM Size: 4 GB, Processor: 6-core Apple A15 Bionic, Internal Storage: 128.0 GB, Battery Capacity: 3095.0 mAh.',
    link:"https://kaspi.kz/shop/p/apple-iphone-13-128gb-midnight-chernyi-102298404/?c=750000000",
    rating:5,
  },
  {
    id: 3,
    img: "https://resources.cdn-kaspi.kz/img/m/p/hc1/h65/83559848181790.png?format=gallery-medium",
    name: 'iPhone 15 Pro Max 256Gb ',
    price: 623180,
    description: 'NFC Technology: Yes, Color: Gray, Screen Type: OLED, Super Retina XDR Display, Diagonal: 6.7 inches, RAM Size: 8 GB, Processor: 6-core Apple A17 Pro, Internal Storage: 256.0 GB, Battery Capacity: 4422.0 mAh.',
    link:"https://kaspi.kz/shop/p/apple-iphone-15-pro-max-256gb-seryi-113138420/?c=750000000",
    rating:5,
  },
  {
    id: 4,
    img: "https://resources.cdn-kaspi.kz/img/m/p/h21/h90/70365637279774.jpg?format=gallery-medium",
    name: 'Рахат шоколадная плитка молочный 100 г ',
    price: 590,
    description: 'Country of production: Kazakhstan, Storage conditions: Store at temperatures from +8°C to +23°C and relative humidity not exceeding 75%, Chocolate type: Milk chocolate, Filling: Without filling, Additives: Without additives.',
    link:"https://kaspi.kz/shop/p/rahat-shokoladnaja-plitka-molochnyi-100-g-100221859/?c=750000000",
    rating:5,
  },{
    id: 5,
    img: "https://resources.cdn-kaspi.kz/img/m/p/h0c/h5b/63619158048798.jpg?format=gallery-medium",
    name: 'Cyber Cyber002',
    price: 3000000,
    description: 'Installed OS: Windows 11 Pro, Processor: Intel Core i5 10400f, RAM Size: 16.0 GB, SSD Capacity: 512.0 GB, Case Form Factor: Midi-Tower.',
    link:"https://kaspi.kz/shop/p/cyber-cyber002-chernyi-107073228/?c=750000000",
    rating:0,
  },
  {
    id: 6,
    img: "https://resources.cdn-kaspi.kz/img/m/p/h74/hf7/85118753931294.png?format=gallery-large",
    name: 'Apple Vision Pro 512GB',
    price: 2697154,
    description: 'Internal memory capacity: 512.0 GB.Video recording: Yes.Battery capacity: 3166.0 match.Viewing angle: 110.0 degrees.Controls: touch panel,voice control.Approximate operating time: 5.0 hours',
    link: 'https://kaspi.kz/shop/p/apple-vision-pro-512-gb-116472619/?c=750000000',
    rating: 0,
  },
  {
    id: 7,
    img: "https://resources.cdn-kaspi.kz/img/m/p/hd3/h7b/84577188020254.jpg?format=gallery-medium",
    name: 'MacBook Pro 14 MRX33 SSD:512GB RAM:18GB',
    price: 1034975,
    description: 'The Apple MacBook Pro 14 MRX33 is a sleek and high-performance black laptop, featuring a 14-inch display, powerful hardware, and the macOS operating system.',
    link: 'https://kaspi.kz/shop/p/apple-macbook-pro-14-mrx33-chernyi-114861358/?c=750000000',
    rating: 5,
  },{
    id:8,
    img:"https://resources.cdn-kaspi.kz/img/m/p/hf5/hf5/84077662830622.png?format=gallery-medium",
    name:"Dyson Gen5detect",
    price:576482,
    description:"Type: Vertical, Cleaning: Dry, Dust Collector Type: Container, Power Consumption: 752.0 W, Power Source: Battery, Color: Purple.",
    link:"https://kaspi.kz/shop/p/dyson-gen5detect-fioletovyi-113592857/?c=750000000",
    rating: 4.5,
  },{
    id:9,
    img:"https://resources.cdn-kaspi.kz/img/m/p/h26/hc5/83559836745758.jpg?format=gallery-medium",
    name:"Apple iPhone 15 Pro 1Tb",
    price:806704,
    description:"NFC Technology: Yes, Color: Blue, Screen Type: OLED, Super Retina XDR display, Diagonal: 6.1 inches, RAM Size: 8 GB, Processor: 6-core Apple A17 Pro, Internal Storage: 1024.0 GB, Battery Capacity: 3279.0 mAh.",
    link:"https://kaspi.kz/shop/p/apple-iphone-15-pro-1tb-sinii-113138344/?c=750000000",
    rating: 5,
  },
  {
    id:10,
    img:"https://resources.cdn-kaspi.kz/img/m/p/heb/h8a/64496092479518.jpg?format=gallery-medium",
    name:"Logitech MX Master 3S",
    price:49106,
    description:"Sensor Type: Optical LED, Connection Type: Wireless (USB, Bluetooth), Interface: USB, Bluetooth, Design: Right-handed, Gaming: No, Optical Sensor Resolution: 8000.0 dpi.",
    link:"https://kaspi.kz/shop/p/logitech-mx-master-3s-910-006560-seryi-106172406/?c=750000000",
    rating: 5,
  },
];
