export enum Acciones {INICIARSESION, CERRARSESION, EXIT};

/**
 * Tupla representatitca de las acciones en el sistema
 */
export type Accion = [
  usuario: string,
  accion: Acciones,
  fechahora: Date
]


/**
 * Clase Logger que lleva un registro de la actividad del sistema
 */
export class Logger implements Iterable <Accion>{
  private static logger: Logger;
  private datos: Accion[];

  [Symbol.iterator](): IterableIterator<Accion> {
    return this.datos.values();
  }

  /**
   * Constructor privado de la clase, no accesible (Singleton)
   */
  private constructor() {
    this.datos = [];
  }

  /**
   * Devuelve la instancia de la clase, si se usa por primera vez la crea
   * @returns Instancia de la clase
   */
  public static getLogger(): Logger {
    if (!Logger.logger) {
      Logger.logger = new Logger();
    }
    return Logger.logger;
  }

  /**
   * Añade al registro una nueva acción
   * @param usuario - Usuario que realiza la acción
   * @param accion - La acción que se lleva a cabo
   */
  public log(accion: Accion) {
    this.datos.push(accion)
  }

  /**
   * Permite obtener el listado de las acciones realizadas
   * por un usuario determinado
   * @param usuario - Usuario que se busca
   * @returns Lista de las acciones
   */
  public getActionsUsers(usuario: string): Accion[] | undefined {
    const result = [];
    this.datos.forEach(item => {
      if (item[0] === usuario) {
        result.push(item);
      }
    });
    if (result.length == 0) return undefined;
    return result;
  }

  /**
   * Permite obtener el listado de los usuarios que hayan realizado determinada acción
   * por un usuario determinado
   * @param action - Acción que se busca
   * @returns Lista de las acciones
   */
  public getUsersActions(action: Acciones): Accion[] | undefined{
    const result = [];
    this.datos.forEach(item => {
      if (item[1] === action) {
        result.push(item);
      }
    });
    if (result.length == 0) return undefined;
    return result;
  }

  /**
   * Permite obtener el listado de acciones entre dos fechas
   * @param usuario - Usuario que se busca
   * @returns Lista de las acciones
   */
  public getUsersDates(fecha1: Date, fecha2: Date): Accion[] | undefined {
    const result = [];
    this.datos.forEach(item => {
      if (item[2] > fecha1 && item[2] < fecha2) {
        result.push(item);
      }
    });
    if (result.length == 0) return undefined;
    return result;
  }
}