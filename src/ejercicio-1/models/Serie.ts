import { Media } from "../interfaces/Media";

export class Serie implements Media {
  title: string;
  year: number;
  genre: string;
  seasons: number;

  constructor(title: string, year: number, genre: string, seasons: number) {
    this.genre = genre;
    this.title = title;
    this.year = year;
    this.seasons = seasons;
  }
}