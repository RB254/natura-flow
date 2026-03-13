export interface Doctor {
  id: string;
  name: string;
  specialization: string;
  experience: number;
  photo: string;
  availableDays: string[];
  timeSlots: string[];
  bio: string;
}

export interface Appointment {
  id: string;
  doctorId: string;
  patientName: string;
  patientPhone: string;
  patientEmail: string;
  date: string;
  time: string;
  status: "upcoming" | "completed" | "cancelled";
  notes?: string;
}

export const doctors: Doctor[] = [
  {
    id: "d1",
    name: "Dr. Amina Wanjiku",
    specialization: "Nutraceutical Medicine",
    experience: 15,
    photo: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=300&fit=crop&crop=face",
    availableDays: ["Monday", "Wednesday", "Friday"],
    timeSlots: ["9:00 AM", "10:00 AM", "11:00 AM", "2:00 PM", "3:00 PM", "4:00 PM"],
    bio: "Dr. Amina is a certified naturopathic doctor with over 15 years of experience in nutraceutical medicine. She specializes in immune system enhancement and chronic disease management using natural remedies.",
  },
  {
    id: "d2",
    name: "Dr. James Ochieng",
    specialization: "Nutrition & Wellness",
    experience: 12,
    photo: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300&h=300&fit=crop&crop=face",
    availableDays: ["Tuesday", "Thursday", "Saturday"],
    timeSlots: ["8:00 AM", "9:00 AM", "10:00 AM", "1:00 PM", "2:00 PM", "3:00 PM"],
    bio: "Dr. James specializes in nutritional therapy and holistic wellness. He helps patients achieve optimal health through personalized diet plans and nutraceutical supplement recommendations.",
  },
  {
    id: "d3",
    name: "Dr. Grace Muthoni",
    specialization: "Women's Natural Health",
    experience: 10,
    photo: "https://images.unsplash.com/photo-1594824476967-48c8b964e05a?w=300&h=300&fit=crop&crop=face",
    availableDays: ["Monday", "Tuesday", "Thursday"],
    timeSlots: ["9:00 AM", "10:00 AM", "11:00 AM", "2:00 PM", "3:00 PM"],
    bio: "Dr. Grace is dedicated to women's health using natural and nutraceutical approaches. She provides guidance on hormonal balance, fertility, and general wellness for women of all ages.",
  },
  {
    id: "d4",
    name: "Dr. Peter Kamau",
    specialization: "Digestive Health & Detox",
    experience: 8,
    photo: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=300&h=300&fit=crop&crop=face",
    availableDays: ["Wednesday", "Friday", "Saturday"],
    timeSlots: ["8:00 AM", "9:00 AM", "10:00 AM", "1:00 PM", "2:00 PM"],
    bio: "Dr. Peter focuses on digestive health and detoxification programs. He combines traditional knowledge with modern diagnostics to address gut health issues using nutraceutical solutions.",
  },
];

export const mockAppointments: Appointment[] = [
  {
    id: "a1",
    doctorId: "d1",
    patientName: "John Mwangi",
    patientPhone: "+254712345678",
    patientEmail: "john@email.com",
    date: "2026-03-10",
    time: "10:00 AM",
    status: "upcoming",
  },
  {
    id: "a2",
    doctorId: "d2",
    patientName: "Mary Njeri",
    patientPhone: "+254723456789",
    patientEmail: "mary@email.com",
    date: "2026-03-05",
    time: "2:00 PM",
    status: "completed",
    notes: "Follow-up recommended in 2 weeks.",
  },
];
