import { readdirSync, readFileSync } from "fs";
import { resolve, join, extname, dirname } from "path";
import CustomException from "./CustomException";
import Utilities from "./Utilities";
import { fileURLToPath } from "url";

// Get the current filename
const __filename = fileURLToPath(import.meta.url);

// Get the directory name
const __dirname = dirname(__filename);

/**
 * LocatorReader class to read JSON files which contains android and iOS locators for POM class objects
 *
 * @class LocatorReader
 * @typedef {LocatorReader}
 */
class LocatorReader {
  /**
   * Creates an instance of LocatorReader.
   *
   * @constructor
   * @param {*} page
   */
  constructor(page) {
    this.page = page;
    this.locators = this.#loadLocators();
  }

  /**
   * Read locators from JSON files, and retrieve the platform specid & page related locators
   * If locato not exists in the JSON file, then it throws @see CustomException
   *
   * @returns {*} locators JSON object
   */
  #loadLocators() {
    const dirPath = resolve(__dirname, "../locators");
    const files = readdirSync(dirPath);
    let locators;
    for (const file of files) {
      if (extname(file) === ".json") {
        const filePath = join(dirPath, file);
        const fileLocators = JSON.parse(readFileSync(filePath, "utf-8"));
        if (fileLocators[this.page]) {
          locators = fileLocators[this.page];
          break;
        }
      }
    }

    if (Utilities.isUndefined(locators)) {
      throw new CustomException(`Locators for page ${this.page} not found in the JSON files`, { page: this.page });
    }
    return locators;
  }

  /**
   * It retrieves the locator for given element or locator name from locator object which returned by @see loadLocators
   * If locator not exists in the locator object, then it throws @see CustomException
   * It checks if locator exists, then it contains value or not
   *
   * @param {*} elementName element or locator name
   * @returns {String} @see constructSelector function return value
   */
  getLocator(elementName) {
    const locator = this.locators[elementName];
    if (Utilities.isUndefined(locator)) {
      throw new CustomException(`Locator for element ${elementName} not found in the JSON file for page ${this.page}`, { elementName: elementName, page: this.page });
    }
    return locator;
  }
}
export default LocatorReader;
