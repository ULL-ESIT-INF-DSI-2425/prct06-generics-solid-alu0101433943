import { Media } from "../models/Media";

/**
 * Interfaz que define operaciones básicas para gestionar colecciones de contenido multimedia.
 */
export interface Streamable {
  /**
   * Agrega un elemento a la colección.
   * @param item - Elemento de tipo Media que se agregará.
   */
  addItem(item: Media): void;

  /**
   * Elimina un elemento de la colección.
   * @param item - Elemento de tipo Media que se eliminará.
   */
  removeItem(item: Media): void;

  /**
   * Obtiene todos los elementos de la colección.
   * @returns Un array de elementos de tipo Media.
   */
  getAll(): Media[];
}
