export interface LegBreakdown {
  stopNumber: number;
  country: string;
  cityOrRegion: string;
  nights: number;
  highlight: string;
  transferType?: string;
}

export interface HeroSlide {
  id: string;
  destination: string;
  badge: string;
  duration: string;
  title: string;
  fromPrice: number;
  currency: string;
  description: string;
  bgImage: string;
  sideImage: string;
  themeColor: string;
  legs: [LegBreakdown, LegBreakdown];
  tags: string[];
}

export interface DestinationItem {
  id: string;
  name: string;
  country: string;
  tagline: string;
  image: string;
  region: 'Asia' | 'Europe' | 'Africa' | 'Americas' | 'Oceania';
  travelersCount: string;
  rating: number;
  bestTimeToVisit: string;
  popularFor: string;
}

export interface HolidayPackage {
  id: string;
  title: string;
  locationTag: string;
  country: string;
  duration: string;
  nights: number;
  fromPrice: number;
  oldPrice?: number;
  image: string;
  category: 'Multi-Centre' | 'Beach & Island' | 'Cultural Heritage' | 'Wildlife & Safari' | 'Romantic Escape';
  rating: number;
  reviewCount: number;
  featured?: boolean;
  overview: string;
  itinerary: {
    day: string;
    title: string;
    desc: string;
  }[];
  inclusions: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  location: string;
  country: string;
  image: string;
  aspect: 'tall' | 'wide' | 'square';
  caption: string;
  photographer: string;
  category: 'Nature' | 'Culture' | 'Architecture' | 'Moments';
}

