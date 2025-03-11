import { Discography } from "./Discography";
import { DiscographyItem } from "../interfaces/DiscographyItem";

/**
 * Representa un artista musical.
 */
export class Artist<T extends DiscographyItem> {
  /**
   * Crea una instancia de Artist.
   * @param name - El nombre del artista.
   * @param monthlyListeners - El número de oyentes mensuales del artista.
   * @param discography - La discografía del artista.
   */
  constructor(
    public name: string,
    public monthlyListeners: number,
    public discography: Discography<T>,
  ) {}
}