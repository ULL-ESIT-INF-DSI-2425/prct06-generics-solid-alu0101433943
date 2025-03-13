/**
 * Interfaz genérica que define métodos relacionados con coleccionables
 */
export interface Collectable<T> {
  /**
   * Añade un item
   * @param item - Item introducido
   */
  addItem(item: T);

  /**
   * Devuelve el item
   * @param index - Índice del ítem
   */
  getItem(index: number): T;

  /**
   * Borra el item
   * @param index - Índice del ítem
   */
  removeItem(index: number): T;

  /**
   * Devuelve el número de items
   */
  getNumberOfItems(): number;
}