import { Product } from './types';

export const LOCAL_PRODUCTS: Record<string, Product[]> = {
  "Apparel & Fashion": [
    {
      id: 'fashion-001',
      name: 'Azure Blue Kitenge Dress',
      description: 'A vibrant, floor-length dress made from 100% authentic Kitenge fabric.',
      longDescription: 'Embrace bold patterns and vibrant colors with this stunning Azure Blue Kitenge Dress. Expertly tailored for a flattering silhouette, this dress is perfect for weddings, parties, or making a statement. The breathable cotton fabric ensures comfort all day long.',
      price: 4999,
      originalPrice: 5200,
      imageUrls: [
          '/assets/images/a khanga leso dress in Mombasa old town.jpeg',
          'https://images.unsplash.com/photo-1599827827055-66760591f24a?w=800',
          'https://images.unsplash.com/photo-1588185968037-353d7123933c?w=800',
      ],
      timesOrdered: 420,
      reviews: [
          { id: 'review-f1-1', author: 'Wanja M.', rating: 5, comment: 'Absolutely gorgeous dress! The fabric is high quality and the colors are so vibrant. I received so many compliments.', date: '2025-08-20' },
          { id: 'review-f1-2', author: 'Amina H.', rating: 5, comment: 'Fits perfectly and is very comfortable to wear. The craftsmanship is excellent.', date: '2025-08-18' },
          { id: 'review-f1-3', author: 'Sarah K.', rating: 4, comment: 'Beautiful dress, though the zipper was a bit stiff at first. Overall, a great purchase.', date: '2025-08-15' },
      ]
    },
    {
      id: 'fashion-002',
      name: 'Men\'s Royal Dashiki',
      description: 'A classic embroidered Dashiki shirt, perfect for formal and casual occasions.',
      longDescription: 'This Royal Dashiki is a symbol of African heritage and style. Made from premium, soft cotton, it features intricate golden embroidery along the neckline and sleeves. It offers a comfortable, relaxed fit for any event.',
      price: 3299,
      originalPrice: 4000,
      imageUrls: [
          '/assets/images/African Style-New5.jpeg',
          'https://images.unsplash.com/photo-1602133221473-207959438c22?w=800',
          'https://images.unsplash.com/photo-1585232240183-9b4f63ec255b?w=800',
      ],
      timesOrdered: 399,
      reviews: [
          { id: 'review-f2-1', author: 'Isaac Etyang.', rating: 5, comment: 'The embroidery is stunning and the fabric feels great. I wore it to a wedding and felt like a king!', date: '2025-07-21' },
          { id: 'review-f2-2', author: 'Brian Kilile.', rating: 5, comment: 'Excellent quality and fits perfectly. The color is even richer in person.', date: '2024-07-19' },
      ]
    },
    {
      id: 'fashion-003',
      name: 'Ankara Print Headwrap',
      description: 'A versatile and vibrant headwrap made from authentic Ankara fabric.',
      longDescription: 'Style your hair in countless ways with this beautiful Ankara headwrap. The bold patterns add a pop of color to any outfit, celebrating African fashion with every tie.',
      price: 1800,
      originalPrice: 2000,
      imageUrls: [
        '/assets/images/feb2f400-c264-4cd3-8336-50ed85d2f91e.jpeg',
        '/assets/images/feb2f400-c264-4cd3-8336-50ed85d2f91e.jpeg',
        'https://images.unsplash.com/photo-1597089439121-515f4e0a724a?w=800'
      ],
      timesOrdered: 410,
      reviews: [
        { id: 'review-f3-1', author: 'Cynthia N.', rating: 5, comment: 'The fabric is beautiful and the length is perfect for so many styles. I love it!', date: '2025-07-20' },
        { id: 'review-f3-2', author: 'Naturalista', rating: 5, comment: 'High-quality fabric that doesn\'t slip. The colors are exactly as pictured.', date: '2025-08-18' }
      ]
    },
    {
      id: 'fashion-004',
      name: 'Kente Cloth Bow Tie',
      description: 'A pre-tied bow tie made from authentic Ghanaian Kente cloth.',
      longDescription: 'Add a touch of heritage and color to your formal wear. This Kente bow tie is expertly crafted and comes pre-tied with an adjustable strap for a perfect fit every time.',
      price: 2499,
      originalPrice: 2700,
      imageUrls: [
        'https://images.unsplash.com/photo-1512101957429-39b0d23c8a99?w=800',
        'https://images.unsplash.com/photo-1579301258942-824f9b8b321a?w=800',
        'https://images.unsplash.com/photo-1594938382329-87a177558655?w=800'
      ],
      timesOrdered: 299,
      reviews: [
        { id: 'review-f4-1', author: 'DapperDan', rating: 5, comment: 'Stunning bow tie. The weaving is intricate and the colors pop. It was a huge hit at the gala.', date: '2025-08-19' },
      ]
    },
    {
      id: 'fashion-005', name: 'Bogolan Kimono Jacket', description: 'A chic, open-front kimono made from Malian mudcloth.', longDescription: 'This stylish Bogolan (mudcloth) kimono is the perfect layering piece. Its traditional patterns are hand-painted, making each jacket a unique work of art. Lightweight and versatile for any season.', price: 8500, originalPrice: 9000, imageUrls: [
        'https://images.unsplash.com/photo-1605346442657-4a2599c2FEB3?w=800',
        'https://images.unsplash.com/photo-1593431639803-3b898135506a?w=800',
        'https://images.unsplash.com/photo-1552826317-e9a9a3b69234?w=800'
      ], timesOrdered: 239, reviews: [{ id: 'review-f5-1', author: 'ArtisanLover', rating: 5, comment: 'Absolutely beautiful. You can feel the quality and the story in the fabric. It drapes perfectly.', date: '2025-09-22' }]
    },
    {
      id: 'fashion-006', name: 'Adire Tunic', description: 'A vibrant, hand-dyed tunic from Nigeria.', longDescription: 'This beautiful tunic features traditional Adire tie-dye techniques from Nigeria, creating stunning and unique patterns. Made from soft, breathable cotton, it\'s perfect for a stylish, comfortable look.', price: 5200, originalPrice: 5500, imageUrls: [
        'https://images.unsplash.com/photo-1609228394464-63de239b3bd0?w=800',
        'https://images.unsplash.com/photo-1595882512144-db4520a767e4?w=800',
        'https://images.unsplash.com/photo-1588185968037-353d7123933c?w=800'
      ], timesOrdered: 287, reviews: [{ id: 'review-f6-1', author: 'Ngozi A.', rating: 5, comment: 'The dye patterns are incredible. So much more beautiful in person. I love wearing this piece of my heritage.', date: '2025-07-21' }]
    },
    {
      id: 'fashion-007', name: 'Shweshwe A-Line Skirt', description: 'A colorful A-line skirt from South Africa.', longDescription: 'Made from iconic Three Cats Shweshwe fabric, this A-line skirt boasts vibrant geometric patterns and a flattering silhouette. It features a comfortable waistband and side pockets.', price: 4500, originalPrice: 4500, imageUrls: [
        'https://images.unsplash.com/photo-1551843425-1a8a7c2c2f82?w=800',
        'https://images.unsplash.com/photo-1620309136936-e380e3c545b7?w=800',
        'https://images.unsplash.com/photo-1617053314959-2384a44e46a2?w=800'
      ], timesOrdered: 210, reviews: [{ id: 'review-f7-1', author: 'Lerato P.', rating: 5, comment: 'Beautifully made skirt and the fabric is top quality. The pockets are a huge plus!', date: '2025-07-20' }]
    },
    {
      id: 'fashion-008', name: 'Kikoy Beach Sarong', description: 'A soft, versatile sarong from Kenya.', longDescription: 'Woven from soft, absorbent cotton, the traditional Kenyan Kikoy is the perfect beach accessory. Use it as a sarong, a towel, a scarf, or a throw. Features distinctive hand-knotted tassels.', price: 2800, originalPrice: 3000, imageUrls: [
        'https://images.unsplash.com/photo-1592328775213-9a3a693ce480?w=800',
        'https://images.unsplash.com/photo-1590820088924-2c70094054a8?w=800',
        'https://images.unsplash.com/photo-1621336143335-3372c2121067?w=800'
      ], timesOrdered: 296, reviews: [{ id: 'review-f8-1', author: 'BeachBum', rating: 5, comment: 'So soft and the colors are gorgeous. Dries quickly. My new vacation essential.', date: '2025-08-18' }]
    },
    {
      id: 'fashion-009', name: 'Men\'s Agbada Robe', description: 'A grand, flowing robe for special occasions.', longDescription: 'This traditional Nigerian Agbada is a three-piece set featuring a grand, wide-sleeved robe, an undervest, and matching trousers. Made from premium damask with intricate embroidery.', price: 15999, originalPrice: 16500, imageUrls: [
        'https://images.unsplash.com/photo-1585232240183-9b4f63ec255b?w=800',
        'https://images.unsplash.com/photo-1601925698619-8de3e497b714?w=800',
        'https://images.unsplash.com/photo-1602133221473-207959438c22?w=800'
      ], timesOrdered: 324, reviews: [{ id: 'review-f9-1', author: 'Chief Ade', rating: 5, comment: 'An exceptional piece. The craftsmanship is flawless. I felt incredibly proud wearing it to my son\'s wedding.', date: '2025-08-15' }]
    },
    {
      id: 'fashion-010', name: 'Maasai Shuka Blanket Scarf', description: 'A warm and vibrant scarf from Kenya.', longDescription: 'Made from the iconic red-checked Maasai Shuka fabric, this oversized blanket scarf is perfect for chilly evenings. It\'s durable, warm, and can also be used as a small throw.', price: 3200, originalPrice: 3200, imageUrls: [
        'https://images.unsplash.com/photo-1590820088924-2c70094054a8?w=800',
        'https://images.unsplash.com/photo-1592328775213-9a3a693ce480?w=800',
        'https://images.unsplash.com/photo-1599827827055-66760591f24a?w=800'
      ], timesOrdered: 258, reviews: [{ id: 'review-f10-1', author: 'Traveler Jane', rating: 5, comment: 'Surprisingly soft and very warm. The colors are beautiful. It was perfect for my safari trip!', date: '2024-07-12' }]
    },
  ],
  "Home & Decor": [
     {
      id: 'home-001',

      name: 'Rattan Basket',
      description: 'A beautiful and functional decorative basket, handwoven by Kenyan artisans.',
      longDescription: 'Add a touch of authentic African craftsmanship to your home with this sisal basket. Perfect for storing fruits, magazines, or as a planter pot cover. Each basket is unique, showcasing the skill of the weaver.',
      price: 2299,
      originalPrice: 2500,
      imageUrls: [
          '/assets/images/rattan basket2.jpg',
          '/assets/images/rattan basket4.jpg',
          '/assets/images/rattan basket5.jpg',
      ],
      
      timesOrdered: 437,
      reviews: [
          { id: 'review-h1-1', author: 'Jane D.', rating: 5, comment: 'This basket is even more beautiful in person. The quality is amazing and it adds such a nice, natural touch to my living room.', date: '2025-08-12' },
          { id: 'review-h1-2', author: 'EcoLiving', rating: 5, comment: 'I love that this is a handmade, sustainable product. It\'s sturdy and beautifully made. Highly recommend!', date: '2024-07-10' },
          { id: 'review-h1-3', author: 'Mark T.', rating: 4, comment: 'Great basket. The colors are slightly different from the photo, but that\'s expected with handmade items.', date: '2025-07-09' },
      ]
    },
    {
      id: 'home-002',
      name: 'Handcrafted Wooden Lamp Shades',
      description: 'Beautiful handmade lamp shade with woven fabric finish, perfect for warm ambient lighting.',
      longDescription: 'Each lamp shade is carefully crafted by local artisans using reclaimed hardwood and handwoven textile overlays. The intricate weave diffuses light softly, creating a cozy and luxurious atmosphere in your home. Ideal for bedrooms, lounges, or reading corners. Fits both modern and rustic interior designs',
      price: 1499,
      originalPrice: 1800,
      imageUrls: [
        '/assets/images/lamp.jpg',

        '/assets/images/IMG_20250904_152625.jpg',
        '/assets/images/lamp2.jpg',
        '/assets/images/lamp2.jpg',
        '/assets/images/IMG_20250904_152625.jpg',

      ],
      timesOrdered: 420,
      reviews: [
        { id: 'review-h2-1', author: 'DesignerDivya', rating: 5, comment: 'Stunning. The texture and patterns are incredible. They are the perfect statement piece for my client\'s living room.', date: '2025-07-20' },
        { id: 'review-h2-2', author: 'Kevin O.', rating: 5, comment: 'They look fantastic and feel very durable. Love the story behind them.', date: '2025-07-18' },
      ]
    },
    {
      id: 'home-003', name: 'Modern TV Stand', description: 'Elegant wooden TV stand with open storage and sleek design, handcrafted from sustainable wood.', longDescription: 'The Modern TV Stand combines function and beauty with clean lines, solid wood craftsmanship, and durable finishes. Designed with multiple shelves for media devices and decor, this piece offers both organization and aesthetic appeal. Hand-polished surfaces highlight the natural grain of the wood, adding warmth to any living space.', price: 25499, originalPrice: 27000, imageUrls: [
        '/assets/images/tvstand1.jpg',
        '/assets/images/tvstand2.jpg',
        '/assets/images/tvstand.jpg'
      ], timesOrdered: 418, reviews: [{ id: 'review-h3-1', author: 'HostessWithTheMostess', rating: 5, comment: 'Solid, sturdy, and beautiful! It fits perfectly under my 55-inch TV. The natural finish is stunning.', date: '2025-07-22' } ]
    },
    {
      id: 'home-004', name: 'Modern Minimalist TV Stand', description: 'Sleek wooden TV stand with open shelving and clean modern lines.', longDescription: 'The Modern Minimalist TV Stand is designed for simplicity and function. Crafted from sustainably sourced mahogany, it offers spacious open shelves for media accessories and a cable management slot to keep your setup clean. Perfect for modern apartments and minimalist interiors.', price: 25699, originalPrice: 28000, imageUrls: [
        '/assets/images/stand1.jpg',
        '/assets/images/stand3.jpg',
        '/assets/images/stand.jpg'
      ], timesOrdered: 416, reviews: [{ id: 'review-h4-1', author: 'ArtfulHome', rating: 5, comment: 'A truly stunning piece of woodwork. The quality is exceptional and it has a wonderful, substantial feel.', date: '2025-08-20' }]
    },
    {
      id: 'home-005', name: 'Ethiopian Cotton Throw Blanket', description: 'A soft, lightweight throw blanket handwoven from Ethiopian cotton.', longDescription: 'This luxurious throw is incredibly soft and features subtle, traditional Ethiopian patterns. It\'s perfect for draping over a sofa or adding an extra layer of comfort to your bed. Lightweight yet warm.', price: 9500, originalPrice: 10000, imageUrls: [
        'https://images.unsplash.com/photo-1617450365313-24603422a578?w=800',
        'https://images.unsplash.com/photo-1600868297712-429a3934d7a8?w=800',
        'https://images.unsplash.com/photo-1618221376839-a7965f7a0e23?w=800'
      ], timesOrdered: 251, reviews: [{ id: 'review-h5-1', author: 'CozyCorner', rating: 5, comment: 'The softest blanket I have ever owned. It\'s beautifully made and has a very elegant look.', date: '2025-07-18' }]
    },
    {
      id: 'home-006', name: 'Baule Cloth Wall Hanging', description: 'An authentic textile wall hanging from Côte d\'Ivoire.', longDescription: 'This Baule cloth wall hanging features intricate indigo-dyed patterns and fine embroidery. A stunning piece of textile art that brings history and texture to your walls.', price: 12000, originalPrice: 12000, imageUrls: [
        'https://images.unsplash.com/photo-1618221376839-a7965f7a0e23?w=800',
        'https://images.unsplash.com/photo-1618221376814-4903e62f689f?w=800',
        'https://images.unsplash.com/photo-1609228394464-63de239b3bd0?w=800'
      ], timesOrdered: 245, reviews: [{ id: 'review-h6-1', author: 'DesignInspo', rating: 5, comment: 'An incredible find. The craftsmanship is breathtaking. It\'s the centerpiece of my gallery wall.', date: '2025-07-15' }]
    },
    {
      id: 'home-007', name: 'Ostrich Eggshell Candle Holder', description: 'A unique candle holder made from a decorated ostrich eggshell.', longDescription: 'Sourced from Namibia, this candle holder is made from a real, unfertilized ostrich eggshell, carefully carved and decorated with traditional San patterns. It casts a warm, beautiful glow.', price: 4200, originalPrice: 4200, imageUrls: [
        'https://images.unsplash.com/photo-1614285458922-a54b3834e5a9?w=800',
        'https://images.unsplash.com/photo-1596205244510-53434647355e?w=800',
        'https://images.unsplash.com/photo-1612188173489-86f78a7b5d0e?w=800'
      ], timesOrdered: 99, reviews: [{ id: 'review-h7-1', author: 'GiftGiver', rating: 5, comment: 'Bought this as a unique gift and it was a huge success. So unusual and beautiful.', date: '2025-07-14' }]
    },
    {
      id: 'home-008', name: 'Raffia Palm Placemat Set', description: 'A set of 4 handwoven placemats from Madagascar.', longDescription: 'Bring a natural, bohemian touch to your dining table with these raffia placemats. Woven by hand, they are durable, beautiful, and protect your table in style.', price: 3800, originalPrice: 4000, imageUrls: [
        'https://images.unsplash.com/photo-1599187825597-4054b011403b?w=800',
        'https://images.unsplash.com/photo-1550948386-89512875a643?w=800',
        'https://images.unsplash.com/photo-1620912189839-858850a1b654?w=800'
      ], timesOrdered: 177, reviews: [{ id: 'review-h8-1', author: 'DinnerPartyPro', rating: 5, comment: 'These look fantastic on my table. Very well made and easy to clean.', date: '2025-07-10' }]
    },
    {
      id: 'home-009', name: 'Tuareg Leather Floor Cushion', description: 'A hand-tooled leather pouf from Morocco.', longDescription: 'This authentic Moroccan pouf is made from genuine leather and hand-stitched with intricate Tuareg patterns. Perfect as extra seating, a footstool, or a unique side table. (Ships unstuffed).', price: 11500, originalPrice: 12500, imageUrls: [
        'https://images.unsplash.com/photo-1589997193238-552458627a6f?w=800',
        'https://images.unsplash.com/photo-1613919099457-65814a682a93?w=800',
        'https://images.unsplash.com/photo-1593113548208-88b1a2b5a198?w=800'
      ], timesOrdered: 246, reviews: [{ id: 'review-h9-1', author: 'BohoChic', rating: 5, comment: 'The leather is beautiful and the stitching is perfect. It looks so good in my living room.', date: '2025-07-08' }]
    },
    {
      id: 'home-010', name: 'Ndebele Print Table Runner', description: 'A vibrant table runner with South African Ndebele patterns.', longDescription: 'Brighten up your dining space with this colorful table runner. It features the bold, geometric patterns characteristic of Ndebele art, printed on durable, high-quality cotton.', price: 2900, originalPrice: 2900, imageUrls: [
        'https://images.unsplash.com/photo-1551843425-1a8a7c2c2f82?w=800',
        'https://images.unsplash.com/photo-1620309136936-e380e3c545b7?w=800',
        'https://images.unsplash.com/photo-1617053314959-2384a44e46a2?w=800'
      ], timesOrdered: 257, reviews: [{ id: 'review-h10-1', author: 'Entertainer', rating: 5, comment: 'Vibrant colors and great quality fabric. It really makes my table setting pop.', date: '2025-07-05' }]
    },
  ],
  "Jewelry": [
    {
      id: 'jewelry-001',
      name: 'Owngreat 12 litre double deep fryer',
      description: 'Owngetreat deep fryer is a compact and efficient kitchen appliance designed for frying a variety of foods with ease. It features a stainless steel body, adjustable temperature control, and a removable frying basket for convenient cooking and cleaning.',
      longDescription: '.',
      price: 7500,
      originalPrice: 8500,
      imageUrls: [
        '/assets/images/deep.jpeg',
        'https://images.unsplash.com/photo-1634081639910-3a5b3a65a363?w=800',
        'https://images.unsplash.com/photo-1585646143497-83a21b35c13b?w=800',
      ],
      timesOrdered: 299,
      reviews: [
        { id: 'review-j1-1', author: 'AfroChic', rating: 5, comment: 'A true statement piece! The beadwork is incredibly detailed. It\'s lightweight and comfortable to wear all day.', date: '2024-07-21' },
        { id: 'review-j1-2', author: 'GiftGiver', rating: 5, comment: 'Bought this as a gift for my sister and she was blown away. It\'s a beautiful piece of culture and art.', date: '2025-07-19' },
      ]
    },
    {
      id: 'jewelry-002',
      name: '20 litre Haier Microwave Oven',
      description: 'A modern, compact microwave oven with digital controls.',
      longDescription: 'This sleek and functional microwave oven is perfect for small kitchens. It features a digital display, easy-to-use controls, and a spacious interior for convenient cooking.',
      price: 11999,
      originalPrice: 12999,
      imageUrls: [
        '/assets/images/oven.jpeg',
        '/assets/images/oven.jpeg',
        '/assets/images/oven3.jpeg',
      ],
      timesOrdered: 255,
      reviews: [
        { id: 'review-j2-1', author: 'StylishSusan', rating: 5, comment: 'I wear these almost every day. They are simple, elegant, and go with everything. Plus, I love that they are made from recycled materials.', date: '2024-07-18' },
        { id: 'review-j2-2', author: 'ArtLover', rating: 5, comment: 'Beautifully crafted. They have a lovely weight to them and catch the light perfectly.', date: '2025-07-15' },
      ]
    },
    {
      id: 'jewelry-003', name: 'Fulani Gold Twisted Hoops', description: 'Iconic golden hoops inspired by the Fulani people of West Africa.', longDescription: 'These lightweight, oversized hoops are crafted from gold-plated brass, featuring the distinctive twisted design of Fulani jewelry. They are a bold, timeless statement of elegance and heritage.', price: 3800, originalPrice: 4000, imageUrls: [
        'https://images.unsplash.com/photo-1611591437134-4b5b88282365?w=800',
        'https://images.unsplash.com/photo-1620912189839-858850a1b654?w=800',
        'https://images.unsplash.com/photo-1617453691342-f8c6d1f9a1e3?w=800'
      ], timesOrdered: 168, reviews: [{ id: 'review-j3-1', author: 'GoldenGirl', rating: 5, comment: 'I feel so powerful when I wear these. They are surprisingly light for their size. Absolutely love them!', date: '2025-07-22' }]
    },
    {
      id: 'jewelry-004', name: 'Tuareg Silver Ring', description: 'A sterling silver ring with traditional Tuareg engravings.', longDescription: 'Handcrafted by Tuareg artisans in the Sahara, this sterling silver ring features intricate geometric patterns symbolic of the desert nomads. A solid, meaningful piece of wearable art.', price: 6200, originalPrice: 6200, imageUrls: [
        'https://images.unsplash.com/photo-1600985497269-37a4a2b56412?w=800',
        'https://images.unsplash.com/photo-1547496614-54c7283c7a9f?w=800',
        'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800'
      ], timesOrdered: 289, reviews: [{ id: 'review-j4-1', author: 'Silver_Fan', rating: 5, comment: 'The detail on this ring is incredible. It has a great weight and feels very special to wear.', date: '2025-07-20' }]
    },
    {
      id: 'jewelry-005', name: 'Cowrie Shell Choker', description: 'A beautiful choker necklace made with natural cowrie shells.', longDescription: 'This trendy yet traditional choker is made from natural cowrie shells, historically a symbol of wealth and fertility in Africa. It has an adjustable cord for a comfortable fit.', price: 1900, originalPrice: 1900, imageUrls: [
        'https://images.unsplash.com/photo-1596701918349-74d32a0a2bfb?w=800',
        'https://images.unsplash.com/photo-1582294121586-44c10705f15a?w=800',
        'https://images.unsplash.com/photo-1585646143497-83a21b35c13b?w=800'
      ], timesOrdered: 310, reviews: [{ id: 'review-j5-1', author: 'IslandVibes', rating: 5, comment: 'Perfect summer necklace. It\'s well-made and looks great layered with other pieces.', date: '2025-07-18' }]
    },
    {
      id: 'jewelry-006', name: 'Ankole Horn Cuff Bracelet', description: 'A polished cuff bracelet made from sustainably sourced Ankole cow horn.', longDescription: 'This stunning cuff is handcrafted in Uganda from the horn of the Ankole-Watusi cattle. The horn is ethically sourced as a byproduct. Each piece has a unique blend of natural colors, from cream to black.', price: 4500, originalPrice: 4800, imageUrls: [
        'https://images.unsplash.com/photo-1620912189839-858850a1b654?w=800',
        'https://images.unsplash.com/photo-1550948386-89512875a643?w=800',
        'https://images.unsplash.com/photo-1611652033952-b05425211933?w=800'
      ], timesOrdered: 289, reviews: [{ id: 'review-j6-1', author: 'EcoWarrior', rating: 5, comment: 'So beautiful and I love that it\'s a sustainable product. The finish is like glass. A real conversation piece.', date: '2025-07-16' }]
    },
    {
      id: 'jewelry-007', name: 'Zulu Beaded Hoop Earrings', description: 'Small hoop earrings adorned with intricate Zulu beadwork.', longDescription: 'These vibrant hoop earrings feature tiny glass beads meticulously woven in traditional Zulu patterns. They are lightweight, colorful, and perfect for adding a touch of South African artistry to your look.', price: 2800, originalPrice: 2800, imageUrls: [
        'https://images.unsplash.com/photo-1599387737838-66a151b782b4?w=800',
        'https://images.unsplash.com/photo-1634081639910-3a5b3a65a363?w=800',
        'https://images.unsplash.com/photo-1582294121586-44c10705f15a?w=800'
      ], timesOrdered: 189, reviews: [{ id: 'review-j7-1', author: 'BeadLover', rating: 5, comment: 'The beadwork is so tiny and perfect! I\'m amazed at the skill. They are my new favorite earrings.', date: '2025-07-14' }]
    },
    {
      id: 'jewelry-008', name: 'Recycled Paper Bead Bracelet', description: 'A colorful, stretchable bracelet made from rolled recycled paper beads.', longDescription: 'Handmade by women in Ugandan co-ops, each bead on this bracelet is carefully rolled and varnished from recycled paper. A beautiful example of sustainable, empowering art.', price: 1500, originalPrice: 1500, imageUrls: [
        'https://images.unsplash.com/photo-1620786259049-775b310438a0?w=800',
        'https://images.unsplash.com/photo-1621949172421-9875de9a74c7?w=800',
        'https://images.unsplash.com/photo-1599387737838-66a151b782b4?w=800'
      ], timesOrdered: 257, reviews: [{ id: 'review-j8-1', author: 'GreenQueen', rating: 5, comment: 'Love the story behind this bracelet, and it\'s so colorful and fun to wear. A great, affordable gift.', date: '2025-07-11' }]
    },
    {
      id: 'jewelry-009', name: 'Berber Enamel Pendant', description: 'A silver and enamel pendant from the Berber artisans of Morocco.', longDescription: 'This striking pendant features the intricate silverwork and vibrant enamel detailing characteristic of Berber jewelry. A powerful amulet and a beautiful piece of North African history.', price: 7500, originalPrice: 8000, imageUrls: [
        'https://images.unsplash.com/photo-1585646143497-83a21b35c13b?w=800',
        'https://images.unsplash.com/photo-1600985497269-37a4a2b56412?w=800',
        'https://images.unsplash.com/photo-1547496614-54c7283c7a9f?w=800'
      ], timesOrdered: 249, reviews: [{ id: 'review-j9-1', author: 'HistoryBuff', rating: 5, comment: 'A museum-quality piece. The craftsmanship is stunning. It feels amazing to wear.', date: '2025-07-10' }]
    },
    {
      id: 'jewelry-010', name: 'Africa Map Brass Necklace', description: 'A simple and elegant necklace with a brass pendant of the African continent.', longDescription: 'Show your love for the motherland with this chic necklace. The pendant is cut from polished brass and hangs on a delicate, adjustable chain. A perfect everyday piece.', price: 2200, originalPrice: 2200, imageUrls: [
        'https://images.unsplash.com/photo-1611652033952-b05425211933?w=800',
        'https://images.unsplash.com/photo-1617453691342-f8c6d1f9a1e3?w=800',
        'https://images.unsplash.com/photo-1611591437134-4b5b88282365?w=800'
      ], timesOrdered: 322, reviews: [{ id: 'review-j10-1', author: 'ProudlyAfrican', rating: 5, comment: 'Simple, elegant, and meaningful. I haven\'t taken it off since I got it.', date: '2025-07-08' }]
    },
   ],
   "Art & Crafts": [
    {
      id: 'art-001',
      name: 'Hand-Carved Soapstone Giraffe',
      description: 'An elegant giraffe sculpture, hand-carved from Kisii soapstone.',
      longDescription: 'This graceful giraffe sculpture is carved by artisans in Tabaka, Kenya, from a single piece of soapstone. The stone\'s natural colors are brought out through a meticulous polishing process, making each piece unique.',
      price: 3699,
      originalPrice: 3800,
      imageUrls: [
        'https://images.unsplash.com/photo-1563236780-a6a964eac221?w=800',
        'https://images.unsplash.com/photo-1574781488226-5d614833a695?w=800',
        'https://images.unsplash.com/photo-1598235122244-3652a926315a?w=800',
      ],
      timesOrdered: 286,
      reviews: [
        { id: 'review-a1-1', author: 'CollectorKen', rating: 5, comment: 'The carving is exquisite and the finish is so smooth. A beautiful addition to my collection of African art.', date: '2025-07-22' },
        { id: 'review-a1-2', author: 'Grace P.', rating: 5, comment: 'I bought this as a housewarming gift, and it was a huge hit. It\'s a very elegant and authentic piece.', date: '2025-07-20' },
      ]
    },
    {
      id: 'art-002',
      name: 'Faceless Monalisa painting',
      description: 'A vibrant and whimsical painting of Monalisa.',
      longDescription: 'This original Monalisa painting is characterized by its brilliant and cartoonish figures. Painted on canvas, this joyful depiction Monalisa will brighten any room.',
      price: 8499,
      originalPrice: 9000,
      imageUrls: [
        '/assets/images/lisa.jpg',
        '/assets/images/monalisa.jpg',
        '/assets/images/monalisa1.jpg',
      ],
      timesOrdered: 409,
      reviews: [
        { id: 'review-a2-1', author: 'David Matasi', rating: 5, comment: 'The colors are so vivid and happy! It makes me smile every time I look at it. Arrived safely and well-packaged.', date: '2025-08-17' },
        { id: 'review-a2-2', author: 'Mike V.', rating: 5, comment: 'A fantastic piece of art that brings so much life to my office. The detail is wonderful.', date: '2025-08-19' },
      ]
    },
    {
      id: 'art-003', name: 'Makonde Ebony Sculpture', description: 'An intricate "Tree of Life" sculpture carved from African Blackwood.', longDescription: 'This traditional Makonde sculpture from Tanzania represents the interconnectedness of family and community. Intricately carved from a single piece of ebony, it is a powerful and beautiful work of art.', price: 18000, originalPrice: 18000, imageUrls: [
        'https://images.unsplash.com/photo-1616431955686-cb12a6d71a17?w=800',
        'https://images.unsplash.com/photo-1518997232213-991b585c5def?w=800',
        'https://images.unsplash.com/photo-1582294121586-44c10705f15a?w=800'
      ], timesOrdered: 175, reviews: [{ id: 'review-a3-1', author: 'ArtCollector', rating: 5, comment: 'A masterpiece. The level of detail is astounding. It is the pride of my collection.', date: '2025-07-21' }]
    },
    {
      id: 'art-004', name: 'Shona Stone Bird', description: 'A stylized bird sculpture from Zimbabwe, carved from serpentine stone.', longDescription: 'Shona sculptures are known for their minimalist, elegant forms. This beautiful bird, carved from rich green serpentine stone and polished to a high shine, embodies that spirit perfectly.', price: 6500, originalPrice: 7000, imageUrls: [
        'https://images.unsplash.com/photo-1598235122244-3652a926315a?w=800',
        'https://images.unsplash.com/photo-1563236780-a6a964eac221?w=800',
        'https://images.unsplash.com/photo-1574781488226-5d614833a695?w=800'
      ], timesOrdered: 222, reviews: [{ id: 'review-a4-1', author: 'GracefulDecor', rating: 5, comment: 'So simple and so elegant. The stone is beautiful and has a lovely, cool feel. It looks perfect on my bookshelf.', date: '2024-07-19' }]
    },
    {
      id: 'art-005', name: 'Yoruba Ibeji Twin Figures', description: 'A pair of carved wooden figures representing twins, from Nigeria.', longDescription: 'In Yoruba culture, twins are considered special. These Ibeji figures are spiritual objects created to honor them. Carved from wood and adorned with beads, they are a significant piece of cultural heritage.', price: 9800, originalPrice: 9800, imageUrls: [
        'https://images.unsplash.com/photo-1518997232213-991b585c5def?w=800',
        'https://images.unsplash.com/photo-1616431955686-cb12a6d71a17?w=800',
        'https://images.unsplash.com/photo-1582294121586-44c10705f15a?w=800'
      ], timesOrdered: 250, reviews: [{ id: 'review-a5-1', author: 'CultureConnect', rating: 5, comment: 'These figures are so powerful and have such a presence. A very meaningful purchase for me.', date: '2025-07-18' }]
    },
    {
      id: 'art-006', name: 'Telephone Wire Bowl', description: 'A small, vibrant bowl woven from recycled telephone wire by Zulu artisans.', longDescription: 'A beautiful fusion of traditional weaving techniques and modern materials. This colorful bowl is a testament to the ingenuity of Zulu artisans in South Africa. Perfect as a catch-all for keys or jewelry.', price: 2800, originalPrice: 3000, imageUrls: [
        'https://images.unsplash.com/photo-1550948386-89512875a643?w=800',
        'https://images.unsplash.com/photo-1599187825597-4054b011403b?w=800',
        'https://images.unsplash.com/photo-1620912189839-858850a1b654?w=800'
      ], timesOrdered: 135, reviews: [{ id: 'review-a6-1', author: 'EcoChic', rating: 5, comment: 'So unique and colorful! I love that it\'s made from recycled materials. It\'s a perfect little pop of color on my dresser.', date: '2025-07-16' }]
    },
    {
      id: 'art-007', name: 'Ashanti Fertility Doll', description: 'A traditional "Akua\'ba" doll from the Ashanti people of Ghana.', longDescription: 'Carved from wood with a large, disc-like head, these dolls are traditional symbols of fertility and good fortune. A beautiful and culturally significant decorative object.', price: 4800, originalPrice: 4800, imageUrls: [
        'https://images.unsplash.com/photo-1518997232213-991b585c5def?w=800',
        'https://images.unsplash.com/photo-1563236780-a6a964eac221?w=800',
        'https://images.unsplash.com/photo-1616431955686-cb12a6d71a17?w=800'
      ], timesOrdered: 70, reviews: [{ id: 'review-a7-1', author: 'GlobalCollector', rating: 5, comment: 'A classic piece of African art. The carving is authentic and it has a wonderful energy.', date: '2025-07-14' }]
    },
    {
      id: 'art-008', name: 'Papyrus Painting', description: 'A painting on genuine papyrus depicting ancient Egyptian scenes.', longDescription: 'This artwork is hand-painted on authentic papyrus, made from the papyrus plant as it was in ancient Egypt. It features classic scenes of pharaohs and gods, bringing a piece of ancient history to your home.', price: 5500, originalPrice: 6000, imageUrls: [
        'https://images.unsplash.com/photo-1543784184-1c6e156407db?w=800',
        'https://images.unsplash.com/photo-1604462489955-a05a18ac4de5?w=800',
        'https://images.unsplash.com/photo-1569084051212-4a3a30f78137?w=800'
      ], timesOrdered: 50, reviews: [{ id: 'review-a8-1', author: 'HistoryLover', rating: 5, comment: 'Fascinating to see and touch real papyrus. The painting is well done. It looks amazing framed on my wall.', date: '2025-07-12' }]
    },
    {
      id: 'art-009', name: 'Dan Mask', description: 'A carved wooden ceremonial mask from the Dan people of Liberia/Côte d\'Ivoire.', longDescription: 'This replica Dan mask, known for its fine features and polished finish, represents a spirit of the forest. Carved from local wood, it is a powerful example of West African sculptural art.', price: 11000, originalPrice: 11000, imageUrls: [
        'https://images.unsplash.com/photo-1524210214436-15682ab574bb?w=800',
        'https://images.unsplash.com/photo-1525287236833-360157077884?w=800',
        'https://images.unsplash.com/photo-1518997232213-991b585c5def?w=800'
      ], timesOrdered: 300, reviews: [{ id: 'review-a9-1', author: 'ArtEnthusiast', rating: 5, comment: 'The craftsmanship is superb. The smooth finish and expressive features are captivating. A very powerful piece.', date: '2025-07-10' }]
    },
    {
      id: 'art-010', name: 'Banana Fiber Nativity Scene', description: 'A unique nativity scene handcrafted from banana fibers in Kenya.', longDescription: 'This charming, eco-friendly nativity set is meticulously crafted from dried banana leaves and fibers. A wonderful and unique addition to your holiday decorations.', price: 4200, originalPrice: 4200, imageUrls: [
        'https://images.unsplash.com/photo-1576483515152-870a2d65a25e?w=800',
        'https://images.unsplash.com/photo-1608394988939-858850a1b654?w=800',
        'https://images.unsplash.com/photo-1563236780-a6a964eac221?w=800'
      ], timesOrdered: 170, reviews: [{ id: 'review-a10-1', author: 'HolidaySpirit', rating: 5, comment: 'I\'ve never seen anything like it! So beautifully made and a very special piece for our family Christmas.', date: '2025-07-08' }]
    },
   ],
   "Health & Beauty": [
    {
      id: 'beauty-001',
      name: 'Raw Unrefined Shea Butter',
      description: '100% pure, unrefined shea butter sourced from Ghana.',
      longDescription: 'Nourish your skin and hair with the healing power of raw shea butter. Rich in vitamins A, E, and F, it deeply moisturizes, soothes irritation, and improves skin elasticity. Perfect for all skin types.',
      price: 1499,
      originalPrice: 1500,
      imageUrls: [
        'https://images.unsplash.com/photo-1560961913-b29a75cb1812?w=800',
        'https://images.unsplash.com/photo-1554922589-5cf27a9dea91?w=800',
        'https://images.unsplash.com/photo-1596701918349-74d32a0a2bfb?w=800'
      ],
      timesOrdered: 285,
      reviews: [
        { id: 'review-b1-1', author: 'NaturalBeauty', rating: 5, comment: 'This is the real deal. So creamy and moisturizing. It has done wonders for my dry skin and my daughter\'s eczema.', date: '2025-07-21' },
        { id: 'review-b1-2', author: 'Chris P.', rating: 5, comment: 'Amazing product. I use it for my hair and beard. A little goes a long way.', date: '2025-07-17' },
      ]
    },
    {
      id: 'beauty-002',
      name: 'Authentic African Black Soap',
      description: 'Traditional black soap made with cocoa pods and shea butter.',
      longDescription: 'Experience a deep, clarifying cleanse with authentic African Black Soap. Renowned for its ability to fight acne, reduce blemishes, and gently exfoliate, this soap leaves your skin feeling clean and refreshed without stripping its natural oils.',
      price: 1299,
      originalPrice: 1400,
      imageUrls: [
        'https://images.unsplash.com/photo-1601056263911-7383792f5899?w=800',
        'https://images.unsplash.com/photo-1616431955686-cb12a6d71a17?w=800',
        'https://images.unsplash.com/photo-1596701918349-74d32a0a2bfb?w=800'
      ],
      timesOrdered: 120,
      reviews: [
        { id: 'review-b2-1', author: 'ClearSkin', rating: 5, comment: 'This soap has been a game-changer for my acne-prone skin. My face feels so clean and my breakouts have reduced significantly.', date: '2025-07-22' },
        { id: 'review-b2-2', author: 'Sam D.', rating: 4, comment: 'Very effective, but make sure to moisturize well after using as it can be a bit drying. It lathers up really well.', date: '2025-07-15' },
      ]
    },
    {
      id: 'beauty-003', name: 'Qasil Powder', description: 'A versatile, cleansing leaf powder from Somalia.', longDescription: 'Used by Somali women for centuries, Qasil powder is a natural cleanser and mask. It gently exfoliates, evens skin tone, and clarifies the scalp. Just mix with water to form a paste.', price: 1800, originalPrice: 1800, imageUrls: [
        'https://images.unsplash.com/photo-1560961913-b29a75cb1812?w=800',
        'https://images.unsplash.com/photo-1554922589-5cf27a9dea91?w=800',
        'https://images.unsplash.com/photo-1601056263911-7383792f5899?w=800'
      ], timesOrdered: 200, reviews: [{ id: 'review-b3-1', author: 'SkincareGuru', rating: 5, comment: 'My skin has never felt so clean and soft. It\'s amazing as a face mask. A new holy grail product for me!', date: '2025-07-21' }]
    },
    {
      id: 'beauty-004', name: 'Marula Oil', description: 'Cold-pressed, virgin marula oil from Namibia.', longDescription: 'This luxurious, fast-absorbing oil is packed with antioxidants and omega fatty acids. It hydrates skin, reduces redness, and adds shine to hair without feeling greasy. A true super-food for your skin.', price: 2800, originalPrice: 3200, imageUrls: [
        'https://images.unsplash.com/photo-1554922589-5cf27a9dea91?w=800',
        'https://images.unsplash.com/photo-1560961913-b29a75cb1812?w=800',
        'https://images.unsplash.com/photo-1616431955686-cb12a6d71a17?w=800'
      ], timesOrdered: 170, reviews: [{ id: 'review-b4-1', author: 'GlowUp', rating: 5, comment: 'This oil feels so light but is incredibly moisturizing. My skin has a beautiful glow after using it for a week.', date: '2025-07-20' }]
    },
    {
      id: 'beauty-005', name: 'Rooibos Infused Body Butter', description: 'A rich body butter infused with antioxidant-rich South African rooibos.', longDescription: 'Soothe and protect your skin with this creamy body butter. It combines the moisturizing power of shea butter with the anti-aging benefits of rooibos tea extract.', price: 2200, originalPrice: 2200, imageUrls: [
        'https://images.unsplash.com/photo-1560961913-b29a75cb1812?w=800',
        'https://images.unsplash.com/photo-1554922589-5cf27a9dea91?w=800',
        'https://images.unsplash.com/photo-1601056263911-7383792f5899?w=800'
      ], timesOrdered: 147, reviews: [{ id: 'review-b5-1', author: 'Pampered', rating: 5, comment: 'Smells amazing and makes my skin feel so soft and hydrated all day. Not greasy at all.', date: '2025-07-18' }]
    },
    {
      id: 'beauty-006', name: 'Chebe Hair Growth Powder', description: 'A traditional hair-strengthening powder from Chad.', longDescription: 'Chebe powder is the secret to the incredibly long hair of the women in Chad. Mix it with your favorite oil or conditioner to create a paste that strengthens hair, prevents breakage, and promotes length retention.', price: 2500, originalPrice: 2500, imageUrls: [
        'https://images.unsplash.com/photo-1601056263911-7383792f5899?w=800',
        'https://images.unsplash.com/photo-1560961913-b29a75cb1812?w=800',
        'https://images.unsplash.com/photo-1554922589-5cf27a9dea91?w=800'
      ], timesOrdered: 220, reviews: [{ id: 'review-b6-1', author: 'LongHairGoals', rating: 5, comment: 'I\'ve noticed so much less shedding since I started using Chebe. My hair feels stronger and healthier.', date: '2025-07-16' }]
    },
    {
      id: 'beauty-007', name: 'Baobab Oil', description: '100% pure, cold-pressed baobab seed oil.', longDescription: 'Known in Africa as the "Tree of Life," the baobab provides this nourishing oil rich in vitamins. It helps improve skin elasticity, regenerate cells, and heal dry, cracked skin.', price: 2600, originalPrice: 2800, imageUrls: [
        'https://images.unsplash.com/photo-1554922589-5cf27a9dea91?w=800',
        'https://images.unsplash.com/photo-1560961913-b29a75cb1812?w=800',
        'https://images.unsplash.com/photo-1616431955686-cb12a6d71a17?w=800'
      ], timesOrdered: 210, reviews: [{ id: 'review-b7-1', author: 'SensitiveSkin', rating: 5, comment: 'This oil is amazing for my sensitive skin. It\'s very gentle and has helped with my dry patches.', date: '2025-07-15' }]
    },
    {
      id: 'beauty-008', name: 'African Net Exfoliating Sponge', description: 'A long, durable exfoliating net used in West Africa.', longDescription: 'Ditch your loofah for this incredible exfoliating sponge. It lathers beautifully, dries quickly, and is long enough to easily scrub your back. It exfoliates dead skin, leaving you smooth all over.', price: 1000, originalPrice: 1000, imageUrls: [
        'https://images.unsplash.com/photo-1601056263911-7383792f5899?w=800',
        'https://images.unsplash.com/photo-1616431955686-cb12a6d71a17?w=800',
        'https://images.unsplash.com/photo-1560961913-b29a75cb1812?w=800'
      ], timesOrdered: 120, reviews: [{ id: 'review-b8-1', author: 'SmoothOperator', rating: 5, comment: 'I will never go back to a regular loofah. This thing is a miracle worker. My skin has never been so smooth!', date: '2025-07-12' }]
    },
    {
      id: 'beauty-009', name: 'Kalahari Melon Seed Oil', description: 'A lightweight, detoxifying oil for oily and acne-prone skin.', longDescription: 'This non-comedogenic oil from the Kalahari desert is rich in linoleic acid, which helps to unclog pores and balance sebum production. It absorbs quickly, leaving skin feeling balanced and hydrated.', price: 2400, originalPrice: 2400, imageUrls: [
        'https://images.unsplash.com/photo-1554922589-5cf27a9dea91?w=800',
        'https://images.unsplash.com/photo-1560961913-b29a75cb1812?w=800',
        'https://images.unsplash.com/photo-1616431955686-cb12a6d71a17?w=800'
      ], timesOrdered: 163, reviews: [{ id: 'review-b9-1', author: 'OilySkinStruggles', rating: 5, comment: 'Finally, an oil that doesn\'t make me break out! It has actually helped reduce my blackheads and control my shine.', date: '2025-07-10' }]
    },
    {
      id: 'beauty-010', name: 'Frankincense Resin Incense', description: 'Raw frankincense resin from the Horn of Africa for burning.', longDescription: 'Purify your space with the sacred smoke of frankincense resin. Used for millennia in ceremonies, it has a calming, grounding aroma. Burn on a charcoal disc for the best experience.', price: 1600, originalPrice: 1600, imageUrls: [
        'https://images.unsplash.com/photo-1560961913-b29a75cb1812?w=800',
        'https://images.unsplash.com/photo-1601056263911-7383792f5899?w=800',
        'https://images.unsplash.com/photo-1554922589-5cf27a9dea91?w=800'
      ], timesOrdered: 190, reviews: [{ id: 'review-b10-1', author: 'ZenMaster', rating: 5, comment: 'The scent is absolutely divine and so calming. Much better than stick incense. Very high quality resin.', date: '2025-07-09' }]
    },
   ],
   "Bags & Accessories": [
    {
      id: 'acc-001',
      name: 'Kente Cloth Laptop Sleeve',
      description: 'A padded laptop sleeve featuring the iconic Kente cloth pattern from Ghana.',
      longDescription: 'Protect your laptop in style with this vibrant Kente cloth sleeve. The soft, padded interior guards against scratches and bumps, while the authentic woven exterior makes a bold cultural statement.',
      price: 3200,
      originalPrice: 3200,
      imageUrls: [
        'https://images.unsplash.com/photo-1512101957429-39b0d23c8a99?w=800',
        'https://images.unsplash.com/photo-1579301258942-824f9b8b321a?w=800',
        'https://images.unsplash.com/photo-1594938382329-87a177558655?w=800',
      ],
      timesOrdered: 250,
      reviews: [
        { id: 'review-acc1-1', author: 'Techie Tom', rating: 5, comment: 'Fits my laptop perfectly and looks amazing. The padding is thick enough to feel protective. Great conversation starter at the office!', date: '2025-07-18' },
        { id: 'review-acc1-2', author: 'StudentLife', rating: 5, comment: 'I love this sleeve! The colors are so bright and it makes my boring laptop look cool.', date: '2025-07-11' },
      ]
    },
    {
      id: 'acc-002',
      name: 'Leather and Kitenge Tote Bag',
      description: 'A stylish and durable tote bag combining genuine leather with colorful Kitenge fabric.',
      longDescription: 'This versatile tote is your perfect companion, from the market to the office. It features a sturdy leather base and handles, a spacious interior, and a vibrant Kitenge fabric panel that adds a pop of color and personality.',
      price: 7500,
      originalPrice: 8200,
      imageUrls: [
        'https://images.unsplash.com/photo-1590820088924-2c70094054a8?w=800',
        'https://images.unsplash.com/photo-1592328775213-9a3a693ce480?w=800',
        'https://images.unsplash.com/photo-1621336143335-3372c2121067?w=800',
      ],
      timesOrdered: 290,
      reviews: [
        { id: 'review-acc2-1', author: 'Fashionista_Flo', rating: 5, comment: 'My new favorite bag. It\'s beautifully made, spacious, and the combination of leather and Kitenge is just stunning.', date: '2024-07-21' },
        { id: 'review-acc2-2', author: 'Brenda K.', rating: 5, comment: 'This bag is a work of art. The quality is top-notch and it\'s the perfect size for all my essentials.', date: '2025-07-18' },
      ]
    },
    {
      id: 'acc-003', name: 'Sisal & Leather Backpack', description: 'A unique backpack woven from sisal with leather accents.', longDescription: 'This sturdy and stylish backpack is perfect for everyday use. Handwoven from durable sisal fiber and finished with genuine leather straps and details, it combines natural textures with expert craftsmanship.', price: 8800, originalPrice: 9500, imageUrls: [
        'https://images.unsplash.com/photo-1599187825597-4054b011403b?w=800',
        'https://images.unsplash.com/photo-1550948386-89512875a643?w=800',
        'https://images.unsplash.com/photo-1620912189839-858850a1b654?w=800'
      ], timesOrdered: 370, reviews: [{ id: 'review-acc3-1', author: 'UrbanExplorer', rating: 5, comment: 'Such a cool and unique backpack. It\'s very sturdy and surprisingly spacious. I get compliments on it all the time.', date: '2025-07-20' }]
    },
    {
      id: 'acc-004', name: 'Beaded Leather Belt', description: 'A handmade leather belt featuring colorful Maasai beadwork.', longDescription: 'Elevate your jeans or dress with this beautiful, handcrafted belt. The genuine leather is adorned with intricate, hand-stitched beadwork in traditional Maasai patterns, finished with a solid brass buckle.', price: 5800, originalPrice: 5800, imageUrls: [
        'https://images.unsplash.com/photo-1634081639910-3a5b3a65a363?w=800',
        'https://images.unsplash.com/photo-1599387737838-66a151b782b4?w=800',
        'https://images.unsplash.com/photo-1585646143497-83a21b35c13b?w=800'
      ], timesOrdered: 345, reviews: [{ id: 'review-acc4-1', author: 'Style Maven', rating: 5, comment: 'The craftsmanship is incredible. A stunning, high-quality belt that makes any outfit special.', date: '2025-07-19' }]
    },
    {
      id: 'acc-005', name: 'Ankara Print Fabric Fan', description: 'A beautiful and functional folding fan made with Ankara fabric.', longDescription: 'Stay cool in style with this vibrant folding fan. Constructed with a sturdy wooden frame and covered in bold Ankara print fabric, it\'s a practical and beautiful accessory for warm days.', price: 1500, originalPrice: 1500, imageUrls: [
        'https://images.unsplash.com/photo-1621336143335-3372c2121067?w=800',
        'https://images.unsplash.com/photo-1595134653554-227d8cf12e35?w=800',
        'https://images.unsplash.com/photo-1597089439121-515f4e0a724a?w=800'
      ], timesOrdered: 302, reviews: [{ id: 'review-acc5-1', author: 'SunnyD', rating: 5, comment: 'So pretty and works great! I keep it in my purse all the time. The fabric is beautiful.', date: '2025-07-17' }]
    },
    {
      id: 'acc-006', name: 'Bogolan Passport Holder', description: 'A stylish passport holder made from authentic mudcloth.', longDescription: 'Travel in style while protecting your passport. This holder is made from genuine Malian mudcloth, with a durable lining and slots for your passport and travel cards.', price: 2900, originalPrice: 2900, imageUrls: [
        'https://images.unsplash.com/photo-1622372033333-dc8b5c5a278d?w=800',
        'https://images.unsplash.com/photo-1621949172421-9875de9a74c7?w=800',
        'https://images.unsplash.com/photo-1620786259049-775b310438a0?w=800'
      ], timesOrdered: 220, reviews: [{ id: 'review-acc6-1', author: 'Globetrotter', rating: 5, comment: 'Love this! It\'s so unique and well-made. Makes finding my passport in my bag so much easier.', date: '2025-07-15' }]
    },
    {
      id: 'acc-007', name: 'Recycled Brass Keychain', description: 'A heavy, polished keychain with an Adinkra symbol.', longDescription: 'Crafted from recycled brass in Nairobi, this keychain features a powerful Adinkra symbol from Ghana (styles vary). A small but meaningful piece of art to carry with you every day.', price: 1200, originalPrice: 1200, imageUrls: [
        'https://images.unsplash.com/photo-1617453691342-f8c6d1f9a1e3?w=800',
        'https://images.unsplash.com/photo-1611652033952-b05425211933?w=800',
        'https://images.unsplash.com/photo-1611591437134-4b5b88282365?w=800'
      ], timesOrdered: 126, reviews: [{ id: 'review-acc7-1', author: 'Chris', rating: 5, comment: 'Great quality. Has a nice weight to it. A cool, subtle way to carry some heritage.', date: '2025-07-14' }]
    },
    {
      id: 'acc-008', name: 'Ankole Horn Bottle Opener', description: 'A sleek bottle opener with a handle made of Ankole horn.', longDescription: 'This elegant bottle opener features a stainless steel head and a handle crafted from ethically-sourced Ankole horn. Each handle has a unique pattern, making it a sophisticated addition to any home bar.', price: 3500, originalPrice: 3500, imageUrls: [
        'https://images.unsplash.com/photo-1620912189839-858850a1b654?w=800',
        'https://images.unsplash.com/photo-1550948386-89512875a643?w=800',
        'https://images.unsplash.com/photo-1610714150249-93e5a5f45209?w=800'
      ], timesOrdered: 70, reviews: [{ id: 'review-acc8-1', author: 'HomeBarHero', rating: 5, comment: 'A beautiful and functional piece. Looks so much classier than a regular bottle opener.', date: '2025-07-12' }]
    },
    {
      id: 'acc-009', name: 'Woven Raffia Clutch', description: 'A chic, handwoven clutch bag made from natural raffia.', longDescription: 'Perfect for a summer evening, this clutch is woven from Madagascan raffia palm, featuring a simple, elegant design, a secure closure, and a lined interior.', price: 4200, originalPrice: 4500, imageUrls: [
        'https://images.unsplash.com/photo-1599187825597-4054b011403b?w=800',
        'https://images.unsplash.com/photo-1550948386-89512875a643?w=800',
        'https://images.unsplash.com/photo-1621336143335-3372c2121067?w=800'
      ], timesOrdered: 180, reviews: [{ id: 'review-acc9-1', author: 'SummerStyle', rating: 5, comment: 'My go-to summer bag. It\'s the perfect size and the natural texture is so chic.', date: '2025-07-11' }]
    },
    {
      id: 'acc-010', name: 'Shweshwe Sunglass Case', description: 'A soft, padded case for sunglasses in vibrant Shweshwe fabric.', longDescription: 'Protect your sunglasses with this colorful and soft case. Made from authentic South African Shweshwe fabric with a padded lining, it keeps your glasses safe from scratches in style.', price: 1600, originalPrice: 1600, imageUrls: [
        'https://images.unsplash.com/photo-1551843425-1a8a7c2c2f82?w=800',
        'https://images.unsplash.com/photo-1620309136936-e380e3c545b7?w=800',
        'https://images.unsplash.com/photo-1617053314959-2384a44e46a2?w=800'
      ], timesOrdered: 270, reviews: [{ id: 'review-acc10-1', author: 'FourEyes', rating: 5, comment: 'So much cuter than a boring black case. The fabric is lovely and it feels protective.', date: '2025-07-09' }]
    },
   ],
   "Footwear": [
    {
      id: 'shoes-001',
      name: 'Men\'s Beaded Leather Sandals',
      description: 'Handcrafted leather sandals with traditional Maasai beadwork.',
      longDescription: 'Step out in style and comfort with these unique leather sandals. Featuring a durable sole and soft leather straps adorned with intricate beadwork, they are a testament to skilled artisanship. Perfect for warm weather.',
      price: 5499,
      originalPrice: 5800,
      imageUrls: [
        'https://images.unsplash.com/photo-1562273246-885449e802c0?w=800',
        'https://images.unsplash.com/photo-1605812836263-8d4512a8449c?w=800',
        'https://images.unsplash.com/photo-1603191656209-9133f324c153?w=800',
      ],
      timesOrdered: 180,
      reviews: [
        { id: 'review-s1-1', author: 'Traveler_Dave', rating: 5, comment: 'These are the best sandals I\'ve ever owned. So comfortable and they look incredible. The beadwork is amazing.', date: '2025-07-21' },
        { id: 'review-s1-2', author: 'Ben Carter', rating: 4, comment: 'Great sandals. Took a day to break in the leather, but now they are super comfortable. Very well made.', date: '2025-07-16' },
      ]
    },
    {
      id: 'shoes-002', name: 'Women\'s Kitenge Print Espadrilles', description: 'Comfortable and stylish espadrilles covered in vibrant Kitenge fabric.', longDescription: 'These handmade espadrilles are the perfect mix of comfort and style. They feature a classic jute rope sole and a vibrant, colorful Kitenge fabric upper, bringing a touch of African sunshine to your step.', price: 4800, originalPrice: 4800, imageUrls: [
        'https://images.unsplash.com/photo-1617053314959-2384a44e46a2?w=800',
        'https://images.unsplash.com/photo-1588185968037-353d7123933c?w=800',
        'https://images.unsplash.com/photo-1599827827055-66760591f24a?w=800'
      ], timesOrdered: 250, reviews: [{ id: 'review-s2-1', author: 'ColorLover', rating: 5, comment: 'So comfy and the pattern is beautiful. I get so many compliments whenever I wear them.', date: '2025-07-22' }]
    },
    {
      id: 'shoes-003', name: 'Handwoven Raffia Loafers', description: 'Unisex loafers handwoven from natural raffia palm.', longDescription: 'These breathable and stylish loafers are meticulously woven from raffia for a unique, textured look. They are lightweight, flexible, and perfect for a relaxed, sophisticated style in warm weather.', price: 6500, originalPrice: 7000, imageUrls: [
        'https://images.unsplash.com/photo-1599187825597-4054b011403b?w=800',
        'https://images.unsplash.com/photo-1550948386-89512875a643?w=800',
        'https://images.unsplash.com/photo-1620912189839-858850a1b654?w=800'
      ], timesOrdered: 220, reviews: [{ id: 'review-s3-1', author: 'EuroStyle', rating: 5, comment: 'Incredibly chic and comfortable. They mold to your feet. Perfect for my trip to the coast.', date: '2025-07-20' }]
    },
    {
      id: 'shoes-004', name: 'Tire Sole "Ten Thousand Toes" Sandals', description: 'Durable and eco-friendly sandals made from recycled car tires.', longDescription: 'Known locally as "ten thousand toes" for their durability, these sandals are an iconic piece of Kenyan ingenuity. The sole is cut from a recycled tire and the straps are made of sturdy leather. Incredibly long-lasting.', price: 3200, originalPrice: 3200, imageUrls: [
        'https://images.unsplash.com/photo-1562273246-885449e802c0?w=800',
        'https://images.unsplash.com/photo-1605812836263-8d4512a8449c?w=800',
        'https://images.unsplash.com/photo-1603191656209-9133f324c153?w=800'
      ], timesOrdered: 150, reviews: [{ id: 'review-s4-1', author: 'EcoConscious', rating: 5, comment: 'These are indestructible! And it feels great to wear something recycled. Surprisingly comfortable too.', date: '2025-07-18' }]
    },
    {
      id: 'shoes-005', name: 'Moroccan Babouche Slippers', description: 'Soft leather slippers, handmade in Marrakech.', longDescription: 'These traditional Moroccan babouches are made from incredibly soft, supple sheepskin leather that molds to your feet. Perfect for comfortable and stylish lounging at home.', price: 4500, originalPrice: 5000, imageUrls: [
        'https://images.unsplash.com/photo-1589997193238-552458627a6f?w=800',
        'https://images.unsplash.com/photo-1613919099457-65814a682a93?w=800',
        'https://images.unsplash.com/photo-1593113548208-88b1a2b5a198?w=800'
      ], timesOrdered: 120, reviews: [{ id: 'review-s5-1', author: 'HomeBody', rating: 5, comment: 'Like walking on clouds. The leather is so soft. A little bit of everyday luxury.', date: '2025-07-15' }]
    },
    {
      id: 'shoes-006', name: 'Ankara Print High-Top Sneakers', description: 'Classic high-top sneakers with bold Ankara fabric panels.', longDescription: 'Stand out from the crowd with these unique sneakers. They combine the classic high-top silhouette with vibrant, eye-catching Ankara print panels for a cool, Afro-urban look.', price: 7200, originalPrice: 7200, imageUrls: [
        'https://images.unsplash.com/photo-1621336143335-3372c2121067?w=800',
        'https://images.unsplash.com/photo-1595134653554-227d8cf12e35?w=800',
        'https://images.unsplash.com/photo-1597089439121-515f4e0a724a?w=800'
      ], timesOrdered: 197, reviews: [{ id: 'review-s6-1', author: 'SneakerHead', rating: 5, comment: 'Awesome shoes! The print is sick and they are really well-made and comfortable.', date: '2025-07-14' }]
    },
    {
      id: 'shoes-007', name: 'Women\'s Beaded Thong Sandals', description: 'Elegant flat sandals with fine beadwork.', longDescription: 'These simple yet beautiful thong sandals are elevated by intricate, hand-stitched beadwork on the leather straps. They are perfect for a casual day out or a beach wedding.', price: 4200, originalPrice: 4200, imageUrls: [
        'https://images.unsplash.com/photo-1634081639910-3a5b3a65a363?w=800',
        'https://images.unsplash.com/photo-1599387737838-66a151b782b4?w=800',
        'https://images.unsplash.com/photo-1585646143497-83a21b35c13b?w=800'
      ], timesOrdered: 150, reviews: [{ id: 'review-s7-1', author: 'Sunny', rating: 5, comment: 'My favorite summer sandals. They are so pretty and surprisingly comfortable for walking.', date: '2025-07-12' }]
    },
    {
      id: 'shoes-008', name: 'Suede "Veldskoen" Desert Boots', description: 'The original South African desert boot, made from durable suede.', longDescription: 'The iconic "Vellie" is a South African staple. Made from tough yet soft suede with a durable rubber sole, these boots are built for comfort and to last a lifetime. Incredibly versatile and comfortable.', price: 9500, originalPrice: 10500, imageUrls: [
        'https://images.unsplash.com/photo-1605812836263-8d4512a8449c?w=800',
        'https://images.unsplash.com/photo-1562273246-885449e802c0?w=800',
        'https://images.unsplash.com/photo-1603191656209-9133f324c153?w=800'
      ], timesOrdered: 234, reviews: [{ id: 'review-s8-1', author: 'RuggedGent', rating: 5, comment: 'Best boots I\'ve ever owned. No break-in period needed, comfortable from day one. And they look great.', date: '2025-07-10' }]
    },
    {
      id: 'shoes-009', name: 'Cowrie Shell Embellished Slides', description: 'Simple slides decorated with natural cowrie shells.', longDescription: 'These easy-to-wear slides are given a bohemian, Afro-chic twist with hand-stitched cowrie shells on the strap. Perfect for the beach, pool, or a casual summer day.', price: 3500, originalPrice: 3500, imageUrls: [
        'https://images.unsplash.com/photo-1596701918349-74d32a0a2bfb?w=800',
        'https://images.unsplash.com/photo-1582294121586-44c10705f15a?w=800',
        'https://images.unsplash.com/photo-1585646143497-83a21b35c13b?w=800'
      ], timesOrdered: 150, reviews: [{ id: 'review-s9-1', author: 'BeachLover', rating: 4, comment: 'Very cute and stylish for summer. The fit is a little wide, but they\'re comfortable.', date: '2025-07-09' }]
    },
    {
      id: 'shoes-010', name: 'Imigwegwe Beaded Gumboots', description: 'Standard gumboots transformed into art with Ndebele beadwork.', longDescription: 'A modern take on tradition, these standard gumboots are covered in stunning, colorful geometric beadwork by Ndebele artisans in South Africa, transforming a utilitarian item into a piece of wearable art.', price: 8500, originalPrice: 8500, imageUrls: [
        'https://images.unsplash.com/photo-1603191656209-9133f324c153?w=800',
        'https://images.unsplash.com/photo-1562273246-885449e802c0?w=800',
        'https://images.unsplash.com/photo-1605812836263-8d4512a8449c?w=800'
      ], timesOrdered: 200, reviews: [{ id: 'review-s10-1', author: 'FestivalGoer', rating: 5, comment: 'These are INSANE! The beadwork is stunning. I can\'t wait to wear them and stand out at the next festival.', date: '2025-07-05' }]
    },
   ],
   "For Kids": [
    {
      id: 'kids-001', name: 'Baby\'s First Dashiki Onesie', description: 'An adorable and soft cotton onesie with a Dashiki print.', longDescription: 'Introduce your little one to African style with this comfortable and cute Dashiki-print onesie. Made from 100% soft, breathable cotton with snap closures for easy changes.', price: 2200, originalPrice: 2200, imageUrls: [
        'https://images.unsplash.com/photo-1601925698619-8de3e497b714?w=800',
        'https://images.unsplash.com/photo-1602133221473-207959438c22?w=800',
        'https://images.unsplash.com/photo-1585232240183-9b4f63ec255b?w=800'
      ], timesOrdered: 301, reviews: [{ id: 'review-k1-1', author: 'NewMom', rating: 5, comment: 'The absolute cutest thing! The fabric is so soft on my baby\'s skin.', date: '2025-07-22' }]
    },
    {
      id: 'kids-002', name: 'Hand-Carved Wooden Animal Set', description: 'A set of 5 hand-carved and painted wooden safari animals.', longDescription: 'This beautiful set of safari animals (lion, elephant, giraffe, zebra, rhino) is hand-carved from sustainable jacaranda wood in Kenya. Painted with non-toxic paints, they are perfect for imaginative play or nursery decor.', price: 4500, originalPrice: 4800, imageUrls: [
        'https://images.unsplash.com/photo-1563236780-a6a964eac221?w=800',
        'https://images.unsplash.com/photo-1574781488226-5d614833a695?w=800',
        'https://images.unsplash.com/photo-1598235122244-3652a926315a?w=800'
      ], timesOrdered: 200, reviews: [{ id: 'review-k2-1', author: 'GrandmaGifts', rating: 5, comment: 'A wonderful, classic toy. The carving and painting are beautifully done. My grandson loves them.', date: '2025-07-20' }]
    },
    {
      id: 'kids-003', name: 'Kitenge Print Toddler Dress', description: 'A vibrant and playful dress for toddlers in a colorful Kitenge print.', longDescription: 'This adorable A-line dress is perfect for your little fashionista. Made from durable, 100% cotton Kitenge fabric, it\'s comfortable enough for playtime and stylish enough for parties.', price: 3500, originalPrice: 3500, imageUrls: [
        'https://images.unsplash.com/photo-1617053314959-2384a44e46a2?w=800',
        'https://images.unsplash.com/photo-1588185968037-353d7123933c?w=800',
        'https://images.unsplash.com/photo-1599827827055-66760591f24a?w=800'
      ], timesOrdered: 150, reviews: [{ id: 'review-k3-1', author: 'StylishToddler', rating: 5, comment: 'My daughter looks so cute in this dress, and she loves how it twirls. Very well-made.', date: '2025-07-18' }]
    },
    {
      id: 'kids-004', name: 'African Folk Tales Picture Book', description: 'A beautifully illustrated book of classic African folk tales.', longDescription: 'Share the magic of African storytelling with this collection of classic folk tales. The vibrant illustrations and engaging stories make it a perfect bedtime read for children of all ages.', price: 1800, originalPrice: 1800, imageUrls: [
        'https://images.unsplash.com/photo-1543784184-1c6e156407db?w=800',
        'https://images.unsplash.com/photo-1461360370928-88290ab05292?w=800',
        'https://images.unsplash.com/photo-1518997232213-991b585c5def?w=800'
      ], timesOrdered: 130, reviews: [{ id: 'review-k4-1', author: 'BookwormParent', rating: 5, comment: 'The stories are wonderful and the illustrations are breathtaking. A new family favorite.', date: '2025-07-16' }]
    },
    {
      id: 'kids-005', name: 'Mini Djembe Drum', description: 'A small, playable djembe drum for kids, handcrafted in Ghana.', longDescription: 'Introduce your child to the rhythm of West Africa with this mini djembe. It features a solid wood body and a real goatskin head, producing a surprisingly rich sound. A fun and educational musical toy.', price: 3800, originalPrice: 4000, imageUrls: [
        'https://images.unsplash.com/photo-1563236780-a6a964eac221?w=800',
        'https://images.unsplash.com/photo-1610714150249-93e5a5f45209?w=800',
        'https://images.unsplash.com/photo-1616431955686-cb12a6d71a17?w=800'
      ], timesOrdered: 210, reviews: [{ id: 'review-k5-1', author: 'MusicFamily', rating: 5, comment: 'This isn\'t just a toy, it\'s a real instrument. The quality is fantastic. My kids have so much fun with it.', date: '2025-07-15' }]
    },
    {
      id: 'kids-006', name: 'Shweshwe Print Baby Bib', description: 'A stylish and absorbent bib made from South African Shweshwe fabric.', longDescription: 'Make mealtime a little more stylish with this durable bib. It features a colorful Shweshwe print on the front and a soft, absorbent backing to keep your baby clean and dry.', price: 1200, originalPrice: 1200, imageUrls: [
        'https://images.unsplash.com/photo-1551843425-1a8a7c2c2f82?w=800',
        'https://images.unsplash.com/photo-1620309136936-e380e3c545b7?w=800',
        'https://images.unsplash.com/photo-1617053314959-2384a44e46a2?w=800'
      ], timesOrdered: 150, reviews: [{ id: 'review-k6-1', author: 'PracticalMom', rating: 5, comment: 'Cute and practical. It washes well and the colors don\'t fade. Great quality.', date: '2024-07-14' }]
    },
    {
      id: 'kids-007', name: 'Beaded Animal Keychain Craft Kit', description: 'A DIY kit to make your own beaded animal keychains.', longDescription: 'A fun and creative activity for older kids. This kit includes all the beads, wire, and instructions needed to create several South African-style beaded animal keychains.', price: 2000, originalPrice: 2000, imageUrls: [
        'https://images.unsplash.com/photo-1599387737838-66a151b782b4?w=800',
        'https://images.unsplash.com/photo-1634081639910-3a5b3a65a363?w=800',
        'https://images.unsplash.com/photo-1582294121586-44c10705f15a?w=800'
      ], timesOrdered: 250, reviews: [{ id: 'review-k7-1', author: 'CraftyKid', rating: 5, comment: 'My daughter spent hours making these. The instructions were clear and the finished keychains are so cute.', date: '2024-07-12' }]
    },
    {
      id: 'kids-008', name: 'Kente Cloth Baby Shoes', description: 'Soft, comfortable crib shoes with a Kente cloth pattern.', longDescription: 'These adorable soft-soled shoes are perfect for pre-walkers. The vibrant Kente pattern makes them a stylish accessory for the tiniest feet.', price: 2500, originalPrice: 2500, imageUrls: [
        'https://images.unsplash.com/photo-1512101957429-39b0d23c8a99?w=800',
        'https://images.unsplash.com/photo-1579301258942-824f9b8b321a?w=800',
        'https://images.unsplash.com/photo-1594938382329-87a177558655?w=800'
      ], timesOrdered: 289, reviews: [{ id: 'review-k8-1', author: 'Auntie', rating: 5, comment: 'The most adorable baby shower gift! They were a huge hit.', date: '2024-07-10' }]
    },
    {
      id: 'kids-009', name: 'Plush Toy Griaffe', description: 'A soft and cuddly giraffe plush toy.', longDescription: 'This huggable giraffe is made from soft, high-quality plush material with stitched features, making it safe for all ages. The perfect companion for naps and adventures.', price: 3000, originalPrice: 3000, imageUrls: [
        'https://images.unsplash.com/photo-1563236780-a6a964eac221?w=800',
        'https://images.unsplash.com/photo-1574781488226-5d614833a695?w=800',
        'https://images.unsplash.com/photo-1598235122244-3652a926315a?w=800'
      ], timesOrdered: 310, reviews: [{ id: 'review-k9-1', author: 'ParentOfTwo', rating: 5, comment: 'So soft and well-made. Both my kids fight over it. Looks like I need to buy another one!', date: '2024-07-08' }]
    },
    {
      id: 'kids-010', name: 'Mancala Board Game', description: 'A beautiful, hand-carved wooden Mancala game board.', longDescription: 'Teach your kids this ancient and engaging strategy game. This set is carved from wood and comes with polished seed playing pieces. A timeless game that\'s also a beautiful decorative object.', price: 5500, originalPrice: 5800, imageUrls: [
        'https://images.unsplash.com/photo-1610714150249-93e5a5f45209?w=800',
        'https://images.unsplash.com/photo-1610714150172-21f44a42371b?w=800',
        'https://images.unsplash.com/photo-1563236780-a6a964eac221?w=800'
      ], timesOrdered: 150, reviews: [{ id: 'review-k10-1', author: 'GameNight', rating: 5, comment: 'A beautiful game board. We love playing this as a family. A great way to get the kids off their screens.', date: '2024-07-05' }]
    },
    {
      id: 'kids-011',
      name: 'Giant Plush Teddy Bear - Cream White',
      description: 'An extra-large, ultra-soft cream white teddy bear perfect for cuddles and Valentine\'s gifts.',
      longDescription: 'This magnificent giant teddy bear stands tall as the ultimate companion for children and a romantic Valentine\'s gift. Crafted with premium ultra-soft plush material in a beautiful cream white color, this oversized bear features a charming checkered bow tie that adds a touch of elegance. The bear\'s friendly face with embroidered eyes and nose makes it safe for all ages. Perfect for bedrooms, nurseries, or as a statement piece in any room. This cuddly giant provides comfort, warmth, and endless hugs. Ideal for Valentine\'s Day, birthdays, or as a special surprise gift. The generous size makes it perfect for both children and adults who appreciate quality plush toys.',
      price: 9999,
      originalPrice: 12500,
      imageUrls: [
        '/assets/images/Large teddybear.jpeg',
        '/assets/images/Large teddybear.jpeg',
        'https://images.unsplash.com/photo-1563236780-a6a964eac221?w=800'
      ],
      timesOrdered: 234,
      reviews: [
        { id: 'review-k11-1', author: 'Jennifer M.', rating: 5, comment: 'This teddy bear is HUGE and absolutely adorable! My daughter was over the moon when she saw it. The quality is exceptional - so soft and well-made. The bow tie is a cute touch!', date: '2025-02-08' },
        { id: 'review-k11-2', author: 'Patrick O.', rating: 5, comment: 'Bought this as a Valentine\'s gift for my girlfriend and she loved it! It\'s even bigger than expected. The cream color is beautiful and it\'s incredibly soft. Worth every shilling!', date: '2025-02-10' },
        { id: 'review-k11-3', author: 'Mary K.', rating: 5, comment: 'Perfect gift for my son\'s 5th birthday! He sleeps with it every night. The size is impressive and the quality is top-notch. Highly recommend for anyone looking for a special gift!', date: '2025-02-12' },
        { id: 'review-k11-4', author: 'David N.', rating: 5, comment: 'Amazing quality! The bear is well-stuffed, maintains its shape, and the stitching is perfect. My niece absolutely adores it. Great value for the price!', date: '2025-02-14' },
      ]
    },
    {
      id: 'kids-012',
      name: 'Giant Plush Teddy Bear - Pink',
      description: 'An extra-large, ultra-soft pink teddy bear perfect for cuddles and romantic Valentine\'s gifts.',
      longDescription: 'Fall in love with this adorable giant pink teddy bear, the perfect Valentine\'s Day gift or special surprise for someone you cherish. This oversized plush companion features premium ultra-soft material in a beautiful pink color that symbolizes love and affection. Adorned with an elegant checkered bow tie, this bear combines cuteness with sophistication. The friendly embroidered face with safe, stitched features makes it suitable for all ages. Standing impressively tall, this cuddly giant is perfect for bedrooms, living rooms, or as a romantic gesture. Whether for children who love pink or as a heartfelt Valentine\'s gift for your special someone, this bear delivers comfort, joy, and endless cuddles. The generous size and exceptional quality make it a memorable gift that will be treasured for years to come.',
      price: 9999,
      originalPrice: 12500,
      imageUrls: [
        '/assets/images/Large teddybear.jpeg',
        '/assets/images/Large teddybear.jpeg',
        'https://images.unsplash.com/photo-1563236780-a6a964eac221?w=800'
      ],
      timesOrdered: 267,
      reviews: [
        { id: 'review-k12-1', author: 'Sarah L.', rating: 5, comment: 'The pink color is absolutely gorgeous! My daughter squealed with joy when she saw it. It\'s incredibly soft and the size is perfect. Best purchase ever!', date: '2025-02-09' },
        { id: 'review-k12-2', author: 'Michael W.', rating: 5, comment: 'Surprised my wife with this for Valentine\'s Day and she was thrilled! The quality exceeded my expectations. It\'s huge, soft, and the pink color is lovely. Highly recommend!', date: '2025-02-11' },
        { id: 'review-k12-3', author: 'Grace T.', rating: 5, comment: 'Perfect Valentine\'s gift! The bear is well-made, super soft, and the pink shade is beautiful. My girlfriend loves it and it looks great in our bedroom. Worth every penny!', date: '2025-02-13' },
        { id: 'review-k12-4', author: 'Lucy N.', rating: 5, comment: 'Bought this for my little girl and she\'s obsessed! The quality is outstanding - no loose threads, perfect stitching, and so cuddly. The bow tie adds a nice touch. Excellent value!', date: '2025-02-15' },
      ]
    },
    {
      id: 'kids-013',
      name: 'Valentine\'s Teddy Bear with Rose - Small',
      description: 'An adorable small white teddy bear holding a red rose, the perfect romantic Valentine\'s gift.',
      longDescription: 'Express your love with this charming small white teddy bear that comes holding a beautiful red rose. This cuddly companion is the perfect size for gifting - not too big, not too small, just right for showing someone you care. The soft, plush white fur is incredibly huggable, and the bear features an adorable face with embroidered details and a cute black polka dot bow tie. The attached red rose adds a romantic touch that makes this the ideal Valentine\'s Day gift. Perfect for expressing your feelings to a girlfriend, boyfriend, spouse, or anyone special in your life. This teddy bear is also great for anniversaries, apologies, or just because moments. The compact size makes it easy to present as a surprise, fits perfectly on a desk or bedside table, and is ideal for those who want a meaningful gift without taking up too much space. Made with high-quality materials, this bear is built to last and will serve as a lasting reminder of your affection. Whether you\'re celebrating your first Valentine\'s together or your fiftieth, this sweet teddy bear with rose is a timeless symbol of love and care.',
      price: 2799,
      originalPrice: 3000,
      imageUrls: [
        '/assets/images/teddybear small.jpeg',
        '/assets/images/teddybear small.jpeg',
        '/assets/images/small teddybear.jpeg'
      ],
      timesOrdered: 432,
      reviews: [
        { id: 'review-k13-1', author: 'James M.', rating: 5, comment: 'My girlfriend loved this! The perfect size and the rose is a nice touch. Very soft and cuddly. Great value for the price!', date: '2025-02-08' },
        { id: 'review-k13-2', author: 'Catherine W.', rating: 5, comment: 'Bought this for my boyfriend and he was so touched! The teddy bear is adorable and the quality is excellent. The bow tie is cute too!', date: '2025-02-10' },
        { id: 'review-k13-3', author: 'David K.', rating: 5, comment: 'Perfect Valentine\'s gift! Not too big, not too small. The white color is beautiful and the rose makes it extra special. Highly recommend!', date: '2025-02-12' },
        { id: 'review-k13-4', author: 'Mary N.', rating: 5, comment: 'Such a sweet gift! My partner keeps it on the bedside table. The quality is great and it\'s so soft. Worth every shilling!', date: '2025-02-14' },
      ]
    },
   ],
   "Gourmet & Kitchen": [
    {
      id: 'gourmet-001', name: 'Ethiopian Yirgacheffe Coffee Beans', description: 'Single-origin, whole bean Arabica coffee from Yirgacheffe, Ethiopia.', longDescription: 'Experience one of the world\'s most prized coffees. These Yirgacheffe beans are known for their bright, clean taste and complex floral and citrus notes. Whole beans to ensure maximum freshness.', price: 2500, originalPrice: 2500, imageUrls: [
        'https://images.unsplash.com/photo-1560961913-b29a75cb1812?w=800',
        'https://images.unsplash.com/photo-1511920183353-3c9c9b0a1a4c?w=800',
        'https://images.unsplash.com/photo-1554922589-5cf27a9dea91?w=800'
      ], timesOrdered: 200, reviews: [{ id: 'review-g1-1', author: 'CoffeeSnob', rating: 5, comment: 'Exceptional coffee. The floral notes are incredible. Makes a perfect pour-over. This is the real deal.', date: '2024-07-22' }]
    },
    {
      id: 'gourmet-002', name: 'Berbere Spice Blend', description: 'An authentic, aromatic Ethiopian spice blend.', longDescription: 'The heart of Ethiopian cuisine, this Berbere blend is a complex mix of chili peppers, garlic, ginger, basil, and many other spices. It adds a wonderful depth and heat to stews, meats, and vegetables.', price: 1200, originalPrice: 1200, imageUrls: [
        'https://images.unsplash.com/photo-1554922589-5cf27a9dea91?w=800',
        'https://images.unsplash.com/photo-1598235122244-3652a926315a?w=800',
        'https://images.unsplash.com/photo-1596701918349-74d32a0a2bfb?w=800'
      ], timesOrdered: 300, reviews: [{ id: 'review-g2-1', author: 'HomeChef', rating: 5, comment: 'This spice blend is amazing. So fragrant and flavorful. It has transformed my cooking.', date: '2025-07-20' }]
    },
    {
      id: 'gourmet-003', name: 'Vanilla Pods from Madagascar', description: 'Plump, fragrant, gourmet-grade vanilla pods.', longDescription: 'Considered the world\'s best, these vanilla pods from Madagascar are incredibly aromatic and full of flavor. Perfect for baking, custards, or making your own vanilla extract.', price: 1800, originalPrice: 1800, imageUrls: [
        'https://images.unsplash.com/photo-1601056263911-7383792f5899?w=800',
        'https://images.unsplash.com/photo-1560961913-b29a75cb1812?w=800',
        'https://images.unsplash.com/photo-1554922589-5cf27a9dea91?w=800'
      ], timesOrdered: 100, reviews: [{ id: 'review-g3-1', author: 'BakerBen', rating: 5, comment: 'The quality of these vanilla pods is outstanding. The aroma is incredible. Makes my desserts taste so much better.', date: '2025-07-19' }]
    },
    {
      id: 'gourmet-004', name: 'Rooibos Tea', description: 'Organic, loose-leaf Rooibos (Red Bush) tea from South Africa.', longDescription: 'Naturally caffeine-free and rich in antioxidants, Rooibos is a flavorful and healthy alternative to traditional tea. It has a smooth, slightly sweet, and earthy flavor.', price: 1500, originalPrice: 1500, imageUrls: [
        'https://images.unsplash.com/photo-1560961913-b29a75cb1812?w=800',
        'https://images.unsplash.com/photo-1554922589-5cf27a9dea91?w=800',
        'https://images.unsplash.com/photo-1601056263911-7383792f5899?w=800'
      ], timesOrdered: 200, reviews: [{ id: 'review-g4-1', author: 'TeaLover', rating: 5, comment: 'A lovely, soothing tea. The quality of this loose-leaf is excellent. I drink it every night.', date: '2025-07-17' }]
    },
    {
      id: 'gourmet-005', name: 'Peri-Peri Hot Sauce', description: 'A fiery hot sauce made with African Bird\'s Eye chilies.', longDescription: 'Bring the heat with this authentic Peri-Peri sauce. Made from a blend of African Bird\'s Eye chilies, lemon, and spices, it\'s the perfect marinade or condiment for chicken, meat, and more.', price: 1000, originalPrice: 1000, imageUrls: [
        'https://images.unsplash.com/photo-1554922589-5cf27a9dea91?w=800',
        'https://images.unsplash.com/photo-1560961913-b29a75cb1812?w=800',
        'https://images.unsplash.com/photo-1601056263911-7383792f5899?w=800'
      ], timesOrdered: 250, reviews: [{ id: 'review-g5-1', author: 'SpicyLife', rating: 5, comment: 'This sauce has the perfect balance of heat and flavor. So good on everything!', date: '2024-07-15' }]
    },
    {
      id: 'gourmet-006', name: 'Hibiscus Flowers (Bissap)', description: 'Dried hibiscus flowers for making refreshing drinks and teas.', longDescription: 'Used all over West Africa to make a refreshing drink called Bissap, these dried hibiscus flowers have a tart, cranberry-like flavor. Rich in vitamin C and antioxidants.', price: 900, originalPrice: 900, imageUrls: [
        'https://images.unsplash.com/photo-1601056263911-7383792f5899?w=800',
        'https://images.unsplash.com/photo-1560961913-b29a75cb1812?w=800',
        'https://images.unsplash.com/photo-1554922589-5cf27a9dea91?w=800'
      ], timesOrdered: 230, reviews: [{ id: 'review-g6-1', author: 'HealthyDrinker', rating: 5, comment: 'Makes a beautiful and delicious iced tea. The color is stunning. A new summer staple for me.', date: '2024-07-14' }]
    },
    {
      id: 'gourmet-007', name: 'Fonio Grain', description: 'An ancient, gluten-free super-grain from West Africa.', longDescription: 'Fonio is a light, fluffy, and nutty-tasting grain that cooks in minutes. It\'s a nutritious, gluten-free alternative to couscous or quinoa. A true superfood!', price: 1300, originalPrice: 1300, imageUrls: [
        'https://images.unsplash.com/photo-1560961913-b29a75cb1812?w=800',
        'https://images.unsplash.com/photo-1554922589-5cf27a9dea91?w=800',
        'https://images.unsplash.com/photo-1601056263911-7383792f5899?w=800'
      ], timesOrdered: 140, reviews: [{ id: 'review-g7-1', author: 'GlutenFreeGal', rating: 5, comment: 'I love this grain! It\'s so easy to cook and has a wonderful texture and flavor. My new favorite side dish.', date: '2024-07-12' }]
    },
    {
      id: 'gourmet-008', name: 'Harissa Spice Paste', description: 'A hot and aromatic chili paste from North Africa.', longDescription: 'This traditional Tunisian Harissa is a fiery and fragrant paste made from roasted red peppers, spices, and olive oil. Use it to add a kick to soups, stews, couscous, or as a condiment.', price: 1100, originalPrice: 1100, imageUrls: [
        'https://images.unsplash.com/photo-1554922589-5cf27a9dea91?w=800',
        'https://images.unsplash.com/photo-1560961913-b29a75cb1812?w=800',
        'https://images.unsplash.com/photo-1601056263911-7383792f5899?w=800'
      ], timesOrdered: 210, reviews: [{ id: 'review-g8-1', author: 'ChefMo', rating: 5, comment: 'Fantastic Harissa. The flavor is deep and complex, not just hot. A pantry essential.', date: '2024-07-10' }]
    },
    {
      id: 'gourmet-009', name: 'Baobab Fruit Powder', description: 'A nutritious, raw superfood powder from the Baobab fruit.', longDescription: 'With a unique citrusy flavor, Baobab powder is packed with Vitamin C, antioxidants, and fiber. Stir it into smoothies, yogurt, or water for a natural energy and wellness boost.', price: 2000, originalPrice: 2000, imageUrls: [
        'https://images.unsplash.com/photo-1601056263911-7383792f5899?w=800',
        'https://images.unsplash.com/photo-1560961913-b29a75cb1812?w=800',
        'https://images.unsplash.com/photo-1554922589-5cf27a9dea91?w=800'
      ], timesOrdered: 220, reviews: [{ id: 'review-g9-1', author: 'WellnessWarrior', rating: 5, comment: 'A great addition to my morning smoothie. I love the tangy flavor and the nutritional benefits.', date: '2024-07-08' }]
    },
    {
      id: 'gourmet-010', name: 'Palm Oil', description: 'Sustainably sourced, unrefined red palm oil.', longDescription: 'This unrefined red palm oil has a rich, savory flavor and is a staple in West African cooking. It\'s packed with vitamins and is essential for authentic dishes like Jollof rice. Sourced from sustainable farms.', price: 1600, originalPrice: 1600, imageUrls: [
        'https://images.unsplash.com/photo-1560961913-b29a75cb1812?w=800',
        'https://images.unsplash.com/photo-1554922589-5cf27a9dea91?w=800',
        'https://images.unsplash.com/photo-1601056263911-7383792f5899?w=800'
      ], timesOrdered: 130, reviews: [{ id: 'review-g10-1', author: 'AuthenticCook', rating: 5, comment: 'This is the real stuff. The flavor is exactly what my Jollof was missing. And I feel good knowing it\'s sustainably sourced.', date: '2024-07-05' }]
    }
   ],
   "Gift Packs": [
    {
      id: 'giftpack-001',
      name: 'Valentine\'s Cozy Comfort Gift Pack',
      description: 'A luxurious comfort collection featuring premium cozy essentials perfect for your loved one.',
      longDescription: 'Wrap your loved one in warmth and comfort this Valentine\'s Day with this exquisite cozy gift pack. This thoughtfully curated bundle includes: a premium Cashmere Blanket/Scarf for ultimate warmth and elegance (KES 3,500 value), a high-quality Stainless Steel Vacuum Thermos to keep beverages at the perfect temperature (KES 2,500 value), adorable Fuzzy Heart-Pattern Slippers for cozy comfort at home (KES 2,000 value), and a charming Decorative Humidifier/Night Light with cute character design for ambiance and wellness (KES 3,000 value). Total individual value: KES 11,000. Save KES 3,001 with this special Valentine\'s bundle! Each item is carefully selected to provide comfort, warmth, and joy. Perfect for creating cozy moments at home, whether relaxing with a book, enjoying a favorite hot beverage, or unwinding after a long day. Show your love with gifts that prioritize comfort and well-being. Ideal for anyone special you want to pamper this Valentine\'s Day - perfect for partners, family members, or dear friends.',
      price: 7999,
      originalPrice: 11000,
      imageUrls: [
        '/assets/images/WhatsApp Image 2026-02-11 at 13.45.25.jpeg',
        '/assets/images/WhatsApp Image 2026-02-11 at 13.45.25.jpeg',
        'https://images.unsplash.com/photo-1584308972272-9e4e7685e80f?w=800',
        'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=800'
      ],
      timesOrdered: 112,
      reviews: [
        { id: 'review-gp1-1', author: 'Michael T.', rating: 5, comment: 'My partner absolutely loves this cozy pack! The cashmere blanket is so soft and the thermos keeps drinks hot for hours. The slippers are their new favorites. Perfect Valentine\'s gift!', date: '2025-02-01' },
        { id: 'review-gp1-2', author: 'David K.', rating: 5, comment: 'Best gift ever! My loved one was so touched by how thoughtful this pack is. They use everything daily. The humidifier is adorable and works great. Highly recommend!', date: '2025-02-03' },
        { id: 'review-gp1-3', author: 'James O.', rating: 5, comment: 'This gift pack exceeded my expectations. The quality of each item is exceptional. It\'s the coziest gift anyone could receive. Worth every shilling!', date: '2025-02-05' },
        { id: 'review-gp1-4', author: 'Peter M.', rating: 5, comment: 'Amazing value for money! The cashmere blanket alone is worth the price. Everything is high quality and beautifully packaged. My friend loved it!', date: '2025-02-07' },
      ]
    },
    {
      id: 'giftpack-005',
      name: 'Valentine\'s Cozy Comfort Gift Pack with Teddy Bear - For Her',
      description: 'A luxurious comfort collection featuring an adorable teddy bear and premium cozy essentials, perfect for her.',
      longDescription: 'Show your love this Valentine\'s Day with this specially curated gift pack for her! This delightful bundle combines comfort and cuteness with: an adorable Plush Teddy Bear for endless cuddles and companionship (KES 3,000 value), a premium Cashmere Blanket/Scarf for ultimate warmth and elegance (KES 3,500 value), a high-quality Stainless Steel Vacuum Thermos to keep her favorite beverages at the perfect temperature (KES 2,500 value), and adorable Fuzzy Heart-Pattern Slippers for cozy comfort at home (KES 2,000 value). Total individual value: KES 11,000. Save KES 3,100 with this special Valentine\'s bundle! Each item is thoughtfully selected to bring warmth, comfort, and joy to her daily life. The cuddly teddy bear adds a sweet, romantic touch that she\'ll treasure forever. Perfect for creating cozy moments at home - whether she\'s relaxing with a book, enjoying a hot beverage, or unwinding after a long day. This gift pack shows you care about her comfort and happiness. Ideal for girlfriends, wives, mothers, sisters, or any special woman in your life who deserves to be pampered this Valentine\'s Day. Each item combines practicality with thoughtfulness, making this the ultimate expression of love and care.',
      price: 8000,
      originalPrice: 11000,
      imageUrls: [
        '/assets/images/ladies.jpeg',
        '/assets/images/ladies.jpeg',
        '/assets/images/small teddybear.jpeg',
        'https://images.unsplash.com/photo-1584308972272-9e4e7685e80f?w=800'
      ],
      timesOrdered: 87,
      reviews: [
        { id: 'review-gp5-1', author: 'Patrick O.', rating: 5, comment: 'My girlfriend absolutely loved this gift pack! The teddy bear was the perfect touch - she sleeps with it every night. The cashmere blanket is so soft and the slippers are her new favorites. Best Valentine\'s gift ever!', date: '2025-02-10' },
        { id: 'review-gp5-2', author: 'Daniel M.', rating: 5, comment: 'Bought this for my wife and she was over the moon! The combination of the cute teddy bear with practical items like the thermos and blanket is genius. She uses everything daily. Highly recommend!', date: '2025-02-12' },
        { id: 'review-gp5-3', author: 'Kevin N.', rating: 5, comment: 'Perfect gift for her! My sister loved every item in this pack. The teddy bear is adorable and high quality. The slippers are super cozy. Great value for money!', date: '2025-02-13' },
        { id: 'review-gp5-4', author: 'Brian W.', rating: 5, comment: 'This gift pack exceeded all expectations! My girlfriend said it\'s the most thoughtful gift she\'s ever received. The teddy bear made her cry happy tears. Everything is premium quality. Worth every shilling!', date: '2025-02-14' },
      ]
    },
    {
      id: 'giftpack-004',
      name: 'Valentine\'s Executive Professional Gift Set',
      description: 'A sophisticated red-themed professional gift set perfect for the ambitious professional in your life.',
      longDescription: 'Celebrate Valentine\'s Day with this elegant Executive Professional Gift Set, designed for the modern professional who values style and functionality. This premium bundle includes: a luxurious Red Leather-Bound Executive Notebook with magnetic closure for important notes and ideas (KES 1,800 value), a sleek Premium Metal Ballpoint Pen with smooth writing experience and elegant design (KES 800 value), and a high-quality Stainless Steel Vacuum Thermos in sophisticated red finish to keep beverages at the perfect temperature throughout the workday (KES 2,200 value). Total individual value: KES 4,800. Save KES 300 with this exclusive Valentine\'s bundle! Each item is carefully selected to combine professional elegance with practical functionality. The coordinated red color scheme symbolizes passion and ambition, making it the perfect gift for entrepreneurs, executives, students, or anyone who appreciates quality stationery and professional accessories. Ideal for expressing your love and support for their professional journey. Perfect for partners, colleagues, mentors, or anyone special who deserves recognition this Valentine\'s Day. Comes beautifully packaged in an elegant gift box, ready to impress.',
      price: 4500,
      originalPrice: 4800,
      imageUrls: [
        '/assets/images/men red.jpeg',
        '/assets/images/men red.jpeg',
        'https://images.unsplash.com/photo-1517842645767-c639042777db?w=800',
        'https://images.unsplash.com/photo-1606663889134-b1dedb5ed8b7?w=800'
      ],
      timesOrdered: 89,
      reviews: [
        { id: 'review-gp4-1', author: 'Sarah W.', rating: 5, comment: 'Got this for my husband who just started his business. He loves the professional look and uses everything daily. The notebook quality is exceptional!', date: '2025-02-09' },
        { id: 'review-gp4-2', author: 'John M.', rating: 5, comment: 'Perfect gift for my girlfriend who\'s a lawyer. The red color is elegant and everything is high quality. She was thrilled with this thoughtful gift!', date: '2025-02-11' },
        { id: 'review-gp4-3', author: 'Grace K.', rating: 5, comment: 'Excellent value! The thermos keeps coffee hot all day, the pen writes smoothly, and the notebook is perfect for meetings. Highly recommend for professionals!', date: '2025-02-13' },
        { id: 'review-gp4-4', author: 'Daniel O.', rating: 5, comment: 'Bought this for my mentor as a Valentine\'s appreciation gift. The packaging is beautiful and the quality exceeded expectations. A classy gift set!', date: '2025-02-14' },
      ]
    },
    {
      id: 'giftpack-002',
      name: 'Valentine\'s Gift Pack for Him',
      description: 'A sophisticated collection of premium items for the distinguished gentleman.',
      longDescription: 'Celebrate the special man in your life with this distinguished Valentine\'s gift pack. This carefully curated bundle includes: a stylish Men\'s Royal Dashiki shirt perfect for any occasion (KES 3,299 value), elegant Brass Spiral Earrings for a modern touch (KES 2,599 value), a unique Recycled Brass Keychain with Adinkra symbol (KES 1,200 value), and premium Authentic African Black Soap for superior skincare (KES 1,299 value). Total individual value: KES 8,397. Save KES 2,398 with this exclusive Valentine\'s bundle! Each item combines traditional African craftsmanship with contemporary style, perfect for the modern gentleman who appreciates quality and heritage. Ideal for husbands, boyfriends, fathers, brothers, or any special man you want to honor this Valentine\'s Day. Show him he\'s valued with gifts that blend style, culture, and practicality.',
      price: 4500,
      originalPrice: 8397,
      imageUrls: [
        '/assets/images/men gift blue small.jpeg',
        '/assets/images/African Style-New5.jpeg',
        'https://images.unsplash.com/photo-1617453691342-f8c6d1f9a1e3?w=800',
        'https://images.unsplash.com/photo-1601056263911-7383792f5899?w=800'
      ],
      timesOrdered: 76,
      reviews: [
        { id: 'review-gp2-1', author: 'Sarah M.', rating: 5, comment: 'Got this for my husband and he loves every single item! The Dashiki fits perfectly and looks so elegant. The black soap has improved his skin so much. Great gift pack!', date: '2025-02-02' },
        { id: 'review-gp2-2', author: 'Grace N.', rating: 5, comment: 'My boyfriend was thrilled with this gift! The quality is outstanding and the selection is perfect for a modern man. The earrings are his new favorite accessory. Highly recommend!', date: '2025-02-04' },
        { id: 'review-gp2-3', author: 'Linda W.', rating: 5, comment: 'Excellent value for money! My brother loved everything in this pack. The Dashiki is beautifully embroidered and the keychain is such a unique touch. Will definitely buy again!', date: '2025-02-06' },
      ]
    },
    {
      id: 'giftpack-003',
      name: 'Valentine\'s Premium Heritage Gift Pack for Him',
      description: 'An exclusive premium collection celebrating African heritage and craftsmanship for the distinguished gentleman.',
      longDescription: 'Honor the special man in your life with this premium Valentine\'s gift pack that celebrates African heritage and artistry. This exclusive bundle includes: a stunning Maasai Beaded Necklace showcasing traditional craftsmanship (KES 4,200 value), premium Raw Unrefined Shea Butter for superior skincare and grooming (KES 1,499 value), an elegant Handcrafted Wooden Lamp Shade for sophisticated ambient lighting (KES 1,499 value), and a beautiful handwoven Rattan Basket for stylish organization (KES 2,299 value). Total individual value: KES 9,497. Save KES 1,497 with this exclusive Valentine\'s bundle! Each item is meticulously handcrafted by skilled artisans, representing the finest African craftsmanship and cultural heritage. Perfect for the modern gentleman who appreciates authentic artisanal quality, cultural significance, and timeless style. The beaded necklace makes a bold fashion statement, the shea butter provides natural grooming benefits, the lamp shade adds warmth to his space, and the rattan basket offers practical elegance. Ideal for husbands, boyfriends, fathers, brothers, or any special man who values heritage, quality, and meaningful gifts this Valentine\'s Day.',
      price: 8000,
      originalPrice: 9497,
      imageUrls: [
        '/assets/images/men gift large.jpeg',
        '/assets/images/',
        '/assets/images/',
        'https://images.unsplash.com/photo-1634081639910-3a5b3a65a363?w=800'
      ],
      timesOrdered: 54,
      reviews: [
        { id: 'review-gp3-1', author: 'Catherine W.', rating: 5, comment: 'Bought this premium pack for my husband and he was blown away! The Maasai necklace is a stunning piece of art. The quality of everything is exceptional. Worth every shilling!', date: '2025-02-08' },
        { id: 'review-gp3-2', author: 'John K.', rating: 5, comment: 'This is the perfect gift for a man who appreciates culture and quality. My brother loved every item, especially the handcrafted lamp shade. Highly recommend!', date: '2025-02-10' },
        { id: 'review-gp3-3', author: 'Mary N.', rating: 5, comment: 'Excellent gift pack! My boyfriend uses the shea butter daily and the rattan basket is perfect for his desk. The beaded necklace is his new favorite accessory. Amazing value!', date: '2025-02-12' },
      ]
    },
    {
      id: 'giftpack-006',
      name: 'Valentine\'s Deluxe Cozy Comfort Gift Pack',
      description: 'An ultimate luxury comfort collection featuring premium cozy essentials and adorable accessories for the perfect Valentine\'s gift.',
      longDescription: 'Surprise your loved one with the ultimate cozy comfort experience this Valentine\'s Day! This deluxe gift pack is thoughtfully curated with premium items for maximum comfort and joy. The bundle includes: a luxurious Premium Cashmere Blanket/Scarf in elegant cream color for ultimate warmth and sophistication (KES 3,500 value), a high-quality Stainless Steel Vacuum Thermos to keep beverages perfectly hot or cold throughout the day (KES 2,500 value), adorable Fuzzy Heart-Pattern Slippers for cozy comfort at home (KES 2,000 value), and a charming Decorative Humidifier/Night Light with an adorable character design that adds ambiance while promoting wellness (KES 3,000 value). Total individual value: KES 11,000. Save KES 3,001 with this exclusive Valentine\'s bundle! Each premium item is carefully selected to create the perfect cozy atmosphere and show how much you care. The elegant cream cashmere adds a touch of luxury, the thermos ensures their favorite drinks stay at the perfect temperature, the heart-patterned slippers provide comfort with every step, and the cute humidifier creates a soothing environment. Perfect for creating romantic, cozy moments at home - whether cuddling up with a movie, enjoying breakfast in bed, or simply relaxing together. This gift pack is ideal for expressing your love to partners, spouses, or anyone special who deserves to be pampered with comfort and care this Valentine\'s Day. Beautifully packaged and ready to make hearts melt!',
      price: 7999,
      originalPrice: 11000,
      imageUrls: [
        '/assets/images/men edition.jpeg',
        '/assets/images/WhatsApp Image 2026-02-11 at 13.45.25.jpeg',
        'https://images.unsplash.com/photo-1584308972272-9e4e7685e80f?w=800',
        'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=800'
      ],
      timesOrdered: 95,
      reviews: [
        { id: 'review-gp6-1', author: 'Rachel M.', rating: 5, comment: 'This is the most thoughtful gift pack ever! My partner loved every single item. The cashmere blanket is incredibly soft and the humidifier is so cute. Perfect Valentine\'s gift!', date: '2025-02-09' },
        { id: 'review-gp6-2', author: 'Steven K.', rating: 5, comment: 'Bought this for my wife and she was absolutely thrilled! The quality of everything is outstanding. The slippers are her new favorites and she uses the thermos daily. Highly recommend!', date: '2025-02-11' },
        { id: 'review-gp6-3', author: 'Angela W.', rating: 5, comment: 'Amazing value for money! Each item is high quality and the presentation is beautiful. My girlfriend said it\'s the best gift she\'s ever received. The humidifier is adorable!', date: '2025-02-13' },
        { id: 'review-gp6-4', author: 'Thomas N.', rating: 5, comment: 'This gift pack is pure luxury! The cashmere blanket alone is worth the price. Everything works perfectly and looks beautiful. My partner uses everything daily. Worth every shilling!', date: '2025-02-15' },
      ]
    },
   ],
   "Home Appliances": [
    {
      id: 'appliance-001',
      name: 'SMARTPRO Front Load Washing Machine - 8kg',
      description: 'Premium gold finish front-loading washing machine with 8kg capacity, perfect for modern homes.',
      longDescription: 'Elevate your home with the SMARTPRO Front Load Washing Machine. This stunning gold-finished appliance combines elegance with efficiency, featuring an 8kg capacity drum, energy-efficient operation, and advanced washing programs. The sleek black glass door and intuitive control panel make laundry day a breeze. Perfect Valentine\'s gift for the home you love! Features multiple wash programs, quick wash option, and whisper-quiet operation. Energy rating certified for cost-effective performance.',
      price: 38999,
      originalPrice: 42000,
      imageUrls: [
        '/assets/images/washing machine.jpeg',
        '/assets/images/washing machine.jpeg',
        'https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=800'
      ],
      timesOrdered: 145,
      reviews: [
        { id: 'review-app1-1', author: 'Sarah M.', rating: 5, comment: 'This washing machine is absolutely beautiful! The gold finish looks premium and it washes clothes perfectly. Very quiet operation too.', date: '2025-01-15' },
        { id: 'review-app1-2', author: 'James K.', rating: 5, comment: 'Best purchase for our new home. Energy efficient and the 8kg capacity is perfect for our family of four. Highly recommend!', date: '2025-01-20' },
        { id: 'review-app1-3', author: 'Linda W.', rating: 5, comment: 'Love the gold color! It adds a touch of luxury to our laundry room. Works perfectly and very energy efficient.', date: '2025-01-25' },
      ]
    },
    {
      id: 'appliance-002',
      name: 'Black Ipcom water dispenser',
      description: 'Premium black finish water dispenser with modern design and easy operation.',
      longDescription: 'Upgrade your home with this sleek black-finished Ipcom water dispenser. Designed for both style and convenience, it features a modern aesthetic and intuitive operation. The durable build ensures long-lasting performance, while the black finish complements any interior design. Perfect for homes and offices alike, it provides easy access to filtered water. Features include: easy-to-use controls, filtered water system, compact design, and quick installation.',
      price: 13500,
      originalPrice: 16000,
      imageUrls: [
        '/assets/images/water dispencer.jpeg',
        '/assets/images/water dispencer.jpeg',
        'https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=800'
      ],
      timesOrdered: 132,
      reviews: [
        { id: 'review-app2-1', author: 'Michael T.', rating: 5, comment: 'The 10kg capacity is perfect for our family of six. No more multiple loads! The machine is efficient and the gold color is stunning.', date: '2025-01-18' },
        { id: 'review-app2-2', author: 'Grace N.', rating: 5, comment: 'Absolutely love this washing machine! It\'s quiet, efficient, and looks amazing in our laundry room. Worth every shilling!', date: '2025-01-22' },
        { id: 'review-app2-3', author: 'David O.', rating: 5, comment: 'Best investment for our home. The large capacity means I can wash bedding and curtains easily. Highly energy efficient too!', date: '2025-01-28' },
      ]
    },
    {
      id: 'appliance-003',
      name: 'ElectroMate Multifunction Blender Robot BD05',
      description: 'Professional 3500W multifunction blender with multiple speed settings and robust design.',
      longDescription: 'Transform your kitchen with the ElectroMate Multifunction Blender Robot BD05. This powerful 3500W blender is designed for serious home chefs and smoothie enthusiasts. Featuring a large-capacity BPA-free pitcher, precision stainless steel blades, and multiple speed settings (Low Speed and High Speed controls), it effortlessly handles everything from crushing ice to making silky smooth purees. The striking red and black design with professional-grade construction makes it a standout addition to any kitchen. Perfect Valentine\'s gift for the cooking enthusiast in your life! The BD05 model comes with safety features, easy-to-clean components, and a powerful motor that can handle the toughest ingredients. Whether you\'re making morning smoothies, soups, sauces, or crushing ice for cocktails, this blender delivers professional results every time.',
      price: 4999,
      originalPrice: 5499,
      imageUrls: [
        '/assets/images/blender.jpeg',
        '/assets/images/blender.jpeg',
        'https://images.unsplash.com/photo-1585515320310-259814833e62?w=800'
      ],
      timesOrdered: 438,
      reviews: [
        { id: 'review-app3-1', author: 'Patricia K.', rating: 5, comment: 'This blender is a beast! The 3500W motor crushes ice like butter. My smoothies have never been smoother. The build quality is excellent and it looks professional.', date: '2025-01-10' },
        { id: 'review-app3-2', author: 'John M.', rating: 5, comment: 'Best blender I\'ve ever owned. The multiple speed settings give you complete control. Made hot soup directly in the blender - amazing! Worth every penny.', date: '2025-01-14' },
        { id: 'review-app3-3', author: 'Alice N.', rating: 5, comment: 'Powerful and efficient! I use it daily for my morning protein shakes. The large pitcher is perfect for making drinks for the whole family. Highly recommend!', date: '2025-01-19' },
        { id: 'review-app3-4', author: 'Robert W.', rating: 4, comment: 'Great blender with impressive power. The only minor issue is it can be a bit loud at high speed, but that\'s expected with such a powerful motor. Performance is outstanding!', date: '2025-01-23' },
      ]
    },
    {
      id: 'appliance-004',
      name: 'AMAZE 3-Burner Gas Stove',
      description: 'Professional 3-burner gas stove with stainless steel finish, perfect for modern kitchens.',
      longDescription: 'Upgrade your cooking experience with the AMAZE 3-Burner Gas Stove. This sleek and efficient gas cooker features three high-performance burners with individual flame control, allowing you to cook multiple dishes simultaneously with precision. The durable stainless steel construction ensures longevity and easy cleaning, while the modern design complements any kitchen decor. Each burner is equipped with a safety auto-ignition system and flame failure device for peace of mind. The sturdy pan supports can accommodate pots and pans of various sizes, from small saucepans to large cooking vessels. Perfect Valentine\'s gift for the home chef who loves to cook! The compact design makes it ideal for apartments, small kitchens, or as an additional cooking station. Features include: three independent burners with adjustable flame control, easy-to-clean stainless steel surface, durable cast iron pan supports, safety flame failure device, and efficient gas consumption. Whether you\'re preparing a romantic dinner for two or cooking for the whole family, this reliable gas stove delivers consistent performance every time. Show your love by gifting a practical appliance that makes daily cooking easier and more enjoyable.',
      price: 3999,
      originalPrice: 5500,
      imageUrls: [
        '/assets/images/cooker.jpeg',
        '/assets/images/cooker.jpeg',
        'https://images.unsplash.com/photo-1585515320310-259814833e62?w=800'
      ],
      timesOrdered: 198,
      reviews: [
        { id: 'review-app4-1', author: 'Jane K.', rating: 5, comment: 'Excellent gas stove! The three burners are perfect for my family. Heats up quickly and the flame control is very precise. Great value for money!', date: '2025-02-05' },
        { id: 'review-app4-2', author: 'Peter M.', rating: 5, comment: 'Bought this as a Valentine\'s gift for my wife and she loves it! The stainless steel finish looks premium and it\'s very easy to clean. Highly recommend!', date: '2025-02-08' },
        { id: 'review-app4-3', author: 'Susan W.', rating: 5, comment: 'Perfect for my small kitchen! The three burners are enough for all my cooking needs. Very sturdy and well-built. Best purchase this year!', date: '2025-02-11' },
        { id: 'review-app4-4', author: 'Michael O.', rating: 5, comment: 'Great quality gas stove at an affordable price. The auto-ignition works perfectly and the burners are powerful. My girlfriend is very happy with it!', date: '2025-02-13' },
      ]
    },
    {
      id: 'appliance-005',
      name: 'Bosch Regina 10pc Granite Cookware Set',
      description: 'Premium 10-piece granite-coated cookware set with glass lids, perfect for healthy cooking.',
      longDescription: 'Elevate your culinary experience with the Bosch Regina 10-piece Granite Cookware Set. This comprehensive collection includes everything you need for a complete kitchen: multiple pot sizes with matching glass lids, all featuring a beautiful granite-effect non-stick coating that ensures healthy, oil-free cooking. The elegant black granite finish with subtle speckles adds a touch of sophistication to your kitchen while providing exceptional cooking performance. Each piece is crafted with a thick aluminum base for even heat distribution, preventing hot spots and ensuring perfectly cooked meals every time. The ergonomic handles stay cool during cooking for safe and comfortable handling. The transparent glass lids allow you to monitor your cooking without losing heat or moisture, while the steam vents prevent boiling over. Perfect Valentine\'s gift for couples who love to cook together! This set includes various pot sizes suitable for everything from boiling pasta to slow-cooking stews, making it ideal for both everyday meals and special occasions. The non-stick granite coating requires minimal oil, promoting healthier cooking and making cleanup a breeze. Features include: 10-piece complete set, premium granite non-stick coating, tempered glass lids with steam vents, heat-resistant handles, suitable for all stovetops except induction, and dishwasher safe. Show your love with a gift that combines practicality, health, and style - perfect for newlyweds, couples setting up home, or anyone who appreciates quality cookware.',
      price: 3999,
      originalPrice: 5999,
      imageUrls: [
        '/assets/images/bosch 10pc.jpeg',
        '/assets/images/bosch 10pc.jpeg',
        'https://images.unsplash.com/photo-1585515320310-259814833e62?w=800'
      ],
      timesOrdered: 176,
      reviews: [
        { id: 'review-app5-1', author: 'Grace N.', rating: 5, comment: 'Amazing cookware set! The granite coating is excellent - nothing sticks and it\'s so easy to clean. The glass lids are a great feature. Love it!', date: '2025-02-06' },
        { id: 'review-app5-2', author: 'Daniel K.', rating: 5, comment: 'Bought this for my wife for Valentine\'s and she\'s thrilled! The quality is outstanding and the set includes all the sizes we need. Great investment!', date: '2025-02-09' },
        { id: 'review-app5-3', author: 'Lucy M.', rating: 5, comment: 'Best cookware I\'ve ever owned! The non-stick coating works perfectly and the pots heat evenly. The black granite finish looks so elegant. Highly recommend!', date: '2025-02-12' },
        { id: 'review-app5-4', author: 'Brian W.', rating: 5, comment: 'Excellent value for a 10-piece set! The quality is comparable to much more expensive brands. My girlfriend loves cooking with these pots. Perfect Valentine\'s gift!', date: '2025-02-14' },
      ]
    },
   ],
   "Books & Stationery": [
    {
      id: 'books-001', name: '"Things Fall Apart" by Chinua Achebe', description: 'A landmark of African literature.', longDescription: 'A true classic, "Things Fall Apart" is a compelling story of one man\'s tragic downfall in pre-colonial Nigeria. A must-read for anyone interested in African literature and history.', price: 1800, originalPrice: 1800, imageUrls: [
        'https://images.unsplash.com/photo-1543784184-1c6e156407db?w=800',
        'https://images.unsplash.com/photo-1461360370928-88290ab05292?w=800',
        'https://images.unsplash.com/photo-1518997232213-991b585c5def?w=800'
      ], timesOrdered: 155, reviews: [{ id: 'review-bk1-1', author: 'Reader', rating: 5, comment: 'A powerful and important book. Achebe\'s writing is incredible. It has stayed with me long after finishing it.', date: '2024-07-22' }]
    },
    {
      id: 'books-002', name: 'Ankara Fabric Journal', description: 'A beautiful hardcover journal covered in vibrant Ankara fabric.', longDescription: 'Let your thoughts and ideas flourish in this eye-catching journal. It features a durable hardcover wrapped in authentic Ankara fabric and contains 200 lined pages of high-quality paper.', price: 2500, originalPrice: 2800, imageUrls: [
        'https://images.unsplash.com/photo-1621336143335-3372c2121067?w=800',
        'https://images.unsplash.com/photo-1595134653554-227d8cf12e35?w=800',
        'https://images.unsplash.com/photo-1597089439121-515f4e0a724a?w=800'
      ], timesOrdered: 110, reviews: [{ id: 'review-bk2-1', author: 'Writer', rating: 5, comment: 'This journal is too beautiful to write in... but I will! The fabric cover is amazing and the paper quality is great.', date: '2024-07-21' }]
    },
    {
      id: 'books-003', name: '"Homegoing" by Yaa Gyasi', description: 'An epic, multi-generational novel from Ghana.', longDescription: '"Homegoing" follows the parallel paths of two half-sisters and their descendants through eight generations: from the Gold Coast of Africa to the plantations of Mississippi. A stunning and unforgettable debut.', price: 2200, originalPrice: 2200, imageUrls: [
        'https://images.unsplash.com/photo-1543784184-1c6e156407db?w=800',
        'https://images.unsplash.com/photo-1461360370928-88290ab05292?w=800',
        'https://images.unsplash.com/photo-1518997232213-991b585c5def?w=800'
      ], timesOrdered: 250, reviews: [{ id: 'review-bk3-1', author: 'BookClub', rating: 5, comment: 'An absolute masterpiece. The way Gyasi weaves the story together is brilliant. Our whole book club was blown away.', date: '2024-07-20' }]
    },
    {
      id: 'books-004', name: 'Mudcloth Pattern Greeting Card Set', description: 'A set of 6 blank greeting cards featuring different mudcloth patterns.', longDescription: 'Send a stylish note with these beautiful cards. Each card in the set features a different authentic Bogolan (mudcloth) design, printed on high-quality recycled cardstock. Comes with envelopes.', price: 1500, originalPrice: 1500, imageUrls: [
        'https://images.unsplash.com/photo-1622372033333-dc8b5c5a278d?w=800',
        'https://images.unsplash.com/photo-1621949172421-9875de9a74c7?w=800',
        'https://images.unsplash.com/photo-1620786259049-775b310438a0?w=800'
      ], timesOrdered: 162, reviews: [{ id: 'review-bk4-1', author: 'SnailMailFan', rating: 5, comment: 'These cards are so chic and unique. The quality is excellent. I love having them on hand for any occasion.', date: '2024-07-18' }]
    },
    {
      id: 'books-005', name: 'Adinkra Symbol Stamp Set', description: 'A set of wooden stamps featuring 5 different Ghanaian Adinkra symbols.', longDescription: 'Get creative with these beautiful Adinkra symbol stamps. Perfect for scrapbooking, card making, or decorating your journal. Each set includes 5 different symbols and their meanings.', price: 2800, originalPrice: 2800, imageUrls: [
        'https://images.unsplash.com/photo-1617453691342-f8c6d1f9a1e3?w=800',
        'https://images.unsplash.com/photo-1611652033952-b05425211933?w=800',
        'https://images.unsplash.com/photo-1611591437134-4b5b88282365?w=800'
      ], timesOrdered: 170, reviews: [{ id: 'review-bk5-1', author: 'Crafter', rating: 5, comment: 'The stamps are beautifully carved and make a clear impression. I love learning about the meanings of the symbols.', date: '2024-07-16' }]
    },
    {
      id: 'books-006', name: 'Nelson Mandela\'s "Long Walk to Freedom"', description: 'The autobiography of the anti-apartheid hero and former South African president.', longDescription: 'An inspiring and essential read, this autobiography chronicles the extraordinary life of Nelson Mandela, from his childhood to his 27 years in prison and his eventual role in shaping a new South Africa.', price: 2500, originalPrice: 2500, imageUrls: [
        'https://images.unsplash.com/photo-1543784184-1c6e156407db?w=800',
        'https://images.unsplash.com/photo-1461360370928-88290ab05292?w=800',
        'https://images.unsplash.com/photo-1518997232213-991b585c5def?w=800'
      ], timesOrdered: 230, reviews: [{ id: 'review-bk6-1', author: 'HistoryReader', rating: 5, comment: 'An incredible story of resilience, forgiveness, and leadership. Everyone should read this book.', date: '2024-07-15' }]
    },
    {
      id: 'books-007', name: 'Recycled Paper Note Pad', description: 'A small notepad made from recycled paper and decorated with beads.', longDescription: 'Jot down your notes on this eco-friendly notepad. The cover is made from textured, recycled paper and adorned with a simple beaded design. Handmade and fair trade.', price: 900, originalPrice: 900, imageUrls: [
        'https://images.unsplash.com/photo-1620786259049-775b310438a0?w=800',
        'https://images.unsplash.com/photo-1621949172421-9875de9a74c7?w=800',
        'https://images.unsplash.com/photo-1622372033333-dc8b5c5a278d?w=800'
      ], timesOrdered: 222, reviews: [{ id: 'review-bk7-1', author: 'EcoNotes', rating: 5, comment: 'A lovely little notepad. It feels good to use a recycled product. Makes a great small gift.', date: '2024-07-14' }]
    },
    {
      id: 'books-008', name: '"The Old Way" A Kenyan Memoir of a Maasai Warrior', description: 'A memoir by a Maasai warrior.', longDescription: 'This book will give you a glimpse of the Maasai Culture. This book is about Elizabeth L. Marshall a Maasai woman who tells her stories about the culture and her life.', price: 1800, originalPrice: 1800, imageUrls: [
        'https://images.unsplash.com/photo-1543784184-1c6e156407db?w=800',
        'https://images.unsplash.com/photo-1461360370928-88290ab05292?w=800',
        'https://images.unsplash.com/photo-1518997232213-991b585c5def?w=800'
      ], timesOrdered: 152, reviews: [{ id: 'review-bk8-1', author: 'Explorer', rating: 5, comment: 'A fascinating and beautifully written memoir. It offers an incredible insight into a completely different way of life.', date: '2024-07-12' }]
    },
    {
      id: 'books-009', name: 'Hand-carved Wooden Pen', description: 'A unique, refillable ballpoint pen with a hand-carved animal topper.', longDescription: 'Make writing a little more fun with this unique pen. The body is made of polished wood, and it features a hand-carved safari animal at the top (styles vary). It takes standard ballpoint refills.', price: 1200, originalPrice: 1200, imageUrls: [
        'https://images.unsplash.com/photo-1610714150249-93e5a5f45209?w=800',
        'https://images.unsplash.com/photo-1610714150172-21f44a42371b?w=800',
        'https://images.unsplash.com/photo-1563236780-a6a964eac221?w=800'
      ], timesOrdered: 212, reviews: [{ id: 'review-bk9-1', author: 'PenCollector', rating: 4, comment: 'A very cool and unique pen. The carving is charming. It writes smoothly too.', date: '2024-07-10' }]
    },
    {
      id: 'books-010', name: 'African Proverbs Coloring Book', description: 'An adult coloring book featuring intricate patterns and wise African proverbs.', longDescription: 'Relax and de-stress with this beautiful coloring book. Each page features an inspiring proverb from across the continent, surrounded by intricate, meditative patterns ready for you to bring to life with color.', price: 1600, originalPrice: 1600, imageUrls: [
        'https://images.unsplash.com/photo-1543784184-1c6e156407db?w=800',
        'https://images.unsplash.com/photo-1461360370928-88290ab05292?w=800',
        'https://images.unsplash.com/photo-1518997232213-991b585c5def?w=800'
      ], timesOrdered: 110, reviews: [{ id: 'review-bk10-1', author: 'CreativeSoul', rating: 5, comment: 'I love this coloring book! The designs are beautiful and I enjoy reading the proverbs as I color. Very relaxing.', date: '2024-07-09' }]
    }
   ]
};
