import { Collectable } from "./Collectable";
import { Printable } from "./Printable";

/**
 * Clase abstracta que define una colección de objetos imprimibles
 */
export abstract class PrintableCollection<T> implements Collectable<T>, Printable{
  /**
   * Constructor de la clase abstracta PrintableCollection
   * @param items - Items iniciales
   */
  constructor(protected items: T[] = []) {};

  /**
   * Añade un item
   * @param item - Item introducido
   */
  addItem(item: T) {
    this.items.push(item);
  }

  /**
   * Devuelve el item
   * @param index - Índice del ítem
   */
  getItem(index: number): T {
    return this.items[index];
  }

  /**
   * Borra el item
   * @param index - Índice del ítem
   */
  removeItem(index: number): T {
    const result = this.items[index];
    delete this.items[index];
    return result;
  }

  /**
   * Devuelve el número de items
   */
  getNumberOfItems(): number {
    return this.items.length;
  }

  /**
   * Imprime el contenido.
   */
  abstract print(): string;
}