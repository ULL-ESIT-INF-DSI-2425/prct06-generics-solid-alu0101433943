import { DiscographyItem } from "../interfaces/DiscographyItem";
import { Song } from "./Song";

/**
 * Representa un disco en la discografía de un artista.
 */
export class Record implements DiscographyItem {
  /**
   * Crea una instancia de Record.
   * @param name - El nombre del disco.
   * @param releaseYear - El año de lanzamiento del disco.
   * @param songs - Un array de canciones en el disco.
   */
  constructor(
    public name: string,
    public releaseYear: number,
    private songs: Song[]
  ) {}

  /**
   * Obtiene la duración total del disco.
   * @returns La duración total en segundos.
   */
  getTotalDuration(): number {
    return this.songs.reduce((total, song) => total + song.duration, 0);
  }

  /**
   * Obtiene el número total de reproducciones del disco.
   * @returns El número total de reproducciones.
   */
  getTotalPlays(): number {
    return this.songs.reduce((total, song) => total + song.plays, 0);
  }

  /**
   * Obtiene las canciones del disco.
   * @returns Un array de canciones.
   */
  getSongs(): Song[] {
    return this.songs;
  }
}