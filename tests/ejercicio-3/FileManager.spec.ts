import { describe, test, expect, vi, beforeEach } from "vitest";
import { FileManager } from "../../src/ejercicio-3/services/FileManager";
import { Storage } from "../../src/ejercicio-3/services/Storage";
import { Logger } from "../../src/ejercicio-3/services/Logger";

class MockStorage implements Storage {
  private data: string = "";
  read(): string {
    return this.data;
  }
  write(data: string): void {
    this.data = data;
  }
}

describe("FileManager", () => {
  let storage: MockStorage;
  let fileManager: FileManager;

  beforeEach(() => {
    storage = new MockStorage();
    fileManager = new FileManager(storage);
    vi.spyOn(Logger, "log").mockImplementation(() => {});
    vi.spyOn(Logger, "error").mockImplementation(() => {});
  });

  test("debe leer datos correctamente", () => {
    storage.write("contenido de prueba");
    expect(fileManager.readFile()).toBe("contenido de prueba");
  });

  test("debe manejar errores al leer", () => {
    vi.spyOn(storage, "read").mockImplementation(() => {
      throw new Error("Error de lectura");
    });
    expect(fileManager.readFile()).toBe("");
    expect(Logger.error).toHaveBeenCalledWith("Error de lectura");
  });

  test("debe escribir datos correctamente", () => {
    fileManager.writeFile("nuevo contenido");
    expect(storage.read()).toBe("nuevo contenido");
    expect(Logger.log).toHaveBeenCalledWith("Archivo escrito exitosamente.");
  });

  test("debe manejar errores al escribir", () => {
    vi.spyOn(storage, "write").mockImplementation(() => {
      throw new Error("Error de escritura");
    });
    fileManager.writeFile("datos");
    expect(Logger.error).toHaveBeenCalledWith("Error de escritura");
  });
});

