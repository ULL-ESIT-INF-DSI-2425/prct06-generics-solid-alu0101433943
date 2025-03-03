import { Scannable } from "../interfaces/Scannable";

/**
 * Implementación de un escáner.
 * Cumple con el principio de segregación de interfaces (ISP) al solo implementar Scannable.
 */
export class Scanner implements Scannable {
  scan(): void {
    console.log("Scanning...");
  }
}