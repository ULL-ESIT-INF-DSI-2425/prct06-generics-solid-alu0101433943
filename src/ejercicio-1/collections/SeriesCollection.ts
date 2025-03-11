import { Serie } from "../models/Serie";
import { BasicStreamableCollection } from "./BasicStreamableCollection";

/**
 * Implementación concreta para una colección de series.
 */
export class SeriesCollection extends BasicStreamableCollection<Serie> {
  /**
   * Crea una instancia de SeriesColection.
   * @param items - Array de series.
   */
  constructor(items: Serie[]) {
    super(items);
  }

  /**
   * Imprime los detalles de todas las series en la colección.
   */
  print(): void {
    for (let i = 0; i < this.items.length; i++) {
      console.log(`Nombre de la serie: ${this.items[i].title}, año de transmisión: ${this.items[i].year}, género: ${this.items[i].genre}, temporadas: ${this.items[i].seasons}\n`);
    }
  }
}
