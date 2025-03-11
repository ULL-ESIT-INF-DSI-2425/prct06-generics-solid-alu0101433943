import { Movie } from "../models/Movie";
import { BasicStreamableCollection } from "./BasicStreamableCollection";

/**
 * Implementación concreta para una colección de películas.
 */
export class MoviesCollection extends BasicStreamableCollection<Movie> {
  constructor(items: Movie[]) {
    super(items);
  }
  
  print(): void {
    for (let i = 0; i < this.items.length; i++) {
      console.log(`Nombre de la película: ${this.items[i].title}, año de lanzamiento: ${this.items[i].year}, género: ${this.items[i].genre}, director: ${this.items[i].director}\n`);
    }
  }
}
