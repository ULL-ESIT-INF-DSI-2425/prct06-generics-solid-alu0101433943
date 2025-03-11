/**
 * Interfaz que define métodos de búsqueda para colecciones de contenido multimedia.
 */
export interface Searchable<T> {
  /**
   * Busca elementos por título.
   * @param title - Título del contenido a buscar.
   * @returns Un array de elementos que coincidan con el título.
   */
  searchByTitle(title: string): T[];

  /**
   * Busca elementos por año de lanzamiento.
   * @param year - Año de lanzamiento del contenido a buscar.
   * @returns Un array de elementos lanzados en el año especificado.
   */
  searchByYear(year: number): T[];

  /**
   * Busca elementos por género.
   * @param genre - Género del contenido a buscar.
   * @returns Un array de elementos que coincidan con el género.
   */
  searchByGenre(genre: string): T[];
}
