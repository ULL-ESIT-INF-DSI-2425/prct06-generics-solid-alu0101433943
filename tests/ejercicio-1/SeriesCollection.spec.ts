import { describe, it, expect, beforeEach } from 'vitest';
import { Media } from "../../src/ejercicio-1/models/Media";
import { SeriesCollection } from "../../src/ejercicio-1/collections/SeriesCollection";

describe('SeriesCollection', () => {
  let collection: SeriesCollection;

  beforeEach(() => {
    collection = new SeriesCollection();
    collection.addItem(new Media("Series One", 2020, "Sci-Fi"));
    collection.addItem(new Media("Series Two", 2021, "Drama"));
    collection.addItem(new Media("Sci-Fi Series", 2021, "Sci-Fi"));
    collection.addItem(new Media("Series Three", 2020, "Comedy"));
  });

  describe('searchByTitle', () => {
    it('should return items that match the title', () => {
      const result = collection.searchByTitle("Series One");
      expect(result).toHaveLength(1);
      expect(result[0].title).toBe("Series One");
    });

    it('should return items that match part of the title', () => {
      const result = collection.searchByTitle("Series");
      expect(result).toHaveLength(4);
    });

    it('should return empty array if no title matches', () => {
      const result = collection.searchByTitle("Non Existent Series");
      expect(result).toHaveLength(0);
    });
  });

  describe('searchByYear', () => {
    it('should return items that match the year', () => {
      const result = collection.searchByYear(2020);
      expect(result).toHaveLength(2); 
    });

    it('should return empty array if no items match the year', () => {
      const result = collection.searchByYear(2019);
      expect(result).toHaveLength(0);
    });
  });

  describe('searchByGenre', () => {
    it('should return items that match the genre', () => {
      const result = collection.searchByGenre("Sci-Fi");
      expect(result).toHaveLength(2);
    });

    it('should return empty array if no items match the genre', () => {
      const result = collection.searchByGenre("Romance");
      expect(result).toHaveLength(0);
    });
  });
});
