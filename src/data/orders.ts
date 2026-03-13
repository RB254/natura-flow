export interface Order {
  id: string;
  customerName: string;
  customerEmail: string;
  items: { productId: string; name: string; quantity: number; price: number }[];
  total: number;
  status: "Pending" | "Processing" | "Shipped" | "Delivered";
  date: string;
}

export const mockOrders: Order[] = [
  {
    id: "ORD-001",
    customerName: "John Mwangi",
    customerEmail: "john@email.com",
    items: [
      { productId: "p1", name: "Cordyceps Plus Capsules", quantity: 2, price: 3500 },
      { productId: "p3", name: "Intestine Cleansing Tea", quantity: 1, price: 1800 },
    ],
    total: 8800,
    status: "Processing",
    date: "2026-03-04",
  },
  {
    id: "ORD-002",
    customerName: "Mary Njeri",
    customerEmail: "mary@email.com",
    items: [
      { productId: "p7", name: "Women's Wellness Capsules", quantity: 1, price: 4000 },
    ],
    total: 4000,
    status: "Delivered",
    date: "2026-03-01",
  },
  {
    id: "ORD-003",
    customerName: "David Kiprop",
    customerEmail: "david@email.com",
    items: [
      { productId: "f1", name: "Green World Organic Fertilizer", quantity: 5, price: 1500 },
      { productId: "f3", name: "CropMax Nutrient Boost", quantity: 3, price: 1200 },
    ],
    total: 11100,
    status: "Shipped",
    date: "2026-03-03",
  },
  {
    id: "ORD-004",
    customerName: "Alice Wambui",
    customerEmail: "alice@email.com",
    items: [
      { productId: "p9", name: "Super Energy Ginseng", quantity: 1, price: 4800 },
    ],
    total: 4800,
    status: "Pending",
    date: "2026-03-06",
  },
];
