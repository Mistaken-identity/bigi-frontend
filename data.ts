import { Product } from './types';

export const LOCAL_PRODUCTS: Record<string, Product[]> = {
  "Apparel & Fashion": [
    {
      id: 'fashion-001',
      name: 'Azure Blue Kitenge Dress',
      description: 'A vibrant, floor-length dress made from 100% authentic Kitenge fabric.',
      longDescription: 'Embrace bold patterns and vibrant colors with this stunning Azure Blue Kitenge Dress. Expertly tailored for a flattering silhouette, this dress is perfect for weddings, parties, or making a statement. The breathable cotton fabric ensures comfort all day long.',
      price: 6499,
      originalPrice: 7200,
      imageUrls: [
          '/assets/images/a khanga leso dress in Mombasa old town.jpeg',
          'https://images.unsplash.com/photo-1599827827055-66760591f24a?w=800',
          'https://images.unsplash.com/photo-1588185968037-353d7123933c?w=800',
      ],
      timesOrdered: 420,
      reviews: [
          { id: 'review-f1-1', author: 'Wanja M.', rating: 5, comment: 'Absolutely gorgeous dress! The fabric is high quality and the colors are so vibrant. I received so many compliments.', date: '2024-07-20' },
          { id: 'review-f1-2', author: 'Amina H.', rating: 5, comment: 'Fits perfectly and is very comfortable to wear. The craftsmanship is excellent.', date: '2024-07-18' },
          { id: 'review-f1-3', author: 'Sarah K.', rating: 4, comment: 'Beautiful dress, though the zipper was a bit stiff at first. Overall, a great purchase.', date: '2024-07-15' },
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
          { id: 'review-f2-1', author: 'Isaac Etyang.', rating: 5, comment: 'The embroidery is stunning and the fabric feels great. I wore it to a wedding and felt like a king!', date: '2024-07-21' },
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
        { id: 'review-f3-1', author: 'Cynthia N.', rating: 5, comment: 'The fabric is beautiful and the length is perfect for so many styles. I love it!', date: '2024-07-20' },
        { id: 'review-f3-2', author: 'Naturalista', rating: 5, comment: 'High-quality fabric that doesn\'t slip. The colors are exactly as pictured.', date: '2024-07-18' }
      ]
    },
    {
      id: 'fashion-004',
      name: 'Kente Cloth Bow Tie',
      description: 'A pre-tied bow tie made from authentic Ghanaian Kente cloth.',
      longDescription: 'Add a touch of heritage and color to your formal wear. This Kente bow tie is expertly crafted and comes pre-tied with an adjustable strap for a perfect fit every time.',
      price: 2500,
      originalPrice: 2500,
      imageUrls: [
        'https://images.unsplash.com/photo-1512101957429-39b0d23c8a99?w=800',
        'https://images.unsplash.com/photo-1579301258942-824f9b8b321a?w=800',
        'https://images.unsplash.com/photo-1594938382329-87a177558655?w=800'
      ],
      timesOrdered: 210,
      reviews: [
        { id: 'review-f4-1', author: 'DapperDan', rating: 5, comment: 'Stunning bow tie. The weaving is intricate and the colors pop. It was a huge hit at the gala.', date: '2024-07-19' },
      ]
    },
    {
      id: 'fashion-005', name: 'Bogolan Kimono Jacket', description: 'A chic, open-front kimono made from Malian mudcloth.', longDescription: 'This stylish Bogolan (mudcloth) kimono is the perfect layering piece. Its traditional patterns are hand-painted, making each jacket a unique work of art. Lightweight and versatile for any season.', price: 8500, originalPrice: 9000, imageUrls: [
        'https://images.unsplash.com/photo-1605346442657-4a2599c2FEB3?w=800',
        'https://images.unsplash.com/photo-1593431639803-3b898135506a?w=800',
        'https://images.unsplash.com/photo-1552826317-e9a9a3b69234?w=800'
      ], timesOrdered: 230, reviews: [{ id: 'review-f5-1', author: 'ArtisanLover', rating: 5, comment: 'Absolutely beautiful. You can feel the quality and the story in the fabric. It drapes perfectly.', date: '2024-07-22' }]
    },
    {
      id: 'fashion-006', name: 'Adire Tunic', description: 'A vibrant, hand-dyed tunic from Nigeria.', longDescription: 'This beautiful tunic features traditional Adire tie-dye techniques from Nigeria, creating stunning and unique patterns. Made from soft, breathable cotton, it\'s perfect for a stylish, comfortable look.', price: 5200, originalPrice: 5500, imageUrls: [
        'https://images.unsplash.com/photo-1609228394464-63de239b3bd0?w=800',
        'https://images.unsplash.com/photo-1595882512144-db4520a767e4?w=800',
        'https://images.unsplash.com/photo-1588185968037-353d7123933c?w=800'
      ], timesOrdered: 204, reviews: [{ id: 'review-f6-1', author: 'Ngozi A.', rating: 5, comment: 'The dye patterns are incredible. So much more beautiful in person. I love wearing this piece of my heritage.', date: '2024-07-21' }]
    },
    {
      id: 'fashion-007', name: 'Shweshwe A-Line Skirt', description: 'A colorful A-line skirt from South Africa.', longDescription: 'Made from iconic Three Cats Shweshwe fabric, this A-line skirt boasts vibrant geometric patterns and a flattering silhouette. It features a comfortable waistband and side pockets.', price: 4500, originalPrice: 4500, imageUrls: [
        'https://images.unsplash.com/photo-1551843425-1a8a7c2c2f82?w=800',
        'https://images.unsplash.com/photo-1620309136936-e380e3c545b7?w=800',
        'https://images.unsplash.com/photo-1617053314959-2384a44e46a2?w=800'
      ], timesOrdered: 210, reviews: [{ id: 'review-f7-1', author: 'Lerato P.', rating: 5, comment: 'Beautifully made skirt and the fabric is top quality. The pockets are a huge plus!', date: '2024-07-20' }]
    },
    {
      id: 'fashion-008', name: 'Kikoy Beach Sarong', description: 'A soft, versatile sarong from Kenya.', longDescription: 'Woven from soft, absorbent cotton, the traditional Kenyan Kikoy is the perfect beach accessory. Use it as a sarong, a towel, a scarf, or a throw. Features distinctive hand-knotted tassels.', price: 2800, originalPrice: 3000, imageUrls: [
        'https://images.unsplash.com/photo-1592328775213-9a3a693ce480?w=800',
        'https://images.unsplash.com/photo-1590820088924-2c70094054a8?w=800',
        'https://images.unsplash.com/photo-1621336143335-3372c2121067?w=800'
      ], timesOrdered: 250, reviews: [{ id: 'review-f8-1', author: 'BeachBum', rating: 5, comment: 'So soft and the colors are gorgeous. Dries quickly. My new vacation essential.', date: '2024-07-18' }]
    },
    {
      id: 'fashion-009', name: 'Men\'s Agbada Robe', description: 'A grand, flowing robe for special occasions.', longDescription: 'This traditional Nigerian Agbada is a three-piece set featuring a grand, wide-sleeved robe, an undervest, and matching trousers. Made from premium damask with intricate embroidery.', price: 15000, originalPrice: 16500, imageUrls: [
        'https://images.unsplash.com/photo-1585232240183-9b4f63ec255b?w=800',
        'https://images.unsplash.com/photo-1601925698619-8de3e497b714?w=800',
        'https://images.unsplash.com/photo-1602133221473-207959438c22?w=800'
      ], timesOrdered: 324, reviews: [{ id: 'review-f9-1', author: 'Chief Ade', rating: 5, comment: 'An exceptional piece. The craftsmanship is flawless. I felt incredibly proud wearing it to my son\'s wedding.', date: '2024-07-15' }]
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
      name: 'Handwoven Sisal Basket',
      description: 'A beautiful and functional decorative basket, handwoven by Kenyan artisans.',
      longDescription: 'Add a touch of authentic African craftsmanship to your home with this sisal basket. Perfect for storing blankets, magazines, or as a planter pot cover. Each basket is unique, showcasing the skill of the weaver.',
      price: 3500,
      originalPrice: 4000,
      imageUrls: [
          '/public/assets',
          'https://images.unsplash.com/photo-1550948386-89512875a643?w=800',
          'https://images.unsplash.com/photo-1620912189839-858850a1b654?w=800',
      ],
      timesOrdered: 307,
      reviews: [
          { id: 'review-h1-1', author: 'Jane D.', rating: 5, comment: 'This basket is even more beautiful in person. The quality is amazing and it adds such a nice, natural touch to my living room.', date: '2024-07-12' },
          { id: 'review-h1-2', author: 'EcoLiving', rating: 5, comment: 'I love that this is a handmade, sustainable product. It\'s sturdy and beautifully made. Highly recommend!', date: '2024-07-10' },
          { id: 'review-h1-3', author: 'Mark T.', rating: 4, comment: 'Great basket. The colors are slightly different from the photo, but that\'s expected with handmade items.', date: '2024-07-09' },
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
      ],
      timesOrdered: 420,
      reviews: [
        { id: 'review-h2-1', author: 'DesignerDivya', rating: 5, comment: 'Stunning. The texture and patterns are incredible. They are the perfect statement piece for my client\'s living room.', date: '2025-07-20' },
        { id: 'review-h2-2', author: 'Kevin O.', rating: 5, comment: 'They look fantastic and feel very durable. Love the story behind them.', date: '2025-07-18' },
      ]
    },
    {
      id: 'home-003', name: 'Modern TV Stand', description: 'Elegant wooden TV stand with open storage and sleek design, handcrafted from sustainable wood.', longDescription: 'The Modern TV Stand combines function and beauty with clean lines, solid wood craftsmanship, and durable finishes. Designed with multiple shelves for media devices and decor, this piece offers both organization and aesthetic appeal. Hand-polished surfaces highlight the natural grain of the wood, adding warmth to any living space.', price: 2499, originalPrice: 2900, imageUrls: [
        '/assets/images/tvstand1.jpg',
        '/assets/images/tvstand2.jpg',
        '/assets/images/tvstand.jpg'
      ], timesOrdered: 418, reviews: [{ id: 'review-h3-1', author: 'HostessWithTheMostess', rating: 5, comment: 'Solid, sturdy, and beautiful! It fits perfectly under my 55-inch TV. The natural finish is stunning.', date: '2025-07-22' } ]
    },
    {
      id: 'home-004', name: 'Modern Minimalist TV Stand', description: 'Sleek wooden TV stand with open shelving and clean modern lines.', longDescription: 'The Modern Minimalist TV Stand is designed for simplicity and function. Crafted from sustainably sourced mahogany, it offers spacious open shelves for media accessories and a cable management slot to keep your setup clean. Perfect for modern apartments and minimalist interiors.', price: 7800, originalPrice: 7800, imageUrls: [
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
      ], timesOrdered: 251, reviews: [{ id: 'review-h5-1', author: 'CozyCorner', rating: 5, comment: 'The softest blanket I have ever owned. It\'s beautifully made and has a very elegant look.', date: '2024-07-18' }]
    },
    {
      id: 'home-006', name: 'Baule Cloth Wall Hanging', description: 'An authentic textile wall hanging from Côte d\'Ivoire.', longDescription: 'This Baule cloth wall hanging features intricate indigo-dyed patterns and fine embroidery. A stunning piece of textile art that brings history and texture to your walls.', price: 12000, originalPrice: 12000, imageUrls: [
        'https://images.unsplash.com/photo-1618221376839-a7965f7a0e23?w=800',
        'https://images.unsplash.com/photo-1618221376814-4903e62f689f?w=800',
        'https://images.unsplash.com/photo-1609228394464-63de239b3bd0?w=800'
      ], timesOrdered: 210, reviews: [{ id: 'review-h6-1', author: 'DesignInspo', rating: 5, comment: 'An incredible find. The craftsmanship is breathtaking. It\'s the centerpiece of my gallery wall.', date: '2024-07-15' }]
    },
    {
      id: 'home-007', name: 'Ostrich Eggshell Candle Holder', description: 'A unique candle holder made from a decorated ostrich eggshell.', longDescription: 'Sourced from Namibia, this candle holder is made from a real, unfertilized ostrich eggshell, carefully carved and decorated with traditional San patterns. It casts a warm, beautiful glow.', price: 4200, originalPrice: 4200, imageUrls: [
        'https://images.unsplash.com/photo-1614285458922-a54b3834e5a9?w=800',
        'https://images.unsplash.com/photo-1596205244510-53434647355e?w=800',
        'https://images.unsplash.com/photo-1612188173489-86f78a7b5d0e?w=800'
      ], timesOrdered: 80, reviews: [{ id: 'review-h7-1', author: 'GiftGiver', rating: 5, comment: 'Bought this as a unique gift and it was a huge success. So unusual and beautiful.', date: '2024-07-14' }]
    },
    {
      id: 'home-008', name: 'Raffia Palm Placemat Set', description: 'A set of 4 handwoven placemats from Madagascar.', longDescription: 'Bring a natural, bohemian touch to your dining table with these raffia placemats. Woven by hand, they are durable, beautiful, and protect your table in style.', price: 3800, originalPrice: 4000, imageUrls: [
        'https://images.unsplash.com/photo-1599187825597-4054b011403b?w=800',
        'https://images.unsplash.com/photo-1550948386-89512875a643?w=800',
        'https://images.unsplash.com/photo-1620912189839-858850a1b654?w=800'
      ], timesOrdered: 133, reviews: [{ id: 'review-h8-1', author: 'DinnerPartyPro', rating: 5, comment: 'These look fantastic on my table. Very well made and easy to clean.', date: '2024-07-10' }]
    },
    {
      id: 'home-009', name: 'Tuareg Leather Floor Cushion', description: 'A hand-tooled leather pouf from Morocco.', longDescription: 'This authentic Moroccan pouf is made from genuine leather and hand-stitched with intricate Tuareg patterns. Perfect as extra seating, a footstool, or a unique side table. (Ships unstuffed).', price: 11500, originalPrice: 12500, imageUrls: [
        'https://images.unsplash.com/photo-1589997193238-552458627a6f?w=800',
        'https://images.unsplash.com/photo-1613919099457-65814a682a93?w=800',
        'https://images.unsplash.com/photo-1593113548208-88b1a2b5a198?w=800'
      ], timesOrdered: 230, reviews: [{ id: 'review-h9-1', author: 'BohoChic', rating: 5, comment: 'The leather is beautiful and the stitching is perfect. It looks so good in my living room.', date: '2024-07-08' }]
    },
    {
      id: 'home-010', name: 'Ndebele Print Table Runner', description: 'A vibrant table runner with South African Ndebele patterns.', longDescription: 'Brighten up your dining space with this colorful table runner. It features the bold, geometric patterns characteristic of Ndebele art, printed on durable, high-quality cotton.', price: 2900, originalPrice: 2900, imageUrls: [
        'https://images.unsplash.com/photo-1551843425-1a8a7c2c2f82?w=800',
        'https://images.unsplash.com/photo-1620309136936-e380e3c545b7?w=800',
        'https://images.unsplash.com/photo-1617053314959-2384a44e46a2?w=800'
      ], timesOrdered: 180, reviews: [{ id: 'review-h10-1', author: 'Entertainer', rating: 5, comment: 'Vibrant colors and great quality fabric. It really makes my table setting pop.', date: '2024-07-05' }]
    },
  ],
  "Jewelry": [
    {
      id: 'jewelry-001',
      name: 'Maasai Beaded Necklace',
      description: 'A vibrant, multi-layered necklace handmade by Maasai women.',
      longDescription: 'This traditional Maasai necklace is a wearable piece of art. Crafted with hundreds of tiny glass beads, its intricate patterns and bold colors represent beauty, strength, and tradition. It features a secure and comfortable fastening.',
      price: 4200,
      originalPrice: 4200,
      imageUrls: [
        '/assets/images/',
        'https://images.unsplash.com/photo-1634081639910-3a5b3a65a363?w=800',
        'https://images.unsplash.com/photo-1585646143497-83a21b35c13b?w=800',
      ],
      timesOrdered: 215,
      reviews: [
        { id: 'review-j1-1', author: 'AfroChic', rating: 5, comment: 'A true statement piece! The beadwork is incredibly detailed. It\'s lightweight and comfortable to wear all day.', date: '2024-07-21' },
        { id: 'review-j1-2', author: 'GiftGiver', rating: 5, comment: 'Bought this as a gift for my sister and she was blown away. It\'s a beautiful piece of culture and art.', date: '2024-07-19' },
      ]
    },
    {
      id: 'jewelry-002',
      name: 'Brass Spiral Earrings',
      description: 'Elegant spiral earrings handcrafted from reclaimed brass in Nairobi.',
      longDescription: 'These minimalist yet striking earrings are molded and polished by hand from recycled brass. Their elegant spiral design is versatile, perfect for both everyday wear and special occasions. Lightweight and hypoallergenic.',
      price: 2500,
      originalPrice: 2800,
      imageUrls: [
        'https://images.unsplash.com/photo-1617453691342-f8c6d1f9a1e3?w=800',
        'https://images.unsplash.com/photo-1611652033952-b05425211933?w=800',
        'https://images.unsplash.com/photo-1611591437134-4b5b88282365?w=800',
      ],
      timesOrdered: 210,
      reviews: [
        { id: 'review-j2-1', author: 'StylishSusan', rating: 5, comment: 'I wear these almost every day. They are simple, elegant, and go with everything. Plus, I love that they are made from recycled materials.', date: '2024-07-18' },
        { id: 'review-j2-2', author: 'ArtLover', rating: 5, comment: 'Beautifully crafted. They have a lovely weight to them and catch the light perfectly.', date: '2024-07-15' },
      ]
    },
    {
      id: 'jewelry-003', name: 'Fulani Gold Twisted Hoops', description: 'Iconic golden hoops inspired by the Fulani people of West Africa.', longDescription: 'These lightweight, oversized hoops are crafted from gold-plated brass, featuring the distinctive twisted design of Fulani jewelry. They are a bold, timeless statement of elegance and heritage.', price: 3800, originalPrice: 4000, imageUrls: [
        'https://images.unsplash.com/photo-1611591437134-4b5b88282365?w=800',
        'https://images.unsplash.com/photo-1620912189839-858850a1b654?w=800',
        'https://images.unsplash.com/photo-1617453691342-f8c6d1f9a1e3?w=800'
      ], timesOrdered: 150, reviews: [{ id: 'review-j3-1', author: 'GoldenGirl', rating: 5, comment: 'I feel so powerful when I wear these. They are surprisingly light for their size. Absolutely love them!', date: '2024-07-22' }]
    },
    {
      id: 'jewelry-004', name: 'Tuareg Silver Ring', description: 'A sterling silver ring with traditional Tuareg engravings.', longDescription: 'Handcrafted by Tuareg artisans in the Sahara, this sterling silver ring features intricate geometric patterns symbolic of the desert nomads. A solid, meaningful piece of wearable art.', price: 6200, originalPrice: 6200, imageUrls: [
        'https://images.unsplash.com/photo-1600985497269-37a4a2b56412?w=800',
        'https://images.unsplash.com/photo-1547496614-54c7283c7a9f?w=800',
        'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800'
      ], timesOrdered: 280, reviews: [{ id: 'review-j4-1', author: 'Silver_Fan', rating: 5, comment: 'The detail on this ring is incredible. It has a great weight and feels very special to wear.', date: '2024-07-20' }]
    },
    {
      id: 'jewelry-005', name: 'Cowrie Shell Choker', description: 'A beautiful choker necklace made with natural cowrie shells.', longDescription: 'This trendy yet traditional choker is made from natural cowrie shells, historically a symbol of wealth and fertility in Africa. It has an adjustable cord for a comfortable fit.', price: 1900, originalPrice: 1900, imageUrls: [
        'https://images.unsplash.com/photo-1596701918349-74d32a0a2bfb?w=800',
        'https://images.unsplash.com/photo-1582294121586-44c10705f15a?w=800',
        'https://images.unsplash.com/photo-1585646143497-83a21b35c13b?w=800'
      ], timesOrdered: 310, reviews: [{ id: 'review-j5-1', author: 'IslandVibes', rating: 5, comment: 'Perfect summer necklace. It\'s well-made and looks great layered with other pieces.', date: '2024-07-18' }]
    },
    {
      id: 'jewelry-006', name: 'Ankole Horn Cuff Bracelet', description: 'A polished cuff bracelet made from sustainably sourced Ankole cow horn.', longDescription: 'This stunning cuff is handcrafted in Uganda from the horn of the Ankole-Watusi cattle. The horn is ethically sourced as a byproduct. Each piece has a unique blend of natural colors, from cream to black.', price: 4500, originalPrice: 4800, imageUrls: [
        'https://images.unsplash.com/photo-1620912189839-858850a1b654?w=800',
        'https://images.unsplash.com/photo-1550948386-89512875a643?w=800',
        'https://images.unsplash.com/photo-1611652033952-b05425211933?w=800'
      ], timesOrdered: 251, reviews: [{ id: 'review-j6-1', author: 'EcoWarrior', rating: 5, comment: 'So beautiful and I love that it\'s a sustainable product. The finish is like glass. A real conversation piece.', date: '2024-07-16' }]
    },
    {
      id: 'jewelry-007', name: 'Zulu Beaded Hoop Earrings', description: 'Small hoop earrings adorned with intricate Zulu beadwork.', longDescription: 'These vibrant hoop earrings feature tiny glass beads meticulously woven in traditional Zulu patterns. They are lightweight, colorful, and perfect for adding a touch of South African artistry to your look.', price: 2800, originalPrice: 2800, imageUrls: [
        'https://images.unsplash.com/photo-1599387737838-66a151b782b4?w=800',
        'https://images.unsplash.com/photo-1634081639910-3a5b3a65a363?w=800',
        'https://images.unsplash.com/photo-1582294121586-44c10705f15a?w=800'
      ], timesOrdered: 180, reviews: [{ id: 'review-j7-1', author: 'BeadLover', rating: 5, comment: 'The beadwork is so tiny and perfect! I\'m amazed at the skill. They are my new favorite earrings.', date: '2024-07-14' }]
    },
    {
      id: 'jewelry-008', name: 'Recycled Paper Bead Bracelet', description: 'A colorful, stretchable bracelet made from rolled recycled paper beads.', longDescription: 'Handmade by women in Ugandan co-ops, each bead on this bracelet is carefully rolled and varnished from recycled paper. A beautiful example of sustainable, empowering art.', price: 1500, originalPrice: 1500, imageUrls: [
        'https://images.unsplash.com/photo-1620786259049-775b310438a0?w=800',
        'https://images.unsplash.com/photo-1621949172421-9875de9a74c7?w=800',
        'https://images.unsplash.com/photo-1599387737838-66a151b782b4?w=800'
      ], timesOrdered: 250, reviews: [{ id: 'review-j8-1', author: 'GreenQueen', rating: 5, comment: 'Love the story behind this bracelet, and it\'s so colorful and fun to wear. A great, affordable gift.', date: '2024-07-11' }]
    },
    {
      id: 'jewelry-009', name: 'Berber Enamel Pendant', description: 'A silver and enamel pendant from the Berber artisans of Morocco.', longDescription: 'This striking pendant features the intricate silverwork and vibrant enamel detailing characteristic of Berber jewelry. A powerful amulet and a beautiful piece of North African history.', price: 7500, originalPrice: 8000, imageUrls: [
        'https://images.unsplash.com/photo-1585646143497-83a21b35c13b?w=800',
        'https://images.unsplash.com/photo-1600985497269-37a4a2b56412?w=800',
        'https://images.unsplash.com/photo-1547496614-54c7283c7a9f?w=800'
      ], timesOrdered: 244, reviews: [{ id: 'review-j9-1', author: 'HistoryBuff', rating: 5, comment: 'A museum-quality piece. The craftsmanship is stunning. It feels amazing to wear.', date: '2024-07-10' }]
    },
    {
      id: 'jewelry-010', name: 'Africa Map Brass Necklace', description: 'A simple and elegant necklace with a brass pendant of the African continent.', longDescription: 'Show your love for the motherland with this chic necklace. The pendant is cut from polished brass and hangs on a delicate, adjustable chain. A perfect everyday piece.', price: 2200, originalPrice: 2200, imageUrls: [
        'https://images.unsplash.com/photo-1611652033952-b05425211933?w=800',
        'https://images.unsplash.com/photo-1617453691342-f8c6d1f9a1e3?w=800',
        'https://images.unsplash.com/photo-1611591437134-4b5b88282365?w=800'
      ], timesOrdered: 310, reviews: [{ id: 'review-j10-1', author: 'ProudlyAfrican', rating: 5, comment: 'Simple, elegant, and meaningful. I haven\'t taken it off since I got it.', date: '2024-07-08' }]
    },
   ],
   "Art & Crafts": [
    {
      id: 'art-001',
      name: 'Hand-Carved Soapstone Giraffe',
      description: 'An elegant giraffe sculpture, hand-carved from Kisii soapstone.',
      longDescription: 'This graceful giraffe sculpture is carved by artisans in Tabaka, Kenya, from a single piece of soapstone. The stone\'s natural colors are brought out through a meticulous polishing process, making each piece unique.',
      price: 3800,
      originalPrice: 3800,
      imageUrls: [
        'https://images.unsplash.com/photo-1563236780-a6a964eac221?w=800',
        'https://images.unsplash.com/photo-1574781488226-5d614833a695?w=800',
        'https://images.unsplash.com/photo-1598235122244-3652a926315a?w=800',
      ],
      timesOrdered: 280,
      reviews: [
        { id: 'review-a1-1', author: 'CollectorKen', rating: 5, comment: 'The carving is exquisite and the finish is so smooth. A beautiful addition to my collection of African art.', date: '2024-07-22' },
        { id: 'review-a1-2', author: 'Grace P.', rating: 5, comment: 'I bought this as a housewarming gift, and it was a huge hit. It\'s a very elegant and authentic piece.', date: '2024-07-20' },
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
        { id: 'review-a2-2', author: 'Mike R.', rating: 5, comment: 'A fantastic piece of art that brings so much life to my office. The detail is wonderful.', date: '2025-08-19' },
      ]
    },
    {
      id: 'art-003', name: 'Makonde Ebony Sculpture', description: 'An intricate "Tree of Life" sculpture carved from African Blackwood.', longDescription: 'This traditional Makonde sculpture from Tanzania represents the interconnectedness of family and community. Intricately carved from a single piece of ebony, it is a powerful and beautiful work of art.', price: 18000, originalPrice: 18000, imageUrls: [
        'https://images.unsplash.com/photo-1616431955686-cb12a6d71a17?w=800',
        'https://images.unsplash.com/photo-1518997232213-991b585c5def?w=800',
        'https://images.unsplash.com/photo-1582294121586-44c10705f15a?w=800'
      ], timesOrdered: 150, reviews: [{ id: 'review-a3-1', author: 'ArtCollector', rating: 5, comment: 'A masterpiece. The level of detail is astounding. It is the pride of my collection.', date: '2024-07-21' }]
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
      ], timesOrdered: 250, reviews: [{ id: 'review-a5-1', author: 'CultureConnect', rating: 5, comment: 'These figures are so powerful and have such a presence. A very meaningful purchase for me.', date: '2024-07-18' }]
    },
    {
      id: 'art-006', name: 'Telephone Wire Bowl', description: 'A small, vibrant bowl woven from recycled telephone wire by Zulu artisans.', longDescription: 'A beautiful fusion of traditional weaving techniques and modern materials. This colorful bowl is a testament to the ingenuity of Zulu artisans in South Africa. Perfect as a catch-all for keys or jewelry.', price: 2800, originalPrice: 3000, imageUrls: [
        'https://images.unsplash.com/photo-1550948386-89512875a643?w=800',
        'https://images.unsplash.com/photo-1599187825597-4054b011403b?w=800',
        'https://images.unsplash.com/photo-1620912189839-858850a1b654?w=800'
      ], timesOrdered: 130, reviews: [{ id: 'review-a6-1', author: 'EcoChic', rating: 5, comment: 'So unique and colorful! I love that it\'s made from recycled materials. It\'s a perfect little pop of color on my dresser.', date: '2024-07-16' }]
    },
    {
      id: 'art-007', name: 'Ashanti Fertility Doll', description: 'A traditional "Akua\'ba" doll from the Ashanti people of Ghana.', longDescription: 'Carved from wood with a large, disc-like head, these dolls are traditional symbols of fertility and good fortune. A beautiful and culturally significant decorative object.', price: 4800, originalPrice: 4800, imageUrls: [
        'https://images.unsplash.com/photo-1518997232213-991b585c5def?w=800',
        'https://images.unsplash.com/photo-1563236780-a6a964eac221?w=800',
        'https://images.unsplash.com/photo-1616431955686-cb12a6d71a17?w=800'
      ], timesOrdered: 70, reviews: [{ id: 'review-a7-1', author: 'GlobalCollector', rating: 5, comment: 'A classic piece of African art. The carving is authentic and it has a wonderful energy.', date: '2024-07-14' }]
    },
    {
      id: 'art-008', name: 'Papyrus Painting', description: 'A painting on genuine papyrus depicting ancient Egyptian scenes.', longDescription: 'This artwork is hand-painted on authentic papyrus, made from the papyrus plant as it was in ancient Egypt. It features classic scenes of pharaohs and gods, bringing a piece of ancient history to your home.', price: 5500, originalPrice: 6000, imageUrls: [
        'https://images.unsplash.com/photo-1543784184-1c6e156407db?w=800',
        'https://images.unsplash.com/photo-1604462489955-a05a18ac4de5?w=800',
        'https://images.unsplash.com/photo-1569084051212-4a3a30f78137?w=800'
      ], timesOrdered: 50, reviews: [{ id: 'review-a8-1', author: 'HistoryLover', rating: 5, comment: 'Fascinating to see and touch real papyrus. The painting is well done. It looks amazing framed on my wall.', date: '2024-07-12' }]
    },
    {
      id: 'art-009', name: 'Dan Mask', description: 'A carved wooden ceremonial mask from the Dan people of Liberia/Côte d\'Ivoire.', longDescription: 'This replica Dan mask, known for its fine features and polished finish, represents a spirit of the forest. Carved from local wood, it is a powerful example of West African sculptural art.', price: 11000, originalPrice: 11000, imageUrls: [
        'https://images.unsplash.com/photo-1524210214436-15682ab574bb?w=800',
        'https://images.unsplash.com/photo-1525287236833-360157077884?w=800',
        'https://images.unsplash.com/photo-1518997232213-991b585c5def?w=800'
      ], timesOrdered: 300, reviews: [{ id: 'review-a9-1', author: 'ArtEnthusiast', rating: 5, comment: 'The craftsmanship is superb. The smooth finish and expressive features are captivating. A very powerful piece.', date: '2024-07-10' }]
    },
    {
      id: 'art-010', name: 'Banana Fiber Nativity Scene', description: 'A unique nativity scene handcrafted from banana fibers in Kenya.', longDescription: 'This charming, eco-friendly nativity set is meticulously crafted from dried banana leaves and fibers. A wonderful and unique addition to your holiday decorations.', price: 4200, originalPrice: 4200, imageUrls: [
        'https://images.unsplash.com/photo-1576483515152-870a2d65a25e?w=800',
        'https://images.unsplash.com/photo-1608394988939-858850a1b654?w=800',
        'https://images.unsplash.com/photo-1563236780-a6a964eac221?w=800'
      ], timesOrdered: 70, reviews: [{ id: 'review-a10-1', author: 'HolidaySpirit', rating: 5, comment: 'I\'ve never seen anything like it! So beautifully made and a very special piece for our family Christmas.', date: '2024-07-08' }]
    },
   ],
   "Health & Beauty": [
    {
      id: 'beauty-001',
      name: 'Raw Unrefined Shea Butter',
      description: '100% pure, unrefined shea butter sourced from Ghana.',
      longDescription: 'Nourish your skin and hair with the healing power of raw shea butter. Rich in vitamins A, E, and F, it deeply moisturizes, soothes irritation, and improves skin elasticity. Perfect for all skin types.',
      price: 1500,
      originalPrice: 1500,
      imageUrls: [
        'https://images.unsplash.com/photo-1560961913-b29a75cb1812?w=800',
        'https://images.unsplash.com/photo-1554922589-5cf27a9dea91?w=800',
        'https://images.unsplash.com/photo-1596701918349-74d32a0a2bfb?w=800'
      ],
      timesOrdered: 200,
      reviews: [
        { id: 'review-b1-1', author: 'NaturalBeauty', rating: 5, comment: 'This is the real deal. So creamy and moisturizing. It has done wonders for my dry skin and my daughter\'s eczema.', date: '2024-07-21' },
        { id: 'review-b1-2', author: 'Chris P.', rating: 5, comment: 'Amazing product. I use it for my hair and beard. A little goes a long way.', date: '2024-07-17' },
      ]
    },
    {
      id: 'beauty-002',
      name: 'Authentic African Black Soap',
      description: 'Traditional black soap made with cocoa pods and shea butter.',
      longDescription: 'Experience a deep, clarifying cleanse with authentic African Black Soap. Renowned for its ability to fight acne, reduce blemishes, and gently exfoliate, this soap leaves your skin feeling clean and refreshed without stripping its natural oils.',
      price: 1200,
      originalPrice: 1400,
      imageUrls: [
        'https://images.unsplash.com/photo-1601056263911-7383792f5899?w=800',
        'https://images.unsplash.com/photo-1616431955686-cb12a6d71a17?w=800',
        'https://images.unsplash.com/photo-1596701918349-74d32a0a2bfb?w=800'
      ],
      timesOrdered: 120,
      reviews: [
        { id: 'review-b2-1', author: 'ClearSkin', rating: 5, comment: 'This soap has been a game-changer for my acne-prone skin. My face feels so clean and my breakouts have reduced significantly.', date: '2024-07-22' },
        { id: 'review-b2-2', author: 'Sam D.', rating: 4, comment: 'Very effective, but make sure to moisturize well after using as it can be a bit drying. It lathers up really well.', date: '2024-07-15' },
      ]
    },
    {
      id: 'beauty-003', name: 'Qasil Powder', description: 'A versatile, cleansing leaf powder from Somalia.', longDescription: 'Used by Somali women for centuries, Qasil powder is a natural cleanser and mask. It gently exfoliates, evens skin tone, and clarifies the scalp. Just mix with water to form a paste.', price: 1800, originalPrice: 1800, imageUrls: [
        'https://images.unsplash.com/photo-1560961913-b29a75cb1812?w=800',
        'https://images.unsplash.com/photo-1554922589-5cf27a9dea91?w=800',
        'https://images.unsplash.com/photo-1601056263911-7383792f5899?w=800'
      ], timesOrdered: 200, reviews: [{ id: 'review-b3-1', author: 'SkincareGuru', rating: 5, comment: 'My skin has never felt so clean and soft. It\'s amazing as a face mask. A new holy grail product for me!', date: '2024-07-21' }]
    },
    {
      id: 'beauty-004', name: 'Marula Oil', description: 'Cold-pressed, virgin marula oil from Namibia.', longDescription: 'This luxurious, fast-absorbing oil is packed with antioxidants and omega fatty acids. It hydrates skin, reduces redness, and adds shine to hair without feeling greasy. A true super-food for your skin.', price: 2800, originalPrice: 3200, imageUrls: [
        'https://images.unsplash.com/photo-1554922589-5cf27a9dea91?w=800',
        'https://images.unsplash.com/photo-1560961913-b29a75cb1812?w=800',
        'https://images.unsplash.com/photo-1616431955686-cb12a6d71a17?w=800'
      ], timesOrdered: 120, reviews: [{ id: 'review-b4-1', author: 'GlowUp', rating: 5, comment: 'This oil feels so light but is incredibly moisturizing. My skin has a beautiful glow after using it for a week.', date: '2024-07-20' }]
    },
    {
      id: 'beauty-005', name: 'Rooibos Infused Body Butter', description: 'A rich body butter infused with antioxidant-rich South African rooibos.', longDescription: 'Soothe and protect your skin with this creamy body butter. It combines the moisturizing power of shea butter with the anti-aging benefits of rooibos tea extract.', price: 2200, originalPrice: 2200, imageUrls: [
        'https://images.unsplash.com/photo-1560961913-b29a75cb1812?w=800',
        'https://images.unsplash.com/photo-1554922589-5cf27a9dea91?w=800',
        'https://images.unsplash.com/photo-1601056263911-7383792f5899?w=800'
      ], timesOrdered: 135, reviews: [{ id: 'review-b5-1', author: 'Pampered', rating: 5, comment: 'Smells amazing and makes my skin feel so soft and hydrated all day. Not greasy at all.', date: '2024-07-18' }]
    },
    {
      id: 'beauty-006', name: 'Chebe Hair Growth Powder', description: 'A traditional hair-strengthening powder from Chad.', longDescription: 'Chebe powder is the secret to the incredibly long hair of the women in Chad. Mix it with your favorite oil or conditioner to create a paste that strengthens hair, prevents breakage, and promotes length retention.', price: 2500, originalPrice: 2500, imageUrls: [
        'https://images.unsplash.com/photo-1601056263911-7383792f5899?w=800',
        'https://images.unsplash.com/photo-1560961913-b29a75cb1812?w=800',
        'https://images.unsplash.com/photo-1554922589-5cf27a9dea91?w=800'
      ], timesOrdered: 220, reviews: [{ id: 'review-b6-1', author: 'LongHairGoals', rating: 5, comment: 'I\'ve noticed so much less shedding since I started using Chebe. My hair feels stronger and healthier.', date: '2024-07-16' }]
    },
    {
      id: 'beauty-007', name: 'Baobab Oil', description: '100% pure, cold-pressed baobab seed oil.', longDescription: 'Known in Africa as the "Tree of Life," the baobab provides this nourishing oil rich in vitamins. It helps improve skin elasticity, regenerate cells, and heal dry, cracked skin.', price: 2600, originalPrice: 2800, imageUrls: [
        'https://images.unsplash.com/photo-1554922589-5cf27a9dea91?w=800',
        'https://images.unsplash.com/photo-1560961913-b29a75cb1812?w=800',
        'https://images.unsplash.com/photo-1616431955686-cb12a6d71a17?w=800'
      ], timesOrdered: 210, reviews: [{ id: 'review-b7-1', author: 'SensitiveSkin', rating: 5, comment: 'This oil is amazing for my sensitive skin. It\'s very gentle and has helped with my dry patches.', date: '2024-07-15' }]
    },
    {
      id: 'beauty-008', name: 'African Net Exfoliating Sponge', description: 'A long, durable exfoliating net used in West Africa.', longDescription: 'Ditch your loofah for this incredible exfoliating sponge. It lathers beautifully, dries quickly, and is long enough to easily scrub your back. It exfoliates dead skin, leaving you smooth all over.', price: 1000, originalPrice: 1000, imageUrls: [
        'https://images.unsplash.com/photo-1601056263911-7383792f5899?w=800',
        'https://images.unsplash.com/photo-1616431955686-cb12a6d71a17?w=800',
        'https://images.unsplash.com/photo-1560961913-b29a75cb1812?w=800'
      ], timesOrdered: 120, reviews: [{ id: 'review-b8-1', author: 'SmoothOperator', rating: 5, comment: 'I will never go back to a regular loofah. This thing is a miracle worker. My skin has never been so smooth!', date: '2024-07-12' }]
    },
    {
      id: 'beauty-009', name: 'Kalahari Melon Seed Oil', description: 'A lightweight, detoxifying oil for oily and acne-prone skin.', longDescription: 'This non-comedogenic oil from the Kalahari desert is rich in linoleic acid, which helps to unclog pores and balance sebum production. It absorbs quickly, leaving skin feeling balanced and hydrated.', price: 2400, originalPrice: 2400, imageUrls: [
        'https://images.unsplash.com/photo-1554922589-5cf27a9dea91?w=800',
        'https://images.unsplash.com/photo-1560961913-b29a75cb1812?w=800',
        'https://images.unsplash.com/photo-1616431955686-cb12a6d71a17?w=800'
      ], timesOrdered: 143, reviews: [{ id: 'review-b9-1', author: 'OilySkinStruggles', rating: 5, comment: 'Finally, an oil that doesn\'t make me break out! It has actually helped reduce my blackheads and control my shine.', date: '2024-07-10' }]
    },
    {
      id: 'beauty-010', name: 'Frankincense Resin Incense', description: 'Raw frankincense resin from the Horn of Africa for burning.', longDescription: 'Purify your space with the sacred smoke of frankincense resin. Used for millennia in ceremonies, it has a calming, grounding aroma. Burn on a charcoal disc for the best experience.', price: 1600, originalPrice: 1600, imageUrls: [
        'https://images.unsplash.com/photo-1560961913-b29a75cb1812?w=800',
        'https://images.unsplash.com/photo-1601056263911-7383792f5899?w=800',
        'https://images.unsplash.com/photo-1554922589-5cf27a9dea91?w=800'
      ], timesOrdered: 190, reviews: [{ id: 'review-b10-1', author: 'ZenMaster', rating: 5, comment: 'The scent is absolutely divine and so calming. Much better than stick incense. Very high quality resin.', date: '2024-07-09' }]
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
        { id: 'review-acc1-1', author: 'Techie Tom', rating: 5, comment: 'Fits my laptop perfectly and looks amazing. The padding is thick enough to feel protective. Great conversation starter at the office!', date: '2024-07-18' },
        { id: 'review-acc1-2', author: 'StudentLife', rating: 5, comment: 'I love this sleeve! The colors are so bright and it makes my boring laptop look cool.', date: '2024-07-11' },
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
      timesOrdered: 280,
      reviews: [
        { id: 'review-acc2-1', author: 'Fashionista_Flo', rating: 5, comment: 'My new favorite bag. It\'s beautifully made, spacious, and the combination of leather and Kitenge is just stunning.', date: '2024-07-21' },
        { id: 'review-acc2-2', author: 'Brenda K.', rating: 5, comment: 'This bag is a work of art. The quality is top-notch and it\'s the perfect size for all my essentials.', date: '2024-07-18' },
      ]
    },
    {
      id: 'acc-003', name: 'Sisal & Leather Backpack', description: 'A unique backpack woven from sisal with leather accents.', longDescription: 'This sturdy and stylish backpack is perfect for everyday use. Handwoven from durable sisal fiber and finished with genuine leather straps and details, it combines natural textures with expert craftsmanship.', price: 8800, originalPrice: 9500, imageUrls: [
        'https://images.unsplash.com/photo-1599187825597-4054b011403b?w=800',
        'https://images.unsplash.com/photo-1550948386-89512875a643?w=800',
        'https://images.unsplash.com/photo-1620912189839-858850a1b654?w=800'
      ], timesOrdered: 310, reviews: [{ id: 'review-acc3-1', author: 'UrbanExplorer', rating: 5, comment: 'Such a cool and unique backpack. It\'s very sturdy and surprisingly spacious. I get compliments on it all the time.', date: '2024-07-20' }]
    },
    {
      id: 'acc-004', name: 'Beaded Leather Belt', description: 'A handmade leather belt featuring colorful Maasai beadwork.', longDescription: 'Elevate your jeans or dress with this beautiful, handcrafted belt. The genuine leather is adorned with intricate, hand-stitched beadwork in traditional Maasai patterns, finished with a solid brass buckle.', price: 5800, originalPrice: 5800, imageUrls: [
        'https://images.unsplash.com/photo-1634081639910-3a5b3a65a363?w=800',
        'https://images.unsplash.com/photo-1599387737838-66a151b782b4?w=800',
        'https://images.unsplash.com/photo-1585646143497-83a21b35c13b?w=800'
      ], timesOrdered: 332, reviews: [{ id: 'review-acc4-1', author: 'Style Maven', rating: 5, comment: 'The craftsmanship is incredible. A stunning, high-quality belt that makes any outfit special.', date: '2024-07-19' }]
    },
    {
      id: 'acc-005', name: 'Ankara Print Fabric Fan', description: 'A beautiful and functional folding fan made with Ankara fabric.', longDescription: 'Stay cool in style with this vibrant folding fan. Constructed with a sturdy wooden frame and covered in bold Ankara print fabric, it\'s a practical and beautiful accessory for warm days.', price: 1500, originalPrice: 1500, imageUrls: [
        'https://images.unsplash.com/photo-1621336143335-3372c2121067?w=800',
        'https://images.unsplash.com/photo-1595134653554-227d8cf12e35?w=800',
        'https://images.unsplash.com/photo-1597089439121-515f4e0a724a?w=800'
      ], timesOrdered: 302, reviews: [{ id: 'review-acc5-1', author: 'SunnyD', rating: 5, comment: 'So pretty and works great! I keep it in my purse all the time. The fabric is beautiful.', date: '2024-07-17' }]
    },
    {
      id: 'acc-006', name: 'Bogolan Passport Holder', description: 'A stylish passport holder made from authentic mudcloth.', longDescription: 'Travel in style while protecting your passport. This holder is made from genuine Malian mudcloth, with a durable lining and slots for your passport and travel cards.', price: 2900, originalPrice: 2900, imageUrls: [
        'https://images.unsplash.com/photo-1622372033333-dc8b5c5a278d?w=800',
        'https://images.unsplash.com/photo-1621949172421-9875de9a74c7?w=800',
        'https://images.unsplash.com/photo-1620786259049-775b310438a0?w=800'
      ], timesOrdered: 220, reviews: [{ id: 'review-acc6-1', author: 'Globetrotter', rating: 5, comment: 'Love this! It\'s so unique and well-made. Makes finding my passport in my bag so much easier.', date: '2024-07-15' }]
    },
    {
      id: 'acc-007', name: 'Recycled Brass Keychain', description: 'A heavy, polished keychain with an Adinkra symbol.', longDescription: 'Crafted from recycled brass in Nairobi, this keychain features a powerful Adinkra symbol from Ghana (styles vary). A small but meaningful piece of art to carry with you every day.', price: 1200, originalPrice: 1200, imageUrls: [
        'https://images.unsplash.com/photo-1617453691342-f8c6d1f9a1e3?w=800',
        'https://images.unsplash.com/photo-1611652033952-b05425211933?w=800',
        'https://images.unsplash.com/photo-1611591437134-4b5b88282365?w=800'
      ], timesOrdered: 96, reviews: [{ id: 'review-acc7-1', author: 'Chris', rating: 5, comment: 'Great quality. Has a nice weight to it. A cool, subtle way to carry some heritage.', date: '2024-07-14' }]
    },
    {
      id: 'acc-008', name: 'Ankole Horn Bottle Opener', description: 'A sleek bottle opener with a handle made of Ankole horn.', longDescription: 'This elegant bottle opener features a stainless steel head and a handle crafted from ethically-sourced Ankole horn. Each handle has a unique pattern, making it a sophisticated addition to any home bar.', price: 3500, originalPrice: 3500, imageUrls: [
        'https://images.unsplash.com/photo-1620912189839-858850a1b654?w=800',
        'https://images.unsplash.com/photo-1550948386-89512875a643?w=800',
        'https://images.unsplash.com/photo-1610714150249-93e5a5f45209?w=800'
      ], timesOrdered: 70, reviews: [{ id: 'review-acc8-1', author: 'HomeBarHero', rating: 5, comment: 'A beautiful and functional piece. Looks so much classier than a regular bottle opener.', date: '2024-07-12' }]
    },
    {
      id: 'acc-009', name: 'Woven Raffia Clutch', description: 'A chic, handwoven clutch bag made from natural raffia.', longDescription: 'Perfect for a summer evening, this clutch is woven from Madagascan raffia palm, featuring a simple, elegant design, a secure closure, and a lined interior.', price: 4200, originalPrice: 4500, imageUrls: [
        'https://images.unsplash.com/photo-1599187825597-4054b011403b?w=800',
        'https://images.unsplash.com/photo-1550948386-89512875a643?w=800',
        'https://images.unsplash.com/photo-1621336143335-3372c2121067?w=800'
      ], timesOrdered: 80, reviews: [{ id: 'review-acc9-1', author: 'SummerStyle', rating: 5, comment: 'My go-to summer bag. It\'s the perfect size and the natural texture is so chic.', date: '2024-07-11' }]
    },
    {
      id: 'acc-010', name: 'Shweshwe Sunglass Case', description: 'A soft, padded case for sunglasses in vibrant Shweshwe fabric.', longDescription: 'Protect your sunglasses with this colorful and soft case. Made from authentic South African Shweshwe fabric with a padded lining, it keeps your glasses safe from scratches in style.', price: 1600, originalPrice: 1600, imageUrls: [
        'https://images.unsplash.com/photo-1551843425-1a8a7c2c2f82?w=800',
        'https://images.unsplash.com/photo-1620309136936-e380e3c545b7?w=800',
        'https://images.unsplash.com/photo-1617053314959-2384a44e46a2?w=800'
      ], timesOrdered: 270, reviews: [{ id: 'review-acc10-1', author: 'FourEyes', rating: 5, comment: 'So much cuter than a boring black case. The fabric is lovely and it feels protective.', date: '2024-07-09' }]
    },
   ],
   "Footwear": [
    {
      id: 'shoes-001',
      name: 'Men\'s Beaded Leather Sandals',
      description: 'Handcrafted leather sandals with traditional Maasai beadwork.',
      longDescription: 'Step out in style and comfort with these unique leather sandals. Featuring a durable sole and soft leather straps adorned with intricate beadwork, they are a testament to skilled artisanship. Perfect for warm weather.',
      price: 5200,
      originalPrice: 5800,
      imageUrls: [
        'https://images.unsplash.com/photo-1562273246-885449e802c0?w=800',
        'https://images.unsplash.com/photo-1605812836263-8d4512a8449c?w=800',
        'https://images.unsplash.com/photo-1603191656209-9133f324c153?w=800',
      ],
      timesOrdered: 180,
      reviews: [
        { id: 'review-s1-1', author: 'Traveler_Dave', rating: 5, comment: 'These are the best sandals I\'ve ever owned. So comfortable and they look incredible. The beadwork is amazing.', date: '2024-07-21' },
        { id: 'review-s1-2', author: 'Ben Carter', rating: 4, comment: 'Great sandals. Took a day to break in the leather, but now they are super comfortable. Very well made.', date: '2024-07-16' },
      ]
    },
    {
      id: 'shoes-002', name: 'Women\'s Kitenge Print Espadrilles', description: 'Comfortable and stylish espadrilles covered in vibrant Kitenge fabric.', longDescription: 'These handmade espadrilles are the perfect mix of comfort and style. They feature a classic jute rope sole and a vibrant, colorful Kitenge fabric upper, bringing a touch of African sunshine to your step.', price: 4800, originalPrice: 4800, imageUrls: [
        'https://images.unsplash.com/photo-1617053314959-2384a44e46a2?w=800',
        'https://images.unsplash.com/photo-1588185968037-353d7123933c?w=800',
        'https://images.unsplash.com/photo-1599827827055-66760591f24a?w=800'
      ], timesOrdered: 250, reviews: [{ id: 'review-s2-1', author: 'ColorLover', rating: 5, comment: 'So comfy and the pattern is beautiful. I get so many compliments whenever I wear them.', date: '2024-07-22' }]
    },
    {
      id: 'shoes-003', name: 'Handwoven Raffia Loafers', description: 'Unisex loafers handwoven from natural raffia palm.', longDescription: 'These breathable and stylish loafers are meticulously woven from raffia for a unique, textured look. They are lightweight, flexible, and perfect for a relaxed, sophisticated style in warm weather.', price: 6500, originalPrice: 7000, imageUrls: [
        'https://images.unsplash.com/photo-1599187825597-4054b011403b?w=800',
        'https://images.unsplash.com/photo-1550948386-89512875a643?w=800',
        'https://images.unsplash.com/photo-1620912189839-858850a1b654?w=800'
      ], timesOrdered: 210, reviews: [{ id: 'review-s3-1', author: 'EuroStyle', rating: 5, comment: 'Incredibly chic and comfortable. They mold to your feet. Perfect for my trip to the coast.', date: '2024-07-20' }]
    },
    {
      id: 'shoes-004', name: 'Tire Sole "Ten Thousand Toes" Sandals', description: 'Durable and eco-friendly sandals made from recycled car tires.', longDescription: 'Known locally as "ten thousand toes" for their durability, these sandals are an iconic piece of Kenyan ingenuity. The sole is cut from a recycled tire and the straps are made of sturdy leather. Incredibly long-lasting.', price: 3200, originalPrice: 3200, imageUrls: [
        'https://images.unsplash.com/photo-1562273246-885449e802c0?w=800',
        'https://images.unsplash.com/photo-1605812836263-8d4512a8449c?w=800',
        'https://images.unsplash.com/photo-1603191656209-9133f324c153?w=800'
      ], timesOrdered: 150, reviews: [{ id: 'review-s4-1', author: 'EcoConscious', rating: 5, comment: 'These are indestructible! And it feels great to wear something recycled. Surprisingly comfortable too.', date: '2024-07-18' }]
    },
    {
      id: 'shoes-005', name: 'Moroccan Babouche Slippers', description: 'Soft leather slippers, handmade in Marrakech.', longDescription: 'These traditional Moroccan babouches are made from incredibly soft, supple sheepskin leather that molds to your feet. Perfect for comfortable and stylish lounging at home.', price: 4500, originalPrice: 5000, imageUrls: [
        'https://images.unsplash.com/photo-1589997193238-552458627a6f?w=800',
        'https://images.unsplash.com/photo-1613919099457-65814a682a93?w=800',
        'https://images.unsplash.com/photo-1593113548208-88b1a2b5a198?w=800'
      ], timesOrdered: 120, reviews: [{ id: 'review-s5-1', author: 'HomeBody', rating: 5, comment: 'Like walking on clouds. The leather is so soft. A little bit of everyday luxury.', date: '2024-07-15' }]
    },
    {
      id: 'shoes-006', name: 'Ankara Print High-Top Sneakers', description: 'Classic high-top sneakers with bold Ankara fabric panels.', longDescription: 'Stand out from the crowd with these unique sneakers. They combine the classic high-top silhouette with vibrant, eye-catching Ankara print panels for a cool, Afro-urban look.', price: 7200, originalPrice: 7200, imageUrls: [
        'https://images.unsplash.com/photo-1621336143335-3372c2121067?w=800',
        'https://images.unsplash.com/photo-1595134653554-227d8cf12e35?w=800',
        'https://images.unsplash.com/photo-1597089439121-515f4e0a724a?w=800'
      ], timesOrdered: 180, reviews: [{ id: 'review-s6-1', author: 'SneakerHead', rating: 5, comment: 'Awesome shoes! The print is sick and they are really well-made and comfortable.', date: '2024-07-14' }]
    },
    {
      id: 'shoes-007', name: 'Women\'s Beaded Thong Sandals', description: 'Elegant flat sandals with fine beadwork.', longDescription: 'These simple yet beautiful thong sandals are elevated by intricate, hand-stitched beadwork on the leather straps. They are perfect for a casual day out or a beach wedding.', price: 4200, originalPrice: 4200, imageUrls: [
        'https://images.unsplash.com/photo-1634081639910-3a5b3a65a363?w=800',
        'https://images.unsplash.com/photo-1599387737838-66a151b782b4?w=800',
        'https://images.unsplash.com/photo-1585646143497-83a21b35c13b?w=800'
      ], timesOrdered: 150, reviews: [{ id: 'review-s7-1', author: 'Sunny', rating: 5, comment: 'My favorite summer sandals. They are so pretty and surprisingly comfortable for walking.', date: '2024-07-12' }]
    },
    {
      id: 'shoes-008', name: 'Suede "Veldskoen" Desert Boots', description: 'The original South African desert boot, made from durable suede.', longDescription: 'The iconic "Vellie" is a South African staple. Made from tough yet soft suede with a durable rubber sole, these boots are built for comfort and to last a lifetime. Incredibly versatile and comfortable.', price: 9500, originalPrice: 10500, imageUrls: [
        'https://images.unsplash.com/photo-1605812836263-8d4512a8449c?w=800',
        'https://images.unsplash.com/photo-1562273246-885449e802c0?w=800',
        'https://images.unsplash.com/photo-1603191656209-9133f324c153?w=800'
      ], timesOrdered: 220, reviews: [{ id: 'review-s8-1', author: 'RuggedGent', rating: 5, comment: 'Best boots I\'ve ever owned. No break-in period needed, comfortable from day one. And they look great.', date: '2024-07-10' }]
    },
    {
      id: 'shoes-009', name: 'Cowrie Shell Embellished Slides', description: 'Simple slides decorated with natural cowrie shells.', longDescription: 'These easy-to-wear slides are given a bohemian, Afro-chic twist with hand-stitched cowrie shells on the strap. Perfect for the beach, pool, or a casual summer day.', price: 3500, originalPrice: 3500, imageUrls: [
        'https://images.unsplash.com/photo-1596701918349-74d32a0a2bfb?w=800',
        'https://images.unsplash.com/photo-1582294121586-44c10705f15a?w=800',
        'https://images.unsplash.com/photo-1585646143497-83a21b35c13b?w=800'
      ], timesOrdered: 150, reviews: [{ id: 'review-s9-1', author: 'BeachLover', rating: 4, comment: 'Very cute and stylish for summer. The fit is a little wide, but they\'re comfortable.', date: '2024-07-09' }]
    },
    {
      id: 'shoes-010', name: 'Imigwegwe Beaded Gumboots', description: 'Standard gumboots transformed into art with Ndebele beadwork.', longDescription: 'A modern take on tradition, these standard gumboots are covered in stunning, colorful geometric beadwork by Ndebele artisans in South Africa, transforming a utilitarian item into a piece of wearable art.', price: 8500, originalPrice: 8500, imageUrls: [
        'https://images.unsplash.com/photo-1603191656209-9133f324c153?w=800',
        'https://images.unsplash.com/photo-1562273246-885449e802c0?w=800',
        'https://images.unsplash.com/photo-1605812836263-8d4512a8449c?w=800'
      ], timesOrdered: 200, reviews: [{ id: 'review-s10-1', author: 'FestivalGoer', rating: 5, comment: 'These are INSANE! The beadwork is stunning. I can\'t wait to wear them and stand out at the next festival.', date: '2024-07-05' }]
    },
   ],
   "For Kids": [
    {
      id: 'kids-001', name: 'Baby\'s First Dashiki Onesie', description: 'An adorable and soft cotton onesie with a Dashiki print.', longDescription: 'Introduce your little one to African style with this comfortable and cute Dashiki-print onesie. Made from 100% soft, breathable cotton with snap closures for easy changes.', price: 2200, originalPrice: 2200, imageUrls: [
        'https://images.unsplash.com/photo-1601925698619-8de3e497b714?w=800',
        'https://images.unsplash.com/photo-1602133221473-207959438c22?w=800',
        'https://images.unsplash.com/photo-1585232240183-9b4f63ec255b?w=800'
      ], timesOrdered: 301, reviews: [{ id: 'review-k1-1', author: 'NewMom', rating: 5, comment: 'The absolute cutest thing! The fabric is so soft on my baby\'s skin.', date: '2024-07-22' }]
    },
    {
      id: 'kids-002', name: 'Hand-Carved Wooden Animal Set', description: 'A set of 5 hand-carved and painted wooden safari animals.', longDescription: 'This beautiful set of safari animals (lion, elephant, giraffe, zebra, rhino) is hand-carved from sustainable jacaranda wood in Kenya. Painted with non-toxic paints, they are perfect for imaginative play or nursery decor.', price: 4500, originalPrice: 4800, imageUrls: [
        'https://images.unsplash.com/photo-1563236780-a6a964eac221?w=800',
        'https://images.unsplash.com/photo-1574781488226-5d614833a695?w=800',
        'https://images.unsplash.com/photo-1598235122244-3652a926315a?w=800'
      ], timesOrdered: 200, reviews: [{ id: 'review-k2-1', author: 'GrandmaGifts', rating: 5, comment: 'A wonderful, classic toy. The carving and painting are beautifully done. My grandson loves them.', date: '2024-07-20' }]
    },
    {
      id: 'kids-003', name: 'Kitenge Print Toddler Dress', description: 'A vibrant and playful dress for toddlers in a colorful Kitenge print.', longDescription: 'This adorable A-line dress is perfect for your little fashionista. Made from durable, 100% cotton Kitenge fabric, it\'s comfortable enough for playtime and stylish enough for parties.', price: 3500, originalPrice: 3500, imageUrls: [
        'https://images.unsplash.com/photo-1617053314959-2384a44e46a2?w=800',
        'https://images.unsplash.com/photo-1588185968037-353d7123933c?w=800',
        'https://images.unsplash.com/photo-1599827827055-66760591f24a?w=800'
      ], timesOrdered: 150, reviews: [{ id: 'review-k3-1', author: 'StylishToddler', rating: 5, comment: 'My daughter looks so cute in this dress, and she loves how it twirls. Very well-made.', date: '2024-07-18' }]
    },
    {
      id: 'kids-004', name: 'African Folk Tales Picture Book', description: 'A beautifully illustrated book of classic African folk tales.', longDescription: 'Share the magic of African storytelling with this collection of classic folk tales. The vibrant illustrations and engaging stories make it a perfect bedtime read for children of all ages.', price: 1800, originalPrice: 1800, imageUrls: [
        'https://images.unsplash.com/photo-1543784184-1c6e156407db?w=800',
        'https://images.unsplash.com/photo-1461360370928-88290ab05292?w=800',
        'https://images.unsplash.com/photo-1518997232213-991b585c5def?w=800'
      ], timesOrdered: 100, reviews: [{ id: 'review-k4-1', author: 'BookwormParent', rating: 5, comment: 'The stories are wonderful and the illustrations are breathtaking. A new family favorite.', date: '2024-07-16' }]
    },
    {
      id: 'kids-005', name: 'Mini Djembe Drum', description: 'A small, playable djembe drum for kids, handcrafted in Ghana.', longDescription: 'Introduce your child to the rhythm of West Africa with this mini djembe. It features a solid wood body and a real goatskin head, producing a surprisingly rich sound. A fun and educational musical toy.', price: 3800, originalPrice: 4000, imageUrls: [
        'https://images.unsplash.com/photo-1563236780-a6a964eac221?w=800',
        'https://images.unsplash.com/photo-1610714150249-93e5a5f45209?w=800',
        'https://images.unsplash.com/photo-1616431955686-cb12a6d71a17?w=800'
      ], timesOrdered: 210, reviews: [{ id: 'review-k5-1', author: 'MusicFamily', rating: 5, comment: 'This isn\'t just a toy, it\'s a real instrument. The quality is fantastic. My kids have so much fun with it.', date: '2024-07-15' }]
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
      ], timesOrdered: 300, reviews: [{ id: 'review-g2-1', author: 'HomeChef', rating: 5, comment: 'This spice blend is amazing. So fragrant and flavorful. It has transformed my cooking.', date: '2024-07-20' }]
    },
    {
      id: 'gourmet-003', name: 'Vanilla Pods from Madagascar', description: 'Plump, fragrant, gourmet-grade vanilla pods.', longDescription: 'Considered the world\'s best, these vanilla pods from Madagascar are incredibly aromatic and full of flavor. Perfect for baking, custards, or making your own vanilla extract.', price: 1800, originalPrice: 1800, imageUrls: [
        'https://images.unsplash.com/photo-1601056263911-7383792f5899?w=800',
        'https://images.unsplash.com/photo-1560961913-b29a75cb1812?w=800',
        'https://images.unsplash.com/photo-1554922589-5cf27a9dea91?w=800'
      ], timesOrdered: 100, reviews: [{ id: 'review-g3-1', author: 'BakerBen', rating: 5, comment: 'The quality of these vanilla pods is outstanding. The aroma is incredible. Makes my desserts taste so much better.', date: '2024-07-19' }]
    },
    {
      id: 'gourmet-004', name: 'Rooibos Tea', description: 'Organic, loose-leaf Rooibos (Red Bush) tea from South Africa.', longDescription: 'Naturally caffeine-free and rich in antioxidants, Rooibos is a flavorful and healthy alternative to traditional tea. It has a smooth, slightly sweet, and earthy flavor.', price: 1500, originalPrice: 1500, imageUrls: [
        'https://images.unsplash.com/photo-1560961913-b29a75cb1812?w=800',
        'https://images.unsplash.com/photo-1554922589-5cf27a9dea91?w=800',
        'https://images.unsplash.com/photo-1601056263911-7383792f5899?w=800'
      ], timesOrdered: 200, reviews: [{ id: 'review-g4-1', author: 'TeaLover', rating: 5, comment: 'A lovely, soothing tea. The quality of this loose-leaf is excellent. I drink it every night.', date: '2024-07-17' }]
    },
    {
      id: 'gourmet-005', name: 'Peri-Peri Hot Sauce', description: 'A fiery hot sauce made with African Bird\'s Eye chilies.', longDescription: 'Bring the heat with this authentic Peri-Peri sauce. Made from a blend of African Bird\'s Eye chilies, lemon, and spices, it\'s the perfect marinade or condiment for chicken, meat, and more.', price: 1000, originalPrice: 1000, imageUrls: [
        'https://images.unsplash.com/photo-1554922589-5cf27a9dea91?w=800',
        'https://images.unsplash.com/photo-1560961913-b29a75cb1812?w=800',
        'https://images.unsplash.com/photo-1601056263911-7383792f5899?w=800'
      ], timesOrdered: 240, reviews: [{ id: 'review-g5-1', author: 'SpicyLife', rating: 5, comment: 'This sauce has the perfect balance of heat and flavor. So good on everything!', date: '2024-07-15' }]
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
      ], timesOrdered: 120, reviews: [{ id: 'review-g7-1', author: 'GlutenFreeGal', rating: 5, comment: 'I love this grain! It\'s so easy to cook and has a wonderful texture and flavor. My new favorite side dish.', date: '2024-07-12' }]
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
      ], timesOrdered: 120, reviews: [{ id: 'review-g9-1', author: 'WellnessWarrior', rating: 5, comment: 'A great addition to my morning smoothie. I love the tangy flavor and the nutritional benefits.', date: '2024-07-08' }]
    },
    {
      id: 'gourmet-010', name: 'Palm Oil', description: 'Sustainably sourced, unrefined red palm oil.', longDescription: 'This unrefined red palm oil has a rich, savory flavor and is a staple in West African cooking. It\'s packed with vitamins and is essential for authentic dishes like Jollof rice. Sourced from sustainable farms.', price: 1600, originalPrice: 1600, imageUrls: [
        'https://images.unsplash.com/photo-1560961913-b29a75cb1812?w=800',
        'https://images.unsplash.com/photo-1554922589-5cf27a9dea91?w=800',
        'https://images.unsplash.com/photo-1601056263911-7383792f5899?w=800'
      ], timesOrdered: 130, reviews: [{ id: 'review-g10-1', author: 'AuthenticCook', rating: 5, comment: 'This is the real stuff. The flavor is exactly what my Jollof was missing. And I feel good knowing it\'s sustainably sourced.', date: '2024-07-05' }]
    }
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
    },
   ]
};
