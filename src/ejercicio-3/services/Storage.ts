import * as fs from "fs";

/**
 * Interfaz que define un almacenamiento genérico.
 * 
 * Cumple con el **Principio de Inversión de Dependencias (DIP)**,
 * ya que FileManager depende de esta abstracción en lugar de una implementación concreta.
 */
export interface Storage {
  /**
   * Lee los datos desde el almacenamiento.
   * @returns Contenido almacenado.
   */
  read(): string;

  /**
   * Escribe datos en el almacenamiento.
   * @param data - Datos a escribir.
   */
  write(data: string): void;
}

/**
 * Implementación de Storage para el sistema de archivos.
 * 
 * **Cumple SRP** porque solo se encarga de la gestión de archivos.
 * **Cumple DIP** porque implementa Storage, permitiendo reemplazar esta implementación sin afectar a FileManager.
 */
export class FileStorage implements Storage {
  constructor(private filePath: string) {}

  /**
   * Lee el contenido del archivo.
   * @returns Contenido del archivo.
   * @throws Si hay un problema al leer el archivo.
   */
  public read(): string {
    try {
      return fs.readFileSync(this.filePath, "utf-8");
    } catch (error) {
      throw new Error(`Error al leer el archivo: ${error}`);
    }
  }

  /**
   * Escribe contenido en el archivo.
   * @param data - Datos a escribir.
   * @throws Si hay un problema al escribir en el archivo.
   */
  public write(data: string): void {
    try {
      fs.writeFileSync(this.filePath, data, "utf-8");
    } catch (error) {
      throw new Error(`Error al escribir en el archivo: ${error}`);
    }
  }
}