import { Media } from "../interfaces/Media";

/**
 * Clase que representa una serie.
 */
export class Serie implements Media {
  /**
   * Crea una instancia de Serie.
   * @param title - El título de la serie.
   * @param year - El año de lanzamiento de la serie.
   * @param genre - El género de la serie.
   * @param seasons - El número de temporadas de la serie.
   */
  constructor(
    public title: string,
    public year: number,
    public genre: string,
    public seasons: number
  ) {}
}