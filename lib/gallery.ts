import { readFileSync } from "fs";
import path from "path";
import { withBasePath } from "./basePath";

export interface GalleryImage {
  src: string;
  alt: string;
  category: string;
  caption?: string;
  showOnLanding?: boolean;
}

export interface GalleryData {
  images: GalleryImage[];
}

export function loadGalleryData(): GalleryData {
  const filePath = path.join(process.cwd(), "public", "gallery", "gallery.json");
  let raw: string;
  try {
    raw = readFileSync(filePath, "utf-8");
  } catch {
    throw new Error(`Gallery data file not found at: ${filePath}`);
  }
  try {
    const data = JSON.parse(raw) as GalleryData;
    data.images = data.images.map((img) => ({
      ...img,
      src: withBasePath(img.src),
    }));
    return data;
  } catch {
    throw new Error(`Invalid JSON in gallery data file: ${filePath}`);
  }
}

export function getLandingImages(data: GalleryData): GalleryImage[] {
  return data.images.filter((img) => img.showOnLanding);
}

export function getCategories(data: GalleryData): string[] {
  const cats = Array.from(new Set(data.images.map((img) => img.category)));
  return ["All", ...cats];
}
