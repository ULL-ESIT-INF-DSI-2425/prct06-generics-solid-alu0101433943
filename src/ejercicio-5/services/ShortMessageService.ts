import { NotificationService } from "./NotificationService";

/**
 * Servicio de notificación por SMS.
 * Implementa la interfaz `NotificationService`.
 */
export class ShortMessageService implements NotificationService {
  /**
   * Envía una notificación por SMS.
   * @param message - El mensaje de la notificación.
   */
  notify(message: string): void {
    console.log(`Sending notification by SMS: ${message}`);
  }
}
