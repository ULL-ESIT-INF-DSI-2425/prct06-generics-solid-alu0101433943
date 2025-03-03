import { Bird } from "./Bird";

/**
 * Representa un pingüino, que es un ave pero no puede volar.
 */
export class Penguin extends Bird {
  /**
   * Método específico para pingüinos.
   */
  swim(): void {
    console.log("Swimming...");
  }
}
