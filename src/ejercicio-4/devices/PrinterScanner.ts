import { Scannable } from "../interfaces/Scannable";
import { Printable } from "../interfaces/Printable";

/**
 * Implementación de una impresora-escáner.
 * Cumple con el principio de segregación de interfaces (ISP) al implementar solo las funcionalidades necesarias.
 */
export class PrinterScanner implements Printable, Scannable {
  print(): void {
    console.log("Printing...");
  }

  scan(): void {
    console.log("Scanning...");
  }
}