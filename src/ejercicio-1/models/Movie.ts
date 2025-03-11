import { Media } from "../interfaces/Media";

/**
 * Clase que representa una película.
 */
export class Movie implements Media {
  /**
   * Crea una instancia de Movie.
   * @param title - El título de la película.
   * @param year - El año de lanzamiento de la película.
   * @param genre - El género de la película.
   * @param director - El director de la película.
   */
  constructor(
    public title: string,
    public year: number,
    public genre: string,
    public director: string
  ) {}
}