import { Media } from "../models/Media";
import { BasicStreamableCollection } from "./BasicStreamableCollection";

/**
 * Implementación concreta para una colección de series.
 */
export class SeriesCollection extends BasicStreamableCollection {
  searchByTitle(title: string): Media[] {
    return this.items.filter(s => s.title.toLowerCase().includes(title.toLowerCase()));
  }

  searchByYear(year: number): Media[] {
    return this.items.filter(s => s.year === year);
  }

  searchByGenre(genre: string): Media[] {
    return this.items.filter(s => s.genre.toLowerCase() === genre.toLowerCase());
  }
}
