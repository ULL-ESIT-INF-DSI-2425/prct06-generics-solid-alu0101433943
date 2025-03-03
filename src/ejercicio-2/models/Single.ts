import { Song } from "./Song";
import { DiscographyItem } from "../interfaces/DiscographyItem";

/**
 * Representa un single, que puede ser una única canción o diferentes versiones de una canción.
 */
export class Single implements DiscographyItem {
  constructor(
    public name: string,
    public releaseYear: number,
    public song: Song,
  ) {}

  getTotalDuration(): number {
    return this.song.duration;
  }

  getTotalPlays(): number {
    return this.song.plays;
  }

  getSongs(): Song[] {
    return [this.song];
  }
}
