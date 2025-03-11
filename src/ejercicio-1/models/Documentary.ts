import { Media } from "../interfaces/Media";

export class Documentary implements Media {
  title: string;
  year: number;
  genre: string;
  channel: string;

  constructor(title: string, year: number, genre: string, channel: string) {
    this.channel = channel;
    this.genre = genre;
    this.title = title;
    this.year = year;
  }
}