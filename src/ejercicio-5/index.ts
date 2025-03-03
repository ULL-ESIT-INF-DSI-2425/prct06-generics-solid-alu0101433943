import { Notifier } from "./services/Notifier";
import { EmailService } from "./services/EmailService";
import { ShortMessageService } from "./services/ShortMessageService";

// Código cliente
const emailNotifier = new Notifier(new EmailService());
emailNotifier.sendNotification("Hello World!");

const smsNotifier = new Notifier(new ShortMessageService());
smsNotifier.sendNotification("Hello World!");
