import { describe, it, vi, expect } from "vitest";
import { EmailService } from "../../src/ejercicio-5/services/EmailService";

describe("EmailService", () => {
  it("should send email notification correctly", () => {
    const consoleSpy = vi.spyOn(console, "log").mockImplementation(() => {}); // Evita imprimir en stdout
    const emailService = new EmailService();

    emailService.notify("Test Email Message");

    expect(consoleSpy).toHaveBeenCalledWith("Sending notification by email: Test Email Message");
    consoleSpy.mockRestore();
  });
});