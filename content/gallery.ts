export interface GalleryImage {
  src: string;
  alt: string;
  category: string;
  caption?: string;
}

export const galleryContent = {
  hero: {
    title: "Gallery",
    subtitle: "A glimpse of our community in action.",
  },
  images: [
    { src: "/images/gallery/photo-01.jpg", alt: "Community gathering", category: "Events", caption: "Community gathering 2024" },
    { src: "/images/gallery/photo-02.jpg", alt: "Women's workshop", category: "Empowerment", caption: "Women's empowerment workshop" },
    { src: "/images/gallery/photo-03.jpg", alt: "Youth program", category: "Youth", caption: "Youth mentorship session" },
    { src: "/images/gallery/photo-04.jpg", alt: "Cultural celebration", category: "Culture", caption: "Annual cultural celebration" },
    { src: "/images/gallery/photo-05.jpg", alt: "Community volunteers", category: "Community", caption: "Community clean-up day" },
    { src: "/images/gallery/photo-06.jpg", alt: "Educational seminar", category: "Education", caption: "Community education seminar" },
    { src: "/images/gallery/photo-07.jpg", alt: "Family support event", category: "Support", caption: "Family support initiative" },
    { src: "/images/gallery/photo-08.jpg", alt: "Leadership meeting", category: "Events", caption: "Annual leadership meeting" },
    { src: "/images/gallery/photo-09.jpg", alt: "Community lunch", category: "Culture", caption: "Community sharing lunch" },
    { src: "/images/gallery/photo-10.jpg", alt: "Volunteer group", category: "Community", caption: "Our wonderful volunteers" },
    { src: "/images/gallery/photo-11.jpg", alt: "Children program", category: "Youth", caption: "Children's educational program" },
    { src: "/images/gallery/photo-12.jpg", alt: "Award ceremony", category: "Events", caption: "Community recognition ceremony" },
  ] as GalleryImage[],
  categories: ["All", "Events", "Empowerment", "Youth", "Culture", "Community", "Education", "Support"],
};
