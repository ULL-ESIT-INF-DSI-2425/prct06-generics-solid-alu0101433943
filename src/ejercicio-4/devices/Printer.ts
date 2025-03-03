import { Printable } from "../interfaces/Printable";

/**
 * Implementación de una impresora.
 * Cumple con el principio de segregación de interfaces (ISP) al solo implementar Printable.
 */
export class Printer implements Printable {
  print(): void {
    console.log("Printing...");
  }
}