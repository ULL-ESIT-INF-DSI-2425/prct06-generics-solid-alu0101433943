import { Serie } from "../models/Serie";
import { BasicStreamableCollection } from "./BasicStreamableCollection";

/**
 * Implementación concreta para una colección de series.
 */
export class SeriesCollection extends BasicStreamableCollection<Serie> {
  constructor(items: Serie[]) {
    super(items);
  }

  print(): void {
    for (let i = 0; i < this.items.length; i++) {
      console.log(`Nombre de la serie: ${this.items[i].title}, año de transmisión: ${this.items[i].year}, género: ${this.items[i].genre}, temporadas: ${this.items[i].seasons}\n`);
    }
  }
}
