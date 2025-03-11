import { Song } from "../models/Song";

/**
 * Representa un elemento de la discografía (puede ser un disco o un single).
 */
export interface DiscographyItem {
  /**
   * El nombre del elemento de la discografía.
   */
  name: string;

  /**
   * El año de lanzamiento del elemento de la discografía.
   */
  releaseYear: number;

  /**
   * Obtiene la duración total del elemento de la discografía.
   * @returns La duración total en segundos.
   */
  getTotalDuration(): number;

  /**
   * Obtiene el número total de reproducciones del elemento de la discografía.
   * @returns El número total de reproducciones.
   */
  getTotalPlays(): number;

  /**
   * Obtiene las canciones del elemento de la discografía.
   * @returns Un array de canciones.
   */
  getSongs(): Song[];
}