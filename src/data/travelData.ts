import { HeroSlide, DestinationItem, HolidayPackage, GalleryItem } from '../types';

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: 'slide-1',
    destination: 'Maldives & Sri Lanka Safari',
    badge: 'Signature Wildlife & Island Escape',
    duration: '11 Days',
    title: '11 Days Sri Lankan Safari & Maldives',
    fromPrice: 2375,
    currency: '£',
    description: 'Experience the perfect blend of wildlife adventure and tropical luxury with an unforgettable Sri Lankan safari followed by time on the white sands and turquoise lagoons of the Maldives.',
    bgImage: 'https://idubephotosafaris.com/wp-content/uploads/2022/06/SSR0F9A8854.jpg',
    sideImage: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=1200&auto=format&fit=crop',
    themeColor: '#D97706',
    tags: ['Multi-Centre Flagship', 'Flights Included', 'Private Transfers'],
    legs: [
      {
        stopNumber: 1,
        country: 'Sri Lanka',
        cityOrRegion: 'Cultural Triangle & Safari',
        nights: 6,
        highlight: 'Private wildlife drives, tea country and ancient temples',
        transferType: 'Chauffeured Vehicle & Domestic Flight'
      },
      {
        stopNumber: 2,
        country: 'Maldives',
        cityOrRegion: 'Private Island Resort',
        nights: 5,
        highlight: 'Tropical beaches, lagoon adventures and island dining',
        transferType: 'Speedboat or Seaplane Transfer'
      }
    ]
  },
  {
    id: 'slide-2',
    destination: 'Singapore, Bali & Kuala Lumpur',
    badge: 'City, Culture & Island Escape',
    duration: '10 Nights',
    title: 'Singapore & Bali',
    fromPrice: 1399,
    currency: '£',
    description: 'Combine Singapore’s modern skyline and vibrant neighbourhoods with Bali’s temples, rice terraces and restorative island hospitality for a beautifully balanced escape.',
    bgImage: 'https://boomers-daily.com/wp-content/uploads/2021/01/bali-indonesia-travel-video-january-17-2021.jpg',
    sideImage: 'https://cdn.sanity.io/images/nxpteyfv/goguides/92d5d4578c1e98ddf56b79bc0a536fa78d6a1a01-1600x1066.jpg',
    themeColor: '#059669',
    tags: ['Best Seller 2026', 'All Ground Transport Included'],
    legs: [
      {
        stopNumber: 1,
        country: 'Singapore',
        cityOrRegion: 'Marina Bay & Sentosa',
        nights: 4,
        highlight: 'Skyline dining, heritage districts and lush city gardens',
        transferType: 'Private Airport & City Transfers'
      },
      {
        stopNumber: 2,
        country: 'Indonesia',
        cityOrRegion: 'Ubud & Southern Bali',
        nights: 6,
        highlight: 'Temple ceremonies, rice terraces and private pool villas',
        transferType: 'Private Driver & Fast Boat'
      }
    ]
  },
  {
    id: 'slide-3',
    destination: 'Atlantis The Palm, Dubai',
    badge: 'Iconic Dubai Resort Escape',
    duration: '5 Nights',
    title: 'Atlantis The Palm, Dubai',
    fromPrice: 999,
    currency: '£',
    description: 'Stay at one of Dubai’s most iconic resorts with exceptional dining, private beach access, thrilling waterpark adventures and the city’s signature skyline close by.',
    bgImage: 'https://escapesworldwide.co.uk/wp-content/uploads/2025/09/1920_phy2015.rst_.ath_.atlantiswithpalm-top-landscape-hr.webp',
    sideImage: 'https://escapesworldwide.co.uk/wp-content/uploads/2025/09/PHY2025.ATP_Hero06V3-gigapixel-standard-v2-2x_LR.webp',
    themeColor: '#2563EB',
    tags: ['Bespoke Concierge', '5-Star Heritage Stays', 'Flexible Deposit'],
    legs: [
      {
        stopNumber: 1,
        country: 'Dubai',
        cityOrRegion: 'Atlantis The Palm',
        nights: 5,
        highlight: 'Private beach, signature dining and Aquaventure access',
        transferType: 'Private Airport Transfer'
      },
      {
        stopNumber: 2,
        country: 'Dubai',
        cityOrRegion: 'Palm Jumeirah & Downtown',
        nights: 0,
        highlight: 'Burj Khalifa views, desert experiences and waterfront evenings',
        transferType: 'Chauffeur Transfer'
      }
    ]
  },
  {
    id: 'slide-4',
    destination: 'Kenya & Zanzibar Safari',
    badge: 'Luxury 5 Star Safari',
    duration: '11 Days',
    title: 'Kenya Safari & Zanzibar Beach Escape',
    fromPrice: 1999,
    currency: '£',
    description: 'Follow the call of the wild on a luxury Kenyan safari before unwinding on Zanzibar’s white-sand beaches, with unforgettable wildlife and island moments throughout.',
    bgImage: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?q=80&w=2070&auto=format&fit=crop',
    sideImage: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1200&auto=format&fit=crop',
    themeColor: '#EA580C',
    tags: ['Big 5 Game Drives', 'All-Inclusive Beachfront', 'Private Guide'],
    legs: [
      {
        stopNumber: 1,
        country: 'Kenya',
        cityOrRegion: 'Maasai Mara Reserve',
        nights: 6,
        highlight: 'Private game drives with expert safari guides',
        transferType: 'Safari Vehicle & Bush Flight'
      },
      {
        stopNumber: 2,
        country: 'Zanzibar',
        cityOrRegion: 'Nungwi & Stone Town',
        nights: 5,
        highlight: 'Beachfront relaxation, spice tours and dhow sailing',
        transferType: 'Private Island Transfer'
      }
    ]
  }
];

export const FEATURED_DESTINATIONS: DestinationItem[] = [
  {
    id: 'dest-safari-seychelles',
    name: 'Safari & Seychelles',
    country: 'Kenya & Seychelles',
    tagline: 'Wildlife and island luxury',
    image: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?q=80&w=1200&auto=format&fit=crop',
    region: 'Africa',
    travelersCount: '',
    rating: 0,
    bestTimeToVisit: 'Jun - Oct',
    popularFor: 'Maasai Mara game drives and private beach stays'
  },
  {
    id: 'dest-singapore-bali-kuala-lumpur',
    name: 'Singapore, Bali & Kuala Lumpur',
    country: 'Singapore, Indonesia & Malaysia',
    tagline: 'Three cities, one unforgettable escape',
    image: 'https://images.unsplash.com/photo-1496939376851-89342e90adcd?q=80&w=1200&auto=format&fit=crop',
    region: 'Asia',
    travelersCount: '',
    rating: 0,
    bestTimeToVisit: 'Apr - Oct',
    popularFor: 'Skyline dining, temple visits and island retreats'
  },
  {
    id: 'dest-atlantis-dubai',
    name: 'Atlantis The Palm, Dubai',
    country: 'United Arab Emirates',
    tagline: 'Iconic resort living by the Arabian Gulf',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1200&auto=format&fit=crop',
    region: 'Asia',
    travelersCount: '',
    rating: 0,
    bestTimeToVisit: 'Nov - Mar',
    popularFor: 'Resort beaches, waterpark adventures and Dubai icons'
  },
  {
    id: 'dest-thailand-adventure',
    name: 'Phuket, Phi Phi, Krabi & Bangkok',
    country: 'Thailand',
    tagline: 'Island shores and vibrant city life',
    image: 'https://images.unsplash.com/photo-1528181304800-259b08848526?q=80&w=1200&auto=format&fit=crop',
    region: 'Asia',
    travelersCount: '',
    rating: 0,
    bestTimeToVisit: 'Nov - Apr',
    popularFor: 'Tropical islands, limestone bays and Thai culture'
  },
  {
    id: 'dest-philippines',
    name: 'Tropical Philippines',
    country: 'Philippines',
    tagline: 'A chain of turquoise island escapes',
    image: 'https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?q=80&w=1200&auto=format&fit=crop',
    region: 'Asia',
    travelersCount: '',
    rating: 0,
    bestTimeToVisit: 'Nov - May',
    popularFor: 'Hidden lagoons, coral reefs and warm island hospitality'
  },
  {
    id: 'dest-vietnam',
    name: 'Vietnam',
    country: 'Vietnam',
    tagline: 'From emerald bays to timeless cities',
    image: 'https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=1200&auto=format&fit=crop',
    region: 'Asia',
    travelersCount: '',
    rating: 0,
    bestTimeToVisit: 'Feb - Aug',
    popularFor: 'Ha Long Bay cruises, local cuisine and cultural discovery'
  }
];

type ReferencePackageSpec = {
  title: string;
  locationTag: string;
  country: string;
  duration: string;
  nights: number;
  fromPrice: number;
  image: string;
  category: HolidayPackage['category'];
};

const createReferencePackage = (spec: ReferencePackageSpec, index: number): HolidayPackage => ({
  id: `reference-pkg-${index + 1}`,
  ...spec,
  rating: 4.9,
  reviewCount: 120,
  overview: `A carefully planned ${spec.title.toLowerCase()} with hand-selected stays, memorable local experiences, and smooth connections throughout.`,
  itinerary: [{ day: `Days 1-${spec.nights}`, title: spec.title, desc: `Explore ${spec.locationTag} with a flexible itinerary designed around your travel style.` }],
  inclusions: ['Selected accommodation', 'Local experiences', 'Airport and resort transfers']
});

const REFERENCE_PACKAGE_SPECS: [string, string, string, string, number, number, string, HolidayPackage['category']][] = [
  ['Tropical beauty of the Philippines 10-Nights', 'Philippines', 'Philippines', '10 Nights', 10, 1599, 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=1200&auto=format&fit=crop', 'Beach & Island'],
  ['11 Days Sri Lankan Safari & Maldives', 'Maldives, Safari & Sri Lanka', 'Sri Lanka', '11 Days', 10, 2375, 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1200&auto=format&fit=crop', 'Multi-Centre'],
  ['10-Night South Africa Safari & Zanzibar Beach Getaway', 'Africa, Safari & Zanzibar', 'South Africa', '10 Nights', 10, 2199, 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1200&auto=format&fit=crop', 'Wildlife & Safari'],
  ['14-Night Philippines Adventure - Discover Paradise!', 'Cebu, Davao, Manila, Palawan & Philippines', 'Philippines', '14 Nights', 14, 1299, 'https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?q=80&w=1200&auto=format&fit=crop', 'Beach & Island'],
  ['Luxury Safari & Island Escape - Maasai Mara & Seychelles', 'Kenya, Maasai Mara, Safari & Seychelles', 'Kenya', '11 Days', 10, 2699, 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?q=80&w=1200&auto=format&fit=crop', 'Wildlife & Safari'],
  ['New Year in Las Vegas & Cancun - 7 Nights', 'Cancun & USA', 'USA', '7 Nights', 7, 1699, 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1200&auto=format&fit=crop', 'Multi-Centre'],
  ['Vietnam 10-Night Adventure - Hanoi, Ha Long Bay, Phu Quoc & Ho Chi Minh City', 'Ha Long Bay, Ho Chi Minh, Phu Quoc & Vietnam', 'Vietnam', '10 Nights', 10, 1099, 'https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=1200&auto=format&fit=crop', 'Cultural Heritage'],
  ['10-Night Singapore, Bali & Kuala Lumpur Adventure', 'Bali, Kuala Lumpur & Singapore', 'Singapore', '10 Nights', 10, 1199, 'https://images.unsplash.com/photo-1496939376851-89342e90adcd?q=80&w=1200&auto=format&fit=crop', 'Multi-Centre'],
  ['10-Night Thailand Twin Escape - Phuket & Khao Lak', 'Khao Lak, Phuket & Thailand', 'Thailand', '11 Nights', 11, 799, 'https://images.unsplash.com/photo-1528181304800-259b08848526?q=80&w=1200&auto=format&fit=crop', 'Beach & Island'],
  ['11-Day Signature Luxury Safari & Island Getaway - Kenya & Zanzibar', 'Kenya, Safari & Zanzibar', 'Kenya', '11 Days', 10, 1999, 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1200&auto=format&fit=crop', 'Wildlife & Safari'],
  ['12-Night Thailand Adventure - Phuket, Phi Phi Island, Krabi & Bangkok', 'Bangkok, Krabi, Phi Phi, Phuket & Thailand', 'Thailand', '12 Nights', 12, 1099, 'https://images.unsplash.com/photo-1508009603885-50cf7c579365?q=80&w=1200&auto=format&fit=crop', 'Beach & Island'],
  ['Africa\'s Wild Beauty & Zanzibar\'s Tropical Bliss - 10 Nights', 'Africa, Safari & Zanzibar', 'Tanzania', '10 Nights', 10, 1999, 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?q=80&w=1200&auto=format&fit=crop', 'Wildlife & Safari'],
  ['Vietnam & Cambodia 14-night escape', 'Cambodia & Vietnam', 'Vietnam', '14 Nights', 14, 1299, 'https://images.unsplash.com/photo-1528181304800-259b08848526?q=80&w=1200&auto=format&fit=crop', 'Cultural Heritage'],
  ['Ultimate 14-night Asia adventure - Dubai, Bangkok, Bali, and Singapore', 'Bali, Bangkok, Dubai & Singapore', 'United Arab Emirates', '14 Nights', 14, 1499, 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1200&auto=format&fit=crop', 'Multi-Centre'],
  ['Luxury Safari and Beach Holidays in Kenya and Mauritius', 'Kenya & Mauritius', 'Kenya', '11 Days', 10, 2199, 'https://images.unsplash.com/photo-1549366021-9f761d450615?q=80&w=1200&auto=format&fit=crop', 'Wildlife & Safari'],
  ['7 Nights Siyam World Maldives', 'Maldives', 'Maldives', '7 Nights', 7, 2399, 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=1200&auto=format&fit=crop', 'Beach & Island'],
  ['Pure Luxury - Maldives & Qatar Escape', 'Maldives & Qatar', 'Maldives', '10 Nights', 10, 2199, 'https://images.unsplash.com/photo-1573843981267-be1999ff37cd?q=80&w=1200&auto=format&fit=crop', 'Beach & Island'],
  ['Luxury All-Inclusive Escape: Abu Dhabi & Maldives', 'Dubai & Maldives', 'United Arab Emirates', '10 Nights', 10, 1899, 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1200&auto=format&fit=crop', 'Beach & Island'],
  ['Singapore - Langkawi - Kuala Lumpur Adventure Awaits', 'Kuala Lumpur, Langkawi & Singapore', 'Malaysia', '10 Nights', 10, 999, 'https://images.unsplash.com/photo-1508009603885-50cf7c579365?q=80&w=1200&auto=format&fit=crop', 'Multi-Centre'],
  ['Escape across Phuket, Phi Phi Island, Krabi and Bangkok', 'Bangkok, Krabi, Phi Phi & Phuket', 'Thailand', '10 Nights', 10, 1199, 'https://images.unsplash.com/photo-1539367628448-4bc5c9d171c8?q=80&w=1200&auto=format&fit=crop', 'Beach & Island'],
  ['Luxury Safari Masai Mara & Seychelle', 'Safari & Seychelles', 'Kenya', '10 Nights', 10, 2799, 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1200&auto=format&fit=crop', 'Wildlife & Safari'],
  ['Luxury Escape to Singapore, Bali & Kuala Lumpur', 'Bali, Kuala Lumpur & Singapore', 'Singapore', '10 Nights', 10, 1399, 'https://images.unsplash.com/photo-1496939376851-89342e90adcd?q=80&w=1200&auto=format&fit=crop', 'Multi-Centre'],
  ['5 Nights at Atlantis The Palm, Dubai', 'Dubai', 'United Arab Emirates', '5 Nights', 5, 999, 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1200&auto=format&fit=crop', 'Beach & Island'],
  ['Foothills of Kilimanjaro, Serengeti Ngorongoro & Zanzibar Escape', 'Safari', 'Tanzania', '11 Nights', 11, 1799, 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?q=80&w=1200&auto=format&fit=crop', 'Wildlife & Safari'],
  ['Kruger Glamping Safari & All-inclusive Zanzibar Bliss', 'Safari', 'South Africa', '12 Nights', 12, 1799, 'https://images.unsplash.com/photo-1534177616072-ef7dc120449d?q=80&w=1200&auto=format&fit=crop', 'Wildlife & Safari'],
  ['10 Nights Luxury Escape to Dubai & Mauritius', 'Dubai & Mauritius', 'United Arab Emirates', '10 Nights', 10, 1599, 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1200&auto=format&fit=crop', 'Multi-Centre'],
  ['10 Nights in Phuket, Phi Phi & Krabi', 'Krabi, Phi Phi & Phuket', 'Thailand', '10 Nights', 10, 899, 'https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?q=80&w=1200&auto=format&fit=crop', 'Beach & Island'],
  ['Luxury 5 Star Kenya Safari & Zanzibar Beach Escape', 'Safari & Zanzibar', 'Kenya', '11 Days', 10, 1999, 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?q=80&w=1200&auto=format&fit=crop', 'Wildlife & Safari'],
  ['Thailand Treehouse Villa, Phuket, Krabi & Bangkok Escape', 'Bangkok, Krabi & Thailand', 'Thailand', '10 Nights', 10, 1199, 'https://images.unsplash.com/photo-1528181304800-259b08848526?q=80&w=1200&auto=format&fit=crop', 'Beach & Island'],
  ['Vietnam Escape - Hanoi, Ha Long Bay, Phu Quoc & Ho Chi Minh', 'Vietnam', 'Vietnam', '10 Nights', 10, 1075, 'https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=1200&auto=format&fit=crop', 'Cultural Heritage']
];
export const HOLIDAY_PACKAGES: HolidayPackage[] = REFERENCE_PACKAGE_SPECS.map((spec, index) => createReferencePackage({ title: spec[0], locationTag: spec[1], country: spec[2], duration: spec[3], nights: spec[4], fromPrice: spec[5], image: spec[6], category: spec[7] }, index));

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-sri-lanka',
    title: 'Sri Lankan Safari at Dawn',
    location: 'Yala National Park',
    country: 'Sri Lanka',
    image: 'https://idubephotosafaris.com/wp-content/uploads/2022/06/SSR0F9A8854.jpg',
    aspect: 'tall',
    caption: 'Early morning wildlife viewing on the Sri Lankan Safari & Maldives escape.',
    photographer: 'Trip to World Traveller',
    category: 'Nature'
  },
  {
    id: 'gal-bali',
    title: 'Bali Island Morning',
    location: 'Ubud',
    country: 'Indonesia',
    image: 'https://boomers-daily.com/wp-content/uploads/2021/01/bali-indonesia-travel-video-january-17-2021.jpg',
    aspect: 'wide',
    caption: 'Temple paths, rice terraces and slow island mornings from the Singapore & Bali journey.',
    photographer: 'Trip to World Traveller',
    category: 'Culture'
  },
  {
    id: 'gal-dubai',
    title: 'Atlantis The Palm by the Sea',
    location: 'Palm Jumeirah',
    country: 'Dubai',
    image: 'https://escapesworldwide.co.uk/wp-content/uploads/2025/09/PHY2025.ATP_Hero06V3-gigapixel-standard-v2-2x_LR.webp',
    aspect: 'square',
    caption: 'A resort escape with private beaches, lagoon views and unforgettable evenings.',
    photographer: 'Trip to World Traveller',
    category: 'Moments'
  },
  {
    id: 'gal-kenya',
    title: 'Kenya Safari Landscape',
    location: 'Maasai Mara',
    country: 'Kenya',
    image: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?q=80&w=1400&auto=format&fit=crop',
    aspect: 'wide',
    caption: 'Open plains and extraordinary wildlife on the Kenya Safari & Zanzibar escape.',
    photographer: 'Trip to World Traveller',
    category: 'Nature'
  },
];

export const COMPANY_CONTACT = {
  name: 'Trip to World Ltd.',
  tagline: 'Curators of Extraordinary Tailor-Made Journeys',
  address: '𝟏𝟐 𝐇𝐮𝐦𝐛𝐞𝐫𝐬𝐭𝐨𝐧𝐞 𝐂𝐥𝐨𝐬𝐞, 𝐋𝐮𝐭𝐨𝐧, 𝐋𝐔𝟒 𝟗𝐒𝐓',
  email: 'info@triptoworld.co.uk',
  hours: 'Mon – Fri: 08:30 – 19:00 | Sat – Sun: 09:30 – 17:00',
};
