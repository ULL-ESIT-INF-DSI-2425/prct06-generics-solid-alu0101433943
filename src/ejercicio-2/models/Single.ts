import { Song } from "./Song";
import { DiscographyItem } from "../interfaces/DiscographyItem";

/**
 * Representa un single (una canción o varias versiones de una misma).
 */
export class Single implements DiscographyItem {
  /**
   * Crea una instancia de Single.
   * @param name - El nombre del single.
   * @param releaseYear - El año de lanzamiento del single.
   * @param song - La canción del single.
   */
  constructor(
    public name: string,
    public releaseYear: number,
    private versions: Song[],
  ) {}

  /**
   * Obtiene la duración total del single.
   * @returns La duración total en segundos.
   */
  getTotalDuration(): number {
    return this.versions.reduce((total, song) => total + song.duration, 0);
  }

  /**
   * Obtiene el número total de reproducciones del single.
   * @returns El número total de reproducciones.
   */
  getTotalPlays(): number {
    return this.versions.reduce((total, song) => total + song.plays, 0);
  }

  /**
   * Obtiene la canción del single.
   * @returns Un array con la canción del single.
   */
  getSongs(): Song[] {
    return this.versions;
  }
}
