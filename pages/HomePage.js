import MobileElement from "../element/MobileElement";
import Logger from "../logger/Logger";
import GlobalVariables from "../utils/GlobalVariables";
import LocatorReader from "../utils/LocatorReader";
import Utilities from "../utils/Utilities";
import BasePage from "./BasePage";

/**
 * HomePage POM child class which extends BasePage parent class
 * It contains all the Home page's element related functions
 *
 * @class HomePage
 * @typedef {HomePage}
 * @extends {BasePage}
 */
class HomePage extends BasePage {
  constructor(page) {
    super(page);
    this.logger = new Logger(`HomePage.js`);
    this.locatorReader = new LocatorReader(`homePage`);
  }
  getStrings() {
    return this.stringReader.getPageStrings(GlobalVariables.getLocale(), `homePage`);
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
   * Get hero banner object
   *
   * @async
   * @returns @see {MobileElement | null} - MobileElement object
   */
  #getHeroBanner() {
    let selector;
    try {
      this.logger.info(`Get Hero Banner object`, `getHeroBanner`);
      selector = this.locatorReader.getLocator(`heroBanner`);
      return Utilities.isUndefined(selector) ? null : new MobileElement(this.page, selector);
    } catch (error) {
      this.logger.error(`Error Occurred: getting Hero Banner object. selector: ${selector} \nError: ${error}`, `getHeroBanner`);
      return null;
    }
  }

  /**
   * Get Hero title object
   *
   * @async
   * @returns @see {MobileElement | null} - MobileElement object
   */
  #getHeroTitle() {
    let selector;
    try {
      this.logger.info(`Get Hero Title object`, `getHeroTitle`);
      selector = this.locatorReader.getLocator(`heroTitle`);
      return Utilities.isUndefined(selector) ? null : new MobileElement(this.page, selector);
    } catch (error) {
      this.logger.error(`Error Occurred: getting Hero Title object. selector: ${selector} \nError: ${error}`, `getHeroTitle`);
      return null;
    }
  }

  /**
   * Get get start button object
   *
   * @async
   * @returns @see {MobileElement | null} - MobileElement object
   */
  #getGetStartedBtn() {
    let selector;
    try {
      this.logger.info(`Get Started Button object`, `getGetStartedBtn`);
      selector = this.locatorReader.getLocator(`getStartedBtn`);
      return Utilities.isUndefined(selector) ? null : new MobileElement(this.page, selector);
    } catch (error) {
      this.logger.error(`Error Occurred: getting Started Button object. selector: ${selector} \nError: ${error}`, `getGetStartedBtn`);
      return null;
    }
  }

  /**
   * Check if Home page is opened or not
   *
   * @async
   * @param {number} [timeout=GlobalVariables.getCustomObjectLoadTimeout()] - time to wait for
   * @returns @see {boolean} - true if opened, otherwise false
   */
  async isOpened(timeout = GlobalVariables.getCustomObjectLoadTimeout()) {
    try {
      this.logger.info(`Check if the page is opened within timeout: ${timeout}`, `isOpened`);
      if ((await this.#getContainer().waitForVisibility(timeout)) && (await this.#getHeroBanner().waitForVisibility(timeout)) && (await this.#getHeroTitle().waitForVisibility(timeout)) && (await this.#getGetStartedBtn().waitForVisibility(timeout))) {
        return true;
      } else {
        return false;
      }
    } catch (error) {
      this.logger.error(`Error Occurred: checking if the page is opened. \nError:${error}`, `isOpened`);
      return false;
    }
  }

  /**
   * Click on the Get Started button
   *
   * @async
   * @param {number} [timeout=GlobalVariables.getCustomObjectLoadTimeout()] - time to wait for
   * @param {number} [pause=GlobalVariables.getCustomPause()] - time to pause after
   */
  async clickGetStartedButton(timeout = GlobalVariables.getCustomObjectLoadTimeout(), pause = GlobalVariables.getCustomPause()) {
    try {
      this.logger.info(`Click on Get Started Button`, `clickGetStartedButton`);
      await this.#getGetStartedBtn().click(timeout, pause);
    } catch (error) {
      this.logger.error(`Error Occurred: clicking on get started button. \nError:${error}`, `clickGetStartedButton`);
    }
  }
}
export default HomePage;
