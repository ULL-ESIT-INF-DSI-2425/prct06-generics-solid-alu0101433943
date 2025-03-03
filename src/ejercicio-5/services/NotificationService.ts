/**
 * Interfaz común para todos los servicios de notificación.
 * Define un método `notify` que debe ser implementado por cualquier servicio de notificación.
 */
export interface NotificationService {
  /**
   * Envía una notificación con el mensaje especificado.
   * @param message - El mensaje de la notificación.
   */
  notify(message: string): void;
}
