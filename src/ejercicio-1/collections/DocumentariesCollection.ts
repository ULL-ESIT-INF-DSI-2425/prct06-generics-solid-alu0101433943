import { Media } from "../models/Media";
import { BasicStreamableCollection } from "./BasicStreamableCollection";

/**
 * Implementación concreta para una colección de documentales.
 */
export class DocumentariesCollection extends BasicStreamableCollection {
  searchByTitle(title: string): Media[] {
    return this.items.filter(d => d.title.toLowerCase().includes(title.toLowerCase()));
  }

  searchByYear(year: number): Media[] {
    return this.items.filter(d => d.year === year);
  }

  searchByGenre(genre: string): Media[] {
    return this.items.filter(d => d.genre.toLowerCase() === genre.toLowerCase());
  }
}
