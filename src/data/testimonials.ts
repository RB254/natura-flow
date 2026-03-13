export interface Testimonial {
  id: string;
  name: string;
  location: string;
  condition: string;
  product: string;
  story: string;
  rating: number;
  photo?: string;
}

export const testimonials: Testimonial[] = [
  { id: "t1", name: "Sarah Kamau", location: "Nairobi", condition: "Chronic Fatigue", product: "Cordyceps Plus Capsules", story: "I had been struggling with chronic fatigue for years. After 3 months of taking Cordyceps Plus, my energy levels skyrocketed. I can now work full days without feeling drained. Green World changed my life!", rating: 5 },
  { id: "t2", name: "James Otieno", location: "Kisumu", condition: "Low Farm Yields", product: "NeutricPlant Organic Fertilizer", story: "As a smallholder farmer, I was getting poor maize yields season after season. After switching to NeutricPlant organic fertilizer, my yield doubled in just one season. My income has improved dramatically.", rating: 5 },
  { id: "t3", name: "Faith Wanjiru", location: "Mombasa", condition: "Digestive Issues", product: "Intestine Cleansing Tea", story: "I suffered from bloating and constipation for years. Dr. Amina recommended the Intestine Cleansing Tea, and within 2 weeks I felt like a new person. The doctor consultation was professional and caring.", rating: 5 },
  { id: "t4", name: "Peter Maina", location: "Nakuru", condition: "High Blood Sugar", product: "Blood Sugar Nutraceutical Formula", story: "My blood sugar was consistently high despite medication. After adding the Blood Sugar Nutraceutical Formula to my routine under doctor guidance, my levels have stabilized. I feel healthier than I have in a decade.", rating: 5 },
  { id: "t5", name: "Grace Akinyi", location: "Eldoret", condition: "Hormonal Imbalance", product: "Women's Wellness Capsules", story: "After struggling with irregular cycles and mood swings, the Women's Wellness Capsules brought balance back to my life. I recommend them to every woman who faces similar challenges.", rating: 4 },
  { id: "t6", name: "Daniel Kipchoge", location: "Thika", condition: "Low Energy & Stamina", product: "Super Energy Ginseng", story: "As an athlete, I needed natural energy without side effects. Super Energy Ginseng gives me sustained energy for training. No crash, no jitters — just pure natural power.", rating: 5 },
];
