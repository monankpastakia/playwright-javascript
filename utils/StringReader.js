import { readdirSync } from "fs";
import CustomException from "./CustomException";
import { fileURLToPath } from "url";
import { resolve, join, extname, dirname } from "path";
import Logger from "../logger/Logger";

// Get the current filename
const __filename = fileURLToPath(import.meta.url);

// Get the directory name
const __dirname = dirname(__filename);

/**
 * StringReader class read all JS Strings file to retrieve different page strings
 *
 * @class StringReader
 * @typedef {StringReader}
 */
class StringReader {
  /**
   * Creates an instance of StringReader.
   * It initializes a Map to store locale strings
   * It iterates over each JS file in the directory.
   *
   * @constructor
   */
  constructor() {
    this.strings = new Map();
    this.logger = new Logger(`StringReader.js`);
    this.#loadStrings();
  }

  /** Load/Read the strings */
  #loadStrings() {
    try {
      const dirPath = resolve(__dirname, "../locale-strings");
      const files = readdirSync(dirPath);

      for (const file of files) {
        if (extname(file) === ".js") {
          import(join(dirPath, file)).then((localeData) => {
            for (const { locale, strings } of localeData.default) {
              this.strings.set(locale, strings);
            }
          });
        }
      }
    } catch (error) {
      this.logger.error(`Error occurred while loading strings. Error: ${error}`, `loadStrings`);
    }
  }

  /**
   * To get the strings for specified page for given locale.
   *
   * @param {*} locale locale value
   * @param {*} page page name
   * @returns {String} all the strings of the page
   */
  getPageStrings(locale, page) {
    const localeData = this.strings.get(locale);
    if (!localeData) {
      throw new CustomException(`No strings found for Locale ${locale}`);
    }
    const pageData = localeData.find((p) => p.page === page);
    if (!pageData) {
      throw new CustomException(`No strings found for Page ${page} and Locale ${locale}`);
    }
    return pageData.strings;
  }
}
export default StringReader;
