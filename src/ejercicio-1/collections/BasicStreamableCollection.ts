import { Streamable } from "../interfaces/Streamable";
import { Searchable } from "../interfaces/Searchable";
import { Media } from "../interfaces/Media";

/**
 * Clase abstracta que implementa las interfaces Streamable y Searchable
 * para proporcionar funcionalidades básicas de gestión y búsqueda en colecciones de contenido.
 */
export abstract class BasicStreamableCollection<T extends Media> implements Streamable<T>, Searchable<T> {
  constructor(protected items: T[]) {}

  /**
   * Agrega un nuevo elemento a la colección.
   * @param item - Elemento de tipo Media a agregar.
   */
  addItem(item: T): void {
    this.items.push(item);
  }

  /**
   * Elimina un elemento de la colección.
   * @param item - Elemento de tipo Media a eliminar.
   */
  removeItem(item: T): void {
    this.items = this.items.filter(s => s !== item);
  }

  /**
   * Obtiene todos los elementos de la colección.
   * @returns Un array de elementos de tipo Media.
   */
  getAll(): T[] {
    return this.items;
  }

  searchByTitle(title: string): T[] {
    return this.items.filter(d => d.title.toLowerCase().includes(title.toLowerCase()));
  }

  searchByYear(year: number): T[] {
    return this.items.filter(d => d.year === year);
  }

  searchByGenre(genre: string): T[] {
    return this.items.filter(d => d.genre.toLowerCase() === genre.toLowerCase());
  }

  abstract print(): void;
}
