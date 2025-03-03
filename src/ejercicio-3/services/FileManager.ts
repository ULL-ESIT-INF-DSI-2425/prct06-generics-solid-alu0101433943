import { Logger } from "./Logger";
import { Storage } from "./Storage";

/**
 * Clase FileManager que gestiona operaciones de lectura y escritura de almacenamiento.
 * 
 * **Cumple SRP** porque solo se encarga de la gestión de archivos a través de una abstracción.
 * **Cumple DIP** porque depende de la interfaz Storage, permitiendo flexibilidad en la implementación.
 */
export class FileManager {
  constructor(private storage: Storage) {}

  /**
   * Lee datos del almacenamiento utilizando la abstracción Storage.
   * @returns Contenido del almacenamiento.
   */
  public readFile(): string {
    try {
      return this.storage.read();
    } catch (error) {
      Logger.error(error.message);
      return "";
    }
  }

  /**
   * Escribe datos en el almacenamiento utilizando la abstracción Storage.
   * @param data - Datos a escribir.
   */
  public writeFile(data: string): void {
    try {
      this.storage.write(data);
      Logger.log("Archivo escrito exitosamente.");
    } catch (error) {
      Logger.error(error.message);
    }
  }
}