import { FileManager } from "./services/FileManager";
import { FileStorage } from "./services/Storage";
import { Logger } from "./services/Logger";

const fileStorage = new FileStorage("example.txt");
const fileManager = new FileManager(fileStorage);

// Leer archivo
const currentContent = fileManager.readFile();
Logger.log("Current content: " + currentContent);

// Escribir archivo
const newData = "This is new content to be written into the file.";
fileManager.writeFile(newData);

// Leer archivo actualizado
const updatedContent = fileManager.readFile();
Logger.log("Updated content: " + updatedContent);