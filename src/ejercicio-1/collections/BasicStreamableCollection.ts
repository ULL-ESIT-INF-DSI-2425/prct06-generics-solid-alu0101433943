import { Media } from "../models/Media";
import { Streamable } from "../interfaces/Streamable";
import { Searchable } from "../interfaces/Searchable";

/**
 * Clase abstracta que implementa las interfaces Streamable y Searchable
 * para proporcionar funcionalidades básicas de gestión y búsqueda en colecciones de contenido.
 */
export abstract class BasicStreamableCollection implements Streamable, Searchable {
  protected items: Media[] = [];

  /**
   * Agrega un nuevo elemento a la colección.
   * @param item - Elemento de tipo Media a agregar.
   */
  addItem(item: Media): void {
    this.items.push(item);
  }

  /**
   * Elimina un elemento de la colección.
   * @param item - Elemento de tipo Media a eliminar.
   */
  removeItem(item: Media): void {
    this.items = this.items.filter(s => s !== item);
  }

  /**
   * Obtiene todos los elementos de la colección.
   * @returns Un array de elementos de tipo Media.
   */
  getAll(): Media[] {
    return this.items;
  }

  abstract searchByTitle(title: string): Media[];
  abstract searchByYear(year: number): Media[];
  abstract searchByGenre(genre: string): Media[];
}
