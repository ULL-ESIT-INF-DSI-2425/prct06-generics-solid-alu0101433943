import { beforeEach, describe, test, expect } from "vitest";
import { NumericPrintableCollection } from "../../src/ejercicio-clase/NumericPrintableCollection";
import { PrintableCollection } from "../../src/ejercicio-clase/PrintableCollection";

describe("Clase NumericPrintableCollection, comprobación de sus métodos", () => {
  let numericCollection: NumericPrintableCollection;
  beforeEach(() => {
    numericCollection = new NumericPrintableCollection([3, 4, 5]);
  });

  test("Comprobación método Print", () => {
    expect(numericCollection.print()).toEqual("3, 4, 5");
  });

  test("Comprobación método add", () => {
    const numericCollection = new NumericPrintableCollection();
    expect(numericCollection.print()).toEqual("");
    numericCollection.addItem(3);
    numericCollection.addItem(4);
    expect(numericCollection.print()).toEqual("3, 4");
  });

  test("Comprobación método remove", () => {
    expect(numericCollection.removeItem(2)).toEqual(5);
    expect(numericCollection.removeItem(0)).toEqual(3);
    expect(numericCollection.removeItem(2)).toBeUndefined();
  });

  test("Comprobación método getItem", () => {
    expect(numericCollection.getItem(1)).toEqual(4);
    expect(numericCollection.getItem(0)).toEqual(3);
  });

  test("Comprobación método getNumberOfItems", () => {
    let aux: number = numericCollection.getNumberOfItems();
    expect(numericCollection.getNumberOfItems()).toEqual(3);
    numericCollection.addItem(9);
    numericCollection.addItem(8);
    expect(numericCollection.getNumberOfItems()).toEqual(5);
    expect(numericCollection.getNumberOfItems()).toBeGreaterThan(aux);
  });

  test("Comprobación errores", () => {
    expect(() => {
    numericCollection.getItem(10)
    }).toThrow('Índice fuera de rango');

    expect(() => {
      numericCollection.removeItem(10)
    }).toThrow('Índice fuera de rango')
  });

  test('Instancia de', () => {
    expect(numericCollection).toBeInstanceOf(NumericPrintableCollection);
    expect(numericCollection).toBeInstanceOf(PrintableCollection);
  })
});