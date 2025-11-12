import { Testimonial, TeamMember } from './types';

export const CATEGORIES = [
  "Apparel & Fashion",
  "Home & Decor",
  "Jewelry",
  "Art & Crafts",
  "Health & Beauty",
  "Bags & Accessories",
  "Footwear",
  "For Kids",
  "Gourmet & Kitchen",
  "Books & Stationery",
];

export const CATEGORY_DESCRIPTIONS: Record<string, string> = {
  "Apparel & Fashion": "Discover unique styles handcrafted with vibrant African fabrics like Kitenge, Ankara, and Kente cloth.",
  "Home & Decor": "Bring the warmth and artistry of Africa into your home with our handwoven baskets, textiles, and carvings.",
  "Jewelry": "Adorn yourself with stunning, handcrafted pieces made from brass, beads, and natural materials.",
  "Art & Crafts": "Explore a collection of authentic sculptures, paintings, and crafts that tell the stories of their makers.",
  "Health & Beauty": "Nourish your body with natural, traditional ingredients like shea butter, black soap, and marula oil.",
  "Bags & Accessories": "Complete your look with our unique range of leather bags, colorful clutches, and stylish accessories.",
  "Footwear": "Step out in style with handcrafted leather sandals, vibrant espadrilles, and other unique footwear.",
  "For Kids": "Delight your little ones with charming, handcrafted toys, books, and clothing inspired by Africa.",
  "Gourmet & Kitchen": "Savor the flavors of the continent with our selection of exotic spices, single-origin coffees, and pantry staples.",
  "Books & Stationery": "Immerse yourself in African literature and express your creativity with our beautifully crafted stationery."
};

export const SLOGAN = "Buy it, get it.";
export const WHATSAPP_NUMBER = "254791177106";
export const INSTAGRAM_HANDLE = "bigiafrica";
export const FACEBOOK_HANDLE = "bigiafrica";
export const X_HANDLE = "bigi_africa";
export const TIKTOK_HANDLE = "bigi.africa";
export const LINKEDIN_HANDLE = "#"; 
export const COMPANY_EMAIL = "bigiafrica37@gmail.com";
export const CAREERS_EMAIL = "bigikenya37@gmail.com";
export const SHIPPING_COST = 0;

export const DELIVERY_LOCATIONS = {
  "Nairobi - Central & West": [
    "CBD (Central Business District)",
    "Westlands",
    "Parklands",
    "Highridge",
    "Kileleshwa",
    "Kilimani",
    "Lavington",
    "Hurlingham",
    "Ngara",
    "Upper Hill",
  ],
  "Nairobi - South": [
    "Lang'ata",
    "Karen",
    "South B",
    "South C",
    "Nairobi West",
    "Madaraka",
  ],
  "Nairobi - East": [
    "Eastleigh",
    "Embakasi",
    "Donholm",
    "Umoja",
    "Kayole",
    "Pipeline",
    "Buru Buru",
    "Pangani",
  ],
  "Nairobi - North": [
    "Kasarani",
    "Roysambu",
    "Zimmerman",
    "Githurai 45",
    "Kahawa West",
    "Runda",
    "Muthaiga",
    "Garden Estate",
  ],
  "Nairobi Metropolitan Area": [
    "Athi River",
    "Juja",
    "Kiambu Town",
    "Kikuyu",
    "Kitengela",
    "Limuru",
    "Mlolongo",
    "Ngong",
    "Ongata Rongai",
    "Ruiru",
    "Syokimau",
    "Thika",
    "Wangige",
  ],
};

export const TESTIMONIALS: Testimonial[] = [
    { name: "Joy Gitonga.", location: "Kilimani, Nairobi", stars: 5, feedback: "I'm so impressed with the speed of delivery! I ordered a blender in the morning and had it by evening. The product quality is excellent too. Bigi is my new go-to!", imageUrl: "/assets/images/My name is philomina ujunwa Vincent,  aka….jpeg" },
    { name: "Isaac Etyang.", location: "Westlands, Nairobi", stars: 5, feedback: "The variety is amazing. I found exactly the kids' shoes I was looking for, which are hard to find elsewhere. The website is easy to use, and checkout was a breeze.", imageUrl: "/assets/images/aadbfa91-25c1-4233-adb5-b2820979c61b.jpeg" },
    { name: "Fatima Amina.", location: "South C, Nairobi", stars: 5, feedback: "As a busy mom, Bigi is a lifesaver. I can order appliances and get them delivered for free without leaving the house. The cash on delivery is a huge plus for me.", imageUrl: "https://i.pravatar.cc/150?u=fatima" },
    { name: "Brian Kitole.", location: "Parklands, Nairobi", stars: 5, feedback: "Finally, an online store that feels trustworthy. The product descriptions are accurate, and what you see is what you get. The Friday offers are a huge bonus!", imageUrl: "/assets/images/IMG_20231124_141810_184-1.jpg" },
    { name: "Keneth Ekissa.", location: "Ruiru, Kiambu", stars: 5, feedback: "Living just outside Nairobi, I often struggle with delivery. Bigi was seamless. My computing accessories arrived the next day. Highly recommend their service!", imageUrl: "/assets/images/IMG_0596.JPG" },
    { name: "Samuel Ndichu.", location: "Kitengela, Kajiado", stars: 5, feedback: "I was skeptical about ordering shoes online, but the quality exceeded my expectations. The customer support team called to confirm the order, which was a nice personal touch.", imageUrl: "/assets/images/simiti.jpg" },
    { name: "Christine Kiare.", location: "Thika, Kiambu", stars: 4, feedback: "The health & beauty section has a great selection. I found my favorite brands at a very good price. Will definitely be shopping here again for my skincare needs.", imageUrl: "/assets/images/IMG_20231231_100302.jpg" },
    { name: "Charles Nzyoka.", location: "Syokimau, Machakos", stars: 5, feedback: "The user experience is top-notch. The site is fast, the search works perfectly, and the checkout process is incredibly simple. A truly modern shopping platform.", imageUrl: "/assets/images/A bold and soulful portrait of an African boy….jpeg" },
];

export const TEAM_MEMBERS: TeamMember[] = [
    {
        name: "Shem Johns",
        title: "Co-Founder & CEO",
        role: "ceo",
        bio: "The Visionary. Shem saw the global stage and knew Africa's creators belonged on it. He's the driving force behind our mission, ensuring every partnership is built on respect, fairness, and a shared passion for authentic craftsmanship.",
        imageUrl: "/assets/images/shem.jpg",
        joke: "I told my team we need to think outside the box. The delivery arrived in a bag."
    },
    {
        name: "Antony Emongoluk",
        title: "Co-Founder & CTO",
        role: "cto",
        bio: "Turns impossible ideas into flawless code. Antony is the reason the app feels less like software and more like magic.",
        imageUrl: "/assets/images/teflon.jpg",
        joke: "There are 10 types of people: those who understand binary, and those who don't."
    },
    {
        name: "Morice Charles",
        title: "Co-Founder & Marketing Director",
        role: "marketing",
        bio: "Builds our community and shares the Bigi vision one great story at a time. He's the reason you're here reading this.",
        imageUrl: "/assets/images/morice.jpg",
        joke: "Why did the marketer get dumped? A lack of engagement."
    },
    {
        name: "Emmanuel Otieno",
        title: "Co-Founder & Logistics Director",
        role: "Logistics",
        bio: "The Bridge-Builder. Emmanuel masterminds the complex journey from a rural workshop to a customer's doorstep across the globe. He's building not just a supply chain, but a network of trust that connects our artisans to the world.",
        imageUrl: "/assets/images/manu.jpg",
        joke: "Our delivery is so fast, we're thinking of sponsoring The Flash."
    }
];

export const ABOUT_US_STORY = {
    title: "More Than a Marketplace. It's a Movement.",
    content: [
        "It started with a conversation between four friends, fueled by late-night coffee and a shared frustration. We, a group of Gen Z Kenyans, saw a disconnect. The world loved 'African' art, fashion, and crafts, but what they were often buying were mass-produced caricatures. Meanwhile, back home, we knew the real creators—the grandmother in a village weaving intricate baskets, the young designer in a Nairobi workshop crafting jewelry from reclaimed brass, the artisan whose family had passed down leatherworking skills for generations. These were the true stories, the real products, and they weren't being told.",
        "The 'aha' moment came during a trip upcountry. We met a potter, a woman whose hands shaped clay with a grace that felt ancient and new at the same time. Her work was stunning, yet her market was limited to a small roadside stall. She spoke of her dreams to share her craft with the world, but the path seemed impossible. That day, her story became our mission.",
        "Bigi was born from that mission. We're not just an e-commerce platform; we are a curated bridge between the rich, diverse talent of African creators and a global audience that craves authenticity. We are four friends who decided to build the platform we wished existed. One that champions local industry, ensures fair compensation, and treats every product not as an item, but as a piece of a larger story.",
        "When you buy from Bigi, you're not just getting a beautiful product. You're investing in a dream, preserving a heritage, and empowering an entrepreneur. You're becoming part of a movement to showcase the true creativity and spirit of Africa to the world. This is our story. Thank you for being a part of it."
    ]
};

export const OUR_MISSION = {
    title: "Our Mission",
    content: "To build a global bridge to the heart of African creativity. We are dedicated to empowering local artisans and industries by providing a platform that celebrates their heritage, shares their stories, and delivers their authentic creations to the world. Every purchase is a promise kept, a story told, and a community uplifted."
}

export const CAREERS_CONTENT = {
    title: "Join the Bigi Revolution",
    lead: "We're on a mission to redefine e-commerce in Kenya, and we're always looking for passionate, talented people to join us. If you're excited by innovation, driven by customer happiness, and thrive in a fast-paced environment, we want to hear from you.",
    open_application_section: {
        title: "We're Always Looking for Talent",
        content: "Even if you don't see a specific role listed that fits your profile, we're always interested in hearing from exceptional people. We believe that great talent doesn't always fit into a neat job description. If you are passionate about what we're building and believe you can make a significant impact, we encourage you to get in touch. We review every application and will reach out if we see a potential fit now or in the future."
    },
    cta: "Think you can help us grow?"
};

export const HELP_CENTER_QAS = [
    {
        q: "What are your delivery times?",
        a: "We deliver from 9 AM to 6 PM, Monday to Saturday. Orders placed before 12 PM are typically delivered on the same day within Nairobi. Orders placed after 12 PM, or for locations outside of Nairobi, are delivered the next business day."
    },
    {
        q: "What payment methods do you accept?",
        a: "We offer two convenient payment options. You can choose 'Pay on Delivery', where you pay our rider with cash or M-Pesa upon receiving your order. Alternatively, you can select 'Pay at Site' during checkout to pay upfront using M-Pesa or a credit/debit card. For 'Pay at Site', your payment will be processed securely before your order is confirmed."
    },
    {
        q: "What is your return policy?",
        a: "If you're not happy with your product at the time of delivery, you can hand it right back to the rider at no cost. If you notice an issue after the rider has left, please contact our support within 24 hours to arrange for a return or exchange."
    },
    {
        q: "Do you deliver outside of Nairobi?",
        a: "For now we deliver free door-to-door delivery within Nairobi, with time we'll be delivering to all major towns across Kenya."
    },
    {
        q: "How can I track my order?",
        a: "Once your order is dispatched, our rider will call you to confirm your location and provide an estimated time of arrival. You can also contact our support team via WhatsApp for real-time updates on your delivery."
    }
];


export const TERMS_CONTENT = [
    { title: "Introduction", content: "Welcome to Bigi. By accessing our website, you agree to these terms and conditions. Please read them carefully." },
    { title: "User Account", content: "You are responsible for maintaining the confidentiality of your account and password. You agree to accept responsibility for all activities that occur under your account." },
    { title: "Product Information", content: "We strive to be as accurate as possible in our product descriptions. However, we do not warrant that product descriptions or other content is accurate, complete, reliable, current, or error-free." },
    { title: "Pricing", content: "All prices are listed in Kenyan Shillings (Ksh). We reserve the right to change prices for products at any time without prior notice." },
    { title: "Governing Law", content: "These terms and conditions are governed by and construed in accordance with the laws of Kenya." }
];

export const PRIVACY_POLICY_CONTENT = [
    { title: "Information We Collect", content: "We collect information you provide directly to us, such as when you create an account, place an order, or contact customer service. This may include your name, email, phone number, and delivery address." },
    { title: "How We Use Information", content: "We use the information we collect to process your orders, communicate with you, and improve our services. We do not share your personal information with third parties except as necessary to complete your order (e.g., with our delivery riders)." },
    { title: "Data Security", content: "We implement a variety of security measures to maintain the safety of your personal information. Your personal information is contained behind secured networks." },
    { title: "Your Consent", content: "By using our site, you consent to our privacy policy." }
];
