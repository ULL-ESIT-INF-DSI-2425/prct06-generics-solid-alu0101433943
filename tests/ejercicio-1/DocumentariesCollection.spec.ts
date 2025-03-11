import { describe, it, expect, beforeEach } from "vitest";
import { DocumentariesCollection } from "../../src/ejercicio-1/collections/DocumentariesCollection";
import { Documentary } from "../../src/ejercicio-1/models/Documentary";

describe("DocumentariesCollection", () => {
  let collection: DocumentariesCollection;

  beforeEach(() => {
    collection = new DocumentariesCollection([]);
    collection.addItem(new Documentary("Documentary One", 2020, "History", "HC"));
    collection.addItem(new Documentary("Documentary Two", 2021, "Nature", "Disney"));
    collection.addItem(new Documentary("History of Nature", 2021, "Nature", "A3"));
    collection.addItem(new Documentary("Documentary Three", 2020, "Science", "NatGeo"));
  });

  describe("searchByTitle", () => {
    it("should return items that match the title", () => {
      const result = collection.searchByTitle("Documentary One");
      expect(result).toHaveLength(1);
      expect(result[0].title).toBe("Documentary One");
    });

    it("should return items that match part of the title", () => {
      const result = collection.searchByTitle("Documentary");
      expect(result).toHaveLength(3);
    });

    it("should return empty array if no title matches", () => {
      const result = collection.searchByTitle("Non Existent Documentary");
      expect(result).toHaveLength(0);
    });
  });

  describe("searchByYear", () => {
    it("should return items that match the year", () => {
      const result = collection.searchByYear(2020);
      expect(result).toHaveLength(2);
    });

    it("should return empty array if no items match the year", () => {
      const result = collection.searchByYear(2019);
      expect(result).toHaveLength(0);
    });
  });

  describe("searchByGenre", () => {
    it("should return items that match the genre", () => {
      const result = collection.searchByGenre("Nature");
      expect(result).toHaveLength(2);
    });

    it("should return empty array if no items match the genre", () => {
      const result = collection.searchByGenre("Comedy");
      expect(result).toHaveLength(0);
    });
  });
});
