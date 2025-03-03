import { describe, it, vi, expect } from "vitest";
import { Printer } from "../../src/ejercicio-4/devices/Printer";

describe("Printer", () => {
  it("should print correctly", () => {
    const consoleSpy = vi.spyOn(console, "log").mockImplementation(() => {});
    const printer = new Printer();

    printer.print();

    expect(consoleSpy).toHaveBeenCalledWith("Printing...");
    consoleSpy.mockRestore();
  });
});