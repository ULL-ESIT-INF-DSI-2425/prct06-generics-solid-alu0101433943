import { DiscographyItem } from "../interfaces/DiscographyItem";

/**
 * Representa un artista musical.
 */
export class Artist {
  constructor(
    public name: string,
    public monthlyListeners: number,
    public discography: DiscographyItem[],
  ) {}
}
