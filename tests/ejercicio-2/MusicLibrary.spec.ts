import { describe, test, expect, beforeEach, vi } from "vitest";
import { MusicLibrary } from "../../src/ejercicio-2/services/MusicLibrary";
import { Artist } from "../../src/ejercicio-2/models/Artist";
import { Record } from "../../src/ejercicio-2/models/Record";
import { Single } from "../../src/ejercicio-2/models/Single";
import { Song } from "../../src/ejercicio-2/models/Song";

describe("MusicLibrary", () => {
  let library: MusicLibrary;

  beforeEach(() => {
    library = new MusicLibrary();
  });

  test("Debe agregar un artista correctamente", () => {
    const artist = new Artist("The Beatles", 1000000, []);
    library.addArtist(artist);

    expect(library.searchArtist("The Beatles")).toEqual(artist);
  });

  test("Debe lanzar un error al agregar un artista inválido", () => {
    // En lugar de `any`, verificamos con undefined o un objeto vacío incorrecto
    expect(() => library.addArtist(undefined as unknown as Artist)).toThrow("Invalid artist.");
    expect(() => library.addArtist({} as Artist)).toThrow("Invalid artist.");
  });

  test("Debe encontrar un artista por su nombre", () => {
    const artist = new Artist("Queen", 900000, []);
    library.addArtist(artist);

    expect(library.searchArtist("Queen")).toEqual(artist);
  });

  test("Debe retornar undefined si el artista no existe", () => {
    expect(library.searchArtist("Nonexistent Artist")).toBeUndefined();
  });

  test("Debe encontrar un disco por su nombre", () => {
    const song: Song = { name: "Bohemian Rhapsody", duration: 354, genres: ["Rock"], single: false, plays: 1000000 };
    const record = new Record("A Night at the Opera", 1975, [song]);
    const artist = new Artist("Queen", 900000, [record]);

    library.addArtist(artist);

    expect(library.searchDiscographyItem("A Night at the Opera")).toEqual(record);
  });

  test("Debe encontrar un single por su nombre", () => {
    const song: Song = { name: "Imagine", duration: 183, genres: ["Rock"], single: true, plays: 2000000 };
    const single = new Single("Imagine", 1971, song);
    const artist = new Artist("John Lennon", 850000, [single]);

    library.addArtist(artist);

    expect(library.searchDiscographyItem("Imagine")).toEqual(single);
  });

  test("Debe retornar undefined si el disco o single no existe", () => {
    expect(library.searchDiscographyItem("Nonexistent Record")).toBeUndefined();
  });

  test("Debe mostrar la biblioteca sin errores", () => {
    console.log = vi.fn(); // Cambiado de `jest.fn()` a `vi.fn()`
    library.showLibrary();
    expect(console.log).toHaveBeenCalledWith("No artists in the library.");
  });
});
