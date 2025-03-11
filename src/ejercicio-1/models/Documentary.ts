import { Media } from "../interfaces/Media";

/**
 * Clase que representa un documental.
 */
export class Documentary implements Media {
  /**
   * Crea una instancia de Documentary.
   * @param title - El título del documental.
   * @param year - El año de lanzamiento del documental.
   * @param genre - El género del documental.
   * @param channel - El canal donde se emitió el documental.
   */
  constructor(
    public title: string,
    public year: number,
    public genre: string,
    public channel: string
  ) {}
}