import Logger from "../logger/Logger";
import BasePage from "../pages/BasePage";
import HomePage from "../pages/HomePage";

/**
 * BaseTest is parent class which can contains all the common test script related functions
 * and POM class object initialization
 *
 * @class BaseTest
 * @typedef {BaseTest}
 */
class BaseTest {
  /**
   * Creates an instance of BaseTest.
   *
   * @constructor
   * @param {import("@playwright/test").Page} page
   */
  constructor(page) {
    this.page = page;
    this.logger = new Logger(`BaseTest.js`);
    this.#initPages();
  }

  /** Initialize all the POM class objects */
  #initPages() {
    this.basePage = new BasePage(this.page);
    this.homePage = new HomePage(this.page);
  }
}
export default BaseTest;
