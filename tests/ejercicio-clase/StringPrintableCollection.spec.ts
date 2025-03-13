import { beforeEach, describe, test, expect } from "vitest";
import { StringPrintableCollection } from "../../src/ejercicio-clase/StringPrintableCollection";

describe("Clase StringPrintableCollection, comprobación de sus métodos", () => {
  let stringCollection: StringPrintableCollection;
  beforeEach(() => {
    stringCollection = new StringPrintableCollection(["arroz", "azucar", "harina"]);
  });

  test("Comprobación método Print", () => {
    expect(stringCollection.print()).toEqual("arroz, azucar, harina");
  });

  test("Comprobación método add", () => {
    const stringCollection = new StringPrintableCollection();
    expect(stringCollection.print()).toEqual("");
    stringCollection.addItem("arroz");
    stringCollection.addItem("azucar");
    expect(stringCollection.print()).toEqual("arroz, azucar");
  });

  test("Comprobación método remove", () => {
    expect(stringCollection.removeItem(2)).toEqual("harina");
    expect(stringCollection.removeItem(0)).toEqual("arroz");
    expect(stringCollection.removeItem(2)).toBeUndefined();
  });

  test("Comprobación método getItem", () => {
    expect(stringCollection.getItem(1)).toEqual("azucar");
    expect(stringCollection.getItem(0)).toEqual("arroz");
  });

  test("Comprobación método getNumberOfItems", () => {
    expect(stringCollection.getNumberOfItems()).toEqual(3);
    stringCollection.addItem("sopa");
    stringCollection.addItem("verdura");
    expect(stringCollection.getNumberOfItems()).toEqual(5);
  });

  test("Comprobación errores", () => {
    expect(() => {
    stringCollection.getItem(10)
    }).toThrow('Índice fuera de rango');

    expect(() => {
      stringCollection.removeItem(10)
    }).toThrow('Índice fuera de rango')
  });
});