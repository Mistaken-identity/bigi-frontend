

export interface Review {
  id: string;
  author: string;
  rating: number;
  comment: string;
  date: string;
  imageUrl?: string;
}

export interface Product {
  id: string;
  name: string;
  description: string; // for card
  longDescription: string; // for modal
  price: number; // The actual, potentially discounted price
  originalPrice: number; // The price before discount
  imageUrls: string[];
  timesOrdered?: number;
  reviews: Review[];
}

export interface CartItem extends Product {
  quantity: number;
}

export interface WishlistItem extends Product {}

export interface Testimonial {
  name:string;
  location: string;
  stars: number;
  feedback: string;
  imageUrl: string;
}

export interface DeliveryDetails {
  firstName: string;
  lastName:string;
  phone: string;
  email: string;
  location: string;
  locationDetails: string;
  paymentMethod: 'payOnDelivery' | 'payAtSite';
  sitePaymentOption?: 'mpesa' | 'card';
  mpesaNumber?: string;
  cardNumber?: string;
}

export interface Order {
  id:string;
  items: CartItem[];
  deliveryDetails: DeliveryDetails;
  subtotal: number;
  shipping: number;
  total: number;
  date: string;
  paymentStatus: 'Paid' | 'Pending - Pay on Delivery';
}

export interface LiveSale {
  productName: string;
  location: string;
  imageUrl: string;
}

export interface User {
  id?: string;
  _id?: string;
  firstName?: string;
  lastName?: string;
  name?: string; // For backend auth which returns 'name'
  email: string;
  password?: string;
}

export interface TeamMember {
  name: string;
  title: string;
  bio: string;
  imageUrl: string;
  joke?: string;
  role: 'ceo' | 'cto' | 'marketing' | 'Logistics' | 'cho';
}

export interface ToastMessage {
  id: number;
  message: string;
  type: 'success' | 'error';
}

export interface ReviewSummary {
  pros: string[];
  cons: string[];
}

export type View =
  | 'home'
  | 'products'
  | 'cart'
  | 'checkout'
  | 'orderConfirmation'
  | 'wishlist'
  | 'aboutUs'
  | 'search'
  | 'customerFeedbackPage'
  | 'careers'
  | 'contactUs'
  | 'helpCenter'
  | 'auth'
  | 'myAccount'
  | 'terms'
  | 'privacy'
  | 'valentineCollection';
