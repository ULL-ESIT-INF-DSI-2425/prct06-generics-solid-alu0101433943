import { NotificationService } from "./NotificationService";

/**
 * Clase que gestiona el envío de notificaciones.
 * Permite el uso de cualquier servicio que implemente `NotificationService`.
 */
export class Notifier {
  /**
   * Crea una nueva instancia de `Notifier`.
   * @param notificationService - Servicio de notificación a utilizar.
   */
  constructor(private notificationService: NotificationService) {}

  /**
   * Envía una notificación utilizando el servicio configurado.
   * @param message - El mensaje a enviar.
   */
  sendNotification(message: string): void {
    this.notificationService.notify(message);
  }
}
