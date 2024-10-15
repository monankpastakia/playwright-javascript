import Logger from "../logger/Logger";
import GlobalVariables from "../utils/GlobalVariables";
import StringReader from "../utils/StringReader";

/**
 * Parent POM class which contains some common functions which can be use on its child POM classes
 *
 * @class BasePage
 * @typedef {BasePage}
 */
class BasePage {
  /**
   * Creates an instance of BasePage.
   *
   * @constructor
   * @param {import("@playwright/test").Page} page
   */
  constructor(page) {
    this.page = page;
    this.logger = new Logger(`BasePage.js`);
    this.stringReader = new StringReader();
  }

  /**
   * Check if Page is opened
   *
   * @async
   * @returns @see {boolean} true if visible, otherwise false
   */
  async isOpened() {
    try {
      this.logger.info(`Checking if page is opened`, `isOpened`);
      return await this.page.isVisible();
    } catch (error) {
      this.logger.error(`Error Occurred: ${error}`, `isOpened`);
    }
  }

  /**
   * Get Page title
   *
   * @async
   * @returns @see {String | null}
   */
  async getPageTitle() {
    try {
      this.logger.info(`Getting page title`, `getPageTitle`);
      return await this.page.title();
    } catch (error) {
      this.logger.error(`Error Occurred: ${error}`, `getPageTitle`);
      return null;
    }
  }

  /**
   * Get Page URL
   *
   * @async
   * @returns @see {String | null}
   */
  async getPageUrl() {
    try {
      this.logger.info(`Getting page url`, `getPageUrl`);
      return this.page.url().trim();
    } catch (error) {
      this.logger.error(`Error Occurred: ${error}`, `getPageUrl`);
      return null;
    }
  }

  /**
   * Go Back on the page
   *
   * @async
   * @param {number} [numberOfTimes=1] - times to go back
   * @param {number} [pause=GlobalVariables.getCustomPause()] - time to pause after
   */
  async goBack(numberOfTimes = 1, pause = GlobalVariables.getCustomPause()) {
    try {
      this.logger.info(`Going back ${numberOfTimes} times`, `goBack`);
      for (let i = 0; i < numberOfTimes; i++) {
        await this.page.goBack();
        await this.page.waitForTimeout(pause);
      }
    } catch (error) {
      this.logger.error(`Error Occurred: ${error}`, `goBack`);
    }
  }
}
export default BasePage;
