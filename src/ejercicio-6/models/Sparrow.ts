import { Bird } from "./Bird";
import { Flyable } from "../interfaces/Flyable";

/**
 * Representa un gorrión, que es un ave que puede volar.
 */
export class Sparrow extends Bird implements Flyable {
  /**
   * Implementación del método `fly()` para gorriones.
   */
  fly(): void {
    console.log("Flying...");
  }
}
