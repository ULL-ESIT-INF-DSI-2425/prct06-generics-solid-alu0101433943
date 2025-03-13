import { PrintableCollection } from "./PrintableCollection";

/**
 * Clase que define una colección de cadenas que pueden ser imprimidos.
 */
export class StringPrintableCollection extends PrintableCollection<string> {
  /**
   * Constructor de la clase NumericPrintableCollection
   * @param items - Items iniciales
   */
  constructor(protected items: string[] = []) {
    super(items);
  };

  /**
   * Imprime el contenido.
   */
  print(): string {
    let result: string = "";
    this.items.forEach(item => {
      result += item;
      result += ", "
    })
    result = result.substring(0, result.length - 1);
    result = result.substring(0, result.length - 1);
    
    return result;
  }
}