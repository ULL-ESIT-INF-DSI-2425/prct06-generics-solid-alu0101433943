import { DiscographyItem } from "../interfaces/DiscographyItem";
import { Song } from "./Song";

/**
 * Clase genérica que representa una colección de ítems de discografía.
 */
export class Discography<T extends DiscographyItem> {
  private items: T[] = [];

  constructor(items: T[] = []) {
    this.items = items;
  }

  /**
   * Agrega un nuevo elemento a la discografía.
   * @param item - Elemento de tipo T a agregar.
   */
  addItem(item: T): void {
    this.items.push(item);
  }

  /**
   * Obtiene todos los elementos de la discografía.
   * @returns Un array de elementos de tipo T.
   */
  getItems(): T[] {
    return this.items;
  }

  /**
   * Obtiene la duración total.
   * @returns La duración total en segundos.
   */
  getTotalDuration(): number {
    return this.items.reduce((sum, item) => sum + item.getTotalDuration(), 0);
  }

  /**
   * Obtiene el número total de reproducciones.
   * @returns El número total de reproducciones.
   */
  getTotalPlays(): number {
    return this.items.reduce((sum, item) => sum + item.getTotalPlays(), 0);
  }

  /**
   * Obtiene todas las canciones.
   * @returns Un array de canciones.
   */
  getAllSongs(): Song[] {
    return this.items.flatMap(item => item.getSongs());
  }
}
