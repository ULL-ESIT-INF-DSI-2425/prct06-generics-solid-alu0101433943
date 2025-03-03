import { describe, test, expect, vi, beforeEach, afterEach } from "vitest";
import { Logger } from "../../src/ejercicio-3/services/Logger";

describe("Logger", () => {
  let consoleLogSpy: ReturnType<typeof vi.spyOn>;
  let consoleErrorSpy: ReturnType<typeof vi.spyOn>;

  beforeEach(() => {
    consoleLogSpy = vi.spyOn(console, "log").mockImplementation(() => {});
    consoleErrorSpy = vi.spyOn(console, "error").mockImplementation(() => {});
  });

  afterEach(() => {
    vi.restoreAllMocks(); // Limpia todos los mocks después de cada prueba
  });

  test("debe llamar console.log correctamente", () => {
    Logger.log("Mensaje de prueba");
    expect(consoleLogSpy).toHaveBeenCalledWith("Mensaje de prueba");
  });

  test("debe llamar console.error correctamente", () => {
    Logger.error("Error de prueba");
    expect(consoleErrorSpy).toHaveBeenCalledWith("Error de prueba");
  });
});
