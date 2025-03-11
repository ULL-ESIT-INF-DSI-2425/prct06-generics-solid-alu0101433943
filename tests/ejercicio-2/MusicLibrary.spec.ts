import { describe, test, expect, beforeEach, vi } from "vitest";
import { MusicLibrary } from "../../src/ejercicio-2/services/MusicLibrary";
import { Artist } from "../../src/ejercicio-2/models/Artist";
import { Discography } from "../../src/ejercicio-2/models/Discography";
import { Record } from "../../src/ejercicio-2/models/Record";
import { Single } from "../../src/ejercicio-2/models/Single";
import { Song } from "../../src/ejercicio-2/models/Song";
import { DiscographyItem } from "../../src/ejercicio-2/interfaces/DiscographyItem";

describe("MusicLibrary", () => {
  let library: MusicLibrary;

  beforeEach(() => {
    library = new MusicLibrary();
  });

  test("Debe agregar un artista correctamente", () => {
    const discography = new Discography(); // vacía
    const artist = new Artist("The Beatles", 1000000, discography);

    library.addArtist(artist);
    expect(library.searchArtist("The Beatles")).toEqual(artist);
  });

  test("Debe lanzar un error al agregar un artista inválido", () => {
    expect(() => library.addArtist(undefined as unknown as Artist<DiscographyItem>)).toThrow("Invalid artist.");
    expect(() => library.addArtist({} as Artist<DiscographyItem>)).toThrow("Invalid artist.");
  });

  test("Debe encontrar un artista por su nombre", () => {
    const discography = new Discography();
    const artist = new Artist("Queen", 900000, discography);

    library.addArtist(artist);
    expect(library.searchArtist("Queen")).toEqual(artist);
  });

  test("Debe retornar undefined si el artista no existe", () => {
    expect(library.searchArtist("Nonexistent Artist")).toBeUndefined();
  });

  test("Debe encontrar un disco por su nombre", () => {
    const song: Song = { name: "Bohemian Rhapsody", duration: 354, genres: ["Rock"], single: false, plays: 1000000 };
    const record = new Record("A Night at the Opera", 1975, [song]);
    const discography = new Discography([record]);
    const artist = new Artist("Queen", 900000, discography);

    library.addArtist(artist);
    expect(library.searchDiscographyItem("A Night at the Opera")).toEqual(record);
  });

  test("Debe encontrar un single por su nombre", () => {
    const song: Song = { name: "Imagine", duration: 183, genres: ["Rock"], single: true, plays: 2000000 };
    const single = new Single("Imagine", 1971, [song]); // ahora acepta array de versiones
    const discography = new Discography([single]);
    const artist = new Artist("John Lennon", 850000, discography);

    library.addArtist(artist);
    expect(library.searchDiscographyItem("Imagine")).toEqual(single);
  });

  test("Debe retornar undefined si el disco o single no existe", () => {
    expect(library.searchDiscographyItem("Nonexistent Record")).toBeUndefined();
  });

  test("Debe mostrar un mensaje si la biblioteca está vacía", () => {
    const consoleSpy = vi.spyOn(console, "log").mockImplementation(() => {});
    library.showLibrary();
    expect(consoleSpy).toHaveBeenCalledWith("No artists in the library.");
    consoleSpy.mockRestore();
  });

  test("Debe mostrar la biblioteca correctamente con artistas", () => {
    const song: Song = { name: "Yesterday", duration: 123, genres: ["Pop"], single: true, plays: 500000 };
    const record = new Record("Help!", 1965, [song]);
    const discography = new Discography([record]);
    const artist = new Artist("The Beatles", 1000000, discography);

    library.addArtist(artist);

    const consoleTableSpy = vi.spyOn(console, "table").mockImplementation(() => {});
    library.showLibrary();
    expect(consoleTableSpy).toHaveBeenCalled();
    consoleTableSpy.mockRestore();
  });

  test("Debe calcular la duración total de un disco correctamente", () => {
    const song1: Song = { name: "Song 1", duration: 200, genres: ["Pop"], single: false, plays: 500000 };
    const song2: Song = { name: "Song 2", duration: 180, genres: ["Pop"], single: false, plays: 300000 };
    const record = new Record("Pop Album", 2024, [song1, song2]);

    expect(record.getTotalDuration()).toBe(380);
  });

  test("Debe calcular la cantidad total de reproducciones de un disco correctamente", () => {
    const song1: Song = { name: "Hit 1", duration: 240, genres: ["Rock"], single: false, plays: 1000000 };
    const song2: Song = { name: "Hit 2", duration: 220, genres: ["Rock"], single: false, plays: 800000 };
    const record = new Record("Greatest Hits", 2023, [song1, song2]);

    expect(record.getTotalPlays()).toBe(1800000);
  });

  test("Debe calcular la duración total de un single correctamente", () => {
    const song: Song = { name: "Single Hit", duration: 210, genres: ["Indie"], single: true, plays: 600000 };
    const single = new Single("Single Hit", 2022, [song]);

    expect(single.getTotalDuration()).toBe(210);
  });

  test("Debe calcular la cantidad total de reproducciones de un single correctamente", () => {
    const song: Song = { name: "Viral Song", duration: 190, genres: ["Hip-Hop"], single: true, plays: 700000 };
    const single = new Single("Viral Song", 2021, [song]);

    expect(single.getTotalPlays()).toBe(700000);
  });
});
