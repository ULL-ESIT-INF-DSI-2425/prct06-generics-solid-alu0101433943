import { NotificationService } from "./NotificationService";

/**
 * Servicio de notificación por correo electrónico.
 * Implementa la interfaz `NotificationService`.
 */
export class EmailService implements NotificationService {
  /**
   * Envía una notificación por correo electrónico.
   * @param message - El mensaje de la notificación.
   */
  notify(message: string): void {
    console.log(`Sending notification by email: ${message}`);
  }
}
