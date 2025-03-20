import { describe, test, expect } from "vitest";
import { Logger, Acciones, Accion } from "../../src/ejercicio-clase-2/Logger";

describe("Clase Logger, comprobación de sus métodos", () => {
  const logger = Logger.getLogger();

  logger.log(["a", Acciones.INICIARSESION, new Date(20, 2, 2025)]);
  logger.log(["b", Acciones.INICIARSESION, new Date(21, 2, 2025)]);
  logger.log(["a", Acciones.CERRARSESION, new Date(25, 2, 2025)]);
  logger.log(["b", Acciones.CERRARSESION, new Date(26, 2, 2025)]);

  test("Comprobación método log (2)", () => {
    expect((logger.getActionsUsers("a") as Accion[]).length).toBeLessThan(4);
    expect((logger.getActionsUsers("a") as Accion[]).length).toBeGreaterThan(0);
  });

  test("Comprobación método log y getActionsUsers", () => {
    expect(logger.getActionsUsers("a")).toEqual([["a", Acciones.INICIARSESION, new Date(20, 2, 2025)], ["a", Acciones.CERRARSESION, new Date(25, 2, 2025)]]);
    expect(logger.getActionsUsers("b")).toEqual([["b", Acciones.INICIARSESION, new Date(21, 2, 2025)], ["b", Acciones.CERRARSESION, new Date(26, 2, 2025)]]);
    expect(logger.getActionsUsers("c")).toBeUndefined();

  });

  test("Comprobación método log y getUsersActions", () => {
    expect(logger.getUsersActions(Acciones.INICIARSESION)).toEqual([["a", Acciones.INICIARSESION, new Date(20, 2, 2025)], ["b", Acciones.INICIARSESION, new Date(21, 2, 2025)]]);
    expect(logger.getUsersActions(Acciones.CERRARSESION)).toEqual([["a", Acciones.CERRARSESION, new Date(25, 2, 2025)], ["b", Acciones.CERRARSESION, new Date(26, 2, 2025)]]);
    expect(logger.getUsersActions(Acciones.EXIT)).toBeUndefined();
  });

  test("Comprobación método log y getActionsDates", () => {
    expect(logger.getUsersDates(new Date(19, 2, 2025), new Date(22, 2, 2025))).toEqual([["a", Acciones.INICIARSESION, new Date(20, 2, 2025)], ["b", Acciones.INICIARSESION, new Date(21, 2, 2025)]]);
    expect(logger.getUsersDates(new Date(24, 2, 2025), new Date(27, 2, 2025))).toEqual([["a", Acciones.CERRARSESION, new Date(25, 2, 2025)], ["b", Acciones.CERRARSESION, new Date(26, 2, 2025)]]);
    expect(logger.getUsersDates(new Date(29, 2, 2025), new Date(30, 2, 2025))).toBeUndefined();
  });
});