import Logger from "../logger/Logger";
import Constant from "../utils/Constant";
import GlobalVariables from "../utils/GlobalVariables";
const logger = new Logger(`Hooks.js`);

/**
 * Hooks class to manage all pre-hooks before executing test script
 *
 * @class Hooks
 * @typedef {Hooks}
 */
class Hooks {
  /**
   * Manage any necessary step or configuration which need to be done before all test scripts execution start
   *
   * @static
   * @async
   */
  static async beforeAll() {
    logger.info(`beforeAll hook`, `beforeAll`);
  }
  /**
   * Manage any necessary step or configuration which need to be done before each test script execution starts
   *
   * @static
   * @async
   * @param {import("@playwright/test").Page} page
   */
  static async beforeEach(page) {
    try {
      logger.info(`Open the browser`, `beforeEach`);
      await page.setViewportSize({ width: 1920, height: 1080 });
      await page.goto("");
      await page.waitForLoadState("load", {
        timeout: GlobalVariables.getCustomPageLoadTimeout(),
      });
      await page.waitForTimeout(Constant.PAUSE.FIVE_SECONDS);
    } catch (error) {
      logger.error(`Error Occurred while opening browser. Error: ${error}`, `beforeEach`);
    }
  }
  /**
   * Manage any necessary step or configuration which need to be done after each test script execution finishes
   *
   * @static
   * @async
   * @param {import("@playwright/test").Page} page
   */
  static async afterEach(page) {
    logger.info(`afterEach hook`, `afterEach`);
    await page.close();
  }
  /**
   * Manage any necessary step or configuration which need to be done after all test scripts execution finish
   *
   * @static
   * @async
   * @param {import("@playwright/test").Page} page
   */
  static async afterAll(page) {
    logger.info(`afterAll hook`, `afterAll`);
    await page.close();
  }
}
export default Hooks;
