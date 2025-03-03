/**
 * Clase base para todas las aves.
 * No implementa `fly()` para cumplir con el Principio de Sustitución de Liskov (LSP).
 */
export class Bird {
  /**
   * Método genérico para describir un ave.
   */
  describe(): void {
    console.log("I am a bird.");
  }
}
