import { Artist } from "../models/Artist";
import { DiscographyItem } from "../interfaces/DiscographyItem";

/**
 * Representa una biblioteca musical que contiene artistas y sus discografías.
 */
export class MusicLibrary {
  private artists: Artist<DiscographyItem>[] = [];

  /**
   * Agrega un nuevo artista a la biblioteca.
   * @param artist - El artista a agregar.
   * @throws Error si el artista es inválido.
   */
  addArtist(artist: Artist<DiscographyItem>): void {
    if (!artist || !artist.name) {
      throw new Error("Invalid artist.");
    }
    this.artists.push(artist);
  }

  /**
   * Muestra la biblioteca musical en la consola.
   */
  showLibrary(): void {
    if (this.artists.length === 0) {
      console.log("No artists in the library.");
      return;
    }

    console.table(
      this.artists.map((artist) => ({
        Name: artist.name,
        MonthlyListeners: artist.monthlyListeners,
        Discography: artist.discography.getItems().map((d) => d.name).join(", ") || "No items",
      }))
    );
  }

  /**
   * Busca un artista por nombre en la biblioteca.
   * @param name - El nombre del artista a buscar.
   * @returns El artista encontrado o undefined si no se encuentra.
   */
  searchArtist(name: string): Artist<DiscographyItem> | undefined {
    return this.artists.find(
      (artist) => artist.name.toLowerCase() === name.toLowerCase()
    );
  }

  /**
   * Busca un elemento de la discografía por nombre en la biblioteca.
   * @param name - El nombre del elemento de la discografía a buscar.
   * @returns El elemento de la discografía encontrado o undefined si no se encuentra.
   */
  searchDiscographyItem(name: string): DiscographyItem | undefined {
    for (const artist of this.artists) {
      const item = artist.discography.getItems().find(
        (d) => d.name.toLowerCase() === name.toLowerCase()
      );
      if (item) return item;
    }
    return undefined;
  }
}