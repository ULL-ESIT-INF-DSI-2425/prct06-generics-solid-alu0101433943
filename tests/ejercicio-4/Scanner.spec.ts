import { describe, it, vi, expect } from "vitest";
import { Scanner } from "../../src/ejercicio-4/devices/Scanner";

describe("Scanner", () => {
  it("should scan correctly", () => {
    const consoleSpy = vi.spyOn(console, "log").mockImplementation(() => {});
    const scanner = new Scanner();

    scanner.scan();

    expect(consoleSpy).toHaveBeenCalledWith("Scanning...");
    consoleSpy.mockRestore();
  });
});