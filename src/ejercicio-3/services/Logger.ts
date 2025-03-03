/**
 * Clase que maneja la salida de logs.
 * 
 * **Cumple SRP**, ya que se encarga exclusivamente de la gestión de mensajes.
 */
export class Logger {
  /**
   * Muestra un mensaje informativo en la consola.
   * @param message - Mensaje a mostrar.
   */
  static log(message: string): void {
    console.log(message);
  }

  /**
   * Muestra un mensaje de error en la consola.
   * @param message - Mensaje de error a mostrar.
   */
  static error(message: string): void {
    console.error(message);
  }
}