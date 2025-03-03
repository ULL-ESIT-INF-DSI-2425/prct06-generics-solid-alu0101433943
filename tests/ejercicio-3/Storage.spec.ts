import { describe, it, expect, vi, beforeEach } from "vitest";
import { FileStorage } from "../../src/ejercicio-3/services/Storage";
import * as fs from "fs";

vi.mock("fs");

describe("FileStorage", () => {
  const filePath = "testfile.txt";
  let fileStorage: FileStorage;

  beforeEach(() => {
    vi.restoreAllMocks();
    fileStorage = new FileStorage(filePath);
  });

  it("debería leer el contenido del archivo correctamente", () => {
    vi.spyOn(fs, "readFileSync").mockReturnValue("contenido de prueba");

    const result = fileStorage.read();
    expect(result).toBe("contenido de prueba");
    expect(fs.readFileSync).toHaveBeenCalledWith(filePath, "utf-8");
  });

  it("debería lanzar un error si hay un problema al leer el archivo", () => {
    vi.spyOn(fs, "readFileSync").mockImplementation(() => {
      throw new Error("Error de lectura");
    });

    expect(() => fileStorage.read()).toThrow("Error al leer el archivo");
  });

  it("debería escribir contenido en el archivo correctamente", () => {
    const spy = vi.spyOn(fs, "writeFileSync").mockImplementation(() => {});

    fileStorage.write("nuevo contenido");
    expect(spy).toHaveBeenCalledWith(filePath, "nuevo contenido", "utf-8");
  });

  it("debería lanzar un error si hay un problema al escribir en el archivo", () => {
    vi.spyOn(fs, "writeFileSync").mockImplementation(() => {
      throw new Error("Error de escritura");
    });

    expect(() => fileStorage.write("nuevo contenido"))
      .toThrow("Error al escribir en el archivo");
  });
});
