export interface Branch {
  id: string;
  name: string;
  address: string;
  phone: string;
  city: string;
  county: string;
  workingHours: string;
  mapUrl: string;
}

export const branches: Branch[] = [
  { id: "b1", name: "Green World Bomet", address: "Bomet Central", phone: "+254 700 123 456", city: "Bomet", county: "Bomet", workingHours: "Mon-Sat 8:00 AM - 6:00 PM", mapUrl: "https://maps.google.com/?q=-0.7813,35.3440" },
  { id: "b2", name: "Green World Narok", address: "Narok Town", phone: "+254 711 234 567", city: "Narok", county: "Narok", workingHours: "Mon-Sat 8:30 AM - 5:30 PM", mapUrl: "https://maps.google.com/?q=-1.0889,35.8643" },
  { id: "b3", name: "Green World Siaya", address: "Siaya Town Centre", phone: "+254 722 345 678", city: "Siaya", county: "Siaya", workingHours: "Mon-Sat 8:00 AM - 5:00 PM", mapUrl: "https://maps.google.com/?q=0.0614,34.2885" },
  { id: "b4", name: "Green World Eldoret", address: "Uganda Road, Zion Mall, Ground Floor", phone: "+254 733 456 789", city: "Eldoret", county: "Uasin Gishu", workingHours: "Mon-Sat 8:00 AM - 5:30 PM", mapUrl: "https://maps.google.com/?q=0.5143,35.2698" },
];
