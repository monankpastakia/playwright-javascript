import fs from "fs";
import Logger from "../logger/Logger";
import { fileURLToPath } from "url";
import { resolve, dirname } from "path";

// Get the current filename
const __filename = fileURLToPath(import.meta.url);

// Get the directory name
const __dirname = dirname(__filename);

class ConfigLoader {
  /**
   * Creates an instance of ConfigLoader.
   *
   * @constructor
   */
  constructor() {
    this.logger = new Logger(`ConfigLoader.js`);
    this.config = {};
    this.#loadConfig();
  }

  /** Load/read the config file */
  #loadConfig() {
    try {
      const filePath = resolve(__dirname, "../custom.config.json");
      const data = fs.readFileSync(filePath, "utf8");
      this.config = JSON.parse(data);
    } catch (error) {
      this.logger.error(`Error loading configuration: ${error}`, `loadConfig`);
    }
  }

  /**
   * Get value of the key
   *
   * @param {String} key - JSON key to retrieve its value
   * @returns {String | null} value of provided key
   */
  getValue(key) {
    try {
      return this.config[key];
    } catch (error) {
      this.logger.error(`Error occurred for getting value of key: ${key} \nError: ${error}`, `getValue`);
      return null;
    }
  }
}
export default ConfigLoader;
