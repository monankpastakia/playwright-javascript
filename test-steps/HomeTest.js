import Logger from "../logger/Logger";
import BaseTest from "./BaseTest";
import Expect from "../utils/Expect";
import GlobalVariables from "../utils/GlobalVariables";

/**
 * HomeTest class which extends BaseTest parent class
 * HomeTest class only contains all test functions related to home page only.
 *
 * @class HomeTest
 * @typedef {HomeTest}
 * @extends {BaseTest}
 */
class HomeTest extends BaseTest {
  /**
   * Creates an instance of HomeTest.
   *
   * @constructor
   * @param {import("@playwright/test").Page} page
   */
  constructor(page) {
    super(page);
    this.page = page;
    this.logger = new Logger(`HomeTest.js`);
  }
  /**
   * Verify home page is opened
   *
   * @async
   * @returns {*}
   */
  async verifyHomePageOpened() {
    try {
      this.logger.info(`Verify Home page is opened`, `verifyHomePageOpened`);
      const isOpened = await this.homePage.isOpened(GlobalVariables.getCustomObjectLoadTimeout());
      Expect.validateBoolean(isOpened, true);
    } catch (error) {
      this.logger.error(`Error occurred verifying home page. Error: ${error}`, `verifyHomePageOpened`);
    }
  }

  /**
   * Verify home page title
   *
   * @async
   * @returns {*}
   */
  async verifyHomePageTitle() {
    try {
      this.logger.info(`Verify Home page title is correct`, `verifyHomePageTitle`);
      const title = await this.homePage.getPageTitle();
      Expect.validateTitle(title, this.homePage.getStrings().pageTitle);
    } catch (error) {
      this.logger.error(`Error occurred verifying home page title. Error: ${error}`, `verifyHomePageTitle`);
    }
  }

  /**
   * Click Get Started button on home page
   *
   * @async
   * @returns {*}
   */
  async clickGetStartedButton() {
    try {
      this.logger.info(`Click Get Started button`, `clickGetStartedButton`);
      await this.homePage.clickGetStartedButton();
    } catch (error) {
      this.logger.error(`Error occurred clicking Get Started button. Error: ${error}`, `clickGetStartedButton`);
    }
  }
}
export default HomeTest;
