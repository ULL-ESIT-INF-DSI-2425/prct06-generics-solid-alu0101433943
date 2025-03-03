import { Media } from "../models/Media";
import { BasicStreamableCollection } from "./BasicStreamableCollection";

/**
 * Implementación concreta para una colección de películas.
 */
export class MoviesCollection extends BasicStreamableCollection {
  searchByTitle(title: string): Media[] {
    return this.items.filter(m => m.title.toLowerCase().includes(title.toLowerCase()));
  }

  searchByYear(year: number): Media[] {
    return this.items.filter(m => m.year === year);
  }

  searchByGenre(genre: string): Media[] {
    return this.items.filter(m => m.genre.toLowerCase() === genre.toLowerCase());
  }
}
