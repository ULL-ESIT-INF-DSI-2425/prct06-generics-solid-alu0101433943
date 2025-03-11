/**
 * Representa una canción.
 */
export interface Song {
  /**
   * El nombre de la canción.
   */
  name: string;

  /**
   * La duración de la canción en segundos.
   */
  duration: number;

  /**
   * Los géneros de la canción.
   */
  genres: string[];

  /**
   * Indica si la canción es un single.
   */
  single: boolean;

  /**
   * El número de reproducciones de la canción.
   */
  plays: number;
}