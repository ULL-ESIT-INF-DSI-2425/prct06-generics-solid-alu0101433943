"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = exports.Acciones = void 0;
var Acciones;
(function (Acciones) {
    Acciones[Acciones["INICIARSESION"] = 0] = "INICIARSESION";
    Acciones[Acciones["CERRARSESION"] = 1] = "CERRARSESION";
    Acciones[Acciones["EXIT"] = 2] = "EXIT";
})(Acciones || (exports.Acciones = Acciones = {}));
;
/**
 * Clase Logger que lleva un registro de la actividad del sistema
 */
var Logger = /** @class */ (function () {
    /**
     * Constructor privado de la clase, no accesible (Singleton)
     */
    function Logger() {
        this.datos = [];
    }
    Logger.prototype[Symbol.iterator] = function () {
        return this.datos.values();
    };
    /**
     * Devuelve la instancia de la clase, si se usa por primera vez la crea
     * @returns Instancia de la clase
     */
    Logger.getLogger = function () {
        if (!Logger.logger) {
            Logger.logger = new Logger();
        }
        return Logger.logger;
    };
    /**
     * Añade al registro una nueva acción
     * @param usuario - Usuario que realiza la acción
     * @param accion - La acción que se lleva a cabo
     */
    Logger.prototype.log = function (accion) {
        this.datos.push(accion);
    };
    /**
     * Permite obtener el listado de las acciones realizadas
     * por un usuario determinado
     * @param usuario - Usuario que se busca
     * @returns Lista de las acciones
     */
    Logger.prototype.getActionsUsers = function (usuario) {
        var result = [];
        this.datos.forEach(function (item) {
            if (item[0] === usuario) {
                result.push(item);
            }
        });
        if (result.length == 0)
            return undefined;
        return result;
    };
    /**
     * Permite obtener el listado de los usuarios que hayan realizado determinada acción
     * por un usuario determinado
     * @param action - Acción que se busca
     * @returns Lista de las acciones
     */
    Logger.prototype.getUsersActions = function (action) {
        var result = [];
        this.datos.forEach(function (item) {
            if (item[1] === action) {
                result.push(item);
            }
        });
        if (result.length == 0)
            return undefined;
        return result;
    };
    /**
     * Permite obtener el listado de acciones entre dos fechas
     * @param usuario - Usuario que se busca
     * @returns Lista de las acciones
     */
    Logger.prototype.getUsersDates = function (fecha1, fecha2) {
        var result = [];
        this.datos.forEach(function (item) {
            if (item[2] > fecha1 && item[2] < fecha2) {
                result.push(item);
            }
        });
        if (result.length == 0)
            return undefined;
        return result;
    };
    return Logger;
}());
exports.Logger = Logger;
