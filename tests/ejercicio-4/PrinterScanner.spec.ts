import { describe, test, expect, beforeEach, afterEach, vi } from "vitest";
import { PrinterScanner } from "../../src/ejercicio-4/devices/PrinterScanner";

describe("PrinterScanner", () => {
  let printerScanner: PrinterScanner;
  let consoleSpy: ReturnType<typeof vi.spyOn>;

  beforeEach(() => {
    printerScanner = new PrinterScanner();
    consoleSpy = vi.spyOn(console, "log").mockImplementation(() => {});
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test("should print correctly", () => {
    printerScanner.print();
    expect(consoleSpy).toHaveBeenCalledWith("Printing...");
  });

  test("should scan correctly", () => {
    printerScanner.scan();
    expect(consoleSpy).toHaveBeenCalledWith("Scanning...");
  });
});
