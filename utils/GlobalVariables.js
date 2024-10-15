/**
 * GlobalVariables to store the some variable with value so it can be use through out framework
 *
 * @class GlobalVariables
 * @typedef {GlobalVariables}
 */
class GlobalVariables {
  static #locale = "";
  static #platform = "";
  static #customLogLevel = "";
  static #customPageLoadTimeout = "";
  static #customObjectLoadTimeout = "";
  static #customPause = "";

  /**
   * Getter to get locale
   *
   * @static
   * @returns {string}
   */
  static getLocale() {
    return this.#locale;
  }

  /**
   * Setter to set locale
   *
   * @static
   * @param {*} newValue value to set
   */
  static setLocale(newValue) {
    this.#locale = newValue;
  }

  /**
   * Getter to get platform
   *
   * @static
   * @returns {string}
   */
  static getPlatform() {
    return this.#platform;
  }

  /**
   * Setter to set platform
   *
   * @static
   * @param {*} newValue value to set
   */
  static setPlatform(newValue) {
    this.#platform = newValue;
  }

  /**
   * Getter to get custom log level
   *
   * @static
   * @returns {string}
   */
  static getCustomLogLevel() {
    return this.#customLogLevel;
  }

  /**
   * Setter to set custom log level
   *
   * @static
   * @param {*} newValue value to set
   */
  static setCustomLogLevel(newValue) {
    this.#customLogLevel = newValue;
  }

  /**
   * Getter to get custom page load timeout
   *
   * @static
   * @returns {string}
   */
  static getCustomPageLoadTimeout() {
    return this.#customPageLoadTimeout;
  }

  /**
   * Setter to set custom page load timeout
   *
   * @static
   * @param {*} newValue value to set
   */
  static setCustomPageLoadTimeout(newValue) {
    this.#customPageLoadTimeout = newValue;
  }

  /**
   * Getter to get custom object load timeout
   *
   * @static
   * @returns {string}
   */
  static getCustomObjectLoadTimeout() {
    return this.#customObjectLoadTimeout;
  }

  /**
   * Setter to set custom object load timeout
   *
   * @static
   * @param {*} newValue value to set
   */
  static setCustomObjectLoadTimeout(newValue) {
    this.#customObjectLoadTimeout = newValue;
  }

  /**
   * Getter to get custom pause
   *
   * @static
   * @returns {string}
   */
  static getCustomPause() {
    return this.#customPause;
  }

  /**
   * Setter to set custom pause
   *
   * @static
   * @param {*} newValue value to set
   */
  static setCustomPause(newValue) {
    this.#customPause = newValue;
  }
}
export default GlobalVariables;
