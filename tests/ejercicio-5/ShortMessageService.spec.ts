import { describe, it, vi, expect } from "vitest";
import { ShortMessageService } from "../../src/ejercicio-5/services/ShortMessageService";

describe("ShortMessageService", () => {
  it("should send SMS notification correctly", () => {
    const consoleSpy = vi.spyOn(console, "log").mockImplementation(() => {}); // Evita imprimir en stdout
    const smsService = new ShortMessageService();

    smsService.notify("Test SMS Message");

    expect(consoleSpy).toHaveBeenCalledWith("Sending notification by SMS: Test SMS Message");
    consoleSpy.mockRestore();
  });
});
