import { Song } from "../models/Song";

/**
 * Representa un elemento de la discografía (puede ser un disco o un single).
 */
export interface DiscographyItem {
  name: string;
  releaseYear: number;
  getTotalDuration(): number;
  getTotalPlays(): number;
  getSongs(): Song[];
}
