import { Song } from "./Song";
import { DiscographyItem } from "../interfaces/DiscographyItem";

/**
 * Representa un álbum con múltiples canciones.
 */
export class Record implements DiscographyItem {
  constructor(
    public name: string,
    public releaseYear: number,
    public songs: Song[],
  ) {}

  getTotalDuration(): number {
    return this.songs.reduce((total, song) => total + song.duration, 0);
  }

  getTotalPlays(): number {
    return this.songs.reduce((total, song) => total + song.plays, 0);
  }

  getSongs(): Song[] {
    return this.songs;
  }
}
