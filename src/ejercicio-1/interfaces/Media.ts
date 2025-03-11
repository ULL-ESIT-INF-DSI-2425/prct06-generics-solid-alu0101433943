/**
 * Interfaz para representar elementos multimedia en la plataforma de streaming.
 */
export interface Media {
  /**
   * El título del elemento multimedia.
   */
  title: string;

  /**
   * El año de lanzamiento del elemento multimedia.
   */
  year: number;

  /**
   * El género del elemento multimedia.
   */
  genre: string;
}