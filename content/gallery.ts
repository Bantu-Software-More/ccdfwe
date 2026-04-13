export interface GalleryImage {
  src: string;
  alt: string;
  category: string;
  caption?: string;
}

export const galleryContent = {
  hero: {
    title: "Gallery",
    subtitle: "A glimpse of the Congolese community of Dallas-Fort Worth in action.",
  },
  images: [
    { src: "/images/gallery/photo-01.jpg", alt: "Congolese community gathering in DFW", category: "Events", caption: "Community gathering 2024" },
    { src: "/images/gallery/photo-02.jpg", alt: "Congolese women's empowerment workshop", category: "Empowerment", caption: "Women's empowerment workshop" },
    { src: "/images/gallery/photo-03.jpg", alt: "Congolese youth mentorship program", category: "Youth", caption: "Youth mentorship session" },
    { src: "/images/gallery/photo-04.jpg", alt: "Congolese cultural celebration in Dallas-Fort Worth", category: "Culture", caption: "Annual Congolese cultural celebration" },
    { src: "/images/gallery/photo-05.jpg", alt: "CCDFWE community volunteers in DFW", category: "Community", caption: "Community volunteer day" },
    { src: "/images/gallery/photo-06.jpg", alt: "Educational seminar for Congolese diaspora", category: "Education", caption: "Community education seminar" },
    { src: "/images/gallery/photo-07.jpg", alt: "Congolese family support event", category: "Support", caption: "Family support initiative" },
    { src: "/images/gallery/photo-08.jpg", alt: "CCDFWE leadership meeting", category: "Events", caption: "Annual leadership meeting" },
    { src: "/images/gallery/photo-09.jpg", alt: "Congolese community sharing traditional meal", category: "Culture", caption: "Community sharing traditional Congolese meal" },
    { src: "/images/gallery/photo-10.jpg", alt: "CCDFWE volunteer group in Dallas-Fort Worth", category: "Community", caption: "Our wonderful volunteers" },
    { src: "/images/gallery/photo-11.jpg", alt: "Congolese children's educational program", category: "Youth", caption: "Children's educational program" },
    { src: "/images/gallery/photo-12.jpg", alt: "CCDFWE community recognition ceremony", category: "Events", caption: "Community recognition ceremony" },
  ] as GalleryImage[],
  categories: ["All", "Events", "Empowerment", "Youth", "Culture", "Community", "Education", "Support"],
};
