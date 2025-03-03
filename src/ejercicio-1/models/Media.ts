/**
 * Clase base para representar elementos multimedia en la plataforma de streaming.
 */
export class Media {
  /**
   * @param title - Título del contenido.
   * @param year - Año de lanzamiento.
   * @param genre - Género del contenido.
   */
  constructor(
    public title: string,
    public year: number,
    public genre: string
  ) {}
}
