import { Artist } from "../models/Artist";
import { DiscographyItem } from "../interfaces/DiscographyItem";

export class MusicLibrary {
  private artists: Artist[] = [];

  addArtist(artist: Artist): void {
    if (!artist || !artist.name) {
      throw new Error("Invalid artist.");
    }
    this.artists.push(artist);
  }

  showLibrary(): void {
    if (this.artists.length === 0) {
      console.log("No artists in the library.");
      return;
    }
    console.table(
      this.artists.map((artist) => ({
        Name: artist.name,
        MonthlyListeners: artist.monthlyListeners,
        Discography: artist.discography.map((d) => d.name).join(", ") || "No albums",
      }))
    );
  }

  searchArtist(name: string): Artist | undefined {
    return this.artists.find(
      (artist) => artist.name.toLowerCase() === name.toLowerCase()
    );
  }

  searchDiscographyItem(name: string): DiscographyItem | undefined {
    for (const artist of this.artists) {
      const item = artist.discography.find(
        (d) => d.name.toLowerCase() === name.toLowerCase()
      );
      if (item) return item;
    }
    return undefined;
  }
}
