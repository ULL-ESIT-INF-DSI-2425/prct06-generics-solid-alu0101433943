import { Documentary } from "../models/Documentary";
import { BasicStreamableCollection } from "./BasicStreamableCollection";

/**
 * Implementación concreta para una colección de documentales.
 */
export class DocumentariesCollection extends BasicStreamableCollection<Documentary> {
  /**
   * Crea una instancia de DocumentariesCollection.
   * @param items - Array de documentales.
   */
  constructor(items: Documentary[]) {
    super(items);
  }
  
  /**
   * Imprime los detalles de todos los documentales en la colección.
   */
  print(): void {
    for (let i = 0; i < this.items.length; i++) {
      console.log(`Nombre del documental: ${this.items[i].title}, año de lanzamiento: ${this.items[i].year}, género: ${this.items[i].genre}, canal: ${this.items[i].channel}`);
    }
  }
}
