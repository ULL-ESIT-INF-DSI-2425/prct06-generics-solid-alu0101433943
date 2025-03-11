import { describe, expect, beforeEach, test } from 'vitest';
import { Movie } from "../../src/ejercicio-1/models/Movie";
import { MoviesCollection } from "../../src/ejercicio-1/collections/MoviesCollection";

describe('MoviesCollection', () => {
  let collection: MoviesCollection;

  beforeEach(() => {
    collection = new MoviesCollection([]);
    collection.addItem(new Movie("Movie One", 2020, "Action", "Director One"));
    collection.addItem(new Movie("Movie Two", 2021, "Comedy", "Director Two"));
    collection.addItem(new Movie("Action Movie", 2021, "Action", "Director Three"));
    collection.addItem(new Movie("Movie Three", 2020, "Drama", "Director Four"));
  });

  describe('searchByTitle', () => {
    test('should return items that match the title', () => {
      const result = collection.searchByTitle("Movie One");
      expect(result).toHaveLength(1);
      expect(result[0].title).toBe("Movie One");
    });

    test('should return items that match part of the title', () => {
      const result = collection.searchByTitle("Movie");
      expect(result).toHaveLength(4);
    });

    test('should return empty array if no title matches', () => {
      const result = collection.searchByTitle("Non Existent Movie");
      expect(result).toHaveLength(0);
    });
  });

  describe('searchByYear', () => {
    test('should return items that match the year', () => {
      const result = collection.searchByYear(2020);
      expect(result).toHaveLength(2);
    });

    test('should return empty array if no items match the year', () => {
      const result = collection.searchByYear(2019);
      expect(result).toHaveLength(0);
    });
  });

  describe('searchByGenre', () => {
    test('should return items that match the genre', () => {
      const result = collection.searchByGenre("Action");
      expect(result).toHaveLength(2);
    });

    test('should return empty array if no items match the genre', () => {
      const result = collection.searchByGenre("Horror");
      expect(result).toHaveLength(0);
    });
  });
});