export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

export interface Testimonial {
  id: number;
  name: string;
  rating: number;
  comment: string;
  location: string;
}