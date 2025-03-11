import { Media } from "../interfaces/Media";

export class Movie implements Media {
  title: string;
  year: number;
  genre: string;
  director: string;
  
  constructor(title: string, year: number, genre: string, director: string) {
    this.director = director;
    this.genre = genre;
    this.title = title;
    this.year = year;
  }
}