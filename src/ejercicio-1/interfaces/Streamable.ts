/**
 * Interfaz que define operaciones básicas para gestionar colecciones de contenido multimedia.
 */
export interface Streamable<T> {
  /**
   * Agrega un elemento a la colección.
   * @param item - Elemento de tipo Media que se agregará.
   */
  addItem(item: T): void;

  /**
   * Elimina un elemento de la colección.
   * @param item - Elemento de tipo Media que se eliminará.
   */
  removeItem(item: T): void;

  /**
   * Obtiene todos los elementos de la colección.
   * @returns Un array de elementos de tipo Media.
   */
  getAll(): T[];

  /**
   * Muestra por pantalla la información.
   */
  print(): void;
}
