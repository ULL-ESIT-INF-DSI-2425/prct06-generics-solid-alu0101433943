import { Printer } from "./devices/Printer";
import { Scanner } from "./devices/Scanner";
import { PrinterScanner } from "./devices/PrinterScanner";

// Código cliente
const printer = new Printer();
printer.print();

const scanner = new Scanner();
scanner.scan();

const printerScanner = new PrinterScanner();
printerScanner.print();
printerScanner.scan();
