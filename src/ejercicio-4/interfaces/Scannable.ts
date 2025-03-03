/**
 * Interfaz que define la capacidad de escaneo.
 */
export interface Scannable {
  /**
   * Escanea un documento.
   */
  scan(): void;
}