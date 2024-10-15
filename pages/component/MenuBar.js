import MobileElement from "../../element/MobileElement";
import Logger from "../../logger/Logger";
import GlobalVariables from "../../utils/GlobalVariables";
import LocatorReader from "../../utils/LocatorReader";
import Utilities from "../../utils/Utilities";

/**
 * MenuBar component class which is common for different POM classes
 *
 * @class MenuBar
 * @typedef {MenuBar}
 */
class MenuBar {
  /**
   * Creates an instance of MenuBar.
   *
   * @constructor
   * @param {import("@playwright/test").Page} page
   */
  constructor(page) {
    this.page = page;
    this.logger = new Logger(`NavBar.js`);
    this.locatorReader = new LocatorReader(`menuBar`);
  }
  /**
   * Get container object
   *
   * @async
   * @returns @see {MobileElement | null} - MobileElement object
   */
  #getContainer() {
    let selector;
    try {
      this.logger.info(`Get Container object`, `getContainer`);
      selector = this.locatorReader.getLocator(`container`);
      return Utilities.isUndefined(selector) ? null : new MobileElement(this.page, selector);
    } catch (error) {
      this.logger.error(`Error Occurred: getting Container object. selector: ${selector} \nError: ${error}`, `getContainer`);
      return null;
    }
  }

  /**
   * Get logo object
   *
   * @async
   * @returns @see {MobileElement | null} - MobileElement object
   */
  #getLogo() {
    let selector;
    try {
      this.logger.info(`Get Logo object`, `getLogo`);
      selector = this.locatorReader.getLocator(`logo`);
      return Utilities.isUndefined(selector) ? null : new MobileElement(selector);
    } catch (error) {
      this.logger.error(`Error Occurred: getting Logo object. selector: ${selector} \nError: ${error}`, `getLogo`);
      return null;
    }
  }

  /**
   * Get title object
   *
   * @async
   * @returns @see {MobileElement | null} - MobileElement object
   */
  #getTitle() {
    let selector;
    try {
      this.logger.info(`Get Title object`, `getTitle`);
      selector = this.locatorReader.getLocator(`playwright`);
      return Utilities.isUndefined(selector) ? null : new MobileElement(selector);
    } catch (error) {
      this.logger.error(`Error Occurred: getting Title object. selector: ${selector} \nError: ${error}`, `getTitle`);
      return null;
    }
  }

  /**
   * Get Menu list object
   *
   * @async
   * @returns @see {MobileElement | null} - MobileElement object
   */
  #getMenuList() {
    let selector;
    try {
      this.logger.info(`Get Menu objects`, `getMenuList`);
      selector = this.locatorReader.getLocator(`menus`);
      return Utilities.isUndefined(selector) ? null : new MobileElement(selector);
    } catch (error) {
      this.logger.error(`Error Occurred: getting Menu objects. selector: ${selector} \nError: ${error}`, `getMenuList`);
      return null;
    }
  }

  /**
   * Check if Menu bar is loaded or not on the page
   *
   * @async
   * @param {Number} [timeout=GlobalVariables.getCustomObjectLoadTimeout()] - timeout to wait for
   * @returns @see {boolean} true if loaded otherwise false
   */
  async isLoaded(timeout = GlobalVariables.getCustomObjectLoadTimeout()) {
    try {
      this.logger.info(`Check if the menu bar is loaded within timeout: ${timeout}`, `isLoaded`);
      if ((await this.#getContainer().waitForVisibility(timeout)) && (await this.#getLogo().waitForVisibility(timeout)) && (await this.#getTitle().waitForVisibility(timeout)) && (await this.#getMenuList().waitForVisibility(timeout))) {
        return true;
      } else {
        return false;
      }
    } catch (error) {
      this.logger.error(`Error Occurred: checking if the menu bar is loaded. \nError:${error}`, `isLoaded`);
      return false;
    }
  }
}
export default MenuBar;
