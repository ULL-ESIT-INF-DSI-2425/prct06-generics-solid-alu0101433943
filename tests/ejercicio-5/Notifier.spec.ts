import { describe, test, expect, vi } from "vitest";
import { Notifier } from "../../src/ejercicio-5/services/Notifier";
import { NotificationService } from "../../src/ejercicio-5/services/NotificationService";

/**
 * Mock de un servicio de notificación para pruebas.
 */
class MockNotificationService implements NotificationService {
  notify = vi.fn();
}

describe("Notifier", () => {
  test("debería llamar al método notify del servicio de notificación", () => {
    const mockService = new MockNotificationService();
    const notifier = new Notifier(mockService);
    const message = "Test message";

    notifier.sendNotification(message);

    expect(mockService.notify).toHaveBeenCalledWith(message);
    expect(mockService.notify).toHaveBeenCalledTimes(1);
  });
});
